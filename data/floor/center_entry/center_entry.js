export const center_entry = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const leftWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/center_entry/left_wall.geojson.json"
  });

  const rightWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/center_entry/right_wall.geojson.json"
  });

  const topWallCenterEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/center_entry/top_wall.geojson.json"
  });

  rightWallCenterEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.44,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  leftWallCenterEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.44,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  console.log(leftWallCenterEntryGeojsonLayer)

  topWallCenterEntryGeojsonLayer.renderer = {
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
    leftWallCenterEntryGeojsonLayer,
    rightWallCenterEntryGeojsonLayer,
    topWallCenterEntryGeojsonLayer
  ]
}