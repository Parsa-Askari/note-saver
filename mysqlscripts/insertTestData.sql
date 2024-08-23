INSERT INTO TopicsTable (topics_id,topics_name,topics_note_count)
VALUES
    (1,"pytorch is nice",2),
    (2,"react is nice",3),
    (3,"php is nice",1),
    (4,"c++ is nice",4);

INSERT INTO NotesTable (notes_id,topics_id,notes_name)
VALUES
    (1,1,"pytorch 1"),
    (2,1,"pytorch 2"),
    (3,2,"react 1"),
    (4,2,"react 2"),
    (5,2,"react 3"),
    (6,3,"php 1"),
    (7,4,"c++ 1"),
    (8,4,"c++ 2"),
    (9,4,"c++ 3"),
    (10,4,"c++ 4");


