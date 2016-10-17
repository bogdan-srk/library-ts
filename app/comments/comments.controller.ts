import {IDataService, BooksService, IDataServiceCommentable} from "../util/services/data/books.service";
import {ICommentable, IDataModelCommentable} from "../util/models/dataModel.interface";
import {IComment} from "../util/models/comment.model";
import {IBook, Book} from "../util/models/book.model";
import IQService = angular.IQService;

export interface ICommentsController {
    commentsTo: Book;
    dataService: IDataService;
    sendComment(): void
}

export class CommentsController {

    static $inject = ['$scope', '$q'];

    public commentsTo: IDataModelCommentable;
    public dataService: IDataServiceCommentable;

    public name: string;
    public text: string;
    public rating: number;

    public RATINGS: Array<number>;

    private $q;
    private $scope;

    constructor($scope, $q) {
        this.$q = $q;
        this.$scope = $scope;
        this.dataService = $scope.model;

        this.RATINGS = [1, 2, 3, 4, 5];
        this.rating = this.RATINGS[0];
    }

    public sendComment(): void {
        this.dataService.addComment(
            this.commentsTo._id,
            <IComment>{
                name: this.name,
                text: this.text,
                rating: this.rating
            }).then((commentTo) => {
            this.name = '';
            this.text = '';
            this.rating = this.RATINGS[0];
            this.commentsTo.rating = commentTo.rating;
            this.commentsTo.comments = commentTo.comments;
        });
    }

}