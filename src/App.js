import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import PublicRouter  from './components/public/PublicRouter'
import './App.css';
import AdminRouter from './pages/admin/AdminRouter';
import AuthRouter from './pages/Auth/AuthRouter';
import AuthGuard from './Helpers/AuthGuard';
import Header from './components/Admin/Header';




function App() {

  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  return (
    <div className={`qui-container ${isVisible ? 'fade-in' : ''}`}>
      
      
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path='/admin/*' element={
          <AuthGuard>

              <AdminRouter/>
          </AuthGuard>
          }/>
        <Route path='/auth/*' element={<AuthRouter/>}/>
        </Routes>
      </BrowserRouter>
        

      
      
    </div>
  );
};

export default App;
