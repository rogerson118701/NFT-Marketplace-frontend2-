import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState, useEffect } from 'react';
import NftCards from './nftcards/Nft-Cards';
import Filter from './Filter';
import CollectionCards from './Collectioncards/Col-Cards';
import {NFTcards} from '../Store'
import { NFTCardType } from '../interface';
import { Collection } from '../Store';
import {CollectionType} from '../interface'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (

                <Typography>{children}</Typography>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const MarketplaceHeader: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [filteredData, setFilteredData] = useState<NFTCardType[]>([]);
    const [filteredData1, setFilteredData1] = useState<CollectionType[]>([]);
    useEffect(() => {
        setFilteredData(NFTcards)
        setFilteredData1(Collection)
    }, [])

    const handleFilterChange = (filterValue: string) => {
        // Perform filtering logic here and update the filteredData state
        // For example, you can filter an array of data based on the filterValue
        const filteredResults = NFTcards.filter((item) => item.title.includes(filterValue));
        const filteredResults1 = Collection.filter((item) => item.name.includes(filterValue));
        setFilteredData(filteredResults);
        setFilteredData1(filteredResults1)
    };


    return (
        <>
            <div className='ml-20 mb-10 mr-20 mt-20'>
                <Typography variant="h3" fontWeight={700} color="white" align='left'>
                    Browse Marketplace
                </Typography>
                <Typography variant='h5' fontWeight={500} className='pt-3 mb-3' color={'#FFFFFF80'}>
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </Typography>

            </div>
            <Filter onFilterChange={handleFilterChange} />
            <Tabs centered className='w-full pt-1' value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="NFTs" className='font-bold text-gray-500 focus:text-white w-1/2' {...a11yProps(0)} />
                <Tab label="Collections" className='font-bold text-gray-500 focus:text-white w-1/2' {...a11yProps(1)} />
            </Tabs>
{/* 
            <div className='bg-[#3B3B3B]'>
                <CustomTabPanel value={value} index={0}>
                    <NftCards filtered={filteredData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <CollectionCards filtered={filteredData1}/>
                </CustomTabPanel>
            </div> */}
        </>
    )
}

export default MarketplaceHeader