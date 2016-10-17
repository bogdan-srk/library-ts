import * as angular from 'angular';
import * as ngRoute from 'angular-route'
import 'angular-mocks/ngMockE2E';

import {BooksController} from "./page-books/page-books.controller";
import {BooksDirective} from "./page-books/page-books.directive";
import {BooksService} from "./util/services/data/books.service";
import {routeConfig} from "./route";
import {BookDirective} from "./page-books/book/book.directive";
import {PageBookDirective} from "./page-book/page-book.directive";
import {CommentsDirective} from "./comments/comments.directive";
import {CommentDirective} from "./comments/comment/comment.directive";
import {NewCommentDirective} from "./comments/newComment/newComment.directive";
import {ContenteditableDirective} from "./util/directives/contenteditable.directive";
import {StorageService} from "./util/services/data/storage.service";
import {fakeServerRoutes} from "./fakeServer/fakeServer.routes";
import {OrderItemDirective} from "./order-item/order-item.directive";

angular.module('app', [ngRoute, 'ngMockE2E'])
    .run(fakeServerRoutes)
    .controller('booksController', BooksController)
    .service('booksService', BooksService)
    .service('storageService', StorageService)
    .directive('pageBooks', BooksDirective)
    .directive('pageBook', PageBookDirective)
    .directive('book', BookDirective)
    .directive('orderItem', OrderItemDirective)
    .directive('comments', CommentsDirective)
    .directive('comment', CommentDirective)
    .directive('newComment', NewCommentDirective)


    .directive('contenteditable', ContenteditableDirective)
    .config(routeConfig);



