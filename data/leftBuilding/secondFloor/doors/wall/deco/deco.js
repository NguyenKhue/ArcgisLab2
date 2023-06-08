export const deco = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const underdecohori1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/underdeco/under.deco.hori1.geojson.json",
  });

  const underdecohori2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/underdeco/under.deco.hori2.geojson.json",
  });

  const underdecohori3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/underdeco/under.deco.hori3.geojson.json",
  });

  const underdecohori4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/underdeco/under.deco.hori4.geojson.json",
  });

  const underdecohori5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/underdeco/under.deco.hori5.geojson.json",
  });

  const overdecohori1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/overdeco/over.deco.hori1.geojson.json",
  });

  const overdecohori2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/overdeco/over.deco.hori2.geojson.json",
  });

  const overdecohori3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/overdeco/over.deco.hori3.geojson.json",
  });

  const overdecohori4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/overdeco/over.deco.hori4.geojson.json",
  });

  const overdecohori5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/overdeco/over.deco.hori5.geojson.json",
  });

  const decovert1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert1.geojson.json",
  });

  const decovert2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert2.geojson.json",
  });

  const decovert3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert3.geojson.json",
  });

  const decovert4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert4.geojson.json",
  });

  const decovert5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert5.geojson.json",
  });

  const decovert6 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert6.geojson.json",
  });

  const decovert7 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert7.geojson.json",
  });

  const decovert8 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert8.geojson.json",
  });

  const decovert9 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert9.geojson.json",
  });

  const decovert10 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert10.geojson.json",
  });

  const decovert11 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert11.geojson.json",
  });

  const decovert12 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert12.geojson.json",
  });

  const decovert13 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert13.geojson.json",
  });

  const decovert14 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert14.geojson.json",
  });

  const decovert15 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert15.geojson.json",
  });

  const decovert16 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert16.geojson.json",
  });

  const decovert17 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/building/wall/deco/vertdeco/deco.vert17.geojson.json",
  });

  underdecohori1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  underdecohori2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  underdecohori3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  underdecohori4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  underdecohori5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  overdecohori1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  overdecohori2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  overdecohori3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  overdecohori4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  overdecohori5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.04,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert10.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert11.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert12.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert13.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert14.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert15.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert16.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  decovert17.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#701a1d",
          },
        },
      ],
    },
  };

  return [
    underdecohori1,
    underdecohori2,
    underdecohori3,
    underdecohori4,
    underdecohori5,
    overdecohori1,
    overdecohori2,
    overdecohori3,
    overdecohori4,
    overdecohori5,
    decovert1,
    decovert2,
    decovert3,
    decovert4,
    decovert5,
    decovert6,
    decovert7,
    decovert8,
    decovert9,
    decovert10,
    decovert11,
    decovert12,
    decovert13,
    decovert14,
    decovert15,
    decovert16,
    decovert17,
  ];
};
