import {BooksService} from "../util/services/data/books.service";
import {Book} from "../util/models/book.model";
export class OrderBookController {

    static $inject = ['$scope', 'booksService'];

    public book: Book;
    public address: string;

    private booksService: BooksService;

    constructor($scope, booksService: BooksService) {
        this.address = '';
        this.booksService = booksService;
        this.book = $scope.book;

        console.log($scope);
    }

    public orderBook(): void {

        this.booksService.orderBook(this.book._id, this.address).then((book: Book) => {
            this.book.orderCount = book.orderCount;
            this.address = '';
        })
    }
}