/// <reference path="../../typings/tsd.d.ts" />

module App {
    export interface ILibraryScope extends ng.IScope {
        text: string;
        login: (name: string) => void;
    }
}