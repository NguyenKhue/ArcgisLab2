export const left_step_wall = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const leftWall = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/walls/left_step_wall/left.step.left.wall.geojson.json",
  });

  const rightWall = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/walls/left_step_wall/left.step.right.wall.geojson.json",
  });

  leftWall.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#3b3d3e",
          },
        },
      ],
    },
  };

  rightWall.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#3b3d3e",
          },
        },
      ],
    },
  };

  return [leftWall, rightWall];
};
