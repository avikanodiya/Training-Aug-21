--Write a query to rank employees based on their salary for a month

with Emp_CTE(Rank,EmployeeID,Salary) AS (SELECT ROW_NUMBER() OVER (ORDER BY Salary )[Rank],EmployeeID,Salary FROM Employees)
SELECT * FROM Emp_CTE

--Select 4th Highest salary from employee table using ranking function

with Emp_CTE(Rank,EmployeeID,Salary) AS (SELECT DENSE_RANK() OVER (ORDER BY Salary DESC)[Rank],EmployeeID,Salary FROM Employees)
SELECT * FROM Emp_CTE WHERE Rank=4

--Get department, total salary with respect to a department from employee table.

with Emp_CTE(DepartmentID,Salary) AS (SELECT DepartmentID,SUM(Salary) 'total salary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM Emp_CTE

--Get department, total salary with respect to a department from employee table order by total salary descending

with Emp_CTE(DepartmentID,Salary) AS (SELECT DepartmentID,SUM(Salary) 'total salary' FROM Employees GROUP BY DepartmentID)
SELECT * FROM Emp_CTE

--Get department wise maximum salary from employee table order by salary ascending

WITH Emp_CTE(DepartmentID,Salary) AS (SELECT DepartmentID,Salary FROM Employees)
SELECT DepartmentID,MAX(Salary) MaxSalary FROM Emp_CTE Group by DepartmentID order by MaxSalary asc

--Get department wise minimum salary from employee table order by salary ascending

WITH Emp_CTE(DepartmentID,Salary) AS (SELECT DepartmentID,Salary FROM Employees)
SELECT DepartmentID,MIN(Salary) MinSalary FROM Emp_CTE Group by DepartmentID order by MinSalary asc

--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

WITH Emp_CTE(DepartmentID,TotalSalary) AS (SELECT DepartmentID,SUM(Salary) TotalSalary FROM Employees GROUP BY DepartmentID)
SELECT * FROM Emp_CTE WHERE TotalSalary > 50000 ORDER BY TotalSalary DESC

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT DATEDIFF(YYYY,HireDate,IncentiveDate) FROM Employees e JOIN Incentives i ON e.EmployeeID=i.EmployeeID

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

WITH Emp_CTE(FirstName,IncentiveAmount) AS (SELECT FirstName,IncentiveAmount FROM Employees e JOIN Incentives i on e.EmployeeID=i.EmployeeID)
SELECT  * FROM Emp_CTE WHERE IncentiveAmount>3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

WITH Emp_CTE(FirstName,IncentiveAmount) AS (SELECT FirstName,IncentiveAmount FROM Employees e LEFT JOIN Incentives i ON e.EmployeeID=i.EmployeeID)
SELECT * FROM Emp_CTE

--Select EmployeeName, ManagerName from the employee table.

WITH Emp_CTE(EmployeeName,ManagerName) AS (SELECT e.FirstName as EmployeeName,m.FirstName as ManagerName FROM Employees e left join Employees m on e.EmployeeID=m.EmployeeID)
SELECT * FROM Emp_CTE

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

WITH Emp_CTE(FirstName,IncentiveAmount) AS (SELECT E.FirstName FirstName,ISNULL(i.IncentiveAmount,0) IncentiveAmount FROM Employees E LEFT JOIN Incentives i ON e.EmployeeID=i.EmployeeID)
SELECT * FROM Emp_CTE