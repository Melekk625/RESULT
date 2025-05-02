import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Website({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="max-w-[90%] m-auto mb-[140px]">
        {['Website Audit & Analysis', 'Keyword Research & Strategy', 'On-Page Optimization', 'Content Creation & Optimization', 'Link Building', 'Monitoring & Reporting'].map((title, index) => (
          <div className="rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10" key={index}>
            <div className="relative w-[20%] h-[180px]">
              <Image
                src="/Black.svg"
                alt="Black"
                fill
                loading="lazy"
              />
              <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-[#B9FF66]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="w-[80%] p-4">
              <h4 className="text-[35px] sm:text-[45px] py-4">{title}</h4>
              <p className="text-[16px] sm:text-[20px]">
                {index === 0 && 'We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.'}
                {index === 1 && 'Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.'}
                {index === 2 && 'We optimize your website\'s structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.'}
                {index === 3 && 'High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.'}
                {index === 4 && 'We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.'}
                {index === 5 && 'We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Website;
