"use strict";

var mix = require("laravel-mix"); // require("jquery");
// require("popper");
// require("bootstrap");


mix.sass("assets/sass/main.scss", "public/build").js("assets/js/main.js", "public/build");