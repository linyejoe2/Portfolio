import { AnyAction, PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import type { Reducer } from 'redux'
import { TTheme } from './type';

const themeSlice = createSlice({
  name: 'theme',
  initialState: "light" as TTheme,
  reducers: {
    setTheme: (state: TTheme = "dark", action: PayloadAction<TTheme>) => {
      if (action.payload) return action.payload
      return state
    }
  }
})

export default configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
})

export const themeActions = themeSlice.actions