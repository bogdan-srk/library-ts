import {Book} from "../../models/book.model";
import {Comment, IComment} from "../../models/comment.model";

export interface IDataService {
    all(): Array<any>
    getOne(id: number): void
}

export interface IBooksService extends IDataService {
    all(): Array<Book>
    getOne(bookId: number): Book
    addBook(title: string, author: string, pageCount: number): void
    addComment(bookId: number, comment: IComment): void
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
                this.addComment(i,<IComment>{
                    name: `Name ${this.books[i].comments.length}`,
                    text: `Text text`,
                    rating: Math.floor((Math.random() * 10) + 1)
                })
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

    public addComment(bookId: number, comment: IComment): void {
        this.books[bookId].comments.push(new Comment(this.books[bookId].comments.length, comment))
    }

    public getOne(bookId: number): Book {
        return this.books[bookId];
    }
}
