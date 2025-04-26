import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const steps = [
  { number: '01', title: 'Consultation', description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.' },
  { number: '02', title: 'Research and Strategy Development', description: 'We conduct research and develop a tailored marketing strategy based on your business needs.' },
  { number: '03', title: 'Implementation', description: 'We implement the marketing strategy using the best tools and practices.' },
  { number: '04', title: 'Monitoring and Optimization', description: 'We constantly monitor performance and optimize campaigns for better results.' },
  { number: '05', title: 'Reporting and Communication', description: 'We provide regular reports and maintain open communication throughout the project.' },
  { number: '06', title: 'Continual Improvement', description: 'We keep improving your marketing strategy based on data and feedback.' },
];

export default function YourComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
    <div className='mb-[140px]'>
      {steps.map((step, index) => (
        <div key={index} className="box mt-8">
          <div
            className={`max-w-[90%] m-auto justify-between items-center px-[60px] py-[41px] border-[1px] border-black rounded-[45px] border-b-4 bg-[#F3F3F3] mt-[30px] ${activeIndex === index ? 'hidden' : 'flex'}`}
          >
            <div className="flex justify-center items-center font-medium">
              <p className="pr-[19.5px] text-[60px]">{step.number}</p>
              <p className="text-[30px]">{step.title}</p>
            </div>

            <div
              className="w-[58px] h-[58px] border-2 flex justify-center items-center rounded-[50%] cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <AddIcon />
            </div>
          </div>
          <div
            className={`max-w-[90%] m-auto px-[60px] py-[41px] border-[1px] border-black rounded-[45px] border-b-4 bg-[#B9FF66] mt-[30px] ${activeIndex === index ? 'block' : 'hidden'}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center font-medium">
                <p className="pr-[19.5px] text-[60px]">{step.number}</p>
                <p className="text-[30px]">{step.title}</p>
              </div>

              <div
                className="w-[58px] h-[58px] border-2 flex justify-center items-center rounded-[50%] cursor-pointer"
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
    </>
  );
}
