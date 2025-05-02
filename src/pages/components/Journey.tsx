import React from 'react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500'],
  subsets: ['latin'],
})

function Journey() {
  return (
    <section className={spaceGrotesk.className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight rounded-md bg-[#B9FF66] px-4 py-2 font-medium w-fit">
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
            A snapshot of the milestones and achievements that drive our success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Journey
