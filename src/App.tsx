import React from 'react';
import './App.css';
import { LandingPage, Policy } from './pages';
import { Footer, Header } from './components';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <AnimatePresence>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/policy' element={<Policy />} />
        </Routes>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
