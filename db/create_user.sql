INSERT INTO librarycard(username, password)
values($1,$2);
select id,username FROM librarycard
WHERE username = $1 and password = $2;