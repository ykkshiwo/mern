exports.id=0,exports.modules=[,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setDb=t.app=void 0;var o,n=s(12),i=(o=n)&&o.__esModule?o:{default:o};var r=s(4),a=s(18),u=(s(19),s(0).MongoClient,s(20)),c=s(0),l=s(21),d=r();d.use(r.static("statics")),d.use(r.static("../node_modules/bootstrap/dist/css/")),d.use(a.json()),d.get("/app.js",function(e,t){console.log(u.resolve("static"))}),d.get("/api/issues",function(e,t){var s={};if(e.query.status&&(s.status=e.query.status),(e.query.effort_lte||e.query.effort_gte)&&(s.effort={}),e.query.effort_lte&&(s.effort.$lte=parseInt(e.query.effort_lte,10)),e.query.effort_gte&&(s.effort.$gte=parseInt(e.query.effort_gte,10)),e.query.search&&(s.$text={$search:e.query.search}),void 0===e.query._summary){var o=e.query._offset?parseInt(e.query._offset,10):0,n=e.query._limit?parseInt(e.query._limit,10):20;n>50&&(n=50);var i=f.collection("issues").find(s).sort({_id:1}).skip(o).limit(n),r=void 0;i.count(!1).then(function(e){return r=e,i.toArray()}).then(function(e){console.log("查询出的数据： ",e),t.json({metadata:{totalCount:r},records:e})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}else f.collection("issues").aggregate([{$match:s},{$group:{_id:{owner:"$owner",status:"$status"},count:{$sum:1}}}]).toArray().then(function(e){var s={};e.forEach(function(e){s[e._id.owner]||(s[e._id.owner]={}),s[e._id.owner][e._id.status]=e.count}),t.json(s)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),d.get("/api/issues/:id",function(e,t){var s=void 0;try{s=c.ObjectId(e.params.id)}catch(e){t.status(422).json({message:"Invalid issue ID : "+e})}f.collection("issues").find({_id:s}).limit(1).next().then(function(e){e?t.json(e):t.status(404).json({message:"No such issue: "+s})}).catch(function(e){console.log(e),t.status(500).json({message:"Invalid server: "+e})})}),d.post("/api/issues",function(e,t){var s=e.body;s.created=new Date,s.status||(s.status="New"),f.collection("issues").insertOne(s).then(function(e){return f.collection("issues").find({_id:e.insertedId}).limit(1).next()}).then(function(e){console.log("添加的数据是： ",e),t.json(e)}).catch(function(e){console.log(e)})}),d.put("/api/issues/:id",function(e,t){var s=void 0;try{s=c.ObjectId(e.params.id)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}var o=e.body;delete o._id;var n=l.validateIssue(o);n?t.status(422).json({message:"Invalid request: "+n}):(console.log("Update immed..."),console.log(l.convertIssue(o)),f.collection("issues").update({_id:s},l.convertIssue(o)).then(function(e){return f.collection("issues").find({_id:s}).limit(1).next()}).then(function(e){console.log("保存的东西： ",e),t.json(e)}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})}))}),d.delete("/api/issues/:id",function(e,t){console.log("server will delete..."),console.log("delete id is: ",e.params.id);var s=void 0;try{s=c.ObjectId(e.params.id),console.log("now delete data...",s)}catch(e){return void t.status(422).json({message:"Invalid issue ID format: "+e})}f.collection("issues").deleteOne({_id:s}).then(function(e){1===e.result.n?t.json({status:"OK"}):t.json({status:"Warning: object not found"})}).catch(function(e){console.log(e),t.status(500).json({message:"Internal Server Error: "+e})})}),d.use("/",i.default);var f=void 0;t.app=d,t.setDb=function(e){f=e}}];
//# sourceMappingURL=0.e94f0e15d70552f945cd.hot-update.js.map