import React, {Link} from 'react';
import Loginpage from '../Loginpage';


function Homepage(){
    return(   
        <div>
            <a href={Loginpage}>
                login
            </a>
        </div>
    )
};

export default Homepage;