import { left_building_cols_ff } from "./firstFloor/columns/column.js";
import { left_building_cols_sf } from "./secondFloor/columns/column.js";
import { floor_sf } from "./secondFloor/floor/floor.js";
import { wall_rail } from "./secondFloor/rails/rail.js";
import { roof_FF } from "./firstFloor/roof/roof.js";
import { roof_SF } from "./secondFloor/roof/index.js";
import { left_building_floor1 } from "./firstFloor/floor/left.building.floor1.js";
import { floor1_steps } from "./firstFloor/step/step.js";
import { floor1_walls } from "./firstFloor/walls/floor1_wall.js";
import { doorB_R } from "./secondFloor/doors/BDoor/index.js";
import { doorF_R } from "./secondFloor/doors/FDoor/index.js";
import { doorL_R } from "./secondFloor/doors/LDoor/index.js";
import { doorR_R } from "./secondFloor/doors/RDoor/index.js";

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

  const doorBR = doorB_R(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorFR = doorF_R(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorLR = doorL_R(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorRR = doorR_R(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const roofFF = roof_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const roofSF = roof_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const leftBuildingFloor1 = left_building_floor1(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floor1Steps = floor1_steps(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floor1Walls = floor1_walls(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [
    ...floor1Walls,
    ...floor1Steps,
    ...leftBuildingFloor1,
    ...leftBuildingColsFF,
    ...leftBuildingColsSF,
    ...floorSF,
    ...wallRail,
    ...doorBR,
    ...doorFR,
    ...doorLR,
    ...doorRR,
    ...roofFF,
    ...roofSF,
  ];
};
