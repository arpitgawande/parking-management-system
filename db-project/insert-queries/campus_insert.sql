use	rutgers_parking_system;

SET SQL_SAFE_UPDATES=0; 
delete from campus;

insert into campus(campus_id, campus_name, campus_address) values(1,'Camden','303 Cooper St, Camden, NJ 08102');
insert into campus(campus_id, campus_name, campus_address) values(2,'New Brunswick','New Brunswick, NJ');
insert into campus(campus_id, campus_name, campus_address) values(3,'Newark','195 University Ave, Newark, NJ 07102');

select * from campus;
