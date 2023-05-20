import { center_building_cols } from "./columns/column.js";
import { floor_SF } from "./secondFloor/floor/index.js";

export const centerBuilding = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const centerBuildingCol1 = center_building_cols(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const floor = floor_SF(
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  );
  return [...floor, ...centerBuildingCol1];

}
