import {Book, IBook} from "../../models/book.model";
import {Comment, IComment} from "../../models/comment.model";
import IPromise = angular.IPromise;

export interface IDataService {
    all(): IPromise<any>
    getOne(id: number): IPromise<any>
}

export interface IDataServiceCommentable extends IDataService{
    addComment(targetId: number, comment: IComment): ng.IPromise<any>
}

export interface IDataServiceOrderable extends IDataService {
    orderItem(itemId: number, address: string): ng.IPromise<any>
}

export interface IBooksService extends IDataServiceCommentable {
    all(): IPromise<any>
    getOne(bookId: number): ng.IPromise<void>
    addBook(title: string, author: string, pageCount: number): ng.IPromise<any>
    addComment(targetId: number, comment: IComment): ng.IPromise<any>
    orderItem(itemId: number, address: string): ng.IPromise<any>
}

export class BooksService implements IBooksService {
    private books: Array<Book>;
    private $http;

    constructor($http) {
        this.books = [];
        this.$http = $http;

        // if (true) {const booksCount: number = 10;
        // const commentsCount: number = 10;
        // for (let i = 0; i < booksCount; i++) {
        //     this.books.push(
        //         new Book(this.books.length, <IBook>{
        //             title: `Book title ${i}`,
        //             author:'Name of author',
        //             rating: Math.floor((Math.random() * 5) + 1),
        //             pageCount: Math.floor((Math.random() * 500) + 1),
        //             comments: []
        //         })
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
        // localStorage.setItem('library', JSON.stringify(this.books))}
    }

    public all(): IPromise<any> {
        return this.$http.get('/api/books').then((res) => {
            return res.data.books;
        });
    }

    public addBook(title: string, author: string, pageCount: number): ng.IPromise<void> {
        return this.$http.post('/api/books', {
            book: new Book(0, <IBook>{title, author, pageCount, comments: []})
        }).then((res) => {
            return res;
        });
    }

    public addComment(targetId: number, comment: IComment) {
        return this.$http.post('/api/books/' + targetId, new Comment(targetId, comment))
            .then((res) => {
                return res.data;
            });
    }

    public getOne(bookId: number): ng.IPromise<any> {
        return this.$http.get('/api/books/' + bookId).then((res) => {
            return res.data.book;
        });
    }

    public orderItem(itemId: number, address: string){
        return this.$http.post('/api/order/book/' + itemId, address).then((res) => {
            return <Book>res.data;
        })
    }
}
