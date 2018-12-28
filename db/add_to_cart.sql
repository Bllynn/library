UPDATE books
SET
user_id = $1
WHERE id = $2;
INSERT INTO librarycart
    (user_id, book_id)
VALUES($1, $2);
-- SELECT *
-- FROM librarycart
-- WHERE user_id = $1;
