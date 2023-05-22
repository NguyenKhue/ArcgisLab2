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

  // Tọa độ tâm cột 1 [107.57911311595728,16.467646250012113,4.64]
  // Tọa độ tâm cột 2 [107.57910349621433, 16.467658889743966, 6.3]
  //   tọa độ cột 3: [107.57908425672599, 16.46768416920723, 6.3]
  // tọa độ cột 4: [107.57907463698122, 16.467696808939085, 4.64]
  // tọa độ cột 5: [107.57906639938317, 16.46770763261754, 4.64]
  // tọa độ cột 6: [107.57904577772632,16.467734728122913,4.64]
  // Tọa độ tâm cột 7 [107.57903754012715,16.467745551801684,4.64]
  //   tọa độ cột 8: [107.57912629635022, 16.467655475151776, 4.64]
  // tọa độ cột 9: [107.57914326421343, 16.467667351193484, 4.64]
  // tọa độ cột 10: [107.5791640195476, 16.467681878137178, 4.64]
  // tọa đoộ cột 11: [107.57918856235369, 16.467699055982788, 4.64]
  // tọa độ cột 12: [107.57920931769134, 16.467713582926486, 4.64]
  // tọa độ cột 13: [107.57922628555963, 16.467725458968197, 4.64]
  // tọa độ cột 14: [107.57923946595797, 16.467734684107864, 4.64]
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
