exports.id=0,exports.modules={15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=i(o(16)),l=i(o(2));o(17);var a=o(3),r=o(5);function i(e){return e&&e.__esModule?e:{default:e}}var c=o(6),u=function(e){return l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement(a.Link,{to:"/issues/"+e.issue._id},e.issue._id.substr(-4))),l.default.createElement("td",null,e.issue.status),l.default.createElement("td",null,e.issue.owner),l.default.createElement("td",null,e.issue.created.toDateString()),l.default.createElement("td",null,e.issue.effort),l.default.createElement("td",null,e.issue.completionDate?e.issue.completionDate.toDateString():""),l.default.createElement("td",null,e.issue.title),l.default.createElement("td",null,l.default.createElement("span",{onClick:function(){e.deleteIssue(e.issue._id)},className:"glyphicon glyphicon-trash"})))};function d(e){console.log("问题渲染的数据： ",this.state.issues);var t=e.issues.map(function(t){return l.default.createElement(u,{key:t._id,issue:t,deleteIssue:e.deleteIssue})});return l.default.createElement(r.Table,{condensed:!0,hover:!0,responsive:!0,bordered:!0},l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Id"),l.default.createElement("th",null,"Status"),l.default.createElement("th",null,"Owner"),l.default.createElement("th",null,"Created"),l.default.createElement("th",null,"Effort"),l.default.createElement("th",null,"Completion Date"),l.default.createElement("th",null,"Title"),l.default.createElement("th",null))),l.default.createElement("tbody",null,t))}var f=function(e){function t(e,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return console.log("context的值是：",n.props.staticContext),console.log("渲染的数据的值是：",n.props.staticContext.i.records),n.state={issues:n.props.staticContext.i.records},n.setFilter=n.setFilter.bind(n),n.selectPage=n.selectPage.bind(n),n.deleteIssue=n.deleteIssue.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),n(t,[{key:"selectPage",value:function(e){var t=Object.assign(this.props.location.query,{_page:e});this.props.router.push({pathname:this.props.location.pathname,query:t})}},{key:"deleteIssue",value:function(e){var t=this;console.log("user want to delelte me```"),fetch("/api/issues/"+e,{method:"DELETE"}).then(function(e){console.log("the response data is: ",e),e.ok?(console.log("start loaddata```"),t.loadData(t.props.location.search)):t.props.showError("Failed to delete issue")})}},{key:"componentDidMount",value:function(){console.log("开始执行请求函数"),this.loadData(this.props.location.search)}},{key:"componentDidUpdate",value:function(e,t){var o=e.location.search,n=this.props.location.search;console.log("以前的数据是: ",o),console.log("现在的数据是: ",n),o!==n&&(console.log("the search is: ",this.props.location.search),this.loadData(this.props.location.search))}},{key:"setFilter",value:function(e){console.log("this.props.history is 1: ",this.props.history),this.props.history.replace("/issues?"+c.stringify(e)),console.log("url即将替换为：","/issues?"+c.stringify(e)),console.log("this.props.history is 2: ",this.props.history)}},{key:"loadData",value:function(e){var t=this;console.log("开始请求原始数据"),console.log(this.props.location),console.log("qqqqqq: ",e),fetch("/api/issues"+e).then(function(e){console.log("原始数据请求成功: ",e),e.ok?(console.log("返回的response数据是： ",e),e.json().then(function(e){console.log("请求的数据调回: ",e),e.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),console.log("最后需要渲染的数据数据:",e.records),t.setState({issues:e.records})})):e.json().then(function(e){alert("Failed")})}).catch(function(e){alert("Error")})}},{key:"createIssue",value:function(e){var t=this;console.log("触发post请求"),fetch("/api/issues",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){console.log("here 1: "+e),e.created=new Date(e.created),console.log(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var o=t.state.issues.concat(e);console.log(o),t.setState({issues:o})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("h1",null,"This is ykk's place."),l.default.createElement(r.Panel,{header:"Filter"},l.default.createElement(s.default,{setFilter:this.setFilter,choosePars:this.choosePars,initFilter:this.props.location.search})),l.default.createElement(d,{issues:this.state.issues,deleteIssue:this.deleteIssue}),l.default.createElement("hr",null))}}]),t}();t.default=f}};
//# sourceMappingURL=0.14d924b8e056fa080fc1.hot-update.js.map