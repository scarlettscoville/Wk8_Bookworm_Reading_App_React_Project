import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#086490',
      },
      secondary: {
        main: '#F40290',
      },
      info: {
        main: '#2196f3',
      },
      success: {
        main: '#00e9d6',
      },
      error: {
        main: '#F9080C',
      },
      warning: {
        main: '#FBE81A',
      },
    },
  };

  const theme=createTheme(themeOptions);
  export default theme