import {BooksController, IBooksController} from "./books.controller";
import {Book} from "../util/models/book.model";
export function BooksDirective(): ng.IDirective {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: 'vm',
        controller: BooksController,
        template: `
        <input ng-model="vm.title" class="book-title" type="text">
        <input ng-model="vm.author" class="book-author" type="text">
        <input ng-model="vm.pageCount" class="book-pagecount" type="number">
        <button ng-click="vm.addBook()">add</button>
        <div ng-repeat="book in vm.books | orderBy:'-_id'">
            <book book="book"></book>
            <a href="#/books/{{book._id}}">Watch more...</a>
        </div>`,
        link: function (scope: ng.IScope, elem, attr, ctrl: IBooksController) {

        }
    };
}