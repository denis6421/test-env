(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{376:function(e,n,t){e.exports=t(867)},385:function(e,n,t){"use strict";t.r(n),t.d(n,"ENV",(function(){return r}));var r={}},386:function(e,n,t){"use strict";t.r(n),t.d(n,"ENV",(function(){return r}));var r={}},387:function(e){e.exports=JSON.parse('{"loginScreen":{"emailAddress":"Email Address","yourEmail":"Your Email","neverShare":"We\'ll never share your email with anyone else","password":"Password","login":"Login"},"homeScreen":{"welcome":"Welcome home"},"errors":{"general":"Oops, an error has occured"}}')},388:function(e){e.exports=JSON.parse('{"loginScreen":{"emailAddress":"Le Email Address","yourEmail":"Le Your Email","neverShare":"Le We\'ll never share your email with anyone else","password":"Le Password","login":"Le Login"},"homeScreen":{"welcome":"Le Welcome home"},"errors":{"general":"Le Oops, an error has occured"}}')},389:function(e,n,t){},419:function(e,n){},423:function(e,n){},425:function(e,n){},430:function(e,n){},454:function(e,n){},456:function(e,n){},465:function(e,n){},467:function(e,n){},477:function(e,n){},479:function(e,n){},589:function(e,n){},591:function(e,n){},596:function(e,n){},598:function(e,n){},605:function(e,n){},607:function(e,n){},618:function(e,n){},621:function(e,n){},637:function(e,n){},640:function(e,n){},664:function(e,n){},671:function(e,n){},725:function(e,n){},749:function(e,n){},867:function(e,n,t){"use strict";t.r(n);var r=t(3),a=t.n(r),c=t(145),o=t.n(c),i=t(59),u=t(204),s=t(873),l=t(358),d=t(13),f=t.n(d),v=!f.a.env.NODE_ENV||"development"===f.a.env.NODE_ENV;function p(){return v}p()?t(385):t(386);var b={en:{translation:t(387)},fr:{translation:t(388)}};u.a.use(s.a).use(l.a).init({resources:b,supportedLngs:["en","fr"],fallbackLng:"en",keySeparator:".",interpolation:{escapeValue:!1},debug:p()});u.a,t(389),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(64),m=Object(h.b)({name:"auth",initialState:{value:0,loggedIn:!1},reducers:{login:function(e){e.loggedIn=!0},logout:function(e){e.loggedIn=!1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}}}),w=m.actions,k=(w.login,w.logout,w.decrement,w.incrementByAmount,m.reducer),g=t(0),y=t.n(g),E=t(4),x=(t(362),{address:void 0,provider:null,balance:void 0}),O=Object(h.b)({name:"wallet",initialState:x,reducers:{setAddress:function(e,n){e.address=n.payload},setProvider:function(e,n){e.provider=n.payload},onConnect:function(e,n){var t=n.payload,r=t.provider,a=t.address,c=t.balance;e.provider=r,e.address=a,e.balance=c},onDisconnect:function(e){e.provider=null,e.address=void 0,e.balance=void 0},setData:function(e,n){e.data=n.payload},setBalance:function(e,n){e.balance=n.payload}}}),j=O.actions,B=(j.setAddress,j.setProvider,j.onConnect),L=j.onDisconnect,C=(j.setData,j.setBalance,O.reducer),S=t(6),D=t(10),A=t(119),W=t.n(A),I=new(function(){function e(){Object(S.a)(this,e),this.web3=void 0,this.provider=void 0}return Object(D.a)(e,[{key:"createDefaultWeb3",value:function(){try{if(window.ethereum)this.web3=new W.a(window.ethereum),this.provider=window.ethereum;else{var e=new W.a.providers.HttpProvider("9a7b1e845d3c454e92f9b759a07fe314");this.web3=new W.a(e),this.provider=e}}catch(n){console.log(n)}}},{key:"setWeb3",value:function(e){this.provider=e,this.web3=new W.a(e)}},{key:"getBalance",value:function(){var e=Object(E.a)(y.a.mark((function e(n){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&this.web3){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.web3.eth.getBalance(n);case 5:return t=e.sent,e.abrupt("return",this.web3.utils.fromWei(t));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",void 0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(n){return e.apply(this,arguments)}}()},{key:"getAddress",value:function(){var e=Object(E.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.web3){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.web3.eth.getAccounts();case 5:return n=e.sent,e.abrupt("return",n[0]);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",void 0);case 12:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"sign",value:function(){var e=Object(E.a)(y.a.mark((function e(n,t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&this.web3){e.next=2;break}return e.abrupt("return");case 2:return e.abrupt("return",this.web3.eth.personal.sign(n||"data",t,"").then((function(e){return e})).catch((function(){return console.log("error"),null})));case 3:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"getLatestBlock",value:function(){var e=Object(E.a)(y.a.mark((function e(){var n,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(n=this.web3)||void 0===n?void 0:n.eth.getBlock(this.web3.eth.defaultBlock);case 3:return t=e.sent,e.abrupt("return",null===t||void 0===t?void 0:t.number);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),N={latestBlock:0,interval:void 0},P=Object(h.b)({name:"block",initialState:N,reducers:{setLatestBlock:function(e,n){e.latestBlock=n.payload},setDataInterval:function(e,n){e.interval=n.payload},clearDataInterval:function(e,n){clearInterval(e.interval),e.interval=n.payload}}}),V=P.actions,J=V.setLatestBlock,Y=V.setDataInterval,_=V.clearDataInterval,z=P.reducer,H=Object(h.a)({reducer:{auth:k,wallet:C,block:z},middleware:function(e){return e({serializableCheck:!1})}}),M=t(373),$=t(364),q=t.n($),F={walletconnect:{package:t(372).a,options:{infuraId:"9a7b1e845d3c454e92f9b759a07fe314"}}},G=new q.a({network:"mainnet",cacheProvider:!0,providerOptions:F});var K=function(){var e=Object(i.c)((function(e){return e.wallet})),n=e.address,t=e.provider,a=e.balance,c=Object(i.b)(),o=Object(r.useCallback)(Object(E.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.clearCachedProvider();case 3:if(!(null===(n=I.provider)||void 0===n?void 0:n.disconnect)||"function"!==typeof I.provider.disconnect){e.next=6;break}return e.next=6,I.provider.disconnect();case 6:c(L()),I.createDefaultWeb3(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[c]);return{address:n,connect:Object(r.useCallback)(Object(E.a)(y.a.mark((function e(){var n,t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.connect();case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return");case 6:return I.setWeb3(n),e.next=9,I.getAddress();case 9:return t=e.sent,e.next=12,I.getBalance(t);case 12:r=e.sent,c(B({provider:n,address:t,balance:r})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[c]),disconnect:o,provider:t,balance:a}};var Q=function(){return{latestBlock:Object(i.c)((function(e){return e.block})).latestBlock}};var R=function(){var e=K(),n=e.balance,t=e.address,r=Q().latestBlock;return a.a.createElement("div",null,a.a.createElement("p",null,"Latest block: ",r),a.a.createElement("p",null,"Balance: ",n),a.a.createElement("button",{type:"button",onClick:function(){return null===I||void 0===I?void 0:I.sign("some data",t)}},"Sign"))},T=function(){var e=K(),n=e.address,t=e.connect,r=e.disconnect,c=Object(i.b)();return a.a.createElement("div",{className:"App"},a.a.createElement(R,null),a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){c(_(void 0))}},"Stop interval"),a.a.createElement("button",{type:"button",onClick:function(){c((function(e){var n=setInterval(Object(E.a)(y.a.mark((function n(){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("interval"),n.next=3,I.getLatestBlock();case 3:t=n.sent,e(J(t||0));case 5:case"end":return n.stop()}}),n)}))),1e3);e(Y(n))}))}},"Start interval"),a.a.createElement("p",null,n),!n&&a.a.createElement("button",{type:"button",onClick:t},"Connect"),n&&a.a.createElement("button",{type:"button",onClick:r},"Disconnect")))};var U=function(){var e=K(),n=e.connect,t=e.disconnect,a=e.provider;Object(r.useEffect)((function(){(function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G.cachedProvider){e.next=5;break}return e.next=3,n();case 3:e.next=6;break;case 5:I.createDefaultWeb3();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){if(null===a||void 0===a?void 0:a.on){var e=function(){window.location.reload()},n=function(e){window.location.reload()},r=function(e){t()};return a.on("accountsChanged",e),a.on("chainChanged",n),a.on("disconnect",r),function(){a.removeListener&&(a.removeListener("accountsChanged",e),a.removeListener("chainChanged",n),a.removeListener("disconnect",r))}}}),[a,t])};var X=function(){return U(),a.a.createElement(M.a,null,a.a.createElement(T,null))};o.a.render(a.a.createElement(i.a,{store:H},a.a.createElement(a.a.StrictMode,null,a.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[376,1,2]]]);
//# sourceMappingURL=main.4d1c9967.chunk.js.map