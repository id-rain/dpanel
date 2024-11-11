(self.webpackChunk=self.webpackChunk||[]).push([[8615],{23430:function($,A,e){"use strict";e.d(A,{Z:function(){return D}});var _=e(87462),t=e(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},g=x,p=e(84089),U=function(o,r){return t.createElement(p.Z,(0,_.Z)({},o,{ref:r,icon:g}))},y=t.forwardRef(U),D=y},5966:function($,A,e){"use strict";var _=e(97685),t=e(1413),x=e(45987),g=e(21770),p=e(72723),U=e(55241),y=e(97435),D=e(67294),j=e(73552),o=e(85893),r=["fieldProps","proFieldProps"],i=["fieldProps","proFieldProps"],h="text",c=function(v){var n=v.fieldProps,f=v.proFieldProps,s=(0,x.Z)(v,r);return(0,o.jsx)(j.Z,(0,t.Z)({valueType:h,fieldProps:n,filedConfig:{valueType:h},proFieldProps:f},s))},m=function(v){var n=(0,g.Z)(v.open||!1,{value:v.open,onChange:v.onOpenChange}),f=(0,_.Z)(n,2),s=f[0],a=f[1];return(0,o.jsx)(p.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(l){var E,G=l.getFieldValue(v.name||[]);return(0,o.jsx)(U.Z,(0,t.Z)((0,t.Z)({getPopupContainer:function(d){return d&&d.parentNode?d.parentNode:d},onOpenChange:function(d){return a(d)},content:(0,o.jsxs)("div",{style:{padding:"4px 0"},children:[(E=v.statusRender)===null||E===void 0?void 0:E.call(v,G),v.strengthText?(0,o.jsx)("div",{style:{marginTop:10},children:(0,o.jsx)("span",{children:v.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},v.popoverProps),{},{open:s,children:v.children}))}})},L=function(v){var n=v.fieldProps,f=v.proFieldProps,s=(0,x.Z)(v,i),a=(0,D.useState)(!1),S=(0,_.Z)(a,2),l=S[0],E=S[1];return n!=null&&n.statusRender&&s.name?(0,o.jsx)(m,{name:s.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:l,onOpenChange:E,children:(0,o.jsx)("div",{children:(0,o.jsx)(j.Z,(0,t.Z)({valueType:"password",fieldProps:(0,t.Z)((0,t.Z)({},(0,y.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(u){var d;n==null||(d=n.onBlur)===null||d===void 0||d.call(n,u),E(!1)},onClick:function(u){var d;n==null||(d=n.onClick)===null||d===void 0||d.call(n,u),E(!0)}}),proFieldProps:f,filedConfig:{valueType:h}},s))})}):(0,o.jsx)(j.Z,(0,t.Z)({valueType:"password",fieldProps:n,proFieldProps:f,filedConfig:{valueType:h}},s))},O=c;O.Password=L,O.displayName="ProFormComponent",A.Z=O},80821:function($,A,e){"use strict";e.d(A,{Z:function(){return j}});var _=e(5574),t=e.n(_),x=e(24963),g=e(86738),p=e(14726),U=e(83062),y=e(67294),D=e(85893);function j(o){var r=(0,y.useState)(!1),i=t()(r,2),h=i[0],c=i[1],m=(0,y.useContext)(x.Z),L=m.lang,O=m.notice,M=m.message,v=function(){c(!0),o.action().then(function(f){if(c(!1),typeof o.onSuccess=="function"&&o.onSuccess(f),o.messageSuccess){var s="";typeof o.messageSuccess=="function"?s=o.messageSuccess(f):s=o.messageSuccess,s.indexOf(".")>-1&&(s=L(s)),o.asynced?M.info(s):M.success(s)}}).catch(function(f){c(!1),typeof o.onError=="function"&&o.onError(f)})};return o.confirm?(0,D.jsx)(g.Z,{style:{width:500},title:o.confirmTitle?o.confirmTitle:L("notification.title.tip"),description:o.confirm,onConfirm:v,okText:"Yes",cancelText:"No",children:(0,D.jsx)(p.ZP,{disabled:o.disabled,icon:o.icon,loading:h,danger:o.danger,type:o.type,children:o.children})}):(0,D.jsx)(U.Z,{title:o.tips,children:(0,D.jsx)(p.ZP,{disabled:o.disabled,icon:o.icon,loading:h,onClick:v,danger:o.danger,type:o.type,children:o.children})})}},54964:function($,A,e){"use strict";var _=e(78267),t=e.n(_),x=e(75458),g=e.n(x),p=e(67294),U=e(12320),y=e.n(U),D=e(89629),j=e(85893),o={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},r=new U.Terminal(o),i=new x.SearchAddon,h=new _.FitAddon,c=(0,p.forwardRef)(function(m,L){return(0,p.useEffect)(function(){window.addEventListener("resize",function(){m.showInModal||h.fit()}),r.loadAddon(h),r.loadAddon(i),r.open(document.getElementById("terminal-container")),h.fit()},[]),(0,p.useImperativeHandle)(L,function(){return{write:function(M){r.write(M)},clear:function(){r.clear()},getTerminal:function(){return r},findNext:function(M){i.findNext(M)},findPrev:function(M){i.findPrevious(M)},fit:function(){h.fit()},onData:function(M){r.onData(M)}}}),(0,j.jsx)("div",{id:"terminal-container",style:{width:m.width?m.width:"100%",height:m.height?m.height:"500px"}})});A.Z=c},24963:function($,A,e){"use strict";var _=e(67294),t=(0,_.createContext)({});A.Z=t},2742:function($,A,e){"use strict";e.r(A),e.d(A,{default:function(){return u}});var _=e(15009),t=e.n(_),x=e(99289),g=e.n(x),p=e(5574),U=e.n(p),y=e(62597),D=e(38345),j=e(97269),o=e(62370),r=e(5966),i=e(97462),h=e(54006),c=e(67294),m=e(71230),L=e(15746),O=e(34041),M=e(14726),v=e(42075),n=e(54964),f=e(80821),s=e(23430),a=e(93162),S=e.n(a),l=e(60335),E=e(85893),G;function u(){var d=(0,c.useState)("500"),B=U()(d,2),P=B[0],R=B[1],K=(0,h.useParams)(),I=(0,c.useRef)(),w=(0,h.useModel)("subscriber");w.addDataHandler("container:log:"+K.id,function(W){var C,T;(C=I.current)===null||C===void 0||C.fit(),(T=I.current)===null||T===void 0||T.write(W.data)});var N=function(){var W=g()(t()().mark(function C(){var T,Z,b;return t()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(!K.id){z.next=5;break}return z.next=3,(0,y.Tb)({md5:(T=K.id)!==null&&T!==void 0?T:"",lineTotal:parseInt(P)});case 3:b=z.sent,(Z=I.current)===null||Z===void 0||Z.fit();case 5:case"end":return z.stop()}},C)}));return function(){return W.apply(this,arguments)}}();return(0,c.useEffect)(function(){var W,C;return(W=I.current)===null||W===void 0||W.fit(),(C=I.current)===null||C===void 0||C.clear(),N(),function(){w.progress.close("container:log:"+K.id)}},[P]),(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(D.Z,{direction:"column",gutter:[0,10],children:[(0,E.jsx)(j.A,{submitter:!1,layout:"horizontal",onValuesChange:function(C,T){R(T.lineTotal)},children:(0,E.jsxs)(m.Z,{gutter:[20,0],children:[(0,E.jsx)(L.Z,{span:8,children:(0,E.jsx)(o.Z,{name:"lineTotal",initialValue:"500",label:"\u83B7\u53D6\u65E5\u5FD7\u6761\u6570",children:(0,E.jsxs)(O.Z,{defaultValue:"500",children:[(0,E.jsx)(O.Z.Option,{value:"100",children:"100\u6761\u65E5\u5FD7\u6570\u636E"}),(0,E.jsx)(O.Z.Option,{value:"200",children:"200\u6761\u65E5\u5FD7\u6570\u636E"}),(0,E.jsx)(O.Z.Option,{value:"500",children:"500\u6761\u65E5\u5FD7\u6570\u636E"}),(0,E.jsx)(O.Z.Option,{value:"1000",children:"1000\u6761\u65E5\u5FD7\u6570\u636E"}),(0,E.jsx)(O.Z.Option,{value:"-1",children:"\u5168\u90E8\uFF08\u4E0B\u8F7D\u53EF\u89C1\uFF09"})]})})}),(0,E.jsx)(L.Z,{children:(0,E.jsx)(M.ZP,{onClick:function(){var C;(C=I.current)===null||C===void 0||C.clear()},children:"\u6E05\u5C4F"})}),(0,E.jsx)(L.Z,{children:(0,E.jsx)(r.Z,{label:"\u67E5\u627E",name:"keywork"})}),(0,E.jsx)(L.Z,{children:(0,E.jsx)(i.Z,{name:["keywork"],children:function(C){var T=C.keywork;return(0,E.jsxs)(v.Z,{size:10,children:[(0,E.jsx)(M.ZP,{onClick:function(){var b;(b=I.current)===null||b===void 0||b.findNext(T)},children:"\u4E0B\u4E00\u4E2A"},"next"),(0,E.jsx)(M.ZP,{onClick:function(){var b;(b=I.current)===null||b===void 0||b.findPrev(T)},children:"\u4E0A\u4E00\u4E2A"},"prev")]})}})}),(0,E.jsx)(L.Z,{children:(0,E.jsx)(f.Z,{icon:(0,E.jsx)(s.Z,{}),action:function(){var C;return(0,y.XH)({md5:(C=K.id)!==null&&C!==void 0?C:"",lineTotal:parseInt(P)})},onSuccess:function(C){var T;(0,l.jV)({md5:(T=K.id)!==null&&T!==void 0?T:""}).then(function(Z){var b=new Blob([C],{type:"text/plain"});(0,a.saveAs)(b,Z.data.info.Name.replaceAll("/","")+"_"+new Date().toLocaleDateString()+".log")})},messageSuccess:"\u5BFC\u51FA\u6210\u529F",children:"\u4E0B\u8F7D\u65E5\u5FD7"})})]})}),(0,E.jsx)(n.Z,{ref:I,height:"580px"})]})})}},62597:function($,A,e){"use strict";e.d(A,{$G:function(){return U},Ct:function(){return L},Tb:function(){return o},XH:function(){return i},cl:function(){return D},iE:function(){return c},lK:function(){return n},xb:function(){return M}});var _=e(15009),t=e.n(_),x=e(99289),g=e.n(x),p=e(54006);function U(s){return y.apply(this,arguments)}function y(){return y=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,p.request)("/api/app/site/create-by-image",{method:"POST",data:a}));case 1:case"end":return l.stop()}},s)})),y.apply(this,arguments)}function D(s){return j.apply(this,arguments)}function j(){return j=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,p.request)("/api/app/site/get-list",{method:"POST",data:a}));case 1:case"end":return l.stop()}},s)})),j.apply(this,arguments)}function o(s){return r.apply(this,arguments)}function r(){return r=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a.download=!1,l.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:a});case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}},s)})),r.apply(this,arguments)}function i(s){return h.apply(this,arguments)}function h(){return h=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return a.download=!0,l.next=3,(0,p.request)("/api/app/log/run",{method:"POST",data:a,responseType:"blob"});case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}},s)})),h.apply(this,arguments)}function c(s){return m.apply(this,arguments)}function m(){return m=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,p.request)("/api/app/site/get-detail",{data:a,method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},s)})),m.apply(this,arguments)}function L(s){return O.apply(this,arguments)}function O(){return O=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,p.request)("/api/app/container/delete",{method:"POST",data:a}));case 1:case"end":return l.stop()}},s)})),O.apply(this,arguments)}function M(s){return v.apply(this,arguments)}function v(){return v=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,p.request)("/api/app/site/delete",{method:"POST",data:a}));case 1:case"end":return l.stop()}},s)})),v.apply(this,arguments)}function n(s){return f.apply(this,arguments)}function f(){return f=g()(t()().mark(function s(a){return t()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,p.request)("/api/app/site/update-title",{method:"POST",data:a});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},s)})),f.apply(this,arguments)}},60335:function($,A,e){"use strict";e.d(A,{IE:function(){return D},IW:function(){return U},KK:function(){return c},LJ:function(){return L},Re:function(){return M},eE:function(){return i},jV:function(){return o}});var _=e(15009),t=e.n(_),x=e(99289),g=e.n(x),p=e(54006);function U(n){return y.apply(this,arguments)}function y(){return y=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/status",{method:"POST",data:f}));case 1:case"end":return a.stop()}},n)})),y.apply(this,arguments)}function D(n){return j.apply(this,arguments)}function j(){return j=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/get-list",{data:f,method:"POST"}));case 1:case"end":return a.stop()}},n)})),j.apply(this,arguments)}function o(n){return r.apply(this,arguments)}function r(){return r=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/get-detail",{data:f,method:"POST"}));case 1:case"end":return a.stop()}},n)})),r.apply(this,arguments)}function i(n){return h.apply(this,arguments)}function h(){return h=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/update",{data:f,method:"POST"}));case 1:case"end":return a.stop()}},n)})),h.apply(this,arguments)}function c(){return m.apply(this,arguments)}function m(){return m=g()(t()().mark(function n(){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,p.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return s.stop()}},n)})),m.apply(this,arguments)}function L(n){return O.apply(this,arguments)}function O(){return O=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/export",{method:"POST",data:f,responseType:"blob"}));case 1:case"end":return a.stop()}},n)})),O.apply(this,arguments)}function M(n){return v.apply(this,arguments)}function v(){return v=g()(t()().mark(function n(f){return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,p.request)("/api/app/container/commit",{method:"POST",data:f}));case 1:case"end":return a.stop()}},n)})),v.apply(this,arguments)}},86738:function($,A,e){"use strict";e.d(A,{Z:function(){return G}});var _=e(67294),t=e(21640),x=e(93967),g=e.n(x),p=e(21770),U=e(98423),y=e(53124),D=e(55241),j=e(86743),o=e(81643),r=e(14726),i=e(33671),h=e(10110),c=e(24457),m=e(66330),L=e(83559);const O=u=>{const{componentCls:d,iconCls:B,antCls:P,zIndexPopup:R,colorText:K,colorWarning:I,marginXXS:w,marginXS:N,fontSize:W,fontWeightStrong:C,colorTextHeading:T}=u;return{[d]:{zIndex:R,[`&${P}-popover`]:{fontSize:W},[`${d}-message`]:{marginBottom:N,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${d}-message-icon ${B}`]:{color:I,fontSize:W,lineHeight:1,marginInlineEnd:N},[`${d}-title`]:{fontWeight:C,color:T,"&:only-child":{fontWeight:"normal"}},[`${d}-description`]:{marginTop:w,color:K}},[`${d}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:N}}}}},M=u=>{const{zIndexPopupBase:d}=u;return{zIndexPopup:d+60}};var v=(0,L.I$)("Popconfirm",u=>O(u),M,{resetStyle:!1}),n=function(u,d){var B={};for(var P in u)Object.prototype.hasOwnProperty.call(u,P)&&d.indexOf(P)<0&&(B[P]=u[P]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,P=Object.getOwnPropertySymbols(u);R<P.length;R++)d.indexOf(P[R])<0&&Object.prototype.propertyIsEnumerable.call(u,P[R])&&(B[P[R]]=u[P[R]]);return B};const f=u=>{const{prefixCls:d,okButtonProps:B,cancelButtonProps:P,title:R,description:K,cancelText:I,okText:w,okType:N="primary",icon:W=_.createElement(t.Z,null),showCancel:C=!0,close:T,onConfirm:Z,onCancel:b,onPopupClick:k}=u,{getPrefixCls:z}=_.useContext(y.E_),[H]=(0,h.Z)("Popconfirm",c.Z.Popconfirm),X=(0,o.Z)(R),Y=(0,o.Z)(K);return _.createElement("div",{className:`${d}-inner-content`,onClick:k},_.createElement("div",{className:`${d}-message`},W&&_.createElement("span",{className:`${d}-message-icon`},W),_.createElement("div",{className:`${d}-message-text`},X&&_.createElement("div",{className:`${d}-title`},X),Y&&_.createElement("div",{className:`${d}-description`},Y))),_.createElement("div",{className:`${d}-buttons`},C&&_.createElement(r.ZP,Object.assign({onClick:b,size:"small"},P),I||(H==null?void 0:H.cancelText)),_.createElement(j.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,i.nx)(N)),B),actionFn:Z,close:T,prefixCls:z("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},w||(H==null?void 0:H.okText))))};var a=u=>{const{prefixCls:d,placement:B,className:P,style:R}=u,K=n(u,["prefixCls","placement","className","style"]),{getPrefixCls:I}=_.useContext(y.E_),w=I("popconfirm",d),[N]=v(w);return N(_.createElement(m.ZP,{placement:B,className:g()(w,P),style:R,content:_.createElement(f,Object.assign({prefixCls:w},K))}))},S=function(u,d){var B={};for(var P in u)Object.prototype.hasOwnProperty.call(u,P)&&d.indexOf(P)<0&&(B[P]=u[P]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,P=Object.getOwnPropertySymbols(u);R<P.length;R++)d.indexOf(P[R])<0&&Object.prototype.propertyIsEnumerable.call(u,P[R])&&(B[P[R]]=u[P[R]]);return B};const E=_.forwardRef((u,d)=>{var B,P;const{prefixCls:R,placement:K="top",trigger:I="click",okType:w="primary",icon:N=_.createElement(t.Z,null),children:W,overlayClassName:C,onOpenChange:T,onVisibleChange:Z}=u,b=S(u,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:k}=_.useContext(y.E_),[z,H]=(0,p.Z)(!1,{value:(B=u.open)!==null&&B!==void 0?B:u.visible,defaultValue:(P=u.defaultOpen)!==null&&P!==void 0?P:u.defaultVisible}),X=(F,V)=>{H(F,!0),Z==null||Z(F),T==null||T(F,V)},Y=F=>{X(!1,F)},Q=F=>{var V;return(V=u.onConfirm)===null||V===void 0?void 0:V.call(void 0,F)},q=F=>{var V;X(!1,F),(V=u.onCancel)===null||V===void 0||V.call(void 0,F)},ee=(F,V)=>{const{disabled:re=!1}=u;re||X(F,V)},J=k("popconfirm",R),ne=g()(J,C),[te]=v(J);return te(_.createElement(D.Z,Object.assign({},(0,U.Z)(b,["title"]),{trigger:I,placement:K,onOpenChange:ee,open:z,ref:d,overlayClassName:ne,content:_.createElement(f,Object.assign({okType:w,icon:N},u,{prefixCls:J,close:Y,onConfirm:Q,onCancel:q})),"data-popover-inject":!0}),W))});E._InternalPanelDoNotUseOrYouWillBeFired=a;var G=E},93162:function($,A,e){var _,t,x;(function(g,p){t=[],_=p,x=typeof _=="function"?_.apply(A,t):_,x!==void 0&&($.exports=x)})(this,function(){"use strict";function g(r,i){return typeof i=="undefined"?i={autoBom:!1}:typeof i!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r}function p(r,i,h){var c=new XMLHttpRequest;c.open("GET",r),c.responseType="blob",c.onload=function(){o(c.response,i,h)},c.onerror=function(){console.error("could not download file")},c.send()}function U(r){var i=new XMLHttpRequest;i.open("HEAD",r,!1);try{i.send()}catch(h){}return 200<=i.status&&299>=i.status}function y(r){try{r.dispatchEvent(new MouseEvent("click"))}catch(h){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(i)}}var D=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof e.g=="object"&&e.g.global===e.g?e.g:void 0,j=D.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=D.saveAs||(typeof window!="object"||window!==D?function(){}:"download"in HTMLAnchorElement.prototype&&!j?function(r,i,h){var c=D.URL||D.webkitURL,m=document.createElement("a");i=i||r.name||"download",m.download=i,m.rel="noopener",typeof r=="string"?(m.href=r,m.origin===location.origin?y(m):U(m.href)?p(r,i,h):y(m,m.target="_blank")):(m.href=c.createObjectURL(r),setTimeout(function(){c.revokeObjectURL(m.href)},4e4),setTimeout(function(){y(m)},0))}:"msSaveOrOpenBlob"in navigator?function(r,i,h){if(i=i||r.name||"download",typeof r!="string")navigator.msSaveOrOpenBlob(g(r,h),i);else if(U(r))p(r,i,h);else{var c=document.createElement("a");c.href=r,c.target="_blank",setTimeout(function(){y(c)})}}:function(r,i,h,c){if(c=c||open("","_blank"),c&&(c.document.title=c.document.body.innerText="downloading..."),typeof r=="string")return p(r,i,h);var m=r.type==="application/octet-stream",L=/constructor/i.test(D.HTMLElement)||D.safari,O=/CriOS\/[\d]+/.test(navigator.userAgent);if((O||m&&L||j)&&typeof FileReader!="undefined"){var M=new FileReader;M.onloadend=function(){var f=M.result;f=O?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=f:location=f,c=null},M.readAsDataURL(r)}else{var v=D.URL||D.webkitURL,n=v.createObjectURL(r);c?c.location=n:location.href=n,c=null,setTimeout(function(){v.revokeObjectURL(n)},4e4)}});D.saveAs=o.saveAs=o,$.exports=o})}}]);