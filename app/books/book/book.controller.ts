import {Book} from "../../util/models/book.model";

export interface IBookController extends ng.IController{
    book: Book
}

export class BookController implements IBookController {
    public book: Book;
    constructor($scope, BooksService) {
        this.book = BooksService.getOne($scope.bookId);
    }
}