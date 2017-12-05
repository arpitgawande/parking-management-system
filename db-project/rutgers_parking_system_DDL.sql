-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rutgers_parking_system
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rutgers_parking_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rutgers_parking_system` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `rutgers_parking_system` ;

-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`user_parking_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`user_parking_type` (
  `user_type` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`user_type`),
  UNIQUE INDEX `user_type_UNIQUE` (`user_type` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`campus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`campus` (
  `campus_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `campus_name` VARCHAR(45) NULL,
  `campus_address` VARCHAR(45) NULL,
  PRIMARY KEY (`campus_id`),
  UNIQUE INDEX `campus_id_UNIQUE` (`campus_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `user_ address` VARCHAR(45) NULL,
  `user_type` INT UNSIGNED NOT NULL,
  `campus_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC),
  INDEX `fk_user_1_idx` (`user_type` ASC),
  INDEX `fk_user_2_idx` (`campus_id` ASC),
  CONSTRAINT `fk_user_1`
    FOREIGN KEY (`user_type`)
    REFERENCES `rutgers_parking_system`.`user_parking_type` (`user_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_2`
    FOREIGN KEY (`campus_id`)
    REFERENCES `rutgers_parking_system`.`campus` (`campus_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`vehicle` (
  `vehicle_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `plate_number` CHAR(10) NULL,
  `plate_state` CHAR(2) NULL,
  `make` VARCHAR(10) NULL,
  `model` VARCHAR(45) NULL,
  `color` VARCHAR(10) NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`vehicle_id`),
  INDEX `fk_vehicle_1_idx` (`user_id` ASC),
  UNIQUE INDEX `vehicle_id_UNIQUE` (`vehicle_id` ASC),
  CONSTRAINT `fk_vehicle_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rutgers_parking_system`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`permit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`permit` (
  `permit _number` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `status` TINYINT(1) NULL,
  `issue_date` DATETIME NULL,
  `effective_date` DATETIME NULL,
  `expiration_date` DATETIME NULL,
  `amount` FLOAT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`permit _number`),
  UNIQUE INDEX `user_id_UNIQUE` (`permit _number` ASC),
  INDEX `fk_permit_1_idx` (`user_id` ASC),
  CONSTRAINT `fk_permit_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rutgers_parking_system`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`parking_lot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`parking_lot` (
  `lot_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lot_name` VARCHAR(45) NULL,
  `lot_address` VARCHAR(45) NULL,
  `user_type` INT UNSIGNED NOT NULL,
  `total_spot` INT NULL,
  PRIMARY KEY (`lot_id`),
  INDEX `fk_parking_lot_1_idx` (`user_type` ASC),
  UNIQUE INDEX `lot_id_UNIQUE` (`lot_id` ASC),
  CONSTRAINT `fk_parking_lot_1`
    FOREIGN KEY (`user_type`)
    REFERENCES `rutgers_parking_system`.`user_parking_type` (`user_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`parking_spot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`parking_spot` (
  `spot_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lot_id` INT UNSIGNED NOT NULL,
  `occuped_flag` TINYINT(1) NULL,
  `occupied_time` DATETIME NULL,
  `permit_number` INT UNSIGNED NULL,
  PRIMARY KEY (`spot_id`),
  INDEX `fk_parking_spot_1_idx` (`lot_id` ASC),
  INDEX `fk_parking_spot_2_idx` (`permit_number` ASC),
  UNIQUE INDEX `spot_id_UNIQUE` (`spot_id` ASC),
  CONSTRAINT `fk_parking_spot_1`
    FOREIGN KEY (`lot_id`)
    REFERENCES `rutgers_parking_system`.`parking_lot` (`lot_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_parking_spot_2`
    FOREIGN KEY (`permit_number`)
    REFERENCES `rutgers_parking_system`.`permit` (`permit _number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

