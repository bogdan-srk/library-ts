import {PageBookController, IPageBookController} from "./page-book.controller";
export function PageBookDirective (): ng.IDirective {
    return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: PageBookController,
        template: `
        <a href="#/">Back to books</a>
        <ul>
            <li>{{vm.book.title}}     </li>
            <li>{{vm.book.author}}    </li>
            <li>{{vm.book.pageCount}} </li>
            <li>{{vm.book.rating}}</li>
        </ul>
        <comments comments-to="vm.book" model="vm.booksService"></comments>`,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IPageBookController) {
        }
    }
}