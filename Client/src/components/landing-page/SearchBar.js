import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="">
                <div className="searchMain ">
                    
                    <div className='searchBar container'>
                        <div className="d-flex justify-content-between align-content-center">
                            <span> State </span>
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu location" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Lagos</a>
                                    <a className="dropdown-item" href="#">Abuja</a>
                                    <a className="dropdown-item" href="#">Port Harcourt</a>
                                    <a className="dropdown-item" href="#">Kano</a>
                                    <a className="dropdown-item" href="#">Ibadan</a>
                                    <a className="dropdown-item" href="#">Delta</a>
                                </div>
                            </div>
                            <span> City </span>
                            <div className="dropdown ml-0">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Lekki</a>
                                    <a className="dropdown-item" href="#">Ikeja</a>
                                    <a className="dropdown-item" href="#">Ikoyi</a>
                                </div>
                            </div>
                            <span> Capacity </span>
                            <div className="dropdown ml-2">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Lekki</a>
                                    <a className="dropdown-item" href="#">Ikeja</a>
                                    <a className="dropdown-item" href="#">Ikoyi</a>
                                </div>
                            </div>
                            <span> Parking Space </span>
                            <div className="dropdown ml-2">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Lekki</a>
                                    <a className="dropdown-item" href="#">Ikeja</a>
                                    <a className="dropdown-item" href="#">Ikoyi</a>
                                </div>
                            </div>
                            <button type="button" className="btn searchBtn mr-n4">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
