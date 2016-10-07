import * as angular from 'angular';
import {BooksController} from "./books/books.controller";
import {BooksService} from "./books/books.service";

angular.module('app', [])
    .controller('booksController', BooksController)
    .service('booksModel', BooksService);



