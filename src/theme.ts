import { ThemeOptions, createTheme } from '@mui/material/styles'
// import { ThemeOptions, createTheme } from '@mui/system'
import { deepPurple } from '@mui/material/colors';
import CubicTTF from '/font/pixel/Cubic_11_1.010_R.ttf'
import RainyHeartsTTF from '/font/pixel/rainyhearts.ttf'
import RaskowyTTF from "/font/pixel/rainyhearts.ttf"
import VcrOsdTTF from "/font/pixel/VcrOsd.ttf"
import MinecraftTTF from "/font/pixel/Minecraft.ttf"
import JostTTF from "/font/Jost.ttf"
// import NotoSansTCTTF from "/font/NotoSansTC.ttf"
import RalewayTTF from "/font/Raleway.ttf"
import LibreFranklinTTF from "/font/LibreFranklin.ttf"

const themeDefaultOption: ThemeOptions = {
  typography: {
    fontFamily: ["LibreFranklin", 'Raleway', 'Jost',].join(",")
    // fontFamily: ['Minecraft', 'VcrOsd', 'Paskowy', 'RainyHearts', 'Cubic',].join(",")
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          background-image: none !important;
        }
        @font-face {
          font-family: 'LibreFranklin';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${LibreFranklinTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${RalewayTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Jost';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${JostTTF}) format('truetype');
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
        @font-face {
          font-family: 'Paskowy';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${RaskowyTTF}) format('truetype');
        }
        @font-face {
          font-family: 'VcrOsd';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${VcrOsdTTF}) format('truetype');
        }
        @font-face {
          font-family: 'Minecraft';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${MinecraftTTF}) format('truetype');
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
      paper: "#caadd6",
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
      main: "#622e87",
      "800": "#8e24aa"
    },
    // primary: purple,
    secondary: deepPurple,
    info: {
      main: "#9c27b0"
    },
    background: {
      default: "#0e021d",
      "paper": "#2a1742"
    },
    warning: { main: "#000" }
  },
  ...themeDefaultOption
})
