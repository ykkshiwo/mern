exports.id=0,exports.modules={12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=s(n(2)),a=s(n(13)),l=n(14),c=s(n(4)),i=n(3),f=s(n(15));function s(e){return e&&e.__esModule?e:{default:e}}var p=new c.default,d=(function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log("props的值是：",n.props.staticContext),n.state={issues:n.props.staticContext.i.metadata.totalCount},n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,u.default.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",null,this.state.issues))}}])}(),function(){return u.default.createElement("p",null,"Pagee Not Found")});p.get("*",function(e,t){console.log("服务器启用成功"),console.log("http://127.0.0.1:3000/api"+e.url),fetch("http://127.0.0.1:3000/api"+e.url).then(function(e){return e.json()}).then(function(n){console.log("从服务器返回的数据：",n);var r={i:n},c=a.default.renderToString(u.default.createElement(l.StaticRouter,{location:e.url,context:r},u.default.createElement(i.Switch,null,u.default.createElement(i.Route,o({exact:!0,path:"/issues",component:f.default},{a:123})),u.default.createElement(i.Route,{component:d}))));t.write('\n    <!doctype html>\n    <div id="app">'+c+"</div>\n  "),t.end()}).catch(function(e){console.log("error in fetch ```")})}),t.default=p}};
//# sourceMappingURL=0.121c03dccd10d727dd14.hot-update.js.map