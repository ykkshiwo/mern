exports.id=0,exports.modules={12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(2)),u=l(n(13)),a=(n(14),l(n(4)));n(3),l(n(15));function l(e){return e&&e.__esModule?e:{default:e}}var i=new a.default;!function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("props的值是：",n.props.staticContext),n.state={issues:n.props.staticContext.i.metadata.totalCount},n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("button",null,this.state.issues))}}])}();function c(){return o.default.createElement("h1",null,"Hello World!")}i.get("*",function(e,t){var n=u.default.renderToString(o.default.createElement(c,null));t.send('\n  <html>\n  <head></head>\n  <body>\n  <div id="app">'+n+'</div>\n  <script src="/vendor.js"><\/script>\n  <script src="/app.js"><\/script>\n  </body>\n  </html>\n')}),t.default=i}};
//# sourceMappingURL=0.4be994ce7b311e01f537.hot-update.js.map