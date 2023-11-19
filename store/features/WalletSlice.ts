import { createSlice } from '@reduxjs/toolkit'
interface WalletState {
    name: string | '',
    publicKey:string|null,
    image:string|'',
    usableTypes:string[]
}

const initialState : WalletState = {
    name:'',
    publicKey:null,
    image:'',
    usableTypes:['Metamask']
}

export const walletSlice = createSlice({
  name: 'Wallet',
  initialState,
  reducers: {
    setWallet : (state, action) => {
        state.name = action.payload.name;
        state.publicKey=action.payload.publicKey;
        state.image=action.payload.image;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setWallet} = walletSlice.actions

export const WalletReducer =  walletSlice.reducer