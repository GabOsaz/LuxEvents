import React from 'react';
import successGif from '../img/successGif.gif';

export default function Success() {
    return (
        <>
        <div className="container">
            <div className="row align-items-center justify-items-center">
                <div className="card">
                    <img src={successGif} className="card-img-top" alt="Success gif" />
                    <div className="card-body">
                        <p className="card-text"> Booking Successful </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
