CREATE DATABASE IF NOT EXISTS db_farmacia_bem_estar;

USE db_farmacia_bem_estar;

CREATE TABLE IF NOT EXISTS tb_categorias (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_produtos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  preco DECIMAL(6,2) NOT NULL,
  dataDeValidade DATETIME,
  fk_categorias_id INT NOT NULL,
  CONSTRAINT fk_categorias
    FOREIGN KEY (fk_categorias_id)
    REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (nome, descricao) VALUES
('Medicamentos', 'Produtos farmacêuticos para tratamentos diversos.'),
('Suplementos', 'Suplementos alimentares para nutrição e saúde.'),
('Higiene', 'Produtos de higiene pessoal e cuidados com o corpo.'),
('Dermocosméticos', 'Cosméticos dermatológicos para cuidados específicos.'),
('Bem-Estar', 'Produtos voltados para o bem-estar e qualidade de vida.');

INSERT INTO tb_produtos (nome, descricao, preco, dataDeValidade, fk_categorias_id) VALUES
('Paracetamol', 'Analgésico e antitérmico.', 10.00, '2025-12-31', 1),  -- Categoria: Medicamentos
('Vitamina C', 'Suplemento vitamínico para fortalecimento do sistema imunológico.', 20.00, '2024-12-31', 2),  -- Categoria: Suplementos
('Sabonete Líquido', 'Sabonete líquido suave para a pele.', 5.00, '2024-12-31', 3),  -- Categoria: Higiene
('Creme Facial', 'Creme hidratante para o rosto.', 30.00, '2024-12-31', 4),  -- Categoria: Dermocosméticos
('Chá de Camomila', 'Chá relaxante para auxiliar no sono.', 8.00, '2024-12-31', 5),  -- Categoria: Bem-Estar
('Ácido Hialurônico', 'Sérum facial com ácido hialurônico.', 40.00, '2024-12-31', 4),  -- Categoria: Dermocosméticos
('Multivitamínico', 'Suplemento vitamínico completo.', 25.00, '2024-12-31', 2),  -- Categoria: Suplementos
('Shampoo Anticaspa', 'Shampoo para controle da caspa.', 15.00, '2024-12-31', 3);  -- Categoria: Higiene

SELECT * from tb_produtos where preco > 50;

SELECT * from tb_produtos where preco between 5 and 60;

SELECT * FROM tb_produtos where nome like "%c%";

SELECT 
    p.id AS id_produto,
    p.nome AS nome_produto,
    p.descricao AS descricao_produto,
    p.preco AS preco_produto,
    p.dataDeValidade AS validade_produto,
    c.id AS id_categoria,
    c.descricao AS descricao_categoria
FROM
    tb_produtos p
        INNER JOIN
    tb_categorias c ON p.fk_categorias_id = c.id;
    
    
SELECT 
    p.id AS id_produto,
    p.nome AS nome_produto,
    p.descricao AS descricao_produto,
    p.preco AS preco_produto,
    p.dataDeValidade AS validade_produto,
    c.id AS id_categoria,
    c.nome AS nome_categoria,
    c.descricao AS descricao_categoria
FROM tb_produtos p
INNER JOIN tb_categorias c ON p.fk_categorias_id = c.id
WHERE c.nome like '%cosméticos%';