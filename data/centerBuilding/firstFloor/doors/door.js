export const door_FF = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const door1 = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/doors/center.building.door.1.geojson.json"
  });

  const door1decovert = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/doors/center.building.doordecovert.1.geojson.json"
  });

  const door1decohori = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/doors/center.building.doordecohori.1.geojson.json"
  });

  const door2 = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/doors/center.building.door.2.geojson.json"
  });

  const door2decovert = new GeoJSONLayer({
    url: "./data/centerBuilding/firstFloor/doors/center.building.doordecovert.2.geojson.json"
  });

  door1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door1decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door1decohori.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.05,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  door2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "#6b1f1f"
          },
        }
      ]
    }
  };

  door2decovert.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.54,
          material: {
            color: "brown"
          },
        }
      ]
    }
  };

  return [
    door1,
    door1decovert,
    door1decohori,
    door2,
    door2decovert
  ]
}