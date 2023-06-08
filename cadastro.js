const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  port :3307,
  database : 'luiza'  
});

connection.connect();

console.log("conectado!");


let query = "insert into usuario(login,senha) values('lulushow','lulu0202');";
connection.query(query, function(error,results,fields){
})
connection.end();