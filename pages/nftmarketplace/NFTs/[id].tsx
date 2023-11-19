import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { NFTcards } from '@/components/nftmarketplace/Store';
import { NFTCardType } from '@/components/nftmarketplace/interface';
import { useEffect, useState } from 'react';
import { stringify } from 'querystring';
import Navbar from '@/components/nftmarketplace/navbar';
import NFT from '@/components/nftmarketplace/NFTPageComponents/NFTComponent';

const NFTs = () => {
 
  return (
    <div className='nftmarketplace'>
      <Navbar/>
      <NFT/>
    </div>
  );
};

export default NFTs;
