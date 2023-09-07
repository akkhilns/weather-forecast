<template>
  <div v-if="loading"><p>Loading weather data...</p></div>

  <div v-if="weatherData && !loading" class="weather-wrapper">
    <h3>Weather forecast for city</h3>
      <div class="weather-card">
        <div class="location">Location: Latitude {{ weatherData.latitude }}, Longitude {{ weatherData.longitude }}</div>
        <i class="fas fa-cloud-sun weather-icon"></i>
        <div class="temperature">{{ weatherData.current_weather.temperature  }} °C</div>
        <div class="details">
            <p>Wind: {{ weatherData.current_weather.windspeed  }} m/s at {{ weatherData.current_weather.winddirection  }}°</p>
            <p>Elevation: {{ weatherData.elevation  }} meters</p>
            <p>UTC Offset: {{ weatherData.utc_offset_seconds  }} seconds</p>
            <p>Timezone: {{ weatherData.timezone  }}</p>
            <p>Generation Time: {{ weatherData.generationtime_ms  }} ms</p>
        </div>
        <div class="time">Last Updated: {{ weatherData.current_weather.time  }} GMT</div>
      </div>
  </div>

  <div v-if="error" class="error-message-wrapper">
    {{ error }}
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>
<style>
  body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
  
  }

  .weather-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weather-card {
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      text-align: center;
      margin-top:1rem;
      max-width: 30rem;
  }

  .location {
      font-size: 24px;
      margin-bottom: 10px;
      color: #333;
  }

  .temperature {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #FF5733;
  }

  .weather-icon {
      font-size: 36px;
      margin-bottom: 10px;
      color: #FF5733;
  }

  .details {
      font-size: 16px;
      margin-bottom: 20px;
      color: #666;
  }

  .time {
      font-size: 14px;
      color: #999;
  }

  .error-message-wrapper p {
    color: #FF0000
  }
</style>