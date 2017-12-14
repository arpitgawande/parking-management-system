use	rutgers_parking_system;

SET SQL_SAFE_UPDATES=0; 
delete from parking_lot;

insert into parking_lot values (1, 'LOT C1', '398 N 5th St, Camden, NJ 08102', 2, 40, 1);
insert into parking_lot values (2, 'LOT C2','430 Penn St, Camden, NJ 08102', 2, 50, 1);
insert into parking_lot values (3, 'LOT C3','514 Penn St, Camden, NJ 08102', 2, 55, 1);   
insert into parking_lot values (4, 'LOT C8','311 Lawrence St, Camden, NJ 08102', 2, 8, 1);
insert into parking_lot values (5, 'LOT C10','121 Fourth St, Camden, NJ 08102', 3, 20, 1);
insert into parking_lot values (6, 'LOT C12','301 N 3rd St Camden, NJ 08102', 3, 68, 1);
insert into parking_lot values (7, 'LOT C13','360 N 3rd St Camden, NJ 08102', 3, 20, 1);
insert into parking_lot values (8, 'LOT C14','430 N 3rd St Camden, NJ 08102', 2, 80, 1);
insert into parking_lot values (9, 'CITY LOT C15', '30 Elm St Camden, NJ 08102', 1, 100, 1);
insert into parking_lot values (10, 'CITY LOT C16', '75 Vine St Camden, NJ 08102', 1, 150, 1);
insert into parking_lot values (11, 'LOT C17', '370 Lawrence St, Camden, NJ 08102', 2, 10, 1);
insert into parking_lot values (12, 'CITY LOT C21', '640 Jersey Joe Walcott Blvd, Camden, NJ 08102', 1, 400, 1);

insert into parking_lot values (17, 'LOT NB3','Seminary Pl, New Brunswick, NJ 08901', 3, 20, 2);
insert into parking_lot values (18, 'LOT NB4','677 N 2rd St, New Brunswick, NJ 08901', 2, 80, 2);
insert into parking_lot values (19, 'LOT NB1','101 perl St, New Brunswick, NJ 08901', 3, 20, 2);
insert into parking_lot values (20, 'LOT NB2','24 adam St, New Brunswick, NJ 08901', 3, 68, 2);


insert into parking_lot values (13, 'LOT N1', '122 Central Av, Newark, NJ 07102', 2, 40, 3);
insert into parking_lot values (14, 'LOT N2','324 Bleeker St, Newark, NJ 07102', 2, 50, 3);
insert into parking_lot values (15, 'LOT N3','101 Park St, Newark, NJ 07102', 2, 55, 3);   
insert into parking_lot values (16, 'LOT N8','122 Law St, Newark, NJ 07102', 2, 8, 3);

select * from parking_lot;
