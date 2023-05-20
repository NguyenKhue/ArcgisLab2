export const center_building_cols = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const col1 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column1.geojson.json"
  });

  const col2 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column2.geojson.json"
  });

  const col3 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column3.geojson.json"
  });

  const col4 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column4.geojson.json"
  });

  const col5 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column5.geojson.json"
  });

  const col6 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column6.geojson.json"
  });

  const col7 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column7.geojson.json"
  });

  const col8 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column8.geojson.json"
  });

  const col9 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column9.geojson.json"
  });

  const col10 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column10.geojson.json"
  });

  const col11 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column11.geojson.json"
  });

  const col12 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column12.geojson.json"
  });

  const col13 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column13.geojson.json"
  });

  const col14 = new GeoJSONLayer({
    url: "./data/centerBuilding/columns/center.building.column14.geojson.json"
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
            color: "#3B1311"
          },
        }
      ]
    }
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
    col14
  ]
}