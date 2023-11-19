import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { NFTCardType } from '../../interface';
import { useRouter } from 'next/router';

const NftCard: React.FC<NFTCardType> = ({ ownername, src, price, highestbid, title, owneravatar }) => {
    // Component logic here
    const router = useRouter()
    return (

        <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full p-3 rounded-xl shadow-md opacity-70 hover:opacity-100' onClick={() => router.replace(`/nftmarketplace/NFTs/${title}`)}>

            <Image src={src} width={400} height={400} className='' alt={title} style={{ borderRadius: 10 }} />
            <div className='pl-2'>
                <div className='pt-1'>
                    {/* <Typography variant="h6" fontWeight={700} color='white'> {title}</Typography> */}
                </div>
                <div className='flex pt-1 pl-0 items-center'>
                    <Avatar alt={ownername} src={owneravatar} sx={{ width: 45, height: 45 }} />
                    <Typography className='pl-3' variant="subtitle1" style={{ fontWeight: 700 }} color="white"> {ownername}</Typography>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='pl-2 '>
                    <Typography variant="subtitle2" style={{ fontWeight: 500 }} pt={1} color="#FFFFFF80">Price </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 500 }} color="white">{price} ETH</Typography>
                </div>
                <div className='pr-2'>
                    <Typography className='flex place-content-end' variant="subtitle2" style={{ fontWeight: 500 }} pt={1} color="#FFFFFF80">Highest Bid </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: 500 }} color="white">{highestbid} wETH</Typography>
                </div>
            </div>
        </div>

    );
};

export default NftCard;