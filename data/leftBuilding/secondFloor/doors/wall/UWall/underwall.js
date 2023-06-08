export const underwall = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const underwall1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Uwall/underwall1.geojson.json",
  });

  const underwall2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Uwall/underwall2.geojson.json",
  });

  const underwall3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Uwall/underwall3.geojson.json",
  });

  const underwall4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Uwall/underwall4.geojson.json",
  });

  const underwall5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/Uwall/underwall5.geojson.json",
  });

  underwall1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };

  underwall2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };

  underwall3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };

  underwall4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };

  underwall5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#a92f32",
          },
        },
      ],
    },
  };

  return [underwall1, underwall2, underwall3, underwall4, underwall5];
};
