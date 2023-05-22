import { right_building_cols } from "./columns/column.js";
import { right_building_floor1 } from "./floor/right.building.floor1.js";

export const rightBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const rightBuildingCols = right_building_cols(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const rightBuildingFloor1 = right_building_floor1(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [
    ...rightBuildingCols,
    ...rightBuildingFloor1
  ];
};
