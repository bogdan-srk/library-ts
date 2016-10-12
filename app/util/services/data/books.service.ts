import {Book} from "../../models/book.model";
import {Comment, IComment} from "../../models/comment.model";

export interface IDataService {
    all()
    getOne(id: number)
}

export interface IBooksService extends IDataService {
    all()
    getOne(bookId: number)
    addBook(title: string, author: string, pageCount: number): void
    addComment(bookId: number, comment: IComment): void
}

export class BooksService implements IBooksService {
    private books: Array<Book>;
    private $http;

    constructor($http) {
        this.books = [];
        this.$http = $http;

        // const booksCount: number = 10;
        // const commentsCount: number = 10;

        // for (let i = 0; i < booksCount; i++) {
        //     this.books.push(
        //         new Book(this.books.length, `Book title ${i}`,
        //             'Name of author',
        //             Math.floor((Math.random() * 10) + 1))
        //     );
        //     for (let j = 0; j < commentsCount; j++) {
        //         this.books[i].comments.push(
        //             new Comment(this.books[i].comments.length, <IComment>{
        //                 name: `Name ${this.books[i].comments.length}`,
        //                 text: `Text text`,
        //                 rating: Math.floor((Math.random() * 10) + 1)
        //             })
        //         )
        //     }
        // }
        // localStorage.setItem('library', JSON.stringify(this.books))
    }

    public all() {
        return this.$http.get('/api/books').then((res) => {
            return res.data.books;
        });
    }

    public addBook(title: string, author: string, pageCount: number): void {
        return this.$http.post('/api/books', {
            book: new Book(0, title, author, pageCount)
        }).then((res) => {
            return res;
        });
        // this.books.push(
        //     new Book(this.books.length, title, author, pageCount)
        // );
    }

    public addComment(bookId: number, comment: IComment): void {
        console.log({bookId, comment});
        return this.$http.post('/api/books', {
            book: new Comment(0, comment)
        }).then((res) => {
            return res;
        });
        //this.books[bookId].comments.push(new Comment(this.books[bookId].comments.length, comment))
    }

    public getOne(bookId: number) {
        return this.$http.get('/api/books/' + bookId).then((res) => {
            return res.data.book;
        });
    }
}