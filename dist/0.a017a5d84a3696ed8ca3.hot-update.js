exports.id=0,exports.modules={17:function(e,t,o){"use strict";var n=c(o(18)),r=c(o(19)),s=o(3);function c(e){return e&&e.__esModule?e:{default:e}}n.default.install();var u=o(4),i=void 0,a=void 0;s.MongoClient.connect("mongodb://127.0.0.1:27017/").then(function(e){i=e.db("issuetracker"),a=r.default.createServer(),u.setDb(i),a.on("request",u.app),a.listen(3e3,function(){console.log("App started on port 3000 哦")})}).catch(function(e){console.log("ERROR:",e)}),e.hot.accept(4,function(){a.removeListener("request",u.app),(u=o(4)).setDb(i),a.on("request",u.app)})}};
//# sourceMappingURL=0.a017a5d84a3696ed8ca3.hot-update.js.map