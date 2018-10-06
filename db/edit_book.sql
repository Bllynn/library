UPDATE books
SET title=$2,
author=$3,
genre=$4,
image_url=$5,
description=$6
WHERE id = $1;
SELECT * FROM books
WHERE id = $1
