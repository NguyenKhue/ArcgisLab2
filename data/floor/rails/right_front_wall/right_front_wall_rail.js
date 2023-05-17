export const left_front_wall_rail = (Map, SceneView, GeoJSONLayer, SceneLayer,
    GraphicsLayer, Graphic, esriRequest) => {
    const floorEntryWallRailRoot = new GeoJSONLayer({
        url: "./data/floor/rails/left_front_wall/floor.left.front.wall.rail.root.geojson.json"
    });

    floorEntryWallRailRoot.renderer = {
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


    

    return [
        floorEntryWallRailRoot,
    ]
}