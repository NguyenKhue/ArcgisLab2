import { right_step_wall } from "./right_step_wall/right_step_wall.js"
import { left_step_wall } from "./left_step_wall/left_step_wall.js"

export const floor1_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const right_step_walls = right_step_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)
    
    const left_step_walls = left_step_wall(Map, SceneView, GeoJSONLayer, SceneLayer,
        GraphicsLayer, Graphic, esriRequest)

    return [
        ...right_step_walls,
        ...left_step_walls
    ]
}