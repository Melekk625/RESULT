"use client";

import { useEffect, useState } from "react";

const stats = [
  { staticValue: 8, label: "Years of Experience", suffix: "+" },
  { endValue: 50, label: "Experts", suffix: "+" },
  { endValue: 100, label: "Successful Campaigns", suffix: "+" },
  { endValue: 20, label: "Industry Awards", suffix: "+" },
  { endValue: 500, label: "ROI for our clients", suffix: "%" },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(
    stats.map((s) => (s.staticValue !== undefined ? s.staticValue : 0))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startCounting(1);
  }, []);

  const startCounting = (index: number) => {
    if (index >= stats.length) return;

    const target = stats[index].endValue ?? 0;
    const duration = 1000; // in ms
    const frameRate = 1000 / 60; // ~60 FPS
    const increment = Math.ceil(target / (duration / frameRate));

    const interval = setInterval(() => {
      setCounts((prev) => {
        const updated = [...prev];
        if (updated[index] < target) {
          updated[index] = Math.min(updated[index] + increment, target);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentIndex(index);
            startCounting(index + 1);
          }, 300);
        }
        return updated;
      });
    }, frameRate);
  };

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center relative">
        {stats.map((stat, index) => (
          <div key={index} className="relative pt-10">
            {/* Connecting arc and line */}
            {index !== stats.length - 1 && (
              <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 items-center">
                <div className="w-5 h-5 border-t-2 border-l-2 border-gray-400 rounded-tl-full"></div>
                <div
                  className={`h-0.5 bg-gray-400 transition-all duration-700 ease-in-out ${
                    currentIndex >= index ? "w-20" : "w-0"
                  }`}
                ></div>
                <div className="w-5 h-5 border-t-2 border-r-2 border-gray-400 rounded-tr-full"></div>
              </div>
            )}

            <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
