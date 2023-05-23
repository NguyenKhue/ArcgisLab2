import { left_building_cols } from "./columns/column.js";

export const leftBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const leftBuildingCols = left_building_cols(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [...leftBuildingCols];
};
