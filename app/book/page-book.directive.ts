import {PageBookController, IPageBookController} from "./page-book.controller";
import {Book} from "../util/models/book.model";
export function PageBookDirective(): ng.IDirective {
    return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: PageBookController,
        template: `
        <a class="link-back" href="#/">Back to books</a>
        <div class="book">
             <ul class="book-properties">
                <li class="book-property">Title: {{vm.book.title}}</li>
                <li class="book-property">Author: {{vm.book.author}}</li>
                <li class="book-property">Pages: {{vm.book.pageCount}}</li>
                <li class="book-property">Rating: {{vm.book.rating}}</li>
                <li class="book-property">Ordered: {{vm.book.orderCount}}</li>
                <li class="book-property">Available: {{vm.book.isAvailable}}</li>
            </ul>
            <order-book ng-if="vm.book.isAvailable" book="vm.book"></order-book>
        </div>
        <comments comments-to="vm.book" model="vm.booksService" class="comments"></comments>
        `,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IPageBookController) {
            scope.$watch('vm.book', (newVal: Book) => {
                console.log(newVal);
            })
        }
    }
}