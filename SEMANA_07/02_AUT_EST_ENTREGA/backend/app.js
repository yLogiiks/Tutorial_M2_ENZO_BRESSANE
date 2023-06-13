const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/Curriculo.db';

const hostname = '127.0.0.1';
const port = 3001;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("./front"));

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
	db.close(); // Fecha o banco
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizarUsuario', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Usuario WHERE ID_Usuario="+ req.query.ID_Usuario;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizarUsuario', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Usuario SET Nome_Usuario='" + req.body.Nome_Usuario + "', Cargo_Usuario= '" + req.body.Cargo_Usuario + "' , Foto_Usuario='" + req.body.Foto_Usuario + "' WHERE ID_Usuario=" + req.body.ID_Usuario + "' WHERE ID_Login=" + req.body.ID_Login;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeUsuario', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Usuario WHERE ID_Usuario='" + req.query.ID_Usuario + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Habilidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Habilidade';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

app.post('/insereHabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Habilidade (Profissionalidade, Nivel_Habilidades) VALUES ('" + req.body.Profissionalidade + "', '" + req.body.Nivel_Habilidades + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
});

app.get('/atualizarHabilidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Habilidade WHERE ID_Habilidade="+ req.query.ID_Habilidade;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarHabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Habilidade SET Profissionalidade='" + req.body.Profissionalidade + "', Nivel_Habilidades= '" + req.body.Nivel_Habilidades + "' WHERE ID_Habilidade=" + req.body.ID_Habilidade;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeHabilidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Habilidade WHERE ID_Habilidade='" + req.query.ID_Habilidade + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Personalidade', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Personalidade';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

app.post('/inserePersonalidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Personalidade (Pontos_Positivos, Pontos_Negativos) VALUES ('" + req.body.Pontos_Positivos + "', '" + req.body.Pontos_Negativos + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
});

app.get('/atualizarHabilidade', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Personalidade WHERE ID_Personalidade="+ req.query.ID_Personalidade;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarPersonalidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Personalidade SET Pontos_Positivos='" + req.body.Pontos_Positivos + "', Pontos_Negativos= '" + req.body.Pontos_Negativos + "' WHERE ID_Personalidade=" + req.body.ID_Personalidade;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removePersonalidade', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Personalidade WHERE ID_Personalidade='" + req.query.ID_Personalidade + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Formacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Formacao';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

app.post('/insereFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Formacao (Curso_Formacao, Descricao_Curso, Ano_Inicio, Ano_Final) VALUES ('" + req.body.Curso_Formacao + "', '" + req.body.Descricao_Curso + "', '" + req.body.Ano_Inicio + "', '" + req.body.Ano_Final + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
	res.end();
});

app.get('/atualizarFormacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Formacao WHERE ID_Formacao="+ req.query.ID_Formacao;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Formacao SET Curso_Formacao='" + req.body.Curso_Formacao + "', Descricao_Curso= '" + req.body.Descricao_Curso + "', Ano_Inicio= '" + req.body.Ano_Inicio +  "', Ano_Final= '" + req.body.Ano_Final + "' WHERE ID_Personalidade=" + req.body.ID_Personalidade;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeFormacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Formacao WHERE ID_Formacao='" + req.query.ID_Formacao + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Experiencia', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Experiencia';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco

});

app.post('/insereExperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Experiencia (Nome_Empresa, Cargo_Empresa, Ano_Inicio, Ano_Final, Descricao_Empresa) VALUES ('" + req.body.Nome_Empresa + "', '" + req.body.Cargo_Empresa + "', '" + req.body.Ano_Inicio + "', '" + req.body.Ano_Final + "', '" + req.body.Descricao_Empresa + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
	res.end();
});

app.get('/atualizarExperiencia', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Experiencia WHERE ID_Experiencia="+ req.query.ID_Experiencia;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarExperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Experiencia SET Nome_Empresa='" + req.body.Nome_Empresa + "', Cargo_Empresa= '" + req.body.Cargo_Empresa + "', Ano_Inicio= '" + req.body.Ano_Inicio +  "', Ano_Final= '" + req.body.Ano_Final + "', Descricao_Empresa= '" + req.body.Descricao_Empresa + "' WHERE ID_Experiencia=" + req.body.ID_Experiencia;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeExperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Experiencia WHERE ID_Experiencia='" + req.query.ID_Experiencia + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Sobre_Mim', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Sobre_Mim';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

app.post('/insereSobre_Mim', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Sobre_Mim (Localização, Telefone, Email) VALUES ('" + req.body.Localização + "', '" + req.body.Telefone + "', '" + req.body.Email + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
});

app.get('/atualizarSobre_Mim', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Sobre_Mim WHERE ID_Sobre_Mim="+ req.query.ID_Sobre_Mim;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarSobre_Mim', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Sobre_Mim SET Localização='" + req.body.Localização + "', Telefone= '" + req.body.Telefone + "', Email= '" + req.body.Email + "' WHERE ID_Sobre_Mim=" + req.body.ID_Sobre_Mim;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeSobre_Mim', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Sobre_Mim WHERE ID_Sobre_Mim='" + req.query.ID_Sobre_Mim + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/Realizacao', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM Realizacao';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
			console.log(rows)
		});
		db.close(); // Fecha o banco
});

app.post('/insereRealizacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO Realizacao (Nome_Realizacao, Ano_Realizacao, Descricao_Reaizacao) VALUES ('" + req.body.Nome_Realizacao + "', '" + req.body.Ano_Realizacao + "', '" + req.body.Descricao_Reaizacao + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	db.close(); // Fecha o banco
	res.end();
});

app.get('/atualizarRealizacao', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM Realizacao WHERE ID_Realizacao="+ req.query.ID_Realizacao;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
        db.close(); // Fecha o banco
});

app.post('/atualizarRealizacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE Realizacao SET Nome_Realizacao='" + req.body.Nome_Realizacao + "', Ano_Realizacao= '" + req.body.Ano_Realizacao + "', Descricao_Reaizacao= '" + req.body.Descricao_Reaizacao + "' WHERE ID_Reaizacao=" + req.body.ID_Reaizacao;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeRealizacao', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM Realizacao WHERE ID_Realizacao='" + req.query.ID_Realizacao + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

