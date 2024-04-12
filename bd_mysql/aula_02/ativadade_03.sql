CREATE DATABASE school_db;

USE school_db;

CREATE TABLE tb_estudantes (
    matricula INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(128) NOT NULL,
    nota INT NOT NULL,
    comportamento VARCHAR(64) NOT NULL,
    faltas INT NOT NULL
);

INSERT INTO tb_estudantes(nome,nota,comportamento,faltas) VALUES
("Rogerio",8,"bom",12),
("Roberto",9,"aceitavel",6),
("Aline", 10,"excelente",3),
("Catarina",7,"bom",7),
("Adriana",6,"aceitavel",6);

SELECT * FROM tb_estudantes WHERE nota > 7;

SELECT * FROM tb_estudantes WHERE nota < 7;

UPDATE tb_estudantes SET faltas = 8 WHERE matricula = 3;