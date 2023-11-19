import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import exp from 'constants';

type FilterProps = {
    onFilterChange: (filterValue: string) => void;
};

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
        onFilterChange(event.target.value);
    };
    return (
        <div className='ml-20 mr-20' >
        <TextField
            id="search"
            placeholder='Search your favourite NFTs'
            fullWidth
            value={filterValue}
            onChange={handleFilterChange}
           
            InputProps={{
                style: { color: '#858584', marginBottom: 20, fontWeight:700 },
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon className='flex text-[#858584]'/>
                    </InputAdornment>
                ),
            }}
            variant="outlined"
        />
        </div>
    )
}

export default Filter;