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
    <div className='flex justify-center items-center h-[100dvh] '>
      <div className='h-[450px] w-[400px] bg-white shadow-2xl rounded-xl'>
        <div>
          <Image
            src={cardHeaderImage}
            alt={''}
            className='rounded-t-xl w-full'
          />
        </div>
        <div className='flex justify-center'>
          <Image
            src={victorImage}
            alt={''}
            className='rounded-full relative bottom-12'
          />
        </div>
        <div className='flex flex-col justify-center items-center pb-8 '>
          <div className=' gap-4  font-bold'>
            Victor Crest <span className='font-light text-gray-400'>26</span>
          </div>
          <div className='font-light text-gray-400'>London</div>
        </div>

        <hr className='bg-black my-5' />
        {/* <div className='bg-black h-[10px]'></div> */}
        <div className='flex justify-around text-center'>
          {socialData?.map((social) => (
            <div key={social.followers} className=''>
              <div className='font-bold'>{social.followers}</div>
              <div className='font-light text-gray-400'>{social.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
