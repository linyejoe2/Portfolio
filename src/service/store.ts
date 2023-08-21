import { AnyAction, PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import type { Reducer } from 'redux'
import { TTheme } from './type';

const themeSlice = createSlice({
  name: 'theme',
  initialState: "dark" as TTheme,
  reducers: {
    setTheme: (state: TTheme = "light", action: PayloadAction<TTheme>) => {
      console.log("state: " + state)
      if (action.payload) return action.payload
      return state
    }
  }
})

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
})

export type TStore = ReturnType<typeof store.getState>
export const themeActions = themeSlice.actions
