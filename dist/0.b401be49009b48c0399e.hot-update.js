exports.id=0,exports.modules={20:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(l(0)),r=l(21),n=l(22),u=s(l(5)),a=s(l(23)),d=s(l(24));s(l(32));function s(e){return e&&e.__esModule?e:{default:e}}var c=new u.default;c.get("*",function(e,t){console.log("服务器启用成功"),console.log(e.url),console.log(d.default.props.children.props.children);var l=(0,r.renderToString)(o.default.createElement(n.StaticRouter,{location:e.url},o.default.createElement("routes",null)));t.status(200).send((0,a.default)(l,context))}),t.default=c}};
//# sourceMappingURL=0.b401be49009b48c0399e.hot-update.js.map