exports.id=0,exports.modules={20:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(o(0)),a=o(21),r=o(22),l=i(o(5)),s=i(o(23)),c=i(o(24)),u=i(o(32));function i(e){return e&&e.__esModule?e:{default:e}}var f=new l.default;f.get("*",function(e,t){console.log("服务器启用成功"),console.log(e.url),console.log(c.default),console.log((0,r.match)()),console.log("match函数是有用的"),(0,r.match)({routes:c.default,location:e.url},function(o,l,c){if(o)t.status(500).send(o.message);else if(l)t.redirect(302,l.pathname+l.search);else if(c){var i=c.components.filter(function(e){return e.dataFetcher}).map(function(t){return t.dataFetcher({params:c.params,location:c.location,urlBase:"http://localhost:3000",cookie:e.headers.cookie})});Promise.all(i).then(function(e){var o={};e.forEach(function(e){o=Object.assign(o,e)});var l=(0,a.renderToString)(n.default.createElement(u.default,{initialState:o},n.default.createElement(r.RouterContext,c)));t.status(200).send((0,s.default)(l,o))}).catch(function(e){console.log("Error rendering to string: "+e)})}else t.status(404).send("Not found")})}),t.default=f}};
//# sourceMappingURL=0.58945ad9a98fabfa7427.hot-update.js.map