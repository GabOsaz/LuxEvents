import React from 'react';
// import account from '../../svg/account.svg';
// import book from '../../svg/book.svg';
// import reserve from '../../svg/reserve.svg';

export default function HowItWorks() {
    return (
        <div className='container-fluid howItWorks '>
            <div className="container inner ">
            <h1> How it works </h1>
                <div className="d-flex flex-row innerContent justify-content-between">
                    <div className='card'>
                        <div className="item card-body">
                            <h4 className="card-title"> Create an account </h4>
                            <p> Find your perfect wedding venue without all the stress. Search by location, venue and date  </p>
                            <span> learn more </span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="item card-body">
                            <h4 className="card-title"> Reserve </h4>
                            <p> Building out your ideal wedding & get budget estimates based on your guest count and selection  </p>
                            <span> learn more </span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="item card-body">
                            <h4 className="card-title"> Book </h4>
                            <p> Find your perfect wedding venue without all the stress. Search by location, budget, style and capacity  </p>
                            <span> learn more </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
