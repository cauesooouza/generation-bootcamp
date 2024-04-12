create database db_quitanda;

use db_quitanda;

create table tb_produtos(
	id int auto_increment primary key,
    nome varchar(255) not null,
    quantidade int not null,
    dataDeValidade DATE,
    preco decimal not null
);

insert into tb_produtos(nome, quantidade, dataDeValidade, preco) values 
("pera", 17, "2023-05-11", 8.00),
("maçã", 25, "2023-05-11", 9.99),
("banana", 150, "2023-05-11", 4.00);

select * from tb_produtos order by preco;

select * from tb_produtos where id = 1;

alter table tb_produtos modify preco decimal(6,2);

update tb_produtos set preco = 9.99 where id = 2;

select * from tb_produtos where nome regexp '[^a-zA-Z0-9]';

delete from tb_produtos where id = 3;

drop table tb_produtos;

drop database db_quitanda;