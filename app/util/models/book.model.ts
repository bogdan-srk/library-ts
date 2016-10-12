import {IDataModel, ICommentable} from "./dataModel.interface";
import {Comment, IComment} from "./comment.model"

export interface IBook {

    title: string
    author: string
    pageCount: number
    rating?: number
    orderCount: number
    comments?: Array<Comment>
}

export class Book implements IBook, IDataModel, ICommentable {

    _id: number;
    title: string;
    author: string;
    pageCount: number;
    rating: number;
    orderCount: number;
    isAvailable: boolean;
    comments: Array<Comment>;

    constructor(_id: number, title: string, author: string, pageCount: number) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.rating = 0;
        this.orderCount = 0;
        this.isAvailable = true;
        this.comments = [];
    }
}