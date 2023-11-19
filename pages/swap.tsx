import React,{useEffect} from 'react';
import axios from 'axios'

const Swap:React.FC=()=>{
    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/usdtplus').then(res=>{
            console.log(res.data)
           
        }
          
        )
       
    },[])

    return(
        <div className="bg-[#230B33]  flex min-h-screen flex-col justify-center items-center">

        </div>
    )
}
export default Swap;