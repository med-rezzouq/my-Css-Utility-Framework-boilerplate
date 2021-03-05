let mix = require("laravel-mix");
// require("jquery");
// require("popper");
// require("bootstrap");
mix
  .options({
    processCssUrls: false,
  })
  .copyDirectory("assets/images", "public/images")
  .sass("assets/sass/main.scss", "public/build/css")
  .js("assets/js/main.js", "public/build/css");
