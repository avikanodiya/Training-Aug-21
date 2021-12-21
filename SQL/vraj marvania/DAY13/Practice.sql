--->UDF
-->Create User-defined Functions

--CREATE 
		CREATE FUNCTION CK_ODD_EVEN (@VALUE INT)
		RETURNS CHAR(4) AS
		BEGIN
			DECLARE @return_value CHAR(4)
			IF (@VALUE%2=0) 
				SET @return_value = 'EVEN'
			ELSE 
				SET @return_value = 'ODD'
			RETURN @return_value
		END


		SELECT dbo.CK_ODD_EVEN(0) AS argument_0
        


-->Scalar Functions
--The return value can either be a scalar (single) value or a table

		CREATE FUNCTION dbo.ufnGetInventoryStock(@ProductID int)  
		RETURNS int   
		AS   
		-- Returns the stock level for the product.  
		BEGIN  
			DECLARE @ret int  
			SELECT @ret = SUM(p.Quantity)   
			FROM Production.ProductInventory p   
			WHERE p.ProductID = @ProductID   
				AND p.LocationID = '6'  
			 IF (@ret IS NULL)   
				SET @ret = 0  
			RETURN @ret  
		END

		SELECT ProductModelID, Name, dbo.ufnGetInventoryStock(ProductID)AS CurrentSupply  
		FROM Production.Product  
		WHERE ProductModelID BETWEEN 75 and 80

-->Table-Valued Functions

		CREATE  FUNCTION DATAA()
		RETURNS table 
		AS
		RETURN(SELECT * FROM Employees)


		SELECT *  FROM DATAA()

-->Drop Function
 
	    DROP FUNCTION DATAA


-->Alter Function
--ALTER

        ALTER FUNCTION CK_ODD_EVEN (@VALUE INT)
		RETURNS CHAR(4) AS
		BEGIN
			DECLARE @return_value CHAR(4)
			IF (@VALUE%2=0) 
				SET @return_value = 'EVEN'
			ELSE 
				SET @return_value = 'ODD'
			RETURN @return_value
		END
		SELECT dbo.CK_ODD_EVEN(0) AS argument_0


--> Practices


		CREATE FUNCTION Sales.ufn_SalesByStore (@storeid int)  
		RETURNS TABLE  
		AS  
		RETURN   
		(  
			SELECT P.ProductID, P.Name, SUM(SD.LineTotal) AS 'Total'  
			FROM Production.Product AS P   
			JOIN Sales.SalesOrderDetail AS SD ON SD.ProductID = P.ProductID  
			JOIN Sales.SalesOrderHeader AS SH ON SH.SalesOrderID = SD.SalesOrderID  
			JOIN Sales.Customer AS C ON SH.CustomerID = C.CustomerID  
			WHERE C.StoreID = @storeid  
			GROUP BY P.ProductID, P.Name  
		)

		SELECT * FROM Sales.ufn_SalesByStore (602)
