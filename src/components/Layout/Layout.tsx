import React from "react";
import Header from "../Header/Header";
import "../Layout/Layout.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from "../Main/Main";
import About from "../About/About";


function Layout() {

    return (

        <div className="Layout">
            <BrowserRouter>

                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/about' element={<About />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout;