export const left_entry = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const leftWallEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/doors/left_entry/left_wall.geojson.json"
  });

  const rightWallLeftEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/doors/left_entry/right_wall.geojson.json"
  });

  const topWallLeftEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/doors/left_entry/top_wall.geojson.json"
  });

  leftWallEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  rightWallLeftEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.94,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  topWallLeftEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.5,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };
  return [
    leftWallEntryGeojsonLayer,
    rightWallLeftEntryGeojsonLayer,
    topWallLeftEntryGeojsonLayer
  ]
}