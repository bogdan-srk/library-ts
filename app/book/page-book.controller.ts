import {Book, BooksService} from "../books/books.service";

export class PageBookController {

    book: Book;
    booksService: BooksService;

    static $inject = ['$routeParams', 'booksService'];

    constructor($routeParams, BooksService){
        this.book = BooksService.getOne($routeParams.id);
        this.booksService = BooksService;
    }
}