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
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.roof.geojson.json",
  });
  const roof2GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.roof2.geojson.json",
  });
  const roof3GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.roof3.geojson.json",
  });
  const roof4GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.roof4.geojson.json",
  });
  const decoRoof1GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.decoRoof1.geojson.json",
  });
  const decoRoof2GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.decoRoof2.geojson.json",
  });
  const decoRoof3GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.decoRoof3.geojson.json",
  });
  const decoRoof4GeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/secondFloor/roof/RB.SF.decoRoof4.geojson.json",
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
  roof2GeojsonLayer.renderer = {
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
  roof3GeojsonLayer.renderer = {
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
  roof4GeojsonLayer.renderer = {
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
            color: "#b16934",
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
          size: 0.3,
          material: {
            color: "#b16934",
          },
        },
      ],
    },
  };
  decoRoof3GeojsonLayer.renderer = {
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
  decoRoof4GeojsonLayer.renderer = {
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

  return [
    roofGeojsonLayer,
    roof2GeojsonLayer,
    roof3GeojsonLayer,
    roof4GeojsonLayer,
    decoRoof1GeojsonLayer,
    decoRoof2GeojsonLayer,
    decoRoof3GeojsonLayer,
    decoRoof4GeojsonLayer
  ];
};
