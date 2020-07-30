import React from 'react'
import { Route} from "react-router-dom";
import LandingPage from './landing-page/landing-page'
import Gallery from './gallery/gallery';

const Body = () => {
    return (
        <div>

            <div className="content">
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/gallery" component={Gallery} />
          {/* <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/signin" component={SignInScreen} /> */}
        </div>
            
        </div>
    )
}

export default Body
