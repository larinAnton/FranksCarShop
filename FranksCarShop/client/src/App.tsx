import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import CarsPreview from './CarsPreview';
import CarStore from './store/carStore';
import Cart from './Cart';

const theme = createTheme();
const carStore = new CarStore();

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <TopBar carStore={carStore}/>
                    <main>
                        <Routes>
                            <Route path="/" element={<CarsPreview carStore={carStore}/>}/>
                            <Route path="/cart" element={<Cart carStore={carStore}/>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
