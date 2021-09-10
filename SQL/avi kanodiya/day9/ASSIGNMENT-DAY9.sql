--Create a batch Select Banking as ‘Bank Dept’, Insurance as ‘Insurance Dept’ and Services as ‘Services Dept’ from employee table
SELECT CASE DepartmentName WHEN 'Accounting' THEN 'Account Dept'
						WHEN 'Finance' THEN 'Finance Dept'
						WHEN 'Construction' THEN 'Construction Dept'
						END
						AS Department FROM Departments

--5 Students Name, Address, City, DOB, Standard need to be inserted in the student table, need to fetch these result from json variable. and select output in the json format

CREATE TABLE StudentTable(
Name CHAR(10),
Address VARCHAR(25),
DOB VARCHAR(15),
Standard INT
)

DECLARE @Jsonstd NVARCHAR(MAX)
SET @Jsonstd = N'{
  "Student": [
    {
      "Name": "Stout Spence",
      "Address": "Diaperville",
      "DOB": "Sun Dec 28 1986 12:48:31",
      "Standard": 8
    },
    {
      "Name": "Caroline Campos",
      "Address": "Talpa",
      "DOB": "Wed Dec 05 1984 03:40:05",
      "Standard": 8
    },
    {
      "Name": "Adela Mooney",
      "Address": "Manitou",
      "DOB": "Mon Oct 21 1985 18:28:48",
      "Standard": 11
    },
    {
      "Name": "Loraine Gilliam",
      "Address": "Tolu",
      "DOB": "Sun Dec 05 2004 19:01:11",
      "Standard": 12
    },
    {
      "Name": "Elva Alexander",
      "Address": "Caln",
      "DOB": "Sat Aug 04 2018 12:18:53",
      "Standard": 10
    }
  ]
}'

-- IF ISJSON(@Jsonstd) > 0 
-- PRINT('ITS A JSON  FILE')

INSERT INTO StudentTable SELECT * FROM OPENJSON(@Jsonstd,'$.Student') 
WITH(
Name CHAR(10),
Address VARCHAR(25),
DOB VARCHAR(15),
Standard INT
)

SELECT * FROM StudentTable