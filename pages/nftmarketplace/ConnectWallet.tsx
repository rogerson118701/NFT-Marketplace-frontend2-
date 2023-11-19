import Navbar from '@/components/nftmarketplace/navbar'
import Image from 'next/image'
import { Typography } from '@mui/material'
import React from 'react'

function ConnectWallet() {
    const walletitems = [
        {
            name: 'Metamask',
            src: '/images/metamask.svg'
        },
        {
            name: 'Wallet Connect',
            src: '/images/wallet-connect.svg'
        },
        {
            name: 'Coinbase',
            src: '/images/Coinbase.svg'
        }
    ]
    return (
        <div className='nftmarketplace'>
            <Navbar />
            <div className='flex'>
                <Image
                    src="/images/image-placeholder.png"
                    alt="image-placeholder"
                    width={610}
                    height={610}
                />
                <div className='mt-24 m-14'>
                    <Typography variant='h2' color={'white'} fontWeight={700} >
                        Connect Wallet
                    </Typography>

                    <Typography variant='h5' alignSelf={'stretch'} fontWeight={500} ml={1} mt={1} color={'#FFFFFF80'}>
                        Choose a wallet you want to connect.
                    </Typography>
                    <Typography variant='h5' alignSelf={'stretch'} fontWeight={500} ml={1} color={'#FFFFFF80'}>
                        There are several wallet providers.
                    </Typography>
                    {walletitems.map((item) => {
                        return (
                            <div key={item.name} className='flex border-2 rounded-xl border-purple-200 items-center p-5 pl-10 m-5 hover:border-blue-500'>
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                />
                                <Typography variant='h5' fontWeight={700} ml={5} color={'white'}>
                                    {item.name}
                                </Typography>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet