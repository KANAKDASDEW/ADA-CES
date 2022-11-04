import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_AUTH_KEY } from '../../const/Const'

const initialState = {
  user:null,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     authLogin: (state, action) => {
   state.user=action.payload
   
    },
 authLogout:(state)=>{  
state.user=null
localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY)
    

 }, 
 getUserFromLocalStorage:(state, action)=>{ 

 state.user=action.payload

 }
 
  },
})

// Action creators are generated for each case reducer function
export const { authLogin, authLogout, getUserFromLocalStorage } = authSlice.actions

export default authSlice.reducer