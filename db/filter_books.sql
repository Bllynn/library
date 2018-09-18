SELECT * FROM books
WHERE genre = $1
ORDER BY title ASC;