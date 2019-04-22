!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("mongodb")},function(e,t,n){"use strict";var o,r=n(4),s=(o=r)&&o.__esModule?o:{default:o};var i=n(1),u=n(9),a=(n(10),n(2).MongoClient),c=(n(11),n(2)),l=n(12),f=i();f.use(i.static("../statics")),f.use(i.static("../node_modules/bootstrap/dist/css/")),f.use(u.json()),f.get("/api/issues",function(e,t){var n={};if(e.query.status&&(n.status=e.query.status),(e.query.effort_lte||e.query.effort_gte)&&(n.effort={}),e.query.effort_lte&&(n.effort.$lte=parseInt(e.query.effort_lte,10)),e.query.effort_gte&&(n.effort.$gte=parseInt(e.query.effort_gte,10)),e.query.search&&(n.$text={$search:e.query.search}),void 0===e.query._summary){var o=e.query._offset?parseInt(e.query._offset,10):0,r=e.query._limit?parseInt(e.query._limit,10):20;r>50&&(r=50);var s=d.collection("issues").find(n).sort({_id:1}).skip(o).limit(r),i=void 0;s.count(!1).then(function(e){return i=e,s.toArray()}).then(function(e){console.log("查询出的数据： ",e),t.json({metadata:{totalCount:i},records:e})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}else d.collection("issues").aggregate([{$match:n},{$group:{_id:{owner:"$owner",status:"$status"},count:{$sum:1}}}]).toArray().then(function(e){var n={};e.forEach(function(e){n[e._id.owner]||(n[e._id.owner]={}),n[e._id.owner][e._id.status]=e.count}),t.json(n)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),f.get("/api/issues/:id",function(e,t){var n=void 0;try{n=c.ObjectId(e.params.id)}catch(e){t.status(422).json({message:"Invalid issue ID : "+e})}d.collection("issues").find({_id:n}).limit(1).next().then(function(e){e?t.json(e):t.status(404).json({message:"No such issue: "+n})}).catch(function(e){console.log(e),t.status(500).json({message:"Invalid server: "+e})})}),f.post("/api/issues",function(e,t){var n=e.body;n.created=new Date,n.status||(n.status="New"),d.collection("issues").insertOne(n).then(function(e){return d.collection("issues").find({_id:e.insertedId}).limit(1).next()}).then(function(e){console.log("添加的数据是： ",e),t.json(e)}).catch(function(e){console.log(e)})}),f.put("/api/issues/:id",function(e,t){var n=void 0;try{n=c.ObjectId(e.params.id)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}var o=e.body;delete o._id;var r=l.validateIssue(o);r?t.status(422).json({message:"Invalid request: "+r}):(console.log("Update immed..."),console.log(l.convertIssue(o)),d.collection("issues").update({_id:n},l.convertIssue(o)).then(function(e){return d.collection("issues").find({_id:n}).limit(1).next()}).then(function(e){console.log("保存的东西： ",e),t.json(e)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})}))}),f.delete("/api/issues/:id",function(e,t){console.log("server will delete..."),console.log("delete id is: ",e.params.id);var n=void 0;try{n=c.ObjectId(e.params.id),console.log("now delete data...",n)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}d.collection("issues").deleteOne({_id:n}).then(function(e){1===e.result.n?t.json({status:"OK"}):t.json({status:"Warning: object not found"})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),f.use("/",s.default);var d=void 0;a.connect("mongodb://127.0.0.1:27017/").then(function(e){d=e.db("issuetracker"),f.listen(3e3,function(){console.log("App started on port 3000")})}).catch(function(e){console.log("ERROR:",e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(0)),r=n(5),s=(n(6),a(n(1))),i=a(n(7)),u=a(n(8));function a(e){return e&&e.__esModule?e:{default:e}}var c=new s.default;c.get("*",function(e,t){var n={addressee:"Unisd3333333"},s=(0,r.renderToString)(o.default.createElement(u.default,n));t.send((0,i.default)(s,n))}),t.default=c},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return'<!DOCTYPE HTML>\n  <html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Pro MERN Stack</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="/bootstrap.min.css" >\n    <link rel="stylesheet" href="/react-select/react-select.css" >\n    <style>\n      .panel-title a {display: block; width: 100%; cursor: pointer; }\n    </style>\n  </head>\n  \n  <body>\n    <div id="contents">'+e+"</div>    \x3c!-- this is where our component will appear --\x3e\n    <script>window.__INITIAL_STATE__ = "+JSON.stringify(t)+';<\/script>\n    <script src="/vendor.js"><\/script>\n    <script src="/app.js"><\/script>\n    <script src="/config.js"><\/script>\n  </body>\n  \n  </html>\n  '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),i=(o=s)&&o.__esModule?o:{default:o};var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=Object.assign({},n.props),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;console.log("你妹啊，你还好吧"),setTimeout(function(){console.log("有反应···"),e.setState({addressee:"Universes"})},3e3)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("h1",null,"Hello ",this.state.addressee,"!"))}}]),t}();t.default=u,u.defaultProps={addressee:""}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("os")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var o={New:!0,Open:!0,Assigned:!0,Fixed:!0,Verified:!0,Closed:!0},r={status:"required",owner:"required",effort:"optional",created:"required",completionDate:"optional",title:"required"};function s(e){var t={};return Object.keys(e).forEach(function(n){r[n]&&(t[n]=e[n])}),t}e.exports={convertIssue:function(e){return e.created&&(e.created=new Date(e.created)),e.completionDate&&(e.completionDate=new Date(e.completionDate)),s(e)},validateIssue:function(e){var t=[];return Object.keys(r).forEach(function(n){"required"!==r[n]||e[n]||t.push("Missing mandatory field: "+n)}),o[e.status]||t.push(e.status+" is not a valid status."),t.length?t.join("; "):null},cleanupIssue:s}}]));
//# sourceMappingURL=app.bundle.js.map