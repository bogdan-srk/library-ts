export class BooksService {
    books = [];

    constructor() {
        this.books = [
            {_id: 0,title: 'title'},
            {_id: 1,title: 'title'},
            {_id: 2,title: 'title'},
            {_id: 3,title: 'title'},
            {_id: 4,title: 'title'},
            {_id: 5,title: 'title'},
            {_id: 6,title: 'title'}
        ];
    }

    all(){
        return this.books;
    }

    add(title){
        this.books.push(new Book(title));
    }}


interface IBook {
    title: string
}

class Book implements IBook{
    title: string;

    constructor(title: string){
        this.title = title
    }
}