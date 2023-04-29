var gis = {
  /**
   * All coordinates expected EPSG:4326
   * @param {Array} start Expected [lon, lat]
   * @param {Array} end Expected [lon, lat]
   * @return {number} Distance - meter.
   */
  calculateDistance: function (start, end) {
    var lat1 = parseFloat(start[1]),
      lon1 = parseFloat(start[0]),
      lat2 = parseFloat(end[1]),
      lon2 = parseFloat(end[0]);

    return gis.sphericalCosinus(lat1, lon1, lat2, lon2);
  },

  /**
   * All coordinates expected EPSG:4326
   * @param {number} lat1 Start Latitude
   * @param {number} lon1 Start Longitude
   * @param {number} lat2 End Latitude
   * @param {number} lon2 End Longitude
   * @return {number} Distance - meters.
   */
  sphericalCosinus: function (lat1, lon1, lat2, lon2) {
    var radius = 6371e3; // meters
    var dLon = gis.toRad(lon2 - lon1),
      lat1 = gis.toRad(lat1),
      lat2 = gis.toRad(lat2),
      distance =
        Math.acos(
          Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon)
        ) * radius;

    return distance;
  },

  /**
   * @param {Array} coord Expected [lon, lat] EPSG:4326
   * @param {number} bearing Bearing in degrees
   * @param {number} distance Distance in meters
   * @return {Array} Lon-lat coordinate.
   */
  createCoord: function (coord, bearing, distance) {
    /** http://www.movable-type.co.uk/scripts/latlong.html
     * φ is latitude, λ is longitude,
     * θ is the bearing (clockwise from north),
     * δ is the angular distance d/R;
     * d being the distance travelled, R the earth’s radius*
     **/
    var radius = 6371e3, // meters
      δ = Number(distance) / radius, // angular distance in radians
      θ = gis.toRad(Number(bearing));
    (φ1 = gis.toRad(coord[1])), (λ1 = gis.toRad(coord[0]));

    var φ2 = Math.asin(
      Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ)
    );

    var λ2 =
      λ1 +
      Math.atan2(
        Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
        Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2)
      );
    // normalise to -180..+180°
    λ2 = ((λ2 + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;

    return [gis.toDeg(λ2), gis.toDeg(φ2)];
  },
  /**
   * All coordinates expected EPSG:4326
   * @param {Array} start Expected [lon, lat]
   * @param {Array} end Expected [lon, lat]
   * @return {number} Bearing in degrees.
   */
  getBearing: function (start, end) {
    var startLat = gis.toRad(start[1]),
      startLong = gis.toRad(start[0]),
      endLat = gis.toRad(end[1]),
      endLong = gis.toRad(end[0]),
      dLong = endLong - startLong;

    var dPhi = Math.log(
      Math.tan(endLat / 2.0 + Math.PI / 4.0) /
        Math.tan(startLat / 2.0 + Math.PI / 4.0)
    );

    if (Math.abs(dLong) > Math.PI) {
      dLong = dLong > 0.0 ? -(2.0 * Math.PI - dLong) : 2.0 * Math.PI + dLong;
    }

    return (gis.toDeg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
  },
  toDeg: function (n) {
    return (n * 180) / Math.PI;
  },
  toRad: function (n) {
    return (n * Math.PI) / 180;
  },

  // vẽ hình tròn
  getCircleCoordinates: function (center, radius, hight) {
    var coordinates = [];
    var numPoints = 32;

    for (var i = 0; i < numPoints; i++) {
      var angle = (i / numPoints) * Math.PI * 2;
      var x = center[0] + radius * Math.cos(angle);
      var y = center[1] + radius * Math.sin(angle);
      coordinates.push([x, y,hight]);
    }

    return coordinates;
  },

  //   getCircleCoordinates: function (center, radiusInMeters, numPoints) {
  //     var radiusInRadians = radiusInMeters / 6371000; // chuyển sang đơn vị radians
  //     var coords = [];
  //     for (var i = 0; i < numPoints; i++) {
  //       var theta = Math.PI * (i / (numPoints / 2));
  //       var x = radiusInRadians * Math.cos(theta);
  //       var y = radiusInRadians * Math.sin(theta);
  //       var lng = parseFloat(center[0]) + x / Math.cos(parseFloat(center[0]));
  //       var lat = parseFloat(center[1]) + y;
  //       coords.push([lng, lat]);
  //     }
  //     return coords;
  //   },
  // dịch chuyển 1 lúc nhiều điểm với
  createCoords: function (coords, bearing, distance) {
    var newCoords = [];

    // Tính toán các tọa độ mới
    for (var i = 0; i < coords.length; i++) {
      var coord = coords[i];
      var newCoord = gis.createCoord(coord, bearing, distance);
      newCoords.push(newCoord);
      bearing = gis.getBearing(coord, newCoord);
    }

    return newCoords;
  },

  // tạo đường cong
   getParabolicCurveCoordinates: function(startPoint, endPoint, height, numPoints,option) {

    var bearing = gis.getBearing(startPoint, endPoint);
    var point = gis.getMidPoint(startPoint,endPoint)
    var controlPoint = gis.createCoord(point, (bearing + option), height);
    
    var coordinates = [];
    
    for (var i = 0; i <= numPoints; i++) {
      var t = i / numPoints;
      var x = Math.pow(1 - t, 2) * startPoint[0] + 2 * (1 - t) * t * controlPoint[0] + Math.pow(t, 2) * endPoint[0];
      var y = Math.pow(1 - t, 2) * startPoint[1] + 2 * (1 - t) * t * controlPoint[1] + Math.pow(t, 2) * endPoint[1];
      coordinates.push([x, y]);
    }
    
    return coordinates;
  },
  

   // Hàm chuyển đổi độ sang radian
 toRadians: function(degrees) {
  return degrees * (Math.PI / 180);
},

// lấy trung điểm
 getMidPoint: function(coord1, coord2) {
  var midX = (coord1[0] + coord2[0]) / 2;
  var midY = (coord1[1] + coord2[1]) / 2;
  return [midX, midY];
},
  
};

var start = [106.71970882, 10.795437047];
var end = [106.71984990958984, 10.795495488221626];
var bearing = gis.getBearing(start, end);
var point = [107.57946100754326, 16.46778500534316];
var new_coord = gis.createCoord(point, bearing, 10);

var arr = [
  [106.71986153427159, 10.795437047],
  [106.71985859990968, 10.795466840076422],
  [106.71984990958984, 10.795495488221626],
  [106.71983579727619, 10.795521890503457],
  [106.71981680529703, 10.795545032297031],
  [106.71979366350345, 10.7955640242762],
  [106.71976726122162, 10.795578136589851],
  [106.71973861307642, 10.795586826909691],
  [106.71970882, 10.795589761271598],
  [106.71967902692357, 10.795586826909691],
  [106.71965037877837, 10.795578136589851],
  [106.71962397649654, 10.7955640242762],
  [106.71960083470296, 10.795545032297031],
  [106.7195818427238, 10.795521890503457],
  [106.71956773041015, 10.795495488221626],
  [106.7195590400903, 10.795466840076422],
  [106.7195561057284, 10.795437047],
  [106.7195590400903, 10.795407253923578],
  [106.71956773041015, 10.795378605778374],
  [106.7195818427238, 10.795352203496543],
  [106.71960083470296, 10.795329061702969],
  [106.71962397649654, 10.7953100697238],
  [106.71965037877837, 10.795295957410149],
  [106.71967902692357, 10.795287267090309],
  [106.71970882, 10.795284332728402],
  [106.71973861307642, 10.795287267090309],
  [106.71976726122162, 10.795295957410149],
  [106.71979366350345, 10.7953100697238],
  [106.71981680529703, 10.795329061702969],
  [106.71983579727619, 10.795352203496543],
  [106.71984990958984, 10.795378605778374],
  [106.71985859990968, 10.795407253923578],
];
var new_coords = gis.createCoords(arr, bearing, 17);
//console.log(new_coords);
// check result
var initialRadius = 17;
var radius = 6371e3; // meters
var circleRadius = gis.toRadians(initialRadius);
var center = [106.71970882, 10.795437047];
var circleCoords = gis.getCircleCoordinates(center, circleRadius,10);
// console.log("circle", circleCoords);

var st = [106.721010762, 10.794179897]
var en = [106.721209552, 10.794318368]
var controlPoint = [106.721176602, 10.794182706]
var step = 50;

// số cuooisd nhập -90 hoặc 90 nha
var Curve = gis.getParabolicCurveCoordinates(st, en, 50 ,step,-90)
console.log("Curve", Curve);