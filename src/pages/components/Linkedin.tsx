import React from 'react';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const team = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    image: '/Picture.svg',
    desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    image: '/Picture1.svg',
    desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    image: '/Picture2.svg',
    desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    image: '/Mask.svg',
    desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    image: '/Picture5.svg',
    desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    image: '/Picture6.svg',
    desc: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
  },
];

type Props = {};

function Linkedin({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='max-w-[90%] m-auto mb-[208px] flex flex-wrap justify-center gap-6'>
        {team.map((member, idx) => (
          <div key={idx} className='w-full sm:w-[45%] lg:w-[30%] border border-black border-b-4 rounded-[45px] p-6 sm:p-8 bg-white shadow-md'>
            <div className='flex items-start gap-4 mb-6'>
              <div className='w-[105px] h-[103px] relative flex-shrink-0'>
                <Image src={member.image} alt={member.name} fill className='object-cover rounded-full' />
              </div>
              <div className='flex-grow'>
                <p className='font-medium text-[20px]'>{member.name}</p>
                <p className='text-[18px] font-normal'>{member.role}</p>
              </div>
              <div className='text-black'>
                <LinkedInIcon className='text-[#B9FF66] bg-black rounded-full p-1' fontSize='large' />
              </div>
            </div>
            <p className='text-[16px]'>{member.desc}</p>
          </div>
        ))}
        <div className='w-full flex justify-center mt-10'>
          <button className='py-4 px-8 bg-black text-white rounded-[14px] hover:bg-[#111] transition'>See all team</button>
        </div>
      </div>
    </div>
  );
}

export default Linkedin;
