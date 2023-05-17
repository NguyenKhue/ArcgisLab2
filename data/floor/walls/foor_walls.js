export const floor_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const geojsonLayer = new GeoJSONLayer({
        url: "./data/floor/walls/floor1.geojson.json"
    });

    const foorRightWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.right.wall.geojson.json"
    });

    const geojsonLayer2 = new GeoJSONLayer({
        url: "./data/floor/walls/floor.geojson.json"
    });

    const floorBackWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.back.geojson.json"
    });

    const floorEntryWallGeojsonLayer = new GeoJSONLayer({
        url: "./data/floor/walls/floor.entry.geojson.json"

    });

    const floorLeftWallGeojsonLayer = new GeoJSONLayer({
        url: "./data/floor/walls/floor.left.wall.geojson.json"
    });

    const floorLeftStepLeftWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.left.step.left.wall.geojson.json"
    });

    const floorLeftStepRightWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.left.step.right.wall.geojson.json"
    });

    const floorRightStepLeftWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.right.step.left.wall.geojson.json"
    });

    const floorRightStepRightWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.right.step.right.wall.geojson.json"
    });

    geojsonLayer.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    foorRightWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    geojsonLayer2.renderer = {
        type: "simple",
        symbol: {
            type: "line-3d",
            symbolLayers: [
                {
                    type: "path",
                    profile: "quad",
                    material: {
                        color: "#8f8e8b",
                    },
                    width: 3.0,
                    height: 0.0,
                    join: "bevel",
                    cap: "butt",
                    profileRotation: "heading",
                    anchor: "bottom",
                },
            ],
        },
    }

    floorBackWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    floorEntryWallGeojsonLayer.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#8f8e8b"
                    },
                }
            ]
        }
    };

    floorLeftWallGeojsonLayer.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    floorLeftStepLeftWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    floorLeftStepRightWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    floorRightStepLeftWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    floorRightStepRightWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "fill",
                    size: 0,
                    material: {
                        color: "#723a2d"
                    },
                }
            ]
        }
    };

    return [
        geojsonLayer,
        foorRightWall,
        geojsonLayer2,
        floorBackWall,
        floorEntryWallGeojsonLayer,
        floorLeftWallGeojsonLayer,
        floorLeftStepLeftWall,
        floorLeftStepRightWall,
        floorRightStepLeftWall,
        floorRightStepRightWall
    ]
}