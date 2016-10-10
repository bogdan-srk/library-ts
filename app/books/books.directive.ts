import {BooksController} from "./books.controller";
export function BooksDirective() {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: 'vm',
        controller: BooksController,
        template: `
                   <div ng-repeat="book in vm.books">
                     <book book-id="{{book._id}}"></book>
                     <a href="#/books/{{book._id}}">Watch more...</a>
                   </div>`,
        link: function (scope) {
        }
    };
}