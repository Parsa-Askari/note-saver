CREATE TABLE TopicsTable(
    topics_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_name VARCHAR(80) NOT NULL,
    topics_note_count BIGINT NOT NULL
);
CREATE TABLE NotesTable(
    notes_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_id BIGINT NOT NULL,
    notes_name VARCHAR(80) NOT NULL,
    FOREIGN KEY (topics_id) REFERENCES TopicsTable(topics_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE ContentsTable(
    content_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    topics_id BIGINT NOT NULL,
    notes_id BIGINT NOT NULL,
    content_type VARCHAR(20) NOT NULL,
    content LONGTEXT NOT NULL,
    FOREIGN KEY (topics_id) REFERENCES TopicsTable(topics_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (notes_id) REFERENCES NotesTable(notes_id) ON DELETE CASCADE ON UPDATE CASCADE
);