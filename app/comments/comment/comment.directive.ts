import {CommentController, ICommentController} from "./comment.controller";

export function CommentDirective(): ng.IDirective  {
    return {
        scope: {
            commentData: '='
        },
        controllerAs: 'vm',
        controller: CommentController,
        template: `
            <span>{{vm.name}}</span>
            <p>{{vm.text}}</p>
            <span>Rating: {{vm.rating}}</span>
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: ICommentController) => {
        }
    }
}