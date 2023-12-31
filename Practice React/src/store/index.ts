import { configureStore } from '@reduxjs/toolkit'
import {uiSlice} from './theme'
import { authslice } from './auth'

export const store = configureStore({
  reducer: {
    theme : uiSlice.reducer,
    auth :authslice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch