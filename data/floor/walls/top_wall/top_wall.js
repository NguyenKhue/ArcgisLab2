export const top_wall = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const topWallPart1 = new GeoJSONLayer({
        url: "./data/floor/walls/top_wall/floor.top.wall.part1.geojson.json"
    });

    const topWallPart2 = new GeoJSONLayer({
        url: "./data/floor/walls/top_wall/floor.top.wall.part2.geojson.json"
    });
    
    const topWallPart3 = new GeoJSONLayer({
        url: "./data/floor/walls/top_wall/floor.top.wall.part3.geojson.json"
    });

    const topWallPart4 = new GeoJSONLayer({
        url: "./data/floor/walls/top_wall/floor.top.wall.part4.geojson.json"
    });



    topWallPart1.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    topWallPart2.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    topWallPart3.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    topWallPart4.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };
    

    return [
        topWallPart1,
        topWallPart2,
        topWallPart3,
        topWallPart4
    ]
}