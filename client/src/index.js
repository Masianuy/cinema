import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#DBD9DB",
      light: "#D6C8E1",
      dark: "#82A2B5",
    },
    secondary: {
      main: "#D9E6EC",
      light: "#EBFFBF",
      dark: "#96B395",
    },
    btnDelete: {
      main: "#F9F6F5",
      dark: "#CBB8AF",
    }
  },
  typography: {
    h6: {
      fontSize: 20,
    },
    overline: {
      fontSize: 14,
      paddingRight: '13px'
    },
    subtitle1: {
      fontSize: 16,
    },
    textLink: {
      fontSize: 16,
      fontWeight: 500,
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
