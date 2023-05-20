export const column_SF = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const columnCornerLBGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/column/columnCornerLB.geojson.json",
  });
  const columnCornerLTGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/column/columnCornerLT.geojson.json",
  });
  const columnCornerRBGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/column/columnCornerRB.geojson.json",
  });
  const columnCornerRTGeojsonLayer = new GeoJSONLayer({
    url: "./data/centerBuilding/secondFloor/column/columnCornerRT.geojson.json",
  });

  columnCornerLBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  columnCornerLTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  columnCornerRBGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };
  columnCornerRTGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
          material: {
            color: "brown",
          },
        },
      ],
    },
  };

  return [
    columnCornerLBGeojsonLayer,
    columnCornerLTGeojsonLayer,
    columnCornerRBGeojsonLayer,
    columnCornerRTGeojsonLayer,
  ];
};
