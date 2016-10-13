import {CommentsController, ICommentsController} from "./comments.controller";
import * as angular from "angular"
import {Book} from "../util/models/book.model";

export function CommentsDirective(): ng.IDirective  {
    return {
        scope: {
            commentsTo: '=',
            model: '='
        },
        controllerAs: 'vm',
        controller: CommentsController,
        template: `
            <input type="text" ng-model="vm.name">
            <div ng-model="vm.text" style="width: 200px; min-height: 100px;" contenteditable="true"></div>
            <label>
                <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[0]"/>
                {{vm.RATINGS[0]}}
            </label>
            <label>
                <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[1]"/>
                {{vm.RATINGS[1]}}
            </label>
            <label>
                <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[2]"/>
                {{vm.RATINGS[2]}}
            </label>
            <label>
                <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[3]"/>
                {{vm.RATINGS[3]}}
            </label>
            <label>
                <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[4]"/>
                {{vm.RATINGS[4]}}
            </label>
            <br>
            <button ng-click="vm.sendComment()" class="send-comment">Send</button>
            <ul ng-repeat="comment in vm.commentsTo.comments">
                <li>
                    <comment comment-data="comment"></comment>
                </li>
            </ul>
        `,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: ICommentsController) {
            scope.$watch('commentsTo', (newVal: Book) => {
                ctrl.commentsTo = newVal;
            });
        }
    }
}