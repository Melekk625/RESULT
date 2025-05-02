import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

function Input({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [option, setOption] = useState('sayHi');

  const handleSubmit = () => {
    console.log({ name, email, message, option });
    setName('');
    setEmail('');
    setMessage('');
    setOption('sayHi');
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row max-w-[90%] m-auto bg-[#F3F3F3] py-10 px-6 lg:px-[100px] rounded-[30px] lg:rounded-[45px] mb-[100px] lg:mb-[140px] overflow-hidden gap-10'>
        
        {/* Form Section */}
        <div className='w-full lg:w-1/2'>
          <div className='flex mb-8 gap-6'>
            <label className='flex items-center'>
              <input
                type="radio"
                checked={option === 'sayHi'}
                onChange={() => setOption('sayHi')}
                className='mr-2'
              />
              Say Hi
            </label>
            <label className='flex items-center'>
              <input
                type="radio"
                checked={option === 'getQuote'}
                onChange={() => setOption('getQuote')}
                className='mr-2'
              />
              Get a Quote
            </label>
          </div>

          <div className='mb-4'>
            <p className='py-1'>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              required
              className='w-full border py-4 px-6 rounded-[14px] bg-white'
            />
          </div>

          <div className='mb-4'>
            <p className='py-1'>Email*</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
              className='w-full border py-4 px-6 rounded-[14px] bg-white'
            />
          </div>

          <div className='mb-6'>
            <p className='py-1'>Message*</p>
            <textarea
              name="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message'
              className='w-full border py-4 px-6 rounded-[14px] bg-white h-32 resize-none'
            ></textarea>
          </div>

          <div
            className='w-full bg-black text-white text-center py-4 px-6 rounded-[14px] cursor-pointer hover:opacity-90'
            onClick={handleSubmit}
          >
            <button>Send Message</button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 h-[300px] lg:h-[600px] relative hidden lg:block'>
          <Image src="/C.svg" alt="Boy" fill className='object-contain' />
        </div>
      </div>
    </div>
  );
}

export default Input;
