import {IDataModelCommentable} from "./dataModel.interface";
import {Comment, IComment} from "./comment.model"

export interface IBook{

    title: string
    author: string
    pageCount: number
    rating?: number
    orderCount?: number
    isAvailable?: boolean;
    comments: Array<Comment>
}

export class Book implements IBook, IDataModelCommentable {

    _id: number;
    title: string;
    author: string;
    pageCount: number;
    rating: number;
    orderCount: number;
    isAvailable: boolean;
    comments: Array<Comment>;

    constructor(_id: number, book: IBook) {
        this._id = _id;
        this.title = book.title;
        this.author = book.author;
        this.pageCount = book.pageCount;
        this.rating = book.rating || 0;
        this.orderCount = book.orderCount || 0;
        this.isAvailable = true;
        this.comments = book.comments;
    }

    public getAverageRating(): number {
        let rating: number = this.comments.reduce(
                (sum, comment) => {
                    return sum + comment.rating;
                }, 0) / this.comments.length;

        return Math.round(rating * 10) / 10;
    }
}