import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-[#1a1a2e] flex justify-center items-center h-25 w-full px-3">
        <img src="logo.png" alt="" className="w-37 h-9 absolute top-5"/>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center flex-1 px-8 lg:px-32 py-20 space-y-16 lg:space-y-0 lg:space-x-24">

        {/* Watch Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <div className="relative bg-gray-300 rounded-[40px] w-[250px] h-[330px] flex items-center justify-center">
            <div className="absolute bg-black rounded-[30px] w-[220px] h-[300px] flex items-center justify-center text-white text-3xl font-mono">
              20:16:45
            </div>
            <div className="absolute -right-3 top-22 transform -translate-y-1/2 bg-gray-400 w-3 h-14 rounded-r-md"></div>
          </div>
        </div>

        {/* Product Info */}
        <div className=" lg:text-left relative -top-4 -left-30">
          <h2 className="text-[2.5em] font-bold text-black mb-6 leading-tight ">
            FitBit 19 — The Smartest Watch
          </h2><br />
          <p className="text-gray-600 text-[1rem] pb-15 leading-[1.4]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium corporis <br /> quis voluptates iure ullam ipsam autem?
          </p><br />

          {/* Select Color */}
          <div className="mb-5">
            <h3 className="font-bold text-gray-800 text-xl mb-3">Select Color</h3><br />
            <div className="flex justify-center lg:justify-start">
              {["bg-black", "bg-red-600", "bg-indigo-600", "bg-purple-600"].map((color, i) => (
                <div
                  key={i}
                  className={`${color} w-15 h-11 rounded-lg border-5 border-white cursor-pointer border-non hover:scale-110 transition-transform duration-200 relative -top-2 `}
                ></div>
              ))}
            </div>
          </div><br />

          {/* Features */}
          <div className="mb-10">
            <h3 className="font-bold text-gray-800 text-xl mb-3">Features</h3><br />
            <div className="flex  justify-center lg:justify-start relative -top-2">
              <div className=" font-semibold text-[15px] bg-gray-200 w-25 h-12 rounded-lg border-5 border-white cursor-pointer border-non hover:scale-110 transition-transform duration-200  flex items-center justify-center">
                Time
              </div>
              <div className="font-semibold text-[15px] bg-gray-200 w-25 h-12 rounded-lg border-6 border-white cursor-pointer border-non hover:scale-110 transition-transform duration-200   flex items-center justify-center">
                Heart Rate
              </div>
            </div>
          </div><br />

          {/* Buy Button */}
          <button className="w-35 h-12 bg-[#ffb300] hover:bg-[#ffa000] text-black font-bold py-4 px-12 rounded-[5px] text-lg shadow-md transition-transform hover:scale-105">
            BUY NOW
          </button>
        </div>
      </main>
    </div>
  );
}
