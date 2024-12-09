"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5947],{24963:function(Y,U,e){var o=e(67294),a=(0,o.createContext)({});U.Z=a},50070:function(Y,U,e){e.r(U),e.d(U,{AppDetailContext:function(){return A},default:function(){return G}});var o=e(15009),a=e.n(o),K=e(99289),f=e.n(K),h=e(5574),W=e.n(h),g=e(24963),$=e(2831),D=e(60335),L=e(41123),p=e(54006),T=e(86738),E=e(25593),l=e(50136),O=e(67294),C=e(85893),A=(0,O.createContext)({});function G(){var S,c=(0,O.useContext)(g.Z),d=c.lang,v=c.loading,n=(0,p.useParams)(),q=(0,p.useSearchParams)(),ee=W()(q,2),J=ee[0],ne=ee[1],t=(S=J.get("tab"))!==null&&S!==void 0?S:"edit",s=(0,O.useState)("edit"),_=W()(s,2),r=_[0],i=_[1],y=(0,p.useNavigate)(),B=(0,O.useState)(1),b=W()(B,2),j=b[0],k=b[1],N=(0,p.useAccess)(),M=[{label:(0,C.jsx)(p.Link,{to:"/app/detail/edit/".concat(n.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,C.jsx)(p.Link,{to:"/app/detail/domain/".concat(n.id,"?tab=domain"),children:"\u57DF\u540D\u7BA1\u7406"}),key:"domain"},{label:(0,C.jsx)(T.Z,{style:{width:500},title:d("notification.title.tip"),description:"\u6587\u4EF6\u7BA1\u7406\u4F1A\u81EA\u52A8\u521B\u5EFA dpanel-plugin-exolorer \u5BB9\u5668\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",onConfirm:function(){y("/app/detail/file/".concat(n.id,"?tab=file")),z(M.filter(function(x){return x.key!="fileConfirm"})),i("file")},okText:"Yes",cancelText:"No",children:(0,C.jsx)(E.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"})}),key:"fileConfirm"},{label:(0,C.jsx)(E.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){y("/app/detail/file/".concat(n.id,"?tab=file"))}},{label:(0,C.jsx)(E.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){y("/app/detail/log/".concat(n.id,"?tab=log"))}},{label:(0,C.jsx)(E.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){y("/app/detail/stat/".concat(n.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,C.jsx)(L.Z,{}),disabled:!0}],Z=(0,O.useState)(M),F=W()(Z,2),H=F[0],z=F[1];(0,O.useEffect)(function(){v.show(),i(t);var P=function(){var x=f()(a()().mark(function Q(){var X,I,w,V;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=M,m.next=3,(0,$.aF)();case 3:return w=m.sent,N.canSeeContainerDomain||(I=I.filter(function(u){return u.key!="domain"})),w.data.plugin.explorer.isCreated||(I=I.filter(function(u){return u.key!="file"})),w.data.plugin.explorer.isCreated&&(I=I.filter(function(u){return u.key!="fileConfirm"})),m.next=9,(0,D.jV)({md5:(X=n.id)!==null&&X!==void 0?X:""});case 9:V=m.sent,I.map(function(u){return u.key=="containerName"&&(u.label=V.data.info.Name),(!V.data.info.State.Running||V.data.info.State.Restarting)&&(u.key=="file"||u.key=="fileConfirm"||u.key=="stat")&&(u.disabled=!0),u}),z(I),v.destroy();case 13:case"end":return m.stop()}},Q)}));return function(){return x.apply(this,arguments)}}();P()},[j]);var R=function(x){x.key!="fileConfirm"&&i(x.key)};return(0,C.jsxs)(A.Provider,{value:{reload:function(){k(j+1)}},children:[(0,C.jsx)(l.Z,{mode:"horizontal",onClick:R,selectedKeys:[r],items:H}),(0,C.jsx)(p.Outlet,{})]})}},2831:function(Y,U,e){e.d(U,{Ll:function(){return $},aF:function(){return W},d6:function(){return L}});var o=e(15009),a=e.n(o),K=e(99289),f=e.n(K),h=e(54006);function W(){return g.apply(this,arguments)}function g(){return g=f()(a()().mark(function T(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,h.request)("/api/common/home/info",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},T)})),g.apply(this,arguments)}function $(){return D.apply(this,arguments)}function D(){return D=f()(a()().mark(function T(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,h.request)("/api/common/home/usage",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},T)})),D.apply(this,arguments)}function L(){return p.apply(this,arguments)}function p(){return p=f()(a()().mark(function T(){return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,h.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},T)})),p.apply(this,arguments)}},60335:function(Y,U,e){e.d(U,{IE:function(){return $},IW:function(){return W},KK:function(){return l},LJ:function(){return C},Re:function(){return G},eE:function(){return T},jV:function(){return L}});var o=e(15009),a=e.n(o),K=e(99289),f=e.n(K),h=e(54006);function W(c){return g.apply(this,arguments)}function g(){return g=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/status",{method:"POST",data:d}));case 1:case"end":return n.stop()}},c)})),g.apply(this,arguments)}function $(c){return D.apply(this,arguments)}function D(){return D=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/get-list",{data:d,method:"POST"}));case 1:case"end":return n.stop()}},c)})),D.apply(this,arguments)}function L(c){return p.apply(this,arguments)}function p(){return p=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/get-detail",{data:d,method:"POST"}));case 1:case"end":return n.stop()}},c)})),p.apply(this,arguments)}function T(c){return E.apply(this,arguments)}function E(){return E=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/update",{data:d,method:"POST"}));case 1:case"end":return n.stop()}},c)})),E.apply(this,arguments)}function l(){return O.apply(this,arguments)}function O(){return O=f()(a()().mark(function c(){return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,h.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return v.stop()}},c)})),O.apply(this,arguments)}function C(c){return A.apply(this,arguments)}function A(){return A=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/export",{method:"POST",data:d,responseType:"blob"}));case 1:case"end":return n.stop()}},c)})),A.apply(this,arguments)}function G(c){return S.apply(this,arguments)}function S(){return S=f()(a()().mark(function c(d){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/container/commit",{method:"POST",data:d}));case 1:case"end":return n.stop()}},c)})),S.apply(this,arguments)}},86738:function(Y,U,e){e.d(U,{Z:function(){return ne}});var o=e(67294),a=e(21640),K=e(93967),f=e.n(K),h=e(21770),W=e(98423),g=e(53124),$=e(55241),D=e(86743),L=e(81643),p=e(14726),T=e(33671),E=e(10110),l=e(24457),O=e(66330),C=e(83559);const A=t=>{const{componentCls:s,iconCls:_,antCls:r,zIndexPopup:i,colorText:y,colorWarning:B,marginXXS:b,marginXS:j,fontSize:k,fontWeightStrong:N,colorTextHeading:M}=t;return{[s]:{zIndex:i,[`&${r}-popover`]:{fontSize:k},[`${s}-message`]:{marginBottom:j,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${s}-message-icon ${_}`]:{color:B,fontSize:k,lineHeight:1,marginInlineEnd:j},[`${s}-title`]:{fontWeight:N,color:M,"&:only-child":{fontWeight:"normal"}},[`${s}-description`]:{marginTop:b,color:y}},[`${s}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:j}}}}},G=t=>{const{zIndexPopupBase:s}=t;return{zIndexPopup:s+60}};var S=(0,C.I$)("Popconfirm",t=>A(t),G,{resetStyle:!1}),c=function(t,s){var _={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&s.indexOf(r)<0&&(_[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(_[r[i]]=t[r[i]]);return _};const d=t=>{const{prefixCls:s,okButtonProps:_,cancelButtonProps:r,title:i,description:y,cancelText:B,okText:b,okType:j="primary",icon:k=o.createElement(a.Z,null),showCancel:N=!0,close:M,onConfirm:Z,onCancel:F,onPopupClick:H}=t,{getPrefixCls:z}=o.useContext(g.E_),[R]=(0,E.Z)("Popconfirm",l.Z.Popconfirm),P=(0,L.Z)(i),x=(0,L.Z)(y);return o.createElement("div",{className:`${s}-inner-content`,onClick:H},o.createElement("div",{className:`${s}-message`},k&&o.createElement("span",{className:`${s}-message-icon`},k),o.createElement("div",{className:`${s}-message-text`},P&&o.createElement("div",{className:`${s}-title`},P),x&&o.createElement("div",{className:`${s}-description`},x))),o.createElement("div",{className:`${s}-buttons`},N&&o.createElement(p.ZP,Object.assign({onClick:F,size:"small"},r),B||(R==null?void 0:R.cancelText)),o.createElement(D.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,T.nx)(j)),_),actionFn:Z,close:M,prefixCls:z("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},b||(R==null?void 0:R.okText))))};var n=t=>{const{prefixCls:s,placement:_,className:r,style:i}=t,y=c(t,["prefixCls","placement","className","style"]),{getPrefixCls:B}=o.useContext(g.E_),b=B("popconfirm",s),[j]=S(b);return j(o.createElement(O.ZP,{placement:_,className:f()(b,r),style:i,content:o.createElement(d,Object.assign({prefixCls:b},y))}))},q=function(t,s){var _={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&s.indexOf(r)<0&&(_[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)s.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(_[r[i]]=t[r[i]]);return _};const J=o.forwardRef((t,s)=>{var _,r;const{prefixCls:i,placement:y="top",trigger:B="click",okType:b="primary",icon:j=o.createElement(a.Z,null),children:k,overlayClassName:N,onOpenChange:M,onVisibleChange:Z}=t,F=q(t,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:H}=o.useContext(g.E_),[z,R]=(0,h.Z)(!1,{value:(_=t.open)!==null&&_!==void 0?_:t.visible,defaultValue:(r=t.defaultOpen)!==null&&r!==void 0?r:t.defaultVisible}),P=(m,u)=>{R(m,!0),Z==null||Z(m),M==null||M(m,u)},x=m=>{P(!1,m)},Q=m=>{var u;return(u=t.onConfirm)===null||u===void 0?void 0:u.call(void 0,m)},X=m=>{var u;P(!1,m),(u=t.onCancel)===null||u===void 0||u.call(void 0,m)},I=(m,u)=>{const{disabled:re=!1}=t;re||P(m,u)},w=H("popconfirm",i),V=f()(w,N),[te]=S(w);return te(o.createElement($.Z,Object.assign({},(0,W.Z)(F,["title"]),{trigger:B,placement:y,onOpenChange:I,open:z,ref:s,overlayClassName:V,content:o.createElement(d,Object.assign({okType:b,icon:j},t,{prefixCls:w,close:x,onConfirm:Q,onCancel:X})),"data-popover-inject":!0}),k))});J._InternalPanelDoNotUseOrYouWillBeFired=n;var ne=J}}]);
