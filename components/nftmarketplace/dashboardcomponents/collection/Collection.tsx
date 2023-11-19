import Typography from '@mui/material/Typography';
import Cards from './Col-Cards'

const Collection = () => {
    return (
        <div>
            <div className='m-20 mb-10'>
                <Typography variant="h3" fontWeight={700} color="white" align='left'>
                    Trending Collection
                </Typography>
                <Typography variant='h5' fontWeight={500} className='mt-2' color={'#FFFFFF80'}>
                    Checkout Our Weekly Updated Trending Collerction.
                </Typography>
            </div>
            <Cards />
        </div>
    )
}

export default Collection