(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){e.exports=t.p+"static/media/astronaut.5bd53660.svg"},112:function(e){e.exports={"app.search.placeholder":"Benutzername suchen","app.description.title":"\xdcberpr\xfcfen Sie die Benutzername-Verf\xfcgbarkeit w\xe4hrend der Eingabe","app.description.body":"{appName} pr\xfcft f\xfcr Sie mehr als 100 Social-Media-Sites. Die Ergebnisse werden hier w\xe4hrend der Eingabe angezeigt!","app.contribute":"Fork auf GitHub","card.available":"Verf\xfcgbar","card.taken":"Genommen"}},113:function(e){e.exports={"app.search.placeholder":"Search username","app.description.title":"Check username availability as you type","app.description.body":"{appName} will check more than 100 social media sites for you. Results will appear here as you type!","app.contribute":"Fork on GitHub","card.available":"Available","card.taken":"Taken"}},114:function(e){e.exports={"app.search.placeholder":"Kullan\u0131c\u0131 ad\u0131 ara","app.description.title":"Kullan\u0131c\u0131 ad\u0131n\u0131z\u0131n kullan\u0131labilirli\u011fini kontrol edin!","app.description.body":"{appName} 100'den fazla sosyal medya sitesini sizin i\xe7in tarar ve sonu\xe7lar\u0131 an\u0131nda ekrana getirir.","app.contribute":"GitHub'ta forkla","card.available":"Uygun","card.taken":"Al\u0131nm\u0131\u015f"}},118:function(e,a,t){e.exports=t(209)},123:function(e,a,t){},131:function(e,a){},137:function(e,a){},142:function(e,a,t){},188:function(e,a,t){},203:function(e,a,t){},204:function(e,a,t){},208:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),i=t.n(l),c=(t(123),t(17)),s=t(18),o=t(20),u=t(19),p=t(21),m=t(58),d=t(96),h=t(11),b=t(211),f=t(12),E=(t(142),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).onChange=function(e){var a=e.target.value.replace(/[^a-zA-Z0-9-_.]/g,"");a!==t.state.input&&t.setState({input:a},function(){""!==a?t.props.onSearch(a):t.props.onEmpty()})},t.state={input:""},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"header"},r.a.createElement(h.a,{type:"thunderbolt",theme:"filled"}),r.a.createElement("h1",null,"Instant Username Search")),r.a.createElement(f.a,{id:"app.search.placeholder",defaultMessage:"Search username"},function(a){return r.a.createElement(b.a,{placeholder:a,size:"large",allowClear:!0,value:e.state.input,onChange:e.onChange})}))}}]),a}(n.Component)),v=t(210),g=(t(188),v.a.Meta),y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.props.loading?r.a.createElement("div",{className:"loading card"},r.a.createElement(v.a,{hoverable:!0,loading:!0})):(this.props.result.available?(e="available",a=r.a.createElement(f.a,{id:"card.available",defaultMessage:"Available"})):(e="taken",a=r.a.createElement(f.a,{id:"card.taken",defaultMessage:"Taken"})),r.a.createElement("div",{className:"card "+e},r.a.createElement("a",{href:this.props.result.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{hoverable:!0},r.a.createElement(g,{title:this.props.result.service,description:a})))));var e,a}}]),a}(n.Component),k=(t(203),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=[];if(!0===this.props.loading)for(var a=0;a<12;a++)e.push(r.a.createElement(y,{key:a,loading:!0}));else{e=this.props.results.map(function(e,a){return null!=e.message?null:r.a.createElement(y,{key:a,result:e})});for(;e.length<12;)e.push(r.a.createElement(y,{key:e.length+0,loading:!0}))}return r.a.createElement("div",{className:"results"},e)}}]),a}(n.Component)),j=t(44),O=(t(204),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"pull-left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE"},"\xa9 "+(new Date).getFullYear()+" GPL 3.0")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/umutcanbolat/instant-username-search/"},r.a.createElement(f.a,{id:"app.contribute",defaultMessage:"Fork on GitHub"}))))),r.a.createElement("div",{className:"pull-right"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(j.b,{to:"/en"},"English")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/de"},"Deutsch")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/tr"},"T\xfcrk\xe7e")))))}}]),a}(n.Component)),w=t(108),N=t.n(w),S=(t(207),t(208),t(109)),C=t.n(S),A=t(110),M=t.n(A),z=t(111),R=t.n(z),U=t(112),D=t(113),G=t(114);window.apiUrl="https://instant-username-search-api.herokuapp.com/";var x=window.apiUrl+"check";Object(f.c)([].concat(Object(m.a)(C.a),Object(m.a)(M.a),Object(m.a)(R.a)));var Q,W,q={de:U,en:D,tr:G},B=navigator.language.split(/[-_]/)[0],F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).componentDidMount=function(){fetch(window.apiUrl+"services/getAll").then(function(e){return e.json()}).then(function(e){t.setState({sites:e})}).catch(function(e){console.log("error while fetching services list"+e.message)})},t.componentWillReceiveProps=function(e){var a=e.match.params.lang;a&&(B=a)},t.componentWillMount=function(){var e=t.props.match.params.lang;e&&(B=e)},t.componentWillUnmount=function(){t.cancelAllRequests()},t.search=function(e){if(t.state.isQueried){Q=new AbortController,W=Q.signal;for(var a=0;a<t.state.sites.length;a++){var n=t.state.sites[a].endpoint.replace("{username}",e);fetch(x+n,{signal:W}).then(function(e){return e.json()}).then(function(e){var a=[].concat(t.state.results);a.push(e),t.setState({results:a})}).catch(function(e){})}}},t.debouncedSearch=Object(d.debounce)(t.search,800),t.inputChanged=function(e){t.setState({isQueried:!0}),t.cancelAllRequests(),t.setState({results:[]}),t.debouncedSearch(e)},t.inputEmptied=function(){t.cancelAllRequests(),t.setState({isQueried:!1})},t.cancelAllRequests=function(){void 0!==Q&&Q.abort()},t.state={sites:[],results:[],isQueried:!1},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a=r.a.createElement("div",{className:"landing"},r.a.createElement("img",{alt:"astronaut",className:"astronaut",src:N.a}),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,r.a.createElement(f.a,{id:"app.description.title",defaultMessage:"Check username availability as you type",description:"Description title on main page"})),r.a.createElement("p",null,r.a.createElement(f.a,{id:"app.description.body",defaultMessage:"{appName} will check more than 100 social media sites for you. Results will appear here as you type!",description:"Description body on main page",values:{appName:"Instant Username Search"}}))));return e=this.state.isQueried?0===this.state.results.length?r.a.createElement(k,{loading:!0}):r.a.createElement(k,{results:this.state.results}):a,r.a.createElement(f.b,{locale:B,messages:q[B]},r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container",id:"jumbotron"},r.a.createElement(E,{onSearch:this.inputChanged,onEmpty:this.inputEmptied}))),r.a.createElement("div",{className:"container",id:"content"},e),r.a.createElement("div",{id:"footer"},r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},r.a.createElement(O,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=t(34);i.a.render(r.a.createElement(j.a,null,r.a.createElement(H.a,{path:"/:lang?",component:F})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.dcc6d481.chunk.js.map