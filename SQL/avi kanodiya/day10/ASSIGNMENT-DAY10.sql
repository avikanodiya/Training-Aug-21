/* Update the salary of the employee using following condition

Salary between 30000 and 40000 — 5000 hike

Salary between 40000 and 55000 — 7000 hike

Salary between 55000 and 65000 — 9000 hike */

SET NOCOUNT ON

--variable

DECLARE @EmpID INT
DECLARE @FirstName VARCHAR(20)
DECLARE @Salary INT

--cursor

DECLARE EmpSlr_CURSOR CURSOR FOR SELECT Employee_ID,FirstName,Salary FROM Employees

--open cursor

OPEN EmpSlr_CURSOR

--FETCHING

FETCH NEXT FROM EmpSlr_CURSOR INTO @EmpID,@FirstName,@Salary
WHILE @@FETCH_STATUS=0
BEGIN
IF @Salary BETWEEN 30000 AND 40000
UPDATE Employees SET Salary = Salary + 5000 
IF @Salary BETWEEN 40000 AND 55000
UPDATE Employees SET Salary = Salary + 7000
IF @Salary BETWEEN 55000 AND 65000
UPDATE Employees SET Salary = Salary + 9000
FETCH NEXT FROM Empslr_CURSOR INTO @EmpID,@FirstName,@Salary
END
CLOSE EmpSlr_CURSOR

--DEALLICATE

DEALLOCATE EmpSlr_CURSOR
SET NOCOUNT OFF