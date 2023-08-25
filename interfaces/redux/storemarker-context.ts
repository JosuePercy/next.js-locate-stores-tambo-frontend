import { createContext, useContext } from "react";
import { MarkerZoom } from "../map";

export interface GlobalContent {
  marker: MarkerZoom;
  setMarker: (c: MarkerZoom) => void;
}

export const MyMarkerGlobalContext = createContext<GlobalContent>({
  marker: {
    name: "",
    zoom: 12,
  },
  setMarker: () => {},
});

export const useMarkerGlobalContext = () => useContext(MyMarkerGlobalContext);
