import * as React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Navbar from '@/components/nftmarketplace/navbar';
import MarketplaceHeader from '@/components/nftmarketplace/marketplacecomponents/Marketplace-Header';


const pages = ['Marketplace', 'Rankings', 'connect wallet'];

function Marketplace() {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className='nftmarketplace'>
      <Navbar />
      <MarketplaceHeader/>
    </div>
  );
}
export default Marketplace;