export interface IModel {
    all(): Array<any>
    getOne(id: number)
}

export interface IBooksService extends IModel{
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

    all(): Array<Book> {
        return this.books;
    }

    addBook(title: string, author: string, pageCount: number): void {
        this.books.push(
            new Book(this.books.length, title, author, pageCount)
        );
    }

    addComment(bookId: number, title: string, text: string, rating: number): void {
        this.books[bookId].addComment(title, text, rating);
    }

    getOne(bookId: number): Book {
        return this.books[bookId];
    }
}

export interface IBook {
    _id: number
    title: string
    author: string
    pageCount: number
    rating: number
    comments: Array<Comment>

}

export class Book implements IBook {
    _id: number;
    title: string;
    author: string;
    pageCount: number;
    rating: number;
    comments: Array<Comment> = [];

    constructor(_id: number, title: string, author: string, pageCount: number) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.rating = 0;
    }

    addComment(title: string, text: string, rating: number) {
        this.comments.push(new Comment(this.comments.length, title, text, rating))
    }
}

export interface IComment {
    _id: number
    name: string
    text: string
    rating: number
}

export class Comment implements IComment {
    _id: number;
    name: string;
    text: string;
    rating: number;

    constructor(_id: number, name: string, text: string, rating: number) {
        this._id = _id;
        this.name = name;
        this.text = text;
        this.rating = rating;
    }
}