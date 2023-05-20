import { center_building_cols } from "./columns/column.js";
import { floor_SF } from "./secondFloor/floor/index.js";
import { center_building_centers } from "./center/center.js";

export const centerBuilding = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const centerBuildingCols = center_building_cols(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const centerBuildingCenters = center_building_centers(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const floor = floor_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  return [...floor, ...centerBuildingCols, ...centerBuildingCenters];

}
