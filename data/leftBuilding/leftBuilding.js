import { left_building_right_left_pillar } from "./pillar/left_pillar/left_building_right_left_pillar.js";

export const leftBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const leftBuildingRightLeftPillar = left_building_right_left_pillar(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [...leftBuildingRightLeftPillar];
};
