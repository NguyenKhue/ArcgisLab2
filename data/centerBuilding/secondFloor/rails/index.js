export const rails_SF = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {
    const railsGeojsonLayer = new GeoJSONLayer({
      url: "./data/centerBuilding/secondFloor/rails/CB.SF.rails.geojson.json",
    });
  
    railsGeojsonLayer.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 0.6,
            material: {
              color: "#8a5724",
            },
          },
        ],
      },
    };
  
    return [railsGeojsonLayer];
  };
  