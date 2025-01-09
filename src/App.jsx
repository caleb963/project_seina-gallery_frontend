import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Gallery from './pages/Gallery';
import Cart from './pages/Cart';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './styles/App.css';


function App() {
    const [cart, setCart] = useState([]);
    return (
    <PayPalScriptProvider options={{ "client-id": "AZPlhFVjoili6Jzeu704M_gDNmju2Ufs9OeDbAC6ivvtgWmtHIAGbqRReQbsDM3Ujfw_wtiSaz1klUqf" }}>
        <Router future={{ v7_startTransition: true}}>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/Cart" element={<Cart cart={cart} />} />
            </Routes>
        </Router>
        </PayPalScriptProvider>
    );
}

export default App;