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
      <div className='h-[400px] w-[400px] bg-white shadow-2xl rounded-xl'>
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
        <div className='text-center'>
          Victor Crest <span>26</span>
        </div>

        <div>
          {socialData?.map((social) => (
            <div key={social.followers} className=''>
              {social.followers}
              {social.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
