import { createTheme } from '@mui/material/styles'
import { purple, deepPurple } from '@mui/material/colors';
import CubicTTF from '/font/Cubic_11_1.010_R.ttf'
import RainyHeartsTTF from '/font/rainyhearts.ttf'
import { store, themeActions } from './service/store';
import { TTheme } from './service/type';

export const lightMode = createTheme({
  palette: {
    mode: 'light'
    // primary: {
    //   main: '#80deea',
    // },
    // secondary: {
    //   main: '#18ffff',
    // },
  },
  typography: {
    fontFamily: [
      'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
    ].join(',')
  }
})

export const darkMode = createTheme({
  palette: {
    //link:  https://mui.com/material-ui/customization/color/
    mode: 'dark',
    text: {
      primary: "#fff",
      secondary: "#ba68c8"
    },
    primary: purple,
    secondary: deepPurple,
    info: {
      main: "#e872e6"
    },
    background: {
      default: "#0e021d"
    }
    // primary: {
    //   dark: '#6d1b7b',
    //   main: '#9c27b0',
    //   light: '#af52bf',
    //   contrastText: '#7B91A7',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#3f50b5',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
  typography: {
    // fontFamily: [
    //   'Roboto', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
    // ].join(',')
    fontFamily: ['Cubic', 'RainyHearts',].join(",")
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: (theme): CSSInterpolation => ({
      //   // FontFace:{
      //   //   ont-family
      //   // },
      //   fontFace: {
      //     font
      //   }
      // }),
      styleOverrides: `
        @font-face {
          font-family: 'Cubic';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${CubicTTF}) format('truetype');
        }
        @font-face {
          font-family: 'RainyHearts';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${RainyHeartsTTF}) format('truetype');
        }
      `,
    },
  },
})
export default function theme() {

  // return store.getState().theme == "light" ? lightMode : darkMode
  return store.getState().theme == "light" ? lightMode : darkMode
}
