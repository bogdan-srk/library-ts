import {Book, BooksService} from "../books/books.service";

export class PageBookController {

    book: Book;

    static $inject = ['$routeParams', 'booksService'];

    private booksService: BooksService;

    constructor($routeParams, BooksService){
        this.book = BooksService.getOne($routeParams.id);
        console.log(this.book);
    }
}