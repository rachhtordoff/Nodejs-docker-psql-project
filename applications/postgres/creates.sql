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
