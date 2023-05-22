// tọa độ điểm A [107.5791019992,16.46762599946,0] [107.57913664198, 16.46765024641,0]
// tọa độ điểm B [107.57913664198, 16.46765024641,0]
// tâm tọa độ cột 1 [107.57934897433223,16.46771778391957,0]
// tâm tọa độ cột 2 [107.57933515286263,16.467735944457623,0]
// tâm tọa độ cột 3 [107.5793185670972,16.467757737103177,0]
// tâm tọa độ cột 4 [107.57930198132995,16.467779529748736,0]
// tâm tọa độ cột 5 [107.57929368844583,16.467790426071677,0]
// tâm tọa độ cột 6 [107.57927433838044,16.467815850824703,0]
// tâm tọa độ cột 7 [107.57926604549479,16.46782674714764,0]
// tâm tọa độ cột 8 [107.57927740791544,16.46783469985107,0]
// tâm tọa độ cột 9 [107.57931528265614,16.467861208860132,0]
// tâm tọa độ cột 10 [107.57932664507884,16.46786916156356,0]
// tâm tọa độ cột 11 [107.579285700801,16.467823803527807,0]
// 12 [107.57930505086465,16.46779837877301,0]
// 13 [107.57930919730677,16.46779293061142,0]
// 14 [107.57932578307332,16.467771137964558,0]
// 15 [107.57936033674648,16.467725736623002,0]
// 16 [107.57934651527626,16.467743897161057,0]
// 17 [107.57938438999925,16.467770406170114,0]
// 18 [107.57939575241664,16.467778358873545,0]
// 19 [107.579409573888,16.467760198334584,0]
//20 [107.57939821147221,16.467752245630535,0]
// 21 [107.57933493796583,16.467858265240288,0]
//22[107.57932357554425,16.467850312536243,0]
//23 [107.57934568990531,16.46782125567347,0]
// 24
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

  const col3 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column4.geojson.json",
  });
  const col5 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column13.geojson.json",
  });
  const col14 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column14.geojson.json",
  });
  const col15 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column15.geojson.json",
  });
  const col16 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column16.geojson.json",
  });
  const col17 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column17.geojson.json",
  });
  const col18 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column18.geojson.json",
  });
  const col19 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column19.geojson.json",
  });
  const col20 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column20.geojson.json",
  });
  const col21 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column21.geojson.json",
  });
  const col22 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column22.geojson.json",
  });
  const col23 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column23.geojson.json",
  });
  const col24 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column24.geojson.json",
  });
  const col25 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column25.geojson.json",
  });
  const col26 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column26.geojson.json",
  });
  const col27 = new GeoJSONLayer({
    url: "./data/rightBuilding/columns/right.building.column27.geojson.json",
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
  col3.renderer = {
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
  col4.renderer = {
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
  col5.renderer = {
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
  col6.renderer = {
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
  col7.renderer = {
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
  col8.renderer = {
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
  col9.renderer = {
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
  col10.renderer = {
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
  col11.renderer = {
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
  col12.renderer = {
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
  col13.renderer = {
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
  col14.renderer = {
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
  col15.renderer = {
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
  col16.renderer = {
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
  col17.renderer = {
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
  col18.renderer = {
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
  col19.renderer = {
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
  col20.renderer = {
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
  col21.renderer = {
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
  col22.renderer = {
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
  col23.renderer = {
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
  col24.renderer = {
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
  col25.renderer = {
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
  col26.renderer = {
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
  col27.renderer = {
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
  return [
    col1,
    col2,
    col3,
    col4,
    col5,
    col6,
    col7,
    col8,
    col9,
    col10,
    col11,
    col12,
    col13,
    col14,
    col15,
    col16,
    col17,
    col18,
    col19,
    col20,
    col21,
    col22,
    col23,
    col24,
  ];
};
