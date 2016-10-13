import {PageBookController, IPageBookController} from "./page-book.controller";
import {Book} from "../util/models/book.model";
export function PageBookDirective(): ng.IDirective {
    return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: PageBookController,
        template: `
        <a href="#/">Back to books</a>
        <ul>
            <li>Title: {{vm.book.title}}</li>
            <li>Author: {{vm.book.author}}</li>
            <li>Pages: {{vm.book.pageCount}}</li>
            <li>Rating: {{vm.book.rating}}</li>
            <li>Ordered: {{vm.book.orderCount}}</li>
            <li>Available: {{vm.book.isAvailable}}</li>
            <order-book ng-if="vm.book.isAvailable" book="vm.book"></order-book>
        </ul>
        <comments comments-to="vm.book" model="vm.booksService"></comments>
        `,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IPageBookController) {
            scope.$watch('vm.book', (newVal: Book) => {
                console.log(newVal);
            })
        }
    }
}