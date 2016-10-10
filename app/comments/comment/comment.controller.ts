export interface ICommentController {
    name: string;
    text: string;
    rating: number;
}

export class CommentController implements ICommentController{

    static $inject = ['$scope'];

    public name: string;
    public text: string;
    public rating: number;

    constructor($scope) {
        this.name = $scope.commentData.name;
        this.text = $scope.commentData.text;
        this.rating = $scope.commentData.rating;
    }
}