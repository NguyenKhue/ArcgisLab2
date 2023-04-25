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
      distance = Math.acos(Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon)) * radius;

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
    var
      radius = 6371e3, // meters
      δ = Number(distance) / radius, // angular distance in radians
      θ = gis.toRad(Number(bearing));
    φ1 = gis.toRad(coord[1]),
      λ1 = gis.toRad(coord[0]);

    var φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) +
      Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));

    var λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
      Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));
    // normalise to -180..+180°
    λ2 = (λ2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

    return [gis.toDeg(λ2), gis.toDeg(φ2)];
  },
  /**
   * All coordinates expected EPSG:4326
   * @param {Array} start Expected [lon, lat]
   * @param {Array} end Expected [lon, lat]
   * @return {number} Bearing in degrees.
   */
  getBearing: function (start, end) {
    var
      startLat = gis.toRad(start[1]),
      startLong = gis.toRad(start[0]),
      endLat = gis.toRad(end[1]),
      endLong = gis.toRad(end[0]),
      dLong = endLong - startLong;

    var dPhi = Math.log(Math.tan(endLat / 2.0 + Math.PI / 4.0) /
      Math.tan(startLat / 2.0 + Math.PI / 4.0));

    if (Math.abs(dLong) > Math.PI) {
      dLong = (dLong > 0.0) ? -(2.0 * Math.PI - dLong) : (2.0 * Math.PI + dLong);
    }

    return (gis.toDeg(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
  },
  toDeg: function (n) { return n * 180 / Math.PI; },
  toRad: function (n) { return n * Math.PI / 180; },


  // vẽ hình tròn
  getCircleCoordinates: function (center, radius) {
    var coordinates = [];
    var numPoints = 32;

    for (var i = 0; i < numPoints; i++) {
      var angle = (i / numPoints) * Math.PI * 2;
      var x = center[0] + radius * Math.cos(angle);
      var y = center[1] + radius * Math.sin(angle);
      coordinates.push([x, y]);
    }

    return coordinates;
  },
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
  }

};

var start = [
  107.579341,
  16.467700
];
var end = [
  107.579292,
  16.467761
];
var bearing = gis.getBearing(start, end);
var point = [107.57946100754326, 16.46778500534316,]
var new_coord = gis.createCoord(point, bearing, 0.5);
console.log(bearing)
console.log(new_coord)

// check result
var center = [10, 10];
var radius = 5;
var circleCoords = getCircleCoordinates(center, radius);
console.log(circleCoords);