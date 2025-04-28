import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  { title: 'Are there any additional fees or charges that may apply?', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.' },
  { title: 'Can I change or cancel my plan at any time?', description: 'We conduct research and develop a tailored marketing strategy based on your business needs.' },
  { title: 'Do you offer a free trial or consultation?', description: 'We implement the marketing strategy using the best tools and practices.' },
  { title: 'How do you bill and invoice your clients?', description: 'We constantly monitor performance and optimize campaigns for better results.' },
  { title: 'Are you services guaranteed to deliver results?', description: 'We provide regular reports and maintain open communication throughout the project.' },
  { title: 'Do you offer contract-based or monthly retainer-based pricing?', description: 'We keep improving your marketing strategy based on data and feedback.' },
];

export default function Addition() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-[140px]">
      {steps.map((step, index) => (
        <div key={index} className="box mt-8">
          {/* Collapsed View */}
          <div
            className={`max-w-[90%] m-auto justify-between items-center px-[60px] py-[41px] border-[1px] border-black rounded-[45px] border-b-4 bg-[#F3F3F3] mt-[30px] ${activeIndex === index ? 'hidden' : 'flex'}`}
          >
            <div className="flex items-center font-medium">
              <p className="text-[30px]">{step.title}</p>
            </div>
            <div
              className="w-[58px] h-[58px] border-2 flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <AddIcon />
            </div>
          </div>

          {/* Expanded View */}
          <div
            className={`max-w-[90%] m-auto px-[60px] py-[41px] border-[1px] border-black rounded-[45px] border-b-4 bg-[#B9FF66] mt-[30px] ${activeIndex === index ? 'block' : 'hidden'}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center font-medium">
                <p className="text-[30px]">{step.title}</p>
              </div>
              <div
                className="w-[58px] h-[58px] border-2 flex justify-center items-center rounded-full cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <RemoveIcon />
              </div>
            </div>
            <hr className="my-[30px]" />
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
