import React from 'react';
import services1 from '../img/services1.jpg';
import services2 from '../img/services2.jpg';
import services3 from '../img/services3.jpg';
import services4 from '../img/services4.jpg';

export default function Services() {
    return (
        <section id='servicesStyle'>
            <div className='container mdContainer'>
                <div className='row justify-content-center text-center'>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className='card-inner'>
                                <img src={services1} className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                <span className="card-title">Weddings</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className='card-inner'>
                                <img src={services2} className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                <span className="card-title">Corporate Events</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className='card-inner'>
                                <img src={services3} className="card-img-top img3" alt="..."/>
                            </div>
                            <div className="card-body">
                                <span className="card-title">Special Events</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className='card-inner'>
                                <img src={services4} className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                                <span className="card-title">Birthdays</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div classNameName="container servicesStyle">
        //     <div classNameName="serviceContainer">
        //         <div classNameName="text-center font-bold"> Our Services </div>
        //         <div classNameName="d-flex mt-4">
        //             <div className="wrapper padded-container">
        //                 <img src={services1} classNameName='img centered'/>
        //                 <p classNameName='para'> Weddings </p>
        //             </div>
        //             <div className="wrapper padded-container">
        //                 <img src={services2} classNameName="centered"/>
        //                 <p classNameName='para'> Corporate Events </p>
        //             </div>
        //             <div className="wrapper padded-container">
        //                 <img src={services3} classNameName="centered"/>
        //                 <p classNameName='para'> Special Events </p>
        //             </div>
        //             <div className="wrapper padded-container">
        //                 <img src={services4} classNameName="centered"/>
        //                 <div classNameName='para'>
        //                     <p> Birthdays </p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
