!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){function t(e){var t=require("./"+e+"."+o+".hot-update.js");!function(e,t){if(!_[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===g&&x()}(t.id,t.modules)}var n,r=!0,o="b1ccecbec4b293b5bf9c",i={},s=[],c=[];function a(e){var t=D[e];if(!t)return E;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),E(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(t){E[e]=t}}};for(var i in E)Object.prototype.hasOwnProperty.call(E,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&f("prepare"),g++,E.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===d&&(m[e]||O(e),0===g&&0===y&&x())}},r.t=function(e,t){return 1&t&&(e=r(e)),E.t(e,-2&t)},r}function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:I,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:i[e]};return n=void 0,t}var l=[],d="idle";function f(e){d=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,h,v,y=0,g=0,m={},b={},_={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(){try{var e=require("./"+o+".hot-update.json")}catch(e){return Promise.resolve()}return Promise.resolve(e)}().then(function(e){if(!e)return f("idle"),null;b={},m={},_=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return O(0),"prepare"===d&&0===g&&0===y&&x(),t})}function O(e){_[e]?(b[e]=!0,y++,t(e)):m[e]=!0}function x(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return I(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function I(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,c,a,u;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((a=D[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var u=a.parents[c],l=D[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var y={},g=[],m={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var O;u=w(j);var x=!1,I=!1,q=!1,M="";switch((O=h[j]?l(u):{type:"disposed",moduleId:j}).chain&&(M="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+O.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(O),I=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),q=!0;break;default:throw new Error("Unexception type "+O.type)}if(x)return f("abort"),Promise.reject(x);if(I)for(u in m[u]=h[u],p(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(y[u]||(y[u]=[]),p(y[u],O.outdatedDependencies[u]));q&&(p(g,[O.moduleId]),m[u]=b)}var P,H=[];for(r=0;r<g.length;r++)u=g[r],D[u]&&D[u].hot._selfAccepted&&H.push({module:u,errorHandler:D[u].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var k,R,S=g.slice();S.length>0;)if(u=S.pop(),a=D[u]){var A={},T=a.hot._disposeHandlers;for(c=0;c<T.length;c++)(n=T[c])(A);for(i[u]=A,a.hot.active=!1,delete D[u],delete y[u],c=0;c<a.children.length;c++){var C=D[a.children[c]];C&&((P=C.parents.indexOf(u))>=0&&C.parents.splice(P,1))}}for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(a=D[u]))for(R=y[u],c=0;c<R.length;c++)k=R[c],(P=a.children.indexOf(k))>=0&&a.children.splice(P,1);for(u in f("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var U=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(a=D[u])){R=y[u];var $=[];for(r=0;r<R.length;r++)if(k=R[r],n=a.hot._acceptedDependencies[k]){if(-1!==$.indexOf(n))continue;$.push(n)}for(r=0;r<$.length;r++){n=$[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:R[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<H.length;r++){var N=H[r];u=N.module,s=[u];try{E(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(g)}))}var D={};function E(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=s,s=[],c),children:[]};return e[t].call(n.exports,n,n.exports,a(t)),n.l=!0,n.exports}return E.m=e,E.c=D,E.d=function(e,t,n){E.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},E.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.t=function(e,t){if(1&t&&(e=E(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(E.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)E.d(n,r,function(t){return e[t]}.bind(null,r));return n},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E.h=function(){return o},a(5)(E.s=5)}([function(e,t){e.exports=require("mongodb")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setDb=t.app=void 0;var r,o=n(9),i=(r=o)&&r.__esModule?r:{default:r};var s=n(3),c=n(14),a=(n(15),n(0).MongoClient,n(16)),u=n(0),l=n(17),d=s();d.use(s.static("statics")),d.use(s.static("../node_modules/bootstrap/dist/css/")),d.use(c.json()),d.get("/app.js",function(e,t){console.log(a.resolve("static"))}),d.get("/api/issues",function(e,t){var n={};if(e.query.status&&(n.status=e.query.status),(e.query.effort_lte||e.query.effort_gte)&&(n.effort={}),e.query.effort_lte&&(n.effort.$lte=parseInt(e.query.effort_lte,10)),e.query.effort_gte&&(n.effort.$gte=parseInt(e.query.effort_gte,10)),e.query.search&&(n.$text={$search:e.query.search}),void 0===e.query._summary){var r=e.query._offset?parseInt(e.query._offset,10):0,o=e.query._limit?parseInt(e.query._limit,10):20;o>50&&(o=50);var i=f.collection("issues").find(n).sort({_id:1}).skip(r).limit(o),s=void 0;i.count(!1).then(function(e){return s=e,i.toArray()}).then(function(e){console.log("查询出的数据： ",e),t.json({metadata:{totalCount:s},records:e})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}else f.collection("issues").aggregate([{$match:n},{$group:{_id:{owner:"$owner",status:"$status"},count:{$sum:1}}}]).toArray().then(function(e){var n={};e.forEach(function(e){n[e._id.owner]||(n[e._id.owner]={}),n[e._id.owner][e._id.status]=e.count}),t.json(n)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),d.get("/api/issues/:id",function(e,t){var n=void 0;try{n=u.ObjectId(e.params.id)}catch(e){t.status(422).json({message:"Invalid issue ID : "+e})}f.collection("issues").find({_id:n}).limit(1).next().then(function(e){e?t.json(e):t.status(404).json({message:"No such issue: "+n})}).catch(function(e){console.log(e),t.status(500).json({message:"Invalid server: "+e})})}),d.post("/api/issues",function(e,t){var n=e.body;n.created=new Date,n.status||(n.status="New"),f.collection("issues").insertOne(n).then(function(e){return f.collection("issues").find({_id:e.insertedId}).limit(1).next()}).then(function(e){console.log("添加的数据是： ",e),t.json(e)}).catch(function(e){console.log(e)})}),d.put("/api/issues/:id",function(e,t){var n=void 0;try{n=u.ObjectId(e.params.id)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}var r=e.body;delete r._id;var o=l.validateIssue(r);o?t.status(422).json({message:"Invalid request: "+o}):(console.log("Update immed..."),console.log(l.convertIssue(r)),f.collection("issues").update({_id:n},l.convertIssue(r)).then(function(e){return f.collection("issues").find({_id:n}).limit(1).next()}).then(function(e){console.log("保存的东西： ",e),t.json(e)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})}))}),d.delete("/api/issues/:id",function(e,t){console.log("server will delete..."),console.log("delete id is: ",e.params.id);var n=void 0;try{n=u.ObjectId(e.params.id),console.log("now delete data...",n)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}f.collection("issues").deleteOne({_id:n}).then(function(e){1===e.result.n?t.json({status:"OK"}):t.json({status:"Warning: object not found"})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),d.get("/1234",i.default);var f=void 0;t.app=d,t.setDb=function(e){f=e}},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("express")},function(e,t){var n="info";function r(){}function o(e){return"info"===n&&"info"===e||["info","warning"].indexOf(n)>=0&&"warning"===e||["info","warning","error"].indexOf(n)>=0&&"error"===e}function i(e){return function(t,n){o(t)&&e(n)}}e.exports=function(e,t){o(e)&&("info"===e?console.log(t):"warning"===e?console.warn(t):"error"===e&&console.error(t))};var s=console.group||r,c=console.groupCollapsed||r,a=console.groupEnd||r;e.exports.group=i(s),e.exports.groupCollapsed=i(c),e.exports.groupEnd=i(a),e.exports.setLogLevel=function(e){n=e}},function(e,t,n){n(6),e.exports=n(18)},function(e,t,n){"use strict";var r=s(n(7)),o=s(n(8)),i=n(0);function s(e){return e&&e.__esModule?e:{default:e}}r.default.install();var c=n(1),a=void 0,u=void 0;i.MongoClient.connect("mongodb://127.0.0.1:27017/").then(function(e){a=e.db("issuetracker"),u=o.default.createServer(),c.setDb(a),u.on("request",c.app),u.listen(3e3,function(){console.log("App started on port 3000 哦")})}).catch(function(e){console.log("ERROR:",e)}),e.hot.accept(1,function(){u.removeListener("request",c.app),(c=n(1)).setDb(db),u.on("request",c.app)})},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("http")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),o=n(10),i=(n(11),a(n(3))),s=a(n(12)),c=a(n(13));function a(e){return e&&e.__esModule?e:{default:e}}var u=new i.default;u.get("*",function(e,t){var n={addressee:"初始状态tai···"},i=(0,o.renderToString)(r.default.createElement(c.default,n));t.send((0,s.default)(i,n))}),t.default=u},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return'<!DOCTYPE HTML>\n  <html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Pro MERN Stack</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="/bootstrap.min.css" >\n    <link rel="stylesheet" href="/react-select/react-select.css" >\n    <style>\n      .panel-title a {display: block; width: 100%; cursor: pointer; }\n    </style>\n  </head>\n  \n  <body>\n    <div id="contents">'+e+"</div>    \x3c!-- this is where our component will appear --\x3e\n    <script>window.__INTIAL_STATE__ = "+JSON.stringify(t)+';<\/script>\n    <script src="/vendor.js"><\/script>\n    <script src="/app.js"><\/script>\n    <script src="/config.js"><\/script>\n  </body>\n  \n  </html>\n  '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),s=(r=i)&&r.__esModule?r:{default:r};var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=Object.assign({},n.props),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this;console.log("你妹啊，你还好吧"),setTimeout(function(){console.log("有反应···aaa"),e.setState({addressee:"3秒后的状态"})},3e3)}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"Hello ",this.state.addressee,"!"))}}]),t}();t.default=c,c.defaultProps={addressee:""}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var r={New:!0,Open:!0,Assigned:!0,Fixed:!0,Verified:!0,Closed:!0},o={status:"required",owner:"required",effort:"optional",created:"required",completionDate:"optional",title:"required"};function i(e){var t={};return Object.keys(e).forEach(function(n){o[n]&&(t[n]=e[n])}),t}e.exports={convertIssue:function(e){return e.created&&(e.created=new Date(e.created)),e.completionDate&&(e.completionDate=new Date(e.completionDate)),i(e)},validateIssue:function(e){var t=[];return Object.keys(o).forEach(function(n){"required"!==o[n]||e[n]||t.push("Missing mandatory field: "+n)}),r[e.status]||t.push(e.status+" is not a valid status."),t.length?t.join("; "):null},cleanupIssue:i}},function(e,t,n){(function(t){var r=+t.substr(1)||6e5,o=n(4);setInterval(function t(r){"idle"===e.hot.status()&&e.hot.check(!0).then(function(e){e?(n(19)(e,e),t(!0)):r&&o("info","[HMR] Update applied.")}).catch(function(t){var n=e.hot.status();["abort","fail"].indexOf(n)>=0?(o("warning","[HMR] Cannot apply update."),o("warning","[HMR] "+(t.stack||t.message)),o("warning","[HMR] You need to restart the application!")):o("warning","[HMR] Update failed: "+(t.stack||t.message))})},r)}).call(this,"?1000")},function(e,t,n){e.exports=function(e,t){var r=e.filter(function(e){return t&&t.indexOf(e)<0}),o=n(4);(r.length>0&&(o("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),r.forEach(function(e){o("warning","[HMR]  - "+e)})),t&&0!==t.length)?(o("info","[HMR] Updated modules:"),t.forEach(function(e){if("string"==typeof e&&-1!==e.indexOf("!")){var t=e.split("!");o.groupCollapsed("info","[HMR]  - "+t.pop()),o("info","[HMR]  - "+e),o.groupEnd("info")}else o("info","[HMR]  - "+e)}),t.every(function(e){return"number"==typeof e})&&o("info","[HMR] Consider using the NamedModulesPlugin for module names.")):o("info","[HMR] Nothing hot updated.")}}]));
//# sourceMappingURL=app.bundle.js.map