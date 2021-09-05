--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table

SELECT datediff(mm,e.HireDate,i.IncentiveDate) as DiffBetweenDate FROM Employees e join Incentives i on e.EmployeeID=i.EmployeeID

--Select first_name, incentive amount from employee and incentives table for those employees who have incentives and incentive amount greater than 3000

SELECT e.EmployeeID,e.FirstName,i.IncentiveAmount FROM Employees AS e INNER JOIN Incentives AS i ON e.EmployeeID=i.EmployeeID WHERE I.IncentiveAmount >3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.

SELECT e.FirstName,i.IncentiveAmount FROM Employees e LEFT JOIN Incentives i ON e.EmployeeID=i.EmployeeID

--Select EmployeeName, ManagerName from the employee table.

SELECT e.FirstName,m.FirstName FROM Employees e LEFT JOIN Manager m on e.EmployeeID=m.EmployeeID

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and set incentive amount as 0 for those employees who didn’t get incentives.

SELECT E.FirstName,ISNULL(i.IncentiveAmount,0) FROM Employees E LEFT JOIN Incentives i ON e.EmployeeID=i.EmployeeID


