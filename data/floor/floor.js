import { center_entry } from "./doors/center_entry/center_entry.js";
import { left_entry } from "./doors/left_entry/left_entry.js";
import { right_entry } from "./doors/right_entry/right_entry.js";

export const floor = (Map, SceneView, GeoJSONLayer, SceneLayer,
  GraphicsLayer, Graphic, esriRequest) => {
  const geojsonLayer = new GeoJSONLayer({
    url: "./data/floor/walls/floor1.geojson.json"
  });

  const geojsonLayer1 = new GeoJSONLayer({
    url: "./data/floor/walls/floor.right.wall.geojson.json"
  });

  const geojsonLayer2 = new GeoJSONLayer({
    url: "./data/floor/walls/floor.geojson.json"
  });

  const geojsonLayer3 = new GeoJSONLayer({
    url: "./data/floor/walls/floor.back.geojson.json"
  });

  const floorEntryGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/walls/floor.entry.geojson.json"

  });

  const floorLeftGeojsonLayer = new GeoJSONLayer({
    url: "./data/floor/walls/floor.left.geojson.json"
  });

  const centerEntry = center_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const leftEntry = left_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)
  const rightEntry = right_entry(Map, SceneView, GeoJSONLayer, SceneLayer, GraphicsLayer, Graphic, esriRequest)

  geojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "fill",
          size: 0,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  geojsonLayer1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "fill",
          size: 0,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  geojsonLayer2.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "#FF0000",
          },
          width: 3.0,
          height: 0.0,
          join: "bevel",
          cap: "butt",
          profileRotation: "heading",
          anchor: "bottom",
        },
      ],
    },
  }

  geojsonLayer3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "fill",
          size: 0,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  floorEntryGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "fill",
          size: 0,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };

  floorLeftGeojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "fill",
          size: 0,
          material: {
            color: "#FF0000"
          },
        }
      ]
    }
  };
  return [
    ...centerEntry,
    ...leftEntry,
    ...rightEntry,
    geojsonLayer,
    geojsonLayer1,
    geojsonLayer2,
    geojsonLayer3,
    floorEntryGeojsonLayer,
    floorLeftGeojsonLayer
  ]
}