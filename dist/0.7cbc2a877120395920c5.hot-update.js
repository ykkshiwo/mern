exports.id=0,exports.modules={20:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(o(0)),o(21),o(22);var l=n(o(5));n(o(23)),n(o(24)),n(o(32)),o(1);function n(e){return e&&e.__esModule?e:{default:e}}var u=new l.default;u.get("*",function(e,t){console.log("服务器启用成功"),console.log("http://127.0.0.1:3000/api"+e.url),fetch("http://127.0.0.1:3000/api"+e.url).then(function(e){console.log("从服务器返回的数据：",e)})}),t.default=u}};
//# sourceMappingURL=0.7cbc2a877120395920c5.hot-update.js.map