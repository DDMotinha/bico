import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function Registro(){
    
    const [passw, setPassw] = useState();
    const [email, setEmail] = useState();
    const [tel, setTel] = useState();
    const [nome, setNome] = useState();
    const [date, setDate] = useState();
    const [cpf, setCpf] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const [cep, setCep] = useState();
    const [term, setTerm] = useState(true);

    function TrocandoAPagina() {
        window.location.href = "http://localhost:3000/login"
    }

    async function handleSubmit(){
        
        const registrandoOCliente = await fetch('http://localhost:3000/api/registro/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            senha: passw, 
            nomeCompleto: nome, 
            eMail: email,
            dataNasc: date, 
            cpf: cpf, 
            cep: cep, 
            tel: tel, 
            useTerm: term
        }),
        }).catch((error) => {
        console.error('Error:', error);
        });

        const TrocaDepagina = TrocandoAPagina();

    }

    return(

        <div className="container text-center d-flex justify-content-center">
            <div className="text-center align-text-center col mt-5 mx-auto d-flex justify-content-center">
                <div className="col mt-5 align-content-cente">
                    <form className="mt-5 text-center" onSubmit={handleSubmit}>
                        <Link href="/">
                            <img className="" src="https://raw.githubusercontent.com/DDMotinha/bicoimage/master/b-logo.png" alt="b-logo" width="200"/>
                        </Link>

                        <label for="inputEmail" className="sr-only">E-mail</label>
                        <input type="email" id="inputEmail" className="form-control m-2" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <label for="inputPassword" className="sr-only">Senha</label>
                        <input type="password" id="inputPassword" className="form-control m-2" placeholder="Senha" required value={passw} onChange={(e) => setPassw(e.target.value)}/>

                        <label for="inputTel" className="sr-only">Telefone</label>
                        <input type="tel" id="inputTel" className="form-control m-2" placeholder="Telefone" required value={tel} onChange={(e) => setTel(e.target.value)}/>

                        <label for="inputNome" className="sr-only">Nome Completo</label>
                        <input type="nome" id="inputNome" className="form-control m-2" placeholder="Nome completo" required value={nome} onChange={(e) => setNome(e.target.value)}/>

                        <label for="inputDate" className="sr-only">Data de Nascimento</label>
                        <input type="date" id="inputDate" className="form-control m-2" placeholder="Data de nascimento" required value={date} onChange={(e) => setDate(e.target.value)}/>

                        <label for="inputCpf" className="sr-only">CPF</label>
                        <input type="text" id="inputCpf" className="form-control m-2" placeholder="CPF" required value={cpf} onChange={(e) => setCpf(e.target.value)}/>

                        <div class="row m-2">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Cidade" aria-label="City" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Estado" aria-label="State" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="CEP" aria-label="Zip" value={cep} onChange={(e) => setCep(e.target.value)}/>
                            </div>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" required value={term} onChange={(e) => setTerm(e.target.value)}/> Eu li e concordo com os <Link href="/termo"> Termos de uso </Link> e de <Link href="/privacidade"> Privacidade </Link>
                            </label>
                        </div>

                        <button className="btn btn-md btn-outline-success btn-block m-2" type="submit">Registrar</button>

                    </form>
                    <Link href="/login">
                        <div className="col m-3 p-bn-text-footer text-center p-bn-footer-text color text-color-success">
                            <a>
                                Já possui uma <strong>conta</strong>?
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Registro;