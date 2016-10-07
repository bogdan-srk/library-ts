export class BooksController {

    static $inject = ['booksModel'];
    booksModel = {};
    books = [];

    constructor (booksModel){
        this.booksModel = booksModel;
        this.books = booksModel.all()
    }
}
