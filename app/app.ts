/// <reference path="../typings/tsd.d.ts" />
/// <reference path="controllers/library.controller.ts" />

/// <reference path="interfaces/library.interface.ts" />

import angular = require('angular')

module App {

    let app = angular.module("libraryApp", []);

    class LibraryController {

        constructor(private $scope: ILibraryScope) {
            $scope.text = "Wellcome!";
            $scope.login = function (name) {
                $scope.text = "Hello, " + name + "!";
            }
        }

    }

    angular.module("libraryApp").controller('libraryController', LibraryController);

    interface ILibraryScope extends ng.IScope {
        text: string;
        login: (name: string) => void;
    }
}





