import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import CarsPreview from './CarsPreview';

const theme = createTheme();

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar/>
            <main>
                <CarsPreview/>
            </main>
        </ThemeProvider>
    </div>
  );
}

export default App;
