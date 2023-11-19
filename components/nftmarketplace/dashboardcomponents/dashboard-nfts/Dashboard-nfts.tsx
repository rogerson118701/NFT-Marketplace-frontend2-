import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Cards from '../nftcards/Nft-Cards'

const DashboardNfts = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    function handleClick() {
        setLoading(true);
        const timer = setTimeout(() => {
            router.replace('/nftmarketplace/Marketplace')
        }, 1500);

        return () => clearTimeout(timer);
    }
    return (
        <>
            <div className='grid grid-cols-1 mt-40 sm:grid-cols-2' >
                <div className=' ml-20 mb-0'>
                    <Typography variant="h3" fontWeight={700} color="white" align='left'>
                        Discover More NFTs
                    </Typography>
                    <Typography variant='h5' fontWeight={500} className='mt-2' color={'#FFFFFF80'}>
                        Explore New Trending NFTs
                    </Typography>
                </div>
                <div className='flex justify-center sm:justify-end mr-20 pt-8'>
                    <LoadingButton
                        size="small"
                        className='mt-4 pl-4 text-white'
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator="Loading…"
                        startIcon={<VisibilityIcon />}
                        variant='outlined'
                    >
                        See All
                    </LoadingButton>
                </div>
            </div>
            <Cards />
        </>
    )
}

export default DashboardNfts