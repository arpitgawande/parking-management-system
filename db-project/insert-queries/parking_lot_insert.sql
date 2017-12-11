use	rutgers_parking_system_2;

SET SQL_SAFE_UPDATES=0; 
delete from parking_lot;

insert into parking_lot values (1, 'LOT C1', '398 N 5th St, Camden, NJ 08102', 2, 40);
insert into parking_lot values (2, 'LOT C2','430 Penn St, Camden, NJ 08102', 2, 50);
insert into parking_lot values (3, 'LOT C3','514 Penn St, Camden, NJ 08102', 2, 55);   
insert into parking_lot values (4, 'LOT C8','311 Lawrence St, Camden, NJ 08102', 2, 8);
insert into parking_lot values (5, 'LOT C10','121 Fourth St, Camden, NJ 08102', 3, 20);
insert into parking_lot values (6, 'LOT C12','301 N 3rd St Camden, NJ 08102', 3, 68);
insert into parking_lot values (7, 'LOT C13','360 N 3rd St Camden, NJ 08102', 3, 20);
insert into parking_lot values (8, 'LOT C14','430 N 3rd St Camden, NJ 08102', 2, 80);
insert into parking_lot values (9, 'CITY LOT C15', '30 Elm St Camden, NJ 08102', 1, 100);
insert into parking_lot values (10, 'CITY LOT C16', '75 Vine St Camden, NJ 08102', 1, 150);
insert into parking_lot values (11, 'LOT C17', '370 Lawrence St, Camden, NJ 08102', 2, 10);
insert into parking_lot values (12, 'CITY LOT C21', '640 Jersey Joe Walcott Blvd, Camden, NJ 08102', 1, 400);

select * from parking_lot;
