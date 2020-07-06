(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{22:function(e,t,a){},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),u=a.n(c),s=(a(32),a(22),a(2)),l=a.n(s),o=a(11),i=a(5),m=a(6),h=a(8),p=a(7),d=a(9),f=a(14),v=function(e){var t=e.color;return r.a.createElement("button",{style:{border:"1px solid ".concat(t)},className:"infoButton"},"Detailed Info")};var b=function(){return function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}()},E=function(e){var t=e.userInfo,a=t.login,n=t.avatar_url,c=b(),u="/users/".concat(a);return r.a.createElement("li",{style:{background:"linear-gradient(180deg, ".concat(c," 33%, white 55%)"),border:"1px solid ".concat(c)}},r.a.createElement("img",{src:n,alt:n}),r.a.createElement("p",null,a),r.a.createElement(f.b,{to:u},r.a.createElement(v,{color:c})))};function g(){return r.a.createElement("div",null,"Loading...")}var j={users:[],userName:"",isLoading:!1,errorText:""},x=r.a.createContext({contextState:j});function O(){return r.a.createElement(x.Consumer,null,(function(e){var t=e.errorText;return r.a.createElement("div",{className:"error"},"Error: ",t)}))}var k=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x.Consumer,null,(function(t){t.users,t.userName;var a=t.isLoading,n=t.errorText;return r.a.createElement("div",null,r.a.createElement("div",{className:"loading"},a&&r.a.createElement(g,null),n&&r.a.createElement(O,{error:n})),r.a.createElement("ul",{className:"user-list"},e.props.data.users.map((function(e){return r.a.createElement(E,{userInfo:e,key:e.id})}))))}))}}]),t}(n.Component),y=a(16),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},(function(){return t.props.updateData(t.state.value)}))}},{key:"render",value:function(){return r.a.createElement("input",{className:"user-search",type:"text",placeholder:"Search user...",value:this.state.value,onChange:this.handleChange})}}]),t}(r.a.Component),N="https://api.github.com/search/users",C="OlkaA";function S(e){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,fetch("".concat(N,"?q=").concat(C));case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(N,"?q=").concat(t));case 8:a=e.sent;case 9:if(200!==a.status){e.next=15;break}return e.next=12,a.json();case 12:return e.abrupt("return",e.sent);case 15:return e.abrupt("return",a.statusText);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).updateData=function(e){a.setState({userName:e,users:[],errorText:""},(function(){return a.getFetchData()}))},a.state={users:j.users,userName:j.userName,isLoading:j.isLoading,errorText:j.errorText},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFetchData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFetchData",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,S(this.state.userName);case 3:t=e.sent,a="string"===typeof t?t:null,n=t.items||[],this.setState({users:n,isLoading:!1,errorText:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,a=e.userName,n=e.isLoading,c=e.errorText;return r.a.createElement(x.Provider,{value:{users:t,userName:a,isLoading:n,errorText:c}},r.a.createElement("div",{className:"App"},r.a.createElement(f.b,{to:"/about",className:"about"},"About"),r.a.createElement("h1",null,"GitHub Users Search"),r.a.createElement(w,{updateData:this.updateData}),r.a.createElement(k,{data:this.state})))}}]),t}(r.a.Component),M=a(20),T=a.n(M),_=(a(40),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.login,e.next=3,fetch("https://api.github.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({user:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=e.avatar_url,a=e.name,n=e.bio,c=e.location,u=e.blog,s=e.followers,l=e.created_at,o=e.html_url,i=e.updated_at,m=e.public_repos,h="".concat(T()(l).format("MMM Do YY")," - ").concat(T()(i).format("MMM Do YY"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile"},r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:t}),r.a.createElement("div",null,a&&r.a.createElement("div",null,a),n&&r.a.createElement("div",{className:"bio"},n))),r.a.createElement("div",null,c&&r.a.createElement("div",null,"Location: ",c),u&&r.a.createElement("div",null,"Portfolio/Blog:"," ",r.a.createElement("a",{href:u,target:"_blank"},u))),r.a.createElement("div",{className:"card"},l&&i&&r.a.createElement("div",null," ",h),m&&r.a.createElement("div",null,"Public repositories: ",m),s&&r.a.createElement("div",null,"Followers: ",s),o&&r.a.createElement("a",{href:o,target:"_blank"},"Go to github"))))}}]),t}(r.a.Component)),A=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"align-center"},r.a.createElement("h1",null,"Github"),r.a.createElement("h2",null,"is how people build software."),r.a.createElement("h4",null,"At this project were used technologies"),r.a.createElement("h4",null,"and instruments such as"),r.a.createElement("h4",null,"React, SCSS, Github, JS, HTML, CSS3, Visual Code, brain."),r.a.createElement("p",null,"Creator: Olha Afanasieva")))}}]),t}(n.Component),F=a(12);var B=function(){return r.a.createElement(f.a,null,r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(F.a,{exact:!0,path:"/users/:login",render:function(e){var t=e.match;return r.a.createElement(_,{login:t.params.login})}}),r.a.createElement(F.a,{exact:!0,path:"/about"},r.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.59650c6a.chunk.js.map