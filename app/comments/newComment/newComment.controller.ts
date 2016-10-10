export interface INewCommentController{
    name: string
    comment: string
    rating: number
}

export class NewCommentController implements INewCommentController{
    public name: string;
    public comment: string;
    public rating: number;

    static $inject = ['$scope'];

    constructor($scope) {

    }
}