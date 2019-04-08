(function(e){function t(t){for(var a,i,r=t[0],l=t[1],c=t[2],u=0,h=[];u<r.length;u++)i=r[u],o[i]&&h.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},o={app:0},n=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e5d47f46"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=o[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise(function(t,a){s=o[e]=[t,a]});t.push(s[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e),n=function(t){l.onerror=l.onload=null,clearTimeout(c);var s=o[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,s[1](i)}o[e]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0734":function(e,t,s){"use strict";var a=s("dad4"),o=s.n(a);o.a},1:function(e,t){},2221:function(e,t,s){"use strict";var a=s("a710"),o=s.n(a);o.a},3277:function(e,t,s){"use strict";var a=s("d2ba"),o=s.n(a);o.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=(s("5c0b"),s("2877")),r={},l=Object(i["a"])(r,o,n,!1,null,null,null),c=l.exports,u=(s("7f7f"),s("8c4f")),d=(s("96cf"),s("3b8d")),h=s("2f62"),p=s("8055"),m=s.n(p);a["a"].use(h["a"]);var v=new h["a"].Store({state:{socket:m()("https://pinturillo3.herokuapp.com"),localPlayer:null,isLoggedIn:!1,room_id:null,players:null},mutations:{set_localplayer:function(e,t){e.localPlayer=t},set_score:function(e,t){for(var s=e.players,a=0;a<s.length;a++)s[a].username===t.username&&(s[a].score+=t.score)},set_room_id:function(e,t){e.room_id=t},set_playerlist:function(e,t){e.players=t},set_logged:function(e,t){e.isLoggedIn=t}},actions:{create_room:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,s){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=t.state,console.log(a+s);case 2:case"end":return e.stop()}},e,this)}));function t(t,s){return e.apply(this,arguments)}return t}()}}),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[e._v("Pinturillo3")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:function(t){e.showErr=!1}}}),e._v("\n            Player nick cannot be empty!\n          ")]),s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v(e._s(e.$t("nickname")))]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.localPlayer,expression:"localPlayer"}],staticClass:"input",attrs:{type:"text",placeholder:"player"},domProps:{value:e.localPlayer},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.verify_user()},input:function(t){t.target.composing||(e.localPlayer=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"select is-info"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.i18n.locale,expression:"i18n.locale"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.i18n,"locale",t.target.multiple?s:s[0])}}},[s("option",[e._v("Español")]),s("option",[e._v("English")])])])]),s("button",{staticClass:"button is-large is-fullwidth is-success is-outlined",on:{click:function(t){return e.verify_user()}}},[s("p",[e._v(e._s(e.$t("play")))])])])])])])]),s("Footer")],1)},_=[],g=s("cebc"),y=s("a925");a["a"].use(y["a"]);var b={English:{nickname:"Nickname:",play:"Play!",leave_room:"Leave Room",enter_guess:"enter_guess",play_public:"Public Room",play_private:"Private Room",chat_evt:{guessed_word:" has guessed the word!",going_to_draw:" is going to draw!",reported:"The painter has been reported.",player_left:" has left.",player_joined:" has joined."}},"Español":{nickname:"Nombre:",play:"Jugar!",leave_room:"Salir de la sala",enter_guess:"Introduce palabra...",play_public:"Sala pública",play_private:"Sala privada",chat_evt:{guessed_word:" ha acertado la palabra!",going_to_draw:" va a dibujar.",reported:"El dibujante ha sido reportado.",player_left:" ha salido.",player_joined:" ha entrado."}}},w=new y["a"]({locale:"Español",fallbackLocale:"English",messages:b}),C=w,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hero-foot"},[s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"is-3 has-text-centered"},[e._v("\n        Made by "),s("a",{attrs:{href:"https://github.com/jordigoyanes"}},[e._v("Jordi Goyanes")])])])])])}],j={},P=Object(i["a"])(j,x,k,!1,null,null,null),O=P.exports,E={name:"home",components:{Footer:O},data:function(){return{localPlayer:"player",showErr:!1,lang:"Español",i18n:C}},methods:Object(g["a"])({verify_user:function(){""===this.localPlayer?this.showErr=!0:(this.set_localplayer(this.localPlayer),this.$router.push({path:"select-room"}))}},Object(h["c"])({set_localplayer:"set_localplayer"})),computed:{}},$=E,L=Object(i["a"])($,f,_,!1,null,null,null),S=L.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("section",{staticClass:"section has-background-info"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-item level-left"},[s("button",{staticClass:"button is-dark ",on:{click:function(t){return e.leave()}}},[e._v(e._s(e.$t("leave_room")))])]),s("h1",{staticClass:"is-size-3 level-item has-text-centered",attrs:{id:"game-title"}},[e._v("\n        Pinturillo 3\n      ")]),s("div",{staticClass:"level-item level-right"},[s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag is-dark"},[e._v("Room ID")]),s("span",{staticClass:"tag is-success"},[e._v(e._s(this.room_id))])])])])]),s("div",{staticClass:"hero is-mobile is-dark is-fullheight"},[s("div",{attrs:{id:"game-columns"}},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-fifth"},[s("div",{staticClass:"box"},[e._v("\n            usuarios y puntuacion\n            "),s("Scores")],1)]),s("div",{staticClass:"column is-half"},[s("div",{attrs:{id:"canvas-wrapper"}},[s("DrawingArea")],1)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("p",{staticClass:"is-primary"},[e._v("chat")]),s("Chatbox")],1)])])])])])},R=[],z=s("f499"),N=s.n(z),T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("canvas",{ref:"canvas",attrs:{id:"canvas"},on:{mousedown:function(t){return e.onMouseDown(t)},mouseup:function(t){return e.onMouseUp(t)},mousemove:function(t){return e.onMouseMove(t)}}})},D=[],F={name:"drawingArea",data:function(){return{canvas:null,context:null,rect:null,drawing:!1,current:{color:"black",lineWidth:2,x:0,y:0}}},computed:Object(g["a"])({},Object(h["d"])({socket:"socket"})),methods:{switch_color:function(e){switch(e){case"red":console.log("hi");break}},onMouseDown:function(e){console.log("x:"+e.offsetX),console.log("y:"+e.offsetY),this.drawing=!0,this.current.x=e.offsetX,this.current.y=e.offsetY},onMouseUp:function(e){var t=e.offsetX,s=e.offsetY;this.drawing&&(this.drawLine(this.current.x,this.current.y,t,s,this.current.color,!0),this.drawing=!1)},onMouseMove:function(e){if(this.drawing){var t=e.offsetX,s=e.offsetY;this.drawLine(this.current.x,this.current.y,t,s,this.current.color,!0),this.current.x=t,this.current.y=s}},drawLine:function(e,t,s,a,o,n){console.log("x0:"+e+",y0:"+t+",x1:"+s+",y1:"+a),this.context.beginPath(),this.context.moveTo(e,t),this.context.lineTo(s,a),this.context.strokeStyle=o,this.context.lineWidth=2,this.context.stroke(),this.context.closePath(),n&&this.socket.emit("drawing",{x0:e,y0:t,x1:s,y1:a,color:o})},onDrawingEvent:function(e){this.drawLine(e.x0,e.y0,e.x1,e.y1,e.color)},onResize:function(){this.canvas.width=this.canvas.parentElement.clientWidth,this.canvas.height=this.canvas.parentElement.clientHeight}},mounted:function(){this.canvas=this.$refs.canvas,this.context=this.$refs.canvas.getContext("2d"),this.context.fillStyle="#333",this.context.strokeStyle=this.color,this.context.lineWidth=this.lineWidth,this.context.lineCap="round",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),window.addEventListener("resize",this.onResize,!1),this.onResize(),this.socket.on("drawing",this.onDrawingEvent)}},A=F,I=(s("3277"),Object(i["a"])(A,T,D,!1,null,null,null)),W=I.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"field"},[s("div",{staticClass:"chatbox"},[s("ul",e._l(e.chat_messages,function(t,a){return s("li",{key:a},["evt"==t.type?s("div",[s("span",{class:t.evt_type}),s("p",{staticClass:"evt"},[e._v(e._s(t.message))])]):s("div",[s("p",[s("strong",[e._v(e._s(t.username))]),e._v(": "+e._s(t.message)+"\n            ")])])])}),0)])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.guess,expression:"guess"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"Enter guess..."},domProps:{value:e.guess},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send_message(t)},input:function(t){t.target.composing||(e.guess=t.target.value)}}})])])])},U=[],X=s("75fc"),Y={name:"Chatbox",data:function(){return{guess:"",chat_messages:[{username:"jordi",message:"i don't know"}]}},methods:{log:function(){console.log(this.guess)},send_message:function(){""!=this.guess&&(this.socket.emit("new_message",{username:this.localPlayer,message:this.guess}),this.guess="")}},mounted:function(){var e=this;this.socket.on("new_message",function(t){e.chat_messages=[].concat(Object(X["a"])(e.chat_messages),[t])}),this.socket.on("chat_evt",function(t){switch(console.log("este es evt_type: "+t.evt_type),t.evt_type){case"player_joined":t.message=t.username+C.t("chat_evt.player_joined");break;case"player_left":t.message=t.username+C.t("chat_evt.player_left");break;case"guessed_word":t.message=t.username+C.t("chat_evt.guessed_word");break;case"reported":t.message=C.t("chat_evt.reported");break;case"going_to_draw":t.message=t.username+C.t("chat_evt.going_to_draw");break}t.type="evt",e.chat_messages=[].concat(Object(X["a"])(e.chat_messages),[t])})},computed:Object(g["a"])({},Object(h["d"])({socket:"socket",localPlayer:"localPlayer",room_id:"room_id"}))},q=Y,B=(s("6298"),Object(i["a"])(q,J,U,!1,null,null,null)),G=B.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"scores"}},[s("ul",e._l(e.orderedUsers,function(t,a){return s("li",{key:a},[t.username==e.localPlayer?s("div",[s("strong",[e._v(e._s(t.username))])]):s("div",[e._v("\n        "+e._s(t.username)+"\n      ")]),e._v("\n      - Score: "+e._s(t.score)+"\n    ")])}),0)])},K=[],Q=s("2ef0"),V=s.n(Q),Z={name:"scores",computed:Object(g["a"])({},Object(h["d"])({players:"players",localPlayer:"localPlayer"}),{orderedUsers:function(){return V.a.orderBy(this.players,"score").reverse()}})},ee=Z,te=(s("0734"),Object(i["a"])(ee,H,K,!1,null,null,null)),se=te.exports,ae={name:"game",components:{DrawingArea:W,Chatbox:G,Scores:se},methods:Object(g["a"])({leave:function(){this.socket.disconnect(),this.set_logged(!1),this.set_playerlist(null),this.set_localplayer(null),this.set_room_id(null),this.$router.push({name:"home"})}},Object(h["c"])({set_room_id:"set_room_id",set_playerlist:"set_playerlist",set_logged:"set_logged",set_score:"set_score",set_localplayer:"set_localplayer"})),computed:Object(g["a"])({},Object(h["d"])({socket:"socket",room_id:"room_id",localPlayer:"localPlayer",players:"players"})),mounted:function(){var e=this;this.socket.on("left_room",function(t){e.set_playerlist(t.players),console.log("this is the new data: "+N()(t.players))})}},oe=ae,ne=(s("2221"),Object(i["a"])(oe,M,R,!1,null,null,null)),ie=ne.exports,re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[e._v("Pinturillo3")]),e.isLoading?s("div",[s("progress",{staticClass:"progress is-success",attrs:{max:"100"}},[e._v("45%")])]):s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box has-background-success game-select",on:{click:function(t){return e.goPublic()}}},[s("h1",{staticClass:" is-size-1 has-text-centered"},[e._v(e._s(e.$t("play_public")))])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box has-background-warning game-select",on:{click:function(t){return e.goPrivate()}}},[s("h1",{staticClass:" is-size-1 has-text-centered"},[e._v(e._s(e.$t("play_private")))])])])])])]),s("Footer")],1)},le=[],ce={components:{Footer:O},data:function(){return{showErr:!1,room_name:"",room_password:"",isLoading:!1,i18n:C}},methods:Object(g["a"])({goPublic:function(){this.isLoading=!0,this.socket.emit("join_public_room",{player:this.localPlayer,locale:this.i18n.locale})},goPrivate:function(){this.$router.push({name:"private"})}},Object(h["b"])({join_public_room:"join_public_room"}),Object(h["c"])({set_room_id:"set_room_id",set_playerlist:"set_playerlist",set_logged:"set_logged",set_localplayer:"set_localplayer"})),mounted:function(){var e=this;this.socket.connected||this.socket.connect(),this.socket.on("joined_room",function(t){e.set_playerlist(t.players)}),this.socket.on("user_join",function(t){console.log("this is original: "+t.original_joiner_name),console.log("this is new joiner name: "+t.new_joiner_name),e.set_localplayer(t.new_joiner_name),e.set_logged(!0),e.set_room_id(t.id),e.set_playerlist(t.players),e.$router.push({path:"/room/"+e.room_id})})},computed:Object(g["a"])({},Object(h["d"])({socket:"socket",localPlayer:"localPlayer",room_id:"room_id"}))},ue=ce,de=(s("5fae"),Object(i["a"])(ue,re,le,!1,null,null,null)),he=de.exports,pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"hero is-dark is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container is-mobile"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-half"},[s("h1",{staticClass:"title is-size-1 has-text-centered"},[e._v("Pinturillo3")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:function(t){e.showErr=!1}}}),e._v("\n            Password cannot be empty\n          ")]),s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Room Name:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.room_name,expression:"room_name"}],staticClass:"input",attrs:{type:"text",placeholder:"room name"},domProps:{value:e.room_name},on:{input:function(t){t.target.composing||(e.room_name=t.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v("Room Password:")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.room_password,expression:"room_password"}],staticClass:"input",attrs:{type:"text",placeholder:"password"},domProps:{value:e.room_password},on:{input:function(t){t.target.composing||(e.room_password=t.target.value)}}})])]),s("button",{staticClass:"button is-fullwidth is-success is-outlined",on:{click:function(t){return e.setLocalPlayer()}}},[s("p",[e._v("OK")])])])])])])]),s("Footer")],1)},me=[],ve={components:{Footer:O},data:function(){return{showErr:!1,room_name:"",room_password:"",isLoading:!1}},created:function(){console.log("hi")}},fe=ve,_e=Object(i["a"])(fe,pe,me,!1,null,null,null),ge=_e.exports;a["a"].use(u["a"]);var ye=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/room/:id",name:"game",component:ie},{path:"/select-room",name:"room-select",component:he},{path:"/private",name:"private",component:ge},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]});ye.beforeEach(function(e,t,s){"home"==e.name||v.state.localPlayer||v.state.isLoggedIn?s():s({path:"/"})});var be=ye;a["a"].config.productionTip=!1,new a["a"]({i18n:C,router:be,store:v,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),o=s.n(a);o.a},"5e27":function(e,t,s){},"5fae":function(e,t,s){"use strict";var a=s("7092"),o=s.n(a);o.a},6298:function(e,t,s){"use strict";var a=s("ecce"),o=s.n(a);o.a},7092:function(e,t,s){},a710:function(e,t,s){},d2ba:function(e,t,s){},dad4:function(e,t,s){},ecce:function(e,t,s){}});
//# sourceMappingURL=app.97025ec5.js.map