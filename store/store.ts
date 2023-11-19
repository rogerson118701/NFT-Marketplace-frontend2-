'use client';
import { configureStore } from '@reduxjs/toolkit'
import { NavbarReducer } from './features/NavbarSlice';
import { WalletReducer } from './features/WalletSlice';
import { ChainReducer } from './features/ChainSlice';
import { UserReducer } from './features/UserSlice';
export const store = configureStore({
   reducer: {
        Navbar : NavbarReducer,
        Wallet:WalletReducer,
        Chain:ChainReducer,
        User:UserReducer
   },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;