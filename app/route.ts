routeConfig.$inject = ["$routeProvider", '$locationProvider'];

export function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            template: "<page-books class='page-books'></page-books>",
        })
        .when("/books/:id", {
            template: "<page-book class='page-book'></page-book>"
        })
        .otherwise({
            template: "<h1>404</h1>"
        });
    $locationProvider.html5Mode(false)
}
