"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8878],{75516:function(le,T,t){t.d(T,{Z:function(){return x}});var R=t(89035),u=t(37476),V=t(38345),c=t(97462),f=t(62370),D=t(54006),I=t(14726),L=t(63490),B=t(78045),l=t(67294),h=t(85893);function x(m){return(0,h.jsx)(u.Y,{trigger:(0,h.jsx)(I.ZP,{type:"dashed",icon:(0,h.jsx)(R.Z,{}),children:"Console"}),submitter:!1,children:(0,h.jsxs)(V.Z,{children:[(0,h.jsx)(c.Z,{name:["entryCmd"],children:function(o){var p=o.entryCmd,C=p?"/bin/"+p:"/bin/sh";return(0,h.jsx)(L.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",key:"name",dataIndex:"name",ellipsis:!0},{title:"\u5DE5\u4F5C\u76EE\u5F55",key:"workDir",dataIndex:"workDir"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",width:150},{title:"\u64CD\u4F5C",key:"status",width:150,render:function(S,g,j){return(0,h.jsx)(D.Link,{to:"/console/".concat(m.container.Id,"?cmd=").concat(encodeURIComponent(C),"&workDir=").concat(encodeURIComponent(m.workDir?m.workDir:m.container.Config.WorkingDir)),target:"_blank",children:"\u767B\u5F55"})}}],dataSource:[{key:1,name:m.container.Id,status:m.container.State.Status,workDir:m.workDir?m.workDir:m.container.Config.WorkingDir}],rowKey:"key",pagination:!1})}}),(0,h.jsx)(f.Z,{name:"entryCmd",label:"Shell\u73AF\u5883\uFF08\u4EC5\u505A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u767B\u5F55\u540E\u53EF\u5207\u6362\u81F3\u5176\u4ED6\u73AF\u5883\uFF09",style:{marginTop:15},initialValue:"sh",children:(0,h.jsxs)(B.ZP.Group,{children:[(0,h.jsx)(B.ZP,{value:"bash",children:"/bin/bash"}),(0,h.jsx)(B.ZP,{value:"sh",children:"/bin/sh"})]})})]})})}},80821:function(le,T,t){t.d(T,{Z:function(){return B}});var R=t(5574),u=t.n(R),V=t(24963),c=t(86738),f=t(14726),D=t(83062),I=t(67294),L=t(85893);function B(l){var h=(0,I.useState)(!1),x=u()(h,2),m=x[0],Y=x[1],o=(0,I.useContext)(V.Z),p=o.lang,C=o.notice,z=o.message,S=function(){Y(!0),l.action().then(function(j){if(Y(!1),typeof l.onSuccess=="function"&&l.onSuccess(j),l.messageSuccess){var E="";typeof l.messageSuccess=="function"?E=l.messageSuccess(j):E=l.messageSuccess,E.indexOf(".")>-1&&(E=p(E)),l.asynced?z.info(E):z.success(E)}}).catch(function(j){Y(!1),typeof l.onError=="function"&&l.onError(j)})};return l.confirm?(0,L.jsx)(c.Z,{style:{width:500},title:l.confirmTitle?l.confirmTitle:p("notification.title.tip"),description:l.confirm,onConfirm:S,okText:"Yes",cancelText:"No",children:(0,L.jsx)(f.ZP,{disabled:l.disabled,icon:l.icon,loading:m,danger:l.danger,type:l.type,children:l.children})}):(0,L.jsx)(D.Z,{title:l.tips,children:(0,L.jsx)(f.ZP,{disabled:l.disabled,icon:l.icon,loading:m,onClick:S,danger:l.danger,type:l.type,children:l.children})})}},78498:function(le,T,t){t.d(T,{Z:function(){return D}});var R=t(25035),u=t(42075),V=t(83062),c=t(67294),f=t(85893);function D(I){return(0,f.jsxs)(u.Z,{children:[I.title,(0,f.jsx)(V.Z,{title:I.help,children:(0,f.jsx)(R.Z,{})})]})}},24963:function(le,T,t){var R=t(67294),u=(0,R.createContext)({});T.Z=u},42196:function(le,T,t){t.r(T),t.d(T,{default:function(){return Ye}});var R=t(15009),u=t.n(R),V=t(99289),c=t.n(V),f=t(5574),D=t.n(f),I=t(14946),L=t(29158),B=t(48689),l=t(38345),h=t(10641),x=t(42075),m=t(25593),Y=t(83062),o=t(67294),p=t(80821),C=t(60335),z=t(64599),S=t.n(z),g=t(40717),j=t(184),E=t(14726),i=t(4798),n=t(85893);function ue(A){var U=(0,o.useRef)();return[(0,n.jsx)(j.a,{trigger:(0,n.jsx)(E.ZP,{type:"primary",icon:(0,n.jsx)(g.Z,{}),children:"\u52A0\u5165\u5DF2\u6709\u7F51\u7EDC"},"button"),width:800,formRef:U,title:"\u914D\u7F6E\u7F51\u7EDC",onFinish:function(){var K=c()(u()().mark(function b(_){var J,Z,M,$,W;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.network){e.next=19;break}Z=S()(_.network),e.prev=2,Z.s();case 4:if((M=Z.n()).done){e.next=11;break}return $=M.value,e.next=8,(0,I.HY)({name:$.name,containerName:A.containerName,containerAlise:$.alise,ipV4:$.ipV4});case 8:W=e.sent;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),Z.e(e.t0);case 16:return e.prev=16,Z.f(),e.finish(16);case 19:return!((J=U.current)===null||J===void 0)&&J.resetFields&&U.current.resetFields(),A.onSuccess&&A.onSuccess(),e.abrupt("return",!0);case 22:case"end":return e.stop()}},b,null,[[2,13,16,19]])}));return function(b){return K.apply(this,arguments)}}(),children:(0,n.jsx)(i.Z,{siteName:A.containerName})},"form")]}var d=t(78498);function P(A){var U=(0,o.useRef)();return(0,n.jsx)(l.Z,{title:(0,n.jsx)(L.Z,{}),subTitle:"\u5BB9\u5668\u5173\u8054\u4FE1\u606F",ghost:!0,extra:(0,n.jsx)(ue,{onSuccess:function(){var b,_;!((b=U.current)===null||b===void 0)&&b.reloadAndRest&&((_=U.current)===null||_===void 0||_.reloadAndRest())},containerName:A.containerName}),children:(0,n.jsx)(h.Z,{scroll:{x:"max-content"},rowKey:"key",actionRef:U,pagination:!1,options:!1,columns:[{title:"\u6240\u5C5E\u7F51\u7EDC",key:"name",dataIndex:"networkName",width:300},{title:"\u5BB9\u5668\u540D\u79F0",key:"containerName",dataIndex:"containerName"},{title:(0,n.jsx)(d.Z,{title:"hostname",help:"\u63D0\u4F9B\u5BB9\u5668\u5185\u90E8\u8BBF\u95EE"}),key:"hostName",render:function(b,_,J){return _.hostName?(0,n.jsx)(x.Z,{direction:"vertical",children:_.hostName.map(function(Z){if(Z)return(0,n.jsx)(m.Z.Text,{copyable:!0,keyboard:!0,children:Z},Z)})}):(0,n.jsx)(n.Fragment,{})}},{title:"Ip",key:"ip",render:function(b,_,J,Z,M){return(0,n.jsxs)(x.Z,{direction:"vertical",children:[(0,n.jsx)("span",{children:_.networkInfo.IPv4Address}),_.networkInfo.IPv6Address&&(0,n.jsx)("span",{children:_.networkInfo.IPv6Address})]})}},{title:"\u64CD\u4F5C",key:"option",width:100,render:function(b,_,J,Z,M){return(0,n.jsx)(x.Z,{children:_.key!="bridge"&&_.key!="none"&&_.key!="host"&&_.networkName!=""&&(0,n.jsx)(Y.Z,{title:"\u9000\u51FA\u7F51\u7EDC",children:(0,n.jsx)(p.Z,{confirm:"\u786E\u8BA4\u9000\u51FA\u8BE5\u7F51\u7EDC\uFF1F",type:"link",action:function(){var W;return(0,I.t9)({name:_.networkName,containerName:(W=A.containerName)!==null&&W!==void 0?W:""})},messageSuccess:"\u9000\u51FA\u6210\u529F",onSuccess:function(){var W,F;!((W=U.current)===null||W===void 0)&&W.reloadAndRest&&((F=U.current)===null||F===void 0||F.reloadAndRest())},children:(0,n.jsx)(B.Z,{})})})})}}],request:function(){var K=c()(u()().mark(function b(_,J,Z){var M,$;return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,C.jV)({md5:A.containerName});case 2:return M=F.sent,F.next=5,(0,I._3)({name:Object.keys(M.data.info.NetworkSettings.Networks)});case 5:return $=F.sent,F.abrupt("return",{data:$.data.list,success:!0,total:$.data.list.length});case 7:case"end":return F.stop()}},b)}));return function(b,_,J){return K.apply(this,arguments)}}(),search:!1,expandable:{defaultExpandAllRows:!0,expandRowByClick:!1,defaultExpandedRowKeys:["bridge"]}})})}var H=t(44771);function a(A){return(0,n.jsx)(m.Z.Text,{copyable:!0,children:A.title})}var je=t(62597),Ie=t(43425),pe=t(74842),oe=t(87784),ye=t(33160),_e=t(30159),Ce=t(58638),xe=t(66659),ge=t(86548),Fe=t(57132),Pe=t(45605),Oe=t(238),De=t(32319),be=t(16664),q=t(97269),se=t(62370),ee=t(54006),de=t(96074),G=t(84567),he=t(65233),v=t(26412),Be=t(66309),ae=t(93162),k=t(87662),Re=t(75516),Le=t(28031),ke=t(85576),Ue=t(63490),We=t(37476),Ne=t(86615),Ke=t(97462),$e=t(5966),we=t(2831);function Ve(A){var U=ke.Z.useModal(),K=D()(U,2),b=K[0],_=K[1],J=(0,o.useState)(),Z=D()(J,2),M=Z[0],$=Z[1],W=(0,o.useRef)(),F="";return(0,o.useEffect)(function(){var e,ne;(0,we.aF)().then(function(Q){$(Q.data.dpanel.containerInfo)}),F=(e=localStorage.getItem("backupPath"))!==null&&e!==void 0?e:"",(ne=W.current)===null||ne===void 0||ne.setFieldValue("backupPath",F)},[]),(0,n.jsxs)(n.Fragment,{children:[_,(0,n.jsxs)(We.Y,{modalProps:{forceRender:!0},formRef:W,title:"\u5907\u4EFD\u5BB9\u5668\u5B58\u50A8\u5377",trigger:(0,n.jsxs)(E.ZP,{children:[(0,n.jsx)(xe.Z,{})," \u5907\u4EFD\u5B58\u50A8"]}),onFinish:function(){var e=c()(u()().mark(function ne(Q){var ce,X;return u()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return Q.backupPath&&localStorage.setItem("backupPath",Q.backupPath),ce={containerMd5:A.container.Id,backupTargetType:Q.backupTargetType,backupPath:Q.backupPath},Q.backupTargetType=="dpanel"&&M&&M.Mounts&&M.Mounts.map(function(re){re.Destination=="/dpanel"&&(ce.backupPath=re.Type=="volume"?re.Name:ce.backupPath=re.Source)}),ie.next=5,(0,Le.vp)(ce);case 5:return X=ie.sent,b.info({title:"\u6B63\u5728\u5907\u4EFD\u5B58\u50A8\u4E2D",content:(0,n.jsx)(l.Z,{ghost:!0,style:{paddingTop:30},children:(0,n.jsx)(Ue.Z,{columns:[{title:"\u5907\u4EFD\u6587\u4EF6",key:"backup",dataIndex:"backup",width:300,render:function(Ze,ve,te){return(0,n.jsx)(m.Z.Paragraph,{ellipsis:{rows:5,expandable:!0},children:ve.backupTar})}},{title:"\u5907\u4EFD\u76EE\u5F55",key:"pathList",dataIndex:"pathList",render:function(Ze,ve,te){return ve.pathList.map(function(Ee,Te){return(0,n.jsx)("div",{children:Ee},Te)})}}],dataSource:[{key:1,backupTar:X.data.backupTar,pathList:X.data.pathList}],rowKey:"key",pagination:!1})}),closable:!0,width:800}),ie.abrupt("return",!0);case 8:case"end":return ie.stop()}},ne)}));return function(ne){return e.apply(this,arguments)}}(),children:[(0,n.jsx)(Ne.Z.Group,{label:"\u5907\u4EFD\u76EE\u6807\u4F4D\u7F6E",name:"backupTargetType",initialValue:"dpanel",fieldProps:{defaultValue:"dpanel"},options:[{label:"DPanel \u5907\u4EFD\u76EE\u5F55\u4E2D",value:"dpanel"},{label:"\u5BBF\u4E3B\u673A\u76EE\u5F55\u4E2D",value:"host"}]}),(0,n.jsx)(Ke.Z,{name:["backupTargetType"],children:function(ne){var Q=ne.backupTargetType;return Q=="host"?(0,n.jsx)($e.Z,{label:"\u6307\u5B9A\u5BBF\u4E3B\u673A\u76EE\u5F55",tooltip:"\u8BF7\u586B\u5199\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u4E0D\u5B58\u65F6\u4F1A\u65B0\u5EFA",name:"backupPath",placeholder:"/home/backup",initialValue:"/home/backup"}):(0,n.jsxs)(n.Fragment,{children:["\u5907\u4EFD\u4F4D\u4E8E DPanel \u5BB9\u5668\u4E2D\u7684 /dpanel/backup \u8DEF\u5F84 ",(0,n.jsx)(ee.Link,{target:"_blank",to:"/app/detail/file/".concat(M==null?void 0:M.Id,"?tab=file&path=").concat(encodeURIComponent("/dpanel/backup")),children:"\u67E5\u770B"})]})}})]})]})}var Se=t(78451),He=t(24963),Ge=t(50070);function Ye(){var A,U,K,b=(0,o.useContext)(He.Z),_=b.message,J=b.notice,Z=b.loading,M=(0,o.useContext)(Ge.AppDetailContext),$=(0,ee.useParams)(),W=(0,o.useState)(),F=D()(W,2),e=F[0],ne=F[1],Q=(0,o.useState)(1),ce=D()(Q,2),X=ce[0],me=ce[1],ie=(0,ee.useNavigate)(),re=(0,o.useRef)(),Ze=(0,o.useState)({deleteImage:!1,deleteVolume:!1,deleteLink:!1}),ve=D()(Ze,2),te=ve[0],Ee=ve[1],Te=(0,o.useState)(""),Ae=D()(Te,2),ze=Ae[0],Je=Ae[1],Me=(0,o.useRef)();return(0,o.useEffect)(function(){var s;Z.show(),M.reload(),(0,C.jV)({md5:(s=$.id)!==null&&s!==void 0?s:""}).then(function(r){var O;r.data&&(r.data.info.HostConfig.NetworkMode=="host"&&r.data.info.Config.ExposedPorts&&Object.keys(r.data.info.Config.ExposedPorts).map(function(y){r.data.info.NetworkSettings.Ports[y]=[{HostIp:"0.0.0.0",HostPort:y.substring(0,y.indexOf("/"))}]}),ne(r.data.info)),(O=re.current)===null||O===void 0||O.setFieldValue("restart",r.data.info.HostConfig.RestartPolicy.Name)}).finally(function(){Z.destroy()}),(0,k.pe)({groupName:"setting",name:"server"}).then(function(r){r.data.setting.value.serverIp&&Je(r.data.setting.value.serverIp)})},[X]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(l.Z,{direction:"column",gutter:[0,10],children:[(0,n.jsx)(l.Z,{title:(0,n.jsx)(Ie.Z,{}),subTitle:"\u5E38\u7528\u64CD\u4F5C",ghost:!0,children:(0,n.jsxs)(x.Z,{wrap:!0,children:[(0,n.jsx)(p.Z,{icon:(0,n.jsx)(pe.Z,{}),action:function(){var r;return(0,C.IW)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",operate:"start"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return me(X+1)},disabled:e&&e.State.Running||e&&e.State.Paused,children:"\u542F\u52A8"}),(0,n.jsx)(p.Z,{action:function(){var r;return(0,C.IW)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",operate:"stop"})},messageSuccess:"\u505C\u6B62\u6210\u529F",icon:(0,n.jsx)(oe.Z,{}),onSuccess:function(){return me(X+1)},disabled:e&&e.State.Dead,children:"\u505C\u6B62"}),(0,n.jsx)(p.Z,{action:function(){var r;return(0,C.IW)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",operate:"restart"})},messageSuccess:"\u91CD\u542F\u6210\u529F",onSuccess:function(){return me(X+1)},icon:(0,n.jsx)(ye.Z,{}),children:"\u91CD\u542F"}),(0,n.jsx)(p.Z,{action:function(){var r;return(0,C.IW)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",operate:"pause"})},messageSuccess:"\u6682\u505C\u6210\u529F",onSuccess:function(){return me(X+1)},icon:(0,n.jsx)(_e.Z,{}),disabled:e&&!e.State.Running,children:"\u6682\u505C"}),(0,n.jsx)(p.Z,{action:function(){var r;return(0,C.IW)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",operate:"unpause"})},messageSuccess:"\u542F\u52A8\u6210\u529F",onSuccess:function(){return me(X+1)},icon:(0,n.jsx)(pe.Z,{}),disabled:e&&!e.State.Paused,children:"\u6062\u590D"}),(0,n.jsx)(de.Z,{type:"vertical"}),e&&(0,n.jsx)(Re.Z,{container:e}),(0,n.jsx)(de.Z,{type:"vertical"}),e&&(!e.Config.Labels||!e.Config.Labels["com.docker.compose.project"])&&(0,n.jsx)(p.Z,{action:function(){var r;return(0,je.Ct)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",deleteImage:te.deleteImage,deleteVolume:te.deleteVolume})},messageSuccess:"\u5220\u9664\u6210\u529F",danger:!0,type:"primary",icon:(0,n.jsx)(oe.Z,{}),onSuccess:function(){return ie("/app/list")},confirm:(0,n.jsxs)(x.Z,{style:{width:280},direction:"vertical",children:[(0,n.jsx)(m.Z.Text,{children:"\u5220\u9664\u5BB9\u5668\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,n.jsx)(G.Z,{name:"deleteVolume",onChange:function(r){return Ee({deleteImage:te.deleteImage,deleteVolume:r.target.checked,deleteLink:te.deleteLink})},children:"\u5220\u9664\u5B58\u50A8\uFF1F"}),(0,n.jsx)(G.Z,{name:"deleteImage",onChange:function(r){return Ee({deleteImage:r.target.checked,deleteVolume:te.deleteVolume,deleteLink:te.deleteLink})},children:"\u5220\u9664\u955C\u50CF\uFF1F"}),(0,n.jsx)(G.Z,{name:"deleteLink",onChange:function(r){return Ee({deleteImage:te.deleteVolume,deleteVolume:te.deleteVolume,deleteLink:r.target.checked})},children:"\u5220\u9664\u5173\u8054\u5BB9\u5668\uFF1F"})]}),children:"\u5220\u9664"}),(0,n.jsx)(p.Z,{icon:(0,n.jsx)(Ce.Z,{}),action:function(){var r;return(0,C.LJ)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:""})},onSuccess:function(r){var O=new Blob([r],{type:"application/tar"});(0,ae.saveAs)(O,(e==null?void 0:e.Id)+".tar")},messageSuccess:"\u5BFC\u51FA\u6210\u529F",children:"\u5BFC\u51FA"}),(0,n.jsx)(p.Z,{icon:(0,n.jsx)(xe.Z,{}),action:c()(u()().mark(function s(){var r,O,y;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,(0,C.Re)({md5:(r=e==null?void 0:e.Id)!==null&&r!==void 0?r:"",name:(O=(y=Me.current)===null||y===void 0?void 0:y.getFieldValue("saveImageName"))!==null&&O!==void 0?O:e==null?void 0:e.Name});case 2:case"end":return w.stop()}},s)})),confirmTitle:"\u955C\u50CF\u540D\u79F0",confirm:(0,n.jsx)(x.Z,{style:{width:280},direction:"vertical",children:(0,n.jsx)(q.A,{formRef:Me,submitter:!1,children:(0,n.jsx)(se.Z,{name:"saveImageName",children:(0,n.jsx)(he.Z,{placeholder:"\u9ED8\u8BA4\u4E3A\u5BB9\u5668\u955C\u50CF\u540D\u79F0"})})})}),messageSuccess:"\u4FDD\u5B58\u6210\u529F",children:"\u53E6\u5B58\u4E3A\u955C\u50CF"}),e&&(0,n.jsx)(Ve,{container:e}),(0,n.jsx)(de.Z,{type:"vertical"}),(0,n.jsx)(ee.Link,{to:"/app/create/image?containerId=".concat(e==null?void 0:e.Id,"&op=update"),children:(0,n.jsx)(E.ZP,{type:"primary",icon:(0,n.jsx)(ge.Z,{}),children:"\u66F4\u65B0\u5BB9\u5668"})}),(0,n.jsx)(ee.Link,{to:"/app/create/image?containerId=".concat(e==null?void 0:e.Id,"&op=copy"),children:(0,n.jsx)(E.ZP,{icon:(0,n.jsx)(Fe.Z,{}),children:"\u590D\u5236"})})]})}),(0,n.jsx)(l.Z,{title:(0,n.jsx)(Pe.Z,{}),subTitle:"\u5BB9\u5668\u72B6\u6001",ghost:!0,children:(0,n.jsxs)(v.Z,{column:1,bordered:!0,children:[(0,n.jsx)(v.Z.Item,{label:"ID",children:(0,n.jsx)(a,{title:e==null?void 0:e.Id})}),(0,n.jsx)(v.Z.Item,{label:"\u5BB9\u5668\u540D\u79F0",children:(0,n.jsx)(m.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u5BB9\u5668\u540D\u79F0",onChange:function(){var s=c()(u()().mark(function O(y){var N;return u()().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:if(e!=null&&e.Id){fe.next=2;break}return fe.abrupt("return");case 2:return fe.next=4,(0,C.eE)({md5:e.Id,name:y});case 4:N=fe.sent,me(X+1),_.success("\u4FEE\u6539\u5BB9\u5668\u540D\u79F0");case 7:case"end":return fe.stop()}},O)}));function r(O){return s.apply(this,arguments)}return r}()},children:e&&e.Name})}),(0,n.jsx)(v.Z.Item,{label:(0,n.jsx)(d.Z,{title:"\u7F51\u7EDC",help:"\u9ED8\u8BA4\u7F51\u7EDC\u53EA\u652F\u6301\u901A\u8FC7ip\u8BBF\u95EE,ip\u4F1A\u968F\u7740\u5BB9\u5668\u542F\u52A8\u505C\u6B62\u6539\u53D8.\u5982\u679C\u9700\u8981\u5728\u5BB9\u5668\u5185\u4E92\u8054,\u8BF7\u901A\u8FC7\u3010\u7F16\u8F91\u7AD9\u70B9\u3011-\u3010\u6DFB\u52A0\u5173\u8054\u3011"}),children:(e==null?void 0:e.State.Running)&&(0,n.jsxs)(v.Z,{column:1,bordered:!0,children:[e.NetworkSettings.Networks&&Object.keys(e.NetworkSettings.Networks).map(function(s,r){return(0,n.jsx)(v.Z.Item,{label:s,children:s=="host"?" Host \u7F51\u7EDC\uFF0C\u4E0E\u5BBF\u4E3B\u673A\u5171\u7528\u540C\u4E00\u7F51\u7EDC":(0,n.jsxs)(x.Z,{direction:"vertical",children:[(0,n.jsx)(a,{title:e==null?void 0:e.NetworkSettings.Networks[s].IPAddress}),e==null?void 0:e.NetworkSettings.Networks[s].Gateway,e==null?void 0:e.NetworkSettings.Networks[s].MacAddress]})},"1")}),e.HostConfig.ExtraHosts&&(0,n.jsx)(v.Z.Item,{label:"\u5BBF\u4E3B\u673A\u7F51\u7EDC",children:(0,n.jsx)(x.Z,{direction:"vertical",children:e.HostConfig.ExtraHosts.map(function(s){if(s.indexOf(":")>-1){var r=s.split(":");return(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(a,{title:r[0]})," - ",r[1]]})}})})},"1")]})}),(0,n.jsx)(v.Z.Item,{label:"\u72B6\u6001",children:e==null?void 0:e.State.Status}),(0,n.jsx)(v.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((A=e==null?void 0:e.Created)!==null&&A!==void 0?A:"").toLocaleString()}),(0,n.jsx)(v.Z.Item,{label:"\u542F\u52A8\u65F6\u95F4",children:new Date((U=e==null?void 0:e.State.StartedAt)!==null&&U!==void 0?U:"").toLocaleString()}),(0,n.jsx)(v.Z.Item,{label:"\u91CD\u542F\u7B56\u7565",children:(0,n.jsx)(q.A,{onFinish:function(){var s=c()(u()().mark(function r(O){var y;return u()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(e!=null&&e.Id){w.next=2;break}return w.abrupt("return");case 2:return w.next=4,(0,C.eE)({md5:e.Id,restart:O.restart});case 4:return y=w.sent,_.success("\u4FEE\u6539\u91CD\u542F\u7B56\u7565\u6210\u529F"),w.abrupt("return");case 7:case"end":return w.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),formRef:re,children:(0,n.jsx)(H.Z,{defaultValue:e==null?void 0:e.HostConfig.RestartPolicy.Name})})})]})}),e&&e.Mounts&&e.Mounts.length>0&&(0,n.jsx)(l.Z,{title:(0,n.jsx)(Oe.Z,{}),subTitle:"\u6301\u4E45\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,n.jsx)(v.Z,{column:1,bordered:!0,children:e==null?void 0:e.Mounts.map(function(s,r){return(0,n.jsx)(v.Z.Item,{labelStyle:{width:"30%"},label:s.Type=="volume"?(0,n.jsx)(Se.Z,{content:s.Name}):s.Source,children:(0,n.jsxs)(ee.Link,{target:"_blank",to:"/app/detail/file/".concat(e.Id,"?tab=file&path=").concat(encodeURIComponent(s.Destination)),children:[s.Destination," ",(0,n.jsx)(De.Z,{})]})},r)})})}),(0,n.jsx)(l.Z,{title:(0,n.jsx)(be.Z,{}),subTitle:"\u955C\u50CF\u8BE6\u60C5",ghost:!0,children:(0,n.jsxs)(v.Z,{labelStyle:{width:"200px"},column:1,bordered:!0,children:[(0,n.jsx)(v.Z.Item,{label:"Image Tag",children:(0,n.jsx)(ee.Link,{target:"_blank",to:"/image/detail/"+(e==null?void 0:e.Image),children:e==null?void 0:e.Config.Image})}),(0,n.jsx)(v.Z.Item,{label:"Image",children:e==null?void 0:e.Image}),(0,n.jsx)(v.Z.Item,{label:"Port",children:(0,n.jsx)(x.Z,{direction:"vertical",children:(e==null?void 0:e.NetworkSettings.Ports)&&Object.keys(e.NetworkSettings.Ports).map(function(s){var r,O=(r=e==null?void 0:e.NetworkSettings.Ports[s])!==null&&r!==void 0?r:[{HostPort:null,HostIp:""}];return O.map(function(y){var N=ze;return N!=""&&N.indexOf(":")>-1&&(N="[".concat(N,"]")),N==""&&y.HostIp=="::"&&(N="[::1]"),N==""&&y.HostIp=="0.0.0.0"&&(N="127.0.0.1"),N==""&&(N=y.HostIp),(0,n.jsxs)(x.Z.Compact,{children:[(0,n.jsxs)(Be.Z,{color:y.HostPort?"success":"",children:[y.HostPort?"".concat(y.HostIp,":").concat(y.HostPort," ->"):"",s]},s),y.HostPort?(0,n.jsx)("a",{href:"http://".concat(N,":").concat(y.HostPort),target:"_blank",children:(0,n.jsx)(L.Z,{})}):""]})})})})}),(0,n.jsx)(v.Z.Item,{label:"CMD",children:(e==null?void 0:e.Config.Cmd)&&(e==null?void 0:e.Config.Cmd.join(" "))}),(0,n.jsx)(v.Z.Item,{label:"ENTRYPOINT",children:e==null?void 0:e.Config.Entrypoint}),(0,n.jsx)(v.Z.Item,{label:"ENV",children:(0,n.jsx)(v.Z,{column:1,bordered:!0,children:(e==null?void 0:e.Config.Env)&&e.Config.Env.map(function(s,r){var O=s.split("=");return(0,n.jsx)(v.Z.Item,{label:O[0],children:(0,n.jsx)(Se.Z,{content:O.slice(1).join("=")})},r)})})}),(0,n.jsx)(v.Z.Item,{label:"Labels",children:(0,n.jsx)(v.Z,{column:1,bordered:!0,children:e&&Object.keys(e.Config.Labels).map(function(s){return(0,n.jsx)(v.Z.Item,{label:s,children:(0,n.jsx)(m.Z.Text,{style:{width:"400px"},ellipsis:{tooltip:e.Config.Labels[s]},children:e.Config.Labels[s]})},s)})})})]})}),(e==null?void 0:e.Name)&&(0,n.jsx)(P,{containerName:(K=e==null?void 0:e.Name)!==null&&K!==void 0?K:""})]})})}},50070:function(le,T,t){t.r(T),t.d(T,{AppDetailContext:function(){return C},default:function(){return z}});var R=t(15009),u=t.n(R),V=t(99289),c=t.n(V),f=t(5574),D=t.n(f),I=t(24963),L=t(2831),B=t(60335),l=t(41123),h=t(54006),x=t(86738),m=t(25593),Y=t(50136),o=t(67294),p=t(85893),C=(0,o.createContext)({});function z(){var S,g=(0,o.useContext)(I.Z),j=g.lang,E=g.loading,i=(0,h.useParams)(),n=(0,h.useSearchParams)(),ue=D()(n,2),d=ue[0],P=ue[1],H=(S=d.get("tab"))!==null&&S!==void 0?S:"edit",a=(0,o.useState)("edit"),je=D()(a,2),Ie=je[0],pe=je[1],oe=(0,h.useNavigate)(),ye=(0,o.useState)(1),_e=D()(ye,2),Ce=_e[0],xe=_e[1],ge=[{label:(0,p.jsx)(h.Link,{to:"/app/detail/edit/".concat(i.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,p.jsx)(h.Link,{to:"/app/detail/domain/".concat(i.id,"?tab=domain"),children:"\u57DF\u540D\u7BA1\u7406"}),key:"domain"},{label:(0,p.jsx)(x.Z,{style:{width:500},title:j("notification.title.tip"),description:"\u6587\u4EF6\u7BA1\u7406\u4F1A\u81EA\u52A8\u521B\u5EFA dpanel-plugin-exolorer \u5BB9\u5668\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",onConfirm:function(){oe("/app/detail/file/".concat(i.id,"?tab=file")),De(ge.filter(function(se){return se.key!="fileConfirm"})),pe("file")},okText:"Yes",cancelText:"No",children:(0,p.jsx)(m.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"})}),key:"fileConfirm"},{label:(0,p.jsx)(m.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){oe("/app/detail/file/".concat(i.id,"?tab=file"))}},{label:(0,p.jsx)(m.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){oe("/app/detail/log/".concat(i.id,"?tab=log"))}},{label:(0,p.jsx)(m.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){oe("/app/detail/stat/".concat(i.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,p.jsx)(l.Z,{}),disabled:!0}],Fe=(0,o.useState)(ge),Pe=D()(Fe,2),Oe=Pe[0],De=Pe[1];(0,o.useEffect)(function(){E.show(),pe(H);var q=function(){var se=c()(u()().mark(function ee(){var de,G,he,v;return u()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return G=ge,ae.next=3,(0,L.aF)();case 3:return he=ae.sent,he.data.dpanel.family=="lite"&&(G=G.filter(function(k){return k.key!="domain"})),he.data.plugin.explorer.isCreated||(G=G.filter(function(k){return k.key!="file"})),he.data.plugin.explorer.isCreated&&(G=G.filter(function(k){return k.key!="fileConfirm"})),ae.next=9,(0,B.jV)({md5:(de=i.id)!==null&&de!==void 0?de:""});case 9:v=ae.sent,G.map(function(k){return k.key=="containerName"&&(k.label=v.data.info.Name),(!v.data.info.State.Running||v.data.info.State.Restarting)&&(k.key=="file"||k.key=="fileConfirm"||k.key=="stat")&&(k.disabled=!0),k}),De(G),E.destroy();case 13:case"end":return ae.stop()}},ee)}));return function(){return se.apply(this,arguments)}}();q()},[Ce]);var be=function(se){se.key!="fileConfirm"&&pe(se.key)};return(0,p.jsxs)(C.Provider,{value:{reload:function(){xe(Ce+1)}},children:[(0,p.jsx)(Y.Z,{mode:"horizontal",onClick:be,selectedKeys:[Ie],items:Oe}),(0,p.jsx)(h.Outlet,{})]})}},28031:function(le,T,t){t.d(T,{C4:function(){return z},LK:function(){return p},OQ:function(){return g},V9:function(){return D},Yx:function(){return x},ZU:function(){return l},_U:function(){return L},gb:function(){return Y},lE:function(){return n},vp:function(){return E}});var R=t(15009),u=t.n(R),V=t(99289),c=t.n(V),f=t(54006);function D(d){return I.apply(this,arguments)}function I(){return I=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/get-path-list",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),I.apply(this,arguments)}function L(d){return B.apply(this,arguments)}function B(){return B=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/export",{data:P,method:"POST",responseType:"blob"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),B.apply(this,arguments)}function l(d){return h.apply(this,arguments)}function h(){return h=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/import",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),h.apply(this,arguments)}function x(d){return m.apply(this,arguments)}function m(){return m=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/delete",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),m.apply(this,arguments)}function Y(d){return o.apply(this,arguments)}function o(){return o=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/unzip",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),o.apply(this,arguments)}function p(d){return C.apply(this,arguments)}function C(){return C=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/get-content",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),C.apply(this,arguments)}function z(d){return S.apply(this,arguments)}function S(){return S=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/import-file-content",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),S.apply(this,arguments)}function g(d){return j.apply(this,arguments)}function j(){return j=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/chmod",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),j.apply(this,arguments)}function E(d){return i.apply(this,arguments)}function i(){return i=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/volume/backup",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),i.apply(this,arguments)}function n(d){return ue.apply(this,arguments)}function ue(){return ue=c()(u()().mark(function d(P){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,f.request)("/api/app/explorer/get-passwd",{data:P,method:"POST"});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},d)})),ue.apply(this,arguments)}},60335:function(le,T,t){t.d(T,{IE:function(){return L},IW:function(){return D},KK:function(){return Y},LJ:function(){return p},Re:function(){return z},eE:function(){return x},jV:function(){return l}});var R=t(15009),u=t.n(R),V=t(99289),c=t.n(V),f=t(54006);function D(g){return I.apply(this,arguments)}function I(){return I=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/status",{method:"POST",data:j}));case 1:case"end":return i.stop()}},g)})),I.apply(this,arguments)}function L(g){return B.apply(this,arguments)}function B(){return B=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/get-list",{data:j,method:"POST"}));case 1:case"end":return i.stop()}},g)})),B.apply(this,arguments)}function l(g){return h.apply(this,arguments)}function h(){return h=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/get-detail",{data:j,method:"POST"}));case 1:case"end":return i.stop()}},g)})),h.apply(this,arguments)}function x(g){return m.apply(this,arguments)}function m(){return m=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/update",{data:j,method:"POST"}));case 1:case"end":return i.stop()}},g)})),m.apply(this,arguments)}function Y(){return o.apply(this,arguments)}function o(){return o=c()(u()().mark(function g(){return u()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",(0,f.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return E.stop()}},g)})),o.apply(this,arguments)}function p(g){return C.apply(this,arguments)}function C(){return C=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/export",{method:"POST",data:j,responseType:"blob"}));case 1:case"end":return i.stop()}},g)})),C.apply(this,arguments)}function z(g){return S.apply(this,arguments)}function S(){return S=c()(u()().mark(function g(j){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,f.request)("/api/app/container/commit",{method:"POST",data:j}));case 1:case"end":return i.stop()}},g)})),S.apply(this,arguments)}}}]);
