import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
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

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: true,
  reducers: {
    toggle: (s) => {
      return !s
    },
    setToDark: () => true,
    setToLight: () => false
  }
})

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    darkMode: darkModeSlice.reducer
  },
})

export type TStore = ReturnType<typeof store.getState>
export const themeActions = themeSlice.actions
export const darkModeActions = darkModeSlice.actions
