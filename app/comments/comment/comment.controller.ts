export class CommentController {

    static $inject = ['$scope'];

    name: string;
    text: string;
    rating: number;

    constructor($scope) {
        this.name = $scope.commentData.name;
        this.text = $scope.commentData.text;
        this.rating = $scope.commentData.rating;
    }
}