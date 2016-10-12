import {IDataService, BooksService} from "../util/services/data/books.service";
import {ICommentable} from "../util/models/dataModel.interface";
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

    public commentsTo: Book;
    public dataService: BooksService;

    public name: string;
    public text: string;
    public rating: number;

    private $q;
    private $scope;

    constructor($scope, $q){
        this.$q = $q;
        this.$scope = $scope;
        this.dataService = $scope.model;
    }

    public sendComment(): void {
        this.dataService.addComment(
            this.commentsTo._id,
            <IComment>{
                name: this.name,
                text: this.text,
                rating: 5
            }).then(() => {
            this.name = '';
            this.text = '';
        });

    }
}