import React from 'react'

const hourlyForecast = [
  { time: "3 PM", temp: 20 },
  { time: "4 PM", temp: 20 },
  { time: "5 PM", temp: 20 },
  { time: "6 PM", temp: 19 },
  { time: "7 PM", temp: 18 },
  { time: "8 PM", temp: 18 },
  { time: "9 PM", temp: 17 },
  { time: "10 PM", temp: 17 },
];

const dailyForecast = [
  { day: "Tue", temp: 20, min: 14, icon: "🌧️" },
  { day: "Wed", temp: 21, min: 15, icon: "🌧️" },
  { day: "Thu", temp: 24, min: 14, icon: "☀️" },
  { day: "Fri", temp: 25, min: 15, icon: "⛅" },
  { day: "Sat", temp: 21, min: 15, icon: "🌦️" },
  { day: "Sun", temp: 25, min: 16, icon: "🌧️" },
  { day: "Mon", temp: 24, min: 15, icon: "🌫️" },
];

const WeatherApp = () => {
  let search = "Berlin"

  return (
    <div className="min-h-screen bg-[#0d0d2b] text-white p-4 md:p-10 flex flex-col md:flex-row gap-6">
      
      <div className="flex-1 bg-[#1a1a40] rounded-2xl p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">How's the sky looking today?</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search for a place..."
            value={search}
            
            className="flex-1 p-3 rounded-lg text-white focus:outline-none border-white"
          />
          <button className="bg-blue-600 px-4 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        
        <div className="bg-[#2a2a50] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-lg font-medium">Berlin, Germany</p>
            <p className="text-sm text-gray-300">Tuesday, Aug 5, 2025</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-5xl">☀️</span>
            <p className="text-5xl font-bold">20°</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#2a2a50] p-4 rounded-xl text-center">
            <p className="text-gray-300 text-sm">Feels Like</p>
            <p className="font-semibold text-xl">18°</p>
          </div>
          <div className="bg-[#2a2a50] p-4 rounded-xl text-center">
            <p className="text-gray-300 text-sm">Humidity</p>
            <p className="font-semibold text-xl">46%</p>
          </div>
          <div className="bg-[#2a2a50] p-4 rounded-xl text-center">
            <p className="text-gray-300 text-sm">Wind</p>
            <p className="font-semibold text-xl">14 km/h</p>
          </div>
          <div className="bg-[#2a2a50] p-4 rounded-xl text-center">
            <p className="text-gray-300 text-sm">Precipitation</p>
            <p className="font-semibold text-xl">0 mm</p>
          </div>
        </div>

        
        <div>
          <div className="flex gap-4">
            {dailyForecast.map((day) => (
              <div
                key={day.day}
                className="bg-[#2a2a50] p-4 rounded-xl flex flex-col items-center min-w-80px"
              >
                <p className="font-medium">{day.day}</p>
                <span className="text-2xl my-2">{day.icon}</span>
                <p className="font-semibold">{day.temp}°</p>
                <p className="text-gray-400 text-sm">{day.min}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-1/4 bg-[#1a1a40] rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Hourly forecast</h2>
        <select className="mb-4 w-full p-2 rounded-lg text-black">
          <option>Tuesday</option>
        </select>
        <div className="flex flex-col gap-3">
          {hourlyForecast.map((hour) => (
            <div
              key={hour.time}
              className="flex justify-between bg-[#2a2a50] p-3 rounded-lg"
            >
              <p>{hour.time}</p>
              <p>{hour.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;