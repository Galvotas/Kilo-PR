import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import { ActionTypes } from "../state/action-types";
import { CustomMarker } from "../components/others/CustomMarker";

import "@reach/combobox/styles.css";
import { CustomInfoWindow } from "../components/others/CustomInfoWindow";
import {
  libraries,
  mapContainerStyle,
  options,
  center,
} from "../constants/googleMaps";

import { GoogleMapsSearch } from "../components/others/GoogleMapsSearch";

export const CustomGoogleMap = ({
  children,
}: {
  children: JSX.Element;
}): any => {
  const covidData = useSelector((state: any) => state.covidData.data);
  const dispatch = useDispatch();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });
  const [selected, setSelected] = React.useState<any>(null);

  const mapRef = React.useRef<any>(null);
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const handleMarkerClick = (country: any) => {
    dispatch({ type: ActionTypes.FETCH_CHART_DATA, payload: country.iso2 });
  };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <GoogleMapsSearch panTo={panTo} />
        {covidData &&
          covidData.map((item: any) => {
            const { countryInfo, casesPerOneMillion } = item;

            return (
              <CustomMarker
                cases={casesPerOneMillion}
                key={countryInfo._id + Math.random() * 10}
                onClick={() => handleMarkerClick(countryInfo)}
                countryInfo={countryInfo}
              />
            );
          })}

        {selected ? (
          <CustomInfoWindow selected={selected} setSelected={setSelected} />
        ) : null}
        {children}
      </GoogleMap>
    </div>
  );
};
