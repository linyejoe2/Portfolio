import { ThemeOptions, createTheme } from '@mui/material/styles'
// import { ThemeOptions, createTheme } from '@mui/system'
import { deepPurple } from '@mui/material/colors';
import CubicTTF from '/font/Cubic_11_1.010_R.ttf'
import RainyHeartsTTF from '/font/rainyhearts.ttf'

const themeDefaultOption: ThemeOptions = {
  typography: {
    fontFamily: ['Cubic', 'RainyHearts',].join(",")
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          background-image: none !important;
        }
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
  }
}

export const lightMode = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#9c27b0"
    },
    info: {
      main: "#e872e6"
    },
    background: {
      paper: "#cecece"
    },
    text: {
      secondary: "#ac53bb"
    }
  },
  ...themeDefaultOption
})

export const darkMode = createTheme({
  palette: {
    //link:  https://mui.com/material-ui/customization/color/
    mode: 'dark',
    text: {
      primary: "#fff",
      secondary: "#ba68c8",
    },
    primary: {
      main: "#9c27b0"
    },
    // primary: purple,
    secondary: deepPurple,
    info: {
      main: "#e872e6"
    },
    background: {
      default: "#0e021d",
      "paper": "#2a1742"
    },
    warning: { main: "#000" }
  },
  ...themeDefaultOption
})
