import React from 'react'
import Image from 'next/image'

type Props = {}

function Together({ }: Props) {
    return (
        <div>
            <div className='flex flex-col lg:flex-row max-w-[90%] m-auto my-[70px] rounded-[45px] bg-[#F3F3F3] overflow-hidden'>
                <div className="lg:w-1/2 w-full relative min-h-[300px]">
                    <Image
                        src="/song.svg"
                        alt="Teamwork Illustration"
                        fill
                        className="object-contain p-8"
                        priority
                    />
                </div>
                <div className='lg:w-1/2 w-full flex justify-center items-center p-8'>
                    <div>
                        <h2 className="font-medium text-[40px] lg:text-[60px] leading-[110%] tracking-tight">
                            Together for Success
                        </h2>
                        <p className="font-normal text-[18px] lg:text-[20px] leading-[28px] mt-6">
                            Giriş yaparak, müşterilerinle bağlantı kurmana ve daha iyi işletme sonuçları almana yardımcı olmaları için Meta Business Suite, Business Manager, Reklam Yöneticisi ve daha fazla araca gidebilirsin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Together
