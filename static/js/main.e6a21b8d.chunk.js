(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(8),i=n.n(c),r=(n(14),n(2)),l=n(3),s=n(5),u=n(4),h=n(6),d=n(1),b=(n(16),n(18),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={drawing:!1},n.draw=n.draw.bind(Object(d.a)(Object(d.a)(n))),n.onMouseUp=n.onMouseUp.bind(Object(d.a)(Object(d.a)(n))),n.onMouseDown=n.onMouseDown.bind(Object(d.a)(Object(d.a)(n))),n.canvas=a.a.createRef(),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.canvas.current.width=this.canvas.current.clientWidth,this.canvas.current.height=this.canvas.current.clientHeight}},{key:"render",value:function(){return a.a.createElement("canvas",{ref:this.canvas,width:"1800",height:"1000",className:"Canvas",onMouseMove:this.draw,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp})}},{key:"getMousePosition",value:function(t){var e=this.canvas.current.getBoundingClientRect();return console.log(this.canvas.current.style.width),{x:t.clientX-e.left,y:t.clientY-e.top}}},{key:"onMouseUp",value:function(){this.setState({drawing:!1})}},{key:"onMouseDown",value:function(){this.setState({drawing:!0}),this.ctx=this.canvas.current.getContext("2d"),this.ctx.lineWidth=3,this.ctx.lineJoin="round",this.ctx.strokeStyle=this.props.color,this.ctx.beginPath()}},{key:"draw",value:function(t){var e=this.getMousePosition(t);!0===this.state.drawing&&(this.ctx.lineTo(e.x,e.y),this.ctx.stroke())}}]),e}(o.Component)),v=(n(20),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onGetColor=n.onGetColor.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("aside",{className:"NavBelt"},a.a.createElement("button",{onClick:this.onClear},"Clear"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("button",{colortoset:"red",onClick:this.onGetColor},"RED")),a.a.createElement("li",null,a.a.createElement("button",{colortoset:"green",onClick:this.onGetColor},"GREEN")),a.a.createElement("li",null,a.a.createElement("button",{colortoset:"blue",onClick:this.onGetColor},"BLUE")),a.a.createElement("li",null,a.a.createElement("button",{colortoset:"yellow",onClick:this.onGetColor},"YELLOW")),a.a.createElement("li",null,a.a.createElement("button",{colortoset:"black",onClick:this.onGetColor},"BLACK"))))}},{key:"onClear",value:function(){var t=document.querySelector(".Canvas");t.getContext("2d").clearRect(0,0,t.width,t.height)}},{key:"onGetColor",value:function(t){this.props.getColor(t.target.getAttribute("colortoset"))}}]),e}(o.Component)),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).getColor=n.getColor.bind(Object(d.a)(Object(d.a)(n))),n.state={color:"red"},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,{color:this.state.color}),a.a.createElement(v,{getColor:this.getColor}))}},{key:"componentDidMount",value:function(){document.title="Paint in React - my first app"}},{key:"getColor",value:function(t){this.setState({color:t}),console.log(this.state)}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.e6a21b8d.chunk.js.map