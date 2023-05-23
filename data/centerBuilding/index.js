import { center_building_cols } from "./columns/column.js";
import { floor_SF } from "./secondFloor/floor/index.js";
import { column_SF } from "./secondFloor/column/index.js";
import { doorF_SF } from "./secondFloor/door/FDoor/index.js";
import { doorR_SF } from "./secondFloor/door/RDoor/index.js";
import { doorL_SF } from "./secondFloor/door/LDoor/index.js";
import { doorB_SF } from "./secondFloor/door/BDoor/index.js";
import { center_building_centers } from "./center/center.js";

export const centerBuilding = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const centerBuildingCols = center_building_cols(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  const centerBuildingCenters = center_building_centers(
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
    ...centerBuildingCols,
    ...centerBuildingCenters,
  ];
};
