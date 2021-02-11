import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return(
        
    <div className="container-fluid bg-warning text-center">
        <div className="row">
            <div className="col m-3">
                <div className="row text-center">
                    <div className="col p-bn-footer justify-content-center text-center">
                        <Link href="https://www.facebook.com/">
                            <img src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/p-bn-facebook.png" alt="p-bn-facebook" className="p-bn-icon p-bn-width"/>
                        </Link>
                    </div>
                    <div className="col p-bn-footer">
                        <Link href="https://www.instagram.com/">
                            <img src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/p-bn-instagram.png" alt="p-bn-instagram" className="p-bn-icon p-bn-width"/>
                        </Link>
                    </div>
                    <div className="col p-bn-footer">
                        <Link href="https://twitter.com/">
                            <img src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/p-bn-twitter.png" alt="p-bn-twitter" className="p-bn-icon p-bn-width"/>
                        </Link>
                    </div>
                    <div className="col p-bn-footer">
                        <Link href="https://www.youtube.com/">
                            <img src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/p-bn-youtube.png" alt="p-bn-youtube" className="p-bn-icon p-bn-width"/>
                        </Link>
                    </div>
                </div>
                <div className="col mt-2 p-bn-text-footer text-center p-bn-footer-text">
                    © 2020 Copyright: <strong>Bico LTDA</strong>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Footer;