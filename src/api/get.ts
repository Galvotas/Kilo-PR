import axios, { AxiosResponse } from "axios";
import { URLS } from "./constant";

export interface ICovidData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export const handleGetRequest = async <T>(url?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    method: "GET",
    url: `${URLS.PRIMARY_URL}/${url}`,
  });

  return response.data;
};

export const handleGetChartData = async <T>(country?: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    method: "GET",
    url: `${URLS.CHART_DATA}/total/dayone/country/${country}`,
  });

  return response.data;
};

export const getVaccineDataRequest = async <T>(country: string): Promise<T> => {
  const response: AxiosResponse<T> = await axios({
    method: "GET",
    url: `${URLS.PRIMARY_URL}/vaccine/coverage/countries/${country}?lastdays=90`,
  });

  return response.data;
};