#**Welcome to OPTIself**
## Initial Set up and run

1. Clone the repository using `git clone`
2. Run the docker containers and install requirements using `vagrant up`.
3. You will need to SSH into your VM using `vagrant ssh`
4. Next you will need to access the database using the following command: `docker exec -it vagrant_postgres_1 bash`
5. You will need to past the following: psql -h localhost -p 5432 -U root -W optiself
6. You will not be prompted for a password which is... password
7. Now you need to create the tables within the database, run the following three SQL statements:

```
CREATE TABLE Users (
   ID SERIAL PRIMARY KEY,
   username           text   NOT NULL,
   password           text   NOT NULL,
   dob          text    NOT NULL,
   type           text    NOT NULL,
   Relation integer not null
);

CREATE TABLE Messages(
ID SERIAL PRIMARY KEY ,
message text not null,
sender_id int not null,
receiver_id int not null
);

CREATE TABLE Schedule(
ID SERIAL PRIMARY KEY,
user_id integer REFERENCES Users (id),
receiver_id int not null,
title text not null,
note text not null,
eventdate text NOT NULL,
created_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
```
8. Once the tables have been created lets `\q` out of the database and run the following command in order to rerun the postgresapi: `docker restart vagrant_postgres_1`


###Modifying your hosts file in order to run the proxy incase of failure.
1. In a terminal, outside of the vm, past sudo nano /etc/hosts and run
2. At the very bottom of your hosts file past the following : `192.168.50.100  Optiself.co.uk postgresapi.local`
3. Carry out the `vagrant up` command for a second time.
