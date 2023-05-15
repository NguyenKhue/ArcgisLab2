import { center_entry } from "./doors/center_entry/center_entry.js";
import { left_entry } from "./doors/left_entry/left_entry.js";
import { right_entry } from "./doors/right_entry/right_entry.js";
import { left_step } from "./step/left_step/left_step.js";
import { floor_walls } from "./walls/foor_walls.js";

export const floor = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {

  const centerEntry = center_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const leftEntry = left_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const rightEntry = right_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const leftStep = left_step(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const walls = floor_walls(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  return [
    ...centerEntry,
    ...leftEntry,
    ...rightEntry,
    ...leftStep,
    ...walls
  ]
}