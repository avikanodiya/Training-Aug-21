--Write a query to rank employees based on their salary for a month

select *,Rank() over(order by Salary desc) from Employees

--Select 4th Highest salary from employee table using ranking function

select * FROM (SELECT *,RANK() over(order by Salary desc) as rank from Employees) as tbl where rank=4;

--Get department, total salary with respect to a department from employee table.

SELECT DepartmentID,sum(Salary) FROM Employees group by DepartmentID

--Get department, total salary with respect to a department from employee table order by total salary descending

SELECT DepartmentID,sum(Salary) FROM Employees group by DepartmentID order by sum(Salary) desc;

--Get department wise maximum salary from employee table order by salary ascending

SELECT DepartmentID,max(Salary) FROM Employees group by DepartmentID order by max(Salary)

--Get department wise minimum salary from employee table order by salary ascending

SELECT DepartmentID,min(Salary) FROM Employees group by DepartmentID order by min(Salary)

--Select department, total salary with respect to a department from employee table where total salary greater than 50000 order by TotalSalary descending

SELECT DepartmentID,sum(Salary) as TotalSalary FROM Employees group by DepartmentID having sum(Salary)>50000 order by sum(Salary) desc;

