CREATE TABLE TopicsTable(
    topics_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_name VARCHAR(80) NOT NULL,
    topics_note_count BIGINT,
);
CREATE TABLE NotesTable(
    notes_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_id BIGINT,
    notes_name VARCHAR(80),
    FOREIGN KEY (topics_id) REFERENCES TopicsTable(topics_id)
);
CREATE TABLE ContentsTable(
    content_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_id BIGINT,
    notes_id BIGINT,
    content_type VARCHAR(20),
    content LONGTEXT,
    FOREIGN KEY (topics_id) REFERENCES TopicsTable(topics_id),
    FOREIGN KEY (notes_id) REFERENCES NotesTable(notes_id)
);