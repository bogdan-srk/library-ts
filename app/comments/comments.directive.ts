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
            <div class="input-form">
                <label>
                    <input class="form-element" type="text" ng-model="vm.name" placeholder="Enter name...">
                </label>
                <div class="form-text" ng-model="vm.text" contenteditable="true" placeholder="Comment text..."></div>
                <label class="form-input-label">
                    Rate Book:  
                    <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[0]"/>
                    {{vm.RATINGS[0]}}
                
                    <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[1]"/>
                    {{vm.RATINGS[1]}}
                
                    <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[2]"/>
                    {{vm.RATINGS[2]}}
               
                    <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[3]"/>
                    {{vm.RATINGS[3]}}
                
                    <input type="radio" ng-model="vm.rating" ng-value="vm.RATINGS[4]"/>
                    {{vm.RATINGS[4]}}
                </label>
                <br>        
                <button class="form-element" ng-click="vm.sendComment()" class="send-comment">Send</button>
            </div>
            <ul>
                <li ng-repeat="comment in vm.commentsTo.comments | orderBy:'-_id'">
                    <comment comment-data="comment" class="comment"></comment>
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