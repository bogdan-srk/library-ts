import {OrderItemController} from "./order-item.controller";
import {Book} from "../util/models/book.model";
import {IOrderable, IDataModelOrderable} from "../util/models/dataModel.interface";
import {IDataServiceOrderable} from "../util/services/data/books.service";
export function OrderItemDirective(): ng.IDirective {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            model: '='
        },
        controllerAs: 'order',
        controller: OrderItemController,
        template: `
        <div class="input-form">
            <label>
                <input class="form-element" ng-model="order.address" type="text" placeholder="Enter Address...">
            </label>
            <button class="form-element" ng-click="order.orderItem()">Order Book</button>
        </div>        
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: OrderItemController) => {
            scope.$watch('item', (newVal: IDataModelOrderable) => {
                ctrl.item = newVal;
            });
        }
    }
}