import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bicos from '../components/Bicos';

class App extends Component{

    render(){        
        return(
            <div>
                <Header/>
                <Bicos/>
                <Footer/>
            </div>
        )
    }
}
export default App;