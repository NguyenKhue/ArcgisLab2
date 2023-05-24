export const roof_SF = (
    Map,
    SceneView,
    GeoJSONLayer,
    SceneLayer,
    GraphicsLayer,
    Graphic,
    esriRequest
  ) => {
    const roofGeojsonLayer = new GeoJSONLayer({
      url: "./data/centerBuilding/secondFloor/roof/CB.SF.roof.geojson.json",
    });
    const decoRoofGeojsonLayer = new GeoJSONLayer({
        url: "./data/centerBuilding/secondFloor/roof/CB.SF.decoRoof.geojson.json",
      });
  
    roofGeojsonLayer.renderer = {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            size: 0.05,
            material: {
              color: "#ab864a",
            },
          },
        ],
      },
    };
    decoRoofGeojsonLayer.renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: 0.3,
              material: {
                color: "#b16934",
              },
            },
          ],
        },
      };
  
    return [roofGeojsonLayer,decoRoofGeojsonLayer];
  };
  