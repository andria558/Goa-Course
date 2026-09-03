import React, { useEffect, useState } from "react";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch("/api/weather");
        if (!response.ok) {
          throw new Error("Server returned 500");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setTimeout(() => {
          throw error;
        });
      }
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>ამინდის პროგნოზი</h3>
      <p>{weather.temp}°C</p>
    </div>
  );
}

export default WeatherWidget;
