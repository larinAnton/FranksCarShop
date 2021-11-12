import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import CarsPreview from './CarsPreview';
import CarStore from './store/carStore';

const theme = createTheme();
const carStore = new CarStore();

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar carStore={carStore}/>
            <main>
                <CarsPreview carStore={carStore}/>
            </main>
        </ThemeProvider>
    </div>
  );
}

export default App;
