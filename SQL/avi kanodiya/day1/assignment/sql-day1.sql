--Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique.

create database practice
use practice
create table Countries (
CountryID varchar(5) ,
CountryName varchar(10) CHECK(CountryName IN('Italy','India','China')),
RegionID varchar(5)
)

--Write a SQL statement to create a table named JobHistory including columns EmployeeId, StartDate, End_Eate, Job_Id and Department_Id and make sure that the value against column EndDate will be entered at the time of insertion to the format like ‘–/–/—-‘.

create table JobHistory (
EmployeeID INT PRIMARY KEY,
StartDate DATE,
EndDate DATE,
JobID INT UNIQUE,
DepartmentID INT UNIQUE
);

--Write a SQL statement to create a table named jobs including columns JobId, JobTitle, MinSalary and MaxSalary, and make sure that, the default value for JobTitle is blank and MinSalary is 8000 and MaxSalary is NULL will be entered automatically at the time of insertion if no value assigned for the specified columns.

create table Jobs(
JobID INT PRIMARY KEY,
JobTitle VARCHAR(100) DEFAULT NULL,
MinSalary INT DEFAULT 8000,
MaxSalary INT
);

--Write a SQL statement to create a table employees including columns Employee_Id, FirstName, LastName, Email, PhoneNumber, Hire_Date, Job_Id, Salary, Commission, Manager_Id and Department_Id and make sure that, the Employee_Id column does not contain any duplicate value at the time of insertion, and the foreign key column DepartmentId, reference by the column DepartmentId of Departments table, can contain only those values which are exists in the Department table and another foreign key column JobId, referenced by the column JobId of jobs table, can contain only those values which are exists in the jobs table.

CREATE TABLE Departments(
DepartmentID INT PRIMARY KEY,
DeaprtmentName VARCHAR(100)
);
DROP TABLE Departments

create table Employees (
EmployeeID INT PRIMARY KEY,
FirstName VARCHAR(50),
LastName VARCHAR(50),
Email VARCHAR(255),
PhoneNumber INT,
Hire_Date DATE,
JobID INT,
Salary INT,
Commission INT,
ManagerID INT UNIQUE,
DepartmentID INT,
FOREIGN KEY(DepartmentID) REFERENCES Departments(DepartmentID),
FOREIGN KEY(JobID) REFERENCES jobs(JobID)
);

--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.

ALTER TABLE JobHistory ADD CONSTRAINT fkjob1 FOREIGN KEY(JobID) REFERENCES Jobs(JobID);

--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.

ALTER TABLE jobhistory
DROP CONSTRAINT fkjob1;

--Write a SQL statement to add a new column named location to the JobHistory table.

ALTER TABLE JobHistory ADD location INT;

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
                           