export const back_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {

    const baseURL = "http://localhost:3001/api/prism/path?path="
    const parentPath = "ngomon/"

    const backWallPart1 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part1.geojson.json"
    });

    const backWallPart2 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part2.geojson.json"
    });


    const backWallPart3 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part3.geojson.json"
    });


    const backWallPart4 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part4.geojson.json"
    });


    const backWallPart5 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part5.geojson.json"
    });


    const backWallPart6 = new GeoJSONLayer({
        url: baseURL + parentPath + "data/foundation/walls/back_wall/floor.back.wall.part6.geojson.json"
    });






    backWallPart1.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    backWallPart2.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    backWallPart3.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    backWallPart4.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    backWallPart5.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.2,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    backWallPart6.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 4.64,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };



    return [
        backWallPart1,
        backWallPart2,
        backWallPart3,
        backWallPart4,
        backWallPart5,
        backWallPart6
    ]
}

// ngomon/data/foundation/walls/back_wall/floor.back.wall.part1.geojson.json
// ngomon/data/foundation/walls/back_wall/floor.back.wall.part3.geojson.json
// ngomon/data/foundation/walls/back_wall/floor.back.wall.part6.geojson.json
// ngomon/data/foundation/walls/back_wall/floor.back.wall.part4.geojson.json
// ngomon/data/foundation/walls/back_wall/floor.back.wall.part2.geojson.json
// ngomon/data/foundation/walls/back_wall/floor.back.wall.part5.geojson.json