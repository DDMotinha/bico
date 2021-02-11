import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainHome(){

    return(
        <main className="container-fluid mt-5 bg-warning p-0">

        <div className="col bg-top text-center container-fluid bg-light rounded-lg">
            <div className="row p-3 rounded">
                <div className="col text-justify m-1">
                    <div className="col p-paraph ">
                        <div className="col mb-5 mt-5 text-center p-text-tittle">
                            <h2>Encontre a <strong>independência</strong> financeira!</h2>
                        </div>
                        <div className="row p-text-body ">
                            <div className="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="https://github.com/DDMotinha/bicoimage/blob/master/p-bn-1-banner.png?raw=true" alt="p-bn-promo" className="p-bn-banner col p-1 mb-5" width="100"/>
                                <div className="mb-5">
                                    <div className="row-3">
                                        <h4>Consquiste o <strong>seu</strong> mercado!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="https://github.com/DDMotinha/bicoimage/blob/master/p-bn-2-banner.png?raw=true" alt="p-bn-promo" className="p-bn-banner col p-1 mb-5 "></img>
                                <div className="mb-5">
                                    <div className="row-3">
                                        <h4>Construa sua <strong>independência</strong>!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col rounded-lg p-3 m-5 text-center rounded rounded-lg p-1 mb-5 shadow-sm">
                                <img src="https://github.com/DDMotinha/bicoimage/blob/master/p-bn-3-banner.png?raw=true" alt="p-bn-promo" className="p-bn-banner col mb-5 "></img>
                                <div className="mb-5">
                                    <div className="row-3">
                                        <div className="col p-text-tittle mb-3"><h4>Quer saber mais?</h4></div>
                                        <Link href="/bicos">
                                            <button className="btn btn-outline-success">
                                                    Ver vagas!
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    )
}
export default MainHome;