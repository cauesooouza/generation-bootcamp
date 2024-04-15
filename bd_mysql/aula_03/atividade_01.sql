CREATE DATABASE IF NOT EXISTS db_generation_game_online;

USE db_generation_game_online;

CREATE TABLE IF NOT EXISTS tb_classes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  tipoDeAtaque VARCHAR(255) NOT NULL,
  resistencia VARCHAR(255) NOT NULL
  );

CREATE TABLE IF NOT EXISTS tb_personagens (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  ataque INT NOT NULL,
  defesa INT NOT NULL,
  agilidade INT NOT NULL,
  vida INT NOT NULL,
  tb_classes_id INT NOT NULL,
  INDEX fk_classes (tb_classes_id ASC) VISIBLE,
  CONSTRAINT fk_classes
    FOREIGN KEY (`tb_classes_id`)
    REFERENCES tb_classes (id)
);

INSERT INTO tb_classes(nome,tipoDeAtaque,resistencia) VALUES 
("Guerreiro", "Corpo a corpo", "Alta"),
("Arqueiro", "Distancia","Baixa"),
("Mago","Distancia","Baixa"),
("Assassino","Corpo a corpo","Baixa"),
("Curandeiro","Distancia","Alta"),
("Paladino","Hibrido","Alta"),
("Barbaro","Corpo a corpo","Media");

INSERT INTO tb_personagens(nome, ataque, defesa, agilidade, vida, tb_classes_id) VALUES 
("Conan", 2080, 1000, 250, 2000, 1), -- Guerreiro
("Legolas", 1890, 200, 1500, 1200, 2), -- Arqueiro
("Gandalf", 1795, 200, 1500, 1200, 3), -- Mago
("Ezio", 3500, 120, 1400, 800, 4), -- Assassino
("Albus", 800, 1300, 600, 3000, 5), -- Curandeiro
("Arthur", 1600, 805, 250, 2600, 6), -- Paladino
("Thorgrim", 2180, 785, 300, 1900, 1), -- Guerreiro
("Drizzt", 4000, 125, 1700, 700, 4); -- Assassino

SELECT * FROM tb_personagens where ataque > 2000;

SELECT * FROM tb_personagens where defesa between 1000 and 2000;

SELECT * FROM tb_personagens where nome like "%c%"; 

SELECT 
    p.nome AS nome_personagem,
    p.ataque,
    p.defesa,
    p.agilidade,
    p.vida,
    c.nome AS nome_classe,
    c.tipoDeAtaque,
    c.resistencia
FROM
    tb_personagens p
        INNER JOIN
    tb_classes c ON p.tb_classes_id = c.id;

SELECT
    p.nome AS nome_personagem,
    p.ataque,
    p.defesa,
    p.agilidade,
    p.vida,
    c.nome AS nome_classe,
    c.tipoDeAtaque,
    c.resistencia
FROM
    tb_personagens p
INNER JOIN
    tb_classes c ON p.tb_classes_id = c.id
WHERE
    c.nome = 'Arqueiro';