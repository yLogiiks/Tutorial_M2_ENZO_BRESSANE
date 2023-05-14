const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/Curriculo.db';

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../front/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(bodyParser.json());

// Retorna todos Logins da tabela produtor (é o R do CRUD - Read)
app.get('/Usuario', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Usuario';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insereUsuario', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Usuario (Nome_Usuario, Cargo_Usuario, Foto_Usuario) VALUES ('" + req.body.Nome_Usuario + "', '" + req.body.Cargo_Usuario + "', '" + req.body.Foto_Usuario + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>PRODUTOR INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizarUsuario', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Usuario SET Nome_Usuario='" + req.body.Nome_Usuario + "', Cargo_Usuario= '" + req.body.Cargo_Usuario + "' , Foto_Usuario='" + req.body.Foto_Usuario + "' WHERE ID_Usuario=" + req.body.ID_Usuario;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>PRODUTOR ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeProdutor', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Usuario WHERE ID_Usuario='" + req.query.ID_Usuario + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>PRODUTOR REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});



app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
