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
                   <ul>
                     <li>{{vm.book.title}}</li>
                     <li>{{vm.book.author}}</li>
                     <li>{{vm.book.pageCount}}</li>
                     <li>{{vm.book.rating}}</li>
                   </ul>`,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IBookController) {
        }
    };

}