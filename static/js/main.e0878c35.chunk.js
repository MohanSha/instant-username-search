(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),s=n.n(c),o=(n(96),n(12)),i=n(13),l=n(15),u=n(14),h=n(16),m=n(79),p=n(10),f=n(166),b=(n(97),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.target.value.replace(/[^a-zA-Z0-9-_.]/g,"");t!==n.state.input&&n.setState({input:t},function(){""!==t&&n.props.onSearch(t)})},n.state={input:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"header"},r.a.createElement(p.a,{type:"thunderbolt",theme:"filled"}),r.a.createElement("h1",null,"Instant Username Search")),r.a.createElement(f.a,{placeholder:"Search username",size:"large",allowClear:!0,value:this.state.input,onChange:this.onChange}))}}]),t}(a.Component)),d=n(165),v=(n(145),d.a.Meta),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.result.available?"Available":"Taken";return r.a.createElement("div",{className:"card "+e.toLowerCase()},r.a.createElement("a",{href:this.props.result.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{hoverable:!0,loading:!1},r.a.createElement(v,{title:this.props.result.service,description:e}))))}}]),t}(a.Component),E=(n(160),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.results.map(function(e,t){return null!=e.message?null:r.a.createElement(j,{key:t,result:e})});return r.a.createElement("div",{className:"results"},e)}}]),t}(a.Component)),g=(n(161),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"pull-left"},"\xa9 "+(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE"},"GPL 3.0")),r.a.createElement("div",{className:"pull-right"},r.a.createElement("a",{href:"https://github.com/umutcanbolat/instant-username-search/"},"Contribute on Github")))}}]),t}(a.Component));n(162),n(163);window.apiUrl="https://instant-username-search-api.herokuapp.com/";var O,w,C=window.apiUrl+"check",k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){fetch(window.apiUrl+"services/getAll").then(function(e){return e.json()}).then(function(e){n.setState({sites:e})}).catch(function(e){console.log("error while fetching services list"+e.message)})},n.search=function(e){O=new AbortController,w=O.signal;for(var t=0;t<n.state.sites.length;t++){var a=n.state.sites[t].endpoint.replace("{username}",e);fetch(C+a,{signal:w}).then(function(e){return e.json()}).then(function(e){var t=[].concat(n.state.results);t.push(e),n.setState({results:t})}).catch(function(e){})}},n.debouncedSearch=Object(m.debounce)(n.search,800),n.inputChanged=function(e){n.state.results.length>0&&(O.abort(),n.setState({results:[]})),n.debouncedSearch(e)},n.state={sites:[],results:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement(b,{onSearch:this.inputChanged}))),r.a.createElement("div",{className:"container"},r.a.createElement(E,{results:this.state.results}),r.a.createElement("hr",null),r.a.createElement(g,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(164)},96:function(e,t,n){},97:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.e0878c35.chunk.js.map