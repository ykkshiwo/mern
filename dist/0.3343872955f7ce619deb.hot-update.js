exports.id=0,exports.modules={15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),o=(s(n(16)),s(n(2)));n(17);var r=n(3),a=n(5);function s(e){return e&&e.__esModule?e:{default:e}}n(6);var u=function(e){return o.default.createElement("tr",null,o.default.createElement("td",null,o.default.createElement(r.Link,{to:"/issues/"+e.issue._id},e.issue._id.substr(-4))),o.default.createElement("td",null,e.issue.status),o.default.createElement("td",null,e.issue.owner),o.default.createElement("td",null,e.issue.effort),o.default.createElement("td",null,e.issue.title),o.default.createElement("td",null,o.default.createElement(a.Button,{onClick:console.log("点击按钮有反应")},"test")))};function c(e){var t=e.issues.map(function(t){return o.default.createElement(u,{key:t._id,issue:t,deleteIssue:e.deleteIssue})});return o.default.createElement(a.Table,{condensed:!0,hover:!0,responsive:!0,bordered:!0},o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Id"),o.default.createElement("th",null,"Status"),o.default.createElement("th",null,"Owner"),o.default.createElement("th",null,"Created"),o.default.createElement("th",null,"Effort"),o.default.createElement("th",null,"Completion Date"),o.default.createElement("th",null,"Title"),o.default.createElement("th",null))),o.default.createElement("tbody",null,t))}var i=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return console.log("context的值是：",l.props.staticContext),console.log("渲染的数据的值是：",l.props.staticContext.i.records),l.state={issues:l.props.staticContext.i.records},l.deleteIssue=l.deleteIssue.bind(l),l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),l(t,[{key:"deleteIssue",value:function(e){var t=this;console.log("user want to delelte me```"),fetch("/api/issues/"+e,{method:"DELETE"}).then(function(e){console.log("the response data is: ",e),e.ok?(console.log("start loaddata```"),t.loadData(t.props.location.search)):t.props.showError("Failed to delete issue")})}},{key:"loadData",value:function(e){var t=this;console.log("开始请求原始数据"),console.log(this.props.location),console.log("qqqqqq: ",e),fetch("/api/issues"+e).then(function(e){console.log("原始数据请求成功: ",e),e.ok?(console.log("返回的response数据是： ",e),e.json().then(function(e){console.log("请求的数据调回: ",e),e.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),console.log("最后需要渲染的数据数据:",e.records),t.setState({issues:e.records})})):e.json().then(function(e){alert("Failed")})}).catch(function(e){alert("Error")})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"This is ykk's place."),o.default.createElement(c,{issues:this.state.issues,deleteIssue:this.deleteIssue}),o.default.createElement("hr",null))}}]),t}();t.default=i}};
//# sourceMappingURL=0.3343872955f7ce619deb.hot-update.js.map