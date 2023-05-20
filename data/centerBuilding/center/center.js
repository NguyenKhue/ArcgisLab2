export const center_building_centers = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const center1 = new GeoJSONLayer({
    url: "./data/centerBuilding/center/center.building.center1.geojson.json"
  });

  const center2 = new GeoJSONLayer({
    url: "./data/centerBuilding/center/center.building.center2.geojson.json"
  });

  center1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.84,
          material: {
            color: "#551610"
          },
        }
      ]
    }
  };

  center2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.84,
          material: {
            color: "#551610"
          },
        }
      ]
    }
  };

  return [
    center1,
    center2
  ]
}