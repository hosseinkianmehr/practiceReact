import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  dark:boolean
}

const initialState: ThemeState = {
  dark: false,
}

export const uiSlice = createSlice({
  name: 'ui-slice',
  initialState,
  reducers: {
    dark: (state, action: PayloadAction<ThemeState>) => {
      state.dark = action.payload.dark ;
    }
  },
})

// Action creators are generated for each case reducer function
export const themeStore = uiSlice.actions

