function BookDirective() {
    return {
        scope: {},
        template:
            `<div>
               {{text}}
             </div>`,
        link: function (scope)
        {
            scope.text = 'Book directive';
        }
    };

}