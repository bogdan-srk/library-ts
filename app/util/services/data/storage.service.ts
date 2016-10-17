import IPromise = angular.IPromise;
import {IBook, Book} from "../../models/book.model";
import IQService = angular.IQService;

export interface IStorageService {
    save(books: Array<IBook>): boolean
    get(id?: number): Array<Book>
}

export class StorageService implements IStorageService {

    static $inject = ['$q'];

    constructor(private $q) {

        console.log(this.$q);

        if (!localStorage.getItem('library')){
            localStorage.setItem('library', JSON.stringify([]))
        }
    }

    public save(books: Array<IBook>): boolean{
        localStorage.setItem('library', JSON.stringify(books));
        return true;
    }

    public get(id?: number): Array<Book>{
        let response: Array<Book>;
        let booksData: Array<Book> = JSON.parse(localStorage.getItem('library'));
        response = id == undefined
            ? booksData
            : [booksData[id]];
        return response;
    }
}