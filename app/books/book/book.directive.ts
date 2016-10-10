import {BookController} from "./book.controller";

export function BookDirective() {
    return {
        restrict: 'E',
        scope: {
            bookId: '@'
        },
        controller: ['$scope', 'booksService', BookController],
        controllerAs: 'vm',
        template: `
                   <ul>
                     <li>{{vm.book.title}}     </li>
                     <li>{{vm.book.author}}    </li>
                     <li>{{vm.book.pageCount}} </li>
                     <li>{{vm.book.rating}}</li>
                   </ul>`,
        link: function (scope, element, attrs, ctrl) {
        }
    };

}