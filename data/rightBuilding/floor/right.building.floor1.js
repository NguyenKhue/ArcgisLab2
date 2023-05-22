export const right_building_floor1 = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {
    const bottomFloor = new GeoJSONLayer({
      url: "./data/rightBuilding/floor/right.building.bottom.floor.geojson.json",
    });

    bottomFloor.renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: 0.1,
              material: {
                color: "#8e8e8e",
              },
            },
          ],
        },
      };

      return [
        bottomFloor
      ]
}