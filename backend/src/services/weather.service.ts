import axios from "axios";
import { WEATHER_API_URL } from "../config";

/**
 * Interface representing the structure of weather forecast data.
 */
export interface ForecastModel {
  latitude: number;
  longitude: number;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: Date;
  };
}

/**
 * Fetches weather forecast data from a specified API for a given latitude and longitude.
 *
 * @param lat The latitude coordinate.
 * @param lng The longitude coordinate.
 * @returns A Promise that resolves to the weather forecast data.
 * @throws An error if there's an issue with the API request.
 */
export async function getWeatherForecast(
  lat: number,
  lng: number
): Promise<ForecastModel> {
  try {
    // Construct the API URL with the provided latitude and longitude
    const apiUrl = `${WEATHER_API_URL}?latitude=${lat}&longitude=${lng}&current_weather=true`;
    
    // Make a GET request to the API
    const response = await axios.get<ForecastModel>(apiUrl);
    
    // Log the API response (you can replace this with your own handling logic)
    console.log(response.data);
    
    // Return the weather forecast data
    return response.data;
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error or handle it as needed
  }
}
