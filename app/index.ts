import * as angular from 'angular';
import * as ngRoute from 'angular-route'
import 'angular-mocks/ngMockE2E';

import {BooksController} from "./books/books.controller";
import {BooksService} from "./util/services/data/books.service";
import {routeConfig} from "./route";
import {BooksDirective} from "./books/books.directive";
import {BookDirective} from "./books/book/book.directive";
import {PageBookDirective} from "./book/page-book.directive";
import {CommentsDirective} from "./comments/comments.directive";
import {CommentDirective} from "./comments/comment/comment.directive";
import {NewCommentDirective} from "./comments/newComment/newComment.directive";
import {ContenteditableDirective} from "./util/directives/contenteditable.directive";
import {StorageService} from "./util/services/data/storage.service";
import {fakeServerRoutes} from "./fakeServer/fakeServer.routes";
import {OrderBookDirective} from "./order-book/order-book.directive";

angular.module('app', [ngRoute, 'ngMockE2E'])
    .run(fakeServerRoutes)
    .controller('booksController', BooksController)
    .service('booksService', BooksService)
    .service('storageService', StorageService)
    .directive('pageBooks', BooksDirective)
    .directive('pageBook', PageBookDirective)
    .directive('book', BookDirective)
    .directive('orderBook', OrderBookDirective)
    .directive('comments', CommentsDirective)
    .directive('comment', CommentDirective)
    .directive('newComment', NewCommentDirective)


    .directive('contenteditable', ContenteditableDirective)
    .config(routeConfig);



