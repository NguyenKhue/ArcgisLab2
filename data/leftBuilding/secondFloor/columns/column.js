// tọa độ điểm A [107.5791530007,16.46755900053,0]
// tọa độ điểm B [107.5790380049,16.46747699342,0]
// tâm tọa độ cột 1 tầng 2 [107.57910692162541,16.467573210628043,0]
// tâm tọa độ cột 2 tầng 2 [107.57908733549773,16.467598468591046,0]
// tâm tọa độ cột 3 tầng 2 [107.57907054739408,16.46762011827619,0]
// tâm tọa độ cột 4 tầng 2 [107.57906774937646,16.467623726556955,0]
// tâm tọa độ cột 5 tầng 2 [107.57904536522813,16.46765259279546,0]
// tâm tọa độ cột 6 tầng 2 [107.57900773901882,16.46762576036054,0]
// tâm tọa độ cột 7 tầng 2 [107.5790329211861,16.467593285841243,0]
// tâm tọa độ cột 8 tầng 2 [107.57904970928935,16.467571636157437,0]
// tâm tọa độ cột 9 tầng 2 [107.57906929540756,16.467546378193127,0]
// tâm tọa độ cột 10 tầng 2 [107.57905665310136,16.46766064253151,0]
// tâm tọa độ cột 11 tầng 2 [107.57907903724666,16.46763177628673,0]
// tâm tọa độ cột 12 tầng 2 [107.57910161298918,16.467647875744454,0]
// tâm tọa độ cột 13 tầng 2 [107.57907922884725,16.467676741989234,0]
export const left_building_cols_sf = (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) => {
  const col1 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column1.geojson.json",
  });

  const col2 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column2.geojson.json",
  });

  const col3 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column3.geojson.json",
  });

  const col4 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column4.geojson.json",
  });
  const col5 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column5.geojson.json",
  });

  const col6 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column6.geojson.json",
  });

  const col7 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column7.geojson.json",
  });
  const col8 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column8.geojson.json",
  });
  const col9 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column9.geojson.json",
  });
  const col10 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column10.geojson.json",
  });
  const col11 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column11.geojson.json",
  });
  const col12 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column12.geojson.json",
  });
  const col13 = new GeoJSONLayer({
    url: "./data/leftBuilding/secondFloor/columns/left.building.column13.geojson.json",
  });

  col1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
          size: 2.6,
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
  ];
};
