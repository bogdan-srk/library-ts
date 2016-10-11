import {BooksService} from "../util/services/data/books.service";
import {Book} from "../util/models/book.model";

export interface IBooksController extends ng.IController{
    booksService: BooksService
    books: Array<Book>
}

export class BooksController implements IBooksController{

    static $inject: Array<string> = ['booksService'];
    public booksService: BooksService;
    public books: Array<Book>;

    constructor (booksService){
        this.booksService = booksService;
        this.books = booksService.all();
    }
}
