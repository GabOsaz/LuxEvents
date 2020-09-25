import React, { useState, useContext } from 'react';
import { Redirect } from "react-router-dom";
import { publicFetch } from '../../util/fetch';
import { AuthContext } from '../../context/AuthContext';

const SearchBar = () => {
    const authContext = useContext(AuthContext);
    const [parkingSpace, setParkingSpace] = useState('Parking Space');
    const [state, setState] = useState('State');
    const [city, setCity] = useState('City');
    const [capacity, setCapacity] = useState('Capacity');
    const [redirectOnSubmit, setRedirectOnSubmit] = useState(false);

    const handleParkingSpace = (e) => {
        setParkingSpace(e.target.innerText)
    }

    const handleState = (e) => {
        setState(e.target.innerText)
    }

    const handleCity = (e) => {
        setCity(e.target.innerText)
    }
    
    const handleCapacity = (e) => {
        setCapacity(e.target.innerText)
    }

    const credentials = {
        parkingSpace,
        state,
        city,
        capacity
    }

    const submitHandler = async (e) => {
        try {
            const { data } = await publicFetch.get('gallery', credentials);
            console.log('gallery search data >>>', data);
            authContext.setGallerySearchData(data);
            setRedirectOnSubmit(true)
        } catch(error) {
            console.log('gallery search error', error);
            const { data } = error.response;
        }
    }

        return (
            <div className="">
                {redirectOnSubmit && <Redirect to="/event-center-details/:id"/>}
                <div className="searchMain ">
                    
                    <div className='searchBar container'>
                        <div className="d-flex justify-content-between align-content-center">
                            <span> {state} </span>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu location" aria-labelledby="dropdownMenuButton">
                                    <a onClick={handleState} className="dropdown-item">Lagos</a>
                                    <a onClick={handleState} className="dropdown-item">Abuja</a>
                                    <a onClick={handleState} className="dropdown-item">PH</a>
                                    <a onClick={handleState} className="dropdown-item">Kano</a>
                                    <a onClick={handleState} className="dropdown-item">Ibadan</a>
                                    <a onClick={handleState} className="dropdown-item">Delta</a>
                                </div>
                            </div>
                            <span> {city} </span>
                            <div className="dropdown ml-0">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <ul className="">
                                        <li onClick={handleCity} className="dropdown-item">Lekki</li>
                                        <li onClick={handleCity} className="dropdown-item">Ikeja</li>
                                        <li onClick={handleCity} className="dropdown-item">Ikoyi</li>
                                        <li onClick={handleCity} className="dropdown-item">FCT</li>
                                    </ul>
                                </div>
                            </div>
                            <span> {capacity} </span>
                            <div className="dropdown ml-2">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <ul>
                                        <li onClick={handleCapacity} className="dropdown-item">100 - 200</li>
                                        <li onClick={handleCapacity}  className="dropdown-item">200 - 350</li>
                                        <li onClick={handleCapacity}  className="dropdown-item">350 - 500</li>
                                        <li onClick={handleCapacity}  className="dropdown-item">500 - 700</li>
                                        <li onClick={handleCapacity}  className="dropdown-item">700 - 1000</li>
                                        <li onClick={handleCapacity}  className="dropdown-item">1000+</li>
                                    </ul>
                                </div>
                            </div>
                            <span className='vNone'> {parkingSpace ? parkingSpace : 'P space' } </span>
                            <div className="dropdown ml-2">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <span onClick={handleParkingSpace} className="dropdown-item">200 spaces</span>
                                    <span onClick={handleParkingSpace} className="dropdown-item">450 spaces</span>
                                    <span onClick={handleParkingSpace} className="dropdown-item">800 spaces</span>
                                </div>
                            </div>
                            <button type="button" onClick={submitHandler} className="btn searchBtn mr-n4">Search</button>
                        </div>
                        <div className='mob'> 
                        <button type="button" onClick={submitHandler} className="searchBtnMob">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default SearchBar;
