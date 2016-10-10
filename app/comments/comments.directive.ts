import {CommentsController} from "./comments.controller";
export function CommentsDirective(): ng.IDirective  {
    return {
        scope: {
            commentsTo: '=',
            model: '='
        },
        controllerAs: 'vm',
        controller: CommentsController,
        template: `
            <ul ng-repeat="comment in vm.comments">
                <li>
                    <comment comment-data="comment"></comment>
                </li>
            </ul>
        `,
        link: function (scope, elem, attr, ctrl) {
        }
    }
}