export const banister_SF = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {
    const banisterGeojsonLayer = new GeoJSONLayer({
      url: "./data/centerBuilding/secondFloor/banister/CB.SF.banister.geojson.json",
    });
  
    banisterGeojsonLayer.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 0.6,
            material: {
              color: "#d8aa5e",
            },
          },
        ],
      },
    };
  
    return [banisterGeojsonLayer];
  };
  