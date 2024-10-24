// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Videos from './components/Videos';
import Contact from './components/Contact';
import './style.css';

const App = () => {
    return (
        <div>
           <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router> 
        </div>
        
    );
};

export default App;
