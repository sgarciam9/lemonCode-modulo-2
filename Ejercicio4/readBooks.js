"use strict";
function isBookRead(books, titleToSearch) {
    const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}
const books = [
    { title: "El señor de los anillos", isRead: true },
    { title: "1984", isRead: true },
    { title: "Cien años de soledad", isRead: false },
    { title: "El código Da Vinci", isRead: false },
];
console.log('--- RESULTADO READ BOOKS ---');
console.log(isBookRead(books, "1984")); // true
console.log(isBookRead(books, "Cien años de soledad")); // false
console.log(isBookRead(books, "El alquimista")); // false
