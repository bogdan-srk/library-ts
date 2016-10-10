import * as angular from 'angular';
import * as ngRoute from 'angular-route'
import {config} from "./app.config";

import {BooksController} from "./books/books.controller";
import {BooksService} from "./books/books.service";
import {routeConfig} from "./route";
import {BooksDirective} from "./books/books.directive";
import {BookDirective} from "./books/book/book.directive";
import {PageBookDirective} from "./book/page-book.directive";

angular.module('app', [ngRoute])
    .controller('booksController', BooksController)
    .service('booksService', BooksService)
    .directive('pageBooks', BooksDirective)
    .directive('pageBook', PageBookDirective)
    .directive('book', BookDirective)
    .config(routeConfig);



