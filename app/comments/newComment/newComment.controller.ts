import {IDataService} from "../../util/services/data/books.service";
import {ICommentable} from "../../util/models/dataModel.interface";

export interface INewCommentController{
    name: string
    comment: string
    rating: number
}

export class NewCommentController implements INewCommentController{
    public name: string;
    public comment: string;
    public rating: number;

    private target: ICommentable;
    private targetModel: IDataService;

    static $inject = ['$scope'];

    constructor($scope) {
        this.target = $scope.target;
        this.targetModel = $scope.targetModel;
    }

    public sendComment(): void {


    }



}