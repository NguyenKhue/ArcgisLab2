export const roof_RB = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const roofGeojsonLayer = new GeoJSONLayer({
    url: "./data/rightBuilding/roof/right.Building.roof.geojson.json",
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
  const roofGeojsonLayer2 = new GeoJSONLayer({
    url: "./data/rightBuilding/roof/right.Building.roof2.geojson.json",
  });
  const roofGeojsonLayer3 = new GeoJSONLayer({
    url: "./data/rightBuilding/roof/right.Building.roof3.geojson.json",
  });
  const roofGeojsonLayer4 = new GeoJSONLayer({
    url: "./data/rightBuilding/roof/right.Building.roof4.geojson.json",
  });
  const roofGeojsonLayer5 = new GeoJSONLayer({
    url: "./data/rightBuilding/roof/right.Building.roof5.geojson.json",
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
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  roofGeojsonLayer5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "#576a36",
          },
        },
      ],
    },
  };
  // decoRoofGeojsonLayer.renderer = {
  //     type: "simple",
  //     symbol: {
  //       type: "polygon-3d",
  //       symbolLayers: [
  //         {
  //           type: "extrude",
  //           size: 0.3,
  //           material: {
  //             color: "#b16934",
  //           },
  //         },
  //       ],
  //     },
  //   };

  return [
    roofGeojsonLayer,
    roofGeojsonLayer2,
    roofGeojsonLayer3,
    roofGeojsonLayer4,
    roofGeojsonLayer5,
  ];
};
