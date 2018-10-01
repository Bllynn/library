SELECT username,id FROM librarycard
WHERE username = $1 AND password = $2;