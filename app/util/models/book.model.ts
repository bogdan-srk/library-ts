import {IDataModel} from "./dataModel.interface";
import {Comment} from "./comment.model"

export interface IBook {
    title: string
    author: string
    pageCount: number
    rating?: number
    comments?: Array<Comment>
}

export class Book implements IBook, IDataModel {

    _id: number;
    title: string;
    author: string;
    pageCount: number;
    rating: number;
    comments: Array<Comment> = [];

    constructor(_id: number, title: string, author: string, pageCount: number) {
        this._id = _id;
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.rating = 0;
        this.comments = []
    }

    addComment(title: string, text: string, rating: number) {
        this.comments.push(new Comment(this.comments.length, title, text, rating))
    }
}