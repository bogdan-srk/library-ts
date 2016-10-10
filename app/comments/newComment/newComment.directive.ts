import {NewCommentController, INewCommentController} from "./newComment.controller";
import * as angular from "angular"
export function NewCommentDirective(): ng.IDirective {
    return {
        scope: {
            targetData: "=",
            targetModel: "="
        },
        controllerAs: 'vm',
        controller: NewCommentController,
        template: `
        <input type="text" ng-model="vm.name">
        <div ng-model="vm.comment" style="width: 200px; min-height: 100px;" contenteditable="true"></div>
        <button class="send-comment">Send</button>
        `,
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl:INewCommentController) => {

            //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
            let submitButton = angular.element(elem.children()[2]);

            submitButton.on('click', (e) => {
                console.log({name: ctrl.name, comment: ctrl.comment});
            });
        }
    }
}