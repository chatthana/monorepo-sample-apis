"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

Object.keys(_request).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _request[key];
    }
  });
});