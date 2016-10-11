import {CommentsController, ICommentsController} from "./comments.controller";

export function CommentsDirective(): ng.IDirective  {
    return {
        scope: {
            commentsTo: '=',
            model: '='
        },
        controllerAs: 'vm',
        controller: CommentsController,
        template: `
            <new-comment target="vm.dataService" target-model="vm.dataService"></new-comment>
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