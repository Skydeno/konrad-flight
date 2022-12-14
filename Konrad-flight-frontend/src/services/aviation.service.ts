import axios from "axios";

export async function getFlights() {
  return axios.get(`https://opensky-network.org/api/states/all`, {
    auth: {
      username: "Pietralski",
      password: "zaq1@WSX",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function getAirports() {
  return axios.get(
    `https://airlabs.co/api/v9/airports?is_major=true&api_key=52370df8-d747-42b5-9c11-20c7b82f10ff`
  );
}
