SELECT *
FROM librarycart
WHERE user_id = $1 AND book_id = $2;
-- SELECT * FROM books 
-- WHERE id = $2;