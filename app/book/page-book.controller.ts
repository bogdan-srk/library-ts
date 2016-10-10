import {Book, BooksService} from "../books/books.service";

export interface IPageBookRouteParams extends ng.route.IRouteParamsService {
    id: number
}

export interface IPageBookController extends ng.IController {
    book: Book
    booksService: BooksService
}

export class PageBookController implements IPageBookController {

    public book: Book;
    public booksService: BooksService;

    static $inject = ['$routeParams', 'booksService'];

    constructor($routeParams: IPageBookRouteParams, BooksService: BooksService) {
        this.book = BooksService.getOne($routeParams.id);
        this.booksService = BooksService;
    }
}