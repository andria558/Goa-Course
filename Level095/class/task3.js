const API_KEY = "######";
const cityName = "lomi";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

const myWeatherAsyncFunc = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const temperature = data.main.temp;
    document.getElementById("temp").textContent = `${temperature}°C`;
  } catch (error) {
    document.getElementById("temp").textContent = "Error loading temperature";
  }
};

myWeatherAsyncFunc();