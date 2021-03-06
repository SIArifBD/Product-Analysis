import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import FourZeroFour from './components/ForZeroFour/FourZeroFour';

const BaseRouter = () => {
    return <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/reviews' element={<Review />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/blogs' element={<Blogs />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/*' element={<FourZeroFour />} />
    </Routes>
}

export default BaseRouter;