CREATE DATABASE db_lojinha;

USE db_lojinha;

CREATE TABLE tb_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    valor DECIMAL(8 , 2 ) NOT NULL,
    validade DATE NOT NULL,
    categoria VARCHAR(128) NOT NULL
);

ALTER TABLE tb_produtos MODIFY validade DATE NULL;

DESCRIBE tb_produtos;

INSERT INTO tb_produtos(
nome, 
descricao,
valor,validade, 
categoria) 
VALUES
("alicate", "",8.90, null,'ferramenta'),
("chave de fenda", "",4.80,null,"ferramenta"),
("furadeira","", 690,null,"ferramenta"),
("serra circular", "",900,null,"ferramenta");

SELECT * FROM tb_produtos WHERE valor > 500;

SELECT * FROM tb_produtos WHERE valor < 500;

UPDATE tb_produtos SET valor = 799 WHERE id = 3;