export function ContenteditableDirective(): ng.IDirective {
    return {
        restrict: 'A',
        require: ['^?ngModel', '^?form'],
        link: function (scope, element, attrs, ngModel: ng.INgModelController) {
            if (!ngModel[0]) return;
            ngModel[0].$render = function () {
                element.html(ngModel[0].$viewValue || '');
            };
            element.on('blur keyup change focus', function () {
                scope.$apply(() => {
                    let html = element.html();
                    if (attrs.stripBr && html == '<br>') {
                        html = '';
                    }
                    ngModel[0].$setViewValue(html);
                });
            });
        }
    }
}