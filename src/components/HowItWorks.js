import React from 'react';
import account from '../svg/account.svg';
import book from '../svg/book.svg';
import reserve from '../svg/reserve.svg';

export default function HowItWorks() {
    return (
        // <div id='howItWorks container'>
        //     <div className='howItWorks container'>
        //         <div className='text-center'>
        //             <h1> How It Works </h1>
        //             <div className='row flex-row justify-content-between text-center'>
        //                 <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        //                     <div className="card mb-3">
        //                         <div className="svgIcon">{account}</div>
        //                         <div className="card-body">
        //                             <h5 className="card-title">Create an account</h5>
        //                             <p className="card-text"> Find your perfect wedding venue without all the stress. Search by location, venue and date </p>
        //                         </div>
        //                         <div className="card-footer">Learn more</div>
        //                     </div>
        //                     <div className="card mb-3">
        //                         <div className="svgIcon">{book}</div>
        //                         <div className="card-body">
        //                             <h5 className="card-title">Reserve</h5>
        //                             <p className="card-text"> Building out your ideal wedding & get budget estimates based on your guest count and selection  </p>
        //                         </div>
        //                         <div className="card-footer">Footer</div>
        //                     </div>
        //                     <div className="card mb-3">
        //                         <div className="svgIcon">{reserve}</div>
        //                         <div className="card-body">
        //                             <h5 className="card-title">Books</h5>
        //                             <p className="card-text"> Find your perfect wedding venue without all the stress. Search by location, budget, style and capacity </p>
        //                         </div>
        //                         <div className="card-footer">Footer</div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
