--Create an insert trigger on CourseEnrolled Table, record should be updated in TotalFees Field on the Student table for the respective student.

CREATE TRIGGER TotalFees_add ON  CourseEnrolled
AFTER INSERT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @StudentID DECIMAL(6,0),@CourseID DECIMAL(6,0),@TotalFees DECIMAL(8,2)
	SELECT @StudentID=StudentID,@CourseID=CourseID FROM INSERTED
	SELECT @TotalFees=TotalFees FROM Course WHERE CourseID=@CourseID
	UPDATE Student SET TotalFees = TotalFees +@TotalFees WHERE StudentID = @StudentID
	UPDATE Student SET RemainingAmt = RemainingAmt + @TotalFees WHERE StudentID = @StudentID
END

INSERT INTO CourseEnrolled VALUES(101,13)

--Create an insert trigger on FeePayment, record should be updated in RemainingAmt Field of the Student Table for the respective student.

CREATE TRIGGER Fee_payment ON FeePayment
AFTER INSERT
AS
BEGIN
	SET NOCOUNT ON
	DECLARE @StudentID DECIMAL(6,0),@AmountPaid DECIMAL(8,2)
	SELECT @StudentID=StudentID , @AmountPaid=AmountPaid FROM INSERTED
	UPDATE Student SET RemainingAmt = RemainingAmt - @AmountPaid WHERE StudentID=@StudentID
END

INSERT INTO FeePayment VALUES(101,40000,'2018-01-01')

--practice

CREATE TRIGGER Employee_TRIGGER ON Emp_Salary
INSTEAD OF INSERT
NOT FOR REPLICATION
AS 
BEGIN 
	SET NOCOUNT ON
	INSERT INTO TempTest
	SELECT EmpID,Salary FROM inserted
END