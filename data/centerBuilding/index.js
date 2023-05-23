import { center_building_cols_FF } from "./firstFloor/columns/column.js";
import { floor_SF } from "./secondFloor/floor/index.js";
import { column_SF } from "./secondFloor/column/index.js";
import { doorF_SF } from "./secondFloor/door/FDoor/index.js";
import { doorR_SF } from "./secondFloor/door/RDoor/index.js";
import { doorL_SF } from "./secondFloor/door/LDoor/index.js";
import { doorB_SF } from "./secondFloor/door/BDoor/index.js";
import { center_building_centers_FF } from "./firstFloor/center/center.js";
import { door_FF } from "./firstFloor/doors/door.js";

export const centerBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const centerBuildingColsFF = center_building_cols_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const centerBuildingCentersFF = center_building_centers_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const doorFF = door_FF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );

  const floorSF = floor_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const columnSF = column_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorFSF = doorF_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorRSF = doorR_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorLSF = doorL_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const doorBSF = doorB_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  return [
    ...floorSF,
    ...columnSF,
    ...doorFSF,
    ...doorRSF,
    ...doorLSF,
    ...doorBSF,
    ...centerBuildingColsFF,
    ...centerBuildingCentersFF,
  ];
};
