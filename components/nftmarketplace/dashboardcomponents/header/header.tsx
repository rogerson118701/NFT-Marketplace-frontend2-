import { Box } from '@mui/material';
import HeaderImages from './HeaderImages';
import HeaderText from './Headertext';

export default function Header() {
    return (
  
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <HeaderText />
                </div>
                <div>
                    <HeaderImages />
                </div>
            </div>
    )
}