import {BooksService} from "./books.service";

export class BooksController {

    static $inject = ['booksService'];
    private booksService: BooksService;
    private books = [];

    constructor (booksService){
        this.booksService = booksService;
        this.books = booksService.all();
    }
}
