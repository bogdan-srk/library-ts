import {BooksService} from "../util/services/data/books.service";
import {Book, IBook} from "../util/models/book.model";

export interface IBooksController extends ng.IController {
    booksService: BooksService
    books: Array<Book>
    arr: Array<any>
}

export class BooksController implements IBooksController {

    public booksService: BooksService;
    public books: Array<Book>;
    public arr: Array<any>;
    public title: string;

    public author: string;
    public pageCount: number;

    private $http: ng.IHttpService;

    static $inject: Array<string> = ['booksService', '$scope', '$http'];

    constructor(booksService, $scope, $http: ng.IHttpService) {
        this.booksService = booksService;
        this.$http = $http;
        this.arr = ['asd', 'ased', 'sddd'];
        this.setBooks();
    }

    public test(): void {
        //noinspection TypeScriptUnresolvedFunction
        this.$http.post('/api/books/1', {mydat: 'mydat'}).then((res) => {
            console.log(res);
        });
    }

    public addVal(): void {
        this.arr.push('value ' + this.arr.length);
    }

    public addBook(): void {
        //this.books.push(new Book(this.books.length, 'title', 'author', 20 + this.books.length));
        //noinspection TypeScriptUnresolvedFunction
        this.booksService.addBook(this.title, this.author, this.pageCount).then(() => {
            this.setBooks();
        });
        //this.setBooks();
    }

    private setBooks() {
        //noinspection TypeScriptUnresolvedFunction
        this.booksService.all().then((books) => {
            this.books = books;
        })
    }

}
