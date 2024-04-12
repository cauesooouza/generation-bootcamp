CREATE DATABASE rh_dev;

USE rh_dev;

CREATE TABLE tb_colaboradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    genero varCHAR(1) NOT NULL,
    anosDeExperiencia INT NOT NULL,
    cargo VARCHAR(160) NOT NULL,
    salario DECIMAL(6,2) NOT NULL
);

INSERT INTO tb_colaboradores (nome, idade, genero, anosDeExperiencia, cargo, salario) VALUES 
("caue", 27, "m", 6,"fullstack", 8000),
("leonardo", 45, "m", 12,"backend", 9900),
("michel", 32, "m", 4, "backend", 4900),
("luana", 26, "f", 7, "frontend", 9000),
("patricia", 38, "f", 6, "fullstack", 8000);

select * from tb_colaboradores where salario > 2000;

update tb_colaboradores set salario = 1900 where cargo = 'fullstack';

select * from tb_colaboradores where salario < 2000;