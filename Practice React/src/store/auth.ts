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
  Token: string,
  user?: object
}

type loginSuccessResponse = ServerResponse<loginSuccessData>
/////////////////////
export const login = createAsyncThunk("auth/login", async (data: object) => {
  console.log(data, 'asfdsad')
  const response = await axios.post('https://fakestoreapi.com/auth/login', data)
  console.log(response.data, 'actionssss')
  return response.data
})

const initialState = {
  token: '',
  istoken: false,
  user : {}
}
export const authslice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<loginSuccessResponse>) => {
        state.token = action.payload.token,
        state.istoken = true;
        localStorage.setItem("token", action.payload.token)
      })

  }
  ,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
    },
    login: (state, action) => {
      state.istoken = true;
      state.user = action.payload
      console.log(action.payload,'action.payload.decodedToken')
    }
  }

})
export const authActions = authslice.actions