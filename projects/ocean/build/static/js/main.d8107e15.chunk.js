(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/blue-quotes.566d192a.svg"},function(e,t,a){e.exports=a.p+"static/media/smile.e0d65ea3.svg"},function(e,t,a){e.exports=a.p+"static/media/pink-quotes.e4739484.svg"},function(e,t,a){e.exports=a.p+"static/media/cake.86602f00.svg"},,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),s=(a(18),a(19),a(4)),i=a(5),o=a(11),u=a(6),m=a(1),d=a(12),f=(a(20),a(21),a(7)),h=a.n(f),E=a(8),v=a.n(E),p=function(){return c.a.createElement("div",{className:"slide slide-one"},c.a.createElement("div",{className:"quotes"},c.a.createElement("img",{src:h.a,alt:"quotes"}),c.a.createElement("p",{className:"main-text"},"This piece of software is ",c.a.createElement("span",{className:"colored"},"the shit"),", I\u2019ve never tried anything like it.")),c.a.createElement("div",{className:""},c.a.createElement("img",{src:v.a,alt:"smile"}),c.a.createElement("p",{className:"secondary-text"},"Mr. Face"),c.a.createElement("p",{className:"sub-text"},"Karma Guru @ Face Co\u2122")))},x=(a(22),a(9)),g=a.n(x),N=a(10),w=a.n(N),k=function(){return c.a.createElement("div",{className:"slide slide-two"},c.a.createElement("div",{className:"quotes"},c.a.createElement("img",{src:g.a,alt:"quotes"}),c.a.createElement("p",{className:"main-text"},"An experience that makes us feel like we\u2019re covered in maple syrup \u2013"," ",c.a.createElement("span",{className:"colored"},"It\u2019s a good thing"))),c.a.createElement("div",{className:""},c.a.createElement("img",{src:w.a,alt:"cake"}),c.a.createElement("p",{className:"secondary-text"},"The whole team @ ",c.a.createElement("br",null)," The Pancake Collective\u2122")))},S=(a(23),function(){return c.a.createElement("div",{className:"slide slide-three"})}),I=(a(24),function(){return c.a.createElement("div",{className:"slide slide-four"})}),b=(a(25),function(){return c.a.createElement("div",{className:"slide slide-five"})}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).showSlideShow=function(){var e=Object(m.a)(a);setTimeout((function(){var t=e.state.currentIndex;t<e.slides.length-1&&(t++,e.setState({currentIndex:t}),e.showSlideShow())}),2e3)},a.goToNextSlide=function(e){e&&e.preventDefault();var t=a.state.currentIndex;t!==a.slides.length-1&&++t,a.setState({currentIndex:t})},a.goToPrevSlide=function(e){e.preventDefault();var t=a.state.currentIndex;0!==t&&--t,a.setState({currentIndex:t})},a.goToSlide=function(e){a.setState({currentIndex:e})},a.state={currentIndex:0},a.slides=[c.a.createElement(p,null),c.a.createElement(k,null),c.a.createElement(S,null),c.a.createElement(I,null),c.a.createElement(b,null)],a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.showSlideShow()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"wpapper"},c.a.createElement("div",{className:"carousel"},c.a.createElement("ul",{className:"carousel-slides"},this.slides.map((function(t,a){return c.a.createElement("li",{key:a,currentndex:e.state.currentIndex,className:a===e.state.currentIndex?" active":""},t)}))),c.a.createElement("ul",{className:"carousel-pagination"},this.slides.map((function(t,a){return c.a.createElement("li",{onClick:function(){return e.goToSlide(a)},currentindex:e.state.currentIndex,key:a,index:a,className:a===e.state.currentIndex?" active":""})})))),c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",null,c.a.createElement("a",{href:"",onClick:this.goToPrevSlide},"\u2039")),c.a.createElement("li",null,"".concat(this.state.currentIndex+1," of ").concat(this.slides.length)),c.a.createElement("li",null,c.a.createElement("a",{href:"",onClick:this.goToNextSlide},"\u203a")))))}}]),t}(n.Component);var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Slider"),c.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d8107e15.chunk.js.map