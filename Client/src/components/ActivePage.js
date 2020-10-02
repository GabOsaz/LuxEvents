import React from 'react'

const ActivePage = (props) => {
    return (
        <div className="ActivePage">
<div className={props.step1 ? 'active' : '' } > Home</div>
<div className={props.step2 ? 'active' : '' } > Gallery</div>
<div className={props.step3 ? 'active' : '' } > Contact</div>
<div className={props.step4 ? 'active' : '' } > Sign in</div>
            
        </div>
    )
}

export default ActivePage
