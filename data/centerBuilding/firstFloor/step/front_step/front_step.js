import { right_step } from "./right_step/right_step.js";
import { left_step } from "./left_step/left_step.js";
import { center_step } from "./center_step/center_step.js";

export const front_step = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const right_steps = right_step(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    
    const left_steps = left_step(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    const center_steps = center_step(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    

    return [
        ...right_steps,
        ...left_steps,
        ...center_steps
    ]
}