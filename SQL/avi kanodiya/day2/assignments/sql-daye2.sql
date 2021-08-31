
SELECT * FROM Departments
UPDATE Employees SET Email = 'not available';
UPDATE Employees SET CommissionPct = 0.10,Email = 'not available';
UPDATE Employees SET CommissionPct = 0.10,Email = 'not available' WHERE DepartmentID = 110;
UPDATE Employees SET Email = 'not available'  WHERE DepartmentID = 80 AND CommissionPct < 20;
UPDATE Employees SET Email = 'not available' WHERE DepartmentID = (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'Accounting');
UPDATE Employees SET Salary = 8000 WHERE EmployeeID = 105 AND Salary < 5000;
UPDATE Employees SET JobId = 'SH_CLERK' WHERE EmployeeID = 118 AND JobId NOT LIKE 'SH%';
UPDATE Employees SET Salary = CASE DepartmentID WHEN 40 THEN Salary+(Salary * 0.25) WHEN 90 THEN Salary+(Salary * 0.15) WHEN 110 THEN Salary+(Salary * 0.10) ELSE Salary END
UPDATE Employees SET Salary = Salary+(Salary * 0.20), CommissionPct = CommissionPct+(CommissionPct * 0.10) WHERE JobId = 'PU_CLERK'


SELECT * FROM Employees

SELECT FirstName ,LastName FROM Employees
SELECT FirstName "Employee name" FROM Employees
SELECT * FROM Employees WHERE FirstName ='Steven'
SELECT * FROM Employees WHERE FirstName IN ('Neena','Lex')
SELECT * FROM Employees WHERE FirstName NOT IN ('Neena','Lex')
SELECT * FROM Employees WHERE Salary BETWEEN 5000 AND 8000
SELECT FirstName,LastName,Salary,Salary*0.12 PF FROM Employees
SELECT * FROM Employees WHERE FirstName LIKE 'N%'
SELECT DISTINCT DepartmentID FROM Employees
SELECT * FROM Employees ORDER BY FirstName DESC
SELECT EmployeeID,FirstName,LastName,Salary FROM Employees ORDER BY SALARY ASC
SELECT TOP 1 salary FROM (SELECT DISTINCT TOP 2 Salary FROM Employees ORDER BY Salary DESC) RESULT ORDER BY Salary