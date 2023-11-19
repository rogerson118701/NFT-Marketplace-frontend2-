import Typography from '@mui/material/Typography';
import Cards from './Help-Cards'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingButton from '@mui/lab/LoadingButton';
import StarsIcon from '@mui/icons-material/Stars';

const Help = () => {

    return (
        <div className=' mt-40'>
            <div className='ml-20 mb-0'>
                <Typography variant="h3" fontWeight={700} color="white" align='left'>
                    How It Works
                </Typography>
                <Typography variant='h5' fontWeight={500} className='mt-2' color={'#FFFFFF80'}>
                    Find Out How To Get Started
                </Typography>
            </div>

            <Cards />
        </div>
    )
}

export default Help;