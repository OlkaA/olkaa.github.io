(this.webpackJsonpgithub_user_search=this.webpackJsonpgithub_user_search||[]).push([[0],{12:function(e,t,a){},25:function(e,t,a){e.exports=a(38)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),u=a.n(c),s=a(3),o=a.n(s),l=a(11),i=a(7),m=a(8),h=a(10),p=a(9),f=(a(12),a(14)),d=function(e){var t=e.color;return n.a.createElement("button",{style:{border:"1px solid ".concat(t)},className:"infoButton"},"Detailed Info")};var v=function(){return function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}()},b=function(e){var t=e.userInfo,a=t.login,r=t.avatar_url,c=v(),u="/users/".concat(a);return n.a.createElement("li",{style:{background:"linear-gradient(180deg, ".concat(c," 33%, white 55%)"),border:"1px solid ".concat(c)}},n.a.createElement("img",{src:r,alt:r}),n.a.createElement("p",null,a),n.a.createElement(f.b,{to:u},n.a.createElement(d,{color:c})))};function E(){return n.a.createElement("div",null,"Loading...")}var g={users:[],userName:"",isLoading:!1,errorText:""},x=n.a.createContext({contextState:g});function j(){return n.a.createElement(x.Consumer,null,(function(e){var t=e.errorText;return n.a.createElement("div",{className:"error"},"Error: ",t)}))}var k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(x.Consumer,null,(function(t){t.users,t.userName;var a=t.isLoading,r=t.errorText;return n.a.createElement("div",null,n.a.createElement("div",{className:"loading"},a&&n.a.createElement(E,null),r&&n.a.createElement(j,{error:r})),n.a.createElement("ul",{className:"user-list"},e.props.data.users.map((function(e){return n.a.createElement(b,{userInfo:e,key:e.id})}))))}))}}]),a}(r.Component),y=a(16),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={value:""},r.handleChange=r.handleChange.bind(Object(y.a)(r)),r}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},(function(){return t.props.updateData(t.state.value)}))}},{key:"render",value:function(){return n.a.createElement("input",{className:"user-search",type:"text",placeholder:"Search user...",value:this.state.value,onChange:this.handleChange})}}]),a}(n.a.Component),w="https://api.github.com/search/users";function N(e){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,fetch("".concat(w,"?q=").concat("OlkaA"));case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(w,"?q=").concat(t));case 8:a=e.sent;case 9:if(200!==a.status){e.next=15;break}return e.next=12,a.json();case 12:return e.abrupt("return",e.sent);case 15:return e.abrupt("return",a.statusText);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.github.com/users","/").concat(t));case 2:if(200!==(a=e.sent).status){e.next=9;break}return e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",a.statusText);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).updateData=function(e){r.setState({userName:e,users:[],errorText:""},(function(){return r.getFetchData()}))},r.state={users:g.users,userName:g.userName,isLoading:g.isLoading,errorText:g.errorText},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFetchData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFetchData",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,N(this.state.userName);case 3:t=e.sent,a="string"===typeof t?t:null,r=t.items||[],this.setState({users:r,isLoading:!1,errorText:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,a=e.userName,r=e.isLoading,c=e.errorText;return n.a.createElement(x.Provider,{value:{users:t,userName:a,isLoading:r,errorText:c}},n.a.createElement("div",{className:"app"},n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"/about",className:"about"},"About"),n.a.createElement("h1",null,"GitHub Users Search"),n.a.createElement(O,{updateData:this.updateData}),n.a.createElement(k,{data:this.state}))))}}]),a}(n.a.Component),L=a(20),M=a.n(L),T=(a(37),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:{}},e}return Object(m.a)(a,[{key:"getUserData",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.login,this.setState({isLoading:!0}),e.next=4,S(t);case 4:a=e.sent,this.setState({user:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUserData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=e.avatar_url,a=e.name,r=e.bio,c=e.location,u=e.blog,s=e.followers,o=e.created_at,l=e.html_url,i=e.updated_at,m=e.public_repos,h="".concat(M()(o).format("MMM Do YY")," - ").concat(M()(i).format("MMM Do YY"));return n.a.createElement("div",{className:"app profile"},n.a.createElement("div",null,n.a.createElement("img",{src:t,alt:t}),n.a.createElement("div",null,a&&n.a.createElement("div",null,a),r&&n.a.createElement("div",{className:"bio"},r))),n.a.createElement("div",null,c&&n.a.createElement("div",null,"Location: ",c),u&&n.a.createElement("div",null,"Portfolio/Blog:"," ",n.a.createElement("a",{href:u,target:"_blank"},u))),n.a.createElement("div",{className:"card"},o&&i&&n.a.createElement("div",null," ",h),m&&n.a.createElement("div",null,"Public repositories: ",m),s&&n.a.createElement("div",null,"Followers: ",s),l&&n.a.createElement("a",{href:l,target:"_blank"},"Go to github")))}}]),a}(n.a.Component)),F=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"app align-center"},n.a.createElement("h1",null,"Github"),n.a.createElement("h2",null,"is how people build software."),n.a.createElement("h4",null,"At this project were used technologies"),n.a.createElement("h4",null,"and instruments such as"),n.a.createElement("h4",null,"React, SCSS, Github, JS, HTML, CSS3, Visual Code, brain."),n.a.createElement("p",null,"Creator: Olha Afanasieva")))}}]),a}(r.Component),A=a(1);var B=function(){return n.a.createElement(f.a,{basename:"/projects/github_user_search/build"},n.a.createElement(A.c,null,n.a.createElement(A.a,{exact:!0,path:"/"},n.a.createElement(_,null)),n.a.createElement(A.a,{exact:!0,path:"/users/:login",render:function(e){var t=e.match;return n.a.createElement(T,{login:t.params.login})}}),n.a.createElement(A.a,{exact:!0,path:"/about"},n.a.createElement(F,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.081d9c11.chunk.js.map