import NftCard from './Nft-Card';
import { NFTcards } from '../../Store';
import { NFTCardType } from '../../interface';
import { useState } from 'react';

const NftCards = () => {
    const [data,setData]=useState<NFTCardType[]>(NFTcards)
    return (
        <div>
            <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-20 lg:grid-cols-4 sm:grid-cols-2'>
                {data.slice(NftCards.length-4).map((card) =>
                    <NftCard key={card.title} ownername={card.ownername} price={card.price} date={card.date} highestbid={card.highestbid} src={card.src} owneravatar={card.owneravatar} title={card.title} />
                )}
            </div>
        </div>
    );
};

export default NftCards;