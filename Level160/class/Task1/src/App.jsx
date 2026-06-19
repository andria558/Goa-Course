import React, { useState, useEffect } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>ამინდის მონაცემების ჩატვირთვა ვერ მოხერხდა. სცადეთ მოგვიანებით.</h2>
      );
    }
    return this.props.children;
  }
}

// --------------------------------------------

function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {

        const randomFail = Math.random() < 0.2; 
        if (randomFail) {
          throw new Error("Server error: 500 (Cant find weather server)");
        }

        const fakeData = { temp: 22, wind: 10 };
        setWeather(fakeData);
      } catch (err) {

        throw err;
      }
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return <p>ჩატვირთვა ვერ მოხერხდა. ./</p>;
  }

  return (
    <div>
      <h3>ამინდის პროგნოზი</h3>
      <p>ტემპერატურა: {weather.temp}°C</p>
      <p>ქარი: {weather.wind} km/h</p>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <WeatherWidget />
    </ErrorBoundary>
  );
}
