export const balcony_SF = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {
    const balconyGeojsonLayer = new GeoJSONLayer({
      url: "./data/centerBuilding/secondFloor/balcony/CB.SF.balcony.geojson.json",
    });
  
    balconyGeojsonLayer.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 0.01,
            material: {
              color: "#5d2423",
            },
          },
        ],
      },
    };
  
    return [balconyGeojsonLayer];
  };
  