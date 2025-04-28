"use client";

import { useEffect, useRef, useState } from "react";

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
    if (currentIndex === 0) {
      startCounting(1);
    }
  }, []);

  const startCounting = (index) => {
    if (index >= stats.length) return;

    const interval = setInterval(() => {
      setCounts((prev) => {
        const updated = [...prev];
        if (updated[index] < stats[index].endValue) {
          updated[index]++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentIndex(index);
            startCounting(index + 1);
          }, 500);
        }
        return updated;
      });
    }, 20);
  };

  return (
    <section className="w-full py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 relative">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/2 md:w-auto relative pt-8"
          >
            {/* Top arc + line */}
            {index !== stats.length && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center">
                {/* Sol yarımkörə */}
                <div className="w-5 h-5 border-t-2 border-l-2 border-gray-400 rounded-tl-full"></div>
                {/* Düz xətt */}
                <div className={`h-0.5 bg-gray-400 transition-all duration-700 ease-in-out ${currentIndex >= index ? "w-20" : "w-0"}`}></div>
                {/* Sağ yarımkörə */}
                <div className="w-5 h-5 border-t-2 border-r-2 border-gray-400 rounded-tr-full"></div>
              </div>
            )}
            {/* Number */}
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {counts[index]}
              {stat.suffix}
            </div>
            {/* Label */}
            <div className="text-base text-gray-600 text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}





