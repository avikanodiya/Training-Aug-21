select *,Rank() over(order by Salary desc) from Employees

select * FROM (SELECT *,RANK() over(order by Salary desc) as rank from Employees) as tbl where rank=4;

SELECT DepartmentID,sum(Salary) FROM Employees group by DepartmentID

SELECT DepartmentID,sum(Salary) FROM Employees group by DepartmentID order by sum(Salary) desc;

SELECT DepartmentID,max(Salary) FROM Employees group by DepartmentID order by max(Salary)

SELECT DepartmentID,min(Salary) FROM Employees group by DepartmentID order by min(Salary)

SELECT DepartmentID,sum(Salary) as TotalSalary FROM Employees group by DepartmentID having sum(Salary)>50000 order by sum(Salary) desc;