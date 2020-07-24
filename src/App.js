import React from 'react';
import './scss/landingPage.scss';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Services from './components/Services';
import HowItWWorks from './components/HowItWorks';
import SelectLocation from './components/SelectLocation';
import Partners from './components/Partners'

function App() {
  return (
    <div>
      < Navbar />
      < Jumbo />
      < Services />
      < HowItWWorks />
      < SelectLocation />
      < Partners />
    </div>
  );
}

export default App;
