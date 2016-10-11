import {CommentsController, ICommentsController} from "./comments.controller";
import * as angular from "angular"

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
            <button ng-click="vm.sendComment()" class="send-comment">Send</button>
            <ul ng-repeat="comment in vm.target.comments">
                <li>
                    <comment comment-data="comment"></comment>
                </li>
            </ul>
        `,
        link: function (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: ICommentsController) {

        }
    }
}