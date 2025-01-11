import React, { useState } from 'react';
import SiteFooter from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App