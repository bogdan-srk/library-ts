import {
    IDataService, IBooksService, BooksService,
    IDataServiceCommentable
} from "../../util/services/data/books.service";
import {Book} from "../../util/models/book.model";
import {IComment} from "../../util/models/comment.model";
import {IDataModelCommentable} from "../../util/models/dataModel.interface";

export interface INewCommentController {
    name: string
    comment: string
    rating: number
    sendComment(): void
}

export class NewCommentController implements INewCommentController {
    public name: string;
    public comment: string;
    public rating: number;

    private target: IDataModelCommentable;
    private dataService: IDataServiceCommentable;

    static $inject = ['$scope'];

    constructor($scope) {
        this.target = $scope.target;
        this.dataService = $scope.targetModel;
    }

    public sendComment(): void {
        this.dataService.addComment(
            this.target._id,
            <IComment>{
                name: this.name,
                text: this.comment,
                rating: 5
            });
        this.name = '';
        this.comment = '';
    }


}