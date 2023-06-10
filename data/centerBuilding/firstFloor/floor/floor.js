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
    url: "./data/centerBuilding/firstFloor/floor/floor_bottom.json",
  });

  const floor = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/floor/floor.json",
  });

  const floor_center = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/floor/floor_center.json",
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
  ]
}