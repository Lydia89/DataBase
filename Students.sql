
/* Students*/

CREATE TABLE Students (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    city VARCHAR(30),

INSERT INTO Students (id,name, city)
 VALUES
 (1	,'Véronique','Paris'),
 (2	,'Steeven',	'Lyon'),
 (3	,'Marc','Marseille'),
 (4	,'Nour','Lyon'),
 (5,'Romain','Paris'),
 (6,'Sophie','Paris');


/* Languages*/
CREATE TABLE Languages (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
   
INSERT INTO Languages(id, name)
VALUES 
(1,'French'),
(2,'English'),
(3,'German'),
(4,'Spanish'),
(5,'Mandarin');

/*Favorites*/
CREATE TABLE Favorites (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    class VARCHAR(30),
    sport VARCHAR(30),
   students_id INT references students(id)
  
);
/*clé étrangere*/
ALTER TABLE Favorites
   ADD FOREIGN KEY (students_id) REFERENCES students(id)
   
INSERT INTO `Favorites`(`id`, `class`, `sport`, `Students_id`) 
VALUES 
(1,	'Maths','Cricket',2),
(2,'Music','Hip-hop',6),
(3,'Arts','Boxing',1),
(4,'Literature','Tennis',3),
(5,'Computer science','Tennis',5),
(6,'Arts','Baseball',4);




/*Studentslanguages*/
   CREATE TABLE Studentslanguages (
   ID          INT        NOT NULL,

   Students_id INT references Students(id),
   Languages_id INT references Languages(id),
   PRIMARY KEY (ID)
);
/*clé étrangere*/
ALTER TABLE Studentslanguages 
   ADD FOREIGN KEY (Students_id) REFERENCES Students(id),
   ADD FOREIGN KEY (Languages_id) REFERENCES Languages(id);


   INSERT INTO `Studentslanguages`(`ID`, `Students_id`, `Languages_id`) VALUES 
(1,1,1),
(2,1,2),
(3,2,1),
(4,2,3),
(5,3,1),
(6,4,1),
(7,4,2),
(8,4,4),
(9,4,5),
(10,5,1),
(11,5,5),
(12,6,1),
(13,6,2),
(14,6,3);
/*Rapport lvl 1*/
SELECT * FROM Students WHERE(id=3)/*3 Marc Marseille*/
SELECT * FROM Students WHERE(id=6)/*6 Sophie Paris*/
SELECT name,city FROM Students WHERE(id=1)/* Véronique Paris*/
SELECT name FROM Students WHERE (id=2)/* Steeven*/
SELECT * FROM `Students` WHERE (city='paris')/*
1
Véronique
Paris
5
Romain
Paris
6
Sophie
Paris*/


SELECT name FROM `Students` WHERE (city='Lyon')/* Steeven Nour*/

/*Rapport lvl 2*/

SELECT * FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where Students.id = 5
SELECT name,sport FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where Students.id = 4 /*Nour
Baseball*/

SELECT name,class FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where Students.id = 1/*Véronique Arts*/
SELECT * FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where class = 'music'/*6
Sophie
Paris
2
Music
Hip-hop
6*/
SELECT name FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where sport = 'Tennis'/*Marc Romain*/
SELECT name FROM Students LEFT JOIN Favorites ON Students.id = Favorites.Students_id where class = 'Arts'/*Véronique
Nour*/
SELECT COUNT(*) FROM Students WHERE city= 'paris'/* 3*/

/*Rapport lvl 3*/

SELECT * FROM Students LEFT JOIN Studentslanguages ON Students.id = Studentslanguages.Students_id LEFT JOIN Languages ON Studentslanguages.Languages_id = Languages.id WHERE Students.id = 1

  /*1 Véronique Paris1 111French
 
1 Véronique Paris2 1 2 2 English*/

SELECT * FROM Students LEFT JOIN Studentslanguages ON Students.id = Studentslanguages.Students_id LEFT JOIN Languages ON Studentslanguages.Languages_id = Languages.id WHERE Students.id = 4
/*4 Nour Lyon 6 4 1 1French
4 Nour Lyon 7 4 2 2 English
4 Nour Lyon 8 4 4 4 Spanish 
4 Nour Lyon 9 4 5 5 Mandarin
*/
SELECT Students.name ,Languages.name FROM Students LEFT JOIN Studentslanguages ON Students.id = Studentslanguages.Students_id LEFT JOIN Languages ON Studentslanguages.Languages_id = Languages.id WHERE Students.id = 5
/*Romain French
Romain Mandarin*/


SELECT Students.name COUNT(Languages.name) FROM Languages LEFT JOIN Studentslanguages ON Languages.id = Studentslanguages.Languages_id LEFT JOIN Students ON Studentslanguages.Students_id = Students.id WHERE Students.id = 6
/*Sophie 3*/


/*Bonus*/
SELECT name FROM `Students` WHERE name LIKE '%e%'
/*  Véronique Steeven Sophie  */
SELECT Students.name,Favorites.sport FROM `Students` LEFT JOIN Favorites ON Favorites.Students_id = Students.id WHERE name LIKE '%e%'
/*Véronique Boxing
Steeven Cricket
Sophie Hip-hop
*/


SELECT Students.city,Favorites.class FROM `Students` LEFT JOIN Favorites ON Favorites.Students_id = Students.id WHERE city LIKE '%i%'
/* name class :
Paris Arts
Marseille Literature
Paris Computer science
Paris Music*/









 