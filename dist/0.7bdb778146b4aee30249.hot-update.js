exports.id=0,exports.modules={20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});u(n(0)),n(21),n(22);var o=u(n(5));u(n(23)),u(n(24)),u(n(32)),n(1);function u(e){return e&&e.__esModule?e:{default:e}}var l=new o.default;l.get("*",function(e,t){console.log("服务器启用成功"),console.log("http://127.0.0.1:3000/api"+e.url),fetch("http://127.0.0.1:3000/api"+e.url).then(function(e){return e.json()}).then(function(e){console.log("从服务器返回的数据：",e)}),t.send("test now...")}),t.default=l}};
//# sourceMappingURL=0.7bdb778146b4aee30249.hot-update.js.map