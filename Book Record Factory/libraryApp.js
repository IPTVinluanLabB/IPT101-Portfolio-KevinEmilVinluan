// libraryApp.js
import { book, book2, book3, book4 } from './bookModule.js';

console.log(book.getBookLabel('Available'));
console.log(book2.getBookLabel('Available'));
console.log(book3.getBookLabel('Not Available'));
console.log(book4.getBookLabel('Not Available'));