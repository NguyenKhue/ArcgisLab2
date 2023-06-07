import { right_building_cols } from "./columns/column.js";
import { right_building_floor1 } from "./floor/right.building.floor1.js";
import { right_building_cols2 } from "./secondFloor/columns/index.js";
import { wall_rail } from "./rails/rail.js";
import { roof_RB } from "./roof/index.js";
import { roof_SF } from "./secondFloor/roof/index.js";
import { doorB_R } from "./door/BDoor/index.js";
import { doorR_R } from "./door/RDoor/index.js";
import { doorF_R } from "./door/FDoor/index.js";
import { doorL_R } from "./door/LDoor/index.js";
import { floor1_walls } from "./walls/floor1_wall.js";
import { floor1_steps } from "./step/step.js";

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
  const doorBR = doorB_R(
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

  const floor1Walls = floor1_walls(
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

  const roofSF = roof_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  return [
    // ...rightBuildingCols,
    // ...rightBuildingFloor1,
    ...rightBuildingCols2,
    ...wallRail,
    ...roofRB,
    ...doorBR,
    ...doorRR,
    ...doorFR,
    ...doorLR,
    ...roofSF,
    // ...floor1Walls,
    // ...floor1Steps,
  ];
};
