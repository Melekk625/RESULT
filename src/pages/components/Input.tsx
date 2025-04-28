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
      <div className='flex max-w-[90%] m-auto bg-[#F3F3F3] py-[60px] px-[100px] rounded-[45px] mb-[140px] overflow-hidden'>
        <div className='w-[80%]'>
          <div className='flex mb-10'>
            <div className='pr-9'>
              <input
                type="radio"
                checked={option === 'sayHi'}
                onChange={() => setOption('sayHi')}
                className='mr-4'
              />
              Say Hi
            </div>
            <div>
              <input
                type="radio"
                checked={option === 'getQuote'}
                onChange={() => setOption('getQuote')}
                className='mr-4'
              />
              Get a Quote
            </div>
          </div>

          <p className='py-1'>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
            className='w-4/5 border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'
          />

          <p className='py-1'>Email*</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
            className='w-4/5 border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'
          />

          <p className='py-1'>Message*</p>
          <textarea
            name="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
            className='w-4/5 border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'
          ></textarea>

          <div
            className='w-4/5 border-2 bg-black text-white text-center py-5 px-[35px] rounded-[14px] cursor-pointer'
            onClick={handleSubmit}
          >
            <button>Send Message</button>
          </div>
        </div>

        <div className='w-[640px] h-[600px] relative left-80'>
          <Image src="/C.svg" alt="Boy" fill />
        </div>
      </div>
    </div>
  );
}

export default Input;
