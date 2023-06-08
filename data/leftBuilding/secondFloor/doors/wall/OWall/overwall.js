export const overwall = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const overwall1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Owall/overwall1.geojson.json",
  });

  const overwall2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Owall/overwall2.geojson.json",
  });

  const overwall3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Owall/overwall3.geojson.json",
  });

  const overwall4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Owall/overwall4.geojson.json",
  });

  const overwall5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Owall/overwall5.geojson.json",
  });

  overwall1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };

  overwall2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };

  overwall3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };

  overwall4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };

  overwall5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#bb853a",
          },
        },
      ],
    },
  };

  return [overwall1, overwall2, overwall3, overwall4, overwall5];
};
