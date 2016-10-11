import {Book} from "../../models/book.model";

export interface IDataService {
    all(): Array<any>
    getOne(id: number): void
}

export interface IBooksService extends IDataService{
    all(): Array<Book>
    getOne(bookId: number): Book
    addBook(title: string, author: string, pageCount: number): void
    addComment(bookId: number, title: string, text: string, rating: number): void
}

export class BooksService implements IBooksService {
    private books: Array<Book> = [];

    constructor() {
        const booksCount: number = 10;
        const commentsCount: number = 10;

        for (let i = 0; i < booksCount; i++) {
            this.addBook(
                `Book title ${i}`,
                'Name of author',
                Math.floor((Math.random() * 10) + 1)
            );
            for (let j = 0; j < commentsCount; j++) {
                this.books[i].addComment(
                    `Name ${this.books[i].comments.length}`,
                    `Text text`,
                    Math.floor((Math.random() * 10) + 1))
            }
        }
    }

    public all(): Array<Book> {
        return this.books;
    }

    public addBook(title: string, author: string, pageCount: number): void {
        this.books.push(
            new Book(this.books.length, title, author, pageCount)
        );
    }

    public addComment(bookId: number, title: string, text: string, rating: number): void {
        this.books[bookId].addComment(title, text, rating);
    }

    public getOne(bookId: number): Book {
        return this.books[bookId];
    }
}
