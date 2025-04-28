import React from 'react'

type Props = {}

function Cards({}: Props) {
    const timeline = [
        {
          year: "2019",
          title: "The Beginning",
          description:
            "Positivus was founded to help businesses navigate the digital world and achieve online success.",
        },
        {
          year: "2021",
          title: "Industry Recognition",
          description:
            "Positivus was named among the top 50 global digital agencies, affirming our leadership.",
        },
        {
          year: "2023",
          title: "Innovation and Growth",
          description:
            "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
        },
        {
          year: "2024",
          title: "Leading the Future",
          description:
            "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized, data-driven strategies and setting new standards in digital marketing.",
        },
    ];
  
  
  return (
    <section className="w-full flex flex-col items-center bg-white py-20 relative">
      {/* Vertical green line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#c5f931] transform -translate-x-1/2 z-0"></div>

      {timeline.map((item, index) => (
        <div
          key={index}
          className="flex w-full max-w-6xl mb-20 relative"
        >
          {/* Left Side */}
          {(index === 0 || index === 2) && (
            <>
              <div className="w-1/2 flex justify-end pr-12">
                <div className="flex flex-col items-end">
                  <h2 className="text-4xl font-bold text-[#121212] mb-4">{item.year}</h2>
                </div>
              </div>

              <div className="w-1/2 flex items-start pl-12">
                <div className="bg-[#121212] text-white p-8 rounded-3xl shadow-lg max-w-md">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </>
          )}

          {/* Right Side */}
          {(index === 1 || index === 3) && (
            <>
              <div className="w-1/2 flex justify-end pr-12">
                <div className="bg-[#121212] text-white p-8 rounded-3xl shadow-lg max-w-md">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="w-1/2 flex flex-col items-start pl-12">
                <h2 className="text-4xl font-bold text-[#121212] mb-4">{item.year}</h2>
              </div>
            </>
          )}

          {/* Center Line Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 z-10">
            <div className="w-6 h-6 bg-[#c5f931] rounded-full"></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Cards
