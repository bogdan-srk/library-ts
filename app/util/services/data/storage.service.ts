import IPromise = angular.IPromise;
import {IBook} from "../../models/book.model";
import IQService = angular.IQService;

export interface IStorageService {
    save(books: Array<IBook>): boolean
    get(): Array<any>
}

export class StorageService implements IStorageService {

    static $inject = ['$q'];

    private $q;

    constructor($q) {
        this.$q = $q;

        if (!localStorage.getItem('library')){
            localStorage.setItem('library', JSON.stringify([]))
        }
    }

    public save(books: Array<IBook>): boolean{
        localStorage.setItem('library', JSON.stringify(books));
        return true;
    }

    public get(): Array<any>{
        return JSON.parse(localStorage.getItem('library'));
    }
}