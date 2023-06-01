export const roof_sf = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const roof1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/roof/right.roof1.geojson.json",
  });

  const roof2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/roof/right.roof2.geojson.json",
  });

  const roof3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/roof/right.roof3.geojson.json",
  });

  const roof4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/roof/right.roof4.geojson.json",
  });

  roof1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };

  roof2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };

  roof3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };

  roof4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#ab864a",
          },
        },
      ],
    },
  };

  return [roof1, roof2, roof3, roof4];
};
