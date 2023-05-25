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
    url: "./data/leftBuilding/secondFloor/rails/front.wall.rail.geojson.json",
  });

  const rightWallRail = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/rails/right.wall.rail.geojson.json",
  });

  const rightWallRail2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/rails/right.wall.rail.part2.geojson.json",
  });
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

  leftWallRail3.renderer = {
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

  return [
    frontWallRail,
    rightWallRail,
    rightWallRail2,
    leftWallRail,
    leftWallRail2,
    leftWallRail3,
    backWallRail,
    backWallRail2,
  ];
};
