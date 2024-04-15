-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema agroCompartillha
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema agroCompartillha
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `agroCompartillha` DEFAULT CHARACTER SET utf8 ;
USE `agroCompartillha` ;

-- -----------------------------------------------------
-- Table `agroCompartillha`.`tb_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agroCompartillha`.`tb_usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NULL,
  `foto` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agroCompartillha`.`tb_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agroCompartillha`.`tb_categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `agroCompartillha`.`tb_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agroCompartillha`.`tb_produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NOT NULL,
  `preco` DECIMAL(8,2) NOT NULL,
  `quantidade` INT NULL,
  `tb_usuarios_id` INT NOT NULL,
  `tb_categorias_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tb_produtos_tb_usuarios_idx` (`tb_usuarios_id` ASC) VISIBLE,
  INDEX `fk_tb_produtos_tb_categorias1_idx` (`tb_categorias_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_produtos_tb_usuarios`
    FOREIGN KEY (`tb_usuarios_id`)
    REFERENCES `agroCompartillha`.`tb_usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_produtos_tb_categorias1`
    FOREIGN KEY (`tb_categorias_id`)
    REFERENCES `agroCompartillha`.`tb_categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
