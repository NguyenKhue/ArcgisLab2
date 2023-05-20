export const left_building_right_left_pillar = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const leftBuildingRightPillar = new GeoJSONLayer({
    url: "./data/leftBuilding/pillar/left_pillar/left_building.right.pillar1.geojson.json",
  });

  leftBuildingRightPillar.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5,
          material: {
            color: "#838b94",
          },
        },
      ],
    },
  };
  return [leftBuildingRightPillar];
};
