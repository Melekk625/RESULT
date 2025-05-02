import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

export default function Impact() {
  return (
    <section className={spaceGrotesk.className}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          {/* Title Box */}
          <div className="bg-[#B9FF66] text-2xl sm:text-3xl lg:text-4xl font-medium rounded-md px-4 py-2 w-fit">
            <h2>Our Journey</h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl">
            From humble beginnings to industry leaders, discover how Positivus has
            evolved to drive success for businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
