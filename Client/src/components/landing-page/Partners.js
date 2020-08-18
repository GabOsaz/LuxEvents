import React from 'react';
import partners1 from '../../img/partners1.png';
import partners2 from '../../img/partners2.jpg';
import partners3 from '../../img/partners3.png';
import partners4 from '../../img/partners4.png';
import partners5 from '../../img/partners5.png';

export default function Partners() {
    return (
        <div id='partners' className='container-fluid'>
            <div className="heading"> Our Partners </div>
            <div className='case'>
                <div> <img src={partners1} className="centered" /> </div>
                <div> <img src={partners2} className="centered"/> </div>
                <div> <img src={partners3} className="centered" /> </div>
                <div> <img src={partners4} className="centered" /> </div>
                <div> <img src={partners5} className="centered" /> </div>
            </div>
        </div>

        // <div className="container-fluid partners">
        //     <div className="heading"> Our Partners </div>
        //     <div className="container d-flex justify-content-between icons">
        //         <div className="wrapper padded-container">
        //             <img src={partners1} className="centered" />
        //         </div>
        //         <div className="wrapper padded-container">
        //             <img src={partners2} className="centered"/>
        //         </div>
        //         <div className="wrapper padded-container">
        //             <img src={partners3} className="centered" />
        //         </div>
        //         <div className="wrapper padded-container">
        //             <img src={partners4} className="centered" />
        //         </div>
        //         <div className="wrapper padded-container">
        //             <img src={partners5} className="centered" />
        //         </div>
        //     </div>
        // </div>
    )
}
