import React from 'react';
import location1 from '../../img/location1.jpg';
import location2 from '../../img/location2.jpg';
import services1 from '../../img/services1.jpg';
import carousel_img_1 from '../../img/carousel_img_1.jpg';
import location3 from '../../img/location3.jpg';
import location4 from '../../img/location4.jpg';

export default function SelectLocation() {
    return (
        <div className="container selectLocation">
            <div className="locationHeader"> Select your location </div>
            <div className='row location'>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4  mb-3'>
                        <img src = {location1} className="img centered "/>
                        <p> Abuja </p>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-3'>
                        <img src = {location2} className=" img centered"/>
                        <p> Kano </p>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-3'>
                        <img src = {services1} className="img centered "/>
                        <p> Ikeja </p>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-3'>
                        <img src = {carousel_img_1} className=" img centered"/>
                        <p> Lekki </p>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-3'>
                        <img src = {location3} className=" img centered"/>
                        <p> PH </p>
                </div>
                <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4 mb-3'>
                        <img src = {location4} className=" img centered"/>
                        <p> Ibadan </p>
                </div>
            </div>
            {/* <div className="d-flex flex-row justify-content-between location">
                <div className="wrapper padded-container ml-3 mb-3">
                    <img src = {location1} className=" img centered"/>
                    <p> Abuja </p>
                </div>
                <div className="wrapper padded-container ml-3 mb-3">
                    <img src = {location2} className="img centered"/>
                    <p> Kano </p>
                </div>
                <div className="wrapper padded-container ml-3 mb-3">
                    <img src = {services1} className="img centered"/>
                    <p> Ikeja </p>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between mt-1 location">    
                <div className="wrapper padded-container ml-3">
                    <img src = {carousel_img_1} className="img centered"/>
                    <p> Lekki </p>
                </div>
                <div className="wrapper padded-container ml-3">
                    <img src = {location3} className="img centered"/>
                    <p> PH </p>
                </div>
                <div className="wrapper padded-container ml-3">
                    <img src = {location4} className="img centered"/>
                    <p> Ibadan </p>
                </div>
            </div> */}
        </div>
    )
}
// locations