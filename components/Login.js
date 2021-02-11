import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Login(){
    return(
        <div className="container-sm text-center d-flex justify-content-center">
            <div className="text-center align-text-center col mt-5 mx-auto d-flex justify-content-center">
                <div className="col mt-5 align-content-center">
                    <form className="mt-5 text-center">
                        <Link href="/">
                            <img className="" src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/b-logo.png" alt="b-logo" width="200"/>
                        </Link>
                        <label for="inputEmail" className="sr-only">Usuário</label>
                        <input type="email" id="inputEmail" className="form-control m-2" placeholder="Usuário" required=""/>
                        <label for="inputPassword" className="sr-only">Senha</label>
                        <input type="password" id="inputPassword" className="form-control m-2" placeholder="Senha" required=""/>

                        <button className="btn btn-md btn-outline-success btn-block m-2" type="submit">Entrar</button>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Manter-se conectado
                            </label>
                        </div>
                    </form>
                    <a href="/registro">
                        <div className="col mt-3 p-bn-text-footer text-center p-bn-footer-text color text-color-success">
                            Ainda não possui uma <strong>conta</strong>?
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Login;