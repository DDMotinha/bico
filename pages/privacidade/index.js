import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Privacidade from '../../components/Privacidade';
import Link from 'next/link';

class App extends Component{

    render(){
        
        return(
            <div>
                <Privacidade/>
            </div>
        )
    }
}
export default App;