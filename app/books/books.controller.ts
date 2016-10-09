export class BooksController {

    static $inject = ['booksService'];
    private booksService = {};
    private books = [];

    constructor (booksModel){
        this.booksService = booksModel;
        this.books = booksModel.all()
    }
}
