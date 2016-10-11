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

    constructor(_id: number, name: string, text: string, rating: number) {
        this._id = _id;
        this.name = name;
        this.text = text;
        this.rating = rating;
    }
}