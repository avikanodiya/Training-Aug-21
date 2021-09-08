--Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.

ALTER TABLE JobHistory ADD CONSTRAINT fkjob1 FOREIGN KEY(JobID) REFERENCES Jobs(JobID);

--Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.

ALTER TABLE jobhistory
DROP CONSTRAINT fkjob1;

--Write a SQL statement to add a new column named location to the JobHistory table.

ALTER TABLE JobHistory ADD location INT;