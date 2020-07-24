import React from 'react';
import SearchBar from './SearchBar'
import carousel_img_1 from '../img/carousel_img_1.jpg';
import carousel_img_2 from '../img/carousel_img_2.jpg';
import carousel_img_3 from '../img/carousel_img_3.jpg'

export default function Jumbo() {
    return (
        <div className='carouselStyle'>
            <div className='searchBarHeader'>
                <span> Check for your event location and venue </span>
            </div>
            <div id="carouselExampleControlsCircle" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators carousel-indicators-circle">
                    <li data-target="#carouselExampleControlsCircle" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleControlsCircle" data-slide-to="1"></li>
                    <li data-target="#carouselExampleControlsCircle" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item padded-container active" >
                        <img src= {carousel_img_1} className="d-block w-100 centered" alt="event center 1" />
                        <div className="overlay centered"></div>
                    </div>
                    <div className="carousel-item padded-container">
                        <img src={carousel_img_2} className="d-block w-100 centered" alt="event center 2" />
                        <div className="overlay centered"></div>
                    </div>
                    <div className="carousel-item padded-container">
                        <img src={carousel_img_3} className="d-block w-100 centered" alt="event center 3" />
                        <div className="overlay centered"></div>
                    </div>
                </div>
                < SearchBar />
            </div>
        </div>
    )
}
