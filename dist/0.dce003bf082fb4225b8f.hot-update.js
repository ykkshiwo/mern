exports.id=0,exports.modules={20:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(o(0)),n=o(21),r=o(22),u=s(o(5)),a=s(o(23)),i=s(o(24));s(o(32));function s(e){return e&&e.__esModule?e:{default:e}}var d=new u.default;d.get("*",function(e,t){console.log("服务器启用成功"),console.log(e.url),console.log(i.default.props.children.props.children),t.send("test now...");var o=(0,n.renderToString)(l.default.createElement(r.StaticRouter,{location:e.url,context:initialState}));t.status(200).send((0,a.default)(o,initialState))}),t.default=d}};
//# sourceMappingURL=0.dce003bf082fb4225b8f.hot-update.js.map