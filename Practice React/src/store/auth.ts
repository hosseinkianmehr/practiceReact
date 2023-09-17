import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Login from "../page/authentication/login";
import axios from "axios";
interface ServerResponse<T> {
    accessToken: string,
    user: object
    status: string
    message: string
    data: T
 }
 
 interface loginSuccessData {
    accessToken: string,
    user: object
 }
 
 type loginSuccessResponse = ServerResponse<loginSuccessData>
/////////////////////
export const login = createAsyncThunk("auth/login", async (data:object) => {
  console.log(data,'asfdsad')
    const response = await axios.post('https://fakestoreapi.com/auth/login', data)
    console.log(response.data, 'actionssss')
    return response.data
 })

const initialState ={
    token : '',
    istoken : false
} 
export const authslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase( login, (state, action:PayloadAction<loginSuccessResponse>) => {
          state.token = action,
          state.istoken = true
        })
       
    },
  })
  export const authActions = authslice.actions