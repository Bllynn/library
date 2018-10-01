-- UPDATE books
-- SET in_stock = 'No' WHERE id = $2;
INSERT INTO librarycart(user_id, book_id) VALUES($1,$2);
SELECT * FROM librarycart
