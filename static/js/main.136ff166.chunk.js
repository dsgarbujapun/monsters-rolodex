(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(14),n(1)),i=n(2),l=n(4),u=n(3),h=n(5),m=(n(15),n(16),n(17),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t,"?set=set2&size=180x180 ")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}),p=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))},d=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:this.props.placeholder,value:this.props.text,onChange:this.props.onTextChange}))}}]),t}(r.a.Component)),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],text:""},n.handleChange=function(e){n.setState({text:e.target.value})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.text,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(d,{value:this.state.text,onTextChange:this.handleChange,placeholder:"search monster"}),r.a.createElement(p,{monsters:a}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.136ff166.chunk.js.map