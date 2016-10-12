import {Book} from "../../util/models/book.model";

export interface IBookController extends ng.IController{
    book: Book
}

export class BookController implements IBookController {
    public book: Book;

    static $inject = ['$scope'];

    constructor($scope) {
        this.book = $scope.book;
    }
}