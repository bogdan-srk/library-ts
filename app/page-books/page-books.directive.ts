import {BooksController, IBooksController} from "./page-books.controller";
import {Book} from "../util/models/book.model";
export function BooksDirective(): ng.IDirective {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: 'vm',
        controller: BooksController,
        template: `
        <div class="input-form">
        <label>
            <input class="form-element" ng-model="vm.title" class="book-title" type="text" placeholder="Book title...">
        </label>
        <br>
        <label>
            <input class="form-element" ng-model="vm.author" class="book-author" type="text" placeholder="Author name...">
        </label>
        <br>
        <label>
            <input class="form-element" ng-model="vm.pageCount" class="book-pagecount" type="number" placeholder="PagesCount">
        </label>
        <br>
        <button class="form-element" ng-click="vm.addBook()">Add Book</button>
        </div>
        
        <div ng-repeat="book in vm.books | orderBy:'-_id'">
            <book class="book" book="book"></book>
        </div></label>`,
        link: function (scope: ng.IScope, elem, attr, ctrl: IBooksController) {

        }
    };
}