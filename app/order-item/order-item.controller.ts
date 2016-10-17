import {BooksService, IDataServiceOrderable} from "../util/services/data/books.service";
import {Book} from "../util/models/book.model";
import {IDataModelOrderable} from "../util/models/dataModel.interface";
export class OrderItemController {

    static $inject = ['$scope', 'booksService'];

    public address: string;

    public item: IDataModelOrderable;
    public dataService: IDataServiceOrderable;

    constructor($scope) {
        this.address = '';
        this.dataService = $scope.model;
        console.log(this.dataService);
        this.item = $scope.item;
    }

    public orderItem(): void {

        this.dataService.orderItem(this.item._id, this.address).then((item: IDataModelOrderable) => {
            this.item.orderCount = item.orderCount;
            this.address = '';
        })
    }
}