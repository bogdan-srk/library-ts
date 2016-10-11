import {IDataModel} from "./dataModel.interface";

export interface IComment extends IDataModel {
    name: string
    text: string
    rating: number
}

export class Comment implements IComment {
    _id: number;
    name: string;
    text: string;
    rating: number;

    constructor(_id: number, comment: IComment) {
        this._id = _id;
        this.name = comment.name;
        this.text = comment.text;
        this.rating = comment.rating;
    }
}