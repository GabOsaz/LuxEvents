import React from 'react';
import './scss/landingPage.scss';
import Jumbo from './components/Jumbo';
import Header from "./components/Header";
import Services from './components/Services';
import HowItWWorks from './components/HowItWorks';
import SelectLocation from './components/SelectLocation';
import Partners from './components/Partners'
//import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      < Jumbo />
      < Services />
      < HowItWWorks />
      < SelectLocation />
      < Partners />
     
      {/* <Footer /> */}
    </div>
  );
}

export default App;
