import {BooksService} from "../util/services/data/books.service";
import {Book, IBook} from "../util/models/book.model";

export interface IBooksController extends ng.IController{
    booksService: BooksService
    books: Array<Book>
    arr: Array<any>
}

export class BooksController implements IBooksController{

    static $inject: Array<string> = ['booksService', '$scope'];
    public booksService: BooksService;
    public books: Array<Book>;
    public arr: Array<any>;

    public title: string;
    public author: string;
    public pageCount: number;

    constructor (booksService, $scope){
        this.booksService = booksService;
        this.books = booksService.all();

        this.arr = ['asd', 'ased', 'sddd'];
    }

    public addVal(): void{
        this.arr.push('value ' + this.arr.length);
    }

    public addBook(): void {
        //this.books.push(new Book(this.books.length, 'title', 'author', 20 + this.books.length));
        this.booksService.addBook(this.title, this.author, this.pageCount);
    }


}
