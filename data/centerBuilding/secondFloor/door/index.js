export const door_SF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const door1GeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/door/FDoor/door1.geojson.json",
  });
  const door1decovertGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/door/FDoor/door1decovert.geojson.json",
  });
  const door1decohoriGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/door/FDoor/door1decohori.geojson.json",
  });
  const door2GeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/door/FDoor/door2.geojson.json",
  });

  door1GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "#6b1f1f",
          },
        },
      ],
    },
  };
  door1decovertGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door1decohoriGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  door2GeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2,
          material: {
            color: "#6b1f1f",
          },
        },
      ],
    },
  };

  return [door1GeojsonLayer, door1decovertGeojsonLayer, door1decohoriGeojsonLayer, door2GeojsonLayer];
};
