import React from 'react';
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';

interface CardProps {
    title: string;
    description: string;
    image: string
}

const HelpCard: React.FC<CardProps> = ({ title, description, image }) => {
    // Component logic here

    return (


        <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full pb-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>
            <div>
                
                <div className='flex place-content-center'>
                    <Avatar src={image} className='place-content-center w-56 h-56 mt-10 align-middle' alt={title} />
                </div>
            </div>

            <Typography className='mt-4' variant="h4" style={{ fontWeight: 700, textAlign: 'center' }} color='white'>
                {title}
            </Typography>

            <Typography className='m-6 mt-4 mb-2' variant="h6" style={{ fontWeight: 500, textAlign: 'center' }} color="#FFFFFF">
                {description}
            </Typography>

        </div>

    );
};

export default HelpCard;