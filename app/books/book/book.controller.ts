import {Book} from "../books.service";

export class BookController {
    book: Book;
    constructor($scope, BooksService) {
        this.book = BooksService.getOne($scope.bookId);
    }
}