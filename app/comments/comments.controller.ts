
import {IDataService} from "../util/services/data/books.service";
export interface ICommentsController {
    comments: Array<Comment>;
    model: IDataService;
}

export class CommentsController {

    static $inject = ['$scope'];

    public comments: Array<Comment>;
    public model: IDataService;

    constructor($scope){
        this.comments = $scope.commentsTo.comments;
        this.model = $scope.model;
        console.log(this)
    }
}