import React from 'react';
import { useState} from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image'

interface CardProps {
    src: string;
    small: any;
    ownername: string;
    name: string;
    owneravatar: string;
}

const CollectionCard: React.FC<CardProps> = ({ name, ownername, owneravatar, src, small }) => {
    const [loading, setLoading] = useState(false);
    const router=useRouter();
    function handleClick() {
        setLoading(true);
        const timer = setTimeout(() => {
            router.replace('/nftmarketplace/Marketplace')
        }, 1500);
    
        return () => clearTimeout(timer);
    }

        

    return (

        <div
            style={{ backgroundColor: '#FFFFFF1A' }}
            className='w-full rounded-xl opacity-70 hover:opacity-100'>

            <Image src={src} width={1000} height={1000} alt={ownername} className='w-full rounded-xl' style={{ backgroundColor: 'white' }} />

            <div className='flex justify-around p-2'>
                {small.slice(small.length - 3).map((item: any) => {
                    return (
                        <div key={item.title}>
                            <Image src={item.src} width={90} height={90} className='rounded-xl' alt={item.name} style={{ backgroundColor: 'white' }} />
                        </div>
                    )
                })}

            </div>
            <div className='flex justify-center'>

                <LoadingButton
                    size="small"
                    className='flex text-white'
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<VisibilityIcon />}
                 
                >
                    {`See More ${small.length - 3}+`}
                </LoadingButton>
               
            </div>
            <div className='flex flex-1'>
                <div className='pl-5'>
                    <div className='pt-1'>
                        <Typography variant="h5" fontWeight={700} color='white'> {name}</Typography>
                    </div>
                    <div className='flex p-3 pt-1 pl-0 items-center'>
                        <Avatar alt={ownername} src={owneravatar} sx={{ width: 45, height: 45 }} />
                        {/* <Typography className='pl-3' variant="h6" style={{ fontWeight: 500 }} color="#FFFFFF80"> {ownername}</Typography> */}
                    </div>
                </div>
            </div>
        </div >

    );
};

export default CollectionCard;