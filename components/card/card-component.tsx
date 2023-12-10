import React from 'react';
import Image from 'next/image';
import cardHeaderImage from '@/public/assets/icons/bg-pattern-card.svg';
import victorImage from '@/public/assets/icons/image-victor.jpg';

export const CardComponent = () => {
  const socialData = [
    {
      followers: '80K',
      name: 'Followers',
    },
    {
      followers: '803K',
      name: 'Likes',
    },
    {
      followers: '1.4K',
      name: 'Photos',
    },
  ];

  return (
    <div className='text-base flex justify-center items-center h-[100dvh] font-Kumbh'>
      <div className='text-xl h-[480px] w-[470px] bg-white shadow-2xl rounded-3xl'>
        <div>
          <Image
            src={cardHeaderImage}
            alt={'cardHeaderImage'}
            className='rounded-t-3xl w-full'
          />
        </div>
        <div className='flex justify-center -mb-12'>
          <Image
            src={victorImage}
            alt={'victorImage'}
            className='rounded-full relative bottom-[4.2rem] border-[7px] border-white w-36'
          />
        </div>
        <div className='flex flex-col justify-center items-center font-extrabold text-2xl'>
          <div className=' gap-4   '>
            Victor Crest <span className='font-light   text-gray-400'>26</span>
          </div>
          <div className='font-light text-lg text-gray-400 tracking-wide mt-2'>
            London
          </div>
        </div>

        <hr className='bg-black my-6' />
        <div className='flex justify-around text-center'>
          {socialData?.map((social) => (
            <div key={social.followers} className=''>
              <div className='font-extrabold text-xl  '>{social.followers}</div>
              <div className='font-light text-sm text-gray-400  tracking-widest	'>
                {social.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
