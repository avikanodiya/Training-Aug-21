--Write a SQL statement to create a table named countries including columns CountryId, CountryName and RegionId and make sure that no countries except Italy, India and China will be entered in the table. and combination of columns CountryId and RegionId will be unique.

create database practice
use practice
create table Countries (
CountryID varchar(5) PRIMARY KEY NOT NULL,
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