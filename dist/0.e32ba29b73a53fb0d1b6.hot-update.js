exports.id=0,exports.modules={12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=f(n(2)),a=f(n(13)),l=n(14),c=f(n(4)),i=n(3),s=f(n(15));function f(t){return t&&t.__esModule?t:{default:t}}var p=new c.default,d=(function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return console.log("props的值是：",n.props.staticContext),n.state={issues:n.props.staticContext.i.metadata.totalCount},n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)})(e,u.default.Component),r(e,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",null,this.state.issues))}}])}(),function(){return u.default.createElement("p",null,"Pagee Not Found")});p.get("*",function(t,e){console.log("服务器启用成功"),console.log("http://127.0.0.1:3000/api"+t.url),fetch("http://127.0.0.1:3000/api"+t.url).then(function(t){return t.json()}).then(function(n){console.log("从服务器返回的数据：",n);var r={i:n},c=a.default.renderToString(u.default.createElement(l.StaticRouter,{location:t.url,context:r},u.default.createElement(i.Switch,null,u.default.createElement(i.Route,o({exact:!0,path:"/issues",component:s.default},{a:123})),u.default.createElement(i.Route,{component:d}))));e.write('\n    <html>\n    <div id="app">'+c+'</div>\n    <body>\n    <script src="/vendor.js"><\/script>\n    <script src="/app.js"><\/script>\n    </body>\n    </html>\n  '),e.end()}).catch(function(t){console.log(t)})}),e.default=p}};
//# sourceMappingURL=0.e32ba29b73a53fb0d1b6.hot-update.js.map