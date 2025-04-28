import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: '01', title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.' },
  { number: '02', title: 'Research and Strategy Development', description: 'We conduct research and develop a tailored marketing strategy based on your business needs.' },
  { number: '03', title: 'Implementation', description: 'We implement the marketing strategy using the best tools and practices.' },
  { number: '04', title: 'Monitoring and Optimization', description: 'We constantly monitor performance and optimize campaigns for better results.' },
  { number: '05', title: 'Reporting and Communication', description: 'We provide regular reports and maintain open communication throughout the project.' },
  { number: '06', title: 'Continual Improvement', description: 'We keep improving your marketing strategy based on data and feedback.' },
];

export default function Consultation() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-[70px] sm:mb-[140px]">
      {steps.map((step, index) => (
        <div key={index} className="box mt-6 sm:mt-8">
          {/* Closed Box */}
          <div
            className={`max-w-[90%] m-auto justify-between items-center px-6 sm:px-[60px] py-6 sm:py-[41px] border-[1px] border-black rounded-[30px] sm:rounded-[45px] border-b-4 bg-[#F3F3F3] ${activeIndex === index ? 'hidden' : 'flex'} flex-col sm:flex-row`}
          >
            <div className="flex justify-center items-center font-medium mb-4 sm:mb-0">
              <p className="pr-4 text-[40px] sm:text-[60px]">{step.number}</p>
              <p className="text-[24px] sm:text-[30px]">{step.title}</p>
            </div>

            <div
              className="w-12 h-12 sm:w-[58px] sm:h-[58px] border-2 flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <AddIcon className="text-[28px] sm:text-[32px]" />
            </div>
          </div>

          {/* Opened Box */}
          <div
            className={`max-w-[90%] m-auto px-6 sm:px-[60px] py-6 sm:py-[41px] border-[1px] border-black rounded-[30px] sm:rounded-[45px] border-b-4 bg-[#B9FF66] ${activeIndex === index ? 'block' : 'hidden'}`}
          >
            <div className="flex justify-between items-center flex-col sm:flex-row">
              <div className="flex justify-center items-center font-medium mb-4 sm:mb-0">
                <p className="pr-4 text-[40px] sm:text-[60px]">{step.number}</p>
                <p className="text-[24px] sm:text-[30px]">{step.title}</p>
              </div>

              <div
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] border-2 flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <RemoveIcon className="text-[28px] sm:text-[32px]" />
              </div>
            </div>

            <hr className="my-6 sm:my-[30px]" />
            <p className="text-[16px] sm:text-[18px] leading-[140%]">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
