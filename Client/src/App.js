import React from 'react';
import './scss/landingPage.scss';
import './scss/gallery.scss';
import './header-footer.css';
import './scss/eventCenterDetails.scss'
import "./scss/calender.scss";
import "./scss/signIn.scss";
import "./scss/adminSetting.scss";
import "./scss/payment.scss";
import { AuthProvider } from './context/AuthContext';

import AppIndex from './components/Index';



function App() {
  return (
    <div>
      <AuthProvider>
        <AppIndex />
      </AuthProvider>
     
    </div>
  );
}

export default App;
