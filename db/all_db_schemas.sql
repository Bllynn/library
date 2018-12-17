CREATE TABLE librarycard
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(25) NOT NULL
);
CREATE TABLE books
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    author VARCHAR(50),
    genre VARCHAR(25),
    description TEXT,
    image_url TEXT,
    in_stock VARCHAR(3),
    user_id INTEGER REFERENCES librarycard(id)
);
CREATE TABLE librarycart
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES librarycard(id),
    book_id INTEGER REFERENCES books(id) UNIQUE
);
CREATE TABLE bookshelf
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES librarycard(id),
    book_id INTEGER REFERENCES books(id)
);


INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Sorcerer''s Stone', 'J.K Rowling', 'Childrens', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hprl59035340a_1024x1024.jpg?v=1526629350', 'What did Harry Potter know about magic? He was stuck living with the decidedly un-magical Dursleys, who hated him. He slept in a closet and ate their leftovers. But an owl messenger changes all that, with an invitation to attend the Hogwarts School for Wizards and Witches, where it turns out Harry is already famous...', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Chamber of Secrets', 'J.K Rowling', 'Fantasy', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc02_1024x1024.jpg?v=1526629299', 'When the Chamber of Secrets is opened again at the Hogwarts School for Witchcraft and Wizardry, second-year student Harry Potter finds himself in danger from a dark power that has once more been released on the school. Pages: 341.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', 'Crime', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc03_1024x1024.jpg?v=1526629345', 'For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter''s defeat of You-Know-Who was Black''s downfall as well. And the Azkaban guards heard Black muttering in his sleep, ''He''s at Hogwarts ... he''s at Hogwarts.'' Harry Potter isn''t safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.During his third year at Hogwarts School for Witchcraft and Wizardry, Harry Potter must confront the devious and dangerous wizard responsible for his parents'' deaths. Pages: 435.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Goblet of Fire', 'J.K Rowling', 'Sports', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc04_1024x1024.jpg?v=1526629324', 'This is the pivotal fourth novel in the seven part tale of Harry Potter''s training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that''s supposed to take place at the Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn''t happened in a hundred years. He wants to be a normal, fourteen year old wizard. Unfortunately for Harry Potter, he''s not normal - even by wizarding standards.And in his case, different can be deadly.Fourteen-year-old Harry Potter joins the Weasleys at the Quidditch World Cup, then enters his fourth year at Hogwarts Academy where he is mysteriously entered in an unusual contest that challenges his wizarding skills, friendships and character, amid signs that an old enemy is growing stronger. Pages: 734.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Order of the Pheonix', 'J.K Rowling', 'Fantasy', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc05_df005389-3d15-4a9a-bd01-c60d726d606e_1024x1024.jpg?v=1517443095', 'There is a Door at the end of a silent corridor. And it''s haunting Harry Potter''s dreams. Why else would he be waking in the middle of the night, screaming in terror? Here are just a few things on Harry''s mind: A Defense Against the Dark Arts teacher with a personality like poisoned honey. A venomous, disgruntled house-elf. Ron as keeper of the Gryffindor Quidditch team. The looming terror of the end-of-term Ordinary Wizarding Level exams...and of course, the growing threat of He-Who-Must-Not-Be-Named. In the richest installment yet of J. K. Rowling''s seven-part story, Harry Potter is faced with the unreliability of the very government of the magical world and the impotence of the authorities at Hogwarts. Despite this (or perhaps because of it), he finds depth and strength in his friends, beyond what even he knew boundless loyalty and unbearable sacrifice. Though thick runs the plot (as well as the spine), readers will race through these pages and leave Hogwarts, like Harry, wishing only for the next train back.When the government of the magic world and authorities at Hogwarts School of Witchcraft and Wizardry refuse to believe in the growing threat of a freshly revived Lord Voldemort, fifteen-year-old Harry Potter finds support from his loyal friends in facing the evil wizard and other new terrors. Pages: 870.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Half-Blood Prince', 'J.K Rowling', 'Crime', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc06_6023448b-fd73-425c-97fa-1df4d3089336_1024x1024.jpg?v=1517443071', 'As the Harry Potter sequence draws to a close, Harry''s most dangerous adventure yet is just beginning...We could tell you, but then we''d have to Obliviate your memory. Pages: 672.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Deathly Hallows', 'J.K Rowling', 'Horror', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc07_092db66a-8791-4721-9ebe-b38848271fea_1024x1024.jpg?v=1517442940', 'It all comes down to this - a final faceoff between good and evil. You plan to pull out all the stops, but every time you solve one mystery, three more evolve. Do you stay the course you started, despite your lack of progress? Do you detour and follow a new lead that may not help? Do youlisten to your instincts, or your friends?Lord Voldemort is preparing for battle and so must Harry. With Ron and Hermione at his side, he''s trying to hunt down Voldemort''s Horcruxes, escape danger at every turn, and find a way to defeat evil once and for all. How does it all end? Pages: 759.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Sorcerer''s Stone', 'J.K Rowling', 'Childrens', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hprl59035340a_1024x1024.jpg?v=1526629350', 'What did Harry Potter know about magic? He was stuck living with the decidedly un-magical Dursleys, who hated him. He slept in a closet and ate their leftovers. But an owl messenger changes all that, with an invitation to attend the Hogwarts School for Wizards and Witches, where it turns out Harry is already famous...', 'No');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Chamber of Secrets', 'J.K Rowling', 'Fantasy', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc02_1024x1024.jpg?v=1526629299', 'When the Chamber of Secrets is opened again at the Hogwarts School for Witchcraft and Wizardry, second-year student Harry Potter finds himself in danger from a dark power that has once more been released on the school. Pages: 341.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Prisoner of Azkaban', 'J.K Rowling', 'Crime', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc03_1024x1024.jpg?v=1526629345', 'For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter''s defeat of You-Know-Who was Black''s downfall as well. And the Azkaban guards heard Black muttering in his sleep, ''He''s at Hogwarts ... he''s at Hogwarts.'' Harry Potter isn''t safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.During his third year at Hogwarts School for Witchcraft and Wizardry, Harry Potter must confront the devious and dangerous wizard responsible for his parents'' deaths. Pages: 435.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Goblet of Fire', 'J.K Rowling', 'Sports', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc04_1024x1024.jpg?v=1526629324', 'This is the pivotal fourth novel in the seven part tale of Harry Potter''s training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that''s supposed to take place at the Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn''t happened in a hundred years. He wants to be a normal, fourteen year old wizard. Unfortunately for Harry Potter, he''s not normal - even by wizarding standards.And in his case, different can be deadly.Fourteen-year-old Harry Potter joins the Weasleys at the Quidditch World Cup, then enters his fourth year at Hogwarts Academy where he is mysteriously entered in an unusual contest that challenges his wizarding skills, friendships and character, amid signs that an old enemy is growing stronger. Pages: 734.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Order of the Pheonix', 'J.K Rowling', 'Fantasy', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc05_df005389-3d15-4a9a-bd01-c60d726d606e_1024x1024.jpg?v=1517443095', 'There is a Door at the end of a silent corridor. And it''s haunting Harry Potter''s dreams. Why else would he be waking in the middle of the night, screaming in terror? Here are just a few things on Harry''s mind: A Defense Against the Dark Arts teacher with a personality like poisoned honey. A venomous, disgruntled house-elf. Ron as keeper of the Gryffindor Quidditch team. The looming terror of the end-of-term Ordinary Wizarding Level exams...and of course, the growing threat of He-Who-Must-Not-Be-Named. In the richest installment yet of J. K. Rowling''s seven-part story, Harry Potter is faced with the unreliability of the very government of the magical world and the impotence of the authorities at Hogwarts. Despite this (or perhaps because of it), he finds depth and strength in his friends, beyond what even he knew boundless loyalty and unbearable sacrifice. Though thick runs the plot (as well as the spine), readers will race through these pages and leave Hogwarts, like Harry, wishing only for the next train back.When the government of the magic world and authorities at Hogwarts School of Witchcraft and Wizardry refuse to believe in the growing threat of a freshly revived Lord Voldemort, fifteen-year-old Harry Potter finds support from his loyal friends in facing the evil wizard and other new terrors. Pages: 870.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Half-Blood Prince', 'J.K Rowling', 'Crime', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc06_6023448b-fd73-425c-97fa-1df4d3089336_1024x1024.jpg?v=1517443071', 'As the Harry Potter sequence draws to a close, Harry''s most dangerous adventure yet is just beginning...We could tell you, but then we''d have to Obliviate your memory. Pages: 672.', 'Yes');
INSERT INTO books
    (title, author, genre, image_url,description, in_stock)
VALUES
    ('Harry Potter and the Deathly Hallows', 'J.K Rowling', 'Horror', 'https://cdn.shopify.com/s/files/1/2597/5112/products/hpbthc07_092db66a-8791-4721-9ebe-b38848271fea_1024x1024.jpg?v=1517442940', 'It all comes down to this - a final faceoff between good and evil. You plan to pull out all the stops, but every time you solve one mystery, three more evolve. Do you stay the course you started, despite your lack of progress? Do you detour and follow a new lead that may not help? Do youlisten to your instincts, or your friends?Lord Voldemort is preparing for battle and so must Harry. With Ron and Hermione at his side, he''s trying to hunt down Voldemort''s Horcruxes, escape danger at every turn, and find a way to defeat evil once and for all. How does it all end? Pages: 759.', 'No');