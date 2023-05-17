export const floor_walls = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const foorRightWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.right.wall.geojson.json"
    });

    const floorBackWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.back.wall.geojson.json"
    });

    const floorEntryWallGeojsonLayer = new GeoJSONLayer({
        url: "./data/floor/walls/floor.entry.wall.geojson.json"

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

    const floorLeftFrontWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.left.front.wall.geojson.json"
    });

    const floorRightFrontWall = new GeoJSONLayer({
        url: "./data/floor/walls/floor.right.front.wall.geojson.json"
    });

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

    floorLeftFrontWall.renderer = {
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

    floorRightFrontWall.renderer = {
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
        foorRightWall,
        floorBackWall,
        floorEntryWallGeojsonLayer,
        floorLeftWallGeojsonLayer,
        floorLeftStepLeftWall,
        floorLeftStepRightWall,
        floorRightStepLeftWall,
        floorRightStepRightWall,
        floorLeftFrontWall,
        floorRightFrontWall
    ]
}