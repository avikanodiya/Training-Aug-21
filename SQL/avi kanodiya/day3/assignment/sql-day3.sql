--Write a query that displays the FirstName and the length of the FirstName for all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the employees’ FirstName

SELECT FirstName , LEN(FirstName) FROM Employees WHERE FirstName LIKE 'A%' OR FirstName LIKE 'J%' OR FirstName LIKE 'M%' ORDER BY FirstName

--Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.

SELECT RIGHT(replicate('$',10)+cast(Salary as varchar(15)),10) AS SALARY FROM Employees

--Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.

SELECT EmployeeID,FirstName,LastName,HireDate FROM Employees WHERE DATENAME(day,HireDate) = 7 OR DATENAME(year,HireDate) = 7

--Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.

SELECT FirstName FROM Employees WHERE SUBSTRING(LastName,3,1) = 'c'

--Write a query to extract the last 4 character of PhoneNumber.

SELECT RIGHT(PhoneNumber,4) FROM Employees

--Write a query to update the portion of the PhoneNumber in the employees table, within the phone number the substring ‘124’ will be replaced by ‘999’.

UPDATE Employees SET PhoneNumber = REPLACE(PhoneNumber ,'124','999') WHERE PhoneNumber LIKE '%124%'

--Write a query to get the distinct Mondays from HireDate in employees tables.

SELECT DISTINCT FirstName,HireDate FROM Employees WHERE DATENAME(weekday,HireDate)='Monday';

--Write a query to get the FirstName and HireDate from Employees table where HireDate between ‘1987-06-01’ and ‘1987-07-30’

SELECT FirstName,LastName FROM Employees WHERE HireDate BETWEEN '1987-06-01 00:00:00' AND '1987-07-30 23:59:59'

--Write a query to display the current date in the following format.

SELECT FORMAT(GETDATE(),'hh:mm:ss yyyy-MM-dd') AS CurrentDate

--Write a query to get the FirstName, LastName who joined in the month of June.

SELECT FirstName,LastName FROM Employees WHERE DATENAME(month,HireDate)='June'

--Write a query to get first name, hire date and experience of the employees.

SELECT FirstName,HireDate,DATEDIFF(DD,HireDate,FORMAT(GETDATE(),'yyyy-MM-dd'))/365 AS Experience FROM Employees

--Write a query to get first name of employees who joined in 1987.

SELECT FirstName FROM Employees WHERE DATENAME(yy,HireDate) = 1987