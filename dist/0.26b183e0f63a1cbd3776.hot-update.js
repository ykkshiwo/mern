exports.id=0,exports.modules={15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var s=t[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,o,s){return o&&e(t.prototype,o),s&&e(t,s),t}}(),n=(r(o(16)),r(o(2)));o(17);o(3),o(5);function r(e){return e&&e.__esModule?e:{default:e}}var a=o(6);var i=function(e){function t(e,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return console.log("context的值是：",s.props.staticContext),console.log("渲染的数据的值是：",s.props.staticContext.i.records),s.state={issues:s.props.staticContext.i.records},s.setFilter=s.setFilter.bind(s),s.selectPage=s.selectPage.bind(s),s.deleteIssue=s.deleteIssue.bind(s),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),s(t,[{key:"selectPage",value:function(e){var t=Object.assign(this.props.location.query,{_page:e});this.props.router.push({pathname:this.props.location.pathname,query:t})}},{key:"deleteIssue",value:function(e){var t=this;console.log("user want to delelte me```"),fetch("/api/issues/"+e,{method:"DELETE"}).then(function(e){console.log("the response data is: ",e),e.ok?(console.log("start loaddata```"),t.loadData(t.props.location.search)):t.props.showError("Failed to delete issue")})}},{key:"componentDidMount",value:function(){console.log("开始执行请求函数"),console.log(this.state.issues),this.loadData(this.props.location.search)}},{key:"componentDidUpdate",value:function(e,t){var o=e.location.search,s=this.props.location.search;console.log("以前的数据是: ",o),console.log("现在的数据是: ",s),o!==s&&(console.log("the search is: ",this.props.location.search),this.loadData(this.props.location.search))}},{key:"setFilter",value:function(e){console.log("this.props.history is 1: ",this.props.history),this.props.history.replace("/issues?"+a.stringify(e)),console.log("url即将替换为：","/issues?"+a.stringify(e)),console.log("this.props.history is 2: ",this.props.history)}},{key:"loadData",value:function(e){var t=this;console.log("开始请求原始数据"),console.log(this.props.location),console.log("qqqqqq: ",e),fetch("/api/issues"+e).then(function(e){console.log("原始数据请求成功: ",e),e.ok?(console.log("返回的response数据是： ",e),e.json().then(function(e){console.log("请求的数据调回: ",e),e.records.forEach(function(e){e.created=new Date(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate))}),console.log("最后需要渲染的数据数据:",e.records),t.setState({issues:e.records})})):e.json().then(function(e){alert("Failed")})}).catch(function(e){alert("Error")})}},{key:"createIssue",value:function(e){var t=this;console.log("触发post请求"),fetch("/api/issues",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){console.log("here 1: "+e),e.created=new Date(e.created),console.log(e.created),e.completionDate&&(e.completionDate=new Date(e.completionDate));var o=t.state.issues.concat(e);console.log(o),t.setState({issues:o})}).catch(function(e){alert(e.message)})}},{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement("h1",null,"This is ykk's place."))}}]),t}();t.default=i}};
//# sourceMappingURL=0.26b183e0f63a1cbd3776.hot-update.js.map