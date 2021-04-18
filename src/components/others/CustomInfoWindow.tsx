import React from "react";
import { InfoWindow } from "@react-google-maps/api";

export const CustomInfoWindow = ({
  selected,
  setSelected,
}: any): JSX.Element => {
  return (
    <InfoWindow
      position={{ lat: selected.lat + 5, lng: selected.long }}
      onCloseClick={() => {
        setSelected(null);
      }}
    >
      <div>
        <h2>
          <span role="img" aria-label="bear">
            🐻
          </span>{" "}
          Alert
        </h2>
        <p>{selected.iso2}</p>
      </div>
    </InfoWindow>
  );
};
