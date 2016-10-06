/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces/library.interface.ts" />

module App {
    class LibraryController {

        constructor(private $scope: ILibraryScope) {
            $scope.text = "Text text";
            $scope.login = function (name) {
                $scope.text = "function: " + name + "!";
            }
        }

    }

    angular.module("libraryApp").controller('libraryController', LibraryController);

}