import {BookController, IBookController} from "./book.controller";

export function BookDirective(): ng.IDirective  {
    return {
        restrict: 'E',
        scope: {
            book: '='
        },
        controller: ['$scope', 'booksService', BookController],
        controllerAs: 'vm',
        template: `
                   <a class="back-link" href="#/books/{{book._id}}">
                       <ul class="book-properties">
                         <li class="book-property">Title: <span>{{vm.book.title}}</span></li>
                         <li class="book-property">Author: <span>{{vm.book.author}}</span></li>
                         <li class="book-property">Page Count: <span>{{vm.book.pageCount}}</span></li>
                         <li class="book-property">Rating: <span>{{vm.book.rating}}</span></li>
                       </ul>
                   </a>`,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IBookController) {
        }
    };

}