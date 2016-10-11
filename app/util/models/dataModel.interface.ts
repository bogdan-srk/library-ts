import {IComment} from "./comment.model";
export interface IDataModel {
    _id: number
}

export interface ICommentable {
    comments: Array<IComment>
}