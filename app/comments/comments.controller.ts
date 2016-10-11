import {IDataService, BooksService} from "../util/services/data/books.service";
import {ICommentable} from "../util/models/dataModel.interface";
import {IComment} from "../util/models/comment.model";
import {IBook, Book} from "../util/models/book.model";
export interface ICommentsController {
    comments: Array<Comment>;
    model: IDataService;
    sendComment(): void
}

export class CommentsController {

    static $inject = ['$scope'];

    public target: Book;
    public dataService: BooksService;

    public name: string;
    public text: string;
    public rating: number;

    constructor($scope, $timeout){
        this.target = $scope.commentsTo;
        this.dataService = $scope.model;
    }

    public sendComment(): void {
        this.dataService.addComment(
            this.target._id,
            <IComment>{
                name: this.name,
                text: this.text,
                rating: 5
            });
        this.name = '';
        this.text = '';
        console.log(this.target);
    }
}