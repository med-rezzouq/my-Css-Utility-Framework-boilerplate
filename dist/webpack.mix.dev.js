"use strict";

var mix = require("laravel-mix"); // require("jquery");
// require("popper");
// require("bootstrap");


mix.copyDirectory("assets/images", "public/images").sass("assets/sass/main.scss", "public/build/css").js("assets/js/main.js", "public/build/css");