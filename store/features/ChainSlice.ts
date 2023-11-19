import { createSlice } from '@reduxjs/toolkit'
import { TokensType,NetworkType } from '@/constant'
interface ChainState {
    originToken: TokensType,
    originChain: NetworkType,
    transferToken: TokensType,
    transferChain:NetworkType,

}

const initialState : ChainState = {
    originToken:{
        chainname:'',
        unit:'',
        image:''
    },
    originChain:{
        chainname:'',
        native:'',
        nativeunit:'',
        image:''
    },
    transferToken:{
        chainname:'',
        unit:'',
        image:''
    },
    transferChain:{
        chainname:'',
        native:'',
        nativeunit:'',
        image:''
    }
    
}
export const chainSlice = createSlice({
  name: 'Chain',
  initialState,
  reducers: {
    setOriginToken : (state, action) => {
        state.originToken = action.payload;
    },
    setTransferToken : (state, action) => {
        state.transferToken = action.payload;
    },
    setOriginChain : (state, action) => {
        state.originChain = action.payload;
    },
    setTransferChain : (state, action) => {
        state.transferChain = action.payload;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setOriginChain,setTransferChain,setOriginToken,setTransferToken} = chainSlice.actions

export const ChainReducer =  chainSlice.reducer