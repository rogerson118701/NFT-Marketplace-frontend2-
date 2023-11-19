import React from 'react';
import Typography from '@mui/material/Typography'

import Avatar from '@mui/material/Avatar';

interface CardProps {
    name: string;
    totalsales: number;
    avatar: string
}

const TopcreatorCard: React.FC<CardProps> = ({ name, totalsales, avatar }) => {
    // Component logic here
    return (
        <div>

            <div style={{ backgroundColor: '#FFFFFF1A' }} className='rounded-10 w-full pb-3 rounded-xl shadow-md opacity-70 hover:opacity-100'>
                <div>
                    <div>

                    </div>
                    <div className='flex place-content-center'>
                        <Avatar src={avatar} className='place-content-center w-24 h-24 mt-3 align-middle' alt={name} />
                    </div>
                </div>

                <Typography variant="h5" style={{ fontWeight: 700, textAlign: 'center' }} color='white'>{name} </Typography>
                <div className='flex place-content-center'>
                    <Typography variant="subtitle2" style={{ fontWeight: 500, textAlign: 'center', marginRight: 10 }} color="#FFFFFF80"> Total Sales: </Typography>
                    <Typography variant="subtitle2" style={{ fontWeight: 500, textAlign: 'center' }} color="white"> {totalsales} ETH</Typography>
                </div>

            </div>
        </div>
    );
};

export default TopcreatorCard;