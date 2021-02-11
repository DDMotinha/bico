import mysql from 'mysql2';


function BuscadorDeVagas() {
        
  const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'bregister',
    port: '3308',
    password: null
  });

  connection.query(
    'SELECT * FROM vagas',
    function(err, results) {
      const json = JSON.stringify(results);
      return json
    }
  );

}
export default BuscadorDeVagas;