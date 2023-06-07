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
    const decoRoof1GeojsonLayer = new GeoJSONLayer({
        url: "./data/centerBuilding/secondFloor/roof/CB.SF.decoRoof1.geojson.json",
      });
      const decoRoof2GeojsonLayer = new GeoJSONLayer({
        url: "./data/centerBuilding/secondFloor/roof/CB.SF.decoRoof2.geojson.json",
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
    decoRoof1GeojsonLayer.renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: 0.3,
              material: {
                color: "#815434",
              },
            },
          ],
        },
      };
      decoRoof2GeojsonLayer.renderer = {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "extrude",
              size: 0.1,
              material: {
                color: "#815434",
              },
            },
          ],
        },
      };
  
    return [roofGeojsonLayer,decoRoof1GeojsonLayer,decoRoof2GeojsonLayer];
  };
  