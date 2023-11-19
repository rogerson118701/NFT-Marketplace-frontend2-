import { createSlice } from '@reduxjs/toolkit'
interface UserState {
    role: string | 'user',
    online:boolean|false
}

const initialState : UserState = {
    role:'user',
    online:false
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser : (state, action) => {
        state.role = action.payload.role,
        state.online=true
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setUser} = userSlice.actions

export const UserReducer =  userSlice.reducer