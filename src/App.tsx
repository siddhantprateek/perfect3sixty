import React from 'react';
import './App.css';
import { AboutPage, ContactUs, LandingPage, PartnerWithUs, Policy, PrivacyPolicy } from './pages';
import { RefundPolicy, TermsAndConditions } from './pages/Legal/term.pages';
import Lovakush  from './pages/temp/temp.pages';
import { Footer, Header } from './components';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AnimatePresence>

        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/trust-securities' element={<Policy />} />
          <Route path='/terms' element={<TermsAndConditions/>} />
          <Route path='/refunds' element={<RefundPolicy/>} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/partner-with-us' element={<PartnerWithUs />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/lovakush' element={<Lovakush />} />
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
