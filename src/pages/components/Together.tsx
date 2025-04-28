import React from 'react'
import Image from 'next/image'
type Props = {}

function Together({ }: Props) {
    return (
        <div>
            <div className='flex max-w-[90%] m-auto my-[70px] rounded-[45px] bg-[#F3F3F3]'>
                <div className="w-1/2 min-w-[300px]">
                          <Image
                            src="/song.svg"
                            width={600.46}
                            height={515}
                            alt="Song"
                            priority
                          />
                        </div>
                <div className='w-1/2 flex justify-center items-center'>
                <div>

                    <h2 className="font-medium text-[60px] leading-[100%] tracking-[0%]">Toghether for Suceess</h2>
                    <p className="font-normal text-[20px] leading-[28px] tracking-[0%] mt-6">Giriş yaparak, müşterilerinle bağlantı kurmana ve daha iyi işletme sonuçları almana yardımcı olmaları için Meta Business Suite, Business Manager, Reklam Yöneticisi ve daha fazla araca gidebilirsin.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Together