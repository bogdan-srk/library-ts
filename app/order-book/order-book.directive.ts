
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
        <div class="input-form">
            <label>
                <input class="form-element" ng-model="order.address" type="text" placeholder="Enter Address...">
            </label>
            <button class="form-element" ng-click="order.orderBook()">Order Book</button>
        </div>        
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: OrderBookController) => {
            scope.$watch('book', (newVal: Book) => {
                ctrl.book = newVal;
            });
        }
    }
}