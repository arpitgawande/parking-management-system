use	rutgers_parking_system;

SET SQL_SAFE_UPDATES=0; 
delete from user_parking_type;

insert into user_parking_type(user_type, description) values(1,'Student');
insert into user_parking_type(user_type, description) values(2,'Faculty');
insert into user_parking_type(user_type, description) values(3,'Resident');


select * from user_parking_type;
