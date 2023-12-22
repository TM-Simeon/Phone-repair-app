import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Technician from './components/technician';
import Support from './components/support';
import SingleTechnicianPage from './components/singleTechnicianPage/SingleTechnicianPage';
import Payment from './pages/payment/Payment';
import ProductPreviewAndRatings from './pages/product-preview-ratings/ProductPreviewAndRatings';

import './App.css'
import ScrollToTheTop from './hook/ScrollToTheTop';

const App = () => {
  return (
    <Router>
      <ScrollToTheTop />
      <ToastContainer
        position='top-center'
        autoClose={3000}
        theme='light'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='app-container'>
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/technician' element={<Technician />} />
            <Route
              exact
              path='/singleTechnicianPage'
              element={<SingleTechnicianPage />}
            />
            <Route exact path='/payment' element={<Payment />} />
            <Route
              exact
              path='/product-preview-and-ratings'
              element={<ProductPreviewAndRatings />}
            />
            <Route exact path='/support' element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
