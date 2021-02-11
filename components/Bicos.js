import React, { useState } from 'react';
import BuscadorDeVagas from '../controller/VagasFetch'
import axios from  'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


function Bicos({dados}){

    return(
        <div className="text-center">
            {dados.map((dados) => (
                <div className="row m-2" key={dados.idDaVaga}>
                    <div className="col">
                        <div className="rounded-lg rounded rounded-lg p-3 m-5 shadow-sm row ">
                            <div className="m-3 col text-justify">
                                <div className="col mb-3 text-justify">
                                    <div className="b-font-titulo text-warning text-uppercase font-bold">
                                        <strong> { dados.tituloVaga } </strong>
                                    </div>
                                    <div className="b-font-data">
                                        Postado: {dados.postadoQuando}
                                    </div>
                                </div>
                                <div className="b-font-subtitulo mb-3">{dados.descricaoVaga}</div>
                                <div className="row justify-content-end">
                                    <div>
                                        <button className="btn btn-md btn-outline-success col">
                                            <div>
                                                Entrar em contato   
                                            </div>                                     
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export async function getServerSideProps(){

    const response = await axios.get('/api/vagas')

    return {dados: response.data}

}
export default Bicos;