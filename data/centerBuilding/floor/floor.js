export const floor_center = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const bottomFloor = new GeoJSONLayer({
    url: "./data/centerBuilding/floor/floor_bottom.json",
  });

  const floor = new GeoJSONLayer({
    url: "./data/centerBuilding/floor/floor.json",
  });

  const floor_center = new GeoJSONLayer({
    url: "./data/centerBuilding/floor/floor_center.json",
  });

  const floor_step = new GeoJSONLayer({
    url: "./data/centerBuilding/floor/floor_step.json",
  });

  const floor_step_font = new GeoJSONLayer({
    url: "./data/centerBuilding/floor/floor_step_font.json",
  });



  bottomFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "#8e8e8e",
          },
        },
      ],
    },
  };

  floor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#64646c",
          },
        },
      ],
    },
  };

  floor_step.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "#64646c",
          },
        },
      ],
    },
  };

  floor_step_font.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.4,
          material: {
            color: "#64646c",
          },
        },
      ],
    },
  };

  floor_center.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.2,
          material: {
            color: "#8f6f57",
          },
        },
      ],
    },
  };

  return [
    floor,
    floor_center,
    bottomFloor,
    floor_step,
    floor_step_font
  ]
}