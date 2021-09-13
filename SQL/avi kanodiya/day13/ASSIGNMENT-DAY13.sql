--Create a scaler Function to compute PF which will accept parameter basicsalary and compute PF. PF is 12% of the basic salary.

CREATE FUNCTION PF_compute (@basicSalary INT)
RETURNS INT
AS
BEGIN
DECLARE @pf INT =  @basicSalary *0.12
RETURN @pf
END

--Create a scaler Function which will compute PT which will accept MontlyEarning. Criteria as below.

CREATE FUNCTION pt_compute (@earning INT)

RETURNS CHAR(10)
AS
BEGIN
DECLARE @pt CHAR(10)
SET @pt = CASE  
WHEN @earning < 5999 THEN NULL
WHEN @earning BETWEEN 6000 AND 8999 THEN '80/MONTH'
WHEN @earning BETWEEN 9000 AND 11999 THEN '150/MONTH'
WHEN @earning > 12000 THEN '200/MONTH'
END
RETURN @pt
END

--Create a table valued function which will accept JobTitle which will return new table set based on jobtitle

CREATE FUNCTION jobTitle (@jobTitle VARCHAR(15))
RETURNS TABLE AS
RETURN(
SELECT * FROM Employees WHERE JobID=@jobTitle
) 

SELECT * FROM jobTitle('FI_ACCOUNT')