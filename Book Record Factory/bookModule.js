// bookModule.js

function createBookRecord(title, author, year) {
    return {
        title: title,
        author: author,
        year: year,

        getBookLabel(status) {
            return `${this.title} by ${this.author} (${this.year}) - Status: ${status}`;
        }
    };
}

export const book = createBookRecord('Frog and Toad are Friends', 'Arnold Lobel', 1970);
export const book2 = createBookRecord('Animal Farm', 'George Orwell', 1945);
export const book3 = createBookRecord('The Cat in the Hat', 'Dr. Seuss', 1957);
export const book4 = createBookRecord('The Pearl', 'John Steinbeck', 1947);

export function formatBookStatus(bookObj, status) {
    return `${bookObj.title} by ${bookObj.author} - Status: ${status}`;
}
