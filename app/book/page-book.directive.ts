import {PageBookController, IPageBookController} from "./page-book.controller";
export function PageBookDirective (): ng.IDirective {
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
            <li>Is available: {{vm.book.isAvailable}}</li>
        </ul>
        <comments comments-to="vm.book" model="vm.booksService"></comments>
        `,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IPageBookController) {
        }
    }
}