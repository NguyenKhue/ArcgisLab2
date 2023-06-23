export const left_step_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "http://localhost:3001/api/prism/path?path="
    const parentPath = "ngomon/"

    const leftWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/left_step_wall/floor.left.step.left.wall.geojson.json"
    });

    const rightWall = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/left_step_wall/floor.left.step.right.wall.geojson.json"
    });





    leftWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.94,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    rightWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.94,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };



    return [
        leftWall,
        rightWall,
    ]
}

// ngomon/data/foundation/walls/left_step_wall/floor.left.step.left.wall.geojson.json
// ngomon/data/foundation/walls/left_step_wall/floor.left.step.right.wall.geojson.json