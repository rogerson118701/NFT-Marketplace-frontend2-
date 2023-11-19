import React from 'react'
// import NftCard from './Nft-Card';

type inittype = {
    ownername: string;
    title: string;
    src: string;
    owneravatar: string;
    price: number;
    highestbid: number;
    date: string;
}
interface Props {
    filtered: inittype[]
}


const NftCards: React.FC<Props> = ({ filtered }) => {
    
    return (
        <div>
            <div className='grid gap-x-8 gap-y-3 grid-cols-1 gap-10 m-3 ml-20 mr-20 lg:grid-cols-4 sm:grid-cols-2'>
                {/* {filtered.map((card) =>
                    <NftCard key={card.title} ownername={card.ownername} price={card.price} highestbid={card.highestbid} src={card.src} owneravatar={card.owneravatar} title={card.title} />
                )} */}
            </div>
        </div>
    );
};

export default NftCards;