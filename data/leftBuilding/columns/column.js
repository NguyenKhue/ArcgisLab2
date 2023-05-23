// tọa độ điểm A [107.5791530007,16.46755900053,0]
// tọa độ điểm B [107.5790380049,16.46747699342,0]
// tâm tọa độ cột 1 [107.57913499759428,16.467559610673906,0]
// tâm tọa độ cột 2 [107.57912100750946,16.46757765207717,0]
// tâm tọa độ cột 3 [107.57910421940569,16.467599301760977,0]
// tâm tọa độ cột 4 [107.57908743130012,16.467620951444786,0]
// tâm tọa độ cột 5 [107.57907903724686,16.46763177628685,0]
// tâm tọa độ cột 6 [107.57905665310147,16.46766064253163,0]
// tâm tọa độ cột 7 [107.57904825904647,16.467671467373698,0]
// tâm tọa độ cột 8 [107.57903697117436,16.46766341764393,0]
// tâm tọa độ cột 9 [107.57904536522852,16.467652592801528,0]
// tâm tọa độ cột 10 [107.57906774936964,16.467623726554375,0]
// tâm tọa độ cột 11 [107.57907054738726,16.46762011827361,0]
// tâm tọa độ cột 12 [107.57908733549093,16.46759846858847,0]
// tâm tọa độ cột 13 [107.57910692160932,16.46757321062234,0]
// tâm tọa độ cột 14 [107.57912091169263,16.467555169218148,0]
// tâm tọa độ cột 15 [107.57908328547833,16.467528336783232,0]
// tâm tọa độ cột 16 [107.57906929539148,16.46754637818742,0]
// tâm tọa độ cột 17 [107.57904970926818,16.467571636153554,0]
// tâm tọa độ cột 18 [107.57903292116036,16.467593285838692,0]
// tâm tọa độ cột 19 [107.5790077389953,16.467625760366612,0]
// tâm tọa độ cột 20 [107.578999344939,16.467636585209014,0]
// tâm tọa độ cột 21 [107.57898805706891,16.467628535479246,0]
// tâm tọa độ cột 22 [107.57899645112582,16.46761771063684,0]
// tâm tọa độ cột 23 [107.57901883528518,16.467588844387762,0]
// tâm tọa độ cột 24 [107.5790440174541,16.46755636986189,0]
// tâm tọa độ cột 25 [107.57906080556455,16.467534720178087,0]
// tâm tọa độ cột 26 [107.57907479565496,16.467516678774818,0]
export const left_building_cols = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const col1 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column2.geojson.json",
  });

  const col3 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column4.geojson.json",
  });
  const col5 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column13.geojson.json",
  });
  const col14 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column14.geojson.json",
  });
  const col15 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column15.geojson.json",
  });
  const col16 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column16.geojson.json",
  });
  const col17 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column17.geojson.json",
  });
  const col18 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column18.geojson.json",
  });
  const col19 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column19.geojson.json",
  });
  const col20 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column20.geojson.json",
  });
  const col21 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column21.geojson.json",
  });
  const col22 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column22.geojson.json",
  });
  const col23 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column23.geojson.json",
  });
  const col24 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column24.geojson.json",
  });
  const col25 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column25.geojson.json",
  });
  const col26 = new GeoJSONLayer({
    url: "./data/leftBuilding/columns/left.building.column26.geojson.json",
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
    col25,
    col26,
  ];
};
