import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import RocketLaunch from '@mui/icons-material/RocketLaunch';

const items = [
    {
        number: "37k+",
        title: "Total Sale"
    },
    {
        number: "20k+",
        title: "Auctions"
    },
    {
        number: "99k+",
        title: "Artists"
    },
]

function HeaderText() {

    return (

        <div className='box p-10 pr-5 pl-14 pb-0 max-w-screen-md'>

            <Typography variant='h1' color={'white'}  fontWeight={700}>
                Discover digital art & Collect NFTs
            </Typography>

            <Typography variant='h6' fontWeight={500} className='m-2' color={'#FFFFFF80'}>
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </Typography>

            <Button className='m-2 bg-purple-400 rounded-xl' color='secondary' variant="contained">
               <div className='p-1'>
               <RocketLaunch /> {"Get Started"} 
               </div>
            </Button>
            <div>

            </div>
            <div className='flex justify-between pt-5 mr-10'>
                {items.map((item) => (
                    <div key={item.title}>
                        <Typography variant='h5' fontWeight={700} color={'white'} align='center'>
                            {item.number}
                        </Typography>
                        <Typography variant='subtitle1' fontWeight={500} color={'#FFFFFF80'} >
                            {item.title}
                        </Typography>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HeaderText;