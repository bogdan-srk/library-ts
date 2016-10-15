import {CommentController, ICommentController} from "./comment.controller";

export function CommentDirective(): ng.IDirective  {
    return {
        scope: {
            commentData: '='
        },
        controllerAs: 'vm',
        controller: CommentController,
        template: `
            <span class="name">Name: {{vm.name}}</span>
            <p class="comment-text">{{vm.text}}</p>
            <span class="rating">Rating: {{vm.rating}}</span>
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: ICommentController) => {
        }
    }
}