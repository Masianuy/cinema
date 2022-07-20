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
      dark: "#7FA8CC",
    },
    btnDelete: {
      main: "#F9F6F5",
      dark: "#D29E8A",
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
reportWebVitals();
