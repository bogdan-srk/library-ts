import {CommentController} from "./comment.controller";

export function CommentDirective() {
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
        link: (scope, elem, attr, ctrl) => {
            //console.log(scope)
        }
    }
}