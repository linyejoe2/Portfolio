import { createTheme } from '@mui/material/styles'
import { purple, deepPurple } from '@mui/material/colors';
import CubicTTF from '/font/Cubic_11_1.010_R.ttf'
import RainyHeartsTTF from '/font/rainyhearts.ttf'
import { store, themeActions } from './service/store';
import { TTheme } from './service/type';

export const lightMode = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: ['Cubic', 'RainyHearts',].join(",")
  },
  components: {
    MuiCssBaseline: {
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
  },
  typography: {
    fontFamily: ['Cubic', 'RainyHearts',].join(",")
  },
  components: {
    MuiCssBaseline: {
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
