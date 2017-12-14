-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema rutgers_parking_system
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rutgers_parking_system
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rutgers_parking_system` DEFAULT CHARACTER SET utf8 ;
USE `rutgers_parking_system` ;

-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`campus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`campus` (
  `campus_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `campus_name` VARCHAR(45) NULL DEFAULT NULL,
  `campus_address` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`campus_id`),
  UNIQUE INDEX `campus_id_UNIQUE` (`campus_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`user_parking_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`user_parking_type` (
  `user_type` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`user_type`),
  UNIQUE INDEX `user_type_UNIQUE` (`user_type` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`parking_lot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`parking_lot` (
  `lot_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `lot_name` VARCHAR(45) NULL DEFAULT NULL,
  `lot_address` VARCHAR(45) NULL DEFAULT NULL,
  `user_type` INT(10) UNSIGNED NOT NULL,
  `total_spot` INT(11) NULL DEFAULT NULL,
  `campus_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`lot_id`),
  UNIQUE INDEX `lot_id_UNIQUE` (`lot_id` ASC),
  INDEX `fk_parking_lot_1_idx` (`user_type` ASC),
  INDEX `fk_parking_lot_2_idx` (`campus_id` ASC),
  CONSTRAINT `fk_parking_lot_2`
    FOREIGN KEY (`campus_id`)
    REFERENCES `rutgers_parking_system`.`campus` (`campus_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_parking_lot_1`
    FOREIGN KEY (`user_type`)
    REFERENCES `rutgers_parking_system`.`user_parking_type` (`user_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`user` (
  `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL DEFAULT NULL,
  `user_address` VARCHAR(45) NULL DEFAULT NULL,
  `user_type` INT(10) UNSIGNED NOT NULL,
  `campus_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC),
  INDEX `fk_user_1_idx` (`user_type` ASC),
  INDEX `fk_user_2_idx` (`campus_id` ASC),
  CONSTRAINT `fk_user_1`
    FOREIGN KEY (`user_type`)
    REFERENCES `rutgers_parking_system`.`user_parking_type` (`user_type`)
    ON DELETE NO ACTION,
  CONSTRAINT `fk_user_2`
    FOREIGN KEY (`campus_id`)
    REFERENCES `rutgers_parking_system`.`campus` (`campus_id`)
    ON DELETE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`permit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`permit` (
  `permit_number` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `status` TINYINT(1) NULL DEFAULT NULL,
  `issue_date` DATETIME NULL DEFAULT NULL,
  `effective_date` DATETIME NULL DEFAULT NULL,
  `expiration_date` DATETIME NULL DEFAULT NULL,
  `amount` FLOAT NULL DEFAULT NULL,
  `user_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`permit_number`),
  UNIQUE INDEX `user_id_UNIQUE` (`permit_number` ASC),
  INDEX `fk_permit_1_idx` (`user_id` ASC),
  CONSTRAINT `fk_permit_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rutgers_parking_system`.`user` (`user_id`)
    ON DELETE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`parking_spot`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`parking_spot` (
  `spot_id` INT(10) UNSIGNED NOT NULL,
  `lot_id` INT(10) UNSIGNED NOT NULL,
  `occuped_flag` TINYINT(1) NULL DEFAULT '0',
  `occupied_time` DATETIME NULL DEFAULT NULL,
  `permit_number` INT(10) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`spot_id`, `lot_id`),
  INDEX `fk_parking_spot_1_idx` (`lot_id` ASC),
  INDEX `fk_parking_spot_2_idx` (`permit_number` ASC),
  CONSTRAINT `fk_parking_spot_1`
    FOREIGN KEY (`lot_id`)
    REFERENCES `rutgers_parking_system`.`parking_lot` (`lot_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_parking_spot_2`
    FOREIGN KEY (`permit_number`)
    REFERENCES `rutgers_parking_system`.`permit` (`permit_number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `rutgers_parking_system`.`vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`vehicle` (
  `vehicle_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `plate_number` CHAR(10) NULL DEFAULT NULL,
  `plate_state` CHAR(2) NULL DEFAULT NULL,
  `make` VARCHAR(10) NULL DEFAULT NULL,
  `model` VARCHAR(45) NULL DEFAULT NULL,
  `color` VARCHAR(10) NULL DEFAULT NULL,
  `user_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`vehicle_id`),
  UNIQUE INDEX `vehicle_id_UNIQUE` (`vehicle_id` ASC),
  INDEX `fk_vehicle_1_idx` (`user_id` ASC),
  CONSTRAINT `fk_vehicle_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rutgers_parking_system`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;

USE `rutgers_parking_system` ;

-- -----------------------------------------------------
-- Placeholder table for view `rutgers_parking_system`.`user_with_permit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rutgers_parking_system`.`user_with_permit` (`id` INT);

-- -----------------------------------------------------
-- View `rutgers_parking_system`.`user_with_permit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `rutgers_parking_system`.`user_with_permit`;
USE `rutgers_parking_system`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`rutgers`@`%` SQL SECURITY DEFINER VIEW `rutgers_parking_system`.`user_with_permit` AS (select `U`.`user_id` AS `user_id`,`U`.`user_name` AS `user_name`,`U`.`user_address` AS `user_address`,`U`.`user_type` AS `user_type`,`U`.`campus_id` AS `campus_id`,`P`.`permit_number` AS `permit_number` from (`rutgers_parking_system`.`user` `U` left join `rutgers_parking_system`.`permit` `P` on((`P`.`user_id` = `U`.`user_id`))));

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
