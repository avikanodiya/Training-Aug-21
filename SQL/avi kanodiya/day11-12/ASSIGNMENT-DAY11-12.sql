--Create a Store Procedure which will accept name of the customer as input parameter and product the following output, List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name.

CREATE PROCEDURE customer_PROCEDURE @City VARCHAR(19)
AS SELECT * FROM DepositTable D JOIN CustomerTable C ON D.CNAME=C.CNAME JOIN BranchTable B ON D.BNAME=B.BNAME WHERE B.City=@City

EXEC customer_PROCEDURE @City='Nagpur'

--Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format, All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account

CREATE PROCEDURE customer_PROCEDURE1 @name VARCHAR(19)
AS SET NOCOUNT ON;
SELECT CNAME FROM DepositTable WHERE BNAME IN (SELECT BNAME FROM BranchTable WHERE CNAME=@name) FOR JSON PATH
GO
EXEC customer_PROCEDURE1 @name='ANIL'

--Create a Store Procedure that will accept city name and returns the number of customers in that city.

CREATE PROCEDURE customer_PROCEDURE2 @city VARCHAR(18)
AS 
SELECT CNAME FROM CustomerTable WHERE City = @city
GO
EXEC customer_PROCEDURE2 @city='MUMBAI'

--Count the Number of Customers Living in the City where Branch is Located

CREATE PROCEDURE customer_PROCEDURE4
AS
SELECT COUNT(*) AS NearByCustomer FROM DepositTable D
JOIN BranchTable B ON D.BNAME=B.BNAME
JOIN CustomerTable C ON D.CNAME=C.CNAME WHERE C.City = B.City 
GO
EXEC customer_PROCEDURE4

--Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI

CREATE PROCEDURE customer_PROCEDURE3 @city VARCHAR(18)
AS
SELECT D.CNAME FROM DepositTable D 
JOIN BranchTable B ON B.BNAME = D.BNAME 
JOIN CustomerTable C ON D.CNAME = C.CNAME   
WHERE C.City = @city AND B.City IN('MUMBAI','DELHI') FOR JSON PATH
GO

--Create a Procedure which will accept input in JSON parameter CustomerName,City, ACTNO,Branch,amount And insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date.

CREATE PROCEDURE insertjson_PROCEDURE @jsondata NVARCHAR(MAX)
AS
SET NOCOUNT ON
INSERT INTO DepositTable SELECT ACTNO,CNAME,BNAME,Amount,Adate=GETDATE() FROM OPENJSON(@jsondata)
WITH(
ACTNO VARCHAR(5),
CNAME VARCHAR(19),
BNAME VARCHAR(18),
Amount INT
)

DECLARE @jsondata NVARCHAR(MAX)
SET @jsondata = N'[{ 

"ACTNO": "110",
"CNAME" : "JIGNESH",
"BNAME" : "CHANDKHEDA",
"Amount" : 10000

}]'
PRINT(@jsondata)

EXEC insertjson_PROCEDURE @jsondata = @jsondata