export const floor_SF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const floorGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/floor/floor.geojson.json",
  });

  floorGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  return [floorGeojsonLayer];
};
