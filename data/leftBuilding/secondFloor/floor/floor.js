export const floor_sf = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const floorGeojsonLayer = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/floor/floor.geojson.json",
  });

  floorGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "#551610",
          },
        },
      ],
    },
  };

  return [floorGeojsonLayer];
};
