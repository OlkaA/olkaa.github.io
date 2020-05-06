(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,a){},31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),l=(a(36),a(11)),o=a(14),u=a(19),i=a(13),p=a(29),m={expenses:[],total:0},h=Object(i.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EXPENSES":return t.payload;default:return e}}}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,d=Object(i.e)(h,f(Object(i.a)(p.a))),E=a(3),v=a(4),x=a(6),b=a(5),g=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"column align-center"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/expenses"},"Go to all expenses")))}}]),a}(n.Component),y=a(2),C=a.n(y),O=a(10),j=function(e,t){return{type:"FETCH_EXPENSES",payload:{expenses:e,total:t}}},w=function(e){return function(){var t=Object(O.a)(C.a.mark((function t(a,n){var r,c,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 25,r=void 0===e?0:25*e,t.next=4,fetch("/expenses?limit=".concat(25,"&offset=").concat(r));case 4:return c=t.sent,t.next=7,c.json();case 7:s=t.sent,a(j(s.expenses,s.total));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},N=(a(27),a(21)),k=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.merchant,n=N(this.props.data.date).format("L"),c="".concat(this.props.data.amount.value," ").concat(this.props.data.amount.currency),s="".concat(this.props.data.user.first," ").concat(this.props.data.user.last),o=this.props.data.receipts.length||"-",u=this.props.data.comment||"-";return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{"data-title":"Amount"},c),r.a.createElement("td",{"data-title":"Date"},n),r.a.createElement("td",{"data-title":"Merchant"},a),r.a.createElement("td",{"data-title":"User"},s),r.a.createElement("td",{"data-title":"Receipts"},o),r.a.createElement("td",{"data-title":"Comment"},u),r.a.createElement("td",null,r.a.createElement(l.b,{to:{pathname:"/expenses/".concat(t)}}," ","See more"," "))))}}]),a}(n.Component);a(44);var S=function(e){return r.a.createElement("button",{onClick:e.onClick},e.value)},P=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).goToNextPage=function(){if(n.state.currentIndex+1!==n.state.pages){var e=n.state.currentIndex+1;n.setState({currentIndex:e},(function(){return n.props.goToPage(n.state.currentIndex)}))}},n.goToPrevPage=function(){if(0!==n.state.currentIndex){var e=n.state.currentIndex-1;n.setState({currentIndex:e},(function(){return n.props.goToPage(n.state.currentIndex)}))}},n.state={currentIndex:0,pages:0},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.setState({pages:Math.ceil(this.props.numberOfItems/25)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{colSpan:7,className:"pagination"},r.a.createElement(S,{onClick:this.goToPrevPage,value:"<"}),r.a.createElement("span",null,"".concat(this.state.currentIndex+1," of ").concat(this.state.pages)),r.a.createElement(S,{onClick:this.goToNextPage,value:">"})))}}]),a}(n.Component),I=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"list-of-expenses"},r.a.createElement("table",{className:"list"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Merchant ",r.a.createElement(S,{onClick:function(){return e.props.sortList("merchant")},value:"\u2195"})),r.a.createElement("th",null,"User ",r.a.createElement(S,{onClick:function(){return e.props.sortList("user")},value:"\u2195"})),r.a.createElement("th",null,"Receipts"),r.a.createElement("th",null,"Comments"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.props.expenses.map((function(e){return r.a.createElement(k,{key:e.id,data:e})}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,this.props.total?r.a.createElement(P,{numberOfItems:this.props.total,goToPage:function(t){return e.props.goToPage(t)}}):null))))}}]),a}(r.a.Component);a(45);var T=function(e){return r.a.createElement("label",{className:"filter-field"},e.label,":",r.a.createElement("input",{type:e.type,onChange:e.onChange,value:e.value}))},B=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).onsearchByNameChange=function(e){n.setState({searchByName:e.target.value},(function(){return n.props.onFilterChange(n.state)}))},n.onsearchByPlace=function(e){n.setState({searchByPlace:e.target.value},(function(){return n.props.onFilterChange(n.state)}))},n.state={searchByName:"",searchByPlace:""},n}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{type:"text",onChange:this.onsearchByNameChange,value:this.state.searchByName,label:"Search by name"}),r.a.createElement(T,{type:"text",onChange:this.onsearchByPlace,value:this.state.searchByPlace,label:"Search by place"}))}}]),a}(n.Component),F=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filteredArray:[],isSorted:!1},e.onFilterChange=function(t){var a=e.props.data.expenses.filter((function(e){return!(t.searchByName&&!e.user.first.toLowerCase().includes(t.searchByName.toLowerCase())&&!e.user.last.toLowerCase().includes(t.searchByName.toLowerCase()))&&!(t.searchByPlace&&!e.merchant.toLowerCase().includes(t.searchByPlace.toLowerCase()))}));e.setState({filteredArray:a})},e.sortList=function(t){var a;a=e.state.filteredArray.sort((function(a,n){return e.state.isSorted?(e.setState({isSorted:!1}),"user"!==t?a[t].localeCompare(n[t]):a[t].first.localeCompare(n[t].first)):(e.setState({isSorted:!0}),"user"!==t?n[t].localeCompare(a[t]):n[t].first.localeCompare(a[t].first))})),e.setState({filteredArray:a})},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.fetchExpenses()}},{key:"fetchExpenses",value:function(){var e=Object(O.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0===t?0:t,e.next=3,this.props.startFetchExpenses(a);case 3:this.onFilterChange("");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.data.total;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:{pathname:"/"}},"\u2190"),r.a.createElement("h1",null,"List of expenses"),r.a.createElement(B,{onFilterChange:this.onFilterChange}),this.state&&this.state.filteredArray.length>0?r.a.createElement(I,{expenses:this.state.filteredArray,total:t,goToPage:function(t){e.fetchExpenses(t)},sortList:function(t){e.sortList(t)}}):null)}}]),a}(r.a.Component),L=Object(u.b)((function(e,t){return{data:e.data}}),(function(e,t){return{startFetchExpenses:Object(i.b)(w,e)}}))(F),A=function(e){var t=e.userId,a=e.fetchExpense,n=function(){var e=Object(O.a)(C.a.mark((function e(n){var r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n.target.files),console.log(n.target.files[0]),!t){e.next=12;break}return(r=new FormData).append("receipt",n.target.files[0]),e.next=7,fetch("/expenses/".concat(t,"/receipts"),{method:"POST",body:r});case 7:return c=e.sent,a(),e.next=11,c.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("label",null,r.a.createElement("input",{type:"file",name:"file",title:" ",onChange:n}),"Add receipt")},D=function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).onCommentChange=function(e){n.setState({comment:e.target.value})},n.addComment=Object(O.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.comment||!n.props.userId){e.next=9;break}return e.next=3,fetch("/expenses/".concat(n.props.userId),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:n.state.comment})});case 3:return t=e.sent,n.props.fetchExpense(),n.setState({comment:" "}),e.next=8,t.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)}))),n.state={comment:""},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:this.props.placeholder,autoComplete:"off",value:this.state.comment,onChange:this.onCommentChange,onKeyPress:function(t){"Enter"===t.key&&e.addComment()}}),r.a.createElement("button",{className:"add-comment",onClick:this.addComment},this.props.placeholder))}}]),a}(n.Component),M=a(21),_=a.n(M),U=(a(46),function(e){Object(x.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",currentExpense:null},e.fetchExpense=function(){var t=Object(O.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/expenses/".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.setState({currentExpense:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.match.params.id;case 2:t=e.sent,this.setState({id:t}),this.fetchExpense(this.state.id);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,n,c,s,o,u,i=this;return this.state.currentExpense&&Object.entries(this.state.currentExpense).length>0&&(e=this.state.currentExpense.merchant,t=_()(this.state.currentExpense.date).format("L"),a="".concat(this.state.currentExpense.amount.value," ").concat(this.state.currentExpense.amount.currency),n="".concat(this.state.currentExpense.user.first," ").concat(this.state.currentExpense.user.last),c=this.state.currentExpense.user.email,s=this.state.currentExpense.receipts,o=this.state.currentExpense.comment||"-",u=this.state.currentExpense.category||"-"),r.a.createElement("div",{className:"expense-page"},r.a.createElement(l.b,{to:{pathname:"/expenses"}},"\u2190"),r.a.createElement("h1",null,"Expense"),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"Date:"),r.a.createElement("span",null,t)),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"Amount:"),r.a.createElement("span",null,a)),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"Merchant:"),r.a.createElement("span",null,e)),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"User:"),r.a.createElement("span",null,n)),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"User email:"),r.a.createElement("span",null,c)),r.a.createElement("div",{className:"space-between"},r.a.createElement("div",{className:"column"},r.a.createElement("span",null,"Receipts:"),r.a.createElement(A,{userId:this.state.id,fetchExpense:function(){return i.fetchExpense(i.state.id)}})," "),s&&s.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"no-data"},1===s.length?"".concat(s.length," receipt"):"".concat(s.length," receipts"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"no-data"},"There are no receipts."))),r.a.createElement("p",{className:"space-between"},r.a.createElement("span",null,"Category:"),r.a.createElement("span",null,u)),r.a.createElement("div",{className:"space-between"},r.a.createElement("div",{className:"column"},r.a.createElement("span",null,"Comment:"),r.a.createElement(D,{placeholder:"Change comment",userId:this.state.id,fetchExpense:function(){return i.fetchExpense(i.state.id)}})),"-"!==o?r.a.createElement("div",{className:"no-data"},o):r.a.createElement("div",{className:"no-data"},"There are no comment.")))}}]),a}(n.Component)),R=(a(47),function(){return r.a.createElement(u.a,{store:d},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:g}),r.a.createElement(o.a,{exact:!0,path:"/expenses",component:L}),r.a.createElement(o.a,{exact:!0,path:"/expenses/:id",component:U})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.39734ce0.chunk.js.map