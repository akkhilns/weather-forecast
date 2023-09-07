// Import necessary modules and dependencies
import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Watch } from 'vue-property-decorator';
import isEmpty from 'lodash/isEmpty';

// Use the Options decorator to define component options
@Options({
  props: {
    // Props can be defined here if needed
  }
})
export default class WeatherForecast extends Vue {
  // Inject the 'weatherService' dependency provided in the Vue.js context
  @Inject('weatherService')
  public weatherService!: WeatherService;

  // Define properties to store weather data, error message, and loading status
  public weatherData: ForecastModel | null = null;
  public error: string | string = '';
  public loading: boolean | boolean = false;

  // Watch for changes in the selectedLocation property from the Vuex store
  @Watch('$store.state.selectedLocation', { immediate: true, deep: true })
  onSelectedLocationChange(newLocation: any, oldLocation: any) {
    // When the selected location changes, fetch new weather data
    this.fetchWeatherData(newLocation);
  }

  // Method to fetch weather data based on the selected location
  fetchWeatherData(location: any) {
    // Check if the location is not empty (null or undefined)
    if (!isEmpty(location)) {
      // Set the loading status to true
      this.loading = true;

      // Call the weatherService to get weather forecast data
      this.weatherService.getWeatherForecast(location?.lat, location?.lng)
        .then((res) => {
          console.log(res);
          // Store the retrieved weather data in the component's property
          this.weatherData = res;
        })
        .catch((err) => {
          console.log(err);
          // Set an error message if weather data retrieval fails
          this.error = "Sorry, we couldn't retrieve weather data at the moment. Please try again later.";
        })
        .finally(() => {
          // Set the loading status to false after the request is complete
          this.loading = false;
        });
    }
  }
}
