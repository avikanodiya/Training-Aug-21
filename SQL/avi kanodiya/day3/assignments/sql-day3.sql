SELECT * FROM Employees	

SELECT FirstName , LEN(FirstName) FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' ORDER BY FirstName

SELECT RIGHT(replicate('$',10)+cast(Salary as varchar(15)),10) AS SALARY FROM Employees

SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATENAME(day,HireDate) = 7 OR DATENAME(year,HireDate) = 7

SELECT FirstName FROM Employees WHERE SUBSTRING(LastName,3,1) = 'c'

SELECT RIGHT(PhoneNumber,4) FROM Employees

UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber ,'124','999') WHERE PhoneNumber LIKE '%124%'

SELECT DISTINCT FirstName,HireDate FROM Employees WHERE DATENAME(weekday,HireDate)='Monday';


SELECT FirstName,LastName FROM Employees WHERE HireDate BETWEEN '1987-06-01 00:00:00' AND '1987-07-30 23:59:59'

SELECT FORMAT(GETDATE(),'hh:mm:ss yyyy-MM-dd') AS CurrentDate

SELECT FirstName,LastName FROM Employees WHERE DATENAME(month,HireDate)='June'

SELECT FirstName,HireDate,DATEDIFF(DD,HireDate,FORMAT(GETDATE(),'yyyy-MM-dd'))/365 AS Experience FROM Employees

SELECT FirstName FROM Employees WHERE DATENAME(yy,HireDate) = 1987


