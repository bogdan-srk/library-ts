
import {OrderBookController} from "./order-book.controller";
import {Book} from "../util/models/book.model";
export function OrderBookDirective(): ng.IDirective {
    return {
        restrict: 'E',
        scope: {
            book: '='
        },
        controllerAs: 'order',
        controller: OrderBookController,
        template: `
        <label>
            <input ng-model="order.address" type="text">
        </label>
        <button ng-click="order.orderBook()">Order Book</button>
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: OrderBookController) => {
            scope.$watch('book', (newVal: Book) => {
                ctrl.book = newVal;
            });
        }
    }
}