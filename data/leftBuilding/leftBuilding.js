import { left_building_cols_ff } from "./firstFloor/columns/column.js";
import { left_building_cols_sf } from "./secondFloor/columns/column.js";
import { floor_sf } from "./secondFloor/floor/floor.js";
import { wall_rail } from "./secondFloor/rails/rail.js";
import { underwall } from "./secondFloor/building/wall/UWall/underwall.js";
import { overwall } from "./secondFloor/building/wall/OWall/overwall.js";
import { deco } from "./secondFloor/building/wall/deco/deco.js";
import { roof_sf } from "./secondFloor/roof/roof.js";

export const leftBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const leftBuildingColsFF = left_building_cols_ff(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const leftBuildingColsSF = left_building_cols_sf(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floorSF = floor_sf(
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

  const underWall = underwall(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const overWall = overwall(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const decoWall = deco(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const roofSF = roof_sf(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [
    ...leftBuildingColsFF,
    ...leftBuildingColsSF,
    ...floorSF,
    ...wallRail,
    ...underWall,
    ...overWall,
    ...decoWall,
    ...roofSF,
  ];
};
