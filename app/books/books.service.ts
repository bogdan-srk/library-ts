export class BooksService {
    books = [];

    constructor() {
        this.books = [
            {title: 'title'},
            {title: 'title'},
            {title: 'title'},
            {title: 'title'},
            {title: 'title'},
            {title: 'title'},
            {title: 'title'}
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