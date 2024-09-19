"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5808],{91058:function(y,B,e){var g=e(5574),s=e.n(g),x=e(89035),f=e(38345),h=e(17186),T=e(24739),I=e(5966),b=e(83062),O=e(14726),K=e(85576),c=e(67294),i=e(95089),E=e(85893),u="docker-image",W=(0,c.forwardRef)(function(C,P){var r=(0,c.useState)(u),n=s()(r,2),a=n[0],t=n[1],_=(0,c.useRef)(),p=(0,c.useState)(""),o=s()(p,2),d=o[0],v=o[1],M=function(){a!="code"?t("code"):t(u)};(0,c.useImperativeHandle)(P,function(){return{addEnvItem:function(l,D){var j,A=(j=_.current)===null||j===void 0?void 0:j.getList(),L=!1;if(A==null||A.map(function(Z){if(Z.name==l){L=!0;return}}),!L){var R;(R=_.current)===null||R===void 0||R.add({name:l,value:D})}},clear:function(){var l;(l=_.current)===null||l===void 0||(l=l.getList())===null||l===void 0||l.map(function(D,j){var A;(A=_.current)===null||A===void 0||A.remove(j)})}}});function F(m){try{for(var l,D,j=(l=(D=_.current)===null||D===void 0||(D=D.getList())===null||D===void 0?void 0:D.length)!==null&&l!==void 0?l:0,A=j;A>=0;A--){var L;(L=_.current)===null||L===void 0||L.remove(A)}var R=m.split(`
`),Z=0;R.map(function(H){var w,S=H.split("=");S.length<2||((w=_.current)===null||w===void 0||w.add({name:S[0],value:S.slice(1).join("=")},Z),Z++)})}catch(H){}}function U(){if(_){var m,l=(m=_.current)===null||m===void 0?void 0:m.getList();if(l){var D=[];return l.map(function(j){D.push("".concat(j.name,"=").concat(j.value))}),D.join(`
`)}else return""}else return""}return(0,E.jsxs)(f.Z,{title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,E.jsx)(b.Z,{title:"\u4EE3\u7801\u7F16\u8F91\u6A21\u5F0F",children:(0,E.jsx)(O.ZP,{icon:(0,E.jsx)(x.Z,{}),type:a=="code"?"primary":"default",onClick:M,children:"\u4EE3\u7801\u6A21\u5F0F"})}),children:[(0,E.jsx)(h.u,{name:"environment",actionRef:_,creatorButtonProps:C.showAddButton?{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"}:!1,copyIconProps:!1,min:0,children:(0,E.jsxs)(T.UW,{children:[(0,E.jsx)(I.Z,{width:C.showInDrawer?"sm":"md",name:"name",label:"\u53D8\u91CF\u540D",required:!0,rules:[{required:!0}],disabled:C.showDisableName,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D\u79F0"}),(0,E.jsx)(I.Z,{width:"md",name:"value",label:"\u53D8\u91CF\u503C",rules:[{required:!!C.requireValue}],placeholder:"\u8F93\u5165\u53D8\u91CF\u503C\uFF0C\u53EF\u4EE5\u4E3A\u7A7A"})]})}),(0,E.jsx)(K.Z,{width:"800px",open:a=="code",onCancel:function(){return t("docker-image")},onOk:function(){F(d),t("docker-image")},children:(0,E.jsx)(i.ZP,{onChange:function(l){return v(l)},value:U(),height:"680px",theme:"light"})})]})});B.Z=W},82034:function(y,B,e){var g=e(5574),s=e.n(g),x=e(35880),f=e(38345),h=e(52688),T=e(97462),I=e(17186),b=e(24739),O=e(5966),K=e(42075),c=e(67294),i=e(85893),E=(0,c.forwardRef)(function(u,W){var C=(0,c.useState)(""),P=s()(C,2),r=P[0],n=P[1],a=(0,c.useRef)(),t=(0,c.useContext)(x.Z),_=t.createFormRef;return(0,c.useImperativeHandle)(W,function(){return{setExposePort:function(o){if(o){var d,v,M=(d=(v=a.current)===null||v===void 0?void 0:v.getList())!==null&&d!==void 0?d:[];Object.keys(o).map(function(F){var U=!1;if(M.map(function(l){l.dest==F&&(U=!0)}),!U){var m;(m=a.current)===null||m===void 0||m.add({host:"",dest:F})}})}},setHostname:function(o){n(o)},addPortItem:function(o,d){var v,M=(v=a.current)===null||v===void 0?void 0:v.getList(),F=!1;if(M==null||M.map(function(m){if(m.host==o){F=!0;return}}),!F){var U;(U=a.current)===null||U===void 0||U.add({host:o,dest:d})}}}}),(0,i.jsx)(f.Z,{title:"\u7ED1\u5B9A\u7AEF\u53E3",tooltip:"\u8BBF\u95EE\u7AEF\u53E3\u7559\u7A7A\u65F6\u968F\u673A\u751F\u6210\u7AEF\u53E3\uFF0C\u5168\u90E8\u5220\u9664\u5219\u8868\u793A\u4E0D\u66B4\u9732\u7AEF\u53E3",headerBordered:!0,extra:(0,i.jsxs)(K.Z,{children:[u.showBindHost&&(0,i.jsx)(h.Z,{name:"useHostNetwork",fieldProps:{checkedChildren:"\u7ED1\u5B9AHost\u7F51\u7EDC",unCheckedChildren:"\u7ED1\u5B9AHost\u7F51\u7EDC",onChange:function(o){if(o){var d;(d=_.current)===null||d===void 0||d.setFieldsValue({bindIpV6:!1,publishAllPorts:!1})}}}}),u.showBindIpV6&&(0,i.jsx)(T.Z,{name:["siteName","useHostNetwork"],children:function(o){var d=o.useHostNetwork;return(0,i.jsx)(h.Z,{name:"publishAllPorts",fieldProps:{checkedChildren:"\u7ED1\u5B9A\u5168\u90E8\u7AEF\u53E3",unCheckedChildren:"\u7ED1\u5B9A\u5168\u90E8\u7AEF\u53E3"},disabled:d},"publishAllPorts")}}),u.showBindIpV6&&(0,i.jsx)(T.Z,{name:["siteName","useHostNetwork"],children:function(o){var d=o.useHostNetwork;return(0,i.jsx)(h.Z,{name:"bindIpV6",fieldProps:{checkedChildren:"IpV6",unCheckedChildren:"IpV6"},disabled:d},"bindIpV6")}})]}),children:(0,i.jsx)(T.Z,{name:["useHostNetwork","bindIpV6","publishAllPorts"],children:function(o){var d=o.useHostNetwork,v=o.bindIpV6,M=o.publishAllPorts;if(!d&&!M)return(0,i.jsx)(I.u,{name:"ports",actionRef:a,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u5BF9\u5916\u90E8\u8BBF\u95EE"},min:0,copyIconProps:!1,children:(0,i.jsxs)(b.UW,{children:[(0,i.jsx)(O.Z,{width:u.showInDrawer?"sm":"md",name:"host",label:"\u5916\u90E8\u8BBF\u95EE\u7AEF\u53E3",tooltip:"\u5BF9\u5916\u8BBF\u95EE\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u8BBF\u95EE\u7AEF\u53E3\u6216\u662F\u521B\u5EFA\u5B8C\u6210\u540E\u5BF9\u5BB9\u5668\u7ED1\u5B9A\u57DF\u540D",placeholder:"\u7559\u7A7A\u5C06\u4F7F\u7528\u968F\u673A\u7AEF\u53E3\uFF0C\u7ED1\u5B9AIpV6\u5FC5\u586B",required:v,rules:[{required:v}]}),(0,i.jsx)(O.Z,{label:"\u5BB9\u5668\u5185\u7AEF\u53E3",width:u.showInDrawer?"sm":"md",name:"dest",placeholder:"\u6784\u5EFA\u65F6 Expose \u6307\u5B9A\u7684\u7AEF\u53E3",required:!0,rules:[{required:!0}]})]})})}})})});B.Z=E},92067:function(y,B,e){e.d(B,{Z:function(){return W}});var g=e(15009),s=e.n(g),x=e(99289),f=e.n(x),h=e(60335),T=e(27496),I=e(64789),b=e(10641),O=e(42075),K=e(66309),c=e(46464),i=e(14726),E=e(67294),u=e(85893);function W(C){return(0,u.jsx)(b.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"names",render:function(r,n,a,t){return(0,u.jsx)(O.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Names.map(function(_){return _})},n.Id)}},{title:"\u7AEF\u53E3",dataIndex:"ports",search:!1,render:function(r,n,a,t){return n!=null&&n.Ports?(0,u.jsx)(O.Z,{direction:"vertical",style:{textAlign:"left"},children:n==null?void 0:n.Ports.map(function(_,p){return(0,u.jsx)(K.Z,{color:"#2db7f5",icon:_.PublicPort?(0,u.jsx)(T.Z,{}):"",children:"".concat(_.PublicPort?_.IP+":"+_.PublicPort+"->":"").concat(_.PrivatePort,"/").concat(_.Type)},p)})},n.Id):(0,u.jsx)(u.Fragment,{})}},{title:"\u8FD0\u884C\u5BB9\u5668",search:!1,render:function(r,n,a,t){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(c.Z.Text,{ellipsis:{tooltip:n.Image},children:n.Image},n.Id)})}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",ellipsis:!0,width:100,render:function(r,n,a,t){return[(0,u.jsx)(i.ZP,{type:"link",onClick:function(){(0,h.jV)({md5:n.Id}).then(function(p){return C.onSelect&&C.onSelect(p.data.info),!0})},children:(0,u.jsx)(I.Z,{})},n.Id)]}}],rowKey:"Id",request:function(){var P=f()(s()().mark(function r(n,a,t){return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",new Promise(function(o,d){(0,h.IE)({tag:n.names}).then(function(v){var M={data:v.data.list,success:!0,total:v.data.list.length};o(M)})}));case 1:case"end":return p.stop()}},r)}));return function(r,n,a){return P.apply(this,arguments)}}(),pagination:{pageSize:5}})}},35880:function(y,B,e){var g=e(67294),s=(0,g.createContext)({});B.Z=s},60335:function(y,B,e){e.d(B,{IE:function(){return b},IW:function(){return T},KK:function(){return u},LJ:function(){return C},eE:function(){return i},jV:function(){return K}});var g=e(15009),s=e.n(g),x=e(99289),f=e.n(x),h=e(54006);function T(r){return I.apply(this,arguments)}function I(){return I=f()(s()().mark(function r(n){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/container/status",{method:"POST",data:n}));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function b(r){return O.apply(this,arguments)}function O(){return O=f()(s()().mark(function r(n){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/container/get-list",{data:n,method:"POST"}));case 1:case"end":return t.stop()}},r)})),O.apply(this,arguments)}function K(r){return c.apply(this,arguments)}function c(){return c=f()(s()().mark(function r(n){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/container/get-detail",{data:n,method:"POST"}));case 1:case"end":return t.stop()}},r)})),c.apply(this,arguments)}function i(r){return E.apply(this,arguments)}function E(){return E=f()(s()().mark(function r(n){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/container/update",{data:n,method:"POST"}));case 1:case"end":return t.stop()}},r)})),E.apply(this,arguments)}function u(){return W.apply(this,arguments)}function W(){return W=f()(s()().mark(function r(){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,h.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return a.stop()}},r)})),W.apply(this,arguments)}function C(r){return P.apply(this,arguments)}function P(){return P=f()(s()().mark(function r(n){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,h.request)("/api/app/container/export",{method:"POST",data:n,responseType:"blob"}));case 1:case"end":return t.stop()}},r)})),P.apply(this,arguments)}}}]);