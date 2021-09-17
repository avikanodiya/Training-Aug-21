--Ranking function

-- DENSE_RANK() :
SELECT DENSE_RANK() OVER (ORDER BY DEPARTMENTID)[RANK],FirstName,DepartmentID
FROM Employees

SELECT * FROM 
(SELECT DENSE_RANK() OVER (ORDER BY DEPARTMENTID)[RANK],FirstName,DepartmentID
FROM Employees) TBL
WHERE RANK=2

SELECT DENSE_RANK() OVER (PARTITION BY JOBID ORDER BY SALARY DESC)[RANK],FirstName,DepartmentID,Salary,JobId
FROM Employees

-- RANK() :
SELECT RANK() OVER (ORDER BY DEPARTMENTID)[RANK],FirstName,DepartmentID,Salary
FROM Employees

SELECT * FROM 
(SELECT RANK() OVER (ORDER BY DEPARTMENTID)[RANK1],FirstName,DepartmentID
FROM Employees) TBL
WHERE RANK1=2

SELECT RANK() OVER (PARTITION BY JOBID ORDER BY SALARY DESC)[RANK],FirstName,DepartmentID,Salary,JobId
FROM Employees


-- ROW_NUMBER() :
SELECT ROW_NUMBER() OVER (ORDER BY JOBID DESC)[ROW_RANK],Salary,JobId FROM Employees

--Aggregate function:
--SUM():
SELECT SUM(Salary)
FROM Employees

SELECT SUM(Salary)
FROM Employees
WHERE DepartmentID>50

SELECT SUM(Salary)
FROM Employees
WHERE DepartmentID>50  AND EmployeeID = 100 

--COUNT():
SELECT COUNT(DepartmentID)
FROM Employees

SELECT COUNT(DepartmentID)
FROM Employees
WHERE Salary BETWEEN 5000 AND 10000

--AVG():
SELECT AVG(Salary)
FROM Employees

SELECT AVG(Salary)
FROM Employees
WHERE DepartmentID < 120 AND DepartmentID>100


--MAX():
SELECT MAX(Salary)
FROM Employees

SELECT MAX(Salary)
FROM Employees
WHERE JobId='IT_PROG'

--MIN():
SELECT MIN(Salary)
FROM Employees
WHERE JobId='IT_PROG'

SELECT MIN(DepartmentID)
FROM Employees
WHERE JobId='IT_PROG'

--GROUP BY:
SELECT DepartmentID,SUM(Salary)[TOTAL_SALARY],AVG(Salary)[AVG_SALARY]
FROM Employees
GROUP BY DepartmentID

	--GROUP BY CUBE:
	   SELECT COALESCE(JobId,'TOTAL'),SUM(Salary)
		FROM Employees
		GROUP BY CUBE(JobId)

		SELECT COALESCE(JobId,'TOTAL') [GROUP_JOBID],DEPARTMENTID,SUM(Salary)
		FROM Employees
		GROUP BY CUBE(JobId,DepartmentID)
	
	--GROUP BY GROUPING SETS():  IT'S MORE EFFICENT USE 'GROUPING SETS' INSTED 'UNION'
	  SELECT DepartmentID,JobId,SUM(Salary) [TOTAL_SALARY]
	  FROM Employees
	  GROUP BY 
	  GROUPING SETS(
	  (DepartmentID,JOBID),
	  (DepartmentID),
	  (JobId),
	  ()
	  )
	  ORDER BY GROUPING(JobId), GROUPING(DepartmentID) ASC


--GROUP BY ROLLUP:
SELECT COALESCE(JobId,'TOTAL'),SUM(Salary)
FROM Employees
GROUP BY ROLLUP(JobId)

SELECT COALESCE(JobId,'TOTAL') [GROUP_JOBID],DEPARTMENTID,SUM(Salary)
FROM Employees
GROUP BY ROLLUP(DepartmentID,JobId)

--HAVING:
SELECT SUM(Salary)[TOTAL SALARY],DepartmentID
FROM Employees
GROUP BY DepartmentID
HAVING SUM(Salary)>15000  AND SUM(Salary)<20000