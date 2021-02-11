const mysql = require('mysql2');

export default async function RegistrarVagaNova(req, res) {

const connection = await mysql.createConnection({
  host:'localhost',
  user: 'root',
  database: 'bregister',
  port: '3308',
  password: null
});

if (req.method === 'POST'){
  
  const id = {
    tituloVaga: req.body.tituloVaga,
    descricaoVaga: req.body.descricaoVaga,
    whatsapp: req.body.whatsapp,
    vagaFechaQuando: req.body.vagaFechaQuando,
    idUsuarioQPostou: req.body.idUsuarioQPostou
};
  
  connection.query(
    'INSERT INTO vagas ( tituloVaga, descricaoVaga, whatsapp, vagaFechaQuando, idUsuarioQPostou ) VALUES (?,?,?,?,?)',
    [id.tituloVaga, id.descricaoVaga, id.whatsapp , id.vagaFechaQuando, id.idUsuarioQPostou],
    function(err, results) {
      res.json(results);
    }
  );
  
    
  }

  if( req.method === 'GET'){

    connection.query(
      'SELECT * FROM vagas',
      function(err, results) {
        res.json(results)
      }
    );
  }
}