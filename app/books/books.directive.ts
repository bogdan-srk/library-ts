import {BooksController} from "./books.controller";
export function BooksDirective() {
    return {
        restrict: 'E',
        scope: {},
        controllerAs: 'vm',
        controller: BooksController,
        template: `<div ng-repeat="book in vm.books">
                     <a href="#/books/{{book._id}}">{{book.title}}</a>
                   </div>`,
        link: function (scope) {
            console.log('books directive');
            scope.text = 'Books directive';
        }
    };
}