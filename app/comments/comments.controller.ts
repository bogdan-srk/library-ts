import {IDataService} from "../util/services/data/books.service";
import {ICommentable} from "../util/models/dataModel.interface";
export interface ICommentsController {
    comments: Array<Comment>;
    model: IDataService;
}

export class CommentsController {

    static $inject = ['$scope'];

    public target: ICommentable;
    public dataService: IDataService;

    constructor($scope){
        this.target = $scope.commentsTo;
        this.dataService = $scope.model;
        console.log(this)
    }
}