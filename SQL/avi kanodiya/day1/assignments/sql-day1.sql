create database practice
use practice
create table Countries (
CountryID varchar(5) ,
CountryName varchar(10) CHECK(CountryName IN('Italy','India','China')),
RegionID varchar(5)
)

create table JobHistory (
EmployeeID INT PRIMARY KEY,
StartDate DATE,
EndDate DATE,
JobID INT UNIQUE,
DepartmentID INT UNIQUE
);

create table Jobs(
JobID INT PRIMARY KEY,
JobTitle VARCHAR(100) DEFAULT NULL,
MinSalary INT DEFAULT 8000,
MaxSalary INT
);

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

ALTER TABLE JobHistory ADD CONSTRAINT fkjob1 FOREIGN KEY(JobID) REFERENCES Jobs(JobID);

ALTER TABLE jobhistory
DROP CONSTRAINT fkjob1;

ALTER TABLE JobHistory ADD location INT;

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
