import {BooksService} from "../util/services/data/books.service";
import {Book, IBook} from "../util/models/book.model";

export interface IBooksController extends ng.IController {
    booksService: BooksService
    books: Array<Book>
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
        this.setBooks();
    }

    public addBook(): void {
        this.booksService.addBook(this.title, this.author, this.pageCount).then(() => {
            this.setBooks();
        });
    }

    private setBooks() {
        this.booksService.all().then((books: Array<Book>) => {
            this.books = books;
        })
    }

}
