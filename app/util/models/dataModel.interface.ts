import {IComment} from "./comment.model";

export interface IDataModelCommentable extends ICommentable, IDataModel {

}

export interface IDataModelOrderable extends IOrderable, IDataModel {

}

export interface ICommentable {
    comments: Array<IComment>
    rating: number
}

export interface IOrderable {
    orderCount: number
}

export interface IDataModel {
    _id: number
}

