import { createSlice } from '@reduxjs/toolkit'
interface NavbarState {
    selectedNavbar: string | ''
}

const initialState : NavbarState = {
    selectedNavbar:'Dashboard',
}

export const navbarSlice = createSlice({
  name: 'Navbar',
  initialState,
  reducers: {
    setNavbar : (state, action) => {
        state.selectedNavbar = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setNavbar} = navbarSlice.actions

export const NavbarReducer =  navbarSlice.reducer