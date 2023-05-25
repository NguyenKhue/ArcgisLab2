export const gate_right_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const gateRightWallRailRoot = new GeoJSONLayer({
        url: "./data/floor/rails/gate_right/floor.gate.right.rail.root.geojson.json"
    });

    const gateRightRailWall = new GeoJSONLayer({
        url: "./data/floor/rails/gate_right/floor.gate.right.rail.wall.geojson.json"
    });

    gateRightWallRailRoot.renderer = {
        type: "simple", 
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.3,
                    material: {
                        color: "#838b94"
                    },
                }
            ]
        }
    };

    gateRightRailWall.renderer = {
        type: "simple",
        symbol: {
            type: "polygon-3d",
            symbolLayers: [
                {
                    type: "extrude",
                    size: 0.8,
                    material: {
                        color: "#d8aa5e"
                    },
                }
            ]
        }
    };



    return [
        gateRightWallRailRoot,
        gateRightRailWall
    ]
}