UPDATE book
SET title=$2,
author=$3,
genre=$4,
image_url=$5,
description=$6,
where id = $1;
