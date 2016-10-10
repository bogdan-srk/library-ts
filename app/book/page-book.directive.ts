import {PageBookController} from "./page-book.controller";
export function PageBookDirective (){
    return {
        controllerAs: 'vm',
        controller: PageBookController,
        template: `
        <ul>
            <li>{{vm.book.title}}     </li>
            <li>{{vm.book.author}}    </li>
            <li>{{vm.book.pageCount}} </li>
            <li>{{vm.book.rating}}</li>
        </ul>`
    }
}