CREATE DATABASE IF NOT EXISTS db_pizzaria_legal;

USE db_pizzaria_legal;

CREATE TABLE IF NOT EXISTS tb_categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    dataDeCriacao DATETIME
);

CREATE TABLE IF NOT EXISTS tb_pizzas (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  preco DECIMAL(6,2) NOT NULL,
  dataDeCriacao DATETIME,
  fk_categorias_id INT NOT NULL,
  CONSTRAINT fk_categorias
    FOREIGN KEY (fk_categorias_id)
    REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome, descricao, dataDeCriacao) VALUES
('Clássicas', 'Pizzas tradicionais com os sabores mais populares.', NOW()),
('Especiais', 'Pizzas com ingredientes especiais e combinações únicas.', NOW()),
('Vegetarianas', 'Pizzas feitas apenas com ingredientes vegetarianos.', NOW()),
('Doces', 'Pizzas com sabores doces, ideais para sobremesa.', NOW()),
('Sem Glúten', 'Pizzas preparadas sem glúten para pessoas com restrições alimentares.', NOW());

INSERT INTO tb_pizzas (nome, descricao, preco, dataDeCriacao, fk_categorias_id) VALUES
('Mussarela', 'Pizza clássica de mussarela.', 25.00, NOW(), 1),  -- Categoria: Clássicas
('Calabresa', 'Pizza com calabresa fatiada e cebola.', 28.00, NOW(), 1),  -- Categoria: Clássicas
('Quatro Queijos', 'Pizza com quatro tipos de queijos diferentes.', 45.00, NOW(), 2),  -- Categoria: Especiais
('Portuguesa', 'Pizza com presunto, mussarela, ovos, cebola, azeitonas e pimentão.', 48.00, NOW(), 1),  -- Categoria: Clássicas
('Margherita', 'Pizza com tomate, mussarela, manjericão e azeite.', 51.00, NOW(), 2),  -- Categoria: Especiais
('Vegetariana', 'Pizza com diversos legumes e vegetais.', 29.00, NOW(), 3),  -- Categoria: Vegetarianas
('Brigadeiro', 'Pizza doce de brigadeiro com granulado.', 55.00, NOW(), 4),  -- Categoria: Doces
('Romeu e Julieta', 'Pizza doce de queijo com goiabada.', 52.00, NOW(), 4);  -- Categoria: Doces

SELECT * FROM tb_pizzas where preco > 45;

SELECT * FROM tb_pizzas where preco between 50 and 100;

SELECT * FROM tb_pizzas where nome like "%m%";

SELECT 
    p.id AS id_pizza,
    p.nome AS nome_pizza,
    p.descricao AS descricao_pizza,
    p.preco AS preco_pizza,
    c.id AS id_categoria,
    c.nome AS nome_categoria,
    c.descricao AS descricao_categoria
FROM
    tb_pizzas p
        INNER JOIN
    tb_categorias c ON p.fk_categorias_id = c.id;

SELECT 
    p.id AS id_pizza,
    p.nome AS nome_pizza,
    p.descricao AS descricao_pizza,
    p.preco AS preco_pizza,
    c.id AS id_categoria,
    c.nome AS nome_categoria,
    c.descricao AS descricao_categoria
FROM
    tb_pizzas p
        INNER JOIN
    tb_categorias c ON p.fk_categorias_id = c.id
WHERE
    c.nome = 'Doces';