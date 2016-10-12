import {Book} from "../util/models/book.model";
import {BooksService} from "../util/services/data/books.service";

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

    private $routeParams;

    static $inject = ['$routeParams', 'booksService'];

    constructor($routeParams: IPageBookRouteParams, BooksService: BooksService) {
        this.$routeParams = $routeParams;
        this.booksService = BooksService;

        this.setBook();
    }

    private setBook(){
        this.booksService.getOne(this.$routeParams.id).then((book: Book) => {
            this.book = book;
        });
    }
}