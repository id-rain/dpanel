"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{45605:function(ue,T,e){e.d(T,{Z:function(){return z}});var n=e(87462),C=e(67294),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},A=j,B=e(84089),M=function(J,V){return C.createElement(B.Z,(0,n.Z)({},J,{ref:V,icon:A}))},P=C.forwardRef(M),z=P},12795:function(ue,T,e){e.d(T,{G:function(){return ee}});var n=e(1413),C=e(4942),j=e(45605),A=e(28459),B=e(83062),M=e(93967),P=e.n(M),z=e(67294),R=e(98082),J=function(_){return(0,C.Z)({},_.componentCls,{display:"inline-flex",alignItems:"center",maxWidth:"100%","&-icon":{display:"block",marginInlineStart:"4px",cursor:"pointer","&:hover":{color:_.colorPrimary}},"&-title":{display:"inline-flex",flex:"1"},"&-subtitle ":{marginInlineStart:8,color:_.colorTextSecondary,fontWeight:"normal",fontSize:_.fontSize,whiteSpace:"nowrap"},"&-title-ellipsis":{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",wordBreak:"keep-all"}})};function V(c){return(0,R.Xj)("LabelIconTip",function(_){var d=(0,n.Z)((0,n.Z)({},_),{},{componentCls:".".concat(c)});return[J(d)]})}var v=e(85893),ee=z.memo(function(c){var _=c.label,d=c.tooltip,ne=c.ellipsis,oe=c.subTitle,se=(0,z.useContext)(A.ZP.ConfigContext),Y=se.getPrefixCls,w=Y("pro-core-label-tip"),ae=V(w),le=ae.wrapSSR,W=ae.hashId;if(!d&&!oe)return(0,v.jsx)(v.Fragment,{children:_});var te=typeof d=="string"||z.isValidElement(d)?{title:d}:d,de=(te==null?void 0:te.icon)||(0,v.jsx)(j.Z,{});return le((0,v.jsxs)("div",{className:P()(w,W),onMouseDown:function(K){return K.stopPropagation()},onMouseLeave:function(K){return K.stopPropagation()},onMouseMove:function(K){return K.stopPropagation()},children:[(0,v.jsx)("div",{className:P()("".concat(w,"-title"),W,(0,C.Z)({},"".concat(w,"-title-ellipsis"),ne)),children:_}),oe&&(0,v.jsx)("div",{className:"".concat(w,"-subtitle ").concat(W).trim(),children:oe}),d&&(0,v.jsx)(B.Z,(0,n.Z)((0,n.Z)({},te),{},{children:(0,v.jsx)("span",{className:"".concat(w,"-icon ").concat(W).trim(),children:de})}))]}))})},12044:function(ue,T,e){e.d(T,{j:function(){return j}});var n=e(34155),C=typeof n!="undefined"&&n.versions!=null&&n.versions.node!=null,j=function(){return typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.matchMedia!="undefined"&&!C}},60933:function(ue,T,e){e.r(T),e.d(T,{default:function(){return ne}});var n=e(15009),C=e.n(n),j=e(99289),A=e.n(j),B=e(5574),M=e.n(B),P=e(2831),z=e(90078),R=e(38345),J=e(9361),V=e(38925),v=e(25593),ee=e(42119),c=e(42075),_=e(67294),d=e(85893);function ne(){var oe=(0,_.useState)([]),se=M()(oe,2),Y=se[0],w=se[1],ae=(0,_.useState)(0),le=M()(ae,2),W=le[0],te=le[1],de=J.Z.useToken(),H=de.token;(0,_.useEffect)(function(){K({})},[]);var K=function(){var ge=A()(C()().mark(function ie(pe){var b,l,p,f,u;return C()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,P.d6)();case 2:b=o.sent,l="",b.data.info.Mounts.map(function(r){r.Type=="volume"&&(l=r.Name)}),p=Object.keys(b.data.info.HostConfig.PortBindings).map(function(r){return b.data.info.HostConfig.PortBindings[r].map(function(a){return"-p ".concat(a.HostPort,":").concat(String(parseInt(r)))})}),f=!1,u=b.data.info.HostConfig.Binds.map(function(r){return r.indexOf(":/dpanel")>-1&&(f=!0),"-v ".concat(r)}),f||(l="",b.data.info.Mounts.map(function(r){r.Type=="volume"&&(l=r.Name)}),u.push("-v "+l+":/dpanel")),w(["sudo docker stop ".concat(b.data.info.Name," && sudo docker rm ").concat(b.data.info.Name),"sudo docker rmi ".concat(b.data.info.Config.Image),"sudo docker pull ".concat(b.data.info.Config.Image),"sudo docker run -it -d --name ".concat(b.data.info.Name," --restart=always ").concat(p.join(" ")," ").concat(u.join(" ")," ").concat(b.data.info.Config.Image)+(b.data.info.NetworkSettings.Networks["dpanel-local"]?" && docker network connect dpanel-local ".concat(b.data.info.Name):"")]);case 10:case"end":return o.stop()}},ie)}));return function(pe){return ge.apply(this,arguments)}}();return(0,d.jsx)(z._z,{children:(0,d.jsxs)(R.Z,{direction:"column",children:[(0,d.jsx)(V.Z,{message:"\u8BF7\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB",showIcon:!0,description:(0,d.jsxs)("ol",{style:{marginLeft:"-20px"},children:[(0,d.jsx)("li",{children:"\u66F4\u65B0\u9762\u677F\u65F6\uFF0C\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u6267\u884C\u66F4\u65B0\u547D\u4EE4\u3002"}),(0,d.jsx)("li",{children:"\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u4F1A\u5220\u9664\u3001\u91CD\u5EFA\u9762\u677F\u5BB9\u5668\u3002\u5BFC\u81F4\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\uFF08Lite \u7248\u65E0\u5F71\u54CD\uFF09"}),(0,d.jsx)("li",{children:(0,d.jsx)(v.Z.Text,{type:"danger",children:"\u8BF7\u7ED1\u5B9A\u6216\u662F\u6302\u8F7D\u5BB9\u5668\u4E2D\u7684 /dpanel \u76EE\u5F55\u4E3A\u4E4B\u524D\u5B58\u50A8\u5377\u6216\u662F\u76EE\u5F55\uFF0C\u5426\u5219\u6570\u636E\u5C06\u4F1A\u4E22\u5931"})}),(0,d.jsx)("li",{children:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u955C\u50CF\u5305\u542B\u7248\u672C\u53F7\uFF0C\u4F8B\u5982\uFF1Adpanel/dpanel:1.1.0 \u8BF7\u624B\u52A8\u66F4\u6539\u955C\u50CF\u7248\u672C\u53F7"}),(0,d.jsx)("li",{children:"\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u8BF7\u52FF\u5173\u95ED\u5F53\u524D\u9875\u9762\uFF0C\u76F4\u5230\u66F4\u65B0\u5B8C\u6210\u3002"})]}),type:"warning",style:{marginBottom:"20px"}}),(0,d.jsxs)(R.Z,{split:"vertical",children:[(0,d.jsx)(R.Z,{colSpan:"20%",children:(0,d.jsx)(ee.Z,{onChange:function(ie){te(ie)},current:W,direction:"vertical",items:[{title:"\u505C\u6B62\u5BB9\u5668",description:"\u505C\u6B62\u5E76\u5220\u9664 dpanel \u5BB9\u5668"},{title:"\u66F4\u65B0\u955C\u50CF",description:"\u66F4\u65B0\u955C\u50CF\u6216\u662F\u5220\u9664\u955C\u50CF"},{title:"\u91CD\u5EFA\u5BB9\u5668",description:"\u6302\u8F7D\u5B58\u50A8\u91CD\u5EFA\u5BB9\u5668"}]})}),(0,d.jsx)(R.Z,{children:(0,d.jsxs)(v.Z.Paragraph,{style:{marginTop:20,padding:20,height:"200px",backgroundColor:H.colorFillAlter,borderRadius:H.borderRadiusLG,border:"1px dashed ".concat(H.colorBorder)},children:[W==0&&(0,d.jsx)(v.Z.Text,{copyable:!0,style:{fontSize:20,color:H.colorTextSecondary},children:Y[0]}),W==1&&(0,d.jsxs)(c.Z,{direction:"vertical",split:"\u6216",children:[(0,d.jsx)(v.Z.Text,{copyable:!0,style:{fontSize:20,color:H.colorTextSecondary},children:Y[1]}),(0,d.jsx)(v.Z.Text,{copyable:!0,style:{fontSize:20,color:H.colorTextSecondary},children:Y[2]})]}),W==2&&(0,d.jsx)(v.Z.Text,{copyable:!0,style:{fontSize:20,color:H.colorTextSecondary},children:Y[3]})]})})]})]})})}},2831:function(ue,T,e){e.d(T,{Ll:function(){return z},aF:function(){return M},d6:function(){return J}});var n=e(15009),C=e.n(n),j=e(99289),A=e.n(j),B=e(54006);function M(){return P.apply(this,arguments)}function P(){return P=A()(C()().mark(function v(){return C()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/common/home/info",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},v)})),P.apply(this,arguments)}function z(){return R.apply(this,arguments)}function R(){return R=A()(C()().mark(function v(){return C()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/common/home/usage",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},v)})),R.apply(this,arguments)}function J(){return V.apply(this,arguments)}function V(){return V=A()(C()().mark(function v(){return C()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,B.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},v)})),V.apply(this,arguments)}},38925:function(ue,T,e){e.d(T,{Z:function(){return u}});var n=e(67294),C=e(89739),j=e(4340),A=e(97937),B=e(21640),M=e(78860),P=e(93967),z=e.n(P),R=e(29372),J=e(64217),V=e(42550),v=e(96159),ee=e(53124),c=e(11568),_=e(14747),d=e(83559);const ne=(t,o,r,a,i)=>({background:t,border:`${(0,c.bf)(a.lineWidth)} ${a.lineType} ${o}`,[`${i}-icon`]:{color:r}}),oe=t=>{const{componentCls:o,motionDurationSlow:r,marginXS:a,marginSM:i,fontSize:g,fontSizeLG:S,lineHeight:D,borderRadiusLG:y,motionEaseInOutCirc:E,withDescriptionIconSize:L,colorText:G,colorTextHeading:X,withDescriptionPadding:m,defaultPadding:h}=t;return{[o]:Object.assign(Object.assign({},(0,_.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:h,wordWrap:"break-word",borderRadius:y,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:a,lineHeight:0},"&-description":{display:"none",fontSize:g,lineHeight:D},"&-message":{color:X},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${E}, opacity ${r} ${E},
        padding-top ${r} ${E}, padding-bottom ${r} ${E},
        margin-bottom ${r} ${E}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:m,[`${o}-icon`]:{marginInlineEnd:i,fontSize:L,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:a,color:X,fontSize:S},[`${o}-description`]:{display:"block",color:G}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},se=t=>{const{componentCls:o,colorSuccess:r,colorSuccessBorder:a,colorSuccessBg:i,colorWarning:g,colorWarningBorder:S,colorWarningBg:D,colorError:y,colorErrorBorder:E,colorErrorBg:L,colorInfo:G,colorInfoBorder:X,colorInfoBg:m}=t;return{[o]:{"&-success":ne(i,a,r,t,o),"&-info":ne(m,X,G,t,o),"&-warning":ne(D,S,g,t,o),"&-error":Object.assign(Object.assign({},ne(L,E,y,t,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},Y=t=>{const{componentCls:o,iconCls:r,motionDurationMid:a,marginXS:i,fontSizeIcon:g,colorIcon:S,colorIconHover:D}=t;return{[o]:{"&-action":{marginInlineStart:i},[`${o}-close-icon`]:{marginInlineStart:i,padding:0,overflow:"hidden",fontSize:g,lineHeight:(0,c.bf)(g),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:S,transition:`color ${a}`,"&:hover":{color:D}}},"&-close-text":{color:S,transition:`color ${a}`,"&:hover":{color:D}}}}},w=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var ae=(0,d.I$)("Alert",t=>[oe(t),se(t),Y(t)],w),le=function(t,o){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(t);i<a.length;i++)o.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(t,a[i])&&(r[a[i]]=t[a[i]]);return r};const W={success:C.Z,info:M.Z,error:j.Z,warning:B.Z},te=t=>{const{icon:o,prefixCls:r,type:a}=t,i=W[a]||null;return o?(0,v.wm)(o,n.createElement("span",{className:`${r}-icon`},o),()=>({className:z()(`${r}-icon`,{[o.props.className]:o.props.className})})):n.createElement(i,{className:`${r}-icon`})},de=t=>{const{isClosable:o,prefixCls:r,closeIcon:a,handleClose:i,ariaProps:g}=t,S=a===!0||a===void 0?n.createElement(A.Z,null):a;return o?n.createElement("button",Object.assign({type:"button",onClick:i,className:`${r}-close-icon`,tabIndex:0},g),S):null};var K=n.forwardRef((t,o)=>{const{description:r,prefixCls:a,message:i,banner:g,className:S,rootClassName:D,style:y,onMouseEnter:E,onMouseLeave:L,onClick:G,afterClose:X,showIcon:m,closable:h,closeText:$,closeIcon:Z,action:k,id:he}=t,Ce=le(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[me,ce]=n.useState(!1),Q=n.useRef(null);n.useImperativeHandle(o,()=>({nativeElement:Q.current}));const{getPrefixCls:fe,direction:q,alert:s}=n.useContext(ee.E_),I=fe("alert",a),[ve,Ee,U]=ae(I),ye=N=>{var F;ce(!0),(F=t.onClose)===null||F===void 0||F.call(t,N)},Se=n.useMemo(()=>t.type!==void 0?t.type:g?"warning":"info",[t.type,g]),je=n.useMemo(()=>typeof h=="object"&&h.closeIcon||$?!0:typeof h=="boolean"?h:Z!==!1&&Z!==null&&Z!==void 0?!0:!!(s!=null&&s.closable),[$,Z,h,s==null?void 0:s.closable]),xe=g&&m===void 0?!0:m,Pe=z()(I,`${I}-${Se}`,{[`${I}-with-description`]:!!r,[`${I}-no-icon`]:!xe,[`${I}-banner`]:!!g,[`${I}-rtl`]:q==="rtl"},s==null?void 0:s.className,S,D,U,Ee),Oe=(0,J.Z)(Ce,{aria:!0,data:!0}),be=n.useMemo(()=>{var N,F;return typeof h=="object"&&h.closeIcon?h.closeIcon:$||(Z!==void 0?Z:typeof(s==null?void 0:s.closable)=="object"&&(!((N=s==null?void 0:s.closable)===null||N===void 0)&&N.closeIcon)?(F=s==null?void 0:s.closable)===null||F===void 0?void 0:F.closeIcon:s==null?void 0:s.closeIcon)},[Z,h,$,s==null?void 0:s.closeIcon]),Ie=n.useMemo(()=>{const N=h!=null?h:s==null?void 0:s.closable;if(typeof N=="object"){const{closeIcon:F}=N;return le(N,["closeIcon"])}return{}},[h,s==null?void 0:s.closable]);return ve(n.createElement(R.ZP,{visible:!me,motionName:`${I}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:N=>({maxHeight:N.offsetHeight}),onLeaveEnd:X},(N,F)=>{let{className:x,style:O}=N;return n.createElement("div",Object.assign({id:he,ref:(0,V.sQ)(Q,F),"data-show":!me,className:z()(Pe,x),style:Object.assign(Object.assign(Object.assign({},s==null?void 0:s.style),y),O),onMouseEnter:E,onMouseLeave:L,onClick:G,role:"alert"},Oe),xe?n.createElement(te,{description:r,icon:t.icon,prefixCls:I,type:Se}):null,n.createElement("div",{className:`${I}-content`},i?n.createElement("div",{className:`${I}-message`},i):null,r?n.createElement("div",{className:`${I}-description`},r):null),k?n.createElement("div",{className:`${I}-action`},k):null,n.createElement(de,{isClosable:je,prefixCls:I,closeIcon:be,handleClose:ye,ariaProps:Ie}))}))}),ge=e(15671),ie=e(43144),pe=e(53640),b=e(60136),p=function(t){function o(){var r;return(0,ge.Z)(this,o),r=(0,pe.Z)(this,o,arguments),r.state={error:void 0,info:{componentStack:""}},r}return(0,b.Z)(o,t),(0,ie.Z)(o,[{key:"componentDidCatch",value:function(a,i){this.setState({error:a,info:i})}},{key:"render",value:function(){const{message:a,description:i,id:g,children:S}=this.props,{error:D,info:y}=this.state,E=(y==null?void 0:y.componentStack)||null,L=typeof a=="undefined"?(D||"").toString():a,G=typeof i=="undefined"?E:i;return D?n.createElement(K,{id:g,type:"error",message:L,description:n.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},G)}):S}}])}(n.Component);const f=K;f.ErrorBoundary=p;var u=f},7134:function(ue,T,e){e.d(T,{C:function(){return b}});var n=e(67294),C=e(93967),j=e.n(C),A=e(9220),B=e(42550),M=e(74443),P=e(53124),z=e(35792),R=e(98675),J=e(25378),v=n.createContext({}),ee=e(11568),c=e(14747),_=e(83559),d=e(83262);const ne=l=>{const{antCls:p,componentCls:f,iconCls:u,avatarBg:t,avatarColor:o,containerSize:r,containerSizeLG:a,containerSizeSM:i,textFontSize:g,textFontSizeLG:S,textFontSizeSM:D,borderRadius:y,borderRadiusLG:E,borderRadiusSM:L,lineWidth:G,lineType:X}=l,m=(h,$,Z)=>({width:h,height:h,borderRadius:"50%",[`&${f}-square`]:{borderRadius:Z},[`&${f}-icon`]:{fontSize:$,[`> ${u}`]:{margin:0}}});return{[f]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,c.Wf)(l)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:o,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:t,border:`${(0,ee.bf)(G)} ${X} transparent`,"&-image":{background:"transparent"},[`${p}-image-img`]:{display:"block"}}),m(r,g,y)),{"&-lg":Object.assign({},m(a,S,E)),"&-sm":Object.assign({},m(i,D,L)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},oe=l=>{const{componentCls:p,groupBorderColor:f,groupOverlapping:u,groupSpace:t}=l;return{[`${p}-group`]:{display:"inline-flex",[p]:{borderColor:f},"> *:not(:first-child)":{marginInlineStart:u}},[`${p}-group-popover`]:{[`${p} + ${p}`]:{marginInlineStart:t}}}},se=l=>{const{controlHeight:p,controlHeightLG:f,controlHeightSM:u,fontSize:t,fontSizeLG:o,fontSizeXL:r,fontSizeHeading3:a,marginXS:i,marginXXS:g,colorBorderBg:S}=l;return{containerSize:p,containerSizeLG:f,containerSizeSM:u,textFontSize:Math.round((o+r)/2),textFontSizeLG:a,textFontSizeSM:t,groupSpace:g,groupOverlapping:-i,groupBorderColor:S}};var Y=(0,_.I$)("Avatar",l=>{const{colorTextLightSolid:p,colorTextPlaceholder:f}=l,u=(0,d.IX)(l,{avatarBg:f,avatarColor:p});return[ne(u),oe(u)]},se),w=function(l,p){var f={};for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&p.indexOf(u)<0&&(f[u]=l[u]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,u=Object.getOwnPropertySymbols(l);t<u.length;t++)p.indexOf(u[t])<0&&Object.prototype.propertyIsEnumerable.call(l,u[t])&&(f[u[t]]=l[u[t]]);return f};const ae=(l,p)=>{const[f,u]=n.useState(1),[t,o]=n.useState(!1),[r,a]=n.useState(!0),i=n.useRef(null),g=n.useRef(null),S=(0,B.sQ)(p,i),{getPrefixCls:D,avatar:y}=n.useContext(P.E_),E=n.useContext(v),L=()=>{if(!g.current||!i.current)return;const x=g.current.offsetWidth,O=i.current.offsetWidth;if(x!==0&&O!==0){const{gap:re=4}=l;re*2<O&&u(O-re*2<x?(O-re*2)/x:1)}};n.useEffect(()=>{o(!0)},[]),n.useEffect(()=>{a(!0),u(1)},[l.src]),n.useEffect(L,[l.gap]);const G=()=>{const{onError:x}=l;(x==null?void 0:x())!==!1&&a(!1)},{prefixCls:X,shape:m,size:h,src:$,srcSet:Z,icon:k,className:he,rootClassName:Ce,alt:me,draggable:ce,children:Q,crossOrigin:fe}=l,q=w(l,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),s=(0,R.Z)(x=>{var O,re;return(re=(O=h!=null?h:E==null?void 0:E.size)!==null&&O!==void 0?O:x)!==null&&re!==void 0?re:"default"}),I=Object.keys(typeof s=="object"?s||{}:{}).some(x=>["xs","sm","md","lg","xl","xxl"].includes(x)),ve=(0,J.Z)(I),Ee=n.useMemo(()=>{if(typeof s!="object")return{};const x=M.c4.find(re=>ve[re]),O=s[x];return O?{width:O,height:O,fontSize:O&&(k||Q)?O/2:18}:{}},[ve,s]),U=D("avatar",X),ye=(0,z.Z)(U),[Se,je,xe]=Y(U,ye),Pe=j()({[`${U}-lg`]:s==="large",[`${U}-sm`]:s==="small"}),Oe=n.isValidElement($),be=m||(E==null?void 0:E.shape)||"circle",Ie=j()(U,Pe,y==null?void 0:y.className,`${U}-${be}`,{[`${U}-image`]:Oe||$&&r,[`${U}-icon`]:!!k},xe,ye,he,Ce,je),N=typeof s=="number"?{width:s,height:s,fontSize:k?s/2:18}:{};let F;if(typeof $=="string"&&r)F=n.createElement("img",{src:$,draggable:ce,srcSet:Z,onError:G,alt:me,crossOrigin:fe});else if(Oe)F=$;else if(k)F=k;else if(t||f!==1){const x=`scale(${f})`,O={msTransform:x,WebkitTransform:x,transform:x};F=n.createElement(A.Z,{onResize:L},n.createElement("span",{className:`${U}-string`,ref:g,style:Object.assign({},O)},Q))}else F=n.createElement("span",{className:`${U}-string`,style:{opacity:0},ref:g},Q);return delete q.onError,delete q.gap,Se(n.createElement("span",Object.assign({},q,{style:Object.assign(Object.assign(Object.assign(Object.assign({},N),Ee),y==null?void 0:y.style),q.style),className:Ie,ref:S}),F))};var W=n.forwardRef(ae),te=e(50344),de=e(96159),H=e(55241);const K=l=>{const{size:p,shape:f}=n.useContext(v),u=n.useMemo(()=>({size:l.size||p,shape:l.shape||f}),[l.size,l.shape,p,f]);return n.createElement(v.Provider,{value:u},l.children)};var ie=l=>{var p,f,u;const{getPrefixCls:t,direction:o}=n.useContext(P.E_),{prefixCls:r,className:a,rootClassName:i,style:g,maxCount:S,maxStyle:D,size:y,shape:E,maxPopoverPlacement:L,maxPopoverTrigger:G,children:X,max:m}=l,h=t("avatar",r),$=`${h}-group`,Z=(0,z.Z)(h),[k,he,Ce]=Y(h,Z),me=j()($,{[`${$}-rtl`]:o==="rtl"},Ce,Z,a,i,he),ce=(0,te.Z)(X).map((q,s)=>(0,de.Tm)(q,{key:`avatar-key-${s}`})),Q=(m==null?void 0:m.count)||S,fe=ce.length;if(Q&&Q<fe){const q=ce.slice(0,Q),s=ce.slice(Q,fe),I=(m==null?void 0:m.style)||D,ve=((p=m==null?void 0:m.popover)===null||p===void 0?void 0:p.trigger)||G||"hover",Ee=((f=m==null?void 0:m.popover)===null||f===void 0?void 0:f.placement)||L||"top",U=Object.assign(Object.assign({content:s},m==null?void 0:m.popover),{overlayClassName:j()(`${$}-popover`,(u=m==null?void 0:m.popover)===null||u===void 0?void 0:u.overlayClassName),placement:Ee,trigger:ve});return q.push(n.createElement(H.Z,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},U),n.createElement(W,{style:I},`+${fe-Q}`))),k(n.createElement(K,{shape:E,size:y},n.createElement("div",{className:me,style:g},q)))}return k(n.createElement(K,{shape:E,size:y},n.createElement("div",{className:me,style:g},ce)))};const pe=W;pe.Group=ie;var b=pe},53640:function(ue,T,e){e.d(T,{Z:function(){return A}});var n=e(61120),C=e(78814),j=e(82963);function A(B,M,P){return M=(0,n.Z)(M),(0,j.Z)(B,(0,C.Z)()?Reflect.construct(M,P||[],(0,n.Z)(B).constructor):M.apply(B,P))}}}]);