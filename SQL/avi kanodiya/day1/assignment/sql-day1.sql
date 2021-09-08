															-------ALTER STATEMENT-------

--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.

ALTER TABLE JobHistory ADD CONSTRAINT fkjob1 FOREIGN KEY(JobID) REFERENCES Jobs(JobID);

--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.

ALTER TABLE jobhistory
DROP CONSTRAINT fkjob1;

--Write a SQL statement to add a new column named location to the JobHistory table.

ALTER TABLE JobHistory ADD location INT;

													-----ASSIGNMENT------

--You have been hired to create a relational database to support a car sales business. You need to store information on the business’s employees, inventory, and completed sales. You also need to account for the fact that each salesperson receives a different percentage of their sales in commission. What tables and columns would you create in your relational database, and how would you link the tables?

CREATE TABLE EmployeesB
(
	EmployeeID INT PRIMARY KEY,
	Department VARCHAR(10) NOT NULL,
	FirstName VARCHAR(15) NOT NULL,
	LastName VARCHAR(15) NOT NULL,
	PhoneNo NUMERIC(10) NOT NULL,
	Email VARCHAR(50),
	JoiningDate DATE NOT NULL,
	Commission INT
)
CREATE TABLE Inventory
(
	CarID INT PRIMARY KEY,
	CarCompany VARCHAR(10),
	CarName VARCHAR(10) NOT NULL,
	Stock INT NOT NULL,
	MRP INT NOT NULL,
	Discount INT
);

CREATE TABLE Sales
(
	EmployeeID INT NOT NULL, 
	CarID INT NOT NULL,
	SaleID INT PRIMARY KEY,
	SaleDate DATE NOT NULL,
	SaleAmt INT NOT NULL,
	PaymentMethod VARCHAR(10) NOT NULL,
	CustomerName VARCHAR(30) NOT NULL,
	CONSTRAINT fk_CarID FOREIGN KEY(CarID) REFERENCES Inventory(CarID)
)
ALTER TABLE Sales
ADD CONSTRAINT fk_empid FOREIGN KEY (EmployeeID) REFERENCES EmployeesB(EmployeeID)
                           