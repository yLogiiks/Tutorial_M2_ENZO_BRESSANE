BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Login" (
	"ID_Login"	INTEGER NOT NULL,
	PRIMARY KEY("ID_Login" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Habilidade" (
	"ID_Habilidade"	INTEGER NOT NULL,
	"Profissionalidade"	TEXT,
	"Nivel_Habilidades"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Habilidade" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Personalidade" (
	"ID_Personalidade"	INTEGER NOT NULL,
	"Pontos_Positivos"	TEXT,
	"Pontos_Negativos"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Personalidade" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Formacao" (
	"ID_Formacao"	INTEGER NOT NULL,
	"Curso_Formacao"	TEXT,
	"Descricao_Curso"	TEXT,
	"Ano_Inicio"	TEXT,
	"Ano_Final"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Formacao" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"ID_Experiencia"	INTEGER NOT NULL,
	"Nome_Empresa"	TEXT,
	"Cargo_Empresa"	TEXT,
	"Ano_Inicio"	TEXT,
	"Ano_Final"	TEXT,
	"Descricao_Empresa"	TEXT,
	"ID_Login"	INTEGER,
	PRIMARY KEY("ID_Experiencia" AUTOINCREMENT),
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login")
);
CREATE TABLE IF NOT EXISTS "Usuario" (
	"ID_Usuario"	INTEGER NOT NULL,
	"Nome_Usuario"	TEXT,
	"Cargo_Usuario"	TEXT,
	"Foto_Usuario"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Usuario" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Sobre_Mim" (
	"ID_Sobre_Mim"	INTEGER NOT NULL,
	"Localização"	TEXT,
	"Telefone"	TEXT,
	"Email"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Sobre_Mim" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Realizacao" (
	"ID_Realizacao"	INTEGER NOT NULL,
	"Nome_Realizacao"	TEXT,
	"Ano_Realizacao"	TEXT,
	"Descricao_Reaizacao"	TEXT,
	"ID_Login"	INTEGER,
	FOREIGN KEY("ID_Login") REFERENCES "Login"("ID_Login"),
	PRIMARY KEY("ID_Realizacao" AUTOINCREMENT)
);
COMMIT;
