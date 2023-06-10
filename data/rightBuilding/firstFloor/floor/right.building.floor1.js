export const right_building_floor1 = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const bottomFloor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/floor/right.building.bottom.floor.geojson.json",
  });

  const floor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/floor/right.building.floor.geojson.json",
  });

  const secondFloor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/floor/right.building.secondfloor.geojson.json",
  });

  const tileFloor = new GeoJSONLayer({
    url: "./data/rightBuilding/firstFloor/floor/right.building.tile.floor.geojson.json",
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

  secondFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "white",
          },
        },
      ],
    },
  };

  tileFloor.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.01,
          material: {
            color: "#8f6f57",
          },
        },
      ],
    },
  };

  return [
    bottomFloor, 
    floor, 
    secondFloor, 
    tileFloor
  ];
};
