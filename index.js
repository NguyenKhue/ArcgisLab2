import { floor } from "./data/floor/floor.js";
import { centerBuilding } from "./data/centerBuilding/index.js";
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer", "esri/layers/GraphicsLayer", "esri/Graphic", "esri/request"
], function (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) {
  const floorArr = floor(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const centerBuildingArr = centerBuilding(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  const map = new Map({
    basemap: "topo-vector",
    layers: [
      ...floorArr,
      ...centerBuildingArr
    ] //end layers
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [107.578889, 16.467669, 500],
      heading: 0,
      tilt: 0
    }
  });

  view.popup.defaultPopupTemplateEnabled = true;
})