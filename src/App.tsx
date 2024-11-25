
import { AboutPage, ContactUs, LandingPage, PartnerWithUs, Policy, PrivacyPolicy } from './pages';
import { RefundPolicy, TermsAndConditions } from './pages/Legal/term.pages';
import { Footer, Header } from './components';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { AnnouncementHeader } from './launches';
import YaraProduct from './pages/product/yara.pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <AnnouncementHeader />
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
          <Route path='/product/yara' element={<YaraProduct />} />

          <Route path='/lovakush' element={ <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Name:</h2>
            <p className="text-gray-600">Lova Kush</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address:</h2>
            <p className="text-gray-600">Bhadroli, Agra, Uttar Pradesh- (283113)</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Mobile Number:</h2>
            <p className="text-gray-600">+91-8273511939</p>
          </div>
        </div>
      </div>
    </div>} />
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
