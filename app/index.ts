import * as angular from 'angular';
import * as ngRoute from 'angular-route'
import {config} from "./app.config";

import {BooksController} from "./books/books.controller";
import {BooksService} from "./books/books.service";
import {routeConfig} from "./route";
import {BooksDirective} from "./books/books.directive";

angular.module('app', [ngRoute])
    .controller('booksController', BooksController)
    .service('booksService', BooksService)
    .directive('pageBooks', BooksDirective)
    // .directive('book', BookDirective)
    .config(routeConfig);



