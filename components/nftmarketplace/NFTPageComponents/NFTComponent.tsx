import { useRouter } from 'next/router';
import { NFTcards } from '../Store';
import { NFTCardType } from '../interface';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import {Avatar} from '@mui/material';

const NFT = () => {
  const router = useRouter();
  const [NFT, setNFT] = useState<NFTCardType>()
  const { id } = router.query;
  useEffect(() => {
    setNFT(NFTcards.find((nft) => nft.title === id))
  }, [id])


  if (!NFT) {
    return <div>Loading...</div>;
  }

  return (

    <div className='flex ml-20 mr-20 mb-10 bg-[#3B3B3B] rounded-xl'>
      <Image
        alt={NFT.title}
        width={500}
        height={500}
        className='p-10'
        src={NFT.src}
      />
      <div className='mt-10'>
       <Typography variant='h4' color={'white'}  fontWeight={700}>
                {NFT.title}
            </Typography>

            <Typography variant='h6' fontWeight={500} className='pt-1' color={'#FFFFFF80'}>
                Created on {NFT.date}
            </Typography>
            <Typography variant='h5' fontWeight={700} className='pt-6' color={'#FFFFFF80'}>
                Created By
            </Typography>
            <div className='flex items-center pt-1'>
            <Avatar alt={NFT.ownername} src={NFT.owneravatar} sx={{ width: 40, height: 40 }} />
            <Typography className='pl-3' variant="h5" style={{ fontWeight: 700 }} color="white"> {NFT.ownername}</Typography>
            </div>
            <Typography variant='h5' fontWeight={700} className='pt-6' color={'#FFFFFF80'}>
                Descrition
            </Typography>
            <Typography variant='h6' fontWeight={500} className='pt-1' color={'#FFFFFF80'}>
                {NFT.title} 
            </Typography>
      </div>
    </div>
  );
};

export default NFT;
