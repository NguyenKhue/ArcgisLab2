import { center_building_col_1 } from "./columns/column.js";

export const centerBuilding = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const centerBuildingCol1 = center_building_col_1(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  return [
    ...centerBuildingCol1
  ]
}