import {Book, IBook} from "../../models/book.model";
import {Comment, IComment} from "../../models/comment.model"
export interface IDataService {
    all(): Array<any>
    getOne(id: number): void
}

export interface IBooksService extends IDataService{
    all(): Array<Book>
    getOne(bookId: number): Book
    addBook(book: IBook): void
    addComment(bookId: number, comment: IComment): void
}

export class BooksService implements IBooksService {
    private books: Array<Book> = [];

    constructor() {
        const booksCount: number = 10;
        const commentsCount: number = 10;

        for (let i = 0; i < booksCount; i++) {
            this.addBook({
                title: `Book title ${i}`,
                author: 'Name of author',
                pageCount: Math.floor((Math.random() * 10) + 1)
            });
            for (let j = 0; j < commentsCount; j++) {
                this.books[i].addComment(<IComment>{
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

    public addBook({title, author, pageCount}): void {
        this.books.push(
            new Book(this.books.length, title, author, pageCount)
        );
    }

    public addComment(bookId: number, comment: IComment): void {
        this.books[bookId].addComment(comment);
    }

    public getOne(bookId: number): Book {
        return this.books[bookId];
    }
}
