
--****************| 17 AUGUST TASK |***************--

CREATE TABLE Branch(
BNAME VARCHAR(18) PRIMARY KEY NOT NULL,
CITY VARCHAR(18) NOT NULL
)

INSERT INTO Branch
VALUES('VRCE','NAGPUR'),
('AJNI','NAGPUR'),
('KAROLBAGH','DELHI'),
('CHANDNI','DELHI'),
('DHARAMPETH','NAGPUR'),
('M.G.ROAD','BANGLORE'),
('ANDHERI','MUMBAI'),
('VIRAR','MUMBAI'),
('NEHRU PLACE','DELHI'),
('POWAI','MUMBAI')

DELETE Customer
SELECT * FROM Branch
SELECT * FROM Customer

CREATE TABLE Customer(
CNAME VARCHAR(19) PRIMARY KEY,
CITY VARCHAR(18) NOT NULL 
)

INSERT INTO Customer(CNAME,CITY)
VALUES('ANIL','KOLKATA'),
('SUNIL','DELHI'),
('MEHUL','BARODA'),
('MANDAR','PATNA'),
('MADHURI','NAGPUR'),
('PRAMOD','MAGPUR'),
('SANDIP','SURAT'),
('SHIVANI','MUMBAI'),
('KRANTI','MUMBAI'),
('NAREN','MUMBAI')

UPDATE Customer SET CITY = 'NAGPUR'  WHERE CNAME='PRAMOD';
 SELECT * FROM Customer

CREATE TABLE Borrow(
LOAN_NO VARCHAR(5) PRIMARY KEY,
CNAME VARCHAR(19) NOT NULL FOREIGN KEY (CNAME) REFERENCES Customer(CNAME),
BNAME VARCHAR(18) NOT NULL FOREIGN KEY (BNAME) REFERENCES Branch(BNAME),
AMOUNT INT NOT NULL
)

INSERT INTO Borrow
VALUES(201,'ANIL','VRCE',1000),
(206,'MEHUL','AJNI',5000),
(311,'SUNIL','DHARAMPETH',3000),
(321,'MADHURI','ANDHERI',2000),
(375,'PRAMOD','VIRAR',8000),
(481,'KRANTI','NEHRU PLACE',3000)


SELECT * FROM Borrow

CREATE TABLE Deposit(
ACT_NO VARCHAR(5) PRIMARY KEY,
CNAME VARCHAR(19) NOT NULL FOREIGN KEY (CNAME) REFERENCES Customer(CNAME),
BNAME VARCHAR(18) NOT NULL,
AMOUNT INT NOT NULL,
A_DATE DATE NOT NULL
)

ALTER TABLE Deposit ADD CONSTRAINT FK_Deposit_BNAME FOREIGN KEY(BNAME) REFERENCES Branch(BNAME)

INSERT INTO Deposit
VALUES (100,'ANIL','VRCE',1000,'1-Mar-1995'),
(101,'SUNIL','AJNI',5000,'4-Jan-1996'),
(102,'MEHUL','KAROLBAGH',3500,'17-Nov-1995'),
(104,'MADHURI','CHANDNI',1200,'17-Dec-1995'),
(105,'PRAMOD','M.G. ROAD',3000,'27-Mar-1996'),
(106,'SANDIP','ANDHERI',2000,'31-Mar-1996'),
(107,'SHIVANI','VIRAR',1000,'5-Sep-1995'),
(108,'KRANTI','NEHRU PLACE',5000,'2-Jul-1995'),
(109,'NAREN','POWAI',7000,'10-Aug-1995')

SELECT * FROM Deposit

/* Q1: List Names of Customers who are Depositors and have Same Branch City as that of SUNIL */ 

SELECT A.CNAME FROM CUSTOMER A WHERE A.CITY IN (SELECT B.CITY FROM BRANCH B WHERE B.BNAME IN 
(SELECT C.BNAME FROM DEPOSIT C WHERE C.CNAME='SUNIL'))

/* Q2: List All the Depositors Having Depositors Having Deposit in All the Branches where SUNIL is Having Account */

SELECT A.CNAME FROM DEPOSIT A WHERE A.BNAME IN (SELECT B.BNAME FROM DEPOSIT B WHERE B.CNAME = 'SUNIL')

/* Q3: List the Names of Customers Living in the City where the Maximum Number of Depositors are Located */

SELECT A.CNAME FROM CUSTOMER A WHERE A.CITY IN (SELECT B.CITY FROM DEPOSIT C, 
CUSTOMER B WHERE B.CNAME = C.CNAME
GROUP BY B.CITY HAVING COUNT(C.CNAME) >= ALL (SELECT COUNT(D.CNAME) FROM DEPOSIT D,
CUSTOMER E WHERE D.CNAME = E.CNAME GROUP BY E.CITY))

/* Q4: List Names of Borrowers Having Deposit Amount Greater than 1000 and Loan Amount Greater than 2000 */

SELECT B.CNAME, B.AMOUNT, D.CNAME, D.AMOUNT FROM BORROW B,DEPOSIT D 
WHERE D.CNAME = B.CNAME AND D.AMOUNT > 1000 AND B.AMOUNT > 2000

/* Q5: List All the Customers Living in NAGPUR and Having the Branch City as MUMBAI or DELHI  */ 

SELECT C.CNAME FROM CUSTOMER C,DEPOSIT D, BRANCH B 
WHERE C.CITY = 'NAGPUR' AND C.CNAME = D.CNAME AND D.BNAME = B.BNAME AND B.CITY IN ('BOMBAY','DELHI')

/* Q6: Count the Number of Customers Living in the City where Branch is Located */

select count(cname) from CUSTOMER where city IN (select city from BRANCH)