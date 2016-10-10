import {Comment} from "../books/books.service";

export class CommentsController {

    static $inject = ['$scope'];

    comments: Array<Comment>;
    model: any;

    constructor($scope){
        this.comments = $scope.commentsTo.comments;
        this.model = $scope.model;
    }
}