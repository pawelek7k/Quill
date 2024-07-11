const Database = require('better-sqlite3');

const db = new Database('books.db');

const books = [
    ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "1997-06-26", "9780747532699", 223, "https://example.com/hp1.jpg", "English"],
    ["The Hobbit", "J.R.R. Tolkien", "1937-09-21", "9780618968633", 310, "https://example.com/hobbit.jpg", "English"],
    ["1984", "George Orwell", "1949-06-08", "9780451524935", 328, "https://example.com/1984.jpg", "English"],
    ["Pride and Prejudice", "Jane Austen", "1813-01-28", "9780679783268", 279, "https://example.com/pride_prejudice.jpg", "English"]
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            published_date TEXT,
            isbn TEXT,
            pages INTEGER,
            cover_url TEXT,
            language TEXT
        )
`).run();

const stmt = db.prepare(`
    INSERT INTO books (title, author, published_date, isbn, pages, cover_url, language)
    VALUES (?, ?, ?, ?, ?, ?, ?)
`);

for (const book of books) {
    stmt.run(book);
}

console.log("Database created successfully");
