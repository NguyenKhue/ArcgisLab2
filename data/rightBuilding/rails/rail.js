export const wall_rail = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const frontWallRail = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/front.wall.rail.geojson.json",
  });
  const rightWallRail = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/right.wall.rail.geojson.json",
  });
  const rightWallRail2 = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/right.wall.rail2.geojson.json",
  });
  const rightWallRail3 = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/right.wall.rail3.geojson.json",
  });
  const backWallRail = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/back.wall.rail.geojson.json",
  });
  const backWallRail2 = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/back.wall.rail2.geojson.json",
  });
  const leftWallRail1 = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/left.wall.rail1.geojson.json",
  });
  const leftWallRail = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/left.wall.rail.geojson.json",
  });
  const leftWallRail2 = new GeoJSONLayer({
    url: "./data/rightBuilding/rails/left.wall.rail2.geojson.json",
  });
  rightWallRail.renderer = {
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
  rightWallRail2.renderer = {
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
  rightWallRail3.renderer = {
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
  frontWallRail.renderer = {
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
  backWallRail.renderer = {
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
  backWallRail2.renderer = {
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
  leftWallRail.renderer = {
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
  leftWallRail1.renderer = {
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
  leftWallRail2.renderer = {
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
  return [
    frontWallRail,
    rightWallRail,
    rightWallRail2,
    rightWallRail3,
    backWallRail,
    backWallRail2,
    leftWallRail,
    leftWallRail1,
    leftWallRail2,
  ];
};
