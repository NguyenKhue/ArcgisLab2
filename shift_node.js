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
  getCircleCoordinates: function (center, radius, numCoordinates) {
    const centerLon = center[0];
    const centerLat = center[1];

    // Độ dài của một độ kinh tuyến tại vị trí latitude
    var oneDegreeLength = 111320 * Math.cos((centerLat * Math.PI) / 180);

    // Chuyển đổi bán kính từ mét sang độ
    var radiusDegrees = radius / oneDegreeLength;

    var coordinates = [];
    var angleIncrement = 360 / numCoordinates;

    for (var i = 0; i < numCoordinates; i++) {
      var angle = i * angleIncrement;
      var lon = centerLon + radiusDegrees * Math.cos((angle * Math.PI) / 180);
      var lat = centerLat + radiusDegrees * Math.sin((angle * Math.PI) / 180);
      coordinates.push([lon, lat]);
    }

    return coordinates;
  },

  Circle: function (center, radius, numCoordinates) {
    const centerLon = center[0];
    const centerLat = center[1];

    // Độ dài của một độ kinh tuyến tại vị trí latitude
    var oneDegreeLength = 111320 * Math.cos(centerLat * Math.PI / 180);

    // Chuyển đổi bán kính từ mét sang độ
    var radiusDegrees = radius / oneDegreeLength;

    var coordinates = [];
    var angleIncrement = 360 / numCoordinates;

    for (var i = 0; i < numCoordinates; i++) {
      var angle = i * angleIncrement;
      var lon = centerLon + (radiusDegrees * Math.cos(angle * Math.PI / 180));
      var lat = centerLat + (radiusDegrees * Math.sin(angle * Math.PI / 180));
      coordinates.push([lon, lat]);
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
  },

  // tạo đường cong
  getParabolicCurveCoordinates: function (
    startPoint,
    endPoint,
    height,
    numPoints,
    option
  ) {
    var bearing = gis.getBearing(startPoint, endPoint);
    var point = gis.getMidPoint(startPoint, endPoint);
    var controlPoint = gis.createCoord(point, bearing + option, height);

    var coordinates = [];

    for (var i = 0; i <= numPoints; i++) {
      var t = i / numPoints;
      var x =
        Math.pow(1 - t, 2) * startPoint[0] +
        2 * (1 - t) * t * controlPoint[0] +
        Math.pow(t, 2) * endPoint[0];
      var y =
        Math.pow(1 - t, 2) * startPoint[1] +
        2 * (1 - t) * t * controlPoint[1] +
        Math.pow(t, 2) * endPoint[1];
      coordinates.push([x, y]);
    }

    return coordinates;
  },

  // vẽ hình cổng

  calculate3DParabolicCurve: function (
    startPoint,
    endPoint,
    height,
    numPoints
  ) {
    var coordinates = [];

    var startX = startPoint[0];
    var startY = startPoint[1];
    var startZ = startPoint[2];
    var endX = endPoint[0];
    var endY = endPoint[1];
    var endZ = endPoint[2];
    var controlX = (startX + endX) / 2;
    var controlY = (startY + endY) / 2;
    var controlZ = startZ + height;

    for (var i = 0; i <= numPoints; i++) {
      var t = i / numPoints;
      var x =
        (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
      var y =
        (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;
      var z =
        (1 - t) * (1 - t) * startZ + 2 * (1 - t) * t * controlZ + t * t * endZ;
      coordinates.push([x, y, z]);
    }

    return coordinates;
  },

  // Hàm chuyển đổi độ sang radian
  toRadians: function (degrees) {
    return degrees * (Math.PI / 180);
  },

  // lấy trung điểm
  getMidPoint: function (coord1, coord2) {
    var midX = (coord1[0] + coord2[0]) / 2;
    var midY = (coord1[1] + coord2[1]) / 2;
    return [midX, midY];
  },
};

var start = [107.579341, 16.4677];
var end = [107.57946100754326, 16.46778500534316];
var bearing = gis.getBearing(start, end);
var point = [107.57946100754326, 16.46778500534316];
var new_coord = gis.createCoord(point, bearing, 10);

var arr = [
  [107.579341, 16.4677, 0],
  [107.57946100754326, 16.46778500534316, 0],
];
var new_coords = gis.createCoords(arr, bearing, 17);
//console.log(new_coords);
// check result
// var initialRadius = 10;
// var radius = 6371e3; // meters
// var circleRadius = Number(initialRadius) / 111319; // chuyển đổi bán kính sang đơn vị radians
// console.log("Curve1", circleRadius);
var center = [106.722097635, 10.794350097];
var circleCoords = gis.getCircleCoordinates(center, 30, 100);
console.log("circle", circleCoords);

var st = [106.721010762, 10.794179897, 0];
var en = [106.721209552, 10.794318368, 0];
var controlPoint = [106.721176602, 10.794182706];
var step = 50;

// số cuooisd nhập -90 hoặc 90 nha
var Curve = gis.getParabolicCurveCoordinates(st, en, 50, step, -90);
var test = gis.calculate3DParabolicCurve(st, en, 5, step);
// console.log("Curve", Curve);
// console.log("test", test);
var new_coords = gis.createCoords(arr, bearing - 90, 5);
// console.log(new_coords);
// check result
var initialRadius = 17;
var circleRadius = Number(initialRadius) / 111319;
var center = [106.721748628, 10.794689836];
var circleCoords = gis.getCircleCoordinates(center, circleRadius);
// console.log("circle", circleCoords);

function showNotification() {
  let toast = document.getElementById("notification_functions");
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}

function getCircleCoordinates() {
  let coordinateInput = document.getElementById("coordinateInput").value;
  let radiusInput = document.getElementById("radiusInput").value;
  let coordinateZInput = document.getElementById("coordinateZInput").value;

  let coordinateArray = coordinateInput.split(",");
  var numPoints = 100;
  let x = Number(coordinateArray[0].slice(1, coordinateArray[0].length));
  let y = Number(coordinateArray[1].slice(0, -1));

  let coordinates = gis.getCircleCoordinates(
    [x, y],
    Number(radiusInput),
    numPoints
  );

  let textToCopy = "[";
  coordinates.forEach((item) => {
    textToCopy += "[" + item.join(",") + "],";
  });
  textToCopy = textToCopy.slice(0, -1) + "]";

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => console.log("Array copied to clipboard"))
    .catch((error) =>
      console.error("Error copying array to clipboard:", error)
    );
  showNotification();
}

function getShiftNode() {
  let coordinateAInput = document
    .getElementById("coordinateAInput")
    .value.trim()
    .slice(1, -1)
    .split(",");
  let coordinateBInput = document
    .getElementById("coordinateBInput")
    .value.trim()
    .slice(1, -1)
    .split(",");
  let coordinateXInput = document
    .getElementById("coordinateXInput")
    .value.trim()
    .slice(1, -1)
    .split(",");
  let angle = Number(document.getElementById("angleInput").value);
  let distance = Number(document.getElementById("distanceInput").value);

  let start = [Number(coordinateAInput[0]), Number(coordinateAInput[1])];
  let end = [Number(coordinateBInput[0]), Number(coordinateBInput[1])];
  let bearing = gis.getBearing(start, end);
  let point = [];
  let coordinate = [];
  console.log(coordinateXInput);
  for (let i = 0; i < coordinateXInput.length; i = i + 2) {
    if (coordinateXInput.length > 2) {
      coordinate = [
        Number(coordinateXInput[i].trim().slice(1, coordinateXInput[i].length)),
        Number(coordinateXInput[i + 1].trim().slice(0, -1)),
      ];
      console.log(
        Number(coordinateXInput[i].trim().slice(0, coordinateXInput[i].length))
      );
      console.log(Number(coordinateXInput[i + 1].trim().slice(0, -1)));
      point.push(coordinate);
    } else {
      point.push(Number(coordinateXInput[i].trim()));
      point.push(Number(coordinateXInput[i + 1].trim()));
    }
  }
  let new_coord = 0;
  if (coordinateXInput.length > 2) {
    new_coord = gis.createCoords(point, bearing + angle, distance);
  } else {
    new_coord = gis.createCoord(point, bearing + angle, distance);
  }
  console.log(new_coord);

  let textToCopy = "[";
  if (coordinateXInput.length > 2) {
    new_coord.forEach((item) => {
      textToCopy += "[" + item.join(",") + "],";
    });
    textToCopy = textToCopy.slice(0, -1) + "]";
  } else {
    textToCopy += new_coord.join(",") + "]";
  }

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => console.log("Array copied to clipboard"))
    .catch((error) =>
      console.error("Error copying array to clipboard:", error)
    );
  showNotification();
}

var start = [107.579341, 16.4677];
var end = [107.57946100754326, 16.46778500534316];
var bearing = gis.getBearing(start, end);
// console.log(bearing);
var point = [107.57946100754326, 16.46778500534316];
var new_coord = gis.createCoord(point, bearing, 10);

var arr = [
  [107.579341, 16.4677, 0],
  [107.57946100754326, 16.46778500534316, 0],
];
var new_coords = gis.createCoords(arr, bearing - 90, 5);
// console.log(new_coords);
// check result
var initialRadius = 17;
var circleRadius = Number(initialRadius) / 111319;
var center = [106.721748628, 10.794689836];
var circleCoords = gis.getCircleCoordinates(center, circleRadius);
// console.log("circle", circleCoords);

var st = [106.722097635, 10.794350097];
var en = [106.72232592160728, 10.794500108138244];
// var controlPoint = [106.721176602, 10.794182706];
var step = 50;

// số cuooisd nhập -90 hoặc 90 nha
var Curve = gis.getParabolicCurveCoordinates(st, en, 50, step, 90);
// // console.log("Curve", Curve);
