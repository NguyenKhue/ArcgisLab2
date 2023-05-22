// tọa độ điểm A [107.5791019992,16.46762599946,0]
// tọa độ điểm B [107.57913664198, 16.46765024641, 0 ]
// tâm tọa độ cột 1 [107.57934897433223,16.46771778391957,0]
// tâm tọa độ cột 2 [107.5793265511691,16.467747587213392,0]
export const right_building_cols = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const col1 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column2.geojson.json",
  });
  col1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.84,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  col2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.84,
          material: {
            color: "#3B1311",
          },
        },
      ],
    },
  };

  return [col1, col2];
};
