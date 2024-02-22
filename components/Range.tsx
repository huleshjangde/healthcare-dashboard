"use client"
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState(25);
  const min = 15;
  const max = 40;
  const step = 1;
  const range = max - min;

  const handleChange = (e:any) => {
    setValue(e.target.value);
  };

  // Generate marks for the scale
  const marks = [];
  for (let i = min; i <= max; i += step) {
    marks.push(
      <div key={i} className="text-xs w-1 text-center">
        {i % 5 === 0 ? i : ''} {/* Show number every 5 steps */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <label htmlFor="range" className="block text-sm font-medium text-gray-700">
        Body Mass Index (BMI)
      </label>
      <div className="w-1/2 py-6">
        <input
          id="range"
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          style={{
            backgroundSize: `${(value - min) * 100 / range}% 100%`,
            background: 'linear-gradient(to right, #10B981 0%, #10B981 100%, #EF4444 100%, #EF4444 100%)'
          }}
        />
        <div className="flex justify-between mt-2">
          {marks}
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">{value}</div>
        <div className={`text-sm ${value < 18.5 || value > 25 ? 'text-red-500' : 'text-green-500'}`}>
          {value < 18.5 ? 'Underweight' : value <= 25 ? 'Healthy' : 'Overweight'}
        </div>
      </div>
    </div>
  );
}
