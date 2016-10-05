import greeter = require('./util');
import $ = require('jquery');

$(() => {
    $(document.body).html(greeter("World"));
});