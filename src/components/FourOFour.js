import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FourOFour from '../img/FourOFour.gif';

export default function FourOFour() {
    return (
        <>
        < Header />
        <div id='FourOFour' className="container">
            <div className="row align-items-center justify-items-center">
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='card text-center'>
                        <div className='card-header text-bold'></div>
                        <div className='card-title'> Uh ohohoh! </div>
                        <div className='card-body'> 
                            <div className='card-text'> Sorry, we could not find the page you are loking for </div>
                        </div>
                        <div className='card-footer'>
                            <button className='fOfBtn'> Go back </button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={FourOFour} className="card-img-top" alt="Success gif" />
                </div>
            </div>
        </div>
        < Footer />
        </>
    )
}
