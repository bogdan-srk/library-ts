import {Comment, IModel} from "../books/books.service";

export interface CommentsController {
    comments: Array<Comment>;
    model: IModel;
}

export class CommentsController {

    static $inject = ['$scope'];

    public comments: Array<Comment>;
    public model: IModel;

    constructor($scope){
        this.comments = $scope.commentsTo.comments;
        this.model = $scope.model;
    }
}