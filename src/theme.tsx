import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#fff149" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default {
  colors: {
    primary: '#0070f3',
    bg: 'white',
    greyLight: '#eaedf3',
    grey: '#333',
  },
  typography: {
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    // ... other typography properties
  },
  // ... other theme properties
};
