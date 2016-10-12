import {IStorageService} from "./util/services/data/storage.service";
import {IComment} from "./util/models/comment.model";
appRun.$inject = ['$httpBackend', 'storageService'];

export function appRun($httpBackend, storageService: IStorageService): void {

    $httpBackend
        .whenGET('/api/books')
        .respond((method, url, data, headers) => {
            let books = storageService.get();
            console.log(books);
            return [
                200,
                {books},
                {}
            ]
        });
    $httpBackend
        .whenPOST('/api/books')
        .respond((method, url, data, headers) => {
            let books = storageService.get();
            let book = JSON.parse(data).book;
            book._id = books.length;
            books.push(book);
            storageService.save(books);
            return [200, {foo: 'bar 1'}, {}]
        });
    $httpBackend
        .whenGET(/\/api\/books\/(.+)/, undefined, ['books'])
        .respond((method, url, data, headers) => {
            console.log({method, url, data, headers});
            let id = url.split('/')[3];
            let books = storageService.get();
            return [200, {book: books[id]}, {}]
        });
    $httpBackend
        .whenPOST(/\/api\/books\/.*/)
        .respond((method, url, data, headers) => {
            console.log({method, url, data, headers});
            let comment = JSON.parse(data);
            let id = url.split('/')[3];
            let books = storageService.get();
            comment._id = books[id].comments.length;
            books[id].comments.push(comment);
            storageService.save(books);
            console.log(books[id]);
            return [200, storageService.get(id), {}];
        });

}