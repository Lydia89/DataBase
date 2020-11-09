

CREATE  TABLE Candidates 
( id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 first_name VARCHAR(255),
 surname  VARCHAR(255),
 dob DATE,
 salary INT(255),
 portfolio VARCHAR(255),
 github VARCHAR(255)
 );


 INSERT INTO `Candidates`(`id`, `first_name`, `surname`, `dob`, `salary`, `portfolio`, `github`) VALUES 
(1,'hadjmohand','lydia','1989-04-04',500,'portfolio','github.com/Lydia89'),
(2,'geurdad','safia','1987-04-04',1500,'portfolio1','github.com/Safia87'),
(3,'hadi','lydy','1990-04-04',2500,'portfolio2','github.com/Lydy90');



/*CREATE TABLE Languages*/

CREATE TABLE Languages (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(30), 
Candidates_id INT references Candidates(id)
);
/* clé étrangérer*/ 
ALTER TABLE Languages
   ADD FOREIGN KEY (Candidates_id) REFERENCES Candidates(id)

/*INSERT INTO `Languages*/

   INSERT INTO `Languages`(`id`, `name`, `Candidates_id`) VALUES 
(1,'JS',2),
(2,'Python',3),
(3,'Java',1);


/*CREATE TABLE Languages*/

CREATE TABLE Programming (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(30), 
  Candidates_id INT references Candidates(id)
);
/* clé étrangérer*/ 
ALTER TABLE Programming
   ADD FOREIGN KEY (Candidates_id) REFERENCES Candidates(id)
   /*INSERT INTO `Programming*/

   INSERT INTO `Programming`(`id`, `name`, `Candidates_id`) VALUES 
(1,' React',2),
(2,'Express',3),
(3,'NodeJS',1);


/* les requetes */ 
Select all candidates/*
 1 hadjmohand lydia 1989-04-04 500 portfolio github.com/Lydia8
 2 geurdad safia 1987-04-04 1500 portfolio1github.com/Safia87
 3 hadi lydy 1990-04-04 2500 portfolio2 github.com/Lydy90*/
 

SELECT COUNT(*) FROM `Candidates` /*3*/



Select * from Candidates 
where (year(getdate())-year(dob)) >30