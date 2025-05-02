import React from "react";

type Props = {};

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
    <section className="w-full flex flex-col items-center bg-white py-20 relative px-4 sm:px-6 lg:px-8">
      {/* Vertical Line */}
      <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-[#c5f931] transform -translate-x-1/2 z-0" />

      {timeline.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row w-full max-w-6xl mb-20 relative"
        >
          {index % 2 === 0 ? (
            <>
              {/* Left year */}
              <div className="sm:w-1/2 flex justify-end pr-0 sm:pr-12 mb-6 sm:mb-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121212] text-right max-w-full w-full text-center sm:text-left">
                  {item.year}
                </h2>
              </div>

              {/* Right card */}
              <div className="sm:w-1/2 pl-0 sm:pl-12">
                <div className="bg-[#121212] text-white p-6 sm:p-8 rounded-3xl shadow-lg max-w-md w-full break-words hyphens-auto">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Left card */}
              <div className="sm:w-1/2 flex justify-end pr-0 sm:pr-12 mb-6 sm:mb-0">
                <div className="bg-[#121212] text-white p-6 sm:p-8 rounded-3xl shadow-lg max-w-md w-full break-words hyphens-auto">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right year */}
              <div className="sm:w-1/2 pl-0 sm:pl-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121212] text-center sm:text-left max-w-full w-full">
                  {item.year}
                </h2>
              </div>
            </>
          )}

          {/* Timeline Dot */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-2 z-10">
            <div className="w-6 h-6 bg-[#c5f931] rounded-full" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
