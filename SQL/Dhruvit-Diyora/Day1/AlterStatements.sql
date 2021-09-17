--task1-Write a SQL statement to add a foreign key constraint named fk_job_id on JobId column of JobHistory table referencing to the primary key JobId of jobs table.
ALTER TABLE JobHistory 
ADD CONSTRAINT fk_job_id 
FOREIGN KEY (JobId) 
REFERENCES Jobs(JobId) 
ON DELETE CASCADE;


--task2-Write a SQL statement to drop the existing foreign key fk_job_id from JobHistory table on JobId column which is referencing to the JobId of jobs table.

ALTER TABLE JobHistory
DROP CONSTRAINT fk_job_id;

--task3-Write a SQL statement to add a new column named location to the JobHistory table.
ALTER TABLE JobHistory
ADD Location varchar(255)
