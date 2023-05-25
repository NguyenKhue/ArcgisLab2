import { right_building_cols } from "./columns/column.js";
import { right_building_floor1 } from "./floor/right.building.floor1.js";
import { right_building_cols2 } from "./secondFloor/columns/index.js";
import { wall_rail } from "./rails/rail.js";
import { roof_RB } from "./roof/index.js";
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
  const rightBuildingCols2 = right_building_cols2(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const wallRail = wall_rail(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const roofRB = roof_RB(
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
    ...rightBuildingFloor1,
    ...rightBuildingCols2,
    ...wallRail,
    ...roofRB,
  ];
};
