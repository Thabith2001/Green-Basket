import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './component/Header.jsx';
import './App.css';
import Footer from "./component/Footer.jsx";
import Home from "./component/Home.jsx";
import FloatingCart from "./component/FloatingCart.jsx";

const App = () => {
    return (<div className=" flex flex-col bg-transparent bg-cover bg-center min-h-screen  text-gray-200">
        <Header/>
        <FloatingCart/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>);
};

export default App;