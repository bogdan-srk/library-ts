routeConfig.$inject = ["$routeProvider", '$locationProvider'];

export function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Books</h1><page-books></page-books>",
        })
        .when("/books/:id", {
            template: "<h1>Book</h1><page-book class='page-book'></page-book>"
        })
        .otherwise({
            template: "<h1>404</h1>"
        });
    $locationProvider.html5Mode(false)
}
