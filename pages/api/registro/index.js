const mysql = require('mysql2');

export default async function RegistrarUsuarioNovo(req, res) {

const connection = await mysql.createConnection({
  host:'localhost',
  user: 'root',
  database: 'bregister',
  port: '3308',
  password: null
});

if (req.method === 'POST'){
  
  const id = {
    usuario: req.body.usuario, 
    senha: req.body.senha, 
    nomeCompleto: req.body.nomeCompleto, 
    eMail: req.body.eMail,
    dataNasc: req.body.dataNasc, 
    cpf: req.body.cpf, 
    cep: req.body.cep, 
    tel: req.body.tel, 
    useTerm: req.body.useTerm 
  };
  
  connection.query(
    'INSERT INTO registro ( usuario, senha, nomeCompleto, eMail, dataNasc, cpf, cep, Tel, useTerm ) VALUES (?,?,?,?,?,?,?,?,?)',
    [id.usuario, id.senha, id.nomeCompleto , id.eMail, id.dataNasc, id.cpf, id.cep, id.tel, id.useTerm],
    function(err, results) {
      res.json(results);
    }
  );
  
    
  }

  if( req.method === 'GET'){

    connection.query(
      'SELECT * FROM registro',
      function(err, results) {
        res.json(results);
      }
    );
  }
}