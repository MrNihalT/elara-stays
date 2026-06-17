"use client";

import { useEffect, useState } from "react";
import { FaCloudSun } from "react-icons/fa6";

type WeatherState = {
  temp: number;
  wind: number;
};

export default function WeatherBadge() {
  const [weather, setWeather] = useState<WeatherState | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.open-meteo.com/v1/forecast?latitude=11.6854&longitude=76.1320&current_weather=true", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            wind: Math.round(data.current_weather.windspeed),
          });
        }
      })
      .catch(() => setWeather(null));

    return () => controller.abort();
  }, []);

  return (
    <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-bold text-white backdrop-blur md:inline-flex">
      <FaCloudSun aria-hidden />
      <span>{weather ? `Wayanad ${weather.temp}°C` : "Wayanad weather"}</span>
    </div>
  );
}
