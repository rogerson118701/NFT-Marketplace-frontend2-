import * as React from 'react';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

const item = {
  src: '/images/1.png',
  text: 'Space Walking',
  avatar: '/images/Phonghoa.png',
  ownername: 'Rogerson'
}

export default function HeaderImage() {
  return (
    <div className='flex p-10 pt-10 pb-0 h-5/6 max-w-screen-md'>
      <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full rounded-xl shadow-md '>

        <Image src={item.src} width={1000} height={1000} className='w-full h-5/6' alt='444' style={{ borderRadius: 10 }} />
        <div className='pl-5'>
          <div className='pt-1'>
            <Typography variant="h5" fontWeight={700} color='white'> {item.text}</Typography>
          </div>
          <div className='flex p-3 pt-1 pl-0 items-center'>
            <Avatar alt={item.ownername} src={item.avatar} sx={{ width: 45, height: 45 }} />
            {/* <Typography className='pl-3' variant="h6" style={{ fontWeight: 500 }} color="#FFFFFF80"> {item.ownername}</Typography> */}
          </div>
        </div>
      </div>
    </div>
  );
}
