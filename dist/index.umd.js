(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.craft = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = ".craft-button-primary {\r\n    background-color: white;\r\n    border-width: 5px;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    padding: 10px 20px;\r\n    border-radius: 6px;\r\n}\r\n\r\n.craft-button-primary:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(247, 247, 247);\r\n}";
    n(css,{});

    //import React, { useState, useEffect } from 'react';

    function Button(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("button", {
        "class": "craft-button-primary"
      }, children));
    }

    //import React, { useState, useEffect } from 'react';

    function H1(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h1", null, children));
    }

    exports.Button = Button;
    exports.H1 = H1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
