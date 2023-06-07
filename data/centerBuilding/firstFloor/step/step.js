import { back_step } from "./back_step/back_step.js"
import { front_step } from "./front_step/front_step.js"

export const floor1_steps = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const frontSteps = front_step(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    const backSteps = back_step(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    

    return [
        ...frontSteps,
        ...backSteps
    ]
}