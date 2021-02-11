import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <nav className="container-fluid navbar navigation border text-center rounded border-top-0 ">       
            <div className="col">
                <Link className="navbar-brand" href="/">
                    <img src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/b-logo.png" alt="b-logo" className="b-logo" width="135"/>
                </Link>
            </div>
            <div className="col">

            </div>
            <div className="col">
                <Link href="/login">
                    <button className="btn btn-md btn-outline-success">Acessar</button>
                </Link>
            </div>
        </nav>
    )
}
export default Header;