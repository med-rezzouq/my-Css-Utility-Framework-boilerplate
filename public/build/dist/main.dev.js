"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./assets/js/main.js":
    /*!***************************!*\
    !*** ./assets/js/main.js ***!
    \***************************/

    /***/
    function assetsJsMainJs() {
      document.querySelectorAll(".plusicon").forEach(function (plus) {
        plus.addEventListener("click", function () {
          alert("1");
        });
      });

      function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      /***/

    },

    /***/
    "./assets/sass/main.scss":
    /*!*******************************!*\
    !*** ./assets/sass/main.scss ***!
    \*******************************/

    /***/
    function assetsSassMainScss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // extracted by mini-css-extract-plugin

      /***/

    }
    /******/

  }; // The module cache

  /************************************************************************/

  /******/

  /******/

  var __webpack_module_cache__ = {}; // The require function

  /******/

  /******/

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)

    /******/

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    }; // Execute the module function

    /******/

    /******/

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__); // Return the exports of the module

    /******/

    /******/

    /******/


    return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)

  /******/

  /******/

  /******/


  __webpack_require__.m = __webpack_modules__; // the startup function // It's empty as some runtime module handles the default behavior

  /******/

  /******/

  /******/

  /******/

  __webpack_require__.x = function (x) {};
  /* webpack/runtime/hasOwnProperty shorthand */

  /************************************************************************/

  /******/

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /* webpack/runtime/make namespace object */

  /******/

  /******/

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module"
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /******/
    };
    /******/

  })();
  /* webpack/runtime/jsonp chunk loading */

  /******/

  /******/

  /******/


  (function () {
    /******/
    // no baseURI

    /******/

    /******/
    // object to store loaded and loading chunks

    /******/
    // undefined = chunk not loaded, null = chunk preloaded/prefetched

    /******/
    // Promise = chunk loading, 0 = chunk loaded

    /******/
    var installedChunks = {
      /******/
      "/public/build/main": 0
      /******/

    };
    /******/

    /******/

    var deferredModules = [
    /******/
    ["./assets/js/main.js"],
    /******/
    ["./assets/sass/main.scss"]
    /******/
    ]; // no chunk on demand loading // no prefetching // no preloaded // no HMR // no HMR manifest

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    /******/

    var checkDeferredModules = function checkDeferredModules(x) {}; // install a JSONP callback for chunk loading

    /******/

    /******/

    /******/


    var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/
      var _data = _slicedToArray(data, 4),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2],
          executeModules = _data[3]; // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback

      /******/

      /******/

      /******/


      var moduleId,
          chunkId,
          i = 0,
          resolves = [];
      /******/

      for (; i < chunkIds.length; i++) {
        /******/
        chunkId = chunkIds[i];
        /******/

        if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/
          resolves.push(installedChunks[chunkId][0]);
          /******/
        }
        /******/


        installedChunks[chunkId] = 0;
        /******/
      }
      /******/


      for (moduleId in moreModules) {
        /******/
        if (__webpack_require__.o(moreModules, moduleId)) {
          /******/
          __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/

      }
      /******/


      if (runtime) runtime(__webpack_require__);
      /******/

      if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/

      while (resolves.length) {
        /******/
        resolves.shift()();
        /******/
      } // add entry modules from loaded chunk to deferred list

      /******/

      /******/

      /******/


      if (executeModules) deferredModules.push.apply(deferredModules, executeModules); // run deferred modules when all chunks ready

      /******/

      /******/

      /******/

      return checkDeferredModules();
      /******/
    };
    /******/

    /******/


    var chunkLoadingGlobal = self["webpackChunkirchad_laarach_lvl_mix"] = self["webpackChunkirchad_laarach_lvl_mix"] || [];
    /******/

    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/

    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/

    /******/

    function checkDeferredModulesImpl() {
      /******/
      var result;
      /******/

      for (var i = 0; i < deferredModules.length; i++) {
        /******/
        var deferredModule = deferredModules[i];
        /******/

        var fulfilled = true;
        /******/

        for (var j = 1; j < deferredModule.length; j++) {
          /******/
          var depId = deferredModule[j];
          /******/

          if (installedChunks[depId] !== 0) fulfilled = false;
          /******/
        }
        /******/


        if (fulfilled) {
          /******/
          deferredModules.splice(i--, 1);
          /******/

          result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
          /******/
        }
        /******/

      }
      /******/


      if (deferredModules.length === 0) {
        /******/
        __webpack_require__.x();
        /******/


        __webpack_require__.x = function (x) {};
        /******/

      }
      /******/


      return result;
      /******/
    }
    /******/


    var startup = __webpack_require__.x;
    /******/

    __webpack_require__.x = function () {
      /******/
      // reset startup function so it can be called again when more startup code is added

      /******/
      __webpack_require__.x = startup || function (x) {};
      /******/


      return (checkDeferredModules = checkDeferredModulesImpl)();
      /******/
    };
    /******/

  })(); // run startup

  /******/

  /************************************************************************/

  /******/

  /******/

  /******/


  var __webpack_exports__ = __webpack_require__.x();
  /******/

  /******/

})();