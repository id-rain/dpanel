"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3355],{28307:function(R,M,r){var b=r(5574),t=r.n(b),O=r(38345),s=r(97269),n=r(5966),f=r(62370),m=r(14726),D=r(85265),P=r(42075),i=r(34041),g=r(67294),T=r(80821),h=r(3393),v=r(97961),p=r(92754),o=r(54006),a=r(85893),E=(0,g.forwardRef)(function(u,c){var j=(0,g.useState)(!1),C=t()(j,2),I=C[0],B=C[1],y=(0,g.useRef)(),l=(0,g.useRef)();return(0,g.useImperativeHandle)(c,function(){return{upgradeImage:function(_){var e;return B(!0),(e=y.current)===null||e===void 0||e.setFieldValue("imageUrl",_),(0,h.Gb)({tag:_,type:"pull"})},setImageName:function(_){var e;B(!0),(e=y.current)===null||e===void 0||e.setFieldValue("imageUrl",_)}}}),[(0,a.jsx)(m.ZP,{type:u.buttonType?u.buttonType:"default",onClick:function(){var _,e;u.onClick&&u.onClick(),B(!0),(_=y.current)===null||_===void 0||_.resetFields(),(e=l.current)===null||e===void 0||e.setStart()},children:"\u62C9\u53D6\u65B0\u955C\u50CF"},"remoteBtn"),(0,a.jsxs)(D.Z,{forceRender:!0,open:I,title:"\u4E0B\u8F7D\u8FDC\u7A0B\u955C\u50CF",width:800,onClose:function(){return B(!1)},footer:!1,children:[(0,a.jsx)(O.Z,{children:(0,a.jsxs)(P.Z,{direction:"vertical",size:"middle",children:[(0,a.jsxs)("div",{children:["1\u3001\u955C\u50CF\u540D\u79F0\u4E2D\u4E0D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C \u9ED8\u8BA4\u4ECE ",(0,a.jsx)("a",{href:"https://hub.docker.com/",target:"_blank",children:"docker hub"})," \u4E2D\u4E0B\u8F7D\uFF0C \u4F60\u53EF\u4EE5\u5728\u4E0A\u9762",(0,a.jsx)("a",{href:"https://hub.docker.com/search?q=",target:"_blank",children:"\u3010\u67E5\u627E\u3011"}),"\u9700\u8981\u7684\u955C\u50CF"]}),(0,a.jsxs)("div",{children:["2\u3001\u955C\u50CF\u4E2D\u5305\u542B\u4ED3\u5E93\u5730\u5740\u65F6\uFF0C\u8BF7\u786E",(0,a.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u6DFB\u52A0\u3011"}),"\u8FC7\u8BE5\u4ED3\u5E93\uFF0C\u5E76\u6709 Pull \u6743\u9650"]}),(0,a.jsxs)("div",{children:["3\u3001\u53EF\u5728",(0,a.jsx)(o.Link,{to:"/image/registry",children:"\u3010\u4ED3\u5E93\u7BA1\u7406\u3011"}),"\u4E2D\u914D\u7F6E\u955C\u50CF\u7684\u52A0\u901F\u5730\u5740"]})]})}),(0,a.jsx)(O.Z,{title:"\u4E0B\u8F7D\u955C\u50CF",headerBordered:!0,children:(0,a.jsxs)(s.A,{submitter:!1,formRef:y,children:[(0,a.jsxs)(P.Z.Compact,{children:[(0,a.jsx)(n.Z,{width:400,name:"imageUrl",placeholder:"\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740"}),(0,a.jsx)(f.Z,{name:"platform",children:(0,a.jsx)(i.Z,{style:{width:150},placeholder:"\u9ED8\u8BA4\u5F53\u524D\u67B6\u6784",options:v.ii.map(function(d){return{label:d.name,value:d.name}})})}),(0,a.jsx)(T.Z,{action:function(){var _,e,U,F,A=(_=(e=y.current)===null||e===void 0?void 0:e.getFieldValue("imageUrl"))!==null&&_!==void 0?_:"";return(0,h.Gb)({tag:A,type:"pull",platform:(U=(F=y.current)===null||F===void 0?void 0:F.getFieldValue("platform"))!==null&&U!==void 0?U:"amd64"})},onSuccess:function(_){var e;(e=l.current)===null||e===void 0||e.setFinish(),B(!1),u.onFinish&&u.onFinish(_.data.tag)},messageSuccess:function(_){var e="\u62C9\u53D6\u6210\u529F";return _.data.proxyUrl&&(e+="\uFF0C\u4F7F\u7528\u4EE3\u7406 "+_.data.proxyUrl),e},children:"\u62C9\u53D6\u955C\u50CF"})]}),(0,a.jsx)(f.Z,{label:"\u4E0B\u8F7D\u8FDB\u5EA6",children:(0,a.jsx)(p.Z,{ref:l})})]})})]},"remoteDrawer")]});M.Z=E},80821:function(R,M,r){r.d(M,{Z:function(){return P}});var b=r(5574),t=r.n(b),O=r(24963),s=r(86738),n=r(14726),f=r(83062),m=r(67294),D=r(85893);function P(i){var g=(0,m.useState)(!1),T=t()(g,2),h=T[0],v=T[1],p=(0,m.useContext)(O.Z),o=p.lang,a=p.notice,E=p.message,u=function(){v(!0),i.action().then(function(j){if(v(!1),typeof i.onSuccess=="function"&&i.onSuccess(j),i.messageSuccess){var C="";typeof i.messageSuccess=="function"?C=i.messageSuccess(j):C=i.messageSuccess,C.indexOf(".")>-1&&(C=o(C)),i.asynced?E.info(C):E.success(C)}}).catch(function(j){v(!1),typeof i.onError=="function"&&i.onError(j)})};return i.confirm?(0,D.jsx)(s.Z,{style:{width:500},title:o("notification.title.tip"),description:i.confirm,onConfirm:u,okText:"Yes",cancelText:"No",children:(0,D.jsx)(n.ZP,{disabled:i.disabled,icon:i.icon,loading:h,danger:i.danger,type:i.type,children:i.children})}):(0,D.jsx)(f.Z,{title:i.tips,children:(0,D.jsx)(n.ZP,{disabled:i.disabled,icon:i.icon,loading:h,onClick:u,danger:i.danger,type:i.type,children:i.children})})}},92754:function(R,M,r){var b=r(5574),t=r.n(b),O=r(67294),s=r(54006),n=r(38703),f=r(85893),m=(0,O.forwardRef)(function(D,P){(0,O.useImperativeHandle)(P,function(){return{setFinish:function(){v({finish:{downloading:100,extracting:100}})},setStart:function(){v({start:{downloading:0,extracting:0}})}}});var i=(0,s.useModel)("subscriber");i.addDataHandler("imageDownload",function(){var p=i.getDataByType("imageDownload"),o=p.pop();o&&v(o.data)});var g=(0,O.useState)(),T=t()(g,2),h=T[0],v=T[1];return(0,O.useEffect)(function(){v({start:{downloading:0,extracting:0}})},[]),(0,f.jsx)(f.Fragment,{children:h&&Object.keys(h).map(function(p){return(0,f.jsx)(n.Z,{percent:h[p].downloading,success:{percent:h[p].extracting}},p)})})});M.Z=m},97961:function(R,M,r){r.d(M,{MF:function(){return p},_2:function(){return h},fN:function(){return m},hG:function(){return g},ii:function(){return f},vC:function(){return P}});var b=r(15009),t=r.n(b),O=r(99289),s=r.n(O),n=r(54006),f=[{name:"amd64",arch:"amd64"},{name:"arm64",arch:"arm64"},{name:"i386",arch:"386"},{name:"arm/v6",arch:"arm"},{name:"arm/v7",arch:"arm"},{name:"arm/v8",arch:"arm64"},{name:"ppc64le",arch:"ppc64le"},{name:"riscv64",arch:"riscv64"}];function m(a){return D.apply(this,arguments)}function D(){return D=s()(t()().mark(function a(E){return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,n.request)("/api/app/image/create-by-dockerfile",{method:"POST",data:E}));case 1:case"end":return c.stop()}},a)})),D.apply(this,arguments)}function P(a){return i.apply(this,arguments)}function i(){return i=s()(t()().mark(function a(E){return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,n.request)("/api/app/image/import-by-container-tar",{method:"POST",data:E}));case 1:case"end":return c.stop()}},a)})),i.apply(this,arguments)}function g(a){return T.apply(this,arguments)}function T(){return T=s()(t()().mark(function a(E){return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,n.request)("/api/app/image/import-by-image-tar",{method:"POST",data:E}));case 1:case"end":return c.stop()}},a)})),T.apply(this,arguments)}function h(a){return v.apply(this,arguments)}function v(){return v=s()(t()().mark(function a(E){return t()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,n.request)("/api/common/attach/delete",{method:"POST",data:E});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},a)})),v.apply(this,arguments)}function p(){return o.apply(this,arguments)}function o(){return o=s()(t()().mark(function a(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/get-template-list",{method:"POST"}));case 1:case"end":return u.stop()}},a)})),o.apply(this,arguments)}},3393:function(R,M,r){r.d(M,{Gb:function(){return D},Pn:function(){return T},Rb:function(){return v},YU:function(){return f},_U:function(){return i}});var b=r(15009),t=r.n(b),O=r(99289),s=r.n(O),n=r(54006);function f(o){return m.apply(this,arguments)}function m(){return m=s()(t()().mark(function o(a){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/get-detail",{method:"POST",data:a}));case 1:case"end":return u.stop()}},o)})),m.apply(this,arguments)}function D(o){return P.apply(this,arguments)}function P(){return P=s()(t()().mark(function o(a){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-remote",{method:"POST",data:a}));case 1:case"end":return u.stop()}},o)})),P.apply(this,arguments)}function i(o){return g.apply(this,arguments)}function g(){return g=s()(t()().mark(function o(a){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-add",{method:"POST",data:a}));case 1:case"end":return u.stop()}},o)})),g.apply(this,arguments)}function T(o){return h.apply(this,arguments)}function h(){return h=s()(t()().mark(function o(a){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/tag-delete",{method:"POST",data:a}));case 1:case"end":return u.stop()}},o)})),h.apply(this,arguments)}function v(o){return p.apply(this,arguments)}function p(){return p=s()(t()().mark(function o(a){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,n.request)("/api/app/image/export",{method:"POST",data:a,responseType:"blob"}));case 1:case"end":return u.stop()}},o)})),p.apply(this,arguments)}},18148:function(R,M,r){r.d(M,{$q:function(){return v},Fj:function(){return C},KG:function(){return f},KX:function(){return B},T8:function(){return T},Xn:function(){return i},ao:function(){return o},c5:function(){return c},c7:function(){return E}});var b=r(15009),t=r.n(b),O=r(99289),s=r.n(O),n=r(54006);function f(l){return m.apply(this,arguments)}function m(){return m=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),m.apply(this,arguments)}function D(l){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function l(d){return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),P.apply(this,arguments)}function i(l){return g.apply(this,arguments)}function g(){return g=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),g.apply(this,arguments)}function T(l){return h.apply(this,arguments)}function h(){return h=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),h.apply(this,arguments)}function v(l){return p.apply(this,arguments)}function p(){return p=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),p.apply(this,arguments)}function o(l){return a.apply(this,arguments)}function a(){return a=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),a.apply(this,arguments)}function E(){return u.apply(this,arguments)}function u(){return u=s()(t()().mark(function l(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,n.request)("/api/app/image/image-prune",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},l)})),u.apply(this,arguments)}function c(){return j.apply(this,arguments)}function j(){return j=s()(t()().mark(function l(){return t()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,n.request)("/api/app/image/build-prune",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},l)})),j.apply(this,arguments)}function C(l){return I.apply(this,arguments)}function I(){return I=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),I.apply(this,arguments)}function B(l){return y.apply(this,arguments)}function y(){return y=s()(t()().mark(function l(d){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,n.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return e.stop()}},l)})),y.apply(this,arguments)}},5251:function(R,M,r){r.d(M,{FI:function(){return t},ZM:function(){return O}});function b(s){return s.trim()}function t(s){var n="";s<.1*1024?n=s.toFixed(2)+"B":s<.1*1024*1024?n=(s/1024).toFixed(2)+"KB":s<1*1024*1024*1024?n=(s/(1024*1024)).toFixed(2)+"MB":n=(s/(1024*1024*1024)).toFixed(2)+"GB";var f=n+"",m=f.indexOf("."),D=f.substring(m+1,m+3);return D=="00"?f.substring(0,m)+f.substr(m+3,2):n}function O(s){if(s){var n=new Date(s),f=n.getFullYear()+"-",m=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",D=(n.getDate()<10?"0"+n.getDate():n.getDate())+" ",P=(n.getHours()<10?"0"+n.getHours():n.getHours())+":",i=(n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes())+":",g=n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds();return f+m+D+P+i+g}}}}]);
