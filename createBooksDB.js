"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var better_sqlite3_1 = require("better-sqlite3");
var db = new better_sqlite3_1.default('books.db');
var books = [
    ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "1997-06-26", "9780747532699", 223, "https://example.com/hp1.jpg", "English"],
    ["The Hobbit", "J.R.R. Tolkien", "1937-09-21", "9780618968633", 310, "https://example.com/hobbit.jpg", "English"],
    ["1984", "George Orwell", "1949-06-08", "9780451524935", 328, "https://example.com/1984.jpg", "English"],
    ["Pride and Prejudice", "Jane Austen", "1813-01-28", "9780679783268", 279, "https://example.com/pride_prejudice.jpg", "English"]
];
db.prepare("\n   CREATE TABLE IF NOT EXISTS books (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            title TEXT NOT NULL,\n            author TEXT NOT NULL,\n            published_date TEXT,\n            isbn TEXT,\n            pages INTEGER,\n            cover_url TEXT,\n            language TEXT\n        )\n").run();
var stmt = db.prepare("\n    INSERT INTO books (title, author, published_date, isbn, pages, cover_url, language)\n    VALUES (?, ?, ?, ?, ?, ?, ?)\n");
for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
    var book = books_1[_i];
    stmt.run(book);
}
console.log("Database created successfully");
