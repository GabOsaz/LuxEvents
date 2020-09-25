import React from 'react';


export default function EditVenue() {
    return (
        <>
       
        <div id='editVenue' className="container-fluid">
            <div className='editVenue row justify-items-center'> Edit Venue </div>
            <div className="d-flex align-items-center justify-items-center">
                <form>
                    <div className='form-group'>
                        <label for='editVenue1'> Change location </label>
                        <input type="text" id='editVenue1' name="name" value={} />
                    </div>
                    <div className='form-group'>
                        <label for='editVenue2'> Event Type </label>
                        <input type="text" id='editVenue2' name="name" value={} />
                    </div>
                    <div className='form-group'>
                        <label for='editVenue3'> Event Date </label>
                        <input type="text" id='editVenue3' name="name" value={} />
                    </div>
                    <div className='form-group'>
                        <label for='editVenue4'> Guest capacity </label>
                        <input type="text" id='editVenue4' name="name" value={} />
                    </div>
                    <div>
                        <input className='editValueBtn' type='button'> Save </input>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}
