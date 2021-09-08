--Select employee details from employee table if data exists in incentive table ?

SELECT * FROM Employees WHERE EmployeeID in (SELECT EmployeeID FROM Incentives)

--Find Salary of the employee whose salary is more than Roy Salary

SELECT Salary FROM Employees WHERE Salary>(SELECT Salary FROM employees WHERE FirstName= 'Allan')

--Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount

CREATE VIEW Incentive as SELECT e.FirstName,e.LastName,e.Salary,e.HireDate AS JoiningDate,i.IncentiveDate,i.IncentiveAmount FROM Employees e JOIN Incentives i on e.EmployeeID=i.EmployeeID

--Create a view to select Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

CREATE VIEW Incentive1 as SELECT e.FirstName,i.IncentiveAmount FROM Employees e JOIN Incentives i on e.EmployeeID=i.EmployeeID WHERE i.IncentiveAmount > 3000

--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London

CREATE VIEW Employee_Data AS 
SELECT e.FirstName,e.LastName,e.JobId,e.DepartmentID,d.DepartmentName FROM Employees e 
JOIN Departments d ON (e.DepartmentID = d.DepartmentID) JOIN Locations l on (d.LocationID = l.LocationID) WHERE city = 'London'

--Create a View to get the department name and number of employees in the department.

CREATE VIEW Employee_Data2 AS
SELECT d.DepartmentName,'TotalEmployees'=COUNT(*) FROM Departments as d
JOIN Employees as e on e.DepartmentID = d.DepartmentID 
GROUP BY d.DepartmentID,DepartmentName
  
--Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.

SELECT EmployeeID,JobId,DATEDIFF(dd,StartDate,EndDate) AS TotalDays FROM JobHistory WHERE DepartmentID=90

--Write a View to display the department name, manager name, and city.

CREATE VIEW EmployeeData3 AS 
SELECT d.DepartmentName,e.FirstName,e.LastName,l.City FROM Departments
AS d JOIN Employees AS e ON d.ManagerID=e.ManagerID
JOIN Locations AS l ON d.LocationID=l.LocationID

--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager for all managers whose experience is more than 15 years.