import {BooksController, IBooksController} from "./books.controller";
export function BooksDirective(): ng.IDirective {
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
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IBooksController) {
        }
    };
}