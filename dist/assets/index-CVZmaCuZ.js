var ev=Object.defineProperty;var nv=(r,t,e)=>t in r?ev(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var he=(r,t,e)=>nv(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lm={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(r){(function(t,e){r.exports=t.document?e(t,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return e(n)}})(typeof window<"u"?window:iv,function(t,e){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)},a=n.push,c=n.indexOf,f={},d=f.toString,m=f.hasOwnProperty,g=m.toString,p=g.call(Object),M={},S=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},x=function(u){return u!=null&&u===u.window},v=t.document,P={type:!0,src:!0,nonce:!0,noModule:!0};function w(l,u,_){_=_||v;var y,T,E=_.createElement("script");if(E.text=l,u)for(y in P)T=u[y]||u.getAttribute&&u.getAttribute(y),T&&E.setAttribute(y,T);_.head.appendChild(E).parentNode.removeChild(E)}function C(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?f[d.call(l)]||"object":typeof l}var O="3.7.1",I=/HTML$/i,h=function(l,u){return new h.fn.init(l,u)};h.fn=h.prototype={jquery:O,constructor:h,length:0,toArray:function(){return s.call(this)},get:function(l){return l==null?s.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var u=h.merge(this.constructor(),l);return u.prevObject=this,u},each:function(l){return h.each(this,l)},map:function(l){return this.pushStack(h.map(this,function(u,_){return l.call(u,_,u)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(l,u){return(u+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(l,u){return u%2}))},eq:function(l){var u=this.length,_=+l+(l<0?u:0);return this.pushStack(_>=0&&_<u?[this[_]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},h.extend=h.fn.extend=function(){var l,u,_,y,T,E,A=arguments[0]||{},H=1,F=arguments.length,J=!1;for(typeof A=="boolean"&&(J=A,A=arguments[H]||{},H++),typeof A!="object"&&!S(A)&&(A={}),H===F&&(A=this,H--);H<F;H++)if((l=arguments[H])!=null)for(u in l)y=l[u],!(u==="__proto__"||A===y)&&(J&&y&&(h.isPlainObject(y)||(T=Array.isArray(y)))?(_=A[u],T&&!Array.isArray(_)?E=[]:!T&&!h.isPlainObject(_)?E={}:E=_,T=!1,A[u]=h.extend(J,E,y)):y!==void 0&&(A[u]=y));return A},h.extend({expando:"jQuery"+(O+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var u,_;return!l||d.call(l)!=="[object Object]"?!1:(u=i(l),u?(_=m.call(u,"constructor")&&u.constructor,typeof _=="function"&&g.call(_)===p):!0)},isEmptyObject:function(l){var u;for(u in l)return!1;return!0},globalEval:function(l,u,_){w(l,{nonce:u&&u.nonce},_)},each:function(l,u){var _,y=0;if(B(l))for(_=l.length;y<_&&u.call(l[y],y,l[y])!==!1;y++);else for(y in l)if(u.call(l[y],y,l[y])===!1)break;return l},text:function(l){var u,_="",y=0,T=l.nodeType;if(!T)for(;u=l[y++];)_+=h.text(u);return T===1||T===11?l.textContent:T===9?l.documentElement.textContent:T===3||T===4?l.nodeValue:_},makeArray:function(l,u){var _=u||[];return l!=null&&(B(Object(l))?h.merge(_,typeof l=="string"?[l]:l):a.call(_,l)),_},inArray:function(l,u,_){return u==null?-1:c.call(u,l,_)},isXMLDoc:function(l){var u=l&&l.namespaceURI,_=l&&(l.ownerDocument||l).documentElement;return!I.test(u||_&&_.nodeName||"HTML")},merge:function(l,u){for(var _=+u.length,y=0,T=l.length;y<_;y++)l[T++]=u[y];return l.length=T,l},grep:function(l,u,_){for(var y,T=[],E=0,A=l.length,H=!_;E<A;E++)y=!u(l[E],E),y!==H&&T.push(l[E]);return T},map:function(l,u,_){var y,T,E=0,A=[];if(B(l))for(y=l.length;E<y;E++)T=u(l[E],E,_),T!=null&&A.push(T);else for(E in l)T=u(l[E],E,_),T!=null&&A.push(T);return o(A)},guid:1,support:M}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=n[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,u){f["[object "+u+"]"]=u.toLowerCase()});function B(l){var u=!!l&&"length"in l&&l.length,_=C(l);return S(l)||x(l)?!1:_==="array"||u===0||typeof u=="number"&&u>0&&u-1 in l}function V(l,u){return l.nodeName&&l.nodeName.toLowerCase()===u.toLowerCase()}var b=n.pop,D=n.sort,W=n.splice,q="[\\x20\\t\\r\\n\\f]",lt=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g");h.contains=function(l,u){var _=u&&u.parentNode;return l===_||!!(_&&_.nodeType===1&&(l.contains?l.contains(_):l.compareDocumentPosition&&l.compareDocumentPosition(_)&16))};var dt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function it(l,u){return u?l==="\0"?"�":l.slice(0,-1)+"\\"+l.charCodeAt(l.length-1).toString(16)+" ":"\\"+l}h.escapeSelector=function(l){return(l+"").replace(dt,it)};var ot=v,rt=a;(function(){var l,u,_,y,T,E=rt,A,H,F,J,ht,_t=h.expando,at=0,Et=0,ye=al(),Ye=al(),Re=al(),zn=al(),An=function(N,G){return N===G&&(T=!0),0},or="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ar="(?:\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ge="\\["+q+"*("+ar+")(?:"+q+"*([*^$|!~]?=)"+q+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ar+"))|)"+q+"*\\]",Ts=":("+ar+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ge+")*)|.*)\\)|)",$e=new RegExp(q+"+","g"),gn=new RegExp("^"+q+"*,"+q+"*"),ca=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),iu=new RegExp(q+"|>"),lr=new RegExp(Ts),ua=new RegExp("^"+ar+"$"),cr={ID:new RegExp("^#("+ar+")"),CLASS:new RegExp("^\\.("+ar+")"),TAG:new RegExp("^("+ar+"|[*])"),ATTR:new RegExp("^"+Ge),PSEUDO:new RegExp("^"+Ts),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+or+")$","i"),needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},Yr=/^(?:input|select|textarea|button)$/i,$r=/^h\d$/i,Ni=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ru=/[+~]/,Mr=new RegExp("\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\([^\\r\\n\\f])","g"),Tr=function(N,G){var st="0x"+N.slice(1)-65536;return G||(st<0?String.fromCharCode(st+65536):String.fromCharCode(st>>10|55296,st&1023|56320))},$_=function(){jr()},j_=cl(function(N){return N.disabled===!0&&V(N,"fieldset")},{dir:"parentNode",next:"legend"});function K_(){try{return A.activeElement}catch{}}try{E.apply(n=s.call(ot.childNodes),ot.childNodes),n[ot.childNodes.length].nodeType}catch{E={apply:function(G,st){rt.apply(G,s.call(st))},call:function(G){rt.apply(G,s.call(arguments,1))}}}function tn(N,G,st,ct){var gt,Pt,Vt,Jt,Gt,ke,_e,Te=G&&G.ownerDocument,He=G?G.nodeType:9;if(st=st||[],typeof N!="string"||!N||He!==1&&He!==9&&He!==11)return st;if(!ct&&(jr(G),G=G||A,F)){if(He!==11&&(Gt=Ni.exec(N)))if(gt=Gt[1]){if(He===9)if(Vt=G.getElementById(gt)){if(Vt.id===gt)return E.call(st,Vt),st}else return st;else if(Te&&(Vt=Te.getElementById(gt))&&tn.contains(G,Vt)&&Vt.id===gt)return E.call(st,Vt),st}else{if(Gt[2])return E.apply(st,G.getElementsByTagName(N)),st;if((gt=Gt[3])&&G.getElementsByClassName)return E.apply(st,G.getElementsByClassName(gt)),st}if(!zn[N+" "]&&(!J||!J.test(N))){if(_e=N,Te=G,He===1&&(iu.test(N)||ca.test(N))){for(Te=ru.test(N)&&su(G.parentNode)||G,(Te!=G||!M.scope)&&((Jt=G.getAttribute("id"))?Jt=h.escapeSelector(Jt):G.setAttribute("id",Jt=_t)),ke=fa(N),Pt=ke.length;Pt--;)ke[Pt]=(Jt?"#"+Jt:":scope")+" "+ll(ke[Pt]);_e=ke.join(",")}try{return E.apply(st,Te.querySelectorAll(_e)),st}catch{zn(N,!0)}finally{Jt===_t&&G.removeAttribute("id")}}}return bd(N.replace(lt,"$1"),G,st,ct)}function al(){var N=[];function G(st,ct){return N.push(st+" ")>u.cacheLength&&delete G[N.shift()],G[st+" "]=ct}return G}function Ki(N){return N[_t]=!0,N}function so(N){var G=A.createElement("fieldset");try{return!!N(G)}catch{return!1}finally{G.parentNode&&G.parentNode.removeChild(G),G=null}}function J_(N){return function(G){return V(G,"input")&&G.type===N}}function Z_(N){return function(G){return(V(G,"input")||V(G,"button"))&&G.type===N}}function Td(N){return function(G){return"form"in G?G.parentNode&&G.disabled===!1?"label"in G?"label"in G.parentNode?G.parentNode.disabled===N:G.disabled===N:G.isDisabled===N||G.isDisabled!==!N&&j_(G)===N:G.disabled===N:"label"in G?G.disabled===N:!1}}function Es(N){return Ki(function(G){return G=+G,Ki(function(st,ct){for(var gt,Pt=N([],st.length,G),Vt=Pt.length;Vt--;)st[gt=Pt[Vt]]&&(st[gt]=!(ct[gt]=st[gt]))})})}function su(N){return N&&typeof N.getElementsByTagName<"u"&&N}function jr(N){var G,st=N?N.ownerDocument||N:ot;return st==A||st.nodeType!==9||!st.documentElement||(A=st,H=A.documentElement,F=!h.isXMLDoc(A),ht=H.matches||H.webkitMatchesSelector||H.msMatchesSelector,H.msMatchesSelector&&ot!=A&&(G=A.defaultView)&&G.top!==G&&G.addEventListener("unload",$_),M.getById=so(function(ct){return H.appendChild(ct).id=h.expando,!A.getElementsByName||!A.getElementsByName(h.expando).length}),M.disconnectedMatch=so(function(ct){return ht.call(ct,"*")}),M.scope=so(function(){return A.querySelectorAll(":scope")}),M.cssHas=so(function(){try{return A.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(u.filter.ID=function(ct){var gt=ct.replace(Mr,Tr);return function(Pt){return Pt.getAttribute("id")===gt}},u.find.ID=function(ct,gt){if(typeof gt.getElementById<"u"&&F){var Pt=gt.getElementById(ct);return Pt?[Pt]:[]}}):(u.filter.ID=function(ct){var gt=ct.replace(Mr,Tr);return function(Pt){var Vt=typeof Pt.getAttributeNode<"u"&&Pt.getAttributeNode("id");return Vt&&Vt.value===gt}},u.find.ID=function(ct,gt){if(typeof gt.getElementById<"u"&&F){var Pt,Vt,Jt,Gt=gt.getElementById(ct);if(Gt){if(Pt=Gt.getAttributeNode("id"),Pt&&Pt.value===ct)return[Gt];for(Jt=gt.getElementsByName(ct),Vt=0;Gt=Jt[Vt++];)if(Pt=Gt.getAttributeNode("id"),Pt&&Pt.value===ct)return[Gt]}return[]}}),u.find.TAG=function(ct,gt){return typeof gt.getElementsByTagName<"u"?gt.getElementsByTagName(ct):gt.querySelectorAll(ct)},u.find.CLASS=function(ct,gt){if(typeof gt.getElementsByClassName<"u"&&F)return gt.getElementsByClassName(ct)},J=[],so(function(ct){var gt;H.appendChild(ct).innerHTML="<a id='"+_t+"' href='' disabled='disabled'></a><select id='"+_t+"-\r\\' disabled='disabled'><option selected=''></option></select>",ct.querySelectorAll("[selected]").length||J.push("\\["+q+"*(?:value|"+or+")"),ct.querySelectorAll("[id~="+_t+"-]").length||J.push("~="),ct.querySelectorAll("a#"+_t+"+*").length||J.push(".#.+[+~]"),ct.querySelectorAll(":checked").length||J.push(":checked"),gt=A.createElement("input"),gt.setAttribute("type","hidden"),ct.appendChild(gt).setAttribute("name","D"),H.appendChild(ct).disabled=!0,ct.querySelectorAll(":disabled").length!==2&&J.push(":enabled",":disabled"),gt=A.createElement("input"),gt.setAttribute("name",""),ct.appendChild(gt),ct.querySelectorAll("[name='']").length||J.push("\\["+q+"*name"+q+"*="+q+`*(?:''|"")`)}),M.cssHas||J.push(":has"),J=J.length&&new RegExp(J.join("|")),An=function(ct,gt){if(ct===gt)return T=!0,0;var Pt=!ct.compareDocumentPosition-!gt.compareDocumentPosition;return Pt||(Pt=(ct.ownerDocument||ct)==(gt.ownerDocument||gt)?ct.compareDocumentPosition(gt):1,Pt&1||!M.sortDetached&&gt.compareDocumentPosition(ct)===Pt?ct===A||ct.ownerDocument==ot&&tn.contains(ot,ct)?-1:gt===A||gt.ownerDocument==ot&&tn.contains(ot,gt)?1:y?c.call(y,ct)-c.call(y,gt):0:Pt&4?-1:1)}),A}tn.matches=function(N,G){return tn(N,null,null,G)},tn.matchesSelector=function(N,G){if(jr(N),F&&!zn[G+" "]&&(!J||!J.test(G)))try{var st=ht.call(N,G);if(st||M.disconnectedMatch||N.document&&N.document.nodeType!==11)return st}catch{zn(G,!0)}return tn(G,A,null,[N]).length>0},tn.contains=function(N,G){return(N.ownerDocument||N)!=A&&jr(N),h.contains(N,G)},tn.attr=function(N,G){(N.ownerDocument||N)!=A&&jr(N);var st=u.attrHandle[G.toLowerCase()],ct=st&&m.call(u.attrHandle,G.toLowerCase())?st(N,G,!F):void 0;return ct!==void 0?ct:N.getAttribute(G)},tn.error=function(N){throw new Error("Syntax error, unrecognized expression: "+N)},h.uniqueSort=function(N){var G,st=[],ct=0,gt=0;if(T=!M.sortStable,y=!M.sortStable&&s.call(N,0),D.call(N,An),T){for(;G=N[gt++];)G===N[gt]&&(ct=st.push(gt));for(;ct--;)W.call(N,st[ct],1)}return y=null,N},h.fn.uniqueSort=function(){return this.pushStack(h.uniqueSort(s.apply(this)))},u=h.expr={cacheLength:50,createPseudo:Ki,match:cr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(N){return N[1]=N[1].replace(Mr,Tr),N[3]=(N[3]||N[4]||N[5]||"").replace(Mr,Tr),N[2]==="~="&&(N[3]=" "+N[3]+" "),N.slice(0,4)},CHILD:function(N){return N[1]=N[1].toLowerCase(),N[1].slice(0,3)==="nth"?(N[3]||tn.error(N[0]),N[4]=+(N[4]?N[5]+(N[6]||1):2*(N[3]==="even"||N[3]==="odd")),N[5]=+(N[7]+N[8]||N[3]==="odd")):N[3]&&tn.error(N[0]),N},PSEUDO:function(N){var G,st=!N[6]&&N[2];return cr.CHILD.test(N[0])?null:(N[3]?N[2]=N[4]||N[5]||"":st&&lr.test(st)&&(G=fa(st,!0))&&(G=st.indexOf(")",st.length-G)-st.length)&&(N[0]=N[0].slice(0,G),N[2]=st.slice(0,G)),N.slice(0,3))}},filter:{TAG:function(N){var G=N.replace(Mr,Tr).toLowerCase();return N==="*"?function(){return!0}:function(st){return V(st,G)}},CLASS:function(N){var G=ye[N+" "];return G||(G=new RegExp("(^|"+q+")"+N+"("+q+"|$)"))&&ye(N,function(st){return G.test(typeof st.className=="string"&&st.className||typeof st.getAttribute<"u"&&st.getAttribute("class")||"")})},ATTR:function(N,G,st){return function(ct){var gt=tn.attr(ct,N);return gt==null?G==="!=":G?(gt+="",G==="="?gt===st:G==="!="?gt!==st:G==="^="?st&&gt.indexOf(st)===0:G==="*="?st&&gt.indexOf(st)>-1:G==="$="?st&&gt.slice(-st.length)===st:G==="~="?(" "+gt.replace($e," ")+" ").indexOf(st)>-1:G==="|="?gt===st||gt.slice(0,st.length+1)===st+"-":!1):!0}},CHILD:function(N,G,st,ct,gt){var Pt=N.slice(0,3)!=="nth",Vt=N.slice(-4)!=="last",Jt=G==="of-type";return ct===1&&gt===0?function(Gt){return!!Gt.parentNode}:function(Gt,ke,_e){var Te,He,le,sn,fi,Hn=Pt!==Vt?"nextSibling":"previousSibling",Ui=Gt.parentNode,ur=Jt&&Gt.nodeName.toLowerCase(),oo=!_e&&!Jt,Qn=!1;if(Ui){if(Pt){for(;Hn;){for(le=Gt;le=le[Hn];)if(Jt?V(le,ur):le.nodeType===1)return!1;fi=Hn=N==="only"&&!fi&&"nextSibling"}return!0}if(fi=[Vt?Ui.firstChild:Ui.lastChild],Vt&&oo){for(He=Ui[_t]||(Ui[_t]={}),Te=He[N]||[],sn=Te[0]===at&&Te[1],Qn=sn&&Te[2],le=sn&&Ui.childNodes[sn];le=++sn&&le&&le[Hn]||(Qn=sn=0)||fi.pop();)if(le.nodeType===1&&++Qn&&le===Gt){He[N]=[at,sn,Qn];break}}else if(oo&&(He=Gt[_t]||(Gt[_t]={}),Te=He[N]||[],sn=Te[0]===at&&Te[1],Qn=sn),Qn===!1)for(;(le=++sn&&le&&le[Hn]||(Qn=sn=0)||fi.pop())&&!((Jt?V(le,ur):le.nodeType===1)&&++Qn&&(oo&&(He=le[_t]||(le[_t]={}),He[N]=[at,Qn]),le===Gt)););return Qn-=gt,Qn===ct||Qn%ct===0&&Qn/ct>=0}}},PSEUDO:function(N,G){var st,ct=u.pseudos[N]||u.setFilters[N.toLowerCase()]||tn.error("unsupported pseudo: "+N);return ct[_t]?ct(G):ct.length>1?(st=[N,N,"",G],u.setFilters.hasOwnProperty(N.toLowerCase())?Ki(function(gt,Pt){for(var Vt,Jt=ct(gt,G),Gt=Jt.length;Gt--;)Vt=c.call(gt,Jt[Gt]),gt[Vt]=!(Pt[Vt]=Jt[Gt])}):function(gt){return ct(gt,0,st)}):ct}},pseudos:{not:Ki(function(N){var G=[],st=[],ct=cu(N.replace(lt,"$1"));return ct[_t]?Ki(function(gt,Pt,Vt,Jt){for(var Gt,ke=ct(gt,null,Jt,[]),_e=gt.length;_e--;)(Gt=ke[_e])&&(gt[_e]=!(Pt[_e]=Gt))}):function(gt,Pt,Vt){return G[0]=gt,ct(G,null,Vt,st),G[0]=null,!st.pop()}}),has:Ki(function(N){return function(G){return tn(N,G).length>0}}),contains:Ki(function(N){return N=N.replace(Mr,Tr),function(G){return(G.textContent||h.text(G)).indexOf(N)>-1}}),lang:Ki(function(N){return ua.test(N||"")||tn.error("unsupported lang: "+N),N=N.replace(Mr,Tr).toLowerCase(),function(G){var st;do if(st=F?G.lang:G.getAttribute("xml:lang")||G.getAttribute("lang"))return st=st.toLowerCase(),st===N||st.indexOf(N+"-")===0;while((G=G.parentNode)&&G.nodeType===1);return!1}}),target:function(N){var G=t.location&&t.location.hash;return G&&G.slice(1)===N.id},root:function(N){return N===H},focus:function(N){return N===K_()&&A.hasFocus()&&!!(N.type||N.href||~N.tabIndex)},enabled:Td(!1),disabled:Td(!0),checked:function(N){return V(N,"input")&&!!N.checked||V(N,"option")&&!!N.selected},selected:function(N){return N.parentNode&&N.parentNode.selectedIndex,N.selected===!0},empty:function(N){for(N=N.firstChild;N;N=N.nextSibling)if(N.nodeType<6)return!1;return!0},parent:function(N){return!u.pseudos.empty(N)},header:function(N){return $r.test(N.nodeName)},input:function(N){return Yr.test(N.nodeName)},button:function(N){return V(N,"input")&&N.type==="button"||V(N,"button")},text:function(N){var G;return V(N,"input")&&N.type==="text"&&((G=N.getAttribute("type"))==null||G.toLowerCase()==="text")},first:Es(function(){return[0]}),last:Es(function(N,G){return[G-1]}),eq:Es(function(N,G,st){return[st<0?st+G:st]}),even:Es(function(N,G){for(var st=0;st<G;st+=2)N.push(st);return N}),odd:Es(function(N,G){for(var st=1;st<G;st+=2)N.push(st);return N}),lt:Es(function(N,G,st){var ct;for(st<0?ct=st+G:st>G?ct=G:ct=st;--ct>=0;)N.push(ct);return N}),gt:Es(function(N,G,st){for(var ct=st<0?st+G:st;++ct<G;)N.push(ct);return N})}},u.pseudos.nth=u.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[l]=J_(l);for(l in{submit:!0,reset:!0})u.pseudos[l]=Z_(l);function Ed(){}Ed.prototype=u.filters=u.pseudos,u.setFilters=new Ed;function fa(N,G){var st,ct,gt,Pt,Vt,Jt,Gt,ke=Ye[N+" "];if(ke)return G?0:ke.slice(0);for(Vt=N,Jt=[],Gt=u.preFilter;Vt;){(!st||(ct=gn.exec(Vt)))&&(ct&&(Vt=Vt.slice(ct[0].length)||Vt),Jt.push(gt=[])),st=!1,(ct=ca.exec(Vt))&&(st=ct.shift(),gt.push({value:st,type:ct[0].replace(lt," ")}),Vt=Vt.slice(st.length));for(Pt in u.filter)(ct=cr[Pt].exec(Vt))&&(!Gt[Pt]||(ct=Gt[Pt](ct)))&&(st=ct.shift(),gt.push({value:st,type:Pt,matches:ct}),Vt=Vt.slice(st.length));if(!st)break}return G?Vt.length:Vt?tn.error(N):Ye(N,Jt).slice(0)}function ll(N){for(var G=0,st=N.length,ct="";G<st;G++)ct+=N[G].value;return ct}function cl(N,G,st){var ct=G.dir,gt=G.next,Pt=gt||ct,Vt=st&&Pt==="parentNode",Jt=Et++;return G.first?function(Gt,ke,_e){for(;Gt=Gt[ct];)if(Gt.nodeType===1||Vt)return N(Gt,ke,_e);return!1}:function(Gt,ke,_e){var Te,He,le=[at,Jt];if(_e){for(;Gt=Gt[ct];)if((Gt.nodeType===1||Vt)&&N(Gt,ke,_e))return!0}else for(;Gt=Gt[ct];)if(Gt.nodeType===1||Vt)if(He=Gt[_t]||(Gt[_t]={}),gt&&V(Gt,gt))Gt=Gt[ct]||Gt;else{if((Te=He[Pt])&&Te[0]===at&&Te[1]===Jt)return le[2]=Te[2];if(He[Pt]=le,le[2]=N(Gt,ke,_e))return!0}return!1}}function ou(N){return N.length>1?function(G,st,ct){for(var gt=N.length;gt--;)if(!N[gt](G,st,ct))return!1;return!0}:N[0]}function Q_(N,G,st){for(var ct=0,gt=G.length;ct<gt;ct++)tn(N,G[ct],st);return st}function ul(N,G,st,ct,gt){for(var Pt,Vt=[],Jt=0,Gt=N.length,ke=G!=null;Jt<Gt;Jt++)(Pt=N[Jt])&&(!st||st(Pt,ct,gt))&&(Vt.push(Pt),ke&&G.push(Jt));return Vt}function au(N,G,st,ct,gt,Pt){return ct&&!ct[_t]&&(ct=au(ct)),gt&&!gt[_t]&&(gt=au(gt,Pt)),Ki(function(Vt,Jt,Gt,ke){var _e,Te,He,le,sn=[],fi=[],Hn=Jt.length,Ui=Vt||Q_(G||"*",Gt.nodeType?[Gt]:Gt,[]),ur=N&&(Vt||!G)?ul(Ui,sn,N,Gt,ke):Ui;if(st?(le=gt||(Vt?N:Hn||ct)?[]:Jt,st(ur,le,Gt,ke)):le=ur,ct)for(_e=ul(le,fi),ct(_e,[],Gt,ke),Te=_e.length;Te--;)(He=_e[Te])&&(le[fi[Te]]=!(ur[fi[Te]]=He));if(Vt){if(gt||N){if(gt){for(_e=[],Te=le.length;Te--;)(He=le[Te])&&_e.push(ur[Te]=He);gt(null,le=[],_e,ke)}for(Te=le.length;Te--;)(He=le[Te])&&(_e=gt?c.call(Vt,He):sn[Te])>-1&&(Vt[_e]=!(Jt[_e]=He))}}else le=ul(le===Jt?le.splice(Hn,le.length):le),gt?gt(null,Jt,le,ke):E.apply(Jt,le)})}function lu(N){for(var G,st,ct,gt=N.length,Pt=u.relative[N[0].type],Vt=Pt||u.relative[" "],Jt=Pt?1:0,Gt=cl(function(Te){return Te===G},Vt,!0),ke=cl(function(Te){return c.call(G,Te)>-1},Vt,!0),_e=[function(Te,He,le){var sn=!Pt&&(le||He!=_)||((G=He).nodeType?Gt(Te,He,le):ke(Te,He,le));return G=null,sn}];Jt<gt;Jt++)if(st=u.relative[N[Jt].type])_e=[cl(ou(_e),st)];else{if(st=u.filter[N[Jt].type].apply(null,N[Jt].matches),st[_t]){for(ct=++Jt;ct<gt&&!u.relative[N[ct].type];ct++);return au(Jt>1&&ou(_e),Jt>1&&ll(N.slice(0,Jt-1).concat({value:N[Jt-2].type===" "?"*":""})).replace(lt,"$1"),st,Jt<ct&&lu(N.slice(Jt,ct)),ct<gt&&lu(N=N.slice(ct)),ct<gt&&ll(N))}_e.push(st)}return ou(_e)}function tv(N,G){var st=G.length>0,ct=N.length>0,gt=function(Pt,Vt,Jt,Gt,ke){var _e,Te,He,le=0,sn="0",fi=Pt&&[],Hn=[],Ui=_,ur=Pt||ct&&u.find.TAG("*",ke),oo=at+=Ui==null?1:Math.random()||.1,Qn=ur.length;for(ke&&(_=Vt==A||Vt||ke);sn!==Qn&&(_e=ur[sn])!=null;sn++){if(ct&&_e){for(Te=0,!Vt&&_e.ownerDocument!=A&&(jr(_e),Jt=!F);He=N[Te++];)if(He(_e,Vt||A,Jt)){E.call(Gt,_e);break}ke&&(at=oo)}st&&((_e=!He&&_e)&&le--,Pt&&fi.push(_e))}if(le+=sn,st&&sn!==le){for(Te=0;He=G[Te++];)He(fi,Hn,Vt,Jt);if(Pt){if(le>0)for(;sn--;)fi[sn]||Hn[sn]||(Hn[sn]=b.call(Gt));Hn=ul(Hn)}E.apply(Gt,Hn),ke&&!Pt&&Hn.length>0&&le+G.length>1&&h.uniqueSort(Gt)}return ke&&(at=oo,_=Ui),fi};return st?Ki(gt):gt}function cu(N,G){var st,ct=[],gt=[],Pt=Re[N+" "];if(!Pt){for(G||(G=fa(N)),st=G.length;st--;)Pt=lu(G[st]),Pt[_t]?ct.push(Pt):gt.push(Pt);Pt=Re(N,tv(gt,ct)),Pt.selector=N}return Pt}function bd(N,G,st,ct){var gt,Pt,Vt,Jt,Gt,ke=typeof N=="function"&&N,_e=!ct&&fa(N=ke.selector||N);if(st=st||[],_e.length===1){if(Pt=_e[0]=_e[0].slice(0),Pt.length>2&&(Vt=Pt[0]).type==="ID"&&G.nodeType===9&&F&&u.relative[Pt[1].type]){if(G=(u.find.ID(Vt.matches[0].replace(Mr,Tr),G)||[])[0],G)ke&&(G=G.parentNode);else return st;N=N.slice(Pt.shift().value.length)}for(gt=cr.needsContext.test(N)?0:Pt.length;gt--&&(Vt=Pt[gt],!u.relative[Jt=Vt.type]);)if((Gt=u.find[Jt])&&(ct=Gt(Vt.matches[0].replace(Mr,Tr),ru.test(Pt[0].type)&&su(G.parentNode)||G))){if(Pt.splice(gt,1),N=ct.length&&ll(Pt),!N)return E.apply(st,ct),st;break}}return(ke||cu(N,_e))(ct,G,!F,st,!G||ru.test(N)&&su(G.parentNode)||G),st}M.sortStable=_t.split("").sort(An).join("")===_t,jr(),M.sortDetached=so(function(N){return N.compareDocumentPosition(A.createElement("fieldset"))&1}),h.find=tn,h.expr[":"]=h.expr.pseudos,h.unique=h.uniqueSort,tn.compile=cu,tn.select=bd,tn.setDocument=jr,tn.tokenize=fa,tn.escape=h.escapeSelector,tn.getText=h.text,tn.isXML=h.isXMLDoc,tn.selectors=h.expr,tn.support=h.support,tn.uniqueSort=h.uniqueSort})();var Mt=function(l,u,_){for(var y=[],T=_!==void 0;(l=l[u])&&l.nodeType!==9;)if(l.nodeType===1){if(T&&h(l).is(_))break;y.push(l)}return y},z=function(l,u){for(var _=[];l;l=l.nextSibling)l.nodeType===1&&l!==u&&_.push(l);return _},wt=h.expr.match.needsContext,de=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Se(l,u,_){return S(u)?h.grep(l,function(y,T){return!!u.call(y,T,y)!==_}):u.nodeType?h.grep(l,function(y){return y===u!==_}):typeof u!="string"?h.grep(l,function(y){return c.call(u,y)>-1!==_}):h.filter(u,l,_)}h.filter=function(l,u,_){var y=u[0];return _&&(l=":not("+l+")"),u.length===1&&y.nodeType===1?h.find.matchesSelector(y,l)?[y]:[]:h.find.matches(l,h.grep(u,function(T){return T.nodeType===1}))},h.fn.extend({find:function(l){var u,_,y=this.length,T=this;if(typeof l!="string")return this.pushStack(h(l).filter(function(){for(u=0;u<y;u++)if(h.contains(T[u],this))return!0}));for(_=this.pushStack([]),u=0;u<y;u++)h.find(l,T[u],_);return y>1?h.uniqueSort(_):_},filter:function(l){return this.pushStack(Se(this,l||[],!1))},not:function(l){return this.pushStack(Se(this,l||[],!0))},is:function(l){return!!Se(this,typeof l=="string"&&wt.test(l)?h(l):l||[],!1).length}});var ut,xt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ft=h.fn.init=function(l,u,_){var y,T;if(!l)return this;if(_=_||ut,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?y=[null,l,null]:y=xt.exec(l),y&&(y[1]||!u))if(y[1]){if(u=u instanceof h?u[0]:u,h.merge(this,h.parseHTML(y[1],u&&u.nodeType?u.ownerDocument||u:v,!0)),de.test(y[1])&&h.isPlainObject(u))for(y in u)S(this[y])?this[y](u[y]):this.attr(y,u[y]);return this}else return T=v.getElementById(y[2]),T&&(this[0]=T,this.length=1),this;else return!u||u.jquery?(u||_).find(l):this.constructor(u).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(S(l))return _.ready!==void 0?_.ready(l):l(h)}return h.makeArray(l,this)};Ft.prototype=h.fn,ut=h(v);var At=/^(?:parents|prev(?:Until|All))/,jt={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(l){var u=h(l,this),_=u.length;return this.filter(function(){for(var y=0;y<_;y++)if(h.contains(this,u[y]))return!0})},closest:function(l,u){var _,y=0,T=this.length,E=[],A=typeof l!="string"&&h(l);if(!wt.test(l)){for(;y<T;y++)for(_=this[y];_&&_!==u;_=_.parentNode)if(_.nodeType<11&&(A?A.index(_)>-1:_.nodeType===1&&h.find.matchesSelector(_,l))){E.push(_);break}}return this.pushStack(E.length>1?h.uniqueSort(E):E)},index:function(l){return l?typeof l=="string"?c.call(h(l),this[0]):c.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,u){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(l,u))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function Wt(l,u){for(;(l=l[u])&&l.nodeType!==1;);return l}h.each({parent:function(l){var u=l.parentNode;return u&&u.nodeType!==11?u:null},parents:function(l){return Mt(l,"parentNode")},parentsUntil:function(l,u,_){return Mt(l,"parentNode",_)},next:function(l){return Wt(l,"nextSibling")},prev:function(l){return Wt(l,"previousSibling")},nextAll:function(l){return Mt(l,"nextSibling")},prevAll:function(l){return Mt(l,"previousSibling")},nextUntil:function(l,u,_){return Mt(l,"nextSibling",_)},prevUntil:function(l,u,_){return Mt(l,"previousSibling",_)},siblings:function(l){return z((l.parentNode||{}).firstChild,l)},children:function(l){return z(l.firstChild)},contents:function(l){return l.contentDocument!=null&&i(l.contentDocument)?l.contentDocument:(V(l,"template")&&(l=l.content||l),h.merge([],l.childNodes))}},function(l,u){h.fn[l]=function(_,y){var T=h.map(this,u,_);return l.slice(-5)!=="Until"&&(y=_),y&&typeof y=="string"&&(T=h.filter(y,T)),this.length>1&&(jt[l]||h.uniqueSort(T),At.test(l)&&T.reverse()),this.pushStack(T)}});var se=/[^\x20\t\r\n\f]+/g;function xe(l){var u={};return h.each(l.match(se)||[],function(_,y){u[y]=!0}),u}h.Callbacks=function(l){l=typeof l=="string"?xe(l):h.extend({},l);var u,_,y,T,E=[],A=[],H=-1,F=function(){for(T=T||l.once,y=u=!0;A.length;H=-1)for(_=A.shift();++H<E.length;)E[H].apply(_[0],_[1])===!1&&l.stopOnFalse&&(H=E.length,_=!1);l.memory||(_=!1),u=!1,T&&(_?E=[]:E="")},J={add:function(){return E&&(_&&!u&&(H=E.length-1,A.push(_)),function ht(_t){h.each(_t,function(at,Et){S(Et)?(!l.unique||!J.has(Et))&&E.push(Et):Et&&Et.length&&C(Et)!=="string"&&ht(Et)})}(arguments),_&&!u&&F()),this},remove:function(){return h.each(arguments,function(ht,_t){for(var at;(at=h.inArray(_t,E,at))>-1;)E.splice(at,1),at<=H&&H--}),this},has:function(ht){return ht?h.inArray(ht,E)>-1:E.length>0},empty:function(){return E&&(E=[]),this},disable:function(){return T=A=[],E=_="",this},disabled:function(){return!E},lock:function(){return T=A=[],!_&&!u&&(E=_=""),this},locked:function(){return!!T},fireWith:function(ht,_t){return T||(_t=_t||[],_t=[ht,_t.slice?_t.slice():_t],A.push(_t),u||F()),this},fire:function(){return J.fireWith(this,arguments),this},fired:function(){return!!y}};return J};function ae(l){return l}function k(l){throw l}function Ue(l,u,_,y){var T;try{l&&S(T=l.promise)?T.call(l).done(u).fail(_):l&&S(T=l.then)?T.call(l,u,_):u.apply(void 0,[l].slice(y))}catch(E){_.apply(void 0,[E])}}h.extend({Deferred:function(l){var u=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],_="pending",y={state:function(){return _},always:function(){return T.done(arguments).fail(arguments),this},catch:function(E){return y.then(null,E)},pipe:function(){var E=arguments;return h.Deferred(function(A){h.each(u,function(H,F){var J=S(E[F[4]])&&E[F[4]];T[F[1]](function(){var ht=J&&J.apply(this,arguments);ht&&S(ht.promise)?ht.promise().progress(A.notify).done(A.resolve).fail(A.reject):A[F[0]+"With"](this,J?[ht]:arguments)})}),E=null}).promise()},then:function(E,A,H){var F=0;function J(ht,_t,at,Et){return function(){var ye=this,Ye=arguments,Re=function(){var An,or;if(!(ht<F)){if(An=at.apply(ye,Ye),An===_t.promise())throw new TypeError("Thenable self-resolution");or=An&&(typeof An=="object"||typeof An=="function")&&An.then,S(or)?Et?or.call(An,J(F,_t,ae,Et),J(F,_t,k,Et)):(F++,or.call(An,J(F,_t,ae,Et),J(F,_t,k,Et),J(F,_t,ae,_t.notifyWith))):(at!==ae&&(ye=void 0,Ye=[An]),(Et||_t.resolveWith)(ye,Ye))}},zn=Et?Re:function(){try{Re()}catch(An){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(An,zn.error),ht+1>=F&&(at!==k&&(ye=void 0,Ye=[An]),_t.rejectWith(ye,Ye))}};ht?zn():(h.Deferred.getErrorHook?zn.error=h.Deferred.getErrorHook():h.Deferred.getStackHook&&(zn.error=h.Deferred.getStackHook()),t.setTimeout(zn))}}return h.Deferred(function(ht){u[0][3].add(J(0,ht,S(H)?H:ae,ht.notifyWith)),u[1][3].add(J(0,ht,S(E)?E:ae)),u[2][3].add(J(0,ht,S(A)?A:k))}).promise()},promise:function(E){return E!=null?h.extend(E,y):y}},T={};return h.each(u,function(E,A){var H=A[2],F=A[5];y[A[1]]=H.add,F&&H.add(function(){_=F},u[3-E][2].disable,u[3-E][3].disable,u[0][2].lock,u[0][3].lock),H.add(A[3].fire),T[A[0]]=function(){return T[A[0]+"With"](this===T?void 0:this,arguments),this},T[A[0]+"With"]=H.fireWith}),y.promise(T),l&&l.call(T,T),T},when:function(l){var u=arguments.length,_=u,y=Array(_),T=s.call(arguments),E=h.Deferred(),A=function(H){return function(F){y[H]=this,T[H]=arguments.length>1?s.call(arguments):F,--u||E.resolveWith(y,T)}};if(u<=1&&(Ue(l,E.done(A(_)).resolve,E.reject,!u),E.state()==="pending"||S(T[_]&&T[_].then)))return E.then();for(;_--;)Ue(T[_],A(_),E.reject);return E.promise()}});var ce=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(l,u){t.console&&t.console.warn&&l&&ce.test(l.name)&&t.console.warn("jQuery.Deferred exception: "+l.message,l.stack,u)},h.readyException=function(l){t.setTimeout(function(){throw l})};var pe=h.Deferred();h.fn.ready=function(l){return pe.then(l).catch(function(u){h.readyException(u)}),this},h.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(l!==!0&&--h.readyWait>0)&&pe.resolveWith(v,[h]))}}),h.ready.then=pe.then;function Q(){v.removeEventListener("DOMContentLoaded",Q),t.removeEventListener("load",Q),h.ready()}v.readyState==="complete"||v.readyState!=="loading"&&!v.documentElement.doScroll?t.setTimeout(h.ready):(v.addEventListener("DOMContentLoaded",Q),t.addEventListener("load",Q));var me=function(l,u,_,y,T,E,A){var H=0,F=l.length,J=_==null;if(C(_)==="object"){T=!0;for(H in _)me(l,u,H,_[H],!0,E,A)}else if(y!==void 0&&(T=!0,S(y)||(A=!0),J&&(A?(u.call(l,y),u=null):(J=u,u=function(ht,_t,at){return J.call(h(ht),at)})),u))for(;H<F;H++)u(l[H],_,A?y:y.call(l[H],H,u(l[H],_)));return T?l:J?u.call(l):F?u(l[0],_):E},re=/^-ms-/,U=/-([a-z])/g;function R(l,u){return u.toUpperCase()}function tt(l){return l.replace(re,"ms-").replace(U,R)}var pt=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function yt(){this.expando=h.expando+yt.uid++}yt.uid=1,yt.prototype={cache:function(l){var u=l[this.expando];return u||(u={},pt(l)&&(l.nodeType?l[this.expando]=u:Object.defineProperty(l,this.expando,{value:u,configurable:!0}))),u},set:function(l,u,_){var y,T=this.cache(l);if(typeof u=="string")T[tt(u)]=_;else for(y in u)T[tt(y)]=u[y];return T},get:function(l,u){return u===void 0?this.cache(l):l[this.expando]&&l[this.expando][tt(u)]},access:function(l,u,_){return u===void 0||u&&typeof u=="string"&&_===void 0?this.get(l,u):(this.set(l,u,_),_!==void 0?_:u)},remove:function(l,u){var _,y=l[this.expando];if(y!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(tt):(u=tt(u),u=u in y?[u]:u.match(se)||[]),_=u.length;_--;)delete y[u[_]];(u===void 0||h.isEmptyObject(y))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var u=l[this.expando];return u!==void 0&&!h.isEmptyObject(u)}};var K=new yt,Nt=new yt,Tt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Bt=/[A-Z]/g;function ve(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:Tt.test(l)?JSON.parse(l):l}function St(l,u,_){var y;if(_===void 0&&l.nodeType===1)if(y="data-"+u.replace(Bt,"-$&").toLowerCase(),_=l.getAttribute(y),typeof _=="string"){try{_=ve(_)}catch{}Nt.set(l,u,_)}else _=void 0;return _}h.extend({hasData:function(l){return Nt.hasData(l)||K.hasData(l)},data:function(l,u,_){return Nt.access(l,u,_)},removeData:function(l,u){Nt.remove(l,u)},_data:function(l,u,_){return K.access(l,u,_)},_removeData:function(l,u){K.remove(l,u)}}),h.fn.extend({data:function(l,u){var _,y,T,E=this[0],A=E&&E.attributes;if(l===void 0){if(this.length&&(T=Nt.get(E),E.nodeType===1&&!K.get(E,"hasDataAttrs"))){for(_=A.length;_--;)A[_]&&(y=A[_].name,y.indexOf("data-")===0&&(y=tt(y.slice(5)),St(E,y,T[y])));K.set(E,"hasDataAttrs",!0)}return T}return typeof l=="object"?this.each(function(){Nt.set(this,l)}):me(this,function(H){var F;if(E&&H===void 0)return F=Nt.get(E,l),F!==void 0||(F=St(E,l),F!==void 0)?F:void 0;this.each(function(){Nt.set(this,l,H)})},null,u,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){Nt.remove(this,l)})}}),h.extend({queue:function(l,u,_){var y;if(l)return u=(u||"fx")+"queue",y=K.get(l,u),_&&(!y||Array.isArray(_)?y=K.access(l,u,h.makeArray(_)):y.push(_)),y||[]},dequeue:function(l,u){u=u||"fx";var _=h.queue(l,u),y=_.length,T=_.shift(),E=h._queueHooks(l,u),A=function(){h.dequeue(l,u)};T==="inprogress"&&(T=_.shift(),y--),T&&(u==="fx"&&_.unshift("inprogress"),delete E.stop,T.call(l,A,E)),!y&&E&&E.empty.fire()},_queueHooks:function(l,u){var _=u+"queueHooks";return K.get(l,_)||K.access(l,_,{empty:h.Callbacks("once memory").add(function(){K.remove(l,[u+"queue",_])})})}}),h.fn.extend({queue:function(l,u){var _=2;return typeof l!="string"&&(u=l,l="fx",_--),arguments.length<_?h.queue(this[0],l):u===void 0?this:this.each(function(){var y=h.queue(this,l,u);h._queueHooks(this,l),l==="fx"&&y[0]!=="inprogress"&&h.dequeue(this,l)})},dequeue:function(l){return this.each(function(){h.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,u){var _,y=1,T=h.Deferred(),E=this,A=this.length,H=function(){--y||T.resolveWith(E,[E])};for(typeof l!="string"&&(u=l,l=void 0),l=l||"fx";A--;)_=K.get(E[A],l+"queueHooks"),_&&_.empty&&(y++,_.empty.add(H));return H(),T.promise(u)}});var kt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ht=new RegExp("^(?:([+-])=|)("+kt+")([a-z%]*)$","i"),Kt=["Top","Right","Bottom","Left"],Ut=v.documentElement,ge=function(l){return h.contains(l.ownerDocument,l)},ue={composed:!0};Ut.getRootNode&&(ge=function(l){return h.contains(l.ownerDocument,l)||l.getRootNode(ue)===l.ownerDocument});var Ae=function(l,u){return l=u||l,l.style.display==="none"||l.style.display===""&&ge(l)&&h.css(l,"display")==="none"};function X(l,u,_,y){var T,E,A=20,H=y?function(){return y.cur()}:function(){return h.css(l,u,"")},F=H(),J=_&&_[3]||(h.cssNumber[u]?"":"px"),ht=l.nodeType&&(h.cssNumber[u]||J!=="px"&&+F)&&Ht.exec(h.css(l,u));if(ht&&ht[3]!==J){for(F=F/2,J=J||ht[3],ht=+F||1;A--;)h.style(l,u,ht+J),(1-E)*(1-(E=H()/F||.5))<=0&&(A=0),ht=ht/E;ht=ht*2,h.style(l,u,ht+J),_=_||[]}return _&&(ht=+ht||+F||0,T=_[1]?ht+(_[1]+1)*_[2]:+_[2],y&&(y.unit=J,y.start=ht,y.end=T)),T}var vt={};function ft(l){var u,_=l.ownerDocument,y=l.nodeName,T=vt[y];return T||(u=_.body.appendChild(_.createElement(y)),T=h.css(u,"display"),u.parentNode.removeChild(u),T==="none"&&(T="block"),vt[y]=T,T)}function mt(l,u){for(var _,y,T=[],E=0,A=l.length;E<A;E++)y=l[E],y.style&&(_=y.style.display,u?(_==="none"&&(T[E]=K.get(y,"display")||null,T[E]||(y.style.display="")),y.style.display===""&&Ae(y)&&(T[E]=ft(y))):_!=="none"&&(T[E]="none",K.set(y,"display",_)));for(E=0;E<A;E++)T[E]!=null&&(l[E].style.display=T[E]);return l}h.fn.extend({show:function(){return mt(this,!0)},hide:function(){return mt(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){Ae(this)?h(this).show():h(this).hide()})}});var Ct=/^(?:checkbox|radio)$/i,Dt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ee=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=v.createDocumentFragment(),u=l.appendChild(v.createElement("div")),_=v.createElement("input");_.setAttribute("type","radio"),_.setAttribute("checked","checked"),_.setAttribute("name","t"),u.appendChild(_),M.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",M.option=!!u.lastChild})();var Ce={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ce.tbody=Ce.tfoot=Ce.colgroup=Ce.caption=Ce.thead,Ce.th=Ce.td,M.option||(Ce.optgroup=Ce.option=[1,"<select multiple='multiple'>","</select>"]);function Le(l,u){var _;return typeof l.getElementsByTagName<"u"?_=l.getElementsByTagName(u||"*"):typeof l.querySelectorAll<"u"?_=l.querySelectorAll(u||"*"):_=[],u===void 0||u&&V(l,u)?h.merge([l],_):_}function we(l,u){for(var _=0,y=l.length;_<y;_++)K.set(l[_],"globalEval",!u||K.get(u[_],"globalEval"))}var Zt=/<|&#?\w+;/;function qt(l,u,_,y,T){for(var E,A,H,F,J,ht,_t=u.createDocumentFragment(),at=[],Et=0,ye=l.length;Et<ye;Et++)if(E=l[Et],E||E===0)if(C(E)==="object")h.merge(at,E.nodeType?[E]:E);else if(!Zt.test(E))at.push(u.createTextNode(E));else{for(A=A||_t.appendChild(u.createElement("div")),H=(Dt.exec(E)||["",""])[1].toLowerCase(),F=Ce[H]||Ce._default,A.innerHTML=F[1]+h.htmlPrefilter(E)+F[2],ht=F[0];ht--;)A=A.lastChild;h.merge(at,A.childNodes),A=_t.firstChild,A.textContent=""}for(_t.textContent="",Et=0;E=at[Et++];){if(y&&h.inArray(E,y)>-1){T&&T.push(E);continue}if(J=ge(E),A=Le(_t.appendChild(E),"script"),J&&we(A),_)for(ht=0;E=A[ht++];)Ee.test(E.type||"")&&_.push(E)}return _t}var ze=/^([^.]*)(?:\.(.+)|)/;function Rt(){return!0}function ie(){return!1}function Qt(l,u,_,y,T,E){var A,H;if(typeof u=="object"){typeof _!="string"&&(y=y||_,_=void 0);for(H in u)Qt(l,H,_,y,u[H],E);return l}if(y==null&&T==null?(T=_,y=_=void 0):T==null&&(typeof _=="string"?(T=y,y=void 0):(T=y,y=_,_=void 0)),T===!1)T=ie;else if(!T)return l;return E===1&&(A=T,T=function(F){return h().off(F),A.apply(this,arguments)},T.guid=A.guid||(A.guid=h.guid++)),l.each(function(){h.event.add(this,u,T,y,_)})}h.event={global:{},add:function(l,u,_,y,T){var E,A,H,F,J,ht,_t,at,Et,ye,Ye,Re=K.get(l);if(pt(l))for(_.handler&&(E=_,_=E.handler,T=E.selector),T&&h.find.matchesSelector(Ut,T),_.guid||(_.guid=h.guid++),(F=Re.events)||(F=Re.events=Object.create(null)),(A=Re.handle)||(A=Re.handle=function(zn){return typeof h<"u"&&h.event.triggered!==zn.type?h.event.dispatch.apply(l,arguments):void 0}),u=(u||"").match(se)||[""],J=u.length;J--;)H=ze.exec(u[J])||[],Et=Ye=H[1],ye=(H[2]||"").split(".").sort(),Et&&(_t=h.event.special[Et]||{},Et=(T?_t.delegateType:_t.bindType)||Et,_t=h.event.special[Et]||{},ht=h.extend({type:Et,origType:Ye,data:y,handler:_,guid:_.guid,selector:T,needsContext:T&&h.expr.match.needsContext.test(T),namespace:ye.join(".")},E),(at=F[Et])||(at=F[Et]=[],at.delegateCount=0,(!_t.setup||_t.setup.call(l,y,ye,A)===!1)&&l.addEventListener&&l.addEventListener(Et,A)),_t.add&&(_t.add.call(l,ht),ht.handler.guid||(ht.handler.guid=_.guid)),T?at.splice(at.delegateCount++,0,ht):at.push(ht),h.event.global[Et]=!0)},remove:function(l,u,_,y,T){var E,A,H,F,J,ht,_t,at,Et,ye,Ye,Re=K.hasData(l)&&K.get(l);if(!(!Re||!(F=Re.events))){for(u=(u||"").match(se)||[""],J=u.length;J--;){if(H=ze.exec(u[J])||[],Et=Ye=H[1],ye=(H[2]||"").split(".").sort(),!Et){for(Et in F)h.event.remove(l,Et+u[J],_,y,!0);continue}for(_t=h.event.special[Et]||{},Et=(y?_t.delegateType:_t.bindType)||Et,at=F[Et]||[],H=H[2]&&new RegExp("(^|\\.)"+ye.join("\\.(?:.*\\.|)")+"(\\.|$)"),A=E=at.length;E--;)ht=at[E],(T||Ye===ht.origType)&&(!_||_.guid===ht.guid)&&(!H||H.test(ht.namespace))&&(!y||y===ht.selector||y==="**"&&ht.selector)&&(at.splice(E,1),ht.selector&&at.delegateCount--,_t.remove&&_t.remove.call(l,ht));A&&!at.length&&((!_t.teardown||_t.teardown.call(l,ye,Re.handle)===!1)&&h.removeEvent(l,Et,Re.handle),delete F[Et])}h.isEmptyObject(F)&&K.remove(l,"handle events")}},dispatch:function(l){var u,_,y,T,E,A,H=new Array(arguments.length),F=h.event.fix(l),J=(K.get(this,"events")||Object.create(null))[F.type]||[],ht=h.event.special[F.type]||{};for(H[0]=F,u=1;u<arguments.length;u++)H[u]=arguments[u];if(F.delegateTarget=this,!(ht.preDispatch&&ht.preDispatch.call(this,F)===!1)){for(A=h.event.handlers.call(this,F,J),u=0;(T=A[u++])&&!F.isPropagationStopped();)for(F.currentTarget=T.elem,_=0;(E=T.handlers[_++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||E.namespace===!1||F.rnamespace.test(E.namespace))&&(F.handleObj=E,F.data=E.data,y=((h.event.special[E.origType]||{}).handle||E.handler).apply(T.elem,H),y!==void 0&&(F.result=y)===!1&&(F.preventDefault(),F.stopPropagation()));return ht.postDispatch&&ht.postDispatch.call(this,F),F.result}},handlers:function(l,u){var _,y,T,E,A,H=[],F=u.delegateCount,J=l.target;if(F&&J.nodeType&&!(l.type==="click"&&l.button>=1)){for(;J!==this;J=J.parentNode||this)if(J.nodeType===1&&!(l.type==="click"&&J.disabled===!0)){for(E=[],A={},_=0;_<F;_++)y=u[_],T=y.selector+" ",A[T]===void 0&&(A[T]=y.needsContext?h(T,this).index(J)>-1:h.find(T,this,null,[J]).length),A[T]&&E.push(y);E.length&&H.push({elem:J,handlers:E})}}return J=this,F<u.length&&H.push({elem:J,handlers:u.slice(F)}),H},addProp:function(l,u){Object.defineProperty(h.Event.prototype,l,{enumerable:!0,configurable:!0,get:S(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(_){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:_})}})},fix:function(l){return l[h.expando]?l:new h.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var u=this||l;return Ct.test(u.type)&&u.click&&V(u,"input")&&fe(u,"click",!0),!1},trigger:function(l){var u=this||l;return Ct.test(u.type)&&u.click&&V(u,"input")&&fe(u,"click"),!0},_default:function(l){var u=l.target;return Ct.test(u.type)&&u.click&&V(u,"input")&&K.get(u,"click")||V(u,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function fe(l,u,_){if(!_){K.get(l,u)===void 0&&h.event.add(l,u,Rt);return}K.set(l,u,!1),h.event.add(l,u,{namespace:!1,handler:function(y){var T,E=K.get(this,u);if(y.isTrigger&1&&this[u]){if(E)(h.event.special[u]||{}).delegateType&&y.stopPropagation();else if(E=s.call(arguments),K.set(this,u,E),this[u](),T=K.get(this,u),K.set(this,u,!1),E!==T)return y.stopImmediatePropagation(),y.preventDefault(),T}else E&&(K.set(this,u,h.event.trigger(E[0],E.slice(1),this)),y.stopPropagation(),y.isImmediatePropagationStopped=Rt)}})}h.removeEvent=function(l,u,_){l.removeEventListener&&l.removeEventListener(u,_)},h.Event=function(l,u){if(!(this instanceof h.Event))return new h.Event(l,u);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?Rt:ie,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,u&&h.extend(this,u),this.timeStamp=l&&l.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:ie,isPropagationStopped:ie,isImmediatePropagationStopped:ie,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=Rt,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=Rt,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=Rt,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(l,u){function _(y){if(v.documentMode){var T=K.get(this,"handle"),E=h.event.fix(y);E.type=y.type==="focusin"?"focus":"blur",E.isSimulated=!0,T(y),E.target===E.currentTarget&&T(E)}else h.event.simulate(u,y.target,h.event.fix(y))}h.event.special[l]={setup:function(){var y;if(fe(this,l,!0),v.documentMode)y=K.get(this,u),y||this.addEventListener(u,_),K.set(this,u,(y||0)+1);else return!1},trigger:function(){return fe(this,l),!0},teardown:function(){var y;if(v.documentMode)y=K.get(this,u)-1,y?K.set(this,u,y):(this.removeEventListener(u,_),K.remove(this,u));else return!1},_default:function(y){return K.get(y.target,l)},delegateType:u},h.event.special[u]={setup:function(){var y=this.ownerDocument||this.document||this,T=v.documentMode?this:y,E=K.get(T,u);E||(v.documentMode?this.addEventListener(u,_):y.addEventListener(l,_,!0)),K.set(T,u,(E||0)+1)},teardown:function(){var y=this.ownerDocument||this.document||this,T=v.documentMode?this:y,E=K.get(T,u)-1;E?K.set(T,u,E):(v.documentMode?this.removeEventListener(u,_):y.removeEventListener(l,_,!0),K.remove(T,u))}}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,u){h.event.special[l]={delegateType:u,bindType:u,handle:function(_){var y,T=this,E=_.relatedTarget,A=_.handleObj;return(!E||E!==T&&!h.contains(T,E))&&(_.type=A.origType,y=A.handler.apply(this,arguments),_.type=u),y}}}),h.fn.extend({on:function(l,u,_,y){return Qt(this,l,u,_,y)},one:function(l,u,_,y){return Qt(this,l,u,_,y,1)},off:function(l,u,_){var y,T;if(l&&l.preventDefault&&l.handleObj)return y=l.handleObj,h(l.delegateTarget).off(y.namespace?y.origType+"."+y.namespace:y.origType,y.selector,y.handler),this;if(typeof l=="object"){for(T in l)this.off(T,u,l[T]);return this}return(u===!1||typeof u=="function")&&(_=u,u=void 0),_===!1&&(_=ie),this.each(function(){h.event.remove(this,l,_,u)})}});var hn=/<script|<style|<link/i,be=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function un(l,u){return V(l,"table")&&V(u.nodeType!==11?u:u.firstChild,"tr")&&h(l).children("tbody")[0]||l}function en(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function Qe(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function je(l,u){var _,y,T,E,A,H,F;if(u.nodeType===1){if(K.hasData(l)&&(E=K.get(l),F=E.events,F)){K.remove(u,"handle events");for(T in F)for(_=0,y=F[T].length;_<y;_++)h.event.add(u,T,F[T][_])}Nt.hasData(l)&&(A=Nt.access(l),H=h.extend({},A),Nt.set(u,H))}}function Kn(l,u){var _=u.nodeName.toLowerCase();_==="input"&&Ct.test(l.type)?u.checked=l.checked:(_==="input"||_==="textarea")&&(u.defaultValue=l.defaultValue)}function Ke(l,u,_,y){u=o(u);var T,E,A,H,F,J,ht=0,_t=l.length,at=_t-1,Et=u[0],ye=S(Et);if(ye||_t>1&&typeof Et=="string"&&!M.checkClone&&be.test(Et))return l.each(function(Ye){var Re=l.eq(Ye);ye&&(u[0]=Et.call(this,Ye,Re.html())),Ke(Re,u,_,y)});if(_t&&(T=qt(u,l[0].ownerDocument,!1,l,y),E=T.firstChild,T.childNodes.length===1&&(T=E),E||y)){for(A=h.map(Le(T,"script"),en),H=A.length;ht<_t;ht++)F=T,ht!==at&&(F=h.clone(F,!0,!0),H&&h.merge(A,Le(F,"script"))),_.call(l[ht],F,ht);if(H)for(J=A[A.length-1].ownerDocument,h.map(A,Qe),ht=0;ht<H;ht++)F=A[ht],Ee.test(F.type||"")&&!K.access(F,"globalEval")&&h.contains(J,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?h._evalUrl&&!F.noModule&&h._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},J):w(F.textContent.replace(rn,""),F,J))}return l}function L(l,u,_){for(var y,T=u?h.filter(u,l):l,E=0;(y=T[E])!=null;E++)!_&&y.nodeType===1&&h.cleanData(Le(y)),y.parentNode&&(_&&ge(y)&&we(Le(y,"script")),y.parentNode.removeChild(y));return l}h.extend({htmlPrefilter:function(l){return l},clone:function(l,u,_){var y,T,E,A,H=l.cloneNode(!0),F=ge(l);if(!M.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!h.isXMLDoc(l))for(A=Le(H),E=Le(l),y=0,T=E.length;y<T;y++)Kn(E[y],A[y]);if(u)if(_)for(E=E||Le(l),A=A||Le(H),y=0,T=E.length;y<T;y++)je(E[y],A[y]);else je(l,H);return A=Le(H,"script"),A.length>0&&we(A,!F&&Le(l,"script")),H},cleanData:function(l){for(var u,_,y,T=h.event.special,E=0;(_=l[E])!==void 0;E++)if(pt(_)){if(u=_[K.expando]){if(u.events)for(y in u.events)T[y]?h.event.remove(_,y):h.removeEvent(_,y,u.handle);_[K.expando]=void 0}_[Nt.expando]&&(_[Nt.expando]=void 0)}}}),h.fn.extend({detach:function(l){return L(this,l,!0)},remove:function(l){return L(this,l)},text:function(l){return me(this,function(u){return u===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,l,arguments.length)},append:function(){return Ke(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=un(this,l);u.appendChild(l)}})},prepend:function(){return Ke(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=un(this,l);u.insertBefore(l,u.firstChild)}})},before:function(){return Ke(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return Ke(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,u=0;(l=this[u])!=null;u++)l.nodeType===1&&(h.cleanData(Le(l,!1)),l.textContent="");return this},clone:function(l,u){return l=l??!1,u=u??l,this.map(function(){return h.clone(this,l,u)})},html:function(l){return me(this,function(u){var _=this[0]||{},y=0,T=this.length;if(u===void 0&&_.nodeType===1)return _.innerHTML;if(typeof u=="string"&&!hn.test(u)&&!Ce[(Dt.exec(u)||["",""])[1].toLowerCase()]){u=h.htmlPrefilter(u);try{for(;y<T;y++)_=this[y]||{},_.nodeType===1&&(h.cleanData(Le(_,!1)),_.innerHTML=u);_=0}catch{}}_&&this.empty().append(u)},null,l,arguments.length)},replaceWith:function(){var l=[];return Ke(this,arguments,function(u){var _=this.parentNode;h.inArray(this,l)<0&&(h.cleanData(Le(this)),_&&_.replaceChild(u,this))},l)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,u){h.fn[l]=function(_){for(var y,T=[],E=h(_),A=E.length-1,H=0;H<=A;H++)y=H===A?this:this.clone(!0),h(E[H])[u](y),a.apply(T,y.get());return this.pushStack(T)}});var Y=new RegExp("^("+kt+")(?!px)[a-z%]+$","i"),et=/^--/,nt=function(l){var u=l.ownerDocument.defaultView;return(!u||!u.opener)&&(u=t),u.getComputedStyle(l)},j=function(l,u,_){var y,T,E={};for(T in u)E[T]=l.style[T],l.style[T]=u[T];y=_.call(l);for(T in u)l.style[T]=E[T];return y},bt=new RegExp(Kt.join("|"),"i");(function(){function l(){if(J){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",J.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ut.appendChild(F).appendChild(J);var ht=t.getComputedStyle(J);_=ht.top!=="1%",H=u(ht.marginLeft)===12,J.style.right="60%",E=u(ht.right)===36,y=u(ht.width)===36,J.style.position="absolute",T=u(J.offsetWidth/3)===12,Ut.removeChild(F),J=null}}function u(ht){return Math.round(parseFloat(ht))}var _,y,T,E,A,H,F=v.createElement("div"),J=v.createElement("div");J.style&&(J.style.backgroundClip="content-box",J.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=J.style.backgroundClip==="content-box",h.extend(M,{boxSizingReliable:function(){return l(),y},pixelBoxStyles:function(){return l(),E},pixelPosition:function(){return l(),_},reliableMarginLeft:function(){return l(),H},scrollboxSize:function(){return l(),T},reliableTrDimensions:function(){var ht,_t,at,Et;return A==null&&(ht=v.createElement("table"),_t=v.createElement("tr"),at=v.createElement("div"),ht.style.cssText="position:absolute;left:-11111px;border-collapse:separate",_t.style.cssText="box-sizing:content-box;border:1px solid",_t.style.height="1px",at.style.height="9px",at.style.display="block",Ut.appendChild(ht).appendChild(_t).appendChild(at),Et=t.getComputedStyle(_t),A=parseInt(Et.height,10)+parseInt(Et.borderTopWidth,10)+parseInt(Et.borderBottomWidth,10)===_t.offsetHeight,Ut.removeChild(ht)),A}}))})();function Ot(l,u,_){var y,T,E,A,H=et.test(u),F=l.style;return _=_||nt(l),_&&(A=_.getPropertyValue(u)||_[u],H&&A&&(A=A.replace(lt,"$1")||void 0),A===""&&!ge(l)&&(A=h.style(l,u)),!M.pixelBoxStyles()&&Y.test(A)&&bt.test(u)&&(y=F.width,T=F.minWidth,E=F.maxWidth,F.minWidth=F.maxWidth=F.width=A,A=_.width,F.width=y,F.minWidth=T,F.maxWidth=E)),A!==void 0?A+"":A}function It(l,u){return{get:function(){if(l()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Lt=["Webkit","Moz","ms"],Yt=v.createElement("div").style,oe={};function $t(l){for(var u=l[0].toUpperCase()+l.slice(1),_=Lt.length;_--;)if(l=Lt[_]+u,l in Yt)return l}function Ie(l){var u=h.cssProps[l]||oe[l];return u||(l in Yt?l:oe[l]=$t(l)||l)}var Oe=/^(none|table(?!-c[ea]).+)/,Je={position:"absolute",visibility:"hidden",display:"block"},xn={letterSpacing:"0",fontWeight:"400"};function Ne(l,u,_){var y=Ht.exec(u);return y?Math.max(0,y[2]-(_||0))+(y[3]||"px"):u}function te(l,u,_,y,T,E){var A=u==="width"?1:0,H=0,F=0,J=0;if(_===(y?"border":"content"))return 0;for(;A<4;A+=2)_==="margin"&&(J+=h.css(l,_+Kt[A],!0,T)),y?(_==="content"&&(F-=h.css(l,"padding"+Kt[A],!0,T)),_!=="margin"&&(F-=h.css(l,"border"+Kt[A]+"Width",!0,T))):(F+=h.css(l,"padding"+Kt[A],!0,T),_!=="padding"?F+=h.css(l,"border"+Kt[A]+"Width",!0,T):H+=h.css(l,"border"+Kt[A]+"Width",!0,T));return!y&&E>=0&&(F+=Math.max(0,Math.ceil(l["offset"+u[0].toUpperCase()+u.slice(1)]-E-F-H-.5))||0),F+J}function Tn(l,u,_){var y=nt(l),T=!M.boxSizingReliable()||_,E=T&&h.css(l,"boxSizing",!1,y)==="border-box",A=E,H=Ot(l,u,y),F="offset"+u[0].toUpperCase()+u.slice(1);if(Y.test(H)){if(!_)return H;H="auto"}return(!M.boxSizingReliable()&&E||!M.reliableTrDimensions()&&V(l,"tr")||H==="auto"||!parseFloat(H)&&h.css(l,"display",!1,y)==="inline")&&l.getClientRects().length&&(E=h.css(l,"boxSizing",!1,y)==="border-box",A=F in l,A&&(H=l[F])),H=parseFloat(H)||0,H+te(l,u,_||(E?"border":"content"),A,y,H)+"px"}h.extend({cssHooks:{opacity:{get:function(l,u){if(u){var _=Ot(l,"opacity");return _===""?"1":_}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(l,u,_,y){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var T,E,A,H=tt(u),F=et.test(u),J=l.style;if(F||(u=Ie(H)),A=h.cssHooks[u]||h.cssHooks[H],_!==void 0){if(E=typeof _,E==="string"&&(T=Ht.exec(_))&&T[1]&&(_=X(l,u,T),E="number"),_==null||_!==_)return;E==="number"&&!F&&(_+=T&&T[3]||(h.cssNumber[H]?"":"px")),!M.clearCloneStyle&&_===""&&u.indexOf("background")===0&&(J[u]="inherit"),(!A||!("set"in A)||(_=A.set(l,_,y))!==void 0)&&(F?J.setProperty(u,_):J[u]=_)}else return A&&"get"in A&&(T=A.get(l,!1,y))!==void 0?T:J[u]}},css:function(l,u,_,y){var T,E,A,H=tt(u),F=et.test(u);return F||(u=Ie(H)),A=h.cssHooks[u]||h.cssHooks[H],A&&"get"in A&&(T=A.get(l,!0,_)),T===void 0&&(T=Ot(l,u,y)),T==="normal"&&u in xn&&(T=xn[u]),_===""||_?(E=parseFloat(T),_===!0||isFinite(E)?E||0:T):T}}),h.each(["height","width"],function(l,u){h.cssHooks[u]={get:function(_,y,T){if(y)return Oe.test(h.css(_,"display"))&&(!_.getClientRects().length||!_.getBoundingClientRect().width)?j(_,Je,function(){return Tn(_,u,T)}):Tn(_,u,T)},set:function(_,y,T){var E,A=nt(_),H=!M.scrollboxSize()&&A.position==="absolute",F=H||T,J=F&&h.css(_,"boxSizing",!1,A)==="border-box",ht=T?te(_,u,T,J,A):0;return J&&H&&(ht-=Math.ceil(_["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(A[u])-te(_,u,"border",!1,A)-.5)),ht&&(E=Ht.exec(y))&&(E[3]||"px")!=="px"&&(_.style[u]=y,y=h.css(_,u)),Ne(_,y,ht)}}}),h.cssHooks.marginLeft=It(M.reliableMarginLeft,function(l,u){if(u)return(parseFloat(Ot(l,"marginLeft"))||l.getBoundingClientRect().left-j(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(l,u){h.cssHooks[l+u]={expand:function(_){for(var y=0,T={},E=typeof _=="string"?_.split(" "):[_];y<4;y++)T[l+Kt[y]+u]=E[y]||E[y-2]||E[0];return T}},l!=="margin"&&(h.cssHooks[l+u].set=Ne)}),h.fn.extend({css:function(l,u){return me(this,function(_,y,T){var E,A,H={},F=0;if(Array.isArray(y)){for(E=nt(_),A=y.length;F<A;F++)H[y[F]]=h.css(_,y[F],!1,E);return H}return T!==void 0?h.style(_,y,T):h.css(_,y)},l,u,arguments.length>1)}});function Me(l,u,_,y,T){return new Me.prototype.init(l,u,_,y,T)}h.Tween=Me,Me.prototype={constructor:Me,init:function(l,u,_,y,T,E){this.elem=l,this.prop=_,this.easing=T||h.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=y,this.unit=E||(h.cssNumber[_]?"":"px")},cur:function(){var l=Me.propHooks[this.prop];return l&&l.get?l.get(this):Me.propHooks._default.get(this)},run:function(l){var u,_=Me.propHooks[this.prop];return this.options.duration?this.pos=u=h.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=u=l,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),_&&_.set?_.set(this):Me.propHooks._default.set(this),this}},Me.prototype.init.prototype=Me.prototype,Me.propHooks={_default:{get:function(l){var u;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(u=h.css(l.elem,l.prop,""),!u||u==="auto"?0:u)},set:function(l){h.fx.step[l.prop]?h.fx.step[l.prop](l):l.elem.nodeType===1&&(h.cssHooks[l.prop]||l.elem.style[Ie(l.prop)]!=null)?h.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},Me.propHooks.scrollTop=Me.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},h.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},h.fx=Me.prototype.init,h.fx.step={};var In,$i,Jn=/^(?:toggle|show|hide)$/,ra=/queueHooks$/;function an(){$i&&(v.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(an):t.setTimeout(an,h.fx.interval),h.fx.tick())}function ji(){return t.setTimeout(function(){In=void 0}),In=Date.now()}function qr(l,u){var _,y=0,T={height:l};for(u=u?1:0;y<4;y+=2-u)_=Kt[y],T["margin"+_]=T["padding"+_]=l;return u&&(T.opacity=T.width=l),T}function Zn(l,u,_){for(var y,T=(ui.tweeners[u]||[]).concat(ui.tweeners["*"]),E=0,A=T.length;E<A;E++)if(y=T[E].call(_,u,l))return y}function sa(l,u,_){var y,T,E,A,H,F,J,ht,_t="width"in u||"height"in u,at=this,Et={},ye=l.style,Ye=l.nodeType&&Ae(l),Re=K.get(l,"fxshow");_.queue||(A=h._queueHooks(l,"fx"),A.unqueued==null&&(A.unqueued=0,H=A.empty.fire,A.empty.fire=function(){A.unqueued||H()}),A.unqueued++,at.always(function(){at.always(function(){A.unqueued--,h.queue(l,"fx").length||A.empty.fire()})}));for(y in u)if(T=u[y],Jn.test(T)){if(delete u[y],E=E||T==="toggle",T===(Ye?"hide":"show"))if(T==="show"&&Re&&Re[y]!==void 0)Ye=!0;else continue;Et[y]=Re&&Re[y]||h.style(l,y)}if(F=!h.isEmptyObject(u),!(!F&&h.isEmptyObject(Et))){_t&&l.nodeType===1&&(_.overflow=[ye.overflow,ye.overflowX,ye.overflowY],J=Re&&Re.display,J==null&&(J=K.get(l,"display")),ht=h.css(l,"display"),ht==="none"&&(J?ht=J:(mt([l],!0),J=l.style.display||J,ht=h.css(l,"display"),mt([l]))),(ht==="inline"||ht==="inline-block"&&J!=null)&&h.css(l,"float")==="none"&&(F||(at.done(function(){ye.display=J}),J==null&&(ht=ye.display,J=ht==="none"?"":ht)),ye.display="inline-block")),_.overflow&&(ye.overflow="hidden",at.always(function(){ye.overflow=_.overflow[0],ye.overflowX=_.overflow[1],ye.overflowY=_.overflow[2]})),F=!1;for(y in Et)F||(Re?"hidden"in Re&&(Ye=Re.hidden):Re=K.access(l,"fxshow",{display:J}),E&&(Re.hidden=!Ye),Ye&&mt([l],!0),at.done(function(){Ye||mt([l]),K.remove(l,"fxshow");for(y in Et)h.style(l,y,Et[y])})),F=Zn(Ye?Re[y]:0,y,at),y in Re||(Re[y]=F.start,Ye&&(F.end=F.start,F.start=0))}}function jc(l,u){var _,y,T,E,A;for(_ in l)if(y=tt(_),T=u[y],E=l[_],Array.isArray(E)&&(T=E[1],E=l[_]=E[0]),_!==y&&(l[y]=E,delete l[_]),A=h.cssHooks[y],A&&"expand"in A){E=A.expand(E),delete l[y];for(_ in E)_ in l||(l[_]=E[_],u[_]=T)}else u[y]=T}function ui(l,u,_){var y,T,E=0,A=ui.prefilters.length,H=h.Deferred().always(function(){delete F.elem}),F=function(){if(T)return!1;for(var _t=In||ji(),at=Math.max(0,J.startTime+J.duration-_t),Et=at/J.duration||0,ye=1-Et,Ye=0,Re=J.tweens.length;Ye<Re;Ye++)J.tweens[Ye].run(ye);return H.notifyWith(l,[J,ye,at]),ye<1&&Re?at:(Re||H.notifyWith(l,[J,1,0]),H.resolveWith(l,[J]),!1)},J=H.promise({elem:l,props:h.extend({},u),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},_),originalProperties:u,originalOptions:_,startTime:In||ji(),duration:_.duration,tweens:[],createTween:function(_t,at){var Et=h.Tween(l,J.opts,_t,at,J.opts.specialEasing[_t]||J.opts.easing);return J.tweens.push(Et),Et},stop:function(_t){var at=0,Et=_t?J.tweens.length:0;if(T)return this;for(T=!0;at<Et;at++)J.tweens[at].run(1);return _t?(H.notifyWith(l,[J,1,0]),H.resolveWith(l,[J,_t])):H.rejectWith(l,[J,_t]),this}}),ht=J.props;for(jc(ht,J.opts.specialEasing);E<A;E++)if(y=ui.prefilters[E].call(J,l,ht,J.opts),y)return S(y.stop)&&(h._queueHooks(J.elem,J.opts.queue).stop=y.stop.bind(y)),y;return h.map(ht,Zn,J),S(J.opts.start)&&J.opts.start.call(l,J),J.progress(J.opts.progress).done(J.opts.done,J.opts.complete).fail(J.opts.fail).always(J.opts.always),h.fx.timer(h.extend(F,{elem:l,anim:J,queue:J.opts.queue})),J}h.Animation=h.extend(ui,{tweeners:{"*":[function(l,u){var _=this.createTween(l,u);return X(_.elem,l,Ht.exec(u),_),_}]},tweener:function(l,u){S(l)?(u=l,l=["*"]):l=l.match(se);for(var _,y=0,T=l.length;y<T;y++)_=l[y],ui.tweeners[_]=ui.tweeners[_]||[],ui.tweeners[_].unshift(u)},prefilters:[sa],prefilter:function(l,u){u?ui.prefilters.unshift(l):ui.prefilters.push(l)}}),h.speed=function(l,u,_){var y=l&&typeof l=="object"?h.extend({},l):{complete:_||!_&&u||S(l)&&l,duration:l,easing:_&&u||u&&!S(u)&&u};return h.fx.off?y.duration=0:typeof y.duration!="number"&&(y.duration in h.fx.speeds?y.duration=h.fx.speeds[y.duration]:y.duration=h.fx.speeds._default),(y.queue==null||y.queue===!0)&&(y.queue="fx"),y.old=y.complete,y.complete=function(){S(y.old)&&y.old.call(this),y.queue&&h.dequeue(this,y.queue)},y},h.fn.extend({fadeTo:function(l,u,_,y){return this.filter(Ae).css("opacity",0).show().end().animate({opacity:u},l,_,y)},animate:function(l,u,_,y){var T=h.isEmptyObject(l),E=h.speed(u,_,y),A=function(){var H=ui(this,h.extend({},l),E);(T||K.get(this,"finish"))&&H.stop(!0)};return A.finish=A,T||E.queue===!1?this.each(A):this.queue(E.queue,A)},stop:function(l,u,_){var y=function(T){var E=T.stop;delete T.stop,E(_)};return typeof l!="string"&&(_=u,u=l,l=void 0),u&&this.queue(l||"fx",[]),this.each(function(){var T=!0,E=l!=null&&l+"queueHooks",A=h.timers,H=K.get(this);if(E)H[E]&&H[E].stop&&y(H[E]);else for(E in H)H[E]&&H[E].stop&&ra.test(E)&&y(H[E]);for(E=A.length;E--;)A[E].elem===this&&(l==null||A[E].queue===l)&&(A[E].anim.stop(_),T=!1,A.splice(E,1));(T||!_)&&h.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var u,_=K.get(this),y=_[l+"queue"],T=_[l+"queueHooks"],E=h.timers,A=y?y.length:0;for(_.finish=!0,h.queue(this,l,[]),T&&T.stop&&T.stop.call(this,!0),u=E.length;u--;)E[u].elem===this&&E[u].queue===l&&(E[u].anim.stop(!0),E.splice(u,1));for(u=0;u<A;u++)y[u]&&y[u].finish&&y[u].finish.call(this);delete _.finish})}}),h.each(["toggle","show","hide"],function(l,u){var _=h.fn[u];h.fn[u]=function(y,T,E){return y==null||typeof y=="boolean"?_.apply(this,arguments):this.animate(qr(u,!0),y,T,E)}}),h.each({slideDown:qr("show"),slideUp:qr("hide"),slideToggle:qr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,u){h.fn[l]=function(_,y,T){return this.animate(u,_,y,T)}}),h.timers=[],h.fx.tick=function(){var l,u=0,_=h.timers;for(In=Date.now();u<_.length;u++)l=_[u],!l()&&_[u]===l&&_.splice(u--,1);_.length||h.fx.stop(),In=void 0},h.fx.timer=function(l){h.timers.push(l),h.fx.start()},h.fx.interval=13,h.fx.start=function(){$i||($i=!0,an())},h.fx.stop=function(){$i=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(l,u){return l=h.fx&&h.fx.speeds[l]||l,u=u||"fx",this.queue(u,function(_,y){var T=t.setTimeout(_,l);y.stop=function(){t.clearTimeout(T)}})},function(){var l=v.createElement("input"),u=v.createElement("select"),_=u.appendChild(v.createElement("option"));l.type="checkbox",M.checkOn=l.value!=="",M.optSelected=_.selected,l=v.createElement("input"),l.value="t",l.type="radio",M.radioValue=l.value==="t"}();var dd,oa=h.expr.attrHandle;h.fn.extend({attr:function(l,u){return me(this,h.attr,l,u,arguments.length>1)},removeAttr:function(l){return this.each(function(){h.removeAttr(this,l)})}}),h.extend({attr:function(l,u,_){var y,T,E=l.nodeType;if(!(E===3||E===8||E===2)){if(typeof l.getAttribute>"u")return h.prop(l,u,_);if((E!==1||!h.isXMLDoc(l))&&(T=h.attrHooks[u.toLowerCase()]||(h.expr.match.bool.test(u)?dd:void 0)),_!==void 0){if(_===null){h.removeAttr(l,u);return}return T&&"set"in T&&(y=T.set(l,_,u))!==void 0?y:(l.setAttribute(u,_+""),_)}return T&&"get"in T&&(y=T.get(l,u))!==null?y:(y=h.find.attr(l,u),y??void 0)}},attrHooks:{type:{set:function(l,u){if(!M.radioValue&&u==="radio"&&V(l,"input")){var _=l.value;return l.setAttribute("type",u),_&&(l.value=_),u}}}},removeAttr:function(l,u){var _,y=0,T=u&&u.match(se);if(T&&l.nodeType===1)for(;_=T[y++];)l.removeAttribute(_)}}),dd={set:function(l,u,_){return u===!1?h.removeAttr(l,_):l.setAttribute(_,_),_}},h.each(h.expr.match.bool.source.match(/\w+/g),function(l,u){var _=oa[u]||h.find.attr;oa[u]=function(y,T,E){var A,H,F=T.toLowerCase();return E||(H=oa[F],oa[F]=A,A=_(y,T,E)!=null?F:null,oa[F]=H),A}});var R_=/^(?:input|select|textarea|button)$/i,P_=/^(?:a|area)$/i;h.fn.extend({prop:function(l,u){return me(this,h.prop,l,u,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[h.propFix[l]||l]})}}),h.extend({prop:function(l,u,_){var y,T,E=l.nodeType;if(!(E===3||E===8||E===2))return(E!==1||!h.isXMLDoc(l))&&(u=h.propFix[u]||u,T=h.propHooks[u]),_!==void 0?T&&"set"in T&&(y=T.set(l,_,u))!==void 0?y:l[u]=_:T&&"get"in T&&(y=T.get(l,u))!==null?y:l[u]},propHooks:{tabIndex:{get:function(l){var u=h.find.attr(l,"tabindex");return u?parseInt(u,10):R_.test(l.nodeName)||P_.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(h.propHooks.selected={get:function(l){var u=l.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(l){var u=l.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function Ss(l){var u=l.match(se)||[];return u.join(" ")}function Ms(l){return l.getAttribute&&l.getAttribute("class")||""}function Kc(l){return Array.isArray(l)?l:typeof l=="string"?l.match(se)||[]:[]}h.fn.extend({addClass:function(l){var u,_,y,T,E,A;return S(l)?this.each(function(H){h(this).addClass(l.call(this,H,Ms(this)))}):(u=Kc(l),u.length?this.each(function(){if(y=Ms(this),_=this.nodeType===1&&" "+Ss(y)+" ",_){for(E=0;E<u.length;E++)T=u[E],_.indexOf(" "+T+" ")<0&&(_+=T+" ");A=Ss(_),y!==A&&this.setAttribute("class",A)}}):this)},removeClass:function(l){var u,_,y,T,E,A;return S(l)?this.each(function(H){h(this).removeClass(l.call(this,H,Ms(this)))}):arguments.length?(u=Kc(l),u.length?this.each(function(){if(y=Ms(this),_=this.nodeType===1&&" "+Ss(y)+" ",_){for(E=0;E<u.length;E++)for(T=u[E];_.indexOf(" "+T+" ")>-1;)_=_.replace(" "+T+" "," ");A=Ss(_),y!==A&&this.setAttribute("class",A)}}):this):this.attr("class","")},toggleClass:function(l,u){var _,y,T,E,A=typeof l,H=A==="string"||Array.isArray(l);return S(l)?this.each(function(F){h(this).toggleClass(l.call(this,F,Ms(this),u),u)}):typeof u=="boolean"&&H?u?this.addClass(l):this.removeClass(l):(_=Kc(l),this.each(function(){if(H)for(E=h(this),T=0;T<_.length;T++)y=_[T],E.hasClass(y)?E.removeClass(y):E.addClass(y);else(l===void 0||A==="boolean")&&(y=Ms(this),y&&K.set(this,"__className__",y),this.setAttribute&&this.setAttribute("class",y||l===!1?"":K.get(this,"__className__")||""))}))},hasClass:function(l){var u,_,y=0;for(u=" "+l+" ";_=this[y++];)if(_.nodeType===1&&(" "+Ss(Ms(_))+" ").indexOf(u)>-1)return!0;return!1}});var D_=/\r/g;h.fn.extend({val:function(l){var u,_,y,T=this[0];return arguments.length?(y=S(l),this.each(function(E){var A;this.nodeType===1&&(y?A=l.call(this,E,h(this).val()):A=l,A==null?A="":typeof A=="number"?A+="":Array.isArray(A)&&(A=h.map(A,function(H){return H==null?"":H+""})),u=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,A,"value")===void 0)&&(this.value=A))})):T?(u=h.valHooks[T.type]||h.valHooks[T.nodeName.toLowerCase()],u&&"get"in u&&(_=u.get(T,"value"))!==void 0?_:(_=T.value,typeof _=="string"?_.replace(D_,""):_??"")):void 0}}),h.extend({valHooks:{option:{get:function(l){var u=h.find.attr(l,"value");return u??Ss(h.text(l))}},select:{get:function(l){var u,_,y,T=l.options,E=l.selectedIndex,A=l.type==="select-one",H=A?null:[],F=A?E+1:T.length;for(E<0?y=F:y=A?E:0;y<F;y++)if(_=T[y],(_.selected||y===E)&&!_.disabled&&(!_.parentNode.disabled||!V(_.parentNode,"optgroup"))){if(u=h(_).val(),A)return u;H.push(u)}return H},set:function(l,u){for(var _,y,T=l.options,E=h.makeArray(u),A=T.length;A--;)y=T[A],(y.selected=h.inArray(h.valHooks.option.get(y),E)>-1)&&(_=!0);return _||(l.selectedIndex=-1),E}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(l,u){if(Array.isArray(u))return l.checked=h.inArray(h(l).val(),u)>-1}},M.checkOn||(h.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})});var aa=t.location,pd={guid:Date.now()},Jc=/\?/;h.parseXML=function(l){var u,_;if(!l||typeof l!="string")return null;try{u=new t.DOMParser().parseFromString(l,"text/xml")}catch{}return _=u&&u.getElementsByTagName("parsererror")[0],(!u||_)&&h.error("Invalid XML: "+(_?h.map(_.childNodes,function(y){return y.textContent}).join(`
`):l)),u};var md=/^(?:focusinfocus|focusoutblur)$/,gd=function(l){l.stopPropagation()};h.extend(h.event,{trigger:function(l,u,_,y){var T,E,A,H,F,J,ht,_t,at=[_||v],Et=m.call(l,"type")?l.type:l,ye=m.call(l,"namespace")?l.namespace.split("."):[];if(E=_t=A=_=_||v,!(_.nodeType===3||_.nodeType===8)&&!md.test(Et+h.event.triggered)&&(Et.indexOf(".")>-1&&(ye=Et.split("."),Et=ye.shift(),ye.sort()),F=Et.indexOf(":")<0&&"on"+Et,l=l[h.expando]?l:new h.Event(Et,typeof l=="object"&&l),l.isTrigger=y?2:3,l.namespace=ye.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+ye.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=_),u=u==null?[l]:h.makeArray(u,[l]),ht=h.event.special[Et]||{},!(!y&&ht.trigger&&ht.trigger.apply(_,u)===!1))){if(!y&&!ht.noBubble&&!x(_)){for(H=ht.delegateType||Et,md.test(H+Et)||(E=E.parentNode);E;E=E.parentNode)at.push(E),A=E;A===(_.ownerDocument||v)&&at.push(A.defaultView||A.parentWindow||t)}for(T=0;(E=at[T++])&&!l.isPropagationStopped();)_t=E,l.type=T>1?H:ht.bindType||Et,J=(K.get(E,"events")||Object.create(null))[l.type]&&K.get(E,"handle"),J&&J.apply(E,u),J=F&&E[F],J&&J.apply&&pt(E)&&(l.result=J.apply(E,u),l.result===!1&&l.preventDefault());return l.type=Et,!y&&!l.isDefaultPrevented()&&(!ht._default||ht._default.apply(at.pop(),u)===!1)&&pt(_)&&F&&S(_[Et])&&!x(_)&&(A=_[F],A&&(_[F]=null),h.event.triggered=Et,l.isPropagationStopped()&&_t.addEventListener(Et,gd),_[Et](),l.isPropagationStopped()&&_t.removeEventListener(Et,gd),h.event.triggered=void 0,A&&(_[F]=A)),l.result}},simulate:function(l,u,_){var y=h.extend(new h.Event,_,{type:l,isSimulated:!0});h.event.trigger(y,null,u)}}),h.fn.extend({trigger:function(l,u){return this.each(function(){h.event.trigger(l,u,this)})},triggerHandler:function(l,u){var _=this[0];if(_)return h.event.trigger(l,u,_,!0)}});var L_=/\[\]$/,_d=/\r?\n/g,I_=/^(?:submit|button|image|reset|file)$/i,N_=/^(?:input|select|textarea|keygen)/i;function Zc(l,u,_,y){var T;if(Array.isArray(u))h.each(u,function(E,A){_||L_.test(l)?y(l,A):Zc(l+"["+(typeof A=="object"&&A!=null?E:"")+"]",A,_,y)});else if(!_&&C(u)==="object")for(T in u)Zc(l+"["+T+"]",u[T],_,y);else y(l,u)}h.param=function(l,u){var _,y=[],T=function(E,A){var H=S(A)?A():A;y[y.length]=encodeURIComponent(E)+"="+encodeURIComponent(H??"")};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!h.isPlainObject(l))h.each(l,function(){T(this.name,this.value)});else for(_ in l)Zc(_,l[_],u,T);return y.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=h.prop(this,"elements");return l?h.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!h(this).is(":disabled")&&N_.test(this.nodeName)&&!I_.test(l)&&(this.checked||!Ct.test(l))}).map(function(l,u){var _=h(this).val();return _==null?null:Array.isArray(_)?h.map(_,function(y){return{name:u.name,value:y.replace(_d,`\r
`)}}):{name:u.name,value:_.replace(_d,`\r
`)}}).get()}});var U_=/%20/g,O_=/#.*$/,F_=/([?&])_=[^&]*/,B_=/^(.*?):[ \t]*([^\r\n]*)$/mg,z_=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,k_=/^(?:GET|HEAD)$/,H_=/^\/\//,vd={},Qc={},xd="*/".concat("*"),tu=v.createElement("a");tu.href=aa.href;function yd(l){return function(u,_){typeof u!="string"&&(_=u,u="*");var y,T=0,E=u.toLowerCase().match(se)||[];if(S(_))for(;y=E[T++];)y[0]==="+"?(y=y.slice(1)||"*",(l[y]=l[y]||[]).unshift(_)):(l[y]=l[y]||[]).push(_)}}function Sd(l,u,_,y){var T={},E=l===Qc;function A(H){var F;return T[H]=!0,h.each(l[H]||[],function(J,ht){var _t=ht(u,_,y);if(typeof _t=="string"&&!E&&!T[_t])return u.dataTypes.unshift(_t),A(_t),!1;if(E)return!(F=_t)}),F}return A(u.dataTypes[0])||!T["*"]&&A("*")}function eu(l,u){var _,y,T=h.ajaxSettings.flatOptions||{};for(_ in u)u[_]!==void 0&&((T[_]?l:y||(y={}))[_]=u[_]);return y&&h.extend(!0,l,y),l}function V_(l,u,_){for(var y,T,E,A,H=l.contents,F=l.dataTypes;F[0]==="*";)F.shift(),y===void 0&&(y=l.mimeType||u.getResponseHeader("Content-Type"));if(y){for(T in H)if(H[T]&&H[T].test(y)){F.unshift(T);break}}if(F[0]in _)E=F[0];else{for(T in _){if(!F[0]||l.converters[T+" "+F[0]]){E=T;break}A||(A=T)}E=E||A}if(E)return E!==F[0]&&F.unshift(E),_[E]}function G_(l,u,_,y){var T,E,A,H,F,J={},ht=l.dataTypes.slice();if(ht[1])for(A in l.converters)J[A.toLowerCase()]=l.converters[A];for(E=ht.shift();E;)if(l.responseFields[E]&&(_[l.responseFields[E]]=u),!F&&y&&l.dataFilter&&(u=l.dataFilter(u,l.dataType)),F=E,E=ht.shift(),E){if(E==="*")E=F;else if(F!=="*"&&F!==E){if(A=J[F+" "+E]||J["* "+E],!A){for(T in J)if(H=T.split(" "),H[1]===E&&(A=J[F+" "+H[0]]||J["* "+H[0]],A)){A===!0?A=J[T]:J[T]!==!0&&(E=H[0],ht.unshift(H[1]));break}}if(A!==!0)if(A&&l.throws)u=A(u);else try{u=A(u)}catch(_t){return{state:"parsererror",error:A?_t:"No conversion from "+F+" to "+E}}}}return{state:"success",data:u}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:aa.href,type:"GET",isLocal:z_.test(aa.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xd,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,u){return u?eu(eu(l,h.ajaxSettings),u):eu(h.ajaxSettings,l)},ajaxPrefilter:yd(vd),ajaxTransport:yd(Qc),ajax:function(l,u){typeof l=="object"&&(u=l,l=void 0),u=u||{};var _,y,T,E,A,H,F,J,ht,_t,at=h.ajaxSetup({},u),Et=at.context||at,ye=at.context&&(Et.nodeType||Et.jquery)?h(Et):h.event,Ye=h.Deferred(),Re=h.Callbacks("once memory"),zn=at.statusCode||{},An={},or={},ar="canceled",Ge={readyState:0,getResponseHeader:function($e){var gn;if(F){if(!E)for(E={};gn=B_.exec(T);)E[gn[1].toLowerCase()+" "]=(E[gn[1].toLowerCase()+" "]||[]).concat(gn[2]);gn=E[$e.toLowerCase()+" "]}return gn==null?null:gn.join(", ")},getAllResponseHeaders:function(){return F?T:null},setRequestHeader:function($e,gn){return F==null&&($e=or[$e.toLowerCase()]=or[$e.toLowerCase()]||$e,An[$e]=gn),this},overrideMimeType:function($e){return F==null&&(at.mimeType=$e),this},statusCode:function($e){var gn;if($e)if(F)Ge.always($e[Ge.status]);else for(gn in $e)zn[gn]=[zn[gn],$e[gn]];return this},abort:function($e){var gn=$e||ar;return _&&_.abort(gn),Ts(0,gn),this}};if(Ye.promise(Ge),at.url=((l||at.url||aa.href)+"").replace(H_,aa.protocol+"//"),at.type=u.method||u.type||at.method||at.type,at.dataTypes=(at.dataType||"*").toLowerCase().match(se)||[""],at.crossDomain==null){H=v.createElement("a");try{H.href=at.url,H.href=H.href,at.crossDomain=tu.protocol+"//"+tu.host!=H.protocol+"//"+H.host}catch{at.crossDomain=!0}}if(at.data&&at.processData&&typeof at.data!="string"&&(at.data=h.param(at.data,at.traditional)),Sd(vd,at,u,Ge),F)return Ge;J=h.event&&at.global,J&&h.active++===0&&h.event.trigger("ajaxStart"),at.type=at.type.toUpperCase(),at.hasContent=!k_.test(at.type),y=at.url.replace(O_,""),at.hasContent?at.data&&at.processData&&(at.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(at.data=at.data.replace(U_,"+")):(_t=at.url.slice(y.length),at.data&&(at.processData||typeof at.data=="string")&&(y+=(Jc.test(y)?"&":"?")+at.data,delete at.data),at.cache===!1&&(y=y.replace(F_,"$1"),_t=(Jc.test(y)?"&":"?")+"_="+pd.guid+++_t),at.url=y+_t),at.ifModified&&(h.lastModified[y]&&Ge.setRequestHeader("If-Modified-Since",h.lastModified[y]),h.etag[y]&&Ge.setRequestHeader("If-None-Match",h.etag[y])),(at.data&&at.hasContent&&at.contentType!==!1||u.contentType)&&Ge.setRequestHeader("Content-Type",at.contentType),Ge.setRequestHeader("Accept",at.dataTypes[0]&&at.accepts[at.dataTypes[0]]?at.accepts[at.dataTypes[0]]+(at.dataTypes[0]!=="*"?", "+xd+"; q=0.01":""):at.accepts["*"]);for(ht in at.headers)Ge.setRequestHeader(ht,at.headers[ht]);if(at.beforeSend&&(at.beforeSend.call(Et,Ge,at)===!1||F))return Ge.abort();if(ar="abort",Re.add(at.complete),Ge.done(at.success),Ge.fail(at.error),_=Sd(Qc,at,u,Ge),!_)Ts(-1,"No Transport");else{if(Ge.readyState=1,J&&ye.trigger("ajaxSend",[Ge,at]),F)return Ge;at.async&&at.timeout>0&&(A=t.setTimeout(function(){Ge.abort("timeout")},at.timeout));try{F=!1,_.send(An,Ts)}catch($e){if(F)throw $e;Ts(-1,$e)}}function Ts($e,gn,ca,iu){var lr,ua,cr,Yr,$r,Ni=gn;F||(F=!0,A&&t.clearTimeout(A),_=void 0,T=iu||"",Ge.readyState=$e>0?4:0,lr=$e>=200&&$e<300||$e===304,ca&&(Yr=V_(at,Ge,ca)),!lr&&h.inArray("script",at.dataTypes)>-1&&h.inArray("json",at.dataTypes)<0&&(at.converters["text script"]=function(){}),Yr=G_(at,Yr,Ge,lr),lr?(at.ifModified&&($r=Ge.getResponseHeader("Last-Modified"),$r&&(h.lastModified[y]=$r),$r=Ge.getResponseHeader("etag"),$r&&(h.etag[y]=$r)),$e===204||at.type==="HEAD"?Ni="nocontent":$e===304?Ni="notmodified":(Ni=Yr.state,ua=Yr.data,cr=Yr.error,lr=!cr)):(cr=Ni,($e||!Ni)&&(Ni="error",$e<0&&($e=0))),Ge.status=$e,Ge.statusText=(gn||Ni)+"",lr?Ye.resolveWith(Et,[ua,Ni,Ge]):Ye.rejectWith(Et,[Ge,Ni,cr]),Ge.statusCode(zn),zn=void 0,J&&ye.trigger(lr?"ajaxSuccess":"ajaxError",[Ge,at,lr?ua:cr]),Re.fireWith(Et,[Ge,Ni]),J&&(ye.trigger("ajaxComplete",[Ge,at]),--h.active||h.event.trigger("ajaxStop")))}return Ge},getJSON:function(l,u,_){return h.get(l,u,_,"json")},getScript:function(l,u){return h.get(l,void 0,u,"script")}}),h.each(["get","post"],function(l,u){h[u]=function(_,y,T,E){return S(y)&&(E=E||T,T=y,y=void 0),h.ajax(h.extend({url:_,type:u,dataType:E,data:y,success:T},h.isPlainObject(_)&&_))}}),h.ajaxPrefilter(function(l){var u;for(u in l.headers)u.toLowerCase()==="content-type"&&(l.contentType=l.headers[u]||"")}),h._evalUrl=function(l,u,_){return h.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(y){h.globalEval(y,u,_)}})},h.fn.extend({wrapAll:function(l){var u;return this[0]&&(S(l)&&(l=l.call(this[0])),u=h(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var _=this;_.firstElementChild;)_=_.firstElementChild;return _}).append(this)),this},wrapInner:function(l){return S(l)?this.each(function(u){h(this).wrapInner(l.call(this,u))}):this.each(function(){var u=h(this),_=u.contents();_.length?_.wrapAll(l):u.append(l)})},wrap:function(l){var u=S(l);return this.each(function(_){h(this).wrapAll(u?l.call(this,_):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(l){return!h.expr.pseudos.visible(l)},h.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var W_={0:200,1223:204},la=h.ajaxSettings.xhr();M.cors=!!la&&"withCredentials"in la,M.ajax=la=!!la,h.ajaxTransport(function(l){var u,_;if(M.cors||la&&!l.crossDomain)return{send:function(y,T){var E,A=l.xhr();if(A.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(E in l.xhrFields)A[E]=l.xhrFields[E];l.mimeType&&A.overrideMimeType&&A.overrideMimeType(l.mimeType),!l.crossDomain&&!y["X-Requested-With"]&&(y["X-Requested-With"]="XMLHttpRequest");for(E in y)A.setRequestHeader(E,y[E]);u=function(H){return function(){u&&(u=_=A.onload=A.onerror=A.onabort=A.ontimeout=A.onreadystatechange=null,H==="abort"?A.abort():H==="error"?typeof A.status!="number"?T(0,"error"):T(A.status,A.statusText):T(W_[A.status]||A.status,A.statusText,(A.responseType||"text")!=="text"||typeof A.responseText!="string"?{binary:A.response}:{text:A.responseText},A.getAllResponseHeaders()))}},A.onload=u(),_=A.onerror=A.ontimeout=u("error"),A.onabort!==void 0?A.onabort=_:A.onreadystatechange=function(){A.readyState===4&&t.setTimeout(function(){u&&_()})},u=u("abort");try{A.send(l.hasContent&&l.data||null)}catch(H){if(u)throw H}},abort:function(){u&&u()}}}),h.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return h.globalEval(l),l}}}),h.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),h.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var u,_;return{send:function(y,T){u=h("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",_=function(E){u.remove(),_=null,E&&T(E.type==="error"?404:200,E.type)}),v.head.appendChild(u[0])},abort:function(){_&&_()}}}});var Md=[],nu=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=Md.pop()||h.expando+"_"+pd.guid++;return this[l]=!0,l}}),h.ajaxPrefilter("json jsonp",function(l,u,_){var y,T,E,A=l.jsonp!==!1&&(nu.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&nu.test(l.data)&&"data");if(A||l.dataTypes[0]==="jsonp")return y=l.jsonpCallback=S(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,A?l[A]=l[A].replace(nu,"$1"+y):l.jsonp!==!1&&(l.url+=(Jc.test(l.url)?"&":"?")+l.jsonp+"="+y),l.converters["script json"]=function(){return E||h.error(y+" was not called"),E[0]},l.dataTypes[0]="json",T=t[y],t[y]=function(){E=arguments},_.always(function(){T===void 0?h(t).removeProp(y):t[y]=T,l[y]&&(l.jsonpCallback=u.jsonpCallback,Md.push(y)),E&&S(T)&&T(E[0]),E=T=void 0}),"script"}),M.createHTMLDocument=function(){var l=v.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),h.parseHTML=function(l,u,_){if(typeof l!="string")return[];typeof u=="boolean"&&(_=u,u=!1);var y,T,E;return u||(M.createHTMLDocument?(u=v.implementation.createHTMLDocument(""),y=u.createElement("base"),y.href=v.location.href,u.head.appendChild(y)):u=v),T=de.exec(l),E=!_&&[],T?[u.createElement(T[1])]:(T=qt([l],u,E),E&&E.length&&h(E).remove(),h.merge([],T.childNodes))},h.fn.load=function(l,u,_){var y,T,E,A=this,H=l.indexOf(" ");return H>-1&&(y=Ss(l.slice(H)),l=l.slice(0,H)),S(u)?(_=u,u=void 0):u&&typeof u=="object"&&(T="POST"),A.length>0&&h.ajax({url:l,type:T||"GET",dataType:"html",data:u}).done(function(F){E=arguments,A.html(y?h("<div>").append(h.parseHTML(F)).find(y):F)}).always(_&&function(F,J){A.each(function(){_.apply(this,E||[F.responseText,J,F])})}),this},h.expr.pseudos.animated=function(l){return h.grep(h.timers,function(u){return l===u.elem}).length},h.offset={setOffset:function(l,u,_){var y,T,E,A,H,F,J,ht=h.css(l,"position"),_t=h(l),at={};ht==="static"&&(l.style.position="relative"),H=_t.offset(),E=h.css(l,"top"),F=h.css(l,"left"),J=(ht==="absolute"||ht==="fixed")&&(E+F).indexOf("auto")>-1,J?(y=_t.position(),A=y.top,T=y.left):(A=parseFloat(E)||0,T=parseFloat(F)||0),S(u)&&(u=u.call(l,_,h.extend({},H))),u.top!=null&&(at.top=u.top-H.top+A),u.left!=null&&(at.left=u.left-H.left+T),"using"in u?u.using.call(l,at):_t.css(at)}},h.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(T){h.offset.setOffset(this,l,T)});var u,_,y=this[0];if(y)return y.getClientRects().length?(u=y.getBoundingClientRect(),_=y.ownerDocument.defaultView,{top:u.top+_.pageYOffset,left:u.left+_.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var l,u,_,y=this[0],T={top:0,left:0};if(h.css(y,"position")==="fixed")u=y.getBoundingClientRect();else{for(u=this.offset(),_=y.ownerDocument,l=y.offsetParent||_.documentElement;l&&(l===_.body||l===_.documentElement)&&h.css(l,"position")==="static";)l=l.parentNode;l&&l!==y&&l.nodeType===1&&(T=h(l).offset(),T.top+=h.css(l,"borderTopWidth",!0),T.left+=h.css(l,"borderLeftWidth",!0))}return{top:u.top-T.top-h.css(y,"marginTop",!0),left:u.left-T.left-h.css(y,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&h.css(l,"position")==="static";)l=l.offsetParent;return l||Ut})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,u){var _=u==="pageYOffset";h.fn[l]=function(y){return me(this,function(T,E,A){var H;if(x(T)?H=T:T.nodeType===9&&(H=T.defaultView),A===void 0)return H?H[u]:T[E];H?H.scrollTo(_?H.pageXOffset:A,_?A:H.pageYOffset):T[E]=A},l,y,arguments.length)}}),h.each(["top","left"],function(l,u){h.cssHooks[u]=It(M.pixelPosition,function(_,y){if(y)return y=Ot(_,u),Y.test(y)?h(_).position()[u]+"px":y})}),h.each({Height:"height",Width:"width"},function(l,u){h.each({padding:"inner"+l,content:u,"":"outer"+l},function(_,y){h.fn[y]=function(T,E){var A=arguments.length&&(_||typeof T!="boolean"),H=_||(T===!0||E===!0?"margin":"border");return me(this,function(F,J,ht){var _t;return x(F)?y.indexOf("outer")===0?F["inner"+l]:F.document.documentElement["client"+l]:F.nodeType===9?(_t=F.documentElement,Math.max(F.body["scroll"+l],_t["scroll"+l],F.body["offset"+l],_t["offset"+l],_t["client"+l])):ht===void 0?h.css(F,J,H):h.style(F,J,ht,H)},u,A?T:void 0,A)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,u){h.fn[u]=function(_){return this.on(u,_)}}),h.fn.extend({bind:function(l,u,_){return this.on(l,null,u,_)},unbind:function(l,u){return this.off(l,null,u)},delegate:function(l,u,_,y){return this.on(u,l,_,y)},undelegate:function(l,u,_){return arguments.length===1?this.off(l,"**"):this.off(u,l||"**",_)},hover:function(l,u){return this.on("mouseenter",l).on("mouseleave",u||l)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,u){h.fn[u]=function(_,y){return arguments.length>0?this.on(u,null,_,y):this.trigger(u)}});var X_=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(l,u){var _,y,T;if(typeof u=="string"&&(_=l[u],u=l,l=_),!!S(l))return y=s.call(arguments,2),T=function(){return l.apply(u||this,y.concat(s.call(arguments)))},T.guid=l.guid=l.guid||h.guid++,T},h.holdReady=function(l){l?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=V,h.isFunction=S,h.isWindow=x,h.camelCase=tt,h.type=C,h.now=Date.now,h.isNumeric=function(l){var u=h.type(l);return(u==="number"||u==="string")&&!isNaN(l-parseFloat(l))},h.trim=function(l){return l==null?"":(l+"").replace(X_,"$1")};var q_=t.jQuery,Y_=t.$;return h.noConflict=function(l){return t.$===h&&(t.$=Y_),l&&t.jQuery===h&&(t.jQuery=q_),h},typeof e>"u"&&(t.jQuery=t.$=h),h})})(lm);var sv=lm.exports;const ee=rv(sv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="169",ov=0,wd=1,av=2,cm=1,lv=2,Rr=3,ms=0,mi=1,Lr=2,Br=0,Do=1,ff=2,Ad=3,Cd=4,cv=5,Bs=100,uv=101,fv=102,hv=103,dv=104,pv=200,mv=201,gv=202,_v=203,hf=204,df=205,vv=206,xv=207,yv=208,Sv=209,Mv=210,Tv=211,Ev=212,bv=213,wv=214,pf=0,mf=1,gf=2,ko=3,_f=4,vf=5,xf=6,yf=7,um=0,Av=1,Cv=2,us=0,Rv=1,Pv=2,fm=3,Dv=4,Lv=5,Iv=6,Nv=7,hm=300,Ho=301,Vo=302,Sf=303,Mf=304,Uc=306,Tf=1e3,ks=1001,Ef=1002,Hi=1003,Uv=1004,fl=1005,nr=1006,uu=1007,Hs=1008,Vr=1009,dm=1010,pm=1011,qa=1012,Ph=1013,Js=1014,Nr=1015,zr=1016,Dh=1017,Lh=1018,Go=1020,mm=35902,gm=1021,_m=1022,rr=1023,vm=1024,xm=1025,Lo=1026,Wo=1027,ym=1028,Ih=1029,Sm=1030,Nh=1031,Uh=1033,jl=33776,Kl=33777,Jl=33778,Zl=33779,bf=35840,wf=35841,Af=35842,Cf=35843,Rf=36196,Pf=37492,Df=37496,Lf=37808,If=37809,Nf=37810,Uf=37811,Of=37812,Ff=37813,Bf=37814,zf=37815,kf=37816,Hf=37817,Vf=37818,Gf=37819,Wf=37820,Xf=37821,Ql=36492,qf=36494,Yf=36495,Mm=36283,$f=36284,jf=36285,Kf=36286,Ov=3200,Fv=3201,Tm=0,Bv=1,rs="",fr="srgb",xs="srgb-linear",Oh="display-p3",Oc="display-p3-linear",fc="linear",ln="srgb",hc="rec709",dc="p3",ao=7680,Rd=519,zv=512,kv=513,Hv=514,Em=515,Vv=516,Gv=517,Wv=518,Xv=519,Pd=35044,Dd="300 es",Ur=2e3,pc=2001;class ta{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,Jf=180/Math.PI;function nl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function qn(r,t,e){return Math.max(t,Math.min(e,r))}function qv(r,t){return(r%t+t)%t}function hu(r,t,e){return(1-e)*r+e*t}function ha(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(t,e,n,i,s,o,a,c,f){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,f)}set(t,e,n,i,s,o,a,c,f){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],f=n[1],d=n[4],m=n[7],g=n[2],p=n[5],M=n[8],S=i[0],x=i[3],v=i[6],P=i[1],w=i[4],C=i[7],O=i[2],I=i[5],h=i[8];return s[0]=o*S+a*P+c*O,s[3]=o*x+a*w+c*I,s[6]=o*v+a*C+c*h,s[1]=f*S+d*P+m*O,s[4]=f*x+d*w+m*I,s[7]=f*v+d*C+m*h,s[2]=g*S+p*P+M*O,s[5]=g*x+p*w+M*I,s[8]=g*v+p*C+M*h,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],f=t[7],d=t[8];return e*o*d-e*a*f-n*s*d+n*a*c+i*s*f-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],f=t[7],d=t[8],m=d*o-a*f,g=a*c-d*s,p=f*s-o*c,M=e*m+n*g+i*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=m*S,t[1]=(i*f-d*n)*S,t[2]=(a*n-i*o)*S,t[3]=g*S,t[4]=(d*e-i*c)*S,t[5]=(i*s-a*e)*S,t[6]=p*S,t[7]=(n*c-f*e)*S,t[8]=(o*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),f=Math.sin(s);return this.set(n*c,n*f,-n*(c*o+f*a)+o+t,-i*f,i*c,-i*(-f*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(du.makeScale(t,e)),this}rotate(t){return this.premultiply(du.makeRotation(-t)),this}translate(t,e){return this.premultiply(du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const du=new De;function bm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yv(){const r=mc("canvas");return r.style.display="block",r}const Ld={};function tc(r){r in Ld||(Ld[r]=!0,console.warn(r))}function $v(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function jv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Id=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nd=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),da={[xs]:{transfer:fc,primaries:hc,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[fr]:{transfer:ln,primaries:hc,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Oc]:{transfer:fc,primaries:dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Nd),fromReference:r=>r.applyMatrix3(Id)},[Oh]:{transfer:ln,primaries:dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nd),fromReference:r=>r.applyMatrix3(Id).convertLinearToSRGB()}},Jv=new Set([xs,Oc]),Ze={enabled:!0,_workingColorSpace:xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Jv.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=da[t].toReference,i=da[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return da[r].primaries},getTransfer:function(r){return r===rs?fc:da[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(da[t].luminanceCoefficients)}};function Io(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lo;class Zv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{lo===void 0&&(lo=mc("canvas")),lo.width=t.width,lo.height=t.height;const n=lo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=lo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Io(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Io(e[n]/255)*255):e[n]=Io(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qv=0;class wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(mu(i[o].image)):s.push(mu(i[o]))}else s=mu(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function mu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class gi extends ta{constructor(t=gi.DEFAULT_IMAGE,e=gi.DEFAULT_MAPPING,n=ks,i=ks,s=nr,o=Hs,a=rr,c=Vr,f=gi.DEFAULT_ANISOTROPY,d=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=nl(),this.name="",this.source=new wm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tf:t.x=t.x-Math.floor(t.x);break;case ks:t.x=t.x<0?0:1;break;case Ef:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tf:t.y=t.y-Math.floor(t.y);break;case ks:t.y=t.y<0?0:1;break;case Ef:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=hm;gi.DEFAULT_ANISOTROPY=1;class Sn{constructor(t=0,e=0,n=0,i=1){Sn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,f=c[0],d=c[4],m=c[8],g=c[1],p=c[5],M=c[9],S=c[2],x=c[6],v=c[10];if(Math.abs(d-g)<.01&&Math.abs(m-S)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(m+S)<.1&&Math.abs(M+x)<.1&&Math.abs(f+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(f+1)/2,C=(p+1)/2,O=(v+1)/2,I=(d+g)/4,h=(m+S)/4,B=(M+x)/4;return w>C&&w>O?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=I/n,s=h/n):C>O?C<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(C),n=I/i,s=B/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=h/s,i=B/s),this.set(n,i,s,e),this}let P=Math.sqrt((x-M)*(x-M)+(m-S)*(m-S)+(g-d)*(g-d));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(m-S)/P,this.z=(g-d)/P,this.w=Math.acos((f+p+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e0 extends ta{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Sn(0,0,t,e),this.scissorTest=!1,this.viewport=new Sn(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new gi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends e0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Am extends gi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends gi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],f=n[i+1],d=n[i+2],m=n[i+3];const g=s[o+0],p=s[o+1],M=s[o+2],S=s[o+3];if(a===0){t[e+0]=c,t[e+1]=f,t[e+2]=d,t[e+3]=m;return}if(a===1){t[e+0]=g,t[e+1]=p,t[e+2]=M,t[e+3]=S;return}if(m!==S||c!==g||f!==p||d!==M){let x=1-a;const v=c*g+f*p+d*M+m*S,P=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const O=Math.sqrt(w),I=Math.atan2(O,v*P);x=Math.sin(x*I)/O,a=Math.sin(a*I)/O}const C=a*P;if(c=c*x+g*C,f=f*x+p*C,d=d*x+M*C,m=m*x+S*C,x===1-a){const O=1/Math.sqrt(c*c+f*f+d*d+m*m);c*=O,f*=O,d*=O,m*=O}}t[e]=c,t[e+1]=f,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],f=n[i+2],d=n[i+3],m=s[o],g=s[o+1],p=s[o+2],M=s[o+3];return t[e]=a*M+d*m+c*p-f*g,t[e+1]=c*M+d*g+f*m-a*p,t[e+2]=f*M+d*p+a*g-c*m,t[e+3]=d*M-a*m-c*g-f*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,f=a(n/2),d=a(i/2),m=a(s/2),g=c(n/2),p=c(i/2),M=c(s/2);switch(o){case"XYZ":this._x=g*d*m+f*p*M,this._y=f*p*m-g*d*M,this._z=f*d*M+g*p*m,this._w=f*d*m-g*p*M;break;case"YXZ":this._x=g*d*m+f*p*M,this._y=f*p*m-g*d*M,this._z=f*d*M-g*p*m,this._w=f*d*m+g*p*M;break;case"ZXY":this._x=g*d*m-f*p*M,this._y=f*p*m+g*d*M,this._z=f*d*M+g*p*m,this._w=f*d*m-g*p*M;break;case"ZYX":this._x=g*d*m-f*p*M,this._y=f*p*m+g*d*M,this._z=f*d*M-g*p*m,this._w=f*d*m+g*p*M;break;case"YZX":this._x=g*d*m+f*p*M,this._y=f*p*m+g*d*M,this._z=f*d*M-g*p*m,this._w=f*d*m-g*p*M;break;case"XZY":this._x=g*d*m-f*p*M,this._y=f*p*m-g*d*M,this._z=f*d*M+g*p*m,this._w=f*d*m+g*p*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],f=e[2],d=e[6],m=e[10],g=n+a+m;if(g>0){const p=.5/Math.sqrt(g+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-f)*p,this._z=(o-i)*p}else if(n>a&&n>m){const p=2*Math.sqrt(1+n-a-m);this._w=(d-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+f)/p}else if(a>m){const p=2*Math.sqrt(1+a-n-m);this._w=(s-f)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+m-n-a);this._w=(o-i)/p,this._x=(s+f)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,f=e._z,d=e._w;return this._x=n*d+o*a+i*f-s*c,this._y=i*d+o*c+s*a-n*f,this._z=s*d+o*f+n*c-i*a,this._w=o*d-n*a-i*c-s*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const f=Math.sqrt(c),d=Math.atan2(f,a),m=Math.sin((1-e)*d)/f,g=Math.sin(e*d)/f;return this._w=o*m+this._w*g,this._x=n*m+this._x*g,this._y=i*m+this._y*g,this._z=s*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,n=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ud.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,f=2*(o*i-a*n),d=2*(a*e-s*i),m=2*(s*n-o*e);return this.x=e+c*f+o*m-a*d,this.y=n+c*d+a*f-s*m,this.z=i+c*m+s*d-o*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gu.copy(this).projectOnVector(t),this.sub(gu)}reflect(t){return this.sub(gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new Z,Ud=new ea;class il{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ji):Ji.fromBufferAttribute(s,o),Ji.applyMatrix4(t.matrixWorld),this.expandByPoint(Ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hl.copy(n.boundingBox)),hl.applyMatrix4(t.matrixWorld),this.union(hl)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ji),Ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),dl.subVectors(this.max,pa),co.subVectors(t.a,pa),uo.subVectors(t.b,pa),fo.subVectors(t.c,pa),Kr.subVectors(uo,co),Jr.subVectors(fo,uo),bs.subVectors(co,fo);let e=[0,-Kr.z,Kr.y,0,-Jr.z,Jr.y,0,-bs.z,bs.y,Kr.z,0,-Kr.x,Jr.z,0,-Jr.x,bs.z,0,-bs.x,-Kr.y,Kr.x,0,-Jr.y,Jr.x,0,-bs.y,bs.x,0];return!_u(e,co,uo,fo,dl)||(e=[1,0,0,0,1,0,0,0,1],!_u(e,co,uo,fo,dl))?!1:(pl.crossVectors(Kr,Jr),e=[pl.x,pl.y,pl.z],_u(e,co,uo,fo,dl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Er),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Er=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ji=new Z,hl=new il,co=new Z,uo=new Z,fo=new Z,Kr=new Z,Jr=new Z,bs=new Z,pa=new Z,dl=new Z,pl=new Z,ws=new Z;function _u(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ws.fromArray(r,s);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),c=t.dot(ws),f=e.dot(ws),d=n.dot(ws);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>a)return!1}return!0}const i0=new il,ma=new Z,vu=new Z;class Fc{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):i0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);const e=ma.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(vu)),this.expandByPoint(ma.copy(t.center).sub(vu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new Z,xu=new Z,ml=new Z,Zr=new Z,yu=new Z,gl=new Z,Su=new Z;class Cm{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,br)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=br.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(br.copy(this.origin).addScaledVector(this.direction,e),br.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xu.copy(t).add(e).multiplyScalar(.5),ml.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(xu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ml),a=Zr.dot(this.direction),c=-Zr.dot(ml),f=Zr.lengthSq(),d=Math.abs(1-o*o);let m,g,p,M;if(d>0)if(m=o*c-a,g=o*a-c,M=s*d,m>=0)if(g>=-M)if(g<=M){const S=1/d;m*=S,g*=S,p=m*(m+o*g+2*a)+g*(o*m+g+2*c)+f}else g=s,m=Math.max(0,-(o*g+a)),p=-m*m+g*(g+2*c)+f;else g=-s,m=Math.max(0,-(o*g+a)),p=-m*m+g*(g+2*c)+f;else g<=-M?(m=Math.max(0,-(-o*s+a)),g=m>0?-s:Math.min(Math.max(-s,-c),s),p=-m*m+g*(g+2*c)+f):g<=M?(m=0,g=Math.min(Math.max(-s,-c),s),p=g*(g+2*c)+f):(m=Math.max(0,-(o*s+a)),g=m>0?s:Math.min(Math.max(-s,-c),s),p=-m*m+g*(g+2*c)+f);else g=o>0?-s:s,m=Math.max(0,-(o*g+a)),p=-m*m+g*(g+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(xu).addScaledVector(ml,g),p}intersectSphere(t,e){br.subVectors(t.center,this.origin);const n=br.dot(this.direction),i=br.dot(br)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(t.min.x-g.x)*f,i=(t.max.x-g.x)*f):(n=(t.max.x-g.x)*f,i=(t.min.x-g.x)*f),d>=0?(s=(t.min.y-g.y)*d,o=(t.max.y-g.y)*d):(s=(t.max.y-g.y)*d,o=(t.min.y-g.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),m>=0?(a=(t.min.z-g.z)*m,c=(t.max.z-g.z)*m):(a=(t.max.z-g.z)*m,c=(t.min.z-g.z)*m),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,br)!==null}intersectTriangle(t,e,n,i,s){yu.subVectors(e,t),gl.subVectors(n,t),Su.crossVectors(yu,gl);let o=this.direction.dot(Su),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,t);const c=a*this.direction.dot(gl.crossVectors(Zr,gl));if(c<0)return null;const f=a*this.direction.dot(yu.cross(Zr));if(f<0||c+f>o)return null;const d=-a*Zr.dot(Su);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn{constructor(t,e,n,i,s,o,a,c,f,d,m,g,p,M,S,x){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,f,d,m,g,p,M,S,x)}set(t,e,n,i,s,o,a,c,f,d,m,g,p,M,S,x){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=f,v[6]=d,v[10]=m,v[14]=g,v[3]=p,v[7]=M,v[11]=S,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ho.setFromMatrixColumn(t,0).length(),s=1/ho.setFromMatrixColumn(t,1).length(),o=1/ho.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),f=Math.sin(i),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const g=o*d,p=o*m,M=a*d,S=a*m;e[0]=c*d,e[4]=-c*m,e[8]=f,e[1]=p+M*f,e[5]=g-S*f,e[9]=-a*c,e[2]=S-g*f,e[6]=M+p*f,e[10]=o*c}else if(t.order==="YXZ"){const g=c*d,p=c*m,M=f*d,S=f*m;e[0]=g+S*a,e[4]=M*a-p,e[8]=o*f,e[1]=o*m,e[5]=o*d,e[9]=-a,e[2]=p*a-M,e[6]=S+g*a,e[10]=o*c}else if(t.order==="ZXY"){const g=c*d,p=c*m,M=f*d,S=f*m;e[0]=g-S*a,e[4]=-o*m,e[8]=M+p*a,e[1]=p+M*a,e[5]=o*d,e[9]=S-g*a,e[2]=-o*f,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const g=o*d,p=o*m,M=a*d,S=a*m;e[0]=c*d,e[4]=M*f-p,e[8]=g*f+S,e[1]=c*m,e[5]=S*f+g,e[9]=p*f-M,e[2]=-f,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const g=o*c,p=o*f,M=a*c,S=a*f;e[0]=c*d,e[4]=S-g*m,e[8]=M*m+p,e[1]=m,e[5]=o*d,e[9]=-a*d,e[2]=-f*d,e[6]=p*m+M,e[10]=g-S*m}else if(t.order==="XZY"){const g=o*c,p=o*f,M=a*c,S=a*f;e[0]=c*d,e[4]=-m,e[8]=f*d,e[1]=g*m+S,e[5]=o*d,e[9]=p*m-M,e[2]=M*m-p,e[6]=a*d,e[10]=S*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r0,t,s0)}lookAt(t,e,n){const i=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Qr.crossVectors(n,Mi),Qr.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Qr.crossVectors(n,Mi)),Qr.normalize(),_l.crossVectors(Mi,Qr),i[0]=Qr.x,i[4]=_l.x,i[8]=Mi.x,i[1]=Qr.y,i[5]=_l.y,i[9]=Mi.y,i[2]=Qr.z,i[6]=_l.z,i[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],f=n[12],d=n[1],m=n[5],g=n[9],p=n[13],M=n[2],S=n[6],x=n[10],v=n[14],P=n[3],w=n[7],C=n[11],O=n[15],I=i[0],h=i[4],B=i[8],V=i[12],b=i[1],D=i[5],W=i[9],q=i[13],lt=i[2],dt=i[6],it=i[10],ot=i[14],rt=i[3],Mt=i[7],z=i[11],wt=i[15];return s[0]=o*I+a*b+c*lt+f*rt,s[4]=o*h+a*D+c*dt+f*Mt,s[8]=o*B+a*W+c*it+f*z,s[12]=o*V+a*q+c*ot+f*wt,s[1]=d*I+m*b+g*lt+p*rt,s[5]=d*h+m*D+g*dt+p*Mt,s[9]=d*B+m*W+g*it+p*z,s[13]=d*V+m*q+g*ot+p*wt,s[2]=M*I+S*b+x*lt+v*rt,s[6]=M*h+S*D+x*dt+v*Mt,s[10]=M*B+S*W+x*it+v*z,s[14]=M*V+S*q+x*ot+v*wt,s[3]=P*I+w*b+C*lt+O*rt,s[7]=P*h+w*D+C*dt+O*Mt,s[11]=P*B+w*W+C*it+O*z,s[15]=P*V+w*q+C*ot+O*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],f=t[13],d=t[2],m=t[6],g=t[10],p=t[14],M=t[3],S=t[7],x=t[11],v=t[15];return M*(+s*c*m-i*f*m-s*a*g+n*f*g+i*a*p-n*c*p)+S*(+e*c*p-e*f*g+s*o*g-i*o*p+i*f*d-s*c*d)+x*(+e*f*m-e*a*p-s*o*m+n*o*p+s*a*d-n*f*d)+v*(-i*a*d-e*c*m+e*a*g+i*o*m-n*o*g+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],f=t[7],d=t[8],m=t[9],g=t[10],p=t[11],M=t[12],S=t[13],x=t[14],v=t[15],P=m*x*f-S*g*f+S*c*p-a*x*p-m*c*v+a*g*v,w=M*g*f-d*x*f-M*c*p+o*x*p+d*c*v-o*g*v,C=d*S*f-M*m*f+M*a*p-o*S*p-d*a*v+o*m*v,O=M*m*c-d*S*c-M*a*g+o*S*g+d*a*x-o*m*x,I=e*P+n*w+i*C+s*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const h=1/I;return t[0]=P*h,t[1]=(S*g*s-m*x*s-S*i*p+n*x*p+m*i*v-n*g*v)*h,t[2]=(a*x*s-S*c*s+S*i*f-n*x*f-a*i*v+n*c*v)*h,t[3]=(m*c*s-a*g*s-m*i*f+n*g*f+a*i*p-n*c*p)*h,t[4]=w*h,t[5]=(d*x*s-M*g*s+M*i*p-e*x*p-d*i*v+e*g*v)*h,t[6]=(M*c*s-o*x*s-M*i*f+e*x*f+o*i*v-e*c*v)*h,t[7]=(o*g*s-d*c*s+d*i*f-e*g*f-o*i*p+e*c*p)*h,t[8]=C*h,t[9]=(M*m*s-d*S*s-M*n*p+e*S*p+d*n*v-e*m*v)*h,t[10]=(o*S*s-M*a*s+M*n*f-e*S*f-o*n*v+e*a*v)*h,t[11]=(d*a*s-o*m*s-d*n*f+e*m*f+o*n*p-e*a*p)*h,t[12]=O*h,t[13]=(d*S*i-M*m*i+M*n*g-e*S*g-d*n*x+e*m*x)*h,t[14]=(M*a*i-o*S*i-M*n*c+e*S*c+o*n*x-e*a*x)*h,t[15]=(o*m*i-d*a*i+d*n*c-e*m*c-o*n*g+e*a*g)*h,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,f=s*o,d=s*a;return this.set(f*o+n,f*a-i*c,f*c+i*a,0,f*a+i*c,d*a+n,d*c-i*o,0,f*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,f=s+s,d=o+o,m=a+a,g=s*f,p=s*d,M=s*m,S=o*d,x=o*m,v=a*m,P=c*f,w=c*d,C=c*m,O=n.x,I=n.y,h=n.z;return i[0]=(1-(S+v))*O,i[1]=(p+C)*O,i[2]=(M-w)*O,i[3]=0,i[4]=(p-C)*I,i[5]=(1-(g+v))*I,i[6]=(x+P)*I,i[7]=0,i[8]=(M+w)*h,i[9]=(x-P)*h,i[10]=(1-(g+S))*h,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ho.set(i[0],i[1],i[2]).length();const o=ho.set(i[4],i[5],i[6]).length(),a=ho.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Zi.copy(this);const f=1/s,d=1/o,m=1/a;return Zi.elements[0]*=f,Zi.elements[1]*=f,Zi.elements[2]*=f,Zi.elements[4]*=d,Zi.elements[5]*=d,Zi.elements[6]*=d,Zi.elements[8]*=m,Zi.elements[9]*=m,Zi.elements[10]*=m,e.setFromRotationMatrix(Zi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ur){const c=this.elements,f=2*s/(e-t),d=2*s/(n-i),m=(e+t)/(e-t),g=(n+i)/(n-i);let p,M;if(a===Ur)p=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===pc)p=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ur){const c=this.elements,f=1/(e-t),d=1/(n-i),m=1/(o-s),g=(e+t)*f,p=(n+i)*d;let M,S;if(a===Ur)M=(o+s)*m,S=-2*m;else if(a===pc)M=s*m,S=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-g,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=S,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ho=new Z,Zi=new vn,r0=new Z(0,0,0),s0=new Z(1,1,1),Qr=new Z,_l=new Z,Mi=new Z,Od=new vn,Fd=new ea;class yr{constructor(t=0,e=0,n=0,i=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],f=i[5],d=i[9],m=i[2],g=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(qn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fd.setFromEuler(this),this.setFromQuaternion(Fd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o0=0;const Bd=new Z,po=new ea,wr=new vn,vl=new Z,ga=new Z,a0=new Z,l0=new ea,zd=new Z(1,0,0),kd=new Z(0,1,0),Hd=new Z(0,0,1),Vd={type:"added"},c0={type:"removed"},mo={type:"childadded",child:null},Mu={type:"childremoved",child:null};class ci extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new Z,e=new yr,n=new ea,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vn},normalMatrix:{value:new De}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,e){return po.setFromAxisAngle(t,e),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(zd,t)}rotateY(t){return this.rotateOnAxis(kd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,e){return Bd.copy(t).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zd,t)}translateY(t){return this.translateOnAxis(kd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vl.copy(t):vl.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(ga,vl,this.up):wr.lookAt(vl,ga,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),po.setFromRotationMatrix(wr),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vd),mo.child=t,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c0),Mu.child=t,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wr.multiply(t.parent.matrixWorld)),t.applyMatrix4(wr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vd),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,a0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,l0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const m=c[f];s(t.shapes,m)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),f=o(t.textures),d=o(t.images),m=o(t.shapes),g=o(t.skeletons),p=o(t.animations),M=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),p.length>0&&(n.animations=p),M.length>0&&(n.nodes=M)}return n.object=i,n;function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ci.DEFAULT_UP=new Z(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new Z,Ar=new Z,Tu=new Z,Cr=new Z,go=new Z,_o=new Z,Gd=new Z,Eu=new Z,bu=new Z,wu=new Z,Au=new Sn,Cu=new Sn,Ru=new Sn;class ir{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qi.subVectors(t,e),i.cross(Qi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Qi.subVectors(i,e),Ar.subVectors(n,e),Tu.subVectors(t,e);const o=Qi.dot(Qi),a=Qi.dot(Ar),c=Qi.dot(Tu),f=Ar.dot(Ar),d=Ar.dot(Tu),m=o*f-a*a;if(m===0)return s.set(0,0,0),null;const g=1/m,p=(f*c-a*d)*g,M=(o*d-a*c)*g;return s.set(1-p-M,M,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Cr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cr.x),c.addScaledVector(o,Cr.y),c.addScaledVector(a,Cr.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Au.setScalar(0),Cu.setScalar(0),Ru.setScalar(0),Au.fromBufferAttribute(t,e),Cu.fromBufferAttribute(t,n),Ru.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Au,s.x),o.addScaledVector(Cu,s.y),o.addScaledVector(Ru,s.z),o}static isFrontFacing(t,e,n,i){return Qi.subVectors(n,e),Ar.subVectors(t,e),Qi.cross(Ar).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Qi.cross(Ar).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ir.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ir.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ir.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ir.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ir.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;go.subVectors(i,n),_o.subVectors(s,n),Eu.subVectors(t,n);const c=go.dot(Eu),f=_o.dot(Eu);if(c<=0&&f<=0)return e.copy(n);bu.subVectors(t,i);const d=go.dot(bu),m=_o.dot(bu);if(d>=0&&m<=d)return e.copy(i);const g=c*m-d*f;if(g<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(go,o);wu.subVectors(t,s);const p=go.dot(wu),M=_o.dot(wu);if(M>=0&&p<=M)return e.copy(s);const S=p*f-c*M;if(S<=0&&f>=0&&M<=0)return a=f/(f-M),e.copy(n).addScaledVector(_o,a);const x=d*M-p*m;if(x<=0&&m-d>=0&&p-M>=0)return Gd.subVectors(s,i),a=(m-d)/(m-d+(p-M)),e.copy(i).addScaledVector(Gd,a);const v=1/(x+S+g);return o=S*v,a=g*v,e.copy(n).addScaledVector(go,o).addScaledVector(_o,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},xl={h:0,s:0,l:0};function Pu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class We{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ze.workingColorSpace){if(t=qv(t,1),e=qn(e,0,1),n=qn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Pu(o,s,t+1/3),this.g=Pu(o,s,t),this.b=Pu(o,s,t-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(t,e=fr){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fr){const n=Pm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}copyLinearToSRGB(t){return this.r=pu(t.r),this.g=pu(t.g),this.b=pu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fr){return Ze.fromWorkingColorSpace(Gn.copy(this),t),Math.round(qn(Gn.r*255,0,255))*65536+Math.round(qn(Gn.g*255,0,255))*256+Math.round(qn(Gn.b*255,0,255))}getHexString(t=fr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Gn.copy(this),e);const n=Gn.r,i=Gn.g,s=Gn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,f;const d=(a+o)/2;if(a===o)c=0,f=0;else{const m=o-a;switch(f=d<=.5?m/(o+a):m/(2-o-a),o){case n:c=(i-s)/m+(i<s?6:0);break;case i:c=(s-n)/m+2;break;case s:c=(n-i)/m+4;break}c/=6}return t.h=c,t.s=f,t.l=d,t}getRGB(t,e=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=fr){Ze.fromWorkingColorSpace(Gn.copy(this),t);const e=Gn.r,n=Gn.g,i=Gn.b;return t!==fr?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(xl);const n=hu(ts.h,xl.h,e),i=hu(ts.s,xl.s,e),s=hu(ts.l,xl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new We;We.NAMES=Pm;let u0=0;class na extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Do,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=df,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(n.blending=this.blending),this.side!==ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hf&&(n.blendSrc=this.blendSrc),this.blendDst!==df&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fh extends na{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const En=new Z,yl=new ne;class Wi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pd,this.updateRanges=[],this.gpuType=Nr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yl.fromBufferAttribute(this,e),yl.applyMatrix3(t),this.setXY(e,yl.x,yl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ha(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ha(e,this.array)),e}setX(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ha(e,this.array)),e}setY(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ha(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ha(e,this.array)),e}setW(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),n=hi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),n=hi(n,this.array),i=hi(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),n=hi(n,this.array),i=hi(i,this.array),s=hi(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pd&&(t.usage=this.usage),t}}class Dm extends Wi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lm extends Wi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pn extends Wi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let f0=0;const Oi=new vn,Du=new ci,vo=new Z,Ti=new il,_a=new il,Nn=new Z;class Ii extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bm(t)?Lm:Dm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,e,n){return Oi.makeTranslation(t,e,n),this.applyMatrix4(Oi),this}scale(t,e,n){return Oi.makeScale(t,e,n),this.applyMatrix4(Oi),this}lookAt(t){return Du.lookAt(t),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(Ti.min,_a.min),Ti.expandByPoint(Nn),Nn.addVectors(Ti.max,_a.max),Ti.expandByPoint(Nn)):(Ti.expandByPoint(_a.min),Ti.expandByPoint(_a.max))}Ti.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Nn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Nn));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let f=0,d=a.count;f<d;f++)Nn.fromBufferAttribute(a,f),c&&(vo.fromBufferAttribute(t,f),Nn.add(vo)),i=Math.max(i,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let B=0;B<n.count;B++)a[B]=new Z,c[B]=new Z;const f=new Z,d=new Z,m=new Z,g=new ne,p=new ne,M=new ne,S=new Z,x=new Z;function v(B,V,b){f.fromBufferAttribute(n,B),d.fromBufferAttribute(n,V),m.fromBufferAttribute(n,b),g.fromBufferAttribute(s,B),p.fromBufferAttribute(s,V),M.fromBufferAttribute(s,b),d.sub(f),m.sub(f),p.sub(g),M.sub(g);const D=1/(p.x*M.y-M.x*p.y);isFinite(D)&&(S.copy(d).multiplyScalar(M.y).addScaledVector(m,-p.y).multiplyScalar(D),x.copy(m).multiplyScalar(p.x).addScaledVector(d,-M.x).multiplyScalar(D),a[B].add(S),a[V].add(S),a[b].add(S),c[B].add(x),c[V].add(x),c[b].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let B=0,V=P.length;B<V;++B){const b=P[B],D=b.start,W=b.count;for(let q=D,lt=D+W;q<lt;q+=3)v(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const w=new Z,C=new Z,O=new Z,I=new Z;function h(B){O.fromBufferAttribute(i,B),I.copy(O);const V=a[B];w.copy(V),w.sub(O.multiplyScalar(O.dot(V))).normalize(),C.crossVectors(I,V);const D=C.dot(c[B])<0?-1:1;o.setXYZW(B,w.x,w.y,w.z,D)}for(let B=0,V=P.length;B<V;++B){const b=P[B],D=b.start,W=b.count;for(let q=D,lt=D+W;q<lt;q+=3)h(t.getX(q+0)),h(t.getX(q+1)),h(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,p=n.count;g<p;g++)n.setXYZ(g,0,0,0);const i=new Z,s=new Z,o=new Z,a=new Z,c=new Z,f=new Z,d=new Z,m=new Z;if(t)for(let g=0,p=t.count;g<p;g+=3){const M=t.getX(g+0),S=t.getX(g+1),x=t.getX(g+2);i.fromBufferAttribute(e,M),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,x),d.subVectors(o,s),m.subVectors(i,s),d.cross(m),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),a.add(d),c.add(d),f.add(d),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,p=e.count;g<p;g+=3)i.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),d.subVectors(o,s),m.subVectors(i,s),d.cross(m),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Nn.fromBufferAttribute(t,e),Nn.normalize(),t.setXYZ(e,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(a,c){const f=a.array,d=a.itemSize,m=a.normalized,g=new f.constructor(c.length*d);let p=0,M=0;for(let S=0,x=c.length;S<x;S++){a.isInterleavedBufferAttribute?p=c[S]*a.data.stride+a.offset:p=c[S]*d;for(let v=0;v<d;v++)g[M++]=f[p++]}return new Wi(g,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ii,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],f=t(c,n);e.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const c=[],f=s[a];for(let d=0,m=f.length;d<m;d++){const g=f[d],p=t(g,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const f=o[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(t[f]=c[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const f=n[c];t.data.attributes[c]=f.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let m=0,g=f.length;m<g;m++){const p=f[m];d.push(p.toJSON(t.data))}d.length>0&&(i[c]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const f in i){const d=i[f];this.setAttribute(f,d.clone(e))}const s=t.morphAttributes;for(const f in s){const d=[],m=s[f];for(let g=0,p=m.length;g<p;g++)d.push(m[g].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let f=0,d=o.length;f<d;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wd=new vn,As=new Cm,Sl=new Fc,Xd=new Z,Ml=new Z,Tl=new Z,El=new Z,Lu=new Z,bl=new Z,qd=new Z,wl=new Z;class Ri extends ci{constructor(t=new Ii,e=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const d=a[c],m=s[c];d!==0&&(Lu.fromBufferAttribute(m,t),o?bl.addScaledVector(Lu,d):bl.addScaledVector(Lu.sub(e),d))}e.add(bl)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(s),As.copy(t.ray).recast(t.near),!(Sl.containsPoint(As.origin)===!1&&(As.intersectSphere(Sl,Xd)===null||As.origin.distanceToSquared(Xd)>(t.far-t.near)**2))&&(Wd.copy(s).invert(),As.copy(t.ray).applyMatrix4(Wd),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,g=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,S=g.length;M<S;M++){const x=g[M],v=o[x.materialIndex],P=Math.max(x.start,p.start),w=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let C=P,O=w;C<O;C+=3){const I=a.getX(C),h=a.getX(C+1),B=a.getX(C+2);i=Al(this,v,t,n,f,d,m,I,h,B),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const M=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let x=M,v=S;x<v;x+=3){const P=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);i=Al(this,o,t,n,f,d,m,P,w,C),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let M=0,S=g.length;M<S;M++){const x=g[M],v=o[x.materialIndex],P=Math.max(x.start,p.start),w=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let C=P,O=w;C<O;C+=3){const I=C,h=C+1,B=C+2;i=Al(this,v,t,n,f,d,m,I,h,B),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{const M=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let x=M,v=S;x<v;x+=3){const P=x,w=x+1,C=x+2;i=Al(this,o,t,n,f,d,m,P,w,C),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}}function h0(r,t,e,n,i,s,o,a){let c;if(t.side===mi?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ms,a),c===null)return null;wl.copy(a),wl.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(wl);return f<e.near||f>e.far?null:{distance:f,point:wl.clone(),object:r}}function Al(r,t,e,n,i,s,o,a,c,f){r.getVertexPosition(a,Ml),r.getVertexPosition(c,Tl),r.getVertexPosition(f,El);const d=h0(r,t,e,n,Ml,Tl,El,qd);if(d){const m=new Z;ir.getBarycoord(qd,Ml,Tl,El,m),i&&(d.uv=ir.getInterpolatedAttribute(i,a,c,f,m,new ne)),s&&(d.uv1=ir.getInterpolatedAttribute(s,a,c,f,m,new ne)),o&&(d.normal=ir.getInterpolatedAttribute(o,a,c,f,m,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a,b:c,c:f,normal:new Z,materialIndex:0};ir.getNormal(Ml,Tl,El,g.normal),d.face=g,d.barycoord=m}return d}class rl extends Ii{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],d=[],m=[];let g=0,p=0;M("z","y","x",-1,-1,n,e,t,o,s,0),M("z","y","x",1,-1,n,e,-t,o,s,1),M("x","z","y",1,1,t,n,e,i,o,2),M("x","z","y",1,-1,t,n,-e,i,o,3),M("x","y","z",1,-1,t,e,n,i,s,4),M("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Pn(f,3)),this.setAttribute("normal",new Pn(d,3)),this.setAttribute("uv",new Pn(m,2));function M(S,x,v,P,w,C,O,I,h,B,V){const b=C/h,D=O/B,W=C/2,q=O/2,lt=I/2,dt=h+1,it=B+1;let ot=0,rt=0;const Mt=new Z;for(let z=0;z<it;z++){const wt=z*D-q;for(let de=0;de<dt;de++){const Se=de*b-W;Mt[S]=Se*P,Mt[x]=wt*w,Mt[v]=lt,f.push(Mt.x,Mt.y,Mt.z),Mt[S]=0,Mt[x]=0,Mt[v]=I>0?1:-1,d.push(Mt.x,Mt.y,Mt.z),m.push(de/h),m.push(1-z/B),ot+=1}}for(let z=0;z<B;z++)for(let wt=0;wt<h;wt++){const de=g+wt+dt*z,Se=g+wt+dt*(z+1),ut=g+(wt+1)+dt*(z+1),xt=g+(wt+1)+dt*z;c.push(de,Se,xt),c.push(Se,ut,xt),rt+=6}a.addGroup(p,rt,V),p+=rt,g+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xo(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ni(r){const t={};for(let e=0;e<r.length;e++){const n=Xo(r[e]);for(const i in n)t[i]=n[i]}return t}function d0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Im(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}const gc={clone:Xo,merge:ni};var p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends na{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xo(t.uniforms),this.uniformsGroups=d0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nm extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Ur}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new Z,Yd=new ne,$d=new ne;class Bi extends Nm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Yd,$d),e.subVectors($d,Yd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/f,i*=o.width/c,n*=o.height/f}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xo=-90,yo=1;class g0 extends ci{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bi(xo,yo,t,e);i.layers=this.layers,this.add(i);const s=new Bi(xo,yo,t,e);s.layers=this.layers,this.add(s);const o=new Bi(xo,yo,t,e);o.layers=this.layers,this.add(o);const a=new Bi(xo,yo,t,e);a.layers=this.layers,this.add(a);const c=new Bi(xo,yo,t,e);c.layers=this.layers,this.add(c);const f=new Bi(xo,yo,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const f of e)this.remove(f);if(t===Ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,f,d]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,f),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(m,g,p),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Um extends gi{constructor(t,e,n,i,s,o,a,c,f,d){t=t!==void 0?t:[],e=e!==void 0?e:Ho,super(t,e,n,i,s,o,a,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _0 extends sr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Um(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nr}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rl(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mi,blending:Br});s.uniforms.tEquirect.value=e;const o=new Ri(i,s),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=nr),new g0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Iu=new Z,v0=new Z,x0=new De;class Is{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Iu.subVectors(n,e).cross(v0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Iu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||x0.getNormalMatrix(t),i=this.coplanarPoint(Iu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Fc,Cl=new Z;class Om{constructor(t=new Is,e=new Is,n=new Is,i=new Is,s=new Is,o=new Is){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ur){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],f=i[4],d=i[5],m=i[6],g=i[7],p=i[8],M=i[9],S=i[10],x=i[11],v=i[12],P=i[13],w=i[14],C=i[15];if(n[0].setComponents(c-s,g-f,x-p,C-v).normalize(),n[1].setComponents(c+s,g+f,x+p,C+v).normalize(),n[2].setComponents(c+o,g+d,x+M,C+P).normalize(),n[3].setComponents(c-o,g-d,x-M,C-P).normalize(),n[4].setComponents(c-a,g-m,x-S,C-w).normalize(),e===Ur)n[5].setComponents(c+a,g+m,x+S,C+w).normalize();else if(e===pc)n[5].setComponents(a,m,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cl.x=i.normal.x>0?t.max.x:t.min.x,Cl.y=i.normal.y>0?t.max.y:t.min.y,Cl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function y0(r){const t=new WeakMap;function e(a,c){const f=a.array,d=a.usage,m=f.byteLength,g=r.createBuffer();r.bindBuffer(c,g),r.bufferData(c,f,d),a.onUploadCallback();let p;if(f instanceof Float32Array)p=r.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)p=r.SHORT;else if(f instanceof Uint32Array)p=r.UNSIGNED_INT;else if(f instanceof Int32Array)p=r.INT;else if(f instanceof Int8Array)p=r.BYTE;else if(f instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:p,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,f){const d=c.array,m=c.updateRanges;if(r.bindBuffer(f,a),m.length===0)r.bufferSubData(f,0,d);else{m.sort((p,M)=>p.start-M.start);let g=0;for(let p=1;p<m.length;p++){const M=m[g],S=m[p];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++g,m[g]=S)}m.length=g+1;for(let p=0,M=m.length;p<M;p++){const S=m[p];r.bufferSubData(f,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=t.get(a);if(f===void 0)t.set(a,e(a,c));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,a,c),f.version=a.version}}return{get:i,remove:s,update:o}}class Bc extends Ii{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),f=a+1,d=c+1,m=t/a,g=e/c,p=[],M=[],S=[],x=[];for(let v=0;v<d;v++){const P=v*g-o;for(let w=0;w<f;w++){const C=w*m-s;M.push(C,-P,0),S.push(0,0,1),x.push(w/a),x.push(1-v/c)}}for(let v=0;v<c;v++)for(let P=0;P<a;P++){const w=P+f*v,C=P+f*(v+1),O=P+1+f*(v+1),I=P+1+f*v;p.push(w,C,I),p.push(C,O,I)}this.setIndex(p),this.setAttribute("position",new Pn(M,3)),this.setAttribute("normal",new Pn(S,3)),this.setAttribute("uv",new Pn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.width,t.height,t.widthSegments,t.heightSegments)}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ay=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,my=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ay=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:S0,alphahash_pars_fragment:M0,alphamap_fragment:T0,alphamap_pars_fragment:E0,alphatest_fragment:b0,alphatest_pars_fragment:w0,aomap_fragment:A0,aomap_pars_fragment:C0,batching_pars_vertex:R0,batching_vertex:P0,begin_vertex:D0,beginnormal_vertex:L0,bsdfs:I0,iridescence_fragment:N0,bumpmap_pars_fragment:U0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:k0,color_pars_fragment:H0,color_pars_vertex:V0,color_vertex:G0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:$0,emissivemap_fragment:j0,emissivemap_pars_fragment:K0,colorspace_fragment:J0,colorspace_pars_fragment:Z0,envmap_fragment:Q0,envmap_common_pars_fragment:tx,envmap_pars_fragment:ex,envmap_pars_vertex:nx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ox,fog_pars_fragment:ax,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:hx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:_x,lights_physical_fragment:vx,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:Sx,lights_fragment_end:Mx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:wx,map_fragment:Ax,map_pars_fragment:Cx,map_particle_fragment:Rx,map_particle_pars_fragment:Px,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Ix,morphcolor_vertex:Nx,morphnormal_vertex:Ux,morphtarget_pars_vertex:Ox,morphtarget_vertex:Fx,normal_fragment_begin:Bx,normal_fragment_maps:zx,normal_pars_fragment:kx,normal_pars_vertex:Hx,normal_vertex:Vx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Yx,opaque_fragment:$x,packing:jx,premultiplied_alpha_fragment:Kx,project_vertex:Jx,dithering_fragment:Zx,dithering_pars_fragment:Qx,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ny,shadowmap_pars_vertex:iy,shadowmap_vertex:ry,shadowmask_pars_fragment:sy,skinbase_vertex:oy,skinning_pars_vertex:ay,skinning_vertex:ly,skinnormal_vertex:cy,specularmap_fragment:uy,specularmap_pars_fragment:fy,tonemapping_fragment:hy,tonemapping_pars_fragment:dy,transmission_fragment:py,transmission_pars_fragment:my,uv_pars_fragment:gy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:xy,background_vert:yy,background_frag:Sy,backgroundCube_vert:My,backgroundCube_frag:Ty,cube_vert:Ey,cube_frag:by,depth_vert:wy,depth_frag:Ay,distanceRGBA_vert:Cy,distanceRGBA_frag:Ry,equirect_vert:Py,equirect_frag:Dy,linedashed_vert:Ly,linedashed_frag:Iy,meshbasic_vert:Ny,meshbasic_frag:Uy,meshlambert_vert:Oy,meshlambert_frag:Fy,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:ky,meshnormal_frag:Hy,meshphong_vert:Vy,meshphong_frag:Gy,meshphysical_vert:Wy,meshphysical_frag:Xy,meshtoon_vert:qy,meshtoon_frag:Yy,points_vert:$y,points_frag:jy,shadow_vert:Ky,shadow_frag:Jy,sprite_vert:Zy,sprite_frag:Qy},zt={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},pr={basic:{uniforms:ni([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ni([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new We(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ni([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ni([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ni([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new We(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ni([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ni([zt.points,zt.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ni([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ni([zt.common,zt.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ni([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ni([zt.sprite,zt.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:ni([zt.common,zt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:ni([zt.lights,zt.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};pr.physical={uniforms:ni([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Rl={r:0,b:0,g:0},Rs=new yr,tS=new vn;function eS(r,t,e,n,i,s,o){const a=new We(0);let c=s===!0?0:1,f,d,m=null,g=0,p=null;function M(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?e:t).get(w)),w}function S(P){let w=!1;const C=M(P);C===null?v(a,c):C&&C.isColor&&(v(C,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(P,w){const C=M(w);C&&(C.isCubeTexture||C.mapping===Uc)?(d===void 0&&(d=new Ri(new rl(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Xo(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,I,h){this.matrixWorld.copyPosition(h.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Rs.copy(w.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler(Rs)),d.material.toneMapped=Ze.getTransfer(C.colorSpace)!==ln,(m!==C||g!==C.version||p!==r.toneMapping)&&(d.material.needsUpdate=!0,m=C,g=C.version,p=r.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new Ri(new Bc(2,2),new pi({name:"BackgroundMaterial",uniforms:Xo(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Ze.getTransfer(C.colorSpace)!==ln,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||g!==C.version||p!==r.toneMapping)&&(f.material.needsUpdate=!0,m=C,g=C.version,p=r.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function v(P,w){P.getRGB(Rl,Im(r)),n.buffers.color.setClear(Rl.r,Rl.g,Rl.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(P,w=1){a.set(P),c=w,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,v(a,c)},render:S,addToRenderList:x}}function nS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,o=!1;function a(b,D,W,q,lt){let dt=!1;const it=m(q,W,D);s!==it&&(s=it,f(s.object)),dt=p(b,q,W,lt),dt&&M(b,q,W,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(dt||o)&&(o=!1,C(b,D,W,q),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function c(){return r.createVertexArray()}function f(b){return r.bindVertexArray(b)}function d(b){return r.deleteVertexArray(b)}function m(b,D,W){const q=W.wireframe===!0;let lt=n[b.id];lt===void 0&&(lt={},n[b.id]=lt);let dt=lt[D.id];dt===void 0&&(dt={},lt[D.id]=dt);let it=dt[q];return it===void 0&&(it=g(c()),dt[q]=it),it}function g(b){const D=[],W=[],q=[];for(let lt=0;lt<e;lt++)D[lt]=0,W[lt]=0,q[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,D,W,q){const lt=s.attributes,dt=D.attributes;let it=0;const ot=W.getAttributes();for(const rt in ot)if(ot[rt].location>=0){const z=lt[rt];let wt=dt[rt];if(wt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(wt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(wt=b.instanceColor)),z===void 0||z.attribute!==wt||wt&&z.data!==wt.data)return!0;it++}return s.attributesNum!==it||s.index!==q}function M(b,D,W,q){const lt={},dt=D.attributes;let it=0;const ot=W.getAttributes();for(const rt in ot)if(ot[rt].location>=0){let z=dt[rt];z===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(z=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(z=b.instanceColor));const wt={};wt.attribute=z,z&&z.data&&(wt.data=z.data),lt[rt]=wt,it++}s.attributes=lt,s.attributesNum=it,s.index=q}function S(){const b=s.newAttributes;for(let D=0,W=b.length;D<W;D++)b[D]=0}function x(b){v(b,0)}function v(b,D){const W=s.newAttributes,q=s.enabledAttributes,lt=s.attributeDivisors;W[b]=1,q[b]===0&&(r.enableVertexAttribArray(b),q[b]=1),lt[b]!==D&&(r.vertexAttribDivisor(b,D),lt[b]=D)}function P(){const b=s.newAttributes,D=s.enabledAttributes;for(let W=0,q=D.length;W<q;W++)D[W]!==b[W]&&(r.disableVertexAttribArray(W),D[W]=0)}function w(b,D,W,q,lt,dt,it){it===!0?r.vertexAttribIPointer(b,D,W,lt,dt):r.vertexAttribPointer(b,D,W,q,lt,dt)}function C(b,D,W,q){S();const lt=q.attributes,dt=W.getAttributes(),it=D.defaultAttributeValues;for(const ot in dt){const rt=dt[ot];if(rt.location>=0){let Mt=lt[ot];if(Mt===void 0&&(ot==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),ot==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),Mt!==void 0){const z=Mt.normalized,wt=Mt.itemSize,de=t.get(Mt);if(de===void 0)continue;const Se=de.buffer,ut=de.type,xt=de.bytesPerElement,Ft=ut===r.INT||ut===r.UNSIGNED_INT||Mt.gpuType===Ph;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,jt=At.stride,Wt=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let se=0;se<rt.locationSize;se++)v(rt.location+se,At.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let se=0;se<rt.locationSize;se++)x(rt.location+se);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let se=0;se<rt.locationSize;se++)w(rt.location+se,wt/rt.locationSize,ut,z,jt*xt,(Wt+wt/rt.locationSize*se)*xt,Ft)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<rt.locationSize;At++)v(rt.location+At,Mt.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<rt.locationSize;At++)x(rt.location+At);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let At=0;At<rt.locationSize;At++)w(rt.location+At,wt/rt.locationSize,ut,z,wt*xt,wt/rt.locationSize*At*xt,Ft)}}else if(it!==void 0){const z=it[ot];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(rt.location,z);break;case 3:r.vertexAttrib3fv(rt.location,z);break;case 4:r.vertexAttrib4fv(rt.location,z);break;default:r.vertexAttrib1fv(rt.location,z)}}}}P()}function O(){B();for(const b in n){const D=n[b];for(const W in D){const q=D[W];for(const lt in q)d(q[lt].object),delete q[lt];delete D[W]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const W in D){const q=D[W];for(const lt in q)d(q[lt].object),delete q[lt];delete D[W]}delete n[b.id]}function h(b){for(const D in n){const W=n[D];if(W[b.id]===void 0)continue;const q=W[b.id];for(const lt in q)d(q[lt].object),delete q[lt];delete W[b.id]}}function B(){V(),o=!0,s!==i&&(s=i,f(s.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:B,resetDefaultState:V,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:h,initAttributes:S,enableAttribute:x,disableUnusedAttributes:P}}function iS(r,t,e){let n;function i(f){n=f}function s(f,d){r.drawArrays(n,f,d),e.update(d,n,1)}function o(f,d,m){m!==0&&(r.drawArraysInstanced(n,f,d,m),e.update(d,n,m))}function a(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M];e.update(p,n,1)}function c(f,d,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let M=0;M<f.length;M++)o(f[M],d[M],g[M]);else{p.multiDrawArraysInstancedWEBGL(n,f,0,d,0,g,0,m);let M=0;for(let S=0;S<m;S++)M+=d[S];for(let S=0;S<g.length;S++)e.update(M,n,g[S])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const h=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(h){return!(h!==rr&&n.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(h){const B=h===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(h!==Vr&&n.convert(h)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==Nr&&!B)}function c(h){if(h==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const d=c(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const m=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(g===!0){const h=t.get("EXT_clip_control");h.clipControlEXT(h.LOWER_LEFT_EXT,h.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:p,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:C,vertexTextures:O,maxSamples:I}}function sS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Is,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const p=m.length!==0||g||n!==0||i;return i=g,n=m.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){e=d(m,g,0)},this.setState=function(m,g,p){const M=m.clippingPlanes,S=m.clipIntersection,x=m.clipShadows,v=r.get(m);if(!i||M===null||M.length===0||s&&!x)s?d(null):f();else{const P=s?0:n,w=P*4;let C=v.clippingState||null;c.value=C,C=d(M,g,w,p);for(let O=0;O!==w;++O)C[O]=e[O];v.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function f(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,g,p,M){const S=m!==null?m.length:0;let x=null;if(S!==0){if(x=c.value,M!==!0||x===null){const v=p+S*4,P=g.matrixWorldInverse;a.getNormalMatrix(P),(x===null||x.length<v)&&(x=new Float32Array(v));for(let w=0,C=p;w!==S;++w,C+=4)o.copy(m[w]).applyMatrix4(P,a),o.normal.toArray(x,C),x[C+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,x}}function oS(r){let t=new WeakMap;function e(o,a){return a===Sf?o.mapping=Ho:a===Mf&&(o.mapping=Vo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sf||a===Mf)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new _0(c.height);return f.fromEquirectangularTexture(r,o),t.set(o,f),o.addEventListener("dispose",i),e(f.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Bm extends Nm{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ao=4,jd=[.125,.215,.35,.446,.526,.582],zs=20,Nu=new Bm,Kd=new We;let Uu=null,Ou=0,Fu=0,Bu=!1;const Ns=(1+Math.sqrt(5))/2,So=1/Ns,Jd=[new Z(-Ns,So,0),new Z(Ns,So,0),new Z(-So,0,Ns),new Z(So,0,Ns),new Z(0,Ns,-So),new Z(0,Ns,So),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uu,Ou,Fu),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Pl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===Vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nr,minFilter:nr,generateMipmaps:!1,type:zr,format:rr,colorSpace:xs,depthBuffer:!1},i=Qd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aS(s)),this._blurMaterial=lS(s,t,e)}return i}_compileMaterial(t){const e=new Ri(this._lodPlanes[0],t);this._renderer.compile(e,Nu)}_sceneToCubeUV(t,e,n,i){const a=new Bi(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,g=d.toneMapping;d.getClearColor(Kd),d.toneMapping=us,d.autoClear=!1;const p=new Fh({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1}),M=new Ri(new rl,p);let S=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,S=!0):(p.color.copy(Kd),S=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(a.up.set(0,c[v],0),a.lookAt(f[v],0,0)):P===1?(a.up.set(0,0,c[v]),a.lookAt(0,f[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,f[v]));const w=this._cubeSize;Pl(i,P*w,v>2?w:0,w,w),d.setRenderTarget(i),S&&d.render(M,a),d.render(t,a)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=g,d.autoClear=m,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ho||t.mapping===Vo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Pl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Nu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jd[(i-s-1)%Jd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new Ri(this._lodPlanes[i],f),g=f.uniforms,p=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zs-1),S=s/M,x=isFinite(s)?1+Math.floor(d*S):zs;x>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zs}`);const v=[];let P=0;for(let h=0;h<zs;++h){const B=h/S,V=Math.exp(-B*B/2);v.push(V),h===0?P+=V:h<x&&(P+=2*V)}for(let h=0;h<v.length;h++)v[h]=v[h]/P;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=v,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:w}=this;g.dTheta.value=M,g.mipInt.value=w-n;const C=this._sizeLods[i],O=3*C*(i>w-Ao?i-w+Ao:0),I=4*(this._cubeSize-C);Pl(e,O,I,3*C,2*C),c.setRenderTarget(e),c.render(m,Nu)}}function aS(r){const t=[],e=[],n=[];let i=r;const s=r-Ao+1+jd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Ao?c=jd[o-r+Ao-1]:o===0&&(c=0),n.push(c);const f=1/(a-2),d=-f,m=1+f,g=[d,d,m,d,m,m,d,d,m,m,d,m],p=6,M=6,S=3,x=2,v=1,P=new Float32Array(S*M*p),w=new Float32Array(x*M*p),C=new Float32Array(v*M*p);for(let I=0;I<p;I++){const h=I%3*2/3-1,B=I>2?0:-1,V=[h,B,0,h+2/3,B,0,h+2/3,B+1,0,h,B,0,h+2/3,B+1,0,h,B+1,0];P.set(V,S*M*I),w.set(g,x*M*I);const b=[I,I,I,I,I,I];C.set(b,v*M*I)}const O=new Ii;O.setAttribute("position",new Wi(P,S)),O.setAttribute("uv",new Wi(w,x)),O.setAttribute("faceIndex",new Wi(C,v)),t.push(O),i>Ao&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qd(r,t,e){const n=new sr(r,t,e);return n.texture.mapping=Uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pl(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lS(r,t,e){const n=new Float32Array(zs),i=new Z(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function tp(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function ep(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,f=c===Sf||c===Mf,d=c===Ho||c===Vo;if(f||d){let m=t.get(a);const g=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new Zd(r)),m=f?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{const p=a.image;return f&&p&&p.height>0||d&&p&&i(p)?(e===null&&(e=new Zd(r)),m=f?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",s),m.texture):null}}}return a}function i(a){let c=0;const f=6;for(let d=0;d<f;d++)a[d]!==void 0&&c++;return c===f}function s(a){const c=a.target;c.removeEventListener("dispose",s);const f=t.get(c);f!==void 0&&(t.delete(c),f.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&tc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fS(r,t,e,n){const i={},s=new WeakMap;function o(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);for(const M in g.morphAttributes){const S=g.morphAttributes[M];for(let x=0,v=S.length;x<v;x++)t.remove(S[x])}g.removeEventListener("dispose",o),delete i[g.id];const p=s.get(g);p&&(t.remove(p),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(m,g){return i[g.id]===!0||(g.addEventListener("dispose",o),i[g.id]=!0,e.memory.geometries++),g}function c(m){const g=m.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER);const p=m.morphAttributes;for(const M in p){const S=p[M];for(let x=0,v=S.length;x<v;x++)t.update(S[x],r.ARRAY_BUFFER)}}function f(m){const g=[],p=m.index,M=m.attributes.position;let S=0;if(p!==null){const P=p.array;S=p.version;for(let w=0,C=P.length;w<C;w+=3){const O=P[w+0],I=P[w+1],h=P[w+2];g.push(O,I,I,h,h,O)}}else if(M!==void 0){const P=M.array;S=M.version;for(let w=0,C=P.length/3-1;w<C;w+=3){const O=w+0,I=w+1,h=w+2;g.push(O,I,I,h,h,O)}}else return;const x=new(bm(g)?Lm:Dm)(g,1);x.version=S;const v=s.get(m);v&&t.remove(v),s.set(m,x)}function d(m){const g=s.get(m);if(g){const p=m.index;p!==null&&g.version<p.version&&f(m)}else f(m);return s.get(m)}return{get:a,update:c,getWireframeAttribute:d}}function hS(r,t,e){let n;function i(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function c(g,p){r.drawElements(n,p,s,g*o),e.update(p,n,1)}function f(g,p,M){M!==0&&(r.drawElementsInstanced(n,p,s,g*o,M),e.update(p,n,M))}function d(g,p,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,g,0,M);let x=0;for(let v=0;v<M;v++)x+=p[v];e.update(x,n,1)}function m(g,p,M,S){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<g.length;v++)f(g[v]/o,p[v],S[v]);else{x.multiDrawElementsInstancedWEBGL(n,p,0,s,g,0,S,0,M);let v=0;for(let P=0;P<M;P++)v+=p[P];for(let P=0;P<S.length;P++)e.update(v,n,S[P])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function dS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pS(r,t,e){const n=new WeakMap,i=new Sn;function s(o,a,c){const f=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0;let g=n.get(a);if(g===void 0||g.count!==m){let b=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;g!==void 0&&g.texture.dispose();const M=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],P=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let C=0;M===!0&&(C=1),S===!0&&(C=2),x===!0&&(C=3);let O=a.attributes.position.count*C,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const h=new Float32Array(O*I*4*m),B=new Am(h,O,I,m);B.type=Nr,B.needsUpdate=!0;const V=C*4;for(let D=0;D<m;D++){const W=v[D],q=P[D],lt=w[D],dt=O*I*4*D;for(let it=0;it<W.count;it++){const ot=it*V;M===!0&&(i.fromBufferAttribute(W,it),h[dt+ot+0]=i.x,h[dt+ot+1]=i.y,h[dt+ot+2]=i.z,h[dt+ot+3]=0),S===!0&&(i.fromBufferAttribute(q,it),h[dt+ot+4]=i.x,h[dt+ot+5]=i.y,h[dt+ot+6]=i.z,h[dt+ot+7]=0),x===!0&&(i.fromBufferAttribute(lt,it),h[dt+ot+8]=i.x,h[dt+ot+9]=i.y,h[dt+ot+10]=i.z,h[dt+ot+11]=lt.itemSize===4?i.w:1)}}g={count:m,texture:B,size:new ne(O,I)},n.set(a,g),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let M=0;for(let x=0;x<f.length;x++)M+=f[x];const S=a.morphTargetsRelative?1:1-M;c.getUniforms().setValue(r,"morphTargetBaseInfluence",S),c.getUniforms().setValue(r,"morphTargetInfluences",f)}c.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function mS(r,t,e,n){let i=new WeakMap;function s(c){const f=n.render.frame,d=c.geometry,m=t.get(c,d);if(i.get(m)!==f&&(t.update(m),i.set(m,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==f&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,f))),c.isSkinnedMesh){const g=c.skeleton;i.get(g)!==f&&(g.update(),i.set(g,f))}return m}function o(){i=new WeakMap}function a(c){const f=c.target;f.removeEventListener("dispose",a),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:o}}class zm extends gi{constructor(t,e,n,i,s,o,a,c,f,d=Lo){if(d!==Lo&&d!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Lo&&(n=Js),n===void 0&&d===Wo&&(n=Go),super(null,i,s,o,a,c,d,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hi,this.minFilter=c!==void 0?c:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const km=new gi,np=new zm(1,1),Hm=new Am,Vm=new n0,Gm=new Um,ip=[],rp=[],sp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function ia(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ip[i];if(s===void 0&&(s=new Float32Array(i),ip[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Dn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ln(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function zc(r,t){let e=rp[t];e===void 0&&(e=new Int32Array(t),rp[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;r.uniform2fv(this.addr,t),Ln(e,t)}}function vS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dn(e,t))return;r.uniform3fv(this.addr,t),Ln(e,t)}}function xS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;r.uniform4fv(this.addr,t),Ln(e,t)}}function yS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(Dn(e,n))return;ap.set(n),r.uniformMatrix2fv(this.addr,!1,ap),Ln(e,n)}}function SS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(Dn(e,n))return;op.set(n),r.uniformMatrix3fv(this.addr,!1,op),Ln(e,n)}}function MS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(Dn(e,n))return;sp.set(n),r.uniformMatrix4fv(this.addr,!1,sp),Ln(e,n)}}function TS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ES(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;r.uniform2iv(this.addr,t),Ln(e,t)}}function bS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;r.uniform3iv(this.addr,t),Ln(e,t)}}function wS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;r.uniform4iv(this.addr,t),Ln(e,t)}}function AS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function CS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;r.uniform2uiv(this.addr,t),Ln(e,t)}}function RS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;r.uniform3uiv(this.addr,t),Ln(e,t)}}function PS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;r.uniform4uiv(this.addr,t),Ln(e,t)}}function DS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(np.compareFunction=Em,s=np):s=km,e.setTexture2D(t||s,i)}function LS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vm,i)}function IS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gm,i)}function NS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hm,i)}function US(r){switch(r){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return MS;case 5124:case 35670:return TS;case 35667:case 35671:return ES;case 35668:case 35672:return bS;case 35669:case 35673:return wS;case 5125:return AS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return NS}}function OS(r,t){r.uniform1fv(this.addr,t)}function FS(r,t){const e=ia(t,this.size,2);r.uniform2fv(this.addr,e)}function BS(r,t){const e=ia(t,this.size,3);r.uniform3fv(this.addr,e)}function zS(r,t){const e=ia(t,this.size,4);r.uniform4fv(this.addr,e)}function kS(r,t){const e=ia(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function HS(r,t){const e=ia(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function VS(r,t){const e=ia(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function GS(r,t){r.uniform1iv(this.addr,t)}function WS(r,t){r.uniform2iv(this.addr,t)}function XS(r,t){r.uniform3iv(this.addr,t)}function qS(r,t){r.uniform4iv(this.addr,t)}function YS(r,t){r.uniform1uiv(this.addr,t)}function $S(r,t){r.uniform2uiv(this.addr,t)}function jS(r,t){r.uniform3uiv(this.addr,t)}function KS(r,t){r.uniform4uiv(this.addr,t)}function JS(r,t,e){const n=this.cache,i=t.length,s=zc(e,i);Dn(n,s)||(r.uniform1iv(this.addr,s),Ln(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||km,s[o])}function ZS(r,t,e){const n=this.cache,i=t.length,s=zc(e,i);Dn(n,s)||(r.uniform1iv(this.addr,s),Ln(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vm,s[o])}function QS(r,t,e){const n=this.cache,i=t.length,s=zc(e,i);Dn(n,s)||(r.uniform1iv(this.addr,s),Ln(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gm,s[o])}function tM(r,t,e){const n=this.cache,i=t.length,s=zc(e,i);Dn(n,s)||(r.uniform1iv(this.addr,s),Ln(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hm,s[o])}function eM(r){switch(r){case 5126:return OS;case 35664:return FS;case 35665:return BS;case 35666:return zS;case 35674:return kS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return qS;case 5125:return YS;case 36294:return $S;case 36295:return jS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return tM}}class nM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=US(e.type)}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eM(e.type)}}class rM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function lp(r,t){r.seq.push(t),r.map[t.id]=t}function sM(r,t,e){const n=r.name,i=n.length;for(zu.lastIndex=0;;){const s=zu.exec(n),o=zu.lastIndex;let a=s[1];const c=s[2]==="]",f=s[3];if(c&&(a=a|0),f===void 0||f==="["&&o+2===i){lp(e,f===void 0?new nM(a,r,t):new iM(a,r,t));break}else{let m=e.map[a];m===void 0&&(m=new rM(a),lp(e,m)),e=m}}}class ec{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);sM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function cp(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const oM=37297;let aM=0;function lM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function cM(r){const t=Ze.getPrimaries(Ze.workingColorSpace),e=Ze.getPrimaries(r);let n;switch(t===e?n="":t===dc&&e===hc?n="LinearDisplayP3ToLinearSRGB":t===hc&&e===dc&&(n="LinearSRGBToLinearDisplayP3"),r){case xs:case Oc:return[n,"LinearTransferOETF"];case fr:case Oh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function up(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+lM(r.getShaderSource(t),o)}else return i}function uM(r,t){const e=cM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fM(r,t){let e;switch(t){case Rv:e="Linear";break;case Pv:e="Reinhard";break;case fm:e="Cineon";break;case Dv:e="ACESFilmic";break;case Iv:e="AgX";break;case Nv:e="Neutral";break;case Lv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dl=new Z;function hM(){Ze.getLuminanceCoefficients(Dl);const r=Dl.x.toFixed(4),t=Dl.y.toFixed(4),e=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function pM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ma(r){return r!==""}function fp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(r){return r.replace(gM,vM)}const _M=new Map;function vM(r,t){let e=Pe[t];if(e===void 0){const n=_M.get(t);if(n!==void 0)e=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zf(e)}const xM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(r){return r.replace(xM,yM)}function yM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function SM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rr&&(t="SHADOWMAP_TYPE_VSM"),t}function MM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ho:case Vo:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function TM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vo:t="ENVMAP_MODE_REFRACTION";break}return t}function EM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case um:t="ENVMAP_BLENDING_MULTIPLY";break;case Av:t="ENVMAP_BLENDING_MIX";break;case Cv:t="ENVMAP_BLENDING_ADD";break}return t}function bM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=SM(e),f=MM(e),d=TM(e),m=EM(e),g=bM(e),p=dM(e),M=pM(s),S=i.createProgram();let x,v,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ma).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(Ma).join(`
`),v.length>0&&(v+=`
`)):(x=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),v=[pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Pe.tonemapping_pars_fragment:"",e.toneMapping!==us?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,uM("linearToOutputTexel",e.outputColorSpace),hM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),o=Zf(o),o=fp(o,e),o=hp(o,e),a=Zf(a),a=fp(a,e),a=hp(a,e),o=dp(o),a=dp(a),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",e.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=P+x+o,C=P+v+a,O=cp(i,i.VERTEX_SHADER,w),I=cp(i,i.FRAGMENT_SHADER,C);i.attachShader(S,O),i.attachShader(S,I),e.index0AttributeName!==void 0?i.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function h(D){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(S).trim(),q=i.getShaderInfoLog(O).trim(),lt=i.getShaderInfoLog(I).trim();let dt=!0,it=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(dt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,O,I);else{const ot=up(i,O,"vertex"),rt=up(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ot+`
`+rt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||lt==="")&&(it=!1);it&&(D.diagnostics={runnable:dt,programLog:W,vertexShader:{log:q,prefix:x},fragmentShader:{log:lt,prefix:v}})}i.deleteShader(O),i.deleteShader(I),B=new ec(i,S),V=mM(i,S)}let B;this.getUniforms=function(){return B===void 0&&h(this),B};let V;this.getAttributes=function(){return V===void 0&&h(this),V};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(S,oM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aM++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=I,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new RM(t),e.set(t,n)),n}}class RM{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}}function PM(r,t,e,n,i,s,o){const a=new Rm,c=new CM,f=new Set,d=[],m=i.logarithmicDepthBuffer,g=i.reverseDepthBuffer,p=i.vertexTextures;let M=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return f.add(b),b===0?"uv":`uv${b}`}function v(b,D,W,q,lt){const dt=q.fog,it=lt.geometry,ot=b.isMeshStandardMaterial?q.environment:null,rt=(b.isMeshStandardMaterial?e:t).get(b.envMap||ot),Mt=rt&&rt.mapping===Uc?rt.image.height:null,z=S[b.type];b.precision!==null&&(M=i.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const wt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,de=wt!==void 0?wt.length:0;let Se=0;it.morphAttributes.position!==void 0&&(Se=1),it.morphAttributes.normal!==void 0&&(Se=2),it.morphAttributes.color!==void 0&&(Se=3);let ut,xt,Ft,At;if(z){const Zt=pr[z];ut=Zt.vertexShader,xt=Zt.fragmentShader}else ut=b.vertexShader,xt=b.fragmentShader,c.update(b),Ft=c.getVertexShaderID(b),At=c.getFragmentShaderID(b);const jt=r.getRenderTarget(),Wt=lt.isInstancedMesh===!0,se=lt.isBatchedMesh===!0,xe=!!b.map,ae=!!b.matcap,k=!!rt,Ue=!!b.aoMap,ce=!!b.lightMap,pe=!!b.bumpMap,Q=!!b.normalMap,me=!!b.displacementMap,re=!!b.emissiveMap,U=!!b.metalnessMap,R=!!b.roughnessMap,tt=b.anisotropy>0,pt=b.clearcoat>0,yt=b.dispersion>0,K=b.iridescence>0,Nt=b.sheen>0,Tt=b.transmission>0,Bt=tt&&!!b.anisotropyMap,ve=pt&&!!b.clearcoatMap,St=pt&&!!b.clearcoatNormalMap,kt=pt&&!!b.clearcoatRoughnessMap,Ht=K&&!!b.iridescenceMap,Kt=K&&!!b.iridescenceThicknessMap,Ut=Nt&&!!b.sheenColorMap,ge=Nt&&!!b.sheenRoughnessMap,ue=!!b.specularMap,Ae=!!b.specularColorMap,X=!!b.specularIntensityMap,vt=Tt&&!!b.transmissionMap,ft=Tt&&!!b.thicknessMap,mt=!!b.gradientMap,Ct=!!b.alphaMap,Dt=b.alphaTest>0,Ee=!!b.alphaHash,Ce=!!b.extensions;let Le=us;b.toneMapped&&(jt===null||jt.isXRRenderTarget===!0)&&(Le=r.toneMapping);const we={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:xt,defines:b.defines,customVertexShaderID:Ft,customFragmentShaderID:At,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:se,batchingColor:se&&lt._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&lt.instanceColor!==null,instancingMorph:Wt&&lt.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:jt===null?r.outputColorSpace:jt.isXRRenderTarget===!0?jt.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:ae,envMap:k,envMapMode:k&&rt.mapping,envMapCubeUVHeight:Mt,aoMap:Ue,lightMap:ce,bumpMap:pe,normalMap:Q,displacementMap:p&&me,emissiveMap:re,normalMapObjectSpace:Q&&b.normalMapType===Bv,normalMapTangentSpace:Q&&b.normalMapType===Tm,metalnessMap:U,roughnessMap:R,anisotropy:tt,anisotropyMap:Bt,clearcoat:pt,clearcoatMap:ve,clearcoatNormalMap:St,clearcoatRoughnessMap:kt,dispersion:yt,iridescence:K,iridescenceMap:Ht,iridescenceThicknessMap:Kt,sheen:Nt,sheenColorMap:Ut,sheenRoughnessMap:ge,specularMap:ue,specularColorMap:Ae,specularIntensityMap:X,transmission:Tt,transmissionMap:vt,thicknessMap:ft,gradientMap:mt,opaque:b.transparent===!1&&b.blending===Do&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Dt,alphaHash:Ee,combine:b.combine,mapUv:xe&&x(b.map.channel),aoMapUv:Ue&&x(b.aoMap.channel),lightMapUv:ce&&x(b.lightMap.channel),bumpMapUv:pe&&x(b.bumpMap.channel),normalMapUv:Q&&x(b.normalMap.channel),displacementMapUv:me&&x(b.displacementMap.channel),emissiveMapUv:re&&x(b.emissiveMap.channel),metalnessMapUv:U&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:Bt&&x(b.anisotropyMap.channel),clearcoatMapUv:ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:ue&&x(b.specularMap.channel),specularColorMapUv:Ae&&x(b.specularColorMap.channel),specularIntensityMapUv:X&&x(b.specularIntensityMap.channel),transmissionMapUv:vt&&x(b.transmissionMap.channel),thicknessMapUv:ft&&x(b.thicknessMap.channel),alphaMapUv:Ct&&x(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Q||tt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!it.attributes.uv&&(xe||Ct),fog:!!dt,useFog:b.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:g,skinning:lt.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&Ze.getTransfer(b.map.colorSpace)===ln,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lr,flipSided:b.side===mi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ce&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&b.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=f.has(1),we.vertexUv2s=f.has(2),we.vertexUv3s=f.has(3),f.clear(),we}function P(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)D.push(W),D.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(w(D,b),C(D,b),D.push(r.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function w(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function C(b,D){a.disableAll(),D.supportsVertexTextures&&a.enable(0),D.instancing&&a.enable(1),D.instancingColor&&a.enable(2),D.instancingMorph&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),D.anisotropy&&a.enable(17),D.alphaHash&&a.enable(18),D.batching&&a.enable(19),D.dispersion&&a.enable(20),D.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.reverseDepthBuffer&&a.enable(4),D.skinning&&a.enable(5),D.morphTargets&&a.enable(6),D.morphNormals&&a.enable(7),D.morphColors&&a.enable(8),D.premultipliedAlpha&&a.enable(9),D.shadowMapEnabled&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),D.alphaToCoverage&&a.enable(20),b.push(a.mask)}function O(b){const D=S[b.type];let W;if(D){const q=pr[D];W=gc.clone(q.uniforms)}else W=b.uniforms;return W}function I(b,D){let W;for(let q=0,lt=d.length;q<lt;q++){const dt=d[q];if(dt.cacheKey===D){W=dt,++W.usedTimes;break}}return W===void 0&&(W=new wM(r,D,b,s),d.push(W)),W}function h(b){if(--b.usedTimes===0){const D=d.indexOf(b);d[D]=d[d.length-1],d.pop(),b.destroy()}}function B(b){c.remove(b)}function V(){c.dispose()}return{getParameters:v,getProgramCacheKey:P,getUniforms:O,acquireProgram:I,releaseProgram:h,releaseShaderCache:B,programs:d,dispose:V}}function DM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function LM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gp(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(m,g,p,M,S,x){let v=r[t];return v===void 0?(v={id:m.id,object:m,geometry:g,material:p,groupOrder:M,renderOrder:m.renderOrder,z:S,group:x},r[t]=v):(v.id=m.id,v.object=m,v.geometry=g,v.material=p,v.groupOrder=M,v.renderOrder=m.renderOrder,v.z=S,v.group=x),t++,v}function a(m,g,p,M,S,x){const v=o(m,g,p,M,S,x);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function c(m,g,p,M,S,x){const v=o(m,g,p,M,S,x);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function f(m,g){e.length>1&&e.sort(m||LM),n.length>1&&n.sort(g||mp),i.length>1&&i.sort(g||mp)}function d(){for(let m=t,g=r.length;m<g;m++){const p=r[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:d,sort:f}}function IM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new gp,r.set(n,[o])):i>=s.length?(o=new gp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function NM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new We};break;case"SpotLight":e={position:new Z,direction:new Z,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new We,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new We,groundColor:new We};break;case"RectAreaLight":e={color:new We,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function UM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let OM=0;function FM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function BM(r){const t=new NM,e=UM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Z);const i=new Z,s=new vn,o=new vn;function a(f){let d=0,m=0,g=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,M=0,S=0,x=0,v=0,P=0,w=0,C=0,O=0,I=0,h=0;f.sort(FM);for(let V=0,b=f.length;V<b;V++){const D=f[V],W=D.color,q=D.intensity,lt=D.distance,dt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=W.r*q,m+=W.g*q,g+=W.b*q;else if(D.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(D.sh.coefficients[it],q);h++}else if(D.isDirectionalLight){const it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ot=D.shadow,rt=e.get(D);rt.shadowIntensity=ot.intensity,rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=dt,n.directionalShadowMatrix[p]=D.shadow.matrix,P++}n.directional[p]=it,p++}else if(D.isSpotLight){const it=t.get(D);it.position.setFromMatrixPosition(D.matrixWorld),it.color.copy(W).multiplyScalar(q),it.distance=lt,it.coneCos=Math.cos(D.angle),it.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),it.decay=D.decay,n.spot[S]=it;const ot=D.shadow;if(D.map&&(n.spotLightMap[O]=D.map,O++,ot.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[S]=ot.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=ot.intensity,rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=dt,C++}S++}else if(D.isRectAreaLight){const it=t.get(D);it.color.copy(W).multiplyScalar(q),it.halfWidth.set(D.width*.5,0,0),it.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=it,x++}else if(D.isPointLight){const it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),it.distance=D.distance,it.decay=D.decay,D.castShadow){const ot=D.shadow,rt=e.get(D);rt.shadowIntensity=ot.intensity,rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,rt.shadowCameraNear=ot.camera.near,rt.shadowCameraFar=ot.camera.far,n.pointShadow[M]=rt,n.pointShadowMap[M]=dt,n.pointShadowMatrix[M]=D.shadow.matrix,w++}n.point[M]=it,M++}else if(D.isHemisphereLight){const it=t.get(D);it.skyColor.copy(D.color).multiplyScalar(q),it.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[v]=it,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const B=n.hash;(B.directionalLength!==p||B.pointLength!==M||B.spotLength!==S||B.rectAreaLength!==x||B.hemiLength!==v||B.numDirectionalShadows!==P||B.numPointShadows!==w||B.numSpotShadows!==C||B.numSpotMaps!==O||B.numLightProbes!==h)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=x,n.point.length=M,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=C+O-I,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=h,B.directionalLength=p,B.pointLength=M,B.spotLength=S,B.rectAreaLength=x,B.hemiLength=v,B.numDirectionalShadows=P,B.numPointShadows=w,B.numSpotShadows=C,B.numSpotMaps=O,B.numLightProbes=h,n.version=OM++)}function c(f,d){let m=0,g=0,p=0,M=0,S=0;const x=d.matrixWorldInverse;for(let v=0,P=f.length;v<P;v++){const w=f[v];if(w.isDirectionalLight){const C=n.directional[m];C.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(x),m++}else if(w.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(x),p++}else if(w.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),o.identity(),s.copy(w.matrixWorld),s.premultiply(x),o.extractRotation(s),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),M++}else if(w.isPointLight){const C=n.point[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),g++}else if(w.isHemisphereLight){const C=n.hemi[S];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(x),S++}}}return{setup:a,setupView:c,state:n}}function _p(r){const t=new BM(r),e=[],n=[];function i(d){f.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new _p(r),t.set(i,[a])):s>=o.length?(a=new _p(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class kM extends na{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends na{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WM(r,t,e){let n=new Om;const i=new ne,s=new ne,o=new Sn,a=new kM({depthPacking:Fv}),c=new HM,f={},d=e.maxTextureSize,m={[ms]:mi,[mi]:ms,[Lr]:Lr},g=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:VM,fragmentShader:GM}),p=g.clone();p.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ri(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let v=this.type;this.render=function(I,h,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const V=r.getRenderTarget(),b=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),W=r.state;W.setBlending(Br),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const q=v!==Rr&&this.type===Rr,lt=v===Rr&&this.type!==Rr;for(let dt=0,it=I.length;dt<it;dt++){const ot=I[dt],rt=ot.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;i.copy(rt.mapSize);const Mt=rt.getFrameExtents();if(i.multiply(Mt),s.copy(rt.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Mt.x),i.x=s.x*Mt.x,rt.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Mt.y),i.y=s.y*Mt.y,rt.mapSize.y=s.y)),rt.map===null||q===!0||lt===!0){const wt=this.type!==Rr?{minFilter:Hi,magFilter:Hi}:{};rt.map!==null&&rt.map.dispose(),rt.map=new sr(i.x,i.y,wt),rt.map.texture.name=ot.name+".shadowMap",rt.camera.updateProjectionMatrix()}r.setRenderTarget(rt.map),r.clear();const z=rt.getViewportCount();for(let wt=0;wt<z;wt++){const de=rt.getViewport(wt);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),W.viewport(o),rt.updateMatrices(ot,wt),n=rt.getFrustum(),C(h,B,rt.camera,ot,this.type)}rt.isPointLightShadow!==!0&&this.type===Rr&&P(rt,B),rt.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(V,b,D)};function P(I,h){const B=t.update(S);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new sr(i.x,i.y)),g.uniforms.shadow_pass.value=I.map.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(h,null,B,g,S,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(h,null,B,p,S,null)}function w(I,h,B,V){let b=null;const D=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)b=D;else if(b=B.isPointLight===!0?c:a,r.localClippingEnabled&&h.clipShadows===!0&&Array.isArray(h.clippingPlanes)&&h.clippingPlanes.length!==0||h.displacementMap&&h.displacementScale!==0||h.alphaMap&&h.alphaTest>0||h.map&&h.alphaTest>0){const W=b.uuid,q=h.uuid;let lt=f[W];lt===void 0&&(lt={},f[W]=lt);let dt=lt[q];dt===void 0&&(dt=b.clone(),lt[q]=dt,h.addEventListener("dispose",O)),b=dt}if(b.visible=h.visible,b.wireframe=h.wireframe,V===Rr?b.side=h.shadowSide!==null?h.shadowSide:h.side:b.side=h.shadowSide!==null?h.shadowSide:m[h.side],b.alphaMap=h.alphaMap,b.alphaTest=h.alphaTest,b.map=h.map,b.clipShadows=h.clipShadows,b.clippingPlanes=h.clippingPlanes,b.clipIntersection=h.clipIntersection,b.displacementMap=h.displacementMap,b.displacementScale=h.displacementScale,b.displacementBias=h.displacementBias,b.wireframeLinewidth=h.wireframeLinewidth,b.linewidth=h.linewidth,B.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=r.properties.get(b);W.light=B}return b}function C(I,h,B,V,b){if(I.visible===!1)return;if(I.layers.test(h.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Rr)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const q=t.update(I),lt=I.material;if(Array.isArray(lt)){const dt=q.groups;for(let it=0,ot=dt.length;it<ot;it++){const rt=dt[it],Mt=lt[rt.materialIndex];if(Mt&&Mt.visible){const z=w(I,Mt,V,b);I.onBeforeShadow(r,I,h,B,q,z,rt),r.renderBufferDirect(B,null,q,z,I,rt),I.onAfterShadow(r,I,h,B,q,z,rt)}}}else if(lt.visible){const dt=w(I,lt,V,b);I.onBeforeShadow(r,I,h,B,q,dt,null),r.renderBufferDirect(B,null,q,dt,I,null),I.onAfterShadow(r,I,h,B,q,dt,null)}}const W=I.children;for(let q=0,lt=W.length;q<lt;q++)C(W[q],h,B,V,b)}function O(I){I.target.removeEventListener("dispose",O);for(const B in f){const V=f[B],b=I.target.uuid;b in V&&(V[b].dispose(),delete V[b])}}}const XM={[pf]:mf,[gf]:xf,[_f]:yf,[ko]:vf,[mf]:pf,[xf]:gf,[yf]:_f,[vf]:ko};function qM(r){function t(){let X=!1;const vt=new Sn;let ft=null;const mt=new Sn(0,0,0,0);return{setMask:function(Ct){ft!==Ct&&!X&&(r.colorMask(Ct,Ct,Ct,Ct),ft=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Dt,Ee,Ce,Le){Le===!0&&(Ct*=Ce,Dt*=Ce,Ee*=Ce),vt.set(Ct,Dt,Ee,Ce),mt.equals(vt)===!1&&(r.clearColor(Ct,Dt,Ee,Ce),mt.copy(vt))},reset:function(){X=!1,ft=null,mt.set(-1,0,0,0)}}}function e(){let X=!1,vt=!1,ft=null,mt=null,Ct=null;return{setReversed:function(Dt){vt=Dt},setTest:function(Dt){Dt?Ft(r.DEPTH_TEST):At(r.DEPTH_TEST)},setMask:function(Dt){ft!==Dt&&!X&&(r.depthMask(Dt),ft=Dt)},setFunc:function(Dt){if(vt&&(Dt=XM[Dt]),mt!==Dt){switch(Dt){case pf:r.depthFunc(r.NEVER);break;case mf:r.depthFunc(r.ALWAYS);break;case gf:r.depthFunc(r.LESS);break;case ko:r.depthFunc(r.LEQUAL);break;case _f:r.depthFunc(r.EQUAL);break;case vf:r.depthFunc(r.GEQUAL);break;case xf:r.depthFunc(r.GREATER);break;case yf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){Ct!==Dt&&(r.clearDepth(Dt),Ct=Dt)},reset:function(){X=!1,ft=null,mt=null,Ct=null}}}function n(){let X=!1,vt=null,ft=null,mt=null,Ct=null,Dt=null,Ee=null,Ce=null,Le=null;return{setTest:function(we){X||(we?Ft(r.STENCIL_TEST):At(r.STENCIL_TEST))},setMask:function(we){vt!==we&&!X&&(r.stencilMask(we),vt=we)},setFunc:function(we,Zt,qt){(ft!==we||mt!==Zt||Ct!==qt)&&(r.stencilFunc(we,Zt,qt),ft=we,mt=Zt,Ct=qt)},setOp:function(we,Zt,qt){(Dt!==we||Ee!==Zt||Ce!==qt)&&(r.stencilOp(we,Zt,qt),Dt=we,Ee=Zt,Ce=qt)},setLocked:function(we){X=we},setClear:function(we){Le!==we&&(r.clearStencil(we),Le=we)},reset:function(){X=!1,vt=null,ft=null,mt=null,Ct=null,Dt=null,Ee=null,Ce=null,Le=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let f={},d={},m=new WeakMap,g=[],p=null,M=!1,S=null,x=null,v=null,P=null,w=null,C=null,O=null,I=new We(0,0,0),h=0,B=!1,V=null,b=null,D=null,W=null,q=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let dt=!1,it=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(ot)[1]),dt=it>=1):ot.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),dt=it>=2);let rt=null,Mt={};const z=r.getParameter(r.SCISSOR_BOX),wt=r.getParameter(r.VIEWPORT),de=new Sn().fromArray(z),Se=new Sn().fromArray(wt);function ut(X,vt,ft,mt){const Ct=new Uint8Array(4),Dt=r.createTexture();r.bindTexture(X,Dt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ft;Ee++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(vt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(vt+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Dt}const xt={};xt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ft(r.DEPTH_TEST),s.setFunc(ko),ce(!1),pe(wd),Ft(r.CULL_FACE),k(Br);function Ft(X){f[X]!==!0&&(r.enable(X),f[X]=!0)}function At(X){f[X]!==!1&&(r.disable(X),f[X]=!1)}function jt(X,vt){return d[X]!==vt?(r.bindFramebuffer(X,vt),d[X]=vt,X===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=vt),X===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=vt),!0):!1}function Wt(X,vt){let ft=g,mt=!1;if(X){ft=m.get(vt),ft===void 0&&(ft=[],m.set(vt,ft));const Ct=X.textures;if(ft.length!==Ct.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let Dt=0,Ee=Ct.length;Dt<Ee;Dt++)ft[Dt]=r.COLOR_ATTACHMENT0+Dt;ft.length=Ct.length,mt=!0}}else ft[0]!==r.BACK&&(ft[0]=r.BACK,mt=!0);mt&&r.drawBuffers(ft)}function se(X){return p!==X?(r.useProgram(X),p=X,!0):!1}const xe={[Bs]:r.FUNC_ADD,[uv]:r.FUNC_SUBTRACT,[fv]:r.FUNC_REVERSE_SUBTRACT};xe[hv]=r.MIN,xe[dv]=r.MAX;const ae={[pv]:r.ZERO,[mv]:r.ONE,[gv]:r.SRC_COLOR,[hf]:r.SRC_ALPHA,[Mv]:r.SRC_ALPHA_SATURATE,[yv]:r.DST_COLOR,[vv]:r.DST_ALPHA,[_v]:r.ONE_MINUS_SRC_COLOR,[df]:r.ONE_MINUS_SRC_ALPHA,[Sv]:r.ONE_MINUS_DST_COLOR,[xv]:r.ONE_MINUS_DST_ALPHA,[Tv]:r.CONSTANT_COLOR,[Ev]:r.ONE_MINUS_CONSTANT_COLOR,[bv]:r.CONSTANT_ALPHA,[wv]:r.ONE_MINUS_CONSTANT_ALPHA};function k(X,vt,ft,mt,Ct,Dt,Ee,Ce,Le,we){if(X===Br){M===!0&&(At(r.BLEND),M=!1);return}if(M===!1&&(Ft(r.BLEND),M=!0),X!==cv){if(X!==S||we!==B){if((x!==Bs||w!==Bs)&&(r.blendEquation(r.FUNC_ADD),x=Bs,w=Bs),we)switch(X){case Do:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ff:r.blendFunc(r.ONE,r.ONE);break;case Ad:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Do:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ff:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ad:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,P=null,C=null,O=null,I.set(0,0,0),h=0,S=X,B=we}return}Ct=Ct||vt,Dt=Dt||ft,Ee=Ee||mt,(vt!==x||Ct!==w)&&(r.blendEquationSeparate(xe[vt],xe[Ct]),x=vt,w=Ct),(ft!==v||mt!==P||Dt!==C||Ee!==O)&&(r.blendFuncSeparate(ae[ft],ae[mt],ae[Dt],ae[Ee]),v=ft,P=mt,C=Dt,O=Ee),(Ce.equals(I)===!1||Le!==h)&&(r.blendColor(Ce.r,Ce.g,Ce.b,Le),I.copy(Ce),h=Le),S=X,B=!1}function Ue(X,vt){X.side===Lr?At(r.CULL_FACE):Ft(r.CULL_FACE);let ft=X.side===mi;vt&&(ft=!ft),ce(ft),X.blending===Do&&X.transparent===!1?k(Br):k(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),i.setMask(X.colorWrite);const mt=X.stencilWrite;o.setTest(mt),mt&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ft(r.SAMPLE_ALPHA_TO_COVERAGE):At(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function pe(X){X!==ov?(Ft(r.CULL_FACE),X!==b&&(X===wd?r.cullFace(r.BACK):X===av?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):At(r.CULL_FACE),b=X}function Q(X){X!==D&&(dt&&r.lineWidth(X),D=X)}function me(X,vt,ft){X?(Ft(r.POLYGON_OFFSET_FILL),(W!==vt||q!==ft)&&(r.polygonOffset(vt,ft),W=vt,q=ft)):At(r.POLYGON_OFFSET_FILL)}function re(X){X?Ft(r.SCISSOR_TEST):At(r.SCISSOR_TEST)}function U(X){X===void 0&&(X=r.TEXTURE0+lt-1),rt!==X&&(r.activeTexture(X),rt=X)}function R(X,vt,ft){ft===void 0&&(rt===null?ft=r.TEXTURE0+lt-1:ft=rt);let mt=Mt[ft];mt===void 0&&(mt={type:void 0,texture:void 0},Mt[ft]=mt),(mt.type!==X||mt.texture!==vt)&&(rt!==ft&&(r.activeTexture(ft),rt=ft),r.bindTexture(X,vt||xt[X]),mt.type=X,mt.texture=vt)}function tt(){const X=Mt[rt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(X){de.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),de.copy(X))}function Ut(X){Se.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Se.copy(X))}function ge(X,vt){let ft=c.get(vt);ft===void 0&&(ft=new WeakMap,c.set(vt,ft));let mt=ft.get(X);mt===void 0&&(mt=r.getUniformBlockIndex(vt,X.name),ft.set(X,mt))}function ue(X,vt){const mt=c.get(vt).get(X);a.get(vt)!==mt&&(r.uniformBlockBinding(vt,mt,X.__bindingPointIndex),a.set(vt,mt))}function Ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},rt=null,Mt={},d={},m=new WeakMap,g=[],p=null,M=!1,S=null,x=null,v=null,P=null,w=null,C=null,O=null,I=new We(0,0,0),h=0,B=!1,V=null,b=null,D=null,W=null,q=null,de.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:Ft,disable:At,bindFramebuffer:jt,drawBuffers:Wt,useProgram:se,setBlending:k,setMaterial:Ue,setFlipSided:ce,setCullFace:pe,setLineWidth:Q,setPolygonOffset:me,setScissorTest:re,activeTexture:U,bindTexture:R,unbindTexture:tt,compressedTexImage2D:pt,compressedTexImage3D:yt,texImage2D:kt,texImage3D:Ht,updateUBOMapping:ge,uniformBlockBinding:ue,texStorage2D:ve,texStorage3D:St,texSubImage2D:K,texSubImage3D:Nt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Bt,scissor:Kt,viewport:Ut,reset:Ae}}function vp(r,t,e,n){const i=YM(n);switch(e){case gm:return r*t;case vm:return r*t;case xm:return r*t*2;case ym:return r*t/i.components*i.byteLength;case Ih:return r*t/i.components*i.byteLength;case Sm:return r*t*2/i.components*i.byteLength;case Nh:return r*t*2/i.components*i.byteLength;case _m:return r*t*3/i.components*i.byteLength;case rr:return r*t*4/i.components*i.byteLength;case Uh:return r*t*4/i.components*i.byteLength;case jl:case Kl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jl:case Zl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wf:case Cf:return Math.max(r,16)*Math.max(t,8)/4;case bf:case Af:return Math.max(r,8)*Math.max(t,8)/2;case Rf:case Pf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Df:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case If:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Of:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bf:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case kf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ql:case qf:case Yf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Mm:case $f:return Math.ceil(r/4)*Math.ceil(t/4)*8;case jf:case Kf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function YM(r){switch(r){case Vr:case dm:return{byteLength:1,components:1};case qa:case pm:case zr:return{byteLength:2,components:1};case Dh:case Lh:return{byteLength:2,components:4};case Js:case Ph:case Nr:return{byteLength:4,components:1};case mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function $M(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ne,d=new WeakMap;let m;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,R){return p?new OffscreenCanvas(U,R):mc("canvas")}function S(U,R,tt){let pt=1;const yt=re(U);if((yt.width>tt||yt.height>tt)&&(pt=tt/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const K=Math.floor(pt*yt.width),Nt=Math.floor(pt*yt.height);m===void 0&&(m=M(K,Nt));const Tt=R?M(K,Nt):m;return Tt.width=K,Tt.height=Nt,Tt.getContext("2d").drawImage(U,0,0,K,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+K+"x"+Nt+")."),Tt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function x(U){return U.generateMipmaps&&U.minFilter!==Hi&&U.minFilter!==nr}function v(U){r.generateMipmap(U)}function P(U,R,tt,pt,yt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let K=R;if(R===r.RED&&(tt===r.FLOAT&&(K=r.R32F),tt===r.HALF_FLOAT&&(K=r.R16F),tt===r.UNSIGNED_BYTE&&(K=r.R8)),R===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(K=r.R8UI),tt===r.UNSIGNED_SHORT&&(K=r.R16UI),tt===r.UNSIGNED_INT&&(K=r.R32UI),tt===r.BYTE&&(K=r.R8I),tt===r.SHORT&&(K=r.R16I),tt===r.INT&&(K=r.R32I)),R===r.RG&&(tt===r.FLOAT&&(K=r.RG32F),tt===r.HALF_FLOAT&&(K=r.RG16F),tt===r.UNSIGNED_BYTE&&(K=r.RG8)),R===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(K=r.RG8UI),tt===r.UNSIGNED_SHORT&&(K=r.RG16UI),tt===r.UNSIGNED_INT&&(K=r.RG32UI),tt===r.BYTE&&(K=r.RG8I),tt===r.SHORT&&(K=r.RG16I),tt===r.INT&&(K=r.RG32I)),R===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(K=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(K=r.RGB16UI),tt===r.UNSIGNED_INT&&(K=r.RGB32UI),tt===r.BYTE&&(K=r.RGB8I),tt===r.SHORT&&(K=r.RGB16I),tt===r.INT&&(K=r.RGB32I)),R===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),tt===r.UNSIGNED_INT&&(K=r.RGBA32UI),tt===r.BYTE&&(K=r.RGBA8I),tt===r.SHORT&&(K=r.RGBA16I),tt===r.INT&&(K=r.RGBA32I)),R===r.RGB&&tt===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),R===r.RGBA){const Nt=yt?fc:Ze.getTransfer(pt);tt===r.FLOAT&&(K=r.RGBA32F),tt===r.HALF_FLOAT&&(K=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(K=Nt===ln?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function w(U,R){let tt;return U?R===null||R===Js||R===Go?tt=r.DEPTH24_STENCIL8:R===Nr?tt=r.DEPTH32F_STENCIL8:R===qa&&(tt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Js||R===Go?tt=r.DEPTH_COMPONENT24:R===Nr?tt=r.DEPTH_COMPONENT32F:R===qa&&(tt=r.DEPTH_COMPONENT16),tt}function C(U,R){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Hi&&U.minFilter!==nr?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function O(U){const R=U.target;R.removeEventListener("dispose",O),h(R),R.isVideoTexture&&d.delete(R)}function I(U){const R=U.target;R.removeEventListener("dispose",I),V(R)}function h(U){const R=n.get(U);if(R.__webglInit===void 0)return;const tt=U.source,pt=g.get(tt);if(pt){const yt=pt[R.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&B(U),Object.keys(pt).length===0&&g.delete(tt)}n.remove(U)}function B(U){const R=n.get(U);r.deleteTexture(R.__webglTexture);const tt=U.source,pt=g.get(tt);delete pt[R.__cacheKey],o.memory.textures--}function V(U){const R=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let yt=0;yt<R.__webglFramebuffer[pt].length;yt++)r.deleteFramebuffer(R.__webglFramebuffer[pt][yt]);else r.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)r.deleteFramebuffer(R.__webglFramebuffer[pt]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const tt=U.textures;for(let pt=0,yt=tt.length;pt<yt;pt++){const K=n.get(tt[pt]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(tt[pt])}n.remove(U)}let b=0;function D(){b=0}function W(){const U=b;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),b+=1,U}function q(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function lt(U,R){const tt=n.get(U);if(U.isVideoTexture&&Q(U),U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(tt,U,R);return}}e.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+R)}function dt(U,R){const tt=n.get(U);if(U.version>0&&tt.__version!==U.version){Se(tt,U,R);return}e.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+R)}function it(U,R){const tt=n.get(U);if(U.version>0&&tt.__version!==U.version){Se(tt,U,R);return}e.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+R)}function ot(U,R){const tt=n.get(U);if(U.version>0&&tt.__version!==U.version){ut(tt,U,R);return}e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+R)}const rt={[Tf]:r.REPEAT,[ks]:r.CLAMP_TO_EDGE,[Ef]:r.MIRRORED_REPEAT},Mt={[Hi]:r.NEAREST,[Uv]:r.NEAREST_MIPMAP_NEAREST,[fl]:r.NEAREST_MIPMAP_LINEAR,[nr]:r.LINEAR,[uu]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},z={[zv]:r.NEVER,[Xv]:r.ALWAYS,[kv]:r.LESS,[Em]:r.LEQUAL,[Hv]:r.EQUAL,[Wv]:r.GEQUAL,[Vv]:r.GREATER,[Gv]:r.NOTEQUAL};function wt(U,R){if(R.type===Nr&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===nr||R.magFilter===uu||R.magFilter===fl||R.magFilter===Hs||R.minFilter===nr||R.minFilter===uu||R.minFilter===fl||R.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,rt[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,rt[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,rt[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Mt[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Mt[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,z[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Hi||R.minFilter!==fl&&R.minFilter!==Hs||R.type===Nr&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function de(U,R){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",O));const pt=R.source;let yt=g.get(pt);yt===void 0&&(yt={},g.set(pt,yt));const K=q(R);if(K!==U.__cacheKey){yt[K]===void 0&&(yt[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),yt[K].usedTimes++;const Nt=yt[U.__cacheKey];Nt!==void 0&&(yt[U.__cacheKey].usedTimes--,Nt.usedTimes===0&&B(R)),U.__cacheKey=K,U.__webglTexture=yt[K].texture}return tt}function Se(U,R,tt){let pt=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=r.TEXTURE_3D);const yt=de(U,R),K=R.source;e.bindTexture(pt,U.__webglTexture,r.TEXTURE0+tt);const Nt=n.get(K);if(K.version!==Nt.__version||yt===!0){e.activeTexture(r.TEXTURE0+tt);const Tt=Ze.getPrimaries(Ze.workingColorSpace),Bt=R.colorSpace===rs?null:Ze.getPrimaries(R.colorSpace),ve=R.colorSpace===rs||Tt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let St=S(R.image,!1,i.maxTextureSize);St=me(R,St);const kt=s.convert(R.format,R.colorSpace),Ht=s.convert(R.type);let Kt=P(R.internalFormat,kt,Ht,R.colorSpace,R.isVideoTexture);wt(pt,R);let Ut;const ge=R.mipmaps,ue=R.isVideoTexture!==!0,Ae=Nt.__version===void 0||yt===!0,X=K.dataReady,vt=C(R,St);if(R.isDepthTexture)Kt=w(R.format===Wo,R.type),Ae&&(ue?e.texStorage2D(r.TEXTURE_2D,1,Kt,St.width,St.height):e.texImage2D(r.TEXTURE_2D,0,Kt,St.width,St.height,0,kt,Ht,null));else if(R.isDataTexture)if(ge.length>0){ue&&Ae&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,ge[0].width,ge[0].height);for(let ft=0,mt=ge.length;ft<mt;ft++)Ut=ge[ft],ue?X&&e.texSubImage2D(r.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,kt,Ht,Ut.data):e.texImage2D(r.TEXTURE_2D,ft,Kt,Ut.width,Ut.height,0,kt,Ht,Ut.data);R.generateMipmaps=!1}else ue?(Ae&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,St.width,St.height),X&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St.width,St.height,kt,Ht,St.data)):e.texImage2D(r.TEXTURE_2D,0,Kt,St.width,St.height,0,kt,Ht,St.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ue&&Ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Kt,ge[0].width,ge[0].height,St.depth);for(let ft=0,mt=ge.length;ft<mt;ft++)if(Ut=ge[ft],R.format!==rr)if(kt!==null)if(ue){if(X)if(R.layerUpdates.size>0){const Ct=vp(Ut.width,Ut.height,R.format,R.type);for(const Dt of R.layerUpdates){const Ee=Ut.data.subarray(Dt*Ct/Ut.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,Dt,Ut.width,Ut.height,1,kt,Ee,0,0)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,St.depth,kt,Ut.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,Kt,Ut.width,Ut.height,St.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?X&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Ut.width,Ut.height,St.depth,kt,Ht,Ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ft,Kt,Ut.width,Ut.height,St.depth,0,kt,Ht,Ut.data)}else{ue&&Ae&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,ge[0].width,ge[0].height);for(let ft=0,mt=ge.length;ft<mt;ft++)Ut=ge[ft],R.format!==rr?kt!==null?ue?X&&e.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(r.TEXTURE_2D,ft,Kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?X&&e.texSubImage2D(r.TEXTURE_2D,ft,0,0,Ut.width,Ut.height,kt,Ht,Ut.data):e.texImage2D(r.TEXTURE_2D,ft,Kt,Ut.width,Ut.height,0,kt,Ht,Ut.data)}else if(R.isDataArrayTexture)if(ue){if(Ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Kt,St.width,St.height,St.depth),X)if(R.layerUpdates.size>0){const ft=vp(St.width,St.height,R.format,R.type);for(const mt of R.layerUpdates){const Ct=St.data.subarray(mt*ft/St.data.BYTES_PER_ELEMENT,(mt+1)*ft/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,St.width,St.height,1,kt,Ht,Ct)}R.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,kt,Ht,St.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,St.width,St.height,St.depth,0,kt,Ht,St.data);else if(R.isData3DTexture)ue?(Ae&&e.texStorage3D(r.TEXTURE_3D,vt,Kt,St.width,St.height,St.depth),X&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,kt,Ht,St.data)):e.texImage3D(r.TEXTURE_3D,0,Kt,St.width,St.height,St.depth,0,kt,Ht,St.data);else if(R.isFramebufferTexture){if(Ae)if(ue)e.texStorage2D(r.TEXTURE_2D,vt,Kt,St.width,St.height);else{let ft=St.width,mt=St.height;for(let Ct=0;Ct<vt;Ct++)e.texImage2D(r.TEXTURE_2D,Ct,Kt,ft,mt,0,kt,Ht,null),ft>>=1,mt>>=1}}else if(ge.length>0){if(ue&&Ae){const ft=re(ge[0]);e.texStorage2D(r.TEXTURE_2D,vt,Kt,ft.width,ft.height)}for(let ft=0,mt=ge.length;ft<mt;ft++)Ut=ge[ft],ue?X&&e.texSubImage2D(r.TEXTURE_2D,ft,0,0,kt,Ht,Ut):e.texImage2D(r.TEXTURE_2D,ft,Kt,kt,Ht,Ut);R.generateMipmaps=!1}else if(ue){if(Ae){const ft=re(St);e.texStorage2D(r.TEXTURE_2D,vt,Kt,ft.width,ft.height)}X&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,kt,Ht,St)}else e.texImage2D(r.TEXTURE_2D,0,Kt,kt,Ht,St);x(R)&&v(pt),Nt.__version=K.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ut(U,R,tt){if(R.image.length!==6)return;const pt=de(U,R),yt=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+tt);const K=n.get(yt);if(yt.version!==K.__version||pt===!0){e.activeTexture(r.TEXTURE0+tt);const Nt=Ze.getPrimaries(Ze.workingColorSpace),Tt=R.colorSpace===rs?null:Ze.getPrimaries(R.colorSpace),Bt=R.colorSpace===rs||Nt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const ve=R.isCompressedTexture||R.image[0].isCompressedTexture,St=R.image[0]&&R.image[0].isDataTexture,kt=[];for(let mt=0;mt<6;mt++)!ve&&!St?kt[mt]=S(R.image[mt],!0,i.maxCubemapSize):kt[mt]=St?R.image[mt].image:R.image[mt],kt[mt]=me(R,kt[mt]);const Ht=kt[0],Kt=s.convert(R.format,R.colorSpace),Ut=s.convert(R.type),ge=P(R.internalFormat,Kt,Ut,R.colorSpace),ue=R.isVideoTexture!==!0,Ae=K.__version===void 0||pt===!0,X=yt.dataReady;let vt=C(R,Ht);wt(r.TEXTURE_CUBE_MAP,R);let ft;if(ve){ue&&Ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ge,Ht.width,Ht.height);for(let mt=0;mt<6;mt++){ft=kt[mt].mipmaps;for(let Ct=0;Ct<ft.length;Ct++){const Dt=ft[Ct];R.format!==rr?Kt!==null?ue?X&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,0,0,Dt.width,Dt.height,Kt,Dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,ge,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,0,0,Dt.width,Dt.height,Kt,Ut,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct,ge,Dt.width,Dt.height,0,Kt,Ut,Dt.data)}}}else{if(ft=R.mipmaps,ue&&Ae){ft.length>0&&vt++;const mt=re(kt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,ge,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(St){ue?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt[mt].width,kt[mt].height,Kt,Ut,kt[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ge,kt[mt].width,kt[mt].height,0,Kt,Ut,kt[mt].data);for(let Ct=0;Ct<ft.length;Ct++){const Ee=ft[Ct].image[mt].image;ue?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,0,0,Ee.width,Ee.height,Kt,Ut,Ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,ge,Ee.width,Ee.height,0,Kt,Ut,Ee.data)}}else{ue?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Kt,Ut,kt[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ge,Kt,Ut,kt[mt]);for(let Ct=0;Ct<ft.length;Ct++){const Dt=ft[Ct];ue?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,0,0,Kt,Ut,Dt.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ct+1,ge,Kt,Ut,Dt.image[mt])}}}x(R)&&v(r.TEXTURE_CUBE_MAP),K.__version=yt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function xt(U,R,tt,pt,yt,K){const Nt=s.convert(tt.format,tt.colorSpace),Tt=s.convert(tt.type),Bt=P(tt.internalFormat,Nt,Tt,tt.colorSpace);if(!n.get(R).__hasExternalTextures){const St=Math.max(1,R.width>>K),kt=Math.max(1,R.height>>K);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?e.texImage3D(yt,K,Bt,St,kt,R.depth,0,Nt,Tt,null):e.texImage2D(yt,K,Bt,St,kt,0,Nt,Tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,U),pe(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,yt,n.get(tt).__webglTexture,0,ce(R)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,yt,n.get(tt).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(U,R,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const pt=R.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,K=w(R.stencilBuffer,yt),Nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=ce(R);pe(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt,K,R.width,R.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,K,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,K,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,U)}else{const pt=R.textures;for(let yt=0;yt<pt.length;yt++){const K=pt[yt],Nt=s.convert(K.format,K.colorSpace),Tt=s.convert(K.type),Bt=P(K.internalFormat,Nt,Tt,K.colorSpace),ve=ce(R);tt&&pe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,Bt,R.width,R.height):pe(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,Bt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),lt(R.depthTexture,0);const pt=n.get(R.depthTexture).__webglTexture,yt=ce(R);if(R.depthTexture.format===Lo)pe(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,pt,0);else if(R.depthTexture.format===Wo)pe(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pt,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function jt(U){const R=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const yt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),R.__depthDisposeCallback=yt}R.__boundDepthTexture=pt}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");At(R.__webglFramebuffer,U)}else if(tt){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=r.createRenderbuffer(),Ft(R.__webglDepthbuffer[pt],U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=R.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Ft(R.__webglDepthbuffer,U,!1);else{const pt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,yt),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,yt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(U,R,tt){const pt=n.get(U);R!==void 0&&xt(pt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&jt(U)}function se(U){const R=U.texture,tt=n.get(U),pt=n.get(R);U.addEventListener("dispose",I);const yt=U.textures,K=U.isWebGLCubeRenderTarget===!0,Nt=yt.length>1;if(Nt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=R.version,o.memory.textures++),K){tt.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer[Tt]=[];for(let Bt=0;Bt<R.mipmaps.length;Bt++)tt.__webglFramebuffer[Tt][Bt]=r.createFramebuffer()}else tt.__webglFramebuffer[Tt]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Tt=0;Tt<R.mipmaps.length;Tt++)tt.__webglFramebuffer[Tt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){const ve=n.get(yt[Tt]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&pe(U)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Tt=0;Tt<yt.length;Tt++){const Bt=yt[Tt];tt.__webglColorRenderbuffer[Tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Tt]);const ve=s.convert(Bt.format,Bt.colorSpace),St=s.convert(Bt.type),kt=P(Bt.internalFormat,ve,St,Bt.colorSpace,U.isXRRenderTarget===!0),Ht=ce(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,kt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),wt(r.TEXTURE_CUBE_MAP,R);for(let Tt=0;Tt<6;Tt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Bt=0;Bt<R.mipmaps.length;Bt++)xt(tt.__webglFramebuffer[Tt][Bt],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Bt);else xt(tt.__webglFramebuffer[Tt],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);x(R)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){const ve=yt[Tt],St=n.get(ve);e.bindTexture(r.TEXTURE_2D,St.__webglTexture),wt(r.TEXTURE_2D,ve),xt(tt.__webglFramebuffer,U,ve,r.COLOR_ATTACHMENT0+Tt,r.TEXTURE_2D,0),x(ve)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let Tt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Tt,pt.__webglTexture),wt(Tt,R),R.mipmaps&&R.mipmaps.length>0)for(let Bt=0;Bt<R.mipmaps.length;Bt++)xt(tt.__webglFramebuffer[Bt],U,R,r.COLOR_ATTACHMENT0,Tt,Bt);else xt(tt.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,Tt,0);x(R)&&v(Tt),e.unbindTexture()}U.depthBuffer&&jt(U)}function xe(U){const R=U.textures;for(let tt=0,pt=R.length;tt<pt;tt++){const yt=R[tt];if(x(yt)){const K=U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Nt=n.get(yt).__webglTexture;e.bindTexture(K,Nt),v(K),e.unbindTexture()}}}const ae=[],k=[];function Ue(U){if(U.samples>0){if(pe(U)===!1){const R=U.textures,tt=U.width,pt=U.height;let yt=r.COLOR_BUFFER_BIT;const K=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=n.get(U),Tt=R.length>1;if(Tt)for(let Bt=0;Bt<R.length;Bt++)e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Bt=0;Bt<R.length;Bt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Bt]);const ve=n.get(R[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,yt,r.NEAREST),c===!0&&(ae.length=0,k.length=0,ae.push(r.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(K),k.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,k)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Tt)for(let Bt=0;Bt<R.length;Bt++){e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Bt]);const ve=n.get(R[Bt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,ve,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function ce(U){return Math.min(i.maxSamples,U.samples)}function pe(U){const R=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Q(U){const R=o.render.frame;d.get(U)!==R&&(d.set(U,R),U.update())}function me(U,R){const tt=U.colorSpace,pt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==xs&&tt!==rs&&(Ze.getTransfer(tt)===ln?(pt!==rr||yt!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),R}function re(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.setTexture2D=lt,this.setTexture2DArray=dt,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=Wt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe}function jM(r,t){function e(n,i=rs){let s;const o=Ze.getTransfer(i);if(n===Vr)return r.UNSIGNED_BYTE;if(n===Dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===mm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===dm)return r.BYTE;if(n===pm)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===Ph)return r.INT;if(n===Js)return r.UNSIGNED_INT;if(n===Nr)return r.FLOAT;if(n===zr)return r.HALF_FLOAT;if(n===gm)return r.ALPHA;if(n===_m)return r.RGB;if(n===rr)return r.RGBA;if(n===vm)return r.LUMINANCE;if(n===xm)return r.LUMINANCE_ALPHA;if(n===Lo)return r.DEPTH_COMPONENT;if(n===Wo)return r.DEPTH_STENCIL;if(n===ym)return r.RED;if(n===Ih)return r.RED_INTEGER;if(n===Sm)return r.RG;if(n===Nh)return r.RG_INTEGER;if(n===Uh)return r.RGBA_INTEGER;if(n===jl||n===Kl||n===Jl||n===Zl)if(o===ln)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bf||n===wf||n===Af||n===Cf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rf||n===Pf||n===Df)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rf||n===Pf)return o===ln?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Df)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lf||n===If||n===Nf||n===Uf||n===Of||n===Ff||n===Bf||n===zf||n===kf||n===Hf||n===Vf||n===Gf||n===Wf||n===Xf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===If)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Of)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ff)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xf)return o===ln?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===qf||n===Yf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ql)return o===ln?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mm||n===$f||n===jf||n===Kf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Go?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class KM extends Bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ta extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){o=!0;for(const S of t.hand.values()){const x=e.getJointPose(S,n),v=this._getHandJoint(f,S);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=d.position.distanceTo(m.position),p=.02,M=.005;f.inputState.pinching&&g>p+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=p-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ta;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new gi,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ri(new Bc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eT extends ta{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,f=null,d=null,m=null,g=null,p=null,M=null;const S=new tT,x=e.getContextAttributes();let v=null,P=null;const w=[],C=[],O=new ne;let I=null;const h=new Bi;h.layers.enable(1),h.viewport=new Sn;const B=new Bi;B.layers.enable(2),B.viewport=new Sn;const V=[h,B],b=new KM;b.layers.enable(1),b.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let xt=w[ut];return xt===void 0&&(xt=new ku,w[ut]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(ut){let xt=w[ut];return xt===void 0&&(xt=new ku,w[ut]=xt),xt.getGripSpace()},this.getHand=function(ut){let xt=w[ut];return xt===void 0&&(xt=new ku,w[ut]=xt),xt.getHandSpace()};function q(ut){const xt=C.indexOf(ut.inputSource);if(xt===-1)return;const Ft=w[xt];Ft!==void 0&&(Ft.update(ut.inputSource,ut.frame,f||o),Ft.dispatchEvent({type:ut.type,data:ut.inputSource}))}function lt(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",lt),i.removeEventListener("inputsourceschange",dt);for(let ut=0;ut<w.length;ut++){const xt=C[ut];xt!==null&&(C[ut]=null,w[ut].disconnect(xt))}D=null,W=null,S.reset(),t.setRenderTarget(v),p=null,g=null,m=null,i=null,P=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){s=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ut){f=ut},this.getBaseLayer=function(){return g!==null?g:p},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(ut){if(i=ut,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",lt),i.addEventListener("inputsourceschange",dt),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),i.renderState.layers===void 0){const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),P=new sr(p.framebufferWidth,p.framebufferHeight,{format:rr,type:Vr,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let xt=null,Ft=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?Wo:Lo,Ft=x.stencil?Go:Js);const jt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};m=new XRWebGLBinding(i,e),g=m.createProjectionLayer(jt),i.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new sr(g.textureWidth,g.textureHeight,{format:rr,type:Vr,depthTexture:new zm(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function dt(ut){for(let xt=0;xt<ut.removed.length;xt++){const Ft=ut.removed[xt],At=C.indexOf(Ft);At>=0&&(C[At]=null,w[At].disconnect(Ft))}for(let xt=0;xt<ut.added.length;xt++){const Ft=ut.added[xt];let At=C.indexOf(Ft);if(At===-1){for(let Wt=0;Wt<w.length;Wt++)if(Wt>=C.length){C.push(Ft),At=Wt;break}else if(C[Wt]===null){C[Wt]=Ft,At=Wt;break}if(At===-1)break}const jt=w[At];jt&&jt.connect(Ft)}}const it=new Z,ot=new Z;function rt(ut,xt,Ft){it.setFromMatrixPosition(xt.matrixWorld),ot.setFromMatrixPosition(Ft.matrixWorld);const At=it.distanceTo(ot),jt=xt.projectionMatrix.elements,Wt=Ft.projectionMatrix.elements,se=jt[14]/(jt[10]-1),xe=jt[14]/(jt[10]+1),ae=(jt[9]+1)/jt[5],k=(jt[9]-1)/jt[5],Ue=(jt[8]-1)/jt[0],ce=(Wt[8]+1)/Wt[0],pe=se*Ue,Q=se*ce,me=At/(-Ue+ce),re=me*-Ue;if(xt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(re),ut.translateZ(me),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),jt[10]===-1)ut.projectionMatrix.copy(xt.projectionMatrix),ut.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const U=se+me,R=xe+me,tt=pe-re,pt=Q+(At-re),yt=ae*xe/R*U,K=k*xe/R*U;ut.projectionMatrix.makePerspective(tt,pt,yt,K,U,R),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Mt(ut,xt){xt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(xt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(i===null)return;let xt=ut.near,Ft=ut.far;S.texture!==null&&(S.depthNear>0&&(xt=S.depthNear),S.depthFar>0&&(Ft=S.depthFar)),b.near=B.near=h.near=xt,b.far=B.far=h.far=Ft,(D!==b.near||W!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,W=b.far);const At=ut.parent,jt=b.cameras;Mt(b,At);for(let Wt=0;Wt<jt.length;Wt++)Mt(jt[Wt],At);jt.length===2?rt(b,h,B):b.projectionMatrix.copy(h.projectionMatrix),z(ut,b,At)};function z(ut,xt,Ft){Ft===null?ut.matrix.copy(xt.matrixWorld):(ut.matrix.copy(Ft.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(xt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(xt.projectionMatrix),ut.projectionMatrixInverse.copy(xt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=Jf*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&p===null))return c},this.setFoveation=function(ut){c=ut,g!==null&&(g.fixedFoveation=ut),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ut)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(b)};let wt=null;function de(ut,xt){if(d=xt.getViewerPose(f||o),M=xt,d!==null){const Ft=d.views;p!==null&&(t.setRenderTargetFramebuffer(P,p.framebuffer),t.setRenderTarget(P));let At=!1;Ft.length!==b.cameras.length&&(b.cameras.length=0,At=!0);for(let Wt=0;Wt<Ft.length;Wt++){const se=Ft[Wt];let xe=null;if(p!==null)xe=p.getViewport(se);else{const k=m.getViewSubImage(g,se);xe=k.viewport,Wt===0&&(t.setRenderTargetTextures(P,k.colorTexture,g.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(P))}let ae=V[Wt];ae===void 0&&(ae=new Bi,ae.layers.enable(Wt),ae.viewport=new Sn,V[Wt]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(xe.x,xe.y,xe.width,xe.height),Wt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),At===!0&&b.cameras.push(ae)}const jt=i.enabledFeatures;if(jt&&jt.includes("depth-sensing")){const Wt=m.getDepthInformation(Ft[0]);Wt&&Wt.isValid&&Wt.texture&&S.init(t,Wt,i.renderState)}}for(let Ft=0;Ft<w.length;Ft++){const At=C[Ft],jt=w[Ft];At!==null&&jt!==void 0&&jt.update(At,xt,f||o)}wt&&wt(ut,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),M=null}const Se=new Fm;Se.setAnimationLoop(de),this.setAnimationLoop=function(ut){wt=ut},this.dispose=function(){}}}const Ps=new yr,nT=new vn;function iT(r,t){function e(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,Im(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function i(x,v,P,w,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(x,v):v.isMeshToonMaterial?(s(x,v),m(x,v)):v.isMeshPhongMaterial?(s(x,v),d(x,v)):v.isMeshStandardMaterial?(s(x,v),g(x,v),v.isMeshPhysicalMaterial&&p(x,v,C)):v.isMeshMatcapMaterial?(s(x,v),M(x,v)):v.isMeshDepthMaterial?s(x,v):v.isMeshDistanceMaterial?(s(x,v),S(x,v)):v.isMeshNormalMaterial?s(x,v):v.isLineBasicMaterial?(o(x,v),v.isLineDashedMaterial&&a(x,v)):v.isPointsMaterial?c(x,v,P,w):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,e(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===mi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,e(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===mi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,e(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,e(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const P=t.get(v),w=P.envMap,C=P.envMapRotation;w&&(x.envMap.value=w,Ps.copy(C),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),x.envMapRotation.value.setFromMatrix4(nT.makeRotationFromEuler(Ps)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,x.aoMapTransform))}function o(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform))}function a(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function c(x,v,P,w){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*P,x.scale.value=w*.5,v.map&&(x.map.value=v.map,e(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,e(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,e(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function m(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function p(x,v,P){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===mi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function S(x,v){const P=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rT(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,w){const C=w.program;n.uniformBlockBinding(P,C)}function f(P,w){let C=i[P.id];C===void 0&&(M(P),C=d(P),i[P.id]=C,P.addEventListener("dispose",x));const O=w.program;n.updateUBOMapping(P,O);const I=t.render.frame;s[P.id]!==I&&(g(P),s[P.id]=I)}function d(P){const w=m();P.__bindingPointIndex=w;const C=r.createBuffer(),O=P.__size,I=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,O,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,C),C}function m(){for(let P=0;P<a;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const w=i[P.id],C=P.uniforms,O=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,h=C.length;I<h;I++){const B=Array.isArray(C[I])?C[I]:[C[I]];for(let V=0,b=B.length;V<b;V++){const D=B[V];if(p(D,I,V,O)===!0){const W=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let lt=0;for(let dt=0;dt<q.length;dt++){const it=q[dt],ot=S(it);typeof it=="number"||typeof it=="boolean"?(D.__data[0]=it,r.bufferSubData(r.UNIFORM_BUFFER,W+lt,D.__data)):it.isMatrix3?(D.__data[0]=it.elements[0],D.__data[1]=it.elements[1],D.__data[2]=it.elements[2],D.__data[3]=0,D.__data[4]=it.elements[3],D.__data[5]=it.elements[4],D.__data[6]=it.elements[5],D.__data[7]=0,D.__data[8]=it.elements[6],D.__data[9]=it.elements[7],D.__data[10]=it.elements[8],D.__data[11]=0):(it.toArray(D.__data,lt),lt+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(P,w,C,O){const I=P.value,h=w+"_"+C;if(O[h]===void 0)return typeof I=="number"||typeof I=="boolean"?O[h]=I:O[h]=I.clone(),!0;{const B=O[h];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return O[h]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function M(P){const w=P.uniforms;let C=0;const O=16;for(let h=0,B=w.length;h<B;h++){const V=Array.isArray(w[h])?w[h]:[w[h]];for(let b=0,D=V.length;b<D;b++){const W=V[b],q=Array.isArray(W.value)?W.value:[W.value];for(let lt=0,dt=q.length;lt<dt;lt++){const it=q[lt],ot=S(it),rt=C%O,Mt=rt%ot.boundary,z=rt+Mt;C+=Mt,z!==0&&O-z<ot.storage&&(C+=O-z),W.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=ot.storage}}}const I=C%O;return I>0&&(C+=O-I),P.__size=C,P.__cache={},this}function S(P){const w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function x(P){const w=P.target;w.removeEventListener("dispose",x);const C=o.indexOf(w.__bindingPointIndex);o.splice(C,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function v(){for(const P in i)r.deleteBuffer(i[P]);o=[],i={},s={}}return{bind:c,update:f,dispose:v}}class sT{constructor(t={}){const{canvas:e=Yv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const p=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const v=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fr,this.toneMapping=us,this.toneMappingExposure=1;const w=this;let C=!1,O=0,I=0,h=null,B=-1,V=null;const b=new Sn,D=new Sn;let W=null;const q=new We(0);let lt=0,dt=e.width,it=e.height,ot=1,rt=null,Mt=null;const z=new Sn(0,0,dt,it),wt=new Sn(0,0,dt,it);let de=!1;const Se=new Om;let ut=!1,xt=!1;const Ft=new vn,At=new vn,jt=new Z,Wt=new Sn,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ae(){return h===null?ot:1}let k=n;function Ue(L,Y){return e.getContext(L,Y)}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rh}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),k===null){const Y="webgl2";if(k=Ue(Y,L),k===null)throw Ue(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ce,pe,Q,me,re,U,R,tt,pt,yt,K,Nt,Tt,Bt,ve,St,kt,Ht,Kt,Ut,ge,ue,Ae,X;function vt(){ce=new uS(k),ce.init(),ue=new jM(k,ce),pe=new rS(k,ce,t,ue),Q=new qM(k),pe.reverseDepthBuffer&&Q.buffers.depth.setReversed(!0),me=new dS(k),re=new DM,U=new $M(k,ce,Q,re,pe,ue,me),R=new oS(w),tt=new cS(w),pt=new y0(k),Ae=new nS(k,pt),yt=new fS(k,pt,me,Ae),K=new mS(k,yt,pt,me),Kt=new pS(k,pe,U),St=new sS(re),Nt=new PM(w,R,tt,ce,pe,Ae,St),Tt=new iT(w,re),Bt=new IM,ve=new zM(ce),Ht=new eS(w,R,tt,Q,K,g,c),kt=new WM(w,K,pe),X=new rT(k,me,pe,Q),Ut=new iS(k,ce,me),ge=new hS(k,ce,me),me.programs=Nt.programs,w.capabilities=pe,w.extensions=ce,w.properties=re,w.renderLists=Bt,w.shadowMap=kt,w.state=Q,w.info=me}vt();const ft=new eT(w,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(L){L!==void 0&&(ot=L,this.setSize(dt,it,!1))},this.getSize=function(L){return L.set(dt,it)},this.setSize=function(L,Y,et=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}dt=L,it=Y,e.width=Math.floor(L*ot),e.height=Math.floor(Y*ot),et===!0&&(e.style.width=L+"px",e.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(dt*ot,it*ot).floor()},this.setDrawingBufferSize=function(L,Y,et){dt=L,it=Y,ot=et,e.width=Math.floor(L*et),e.height=Math.floor(Y*et),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(b)},this.getViewport=function(L){return L.copy(z)},this.setViewport=function(L,Y,et,nt){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,Y,et,nt),Q.viewport(b.copy(z).multiplyScalar(ot).round())},this.getScissor=function(L){return L.copy(wt)},this.setScissor=function(L,Y,et,nt){L.isVector4?wt.set(L.x,L.y,L.z,L.w):wt.set(L,Y,et,nt),Q.scissor(D.copy(wt).multiplyScalar(ot).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(L){Q.setScissorTest(de=L)},this.setOpaqueSort=function(L){rt=L},this.setTransparentSort=function(L){Mt=L},this.getClearColor=function(L){return L.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(L=!0,Y=!0,et=!0){let nt=0;if(L){let j=!1;if(h!==null){const bt=h.texture.format;j=bt===Uh||bt===Nh||bt===Ih}if(j){const bt=h.texture.type,Ot=bt===Vr||bt===Js||bt===qa||bt===Go||bt===Dh||bt===Lh,It=Ht.getClearColor(),Lt=Ht.getClearAlpha(),Yt=It.r,oe=It.g,$t=It.b;Ot?(p[0]=Yt,p[1]=oe,p[2]=$t,p[3]=Lt,k.clearBufferuiv(k.COLOR,0,p)):(M[0]=Yt,M[1]=oe,M[2]=$t,M[3]=Lt,k.clearBufferiv(k.COLOR,0,M))}else nt|=k.COLOR_BUFFER_BIT}Y&&(nt|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),et&&(nt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),Bt.dispose(),ve.dispose(),re.dispose(),R.dispose(),tt.dispose(),K.dispose(),Ae.dispose(),X.dispose(),Nt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ze),ft.removeEventListener("sessionend",Rt),ie.stop()};function mt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=me.autoReset,Y=kt.enabled,et=kt.autoUpdate,nt=kt.needsUpdate,j=kt.type;vt(),me.autoReset=L,kt.enabled=Y,kt.autoUpdate=et,kt.needsUpdate=nt,kt.type=j}function Dt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){const Y=L.target;Y.removeEventListener("dispose",Ee),Ce(Y)}function Ce(L){Le(L),re.remove(L)}function Le(L){const Y=re.get(L).programs;Y!==void 0&&(Y.forEach(function(et){Nt.releaseProgram(et)}),L.isShaderMaterial&&Nt.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,et,nt,j,bt){Y===null&&(Y=se);const Ot=j.isMesh&&j.matrixWorld.determinant()<0,It=je(L,Y,et,nt,j);Q.setMaterial(nt,Ot);let Lt=et.index,Yt=1;if(nt.wireframe===!0){if(Lt=yt.getWireframeAttribute(et),Lt===void 0)return;Yt=2}const oe=et.drawRange,$t=et.attributes.position;let Ie=oe.start*Yt,Oe=(oe.start+oe.count)*Yt;bt!==null&&(Ie=Math.max(Ie,bt.start*Yt),Oe=Math.min(Oe,(bt.start+bt.count)*Yt)),Lt!==null?(Ie=Math.max(Ie,0),Oe=Math.min(Oe,Lt.count)):$t!=null&&(Ie=Math.max(Ie,0),Oe=Math.min(Oe,$t.count));const Je=Oe-Ie;if(Je<0||Je===1/0)return;Ae.setup(j,nt,It,et,Lt);let xn,Ne=Ut;if(Lt!==null&&(xn=pt.get(Lt),Ne=ge,Ne.setIndex(xn)),j.isMesh)nt.wireframe===!0?(Q.setLineWidth(nt.wireframeLinewidth*ae()),Ne.setMode(k.LINES)):Ne.setMode(k.TRIANGLES);else if(j.isLine){let te=nt.linewidth;te===void 0&&(te=1),Q.setLineWidth(te*ae()),j.isLineSegments?Ne.setMode(k.LINES):j.isLineLoop?Ne.setMode(k.LINE_LOOP):Ne.setMode(k.LINE_STRIP)}else j.isPoints?Ne.setMode(k.POINTS):j.isSprite&&Ne.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const te=j._multiDrawStarts,Tn=j._multiDrawCounts,Me=j._multiDrawCount,In=Lt?pt.get(Lt).bytesPerElement:1,$i=re.get(nt).currentProgram.getUniforms();for(let Jn=0;Jn<Me;Jn++)$i.setValue(k,"_gl_DrawID",Jn),Ne.render(te[Jn]/In,Tn[Jn])}else if(j.isInstancedMesh)Ne.renderInstances(Ie,Je,j.count);else if(et.isInstancedBufferGeometry){const te=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Tn=Math.min(et.instanceCount,te);Ne.renderInstances(Ie,Je,Tn)}else Ne.render(Ie,Je)};function we(L,Y,et){L.transparent===!0&&L.side===Lr&&L.forceSinglePass===!1?(L.side=mi,L.needsUpdate=!0,un(L,Y,et),L.side=ms,L.needsUpdate=!0,un(L,Y,et),L.side=Lr):un(L,Y,et)}this.compile=function(L,Y,et=null){et===null&&(et=L),x=ve.get(et),x.init(Y),P.push(x),et.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),L!==et&&L.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const nt=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let Ot=0;Ot<bt.length;Ot++){const It=bt[Ot];we(It,et,j),nt.add(It)}else we(bt,et,j),nt.add(bt)}),P.pop(),x=null,nt},this.compileAsync=function(L,Y,et=null){const nt=this.compile(L,Y,et);return new Promise(j=>{function bt(){if(nt.forEach(function(Ot){re.get(Ot).currentProgram.isReady()&&nt.delete(Ot)}),nt.size===0){j(L);return}setTimeout(bt,10)}ce.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Zt=null;function qt(L){Zt&&Zt(L)}function ze(){ie.stop()}function Rt(){ie.start()}const ie=new Fm;ie.setAnimationLoop(qt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(L){Zt=L,ft.setAnimationLoop(L),L===null?ie.stop():ie.start()},ft.addEventListener("sessionstart",ze),ft.addEventListener("sessionend",Rt),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Y),Y=ft.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,Y,h),x=ve.get(L,P.length),x.init(Y),P.push(x),At.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Se.setFromProjectionMatrix(At),xt=this.localClippingEnabled,ut=St.init(this.clippingPlanes,xt),S=Bt.get(L,v.length),S.init(),v.push(S),ft.enabled===!0&&ft.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&Qt(bt,Y,-1/0,w.sortObjects)}Qt(L,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(rt,Mt),xe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,xe&&Ht.addToRenderList(S,L),this.info.render.frame++,ut===!0&&St.beginShadows();const et=x.state.shadowsArray;kt.render(et,L,Y),ut===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=S.opaque,j=S.transmissive;if(x.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(j.length>0)for(let Ot=0,It=bt.length;Ot<It;Ot++){const Lt=bt[Ot];hn(nt,j,L,Lt)}xe&&Ht.render(L);for(let Ot=0,It=bt.length;Ot<It;Ot++){const Lt=bt[Ot];fe(S,L,Lt,Lt.viewport)}}else j.length>0&&hn(nt,j,L,Y),xe&&Ht.render(L),fe(S,L,Y);h!==null&&(U.updateMultisampleRenderTarget(h),U.updateRenderTargetMipmap(h)),L.isScene===!0&&L.onAfterRender(w,L,Y),Ae.resetDefaultState(),B=-1,V=null,P.pop(),P.length>0?(x=P[P.length-1],ut===!0&&St.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,v.pop(),v.length>0?S=v[v.length-1]:S=null};function Qt(L,Y,et,nt){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)et=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Se.intersectsSprite(L)){nt&&Wt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(At);const Ot=K.update(L),It=L.material;It.visible&&S.push(L,Ot,It,et,Wt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Se.intersectsObject(L))){const Ot=K.update(L),It=L.material;if(nt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Wt.copy(L.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Wt.copy(Ot.boundingSphere.center)),Wt.applyMatrix4(L.matrixWorld).applyMatrix4(At)),Array.isArray(It)){const Lt=Ot.groups;for(let Yt=0,oe=Lt.length;Yt<oe;Yt++){const $t=Lt[Yt],Ie=It[$t.materialIndex];Ie&&Ie.visible&&S.push(L,Ot,Ie,et,Wt.z,$t)}}else It.visible&&S.push(L,Ot,It,et,Wt.z,null)}}const bt=L.children;for(let Ot=0,It=bt.length;Ot<It;Ot++)Qt(bt[Ot],Y,et,nt)}function fe(L,Y,et,nt){const j=L.opaque,bt=L.transmissive,Ot=L.transparent;x.setupLightsView(et),ut===!0&&St.setGlobalState(w.clippingPlanes,et),nt&&Q.viewport(b.copy(nt)),j.length>0&&be(j,Y,et),bt.length>0&&be(bt,Y,et),Ot.length>0&&be(Ot,Y,et),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function hn(L,Y,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[nt.id]===void 0&&(x.state.transmissionRenderTarget[nt.id]=new sr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?zr:Vr,minFilter:Hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const bt=x.state.transmissionRenderTarget[nt.id],Ot=nt.viewport||b;bt.setSize(Ot.z,Ot.w);const It=w.getRenderTarget();w.setRenderTarget(bt),w.getClearColor(q),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),xe&&Ht.render(et);const Lt=w.toneMapping;w.toneMapping=us;const Yt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),x.setupLightsView(nt),ut===!0&&St.setGlobalState(w.clippingPlanes,nt),be(L,et,nt),U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let $t=0,Ie=Y.length;$t<Ie;$t++){const Oe=Y[$t],Je=Oe.object,xn=Oe.geometry,Ne=Oe.material,te=Oe.group;if(Ne.side===Lr&&Je.layers.test(nt.layers)){const Tn=Ne.side;Ne.side=mi,Ne.needsUpdate=!0,rn(Je,et,nt,xn,Ne,te),Ne.side=Tn,Ne.needsUpdate=!0,oe=!0}}oe===!0&&(U.updateMultisampleRenderTarget(bt),U.updateRenderTargetMipmap(bt))}w.setRenderTarget(It),w.setClearColor(q,lt),Yt!==void 0&&(nt.viewport=Yt),w.toneMapping=Lt}function be(L,Y,et){const nt=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,bt=L.length;j<bt;j++){const Ot=L[j],It=Ot.object,Lt=Ot.geometry,Yt=nt===null?Ot.material:nt,oe=Ot.group;It.layers.test(et.layers)&&rn(It,Y,et,Lt,Yt,oe)}}function rn(L,Y,et,nt,j,bt){L.onBeforeRender(w,Y,et,nt,j,bt),L.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(w,Y,et,nt,L,bt),j.transparent===!0&&j.side===Lr&&j.forceSinglePass===!1?(j.side=mi,j.needsUpdate=!0,w.renderBufferDirect(et,Y,nt,j,L,bt),j.side=ms,j.needsUpdate=!0,w.renderBufferDirect(et,Y,nt,j,L,bt),j.side=Lr):w.renderBufferDirect(et,Y,nt,j,L,bt),L.onAfterRender(w,Y,et,nt,j,bt)}function un(L,Y,et){Y.isScene!==!0&&(Y=se);const nt=re.get(L),j=x.state.lights,bt=x.state.shadowsArray,Ot=j.state.version,It=Nt.getParameters(L,j.state,bt,Y,et),Lt=Nt.getProgramCacheKey(It);let Yt=nt.programs;nt.environment=L.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(L.isMeshStandardMaterial?tt:R).get(L.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,Yt===void 0&&(L.addEventListener("dispose",Ee),Yt=new Map,nt.programs=Yt);let oe=Yt.get(Lt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Ot)return Qe(L,It),oe}else It.uniforms=Nt.getUniforms(L),L.onBeforeCompile(It,w),oe=Nt.acquireProgram(It,Lt),Yt.set(Lt,oe),nt.uniforms=It.uniforms;const $t=nt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($t.clippingPlanes=St.uniform),Qe(L,It),nt.needsLights=Ke(L),nt.lightsStateVersion=Ot,nt.needsLights&&($t.ambientLightColor.value=j.state.ambient,$t.lightProbe.value=j.state.probe,$t.directionalLights.value=j.state.directional,$t.directionalLightShadows.value=j.state.directionalShadow,$t.spotLights.value=j.state.spot,$t.spotLightShadows.value=j.state.spotShadow,$t.rectAreaLights.value=j.state.rectArea,$t.ltc_1.value=j.state.rectAreaLTC1,$t.ltc_2.value=j.state.rectAreaLTC2,$t.pointLights.value=j.state.point,$t.pointLightShadows.value=j.state.pointShadow,$t.hemisphereLights.value=j.state.hemi,$t.directionalShadowMap.value=j.state.directionalShadowMap,$t.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$t.spotShadowMap.value=j.state.spotShadowMap,$t.spotLightMatrix.value=j.state.spotLightMatrix,$t.spotLightMap.value=j.state.spotLightMap,$t.pointShadowMap.value=j.state.pointShadowMap,$t.pointShadowMatrix.value=j.state.pointShadowMatrix),nt.currentProgram=oe,nt.uniformsList=null,oe}function en(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=ec.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Qe(L,Y){const et=re.get(L);et.outputColorSpace=Y.outputColorSpace,et.batching=Y.batching,et.batchingColor=Y.batchingColor,et.instancing=Y.instancing,et.instancingColor=Y.instancingColor,et.instancingMorph=Y.instancingMorph,et.skinning=Y.skinning,et.morphTargets=Y.morphTargets,et.morphNormals=Y.morphNormals,et.morphColors=Y.morphColors,et.morphTargetsCount=Y.morphTargetsCount,et.numClippingPlanes=Y.numClippingPlanes,et.numIntersection=Y.numClipIntersection,et.vertexAlphas=Y.vertexAlphas,et.vertexTangents=Y.vertexTangents,et.toneMapping=Y.toneMapping}function je(L,Y,et,nt,j){Y.isScene!==!0&&(Y=se),U.resetTextureUnits();const bt=Y.fog,Ot=nt.isMeshStandardMaterial?Y.environment:null,It=h===null?w.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:xs,Lt=(nt.isMeshStandardMaterial?tt:R).get(nt.envMap||Ot),Yt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,oe=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),$t=!!et.morphAttributes.position,Ie=!!et.morphAttributes.normal,Oe=!!et.morphAttributes.color;let Je=us;nt.toneMapped&&(h===null||h.isXRRenderTarget===!0)&&(Je=w.toneMapping);const xn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ne=xn!==void 0?xn.length:0,te=re.get(nt),Tn=x.state.lights;if(ut===!0&&(xt===!0||L!==V)){const Zn=L===V&&nt.id===B;St.setState(nt,L,Zn)}let Me=!1;nt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Tn.state.version||te.outputColorSpace!==It||j.isBatchedMesh&&te.batching===!1||!j.isBatchedMesh&&te.batching===!0||j.isBatchedMesh&&te.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&te.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&te.instancing===!1||!j.isInstancedMesh&&te.instancing===!0||j.isSkinnedMesh&&te.skinning===!1||!j.isSkinnedMesh&&te.skinning===!0||j.isInstancedMesh&&te.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&te.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&te.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&te.instancingMorph===!1&&j.morphTexture!==null||te.envMap!==Lt||nt.fog===!0&&te.fog!==bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==St.numPlanes||te.numIntersection!==St.numIntersection)||te.vertexAlphas!==Yt||te.vertexTangents!==oe||te.morphTargets!==$t||te.morphNormals!==Ie||te.morphColors!==Oe||te.toneMapping!==Je||te.morphTargetsCount!==Ne)&&(Me=!0):(Me=!0,te.__version=nt.version);let In=te.currentProgram;Me===!0&&(In=un(nt,Y,j));let $i=!1,Jn=!1,ra=!1;const an=In.getUniforms(),ji=te.uniforms;if(Q.useProgram(In.program)&&($i=!0,Jn=!0,ra=!0),nt.id!==B&&(B=nt.id,Jn=!0),$i||V!==L){pe.reverseDepthBuffer?(Ft.copy(L.projectionMatrix),jv(Ft),Kv(Ft),an.setValue(k,"projectionMatrix",Ft)):an.setValue(k,"projectionMatrix",L.projectionMatrix),an.setValue(k,"viewMatrix",L.matrixWorldInverse);const Zn=an.map.cameraPosition;Zn!==void 0&&Zn.setValue(k,jt.setFromMatrixPosition(L.matrixWorld)),pe.logarithmicDepthBuffer&&an.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&an.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),V!==L&&(V=L,Jn=!0,ra=!0)}if(j.isSkinnedMesh){an.setOptional(k,j,"bindMatrix"),an.setOptional(k,j,"bindMatrixInverse");const Zn=j.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),an.setValue(k,"boneTexture",Zn.boneTexture,U))}j.isBatchedMesh&&(an.setOptional(k,j,"batchingTexture"),an.setValue(k,"batchingTexture",j._matricesTexture,U),an.setOptional(k,j,"batchingIdTexture"),an.setValue(k,"batchingIdTexture",j._indirectTexture,U),an.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&an.setValue(k,"batchingColorTexture",j._colorsTexture,U));const qr=et.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Kt.update(j,et,In),(Jn||te.receiveShadow!==j.receiveShadow)&&(te.receiveShadow=j.receiveShadow,an.setValue(k,"receiveShadow",j.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ji.envMap.value=Lt,ji.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Y.environment!==null&&(ji.envMapIntensity.value=Y.environmentIntensity),Jn&&(an.setValue(k,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Kn(ji,ra),bt&&nt.fog===!0&&Tt.refreshFogUniforms(ji,bt),Tt.refreshMaterialUniforms(ji,nt,ot,it,x.state.transmissionRenderTarget[L.id]),ec.upload(k,en(te),ji,U)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ec.upload(k,en(te),ji,U),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&an.setValue(k,"center",j.center),an.setValue(k,"modelViewMatrix",j.modelViewMatrix),an.setValue(k,"normalMatrix",j.normalMatrix),an.setValue(k,"modelMatrix",j.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Zn=nt.uniformsGroups;for(let sa=0,jc=Zn.length;sa<jc;sa++){const ui=Zn[sa];X.update(ui,In),X.bind(ui,In)}}return In}function Kn(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function Ke(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(L,Y,et){re.get(L.texture).__webglTexture=Y,re.get(L.depthTexture).__webglTexture=et;const nt=re.get(L);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const et=re.get(L);et.__webglFramebuffer=Y,et.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,et=0){h=L,O=Y,I=et;let nt=!0,j=null,bt=!1,Ot=!1;if(L){const Lt=re.get(L);if(Lt.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(k.FRAMEBUFFER,null),nt=!1;else if(Lt.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Lt.__hasExternalTextures)U.rebindTextures(L,re.get(L.texture).__webglTexture,re.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const $t=L.depthTexture;if(Lt.__boundDepthTexture!==$t){if($t!==null&&re.has($t)&&(L.width!==$t.image.width||L.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const Yt=L.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ot=!0);const oe=re.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(oe[Y])?j=oe[Y][et]:j=oe[Y],bt=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?j=re.get(L).__webglMultisampledFramebuffer:Array.isArray(oe)?j=oe[et]:j=oe,b.copy(L.viewport),D.copy(L.scissor),W=L.scissorTest}else b.copy(z).multiplyScalar(ot).floor(),D.copy(wt).multiplyScalar(ot).floor(),W=de;if(Q.bindFramebuffer(k.FRAMEBUFFER,j)&&nt&&Q.drawBuffers(L,j),Q.viewport(b),Q.scissor(D),Q.setScissorTest(W),bt){const Lt=re.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,et)}else if(Ot){const Lt=re.get(L.texture),Yt=Y||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.__webglTexture,et||0,Yt)}B=-1},this.readRenderTargetPixels=function(L,Y,et,nt,j,bt,Ot){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=re.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){Q.bindFramebuffer(k.FRAMEBUFFER,It);try{const Lt=L.texture,Yt=Lt.format,oe=Lt.type;if(!pe.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-nt&&et>=0&&et<=L.height-j&&k.readPixels(Y,et,nt,j,ue.convert(Yt),ue.convert(oe),bt)}finally{const Lt=h!==null?re.get(h).__webglFramebuffer:null;Q.bindFramebuffer(k.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(L,Y,et,nt,j,bt,Ot){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=re.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){const Lt=L.texture,Yt=Lt.format,oe=Lt.type;if(!pe.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-nt&&et>=0&&et<=L.height-j){Q.bindFramebuffer(k.FRAMEBUFFER,It);const $t=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.bufferData(k.PIXEL_PACK_BUFFER,bt.byteLength,k.STREAM_READ),k.readPixels(Y,et,nt,j,ue.convert(Yt),ue.convert(oe),0);const Ie=h!==null?re.get(h).__webglFramebuffer:null;Q.bindFramebuffer(k.FRAMEBUFFER,Ie);const Oe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await $v(k,Oe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,bt),k.deleteBuffer($t),k.deleteSync(Oe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,et=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const nt=Math.pow(2,-et),j=Math.floor(L.image.width*nt),bt=Math.floor(L.image.height*nt),Ot=Y!==null?Y.x:0,It=Y!==null?Y.y:0;U.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,et,0,0,Ot,It,j,bt),Q.unbindTexture()},this.copyTextureToTexture=function(L,Y,et=null,nt=null,j=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,L=arguments[1],Y=arguments[2],j=arguments[3]||0,et=null);let bt,Ot,It,Lt,Yt,oe;et!==null?(bt=et.max.x-et.min.x,Ot=et.max.y-et.min.y,It=et.min.x,Lt=et.min.y):(bt=L.image.width,Ot=L.image.height,It=0,Lt=0),nt!==null?(Yt=nt.x,oe=nt.y):(Yt=0,oe=0);const $t=ue.convert(Y.format),Ie=ue.convert(Y.type);U.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Oe=k.getParameter(k.UNPACK_ROW_LENGTH),Je=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ne=k.getParameter(k.UNPACK_SKIP_ROWS),te=k.getParameter(k.UNPACK_SKIP_IMAGES),Tn=L.isCompressedTexture?L.mipmaps[j]:L.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Tn.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,It),k.pixelStorei(k.UNPACK_SKIP_ROWS,Lt),L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,Yt,oe,bt,Ot,$t,Ie,Tn.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,Yt,oe,Tn.width,Tn.height,$t,Tn.data):k.texSubImage2D(k.TEXTURE_2D,j,Yt,oe,bt,Ot,$t,Ie,Tn),k.pixelStorei(k.UNPACK_ROW_LENGTH,Oe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,te),j===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,et=null,nt=null,j=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,L=arguments[2],Y=arguments[3],j=arguments[4]||0);let bt,Ot,It,Lt,Yt,oe,$t,Ie,Oe;const Je=L.isCompressedTexture?L.mipmaps[j]:L.image;et!==null?(bt=et.max.x-et.min.x,Ot=et.max.y-et.min.y,It=et.max.z-et.min.z,Lt=et.min.x,Yt=et.min.y,oe=et.min.z):(bt=Je.width,Ot=Je.height,It=Je.depth,Lt=0,Yt=0,oe=0),nt!==null?($t=nt.x,Ie=nt.y,Oe=nt.z):($t=0,Ie=0,Oe=0);const xn=ue.convert(Y.format),Ne=ue.convert(Y.type);let te;if(Y.isData3DTexture)U.setTexture3D(Y,0),te=k.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)U.setTexture2DArray(Y,0),te=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Tn=k.getParameter(k.UNPACK_ROW_LENGTH),Me=k.getParameter(k.UNPACK_IMAGE_HEIGHT),In=k.getParameter(k.UNPACK_SKIP_PIXELS),$i=k.getParameter(k.UNPACK_SKIP_ROWS),Jn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Lt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Yt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,oe),L.isDataTexture||L.isData3DTexture?k.texSubImage3D(te,j,$t,Ie,Oe,bt,Ot,It,xn,Ne,Je.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(te,j,$t,Ie,Oe,bt,Ot,It,xn,Je.data):k.texSubImage3D(te,j,$t,Ie,Oe,bt,Ot,It,xn,Ne,Je),k.pixelStorei(k.UNPACK_ROW_LENGTH,Tn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Me),k.pixelStorei(k.UNPACK_SKIP_PIXELS,In),k.pixelStorei(k.UNPACK_SKIP_ROWS,$i),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jn),j===0&&Y.generateMipmaps&&k.generateMipmap(te),Q.unbindTexture()},this.initRenderTarget=function(L){re.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),Q.unbindTexture()},this.resetState=function(){O=0,I=0,h=null,Q.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Oh?"display-p3":"srgb",e.unpackColorSpace=Ze.workingColorSpace===Oc?"display-p3":"srgb"}}class oT extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wm extends na{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _c=new Z,vc=new Z,xp=new vn,va=new Cm,Ll=new Fc,Hu=new Z,yp=new Z;class Xm extends ci{constructor(t=new Ii,e=new Wm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)_c.fromBufferAttribute(e,i-1),vc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_c.distanceTo(vc);t.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(i),Ll.radius+=s,t.ray.intersectsSphere(Ll)===!1)return;xp.copy(i).invert(),va.copy(t.ray).applyMatrix4(xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,f=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),M=Math.min(d.count,o.start+o.count);for(let S=p,x=M-1;S<x;S+=f){const v=d.getX(S),P=d.getX(S+1),w=Il(this,t,va,c,v,P);w&&e.push(w)}if(this.isLineLoop){const S=d.getX(M-1),x=d.getX(p),v=Il(this,t,va,c,S,x);v&&e.push(v)}}else{const p=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let S=p,x=M-1;S<x;S+=f){const v=Il(this,t,va,c,S,S+1);v&&e.push(v)}if(this.isLineLoop){const S=Il(this,t,va,c,M-1,p);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Il(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(_c.fromBufferAttribute(o,i),vc.fromBufferAttribute(o,s),e.distanceSqToSegment(_c,vc,Hu,yp)>n)return;Hu.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Hu);if(!(c<t.near||c>t.far))return{distance:c,point:yp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}class aT extends Xm{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Xr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,f;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),f=n[i]-o,f<0)a=i+1;else if(f>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const d=n[i],g=n[i+1]-d,p=(o-d)/g;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ne:new Z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new Z,i=[],s=[],o=[],a=new Z,c=new vn;for(let p=0;p<=t;p++){const M=p/t;i[p]=this.getTangentAt(M,new Z)}s[0]=new Z,o[0]=new Z;let f=Number.MAX_VALUE;const d=Math.abs(i[0].x),m=Math.abs(i[0].y),g=Math.abs(i[0].z);d<=f&&(f=d,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),g<=f&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const M=Math.acos(qn(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,M))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(qn(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let M=1;M<=t;M++)s[M].applyMatrix4(c.makeRotationAxis(i[M],p*M)),o[M].crossVectors(i[M],s[M])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qm extends Xr{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ne){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),f=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=c-this.aX,p=f-this.aY;c=g*d-p*m+this.aX,f=g*m+p*d+this.aY}return n.set(c,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lT extends qm{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zh(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,f){i(o,a,f*(a-s),f*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,f,d,m){let g=(o-s)/f-(a-s)/(f+d)+(a-o)/d,p=(a-o)/d-(c-o)/(d+m)+(c-a)/m;g*=d,p*=d,i(o,a,g,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Nl=new Z,Vu=new zh,Gu=new zh,Wu=new zh;class kh extends Xr{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Z){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let f,d;this.closed||a>0?f=i[(a-1)%s]:(Nl.subVectors(i[0],i[1]).add(i[0]),f=Nl);const m=i[a%s],g=i[(a+1)%s];if(this.closed||a+2<s?d=i[(a+2)%s]:(Nl.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let M=Math.pow(f.distanceToSquared(m),p),S=Math.pow(m.distanceToSquared(g),p),x=Math.pow(g.distanceToSquared(d),p);S<1e-4&&(S=1),M<1e-4&&(M=S),x<1e-4&&(x=S),Vu.initNonuniformCatmullRom(f.x,m.x,g.x,d.x,M,S,x),Gu.initNonuniformCatmullRom(f.y,m.y,g.y,d.y,M,S,x),Wu.initNonuniformCatmullRom(f.z,m.z,g.z,d.z,M,S,x)}else this.curveType==="catmullrom"&&(Vu.initCatmullRom(f.x,m.x,g.x,d.x,this.tension),Gu.initCatmullRom(f.y,m.y,g.y,d.y,this.tension),Wu.initCatmullRom(f.z,m.z,g.z,d.z,this.tension));return n.set(Vu.calc(c),Gu.calc(c),Wu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sp(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function cT(r,t){const e=1-r;return e*e*t}function uT(r,t){return 2*(1-r)*r*t}function fT(r,t){return r*r*t}function La(r,t,e,n){return cT(r,t)+uT(r,e)+fT(r,n)}function hT(r,t){const e=1-r;return e*e*e*t}function dT(r,t){const e=1-r;return 3*e*e*r*t}function pT(r,t){return 3*(1-r)*r*r*t}function mT(r,t){return r*r*r*t}function Ia(r,t,e,n,i){return hT(r,t)+dT(r,e)+pT(r,n)+mT(r,i)}class gT extends Xr{constructor(t=new ne,e=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ne){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ia(t,i.x,s.x,o.x,a.x),Ia(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _T extends Xr{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ia(t,i.x,s.x,o.x,a.x),Ia(t,i.y,s.y,o.y,a.y),Ia(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vT extends Xr{constructor(t=new ne,e=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ne){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ne){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xT extends Xr{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yT extends Xr{constructor(t=new ne,e=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ne){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(La(t,i.x,s.x,o.x),La(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends Xr{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(La(t,i.x,s.x,o.x),La(t,i.y,s.y,o.y),La(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ST extends Xr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ne){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],f=i[o],d=i[o>i.length-2?i.length-1:o+1],m=i[o>i.length-3?i.length-1:o+2];return n.set(Sp(a,c.x,f.x,d.x,m.x),Sp(a,c.y,f.y,d.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ne().fromArray(i))}return this}}var MT=Object.freeze({__proto__:null,ArcCurve:lT,CatmullRomCurve3:kh,CubicBezierCurve:gT,CubicBezierCurve3:_T,EllipseCurve:qm,LineCurve:vT,LineCurve3:xT,QuadraticBezierCurve:yT,QuadraticBezierCurve3:Ym,SplineCurve:ST});class kc extends Ii{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],f=new Z,d=new ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,g=3;m<=e;m++,g+=3){const p=n+m/e*i;f.x=t*Math.cos(p),f.y=t*Math.sin(p),o.push(f.x,f.y,f.z),a.push(0,0,1),d.x=(o[g]/t+1)/2,d.y=(o[g+1]/t+1)/2,c.push(d.x,d.y)}for(let m=1;m<=e;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new Pn(o,3)),this.setAttribute("normal",new Pn(a,3)),this.setAttribute("uv",new Pn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xc extends Ii{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let f=0;const d=[],m=new Z,g=new Z,p=[],M=[],S=[],x=[];for(let v=0;v<=n;v++){const P=[],w=v/n;let C=0;v===0&&o===0?C=.5/e:v===n&&c===Math.PI&&(C=-.5/e);for(let O=0;O<=e;O++){const I=O/e;m.x=-t*Math.cos(i+I*s)*Math.sin(o+w*a),m.y=t*Math.cos(o+w*a),m.z=t*Math.sin(i+I*s)*Math.sin(o+w*a),M.push(m.x,m.y,m.z),g.copy(m).normalize(),S.push(g.x,g.y,g.z),x.push(I+C,1-w),P.push(f++)}d.push(P)}for(let v=0;v<n;v++)for(let P=0;P<e;P++){const w=d[v][P+1],C=d[v][P],O=d[v+1][P],I=d[v+1][P+1];(v!==0||o>0)&&p.push(w,C,I),(v!==n-1||c<Math.PI)&&p.push(C,O,I)}this.setIndex(p),this.setAttribute("position",new Pn(M,3)),this.setAttribute("normal",new Pn(S,3)),this.setAttribute("uv",new Pn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hc extends Ii{constructor(t=new Ym(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new Z,c=new Z,f=new ne;let d=new Z;const m=[],g=[],p=[],M=[];S(),this.setIndex(M),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(g,3)),this.setAttribute("uv",new Pn(p,2));function S(){for(let w=0;w<e;w++)x(w);x(s===!1?e:0),P(),v()}function x(w){d=t.getPointAt(w/e,d);const C=o.normals[w],O=o.binormals[w];for(let I=0;I<=i;I++){const h=I/i*Math.PI*2,B=Math.sin(h),V=-Math.cos(h);c.x=V*C.x+B*O.x,c.y=V*C.y+B*O.y,c.z=V*C.z+B*O.z,c.normalize(),g.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,m.push(a.x,a.y,a.z)}}function v(){for(let w=1;w<=e;w++)for(let C=1;C<=i;C++){const O=(i+1)*(w-1)+(C-1),I=(i+1)*w+(C-1),h=(i+1)*w+C,B=(i+1)*(w-1)+C;M.push(O,I,B),M.push(I,h,B)}}function P(){for(let w=0;w<=e;w++)for(let C=0;C<=i;C++)f.x=w/e,f.y=C/i,p.push(f.x,f.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hc(new MT[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class TT extends na{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tm,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ET extends ci{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new We(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bT extends ET{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $m{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Mp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Mp(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);class sl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wT=new Bm(-1,1,1,-1,0,1);class AT extends Ii{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}}const CT=new AT;class jm{constructor(t){this._mesh=new Ri(CT,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,wT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class RT extends sl{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Km={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class PT extends sl{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gc.clone(t.uniforms),this.material=new pi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new jm(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tp extends sl{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class DT extends sl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class LT{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ne);this._width=n.width,this._height=n.height,e=new sr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zr}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new PT(Km),this.copyPass.material.blending=Br,this.clock=new $m}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Tp!==void 0&&(o instanceof Tp?n=!0:o instanceof DT&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const IT={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class qo extends sl{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ne(t.x,t.y):new ne(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sr(s,o,{type:zr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const g=new sr(s,o,{type:zr});g.texture.name="UnrealBloomPass.h"+m,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const p=new sr(s,o,{type:zr});p.texture.name="UnrealBloomPass.v"+m,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=IT;this.highPassUniforms=gc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pi({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new ne(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Km;this.copyUniforms=gc.clone(d.uniforms),this.blendMaterial=new pi({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ff,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new Fh,this.fsQuad=new jm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=qo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=qo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pi({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new pi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}qo.BlurDirectionX=new ne(1,0);qo.BlurDirectionY=new ne(0,1);const yc=0,NT=1,Xu=2;var UT=new $m,qu=0;const Vc=new oT,Sc=new Bi(75,window.innerWidth/window.innerHeight,.1,1e3);Sc.position.z=15;const io=new sT({antialias:!0});io.setSize(window.innerWidth/1.5,window.innerHeight/1.5);const OT=new RT(Vc,Sc),Hh=new LT(io);Hh.addPass(OT);const FT=new bT(16777215,.4);Vc.add(FT);const BT=new qo(new ne(window.innerWidth,window.innerHeight),5.5,1.2,0);Hh.addPass(BT);io.toneMapping=fm;io.toneMappingExposure=10;const Jm=ee("#epicycloid")[0],Zm=ee("#home")[0];io.setSize(window.innerWidth,window.innerHeight);Jm.appendChild(io.domElement);let Ea=!0;const zT=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&!Ea?(Ea=!0,Vh()):!t.isIntersecting&&Ea&&(Ea=!1)})},{threshold:0});zT.observe(Jm);function kT(r,t){return Math.random()*(t-r)+r}function HT(r,t){const e=Math.floor(Math.random()*(t-r+1)+r);return e==0?1:e}function Qm(r,t,e,n,i){var s=[];for(let a=0;a<t;a++)for(let c=0;c<r;c++){const f=c/r*2*Math.PI,d=e[a]*Math.cos(n[a]*f),m=e[a]*Math.sin(n[a]*f);var o=new Z(d,m,0).applyQuaternion(i[a]);a==0?s.push(o):s[c].add(o)}return s.push(s[0]),s}function VT(r,t,e,n){const i=[],s=[],o=[],a=new Wm({color:13434624,linewidth:1});for(let d=0;d<r;d++){const m=[new Z(0,0,0),new Z(t[d],0,0)],g=new kc(t[d],30);g.setAttribute("position",new Wi(g.attributes.position.array.slice(3,g.attributes.position.array.length-3),3)),g.index=null;const p=new Ii().setFromPoints(m),M=new xc(.1,20,10),S=new aT(g,a),x=new Ri(M,a),v=new Xm(p,a);S.applyQuaternion(e[d]),n.add(x),n.add(S),n.add(v),s.push(x),i.push(S),o.push(v)}const c=new xc(.1,20,10),f=new Ri(c,a);return Vc.add(f),[i,s,o]}function GT(r,t,e,n,i,s,o){var a=new Z(0,0,0);for(let f=0;f<n;f++){const d=i[f]*Math.cos(s[f]*r),m=i[f]*Math.sin(s[f]*r);var c=new Z(d,m,0).applyQuaternion(o[f]);t[Xu][f].geometry.attributes.position.array.set([a.x,a.y,a.z],0),a.add(c),t[Xu][f].geometry.attributes.position.array.set([a.x,a.y,a.z],3),t[Xu][f].geometry.attributes.position.needsUpdate=!0,f<n-1&&t[yc][f+1].position.set(a.x,a.y,a.z),t[NT][f].position.set(a.x,a.y,a.z)}}function WT(r,t){for(let e=0;e<Xi;e++)r[e].geometry.dispose(),r[e].geometry=new kc(t[e],30),r[e].geometry.setAttribute("position",new Wi(r[e].geometry.attributes.position.array.slice(3,r[e].geometry.attributes.position.array.length-3),3)),r[e].geometry.index=null}function tg(r,t,e,n,i,s){WT(r[yc],t);const o=Qm(e,n,t,i,s),a=new kh(o,!0);Qf.geometry.dispose(),Qf.geometry=new Hc(a,200,.1,15,!1)}function XT(r,t,e){for(var n=0;n<e;n++)r[yc][n].quaternion.identity(),r[yc][n].applyQuaternion(t[n])}function eg(r,t,e,n){for(let i=0;i<r;i++){t[i]=kT(1,4),n[i]=HT(-5,5);const s=new Z(Math.random(),Math.random(),Math.random()).normalize(),o=Math.random()*2*Math.PI;e[i]=new ea().setFromAxisAngle(s,o)}}function ng(r,t){t[0]=r.clientX/window.innerWidth*5,t[1]=r.clientY/window.innerHeight*5}function qT(r){ng(r,kr),tg(Mc,kr,Gc,Xi,Yo,fs)}function YT(r){eg(Xi,kr,fs,Yo),ng(r,kr),tg(Mc,kr,Gc,Xi,Yo,fs),XT(Mc,fs,Xi)}function $T(){Sc.aspect=window.innerWidth/window.innerHeight,Sc.updateProjectionMatrix(),io.setSize(window.innerWidth,window.innerHeight)}const Xi=3,Gc=100,kr=new Array(Xi).fill(0),fs=new Array(Xi).fill(0),Yo=new Array(Xi).fill(0);eg(Xi,kr,fs,Yo);const Wc=new Ta,Mc=VT(Xi,kr,fs,Wc);var jT=Qm(Gc,Xi,kr,Yo,fs),KT=new kh(jT,!0);const JT=new Hc(KT,200,.08,15,!1),ZT=new TT({color:4718847});var Qf=new Ri(JT,ZT);Wc.add(Qf);Vc.add(Wc);Zm.addEventListener("mousemove",qT,!1);Zm.addEventListener("click",YT,!1);window.addEventListener("resize",$T,!0);var Yu=0;function Vh(){Ea&&(qu=UT.getDelta(),Wc.rotation.y+=.5*qu,GT(Yu,Mc,Gc,Xi,kr,Yo,fs),Hh.render(),requestAnimationFrame(Vh),Yu=(Yu+qu/2)%(2*Math.PI))}Vh();let Ul=ee("#home");function th(r,t){r.find("div").removeClass("active-nav-svg");var e=r.find('a[href="#'+t.attr("id")+'"]'),n=r.find(".selector");if(e)if(t.attr("id")=="contact")n.stop(!0,!0).animate({opacity:0},200);else{e.find("div").addClass("active-nav-svg");var i=e.parent().position().left,s=e.outerWidth();n.stop(!0,!0).animate({opacity:1,width:s+"px",left:i+"px"},200)}}function QT(r,t,e){var n=ee(window).scrollTop(),i=-1,s=null;return t.each(function(){var o=ee(this).offset().top,a=o+ee(this).outerHeight(),c=Math.max(o,n),f=Math.min(a,n+ee(window).height()),d=Math.max(0,f-c);d>i&&(i=d,s=ee(this))}),s&&e&&e.attr("id")!=s.attr("id")&&th(r,s),s}function tE(){var r=ee("section"),t=ee("nav");ee(window).on("scroll",function(){Ul=QT(t,r,Ul)}),window.addEventListener("resize",function(e){th(t,Ul)},!0),th(t,Ul)}var eE="1.1.14";function ig(r,t,e){return Math.max(r,Math.min(t,e))}function nE(r,t,e){return(1-e)*r+e*t}function iE(r,t,e,n){return nE(r,t,1-Math.exp(-e*n))}function rE(r,t){return(r%t+t)%t}var sE=class{constructor(){he(this,"isRunning",!1);he(this,"value",0);he(this,"from",0);he(this,"to",0);he(this,"currentTime",0);he(this,"lerp");he(this,"duration");he(this,"easing");he(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=ig(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=iE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function oE(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var aE=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){he(this,"width",0);he(this,"height",0);he(this,"scrollHeight",0);he(this,"scrollWidth",0);he(this,"debouncedResize");he(this,"wrapperResizeObserver");he(this,"contentResizeObserver");he(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});he(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});he(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=oE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},rg=class{constructor(){he(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Ep=100/6,ns={passive:!1},lE=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){he(this,"touchStart",{x:0,y:0});he(this,"lastDelta",{x:0,y:0});he(this,"window",{width:0,height:0});he(this,"emitter",new rg);he(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});he(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});he(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});he(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=n===1?Ep:n===2?this.window.width:1,s=n===1?Ep:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});he(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ns),this.element.addEventListener("touchstart",this.onTouchStart,ns),this.element.addEventListener("touchmove",this.onTouchMove,ns),this.element.addEventListener("touchend",this.onTouchEnd,ns)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ns),this.element.removeEventListener("touchstart",this.onTouchStart,ns),this.element.removeEventListener("touchmove",this.onTouchMove,ns),this.element.removeEventListener("touchend",this.onTouchEnd,ns)}},cE=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:c=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:f=.1,infinite:d=!1,orientation:m="vertical",gestureOrientation:g="vertical",touchMultiplier:p=1,wheelMultiplier:M=1,autoResize:S=!0,prevent:x,virtualScroll:v,overscroll:P=!0,__experimental__naiveDimensions:w=!1}={}){he(this,"_isScrolling",!1);he(this,"_isStopped",!1);he(this,"_isLocked",!1);he(this,"_preventNextNativeScrollEvent",!1);he(this,"_resetVelocityTimeout",null);he(this,"isTouching");he(this,"time",0);he(this,"userData",{});he(this,"lastVelocity",0);he(this,"velocity",0);he(this,"direction",0);he(this,"options");he(this,"targetScroll");he(this,"animatedScroll");he(this,"animate",new sE);he(this,"emitter",new rg);he(this,"dimensions");he(this,"virtualScroll");he(this,"onPointerDown",r=>{r.button===1&&this.reset()});he(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(this.isTouching=n.type==="touchstart"||n.type==="touchmove",this.options.syncTouch&&i&&n.type==="touchstart"&&!this.isStopped&&!this.isLocked){this.reset();return}const a=t===0&&e===0,c=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||c)return;let f=n.composedPath();f=f.slice(0,f.indexOf(this.rootElement));const d=this.options.prevent;if(f.find(x=>{var v,P,w;return x instanceof HTMLElement&&(typeof d=="function"&&(d==null?void 0:d(x))||((v=x.hasAttribute)==null?void 0:v.call(x,"data-lenis-prevent"))||i&&((P=x.hasAttribute)==null?void 0:P.call(x,"data-lenis-prevent-touch"))||s&&((w=x.hasAttribute)==null?void 0:w.call(x,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let g=e;this.options.gestureOrientation==="both"?g=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(g=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const p=i&&this.options.syncTouch,S=i&&n.type==="touchend"&&Math.abs(g)>5;S&&(g=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+g,{programmatic:!1,...p?{lerp:S?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});he(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});window.lenisVersion=eE,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:c,lerp:f,infinite:d,gestureOrientation:g,orientation:m,touchMultiplier:p,wheelMultiplier:M,autoResize:S,prevent:x,virtualScroll:v,overscroll:P,__experimental__naiveDimensions:w},this.dimensions=new aE(r,t,{autoResize:S}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new lE(e,{touchMultiplier:p,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(r){const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:c,force:f=!1,programmatic:d=!0,userData:m}={}){if(!((this.isStopped||this.isLocked)&&!f)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let g;if(typeof r=="string"?g=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(g=r),g){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?M.left:M.top}const p=g.getBoundingClientRect();r=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):r=ig(0,r,this.limit),r===this.targetScroll){a==null||a(this),c==null||c(this);return}if(this.userData=m??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={};return}d||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(g,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),d&&(this.targetScroll=g),p||this.emit(),p&&(this.reset(),this.emit(),c==null||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?rE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sg(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$o={duration:.5,overwrite:!1,delay:0},Gh,$n,fn,Vi=1e8,on=1/Vi,eh=Math.PI*2,uE=eh/4,fE=0,og=Math.sqrt,hE=Math.cos,dE=Math.sin,Bn=function(t){return typeof t=="string"},_n=function(t){return typeof t=="function"},Gr=function(t){return typeof t=="number"},Wh=function(t){return typeof t>"u"},Sr=function(t){return typeof t=="object"},_i=function(t){return t!==!1},Xh=function(){return typeof window<"u"},Ol=function(t){return _n(t)||Bn(t)},ag=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,nh=/(?:-?\.?\d|\.)+/gi,lg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Co=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cg=/[+-]=-?[.\d]+/,ug=/[^,'"\[\]\s]+/gi,pE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pn,hr,ih,qh,Li={},Tc={},fg,hg=function(t){return(Tc=Zs(t,Li))&&Si},Yh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ya=function(t,e){return!e&&console.warn(t)},dg=function(t,e){return t&&(Li[t]=e)&&Tc&&(Tc[t]=e)||Li},$a=function(){return 0},mE={suppressEvents:!0,isStart:!0,kill:!1},nc={suppressEvents:!0,kill:!1},gE={suppressEvents:!0},$h={},hs=[],rh={},pg,wi={},ju={},bp=30,ic=[],jh="",Kh=function(t){var e=t[0],n,i;if(Sr(e)||_n(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ic.length;i--&&!ic[i].targetTest(e););n=ic[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bg(t[i],n)))||t.splice(i,1);return t},Ws=function(t){return t._gsap||Kh(Gi(t))[0]._gsap},mg=function(t,e,n){return(n=t[e])&&_n(n)?t[e]():Wh(n)&&t.getAttribute&&t.getAttribute(e)||n},vi=function(t,e){return(t=t.split(",")).forEach(e)||t},yn=function(t){return Math.round(t*1e5)/1e5||0},Fn=function(t){return Math.round(t*1e7)/1e7||0},No=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_E=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ec=function(){var t=hs.length,e=hs.slice(0),n,i;for(rh={},hs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gg=function(t,e,n,i){hs.length&&!$n&&Ec(),t.render(e,n,$n&&e<0&&(t._initted||t._startAt)),hs.length&&!$n&&Ec()},_g=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ug).length<2?e:Bn(t)?t.trim():t},vg=function(t){return t},Yi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vE=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Zs=function(t,e){for(var n in e)t[n]=e[n];return t},wp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Sr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},bc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Na=function(t){var e=t.parent||pn,n=t.keyframes?vE(jn(t.keyframes)):Yi;if(_i(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},xE=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},xg=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Xc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},gs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},yE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},sh=function(t,e,n,i){return t._startAt&&($n?t._startAt.revert(nc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},SE=function r(t){return!t||t._ts&&r(t.parent)},Ap=function(t){return t._repeat?jo(t._tTime,t=t.duration()+t._rDelay)*t:0},jo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},wc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},qc=function(t){return t._end=Fn(t._start+(t._tDur/Math.abs(t._ts||t._rts||on)||0))},Yc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),qc(t),n._dirty||Xs(n,t)),t},yg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=wc(t.rawTime(),e),(!e._dur||ol(0,e.totalDuration(),n)-e._tTime>on)&&e.render(n,!0)),Xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-on}},mr=function(t,e,n,i){return e.parent&&gs(e),e._start=Fn((Gr(n)?n:n||t!==pn?Fi(t,n,e):t._time)+e._delay),e._end=Fn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xg(t,e,"_first","_last",t._sort?"_start":0),oh(e)||(t._recent=e),i||yg(t,e),t._ts<0&&Yc(t,t._tTime),t},Sg=function(t,e){return(Li.ScrollTrigger||Yh("scrollTrigger",e))&&Li.ScrollTrigger.create(e,t)},Mg=function(t,e,n,i,s){if(Zh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!$n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pg!==Ai.frame)return hs.push(t),t._lazy=[s,i],1},ME=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},oh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},TE=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&ME(t)&&!(!t._initted&&oh(t))||(t._ts<0||t._dp._ts<0)&&!oh(t))?0:1,a=t._rDelay,c=0,f,d,m;if(a&&t._repeat&&(c=ol(0,t._tDur,e),d=jo(c,a),t._yoyo&&d&1&&(o=1-o),d!==jo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||$n||i||t._zTime===on||!e&&t._zTime){if(!t._initted&&Mg(t,e,i,n,c))return;for(m=t._zTime,t._zTime=e||(n?on:0),n||(n=e&&!m),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,f=t._pt;f;)f.r(o,f.d),f=f._next;e<0&&sh(t,e,n,!0),t._onUpdate&&!n&&Pi(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Pi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&gs(t,1),!n&&!$n&&(Pi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},EE=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ko=function(t,e,n,i){var s=t._repeat,o=Fn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Fn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Yc(t,t._tTime=t._tDur*a),t.parent&&qc(t),n||Xs(t.parent,t),t},Cp=function(t){return t instanceof oi?Xs(t):Ko(t,t._dur)},bE={_start:0,endTime:$a,totalDuration:$a},Fi=function r(t,e,n){var i=t.labels,s=t._recent||bE,o=t.duration()>=Vi?s.endTime(!1):t._dur,a,c,f;return Bn(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),f=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(f?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),f&&n&&(c=c/100*(jn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Ua=function(t,e,n){var i=Gr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=_i(c.vars.inherit)&&c.parent;o.immediateRender=_i(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new wn(e[0],o,e[s+1])},ys=function(t,e){return t||t===0?e(t):e},ol=function(t,e,n){return n<t?t:n>e?e:n},Yn=function(t,e){return!Bn(t)||!(e=pE.exec(t))?"":e[1]},wE=function(t,e,n){return ys(n,function(i){return ol(t,e,i)})},ah=[].slice,Tg=function(t,e){return t&&Sr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Sr(t[0]))&&!t.nodeType&&t!==hr},AE=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Bn(i)&&!e||Tg(i,1)?(s=n).push.apply(s,Gi(i)):n.push(i)})||n},Gi=function(t,e,n){return fn&&!e&&fn.selector?fn.selector(t):Bn(t)&&!n&&(ih||!Jo())?ah.call((e||qh).querySelectorAll(t),0):jn(t)?AE(t,n):Tg(t)?ah.call(t,0):t?[t]:[]},lh=function(t){return t=Gi(t)[0]||Ya("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Gi(e,n.querySelectorAll?n:n===t?Ya("Invalid scope")||qh.createElement("div"):t)}},Eg=function(t){return t.sort(function(){return .5-Math.random()})},bg=function(t){if(_n(t))return t;var e=Sr(t)?t:{each:t},n=qs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,f=e.axis,d=i,m=i;return Bn(i)?d=m={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(d=i[0],m=i[1]),function(g,p,M){var S=(M||e).length,x=o[S],v,P,w,C,O,I,h,B,V;if(!x){if(V=e.grid==="auto"?0:(e.grid||[1,Vi])[1],!V){for(h=-Vi;h<(h=M[V++].getBoundingClientRect().left)&&V<S;);V<S&&V--}for(x=o[S]=[],v=c?Math.min(V,S)*d-.5:i%V,P=V===Vi?0:c?S*m/V-.5:i/V|0,h=0,B=Vi,I=0;I<S;I++)w=I%V-v,C=P-(I/V|0),x[I]=O=f?Math.abs(f==="y"?C:w):og(w*w+C*C),O>h&&(h=O),O<B&&(B=O);i==="random"&&Eg(x),x.max=h-B,x.min=B,x.v=S=(parseFloat(e.amount)||parseFloat(e.each)*(V>S?S-1:f?f==="y"?S/V:V:Math.max(V,S/V))||0)*(i==="edges"?-1:1),x.b=S<0?s-S:s,x.u=Yn(e.amount||e.each)||0,n=n&&S<0?Ug(n):n}return S=(x[g]-x.min)/x.max||0,Fn(x.b+(n?n(S):S)*x.v)+x.u}},ch=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gr(n)?0:Yn(n))}},wg=function(t,e){var n=jn(t),i,s;return!n&&Sr(t)&&(i=n=t.radius||Vi,t.values?(t=Gi(t.values),(s=!Gr(t[0]))&&(i*=i)):t=ch(t.increment)),ys(e,n?_n(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),f=Vi,d=0,m=t.length,g,p;m--;)s?(g=t[m].x-a,p=t[m].y-c,g=g*g+p*p):g=Math.abs(t[m]-a),g<f&&(f=g,d=m);return d=!i||f<=i?t[d]:o,s||d===o||Gr(o)?d:d+Yn(o)}:ch(t))},Ag=function(t,e,n,i){return ys(jn(t)?!e:n===!0?!!(n=0):!i,function(){return jn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},CE=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},RE=function(t,e){return function(n){return t(parseFloat(n))+(e||Yn(n))}},PE=function(t,e,n){return Rg(t,e,0,1,n)},Cg=function(t,e,n){return ys(n,function(i){return t[~~e(i)]})},DE=function r(t,e,n){var i=e-t;return jn(t)?Cg(t,r(0,t.length),e):ys(n,function(s){return(i+(s-t)%i)%i+t})},LE=function r(t,e,n){var i=e-t,s=i*2;return jn(t)?Cg(t,r(0,t.length-1),e):ys(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ja=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?ug:nh),n+=t.substr(e,i-e)+Ag(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Rg=function(t,e,n,i,s){var o=e-t,a=i-n;return ys(s,function(c){return n+((c-t)/o*a||0)})},IE=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=Bn(t),a={},c,f,d,m,g;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(jn(t)&&!jn(e)){for(d=[],m=t.length,g=m-2,f=1;f<m;f++)d.push(r(t[f-1],t[f]));m--,s=function(M){M*=m;var S=Math.min(g,~~M);return d[S](M-S)},n=e}else i||(t=Zs(jn(t)?[]:{},t));if(!d){for(c in e)Jh.call(a,t,c,"get",e[c]);s=function(M){return ed(M,a)||(o?t.p:t)}}}return ys(n,s)},Rp=function(t,e,n){var i=t.labels,s=Vi,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Pi=function(t,e,n){var i=t.vars,s=i[e],o=fn,a=t._ctx,c,f,d;if(s)return c=i[e+"Params"],f=i.callbackScope||t,n&&hs.length&&Ec(),a&&(fn=a),d=c?s.apply(f,c):s.call(f),fn=o,d},ba=function(t){return gs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!$n),t.progress()<1&&Pi(t,"onInterrupt"),t},Ro,Pg=[],Dg=function(t){if(t)if(t=!t.name&&t.default||t,Xh()||t.headless){var e=t.name,n=_n(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$a,render:ed,add:Jh,kill:jE,modifier:$E,rawVars:0},o={targetTest:0,get:0,getSetter:td,aliases:{},register:0};if(Jo(),t!==i){if(wi[e])return;Yi(i,Yi(bc(t,s),o)),Zs(i.prototype,Zs(s,bc(t,o))),wi[i.prop=e]=i,t.targetTest&&(ic.push(i),$h[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dg(e,i),t.register&&t.register(Si,i,xi)}else Pg.push(t)},nn=255,wa={aqua:[0,nn,nn],lime:[0,nn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nn],navy:[0,0,128],white:[nn,nn,nn],olive:[128,128,0],yellow:[nn,nn,0],orange:[nn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nn,0,0],pink:[nn,192,203],cyan:[0,nn,nn],transparent:[nn,nn,nn,0]},Ku=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*nn+.5|0},Lg=function(t,e,n){var i=t?Gr(t)?[t>>16,t>>8&nn,t&nn]:0:wa.black,s,o,a,c,f,d,m,g,p,M;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wa[t])i=wa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&nn,i&nn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&nn,t&nn]}else if(t.substr(0,3)==="hsl"){if(i=M=t.match(nh),!e)c=+i[0]%360/360,f=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(f+1):d+f-d*f,s=d*2-o,i.length>3&&(i[3]*=1),i[0]=Ku(c+1/3,s,o),i[1]=Ku(c,s,o),i[2]=Ku(c-1/3,s,o);else if(~t.indexOf("="))return i=t.match(lg),n&&i.length<4&&(i[3]=1),i}else i=t.match(nh)||wa.transparent;i=i.map(Number)}return e&&!M&&(s=i[0]/nn,o=i[1]/nn,a=i[2]/nn,m=Math.max(s,o,a),g=Math.min(s,o,a),d=(m+g)/2,m===g?c=f=0:(p=m-g,f=d>.5?p/(2-m-g):p/(m+g),c=m===s?(o-a)/p+(o<a?6:0):m===o?(a-s)/p+2:(s-o)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(f*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Ig=function(t){var e=[],n=[],i=-1;return t.split(ds).forEach(function(s){var o=s.match(Co)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pp=function(t,e,n){var i="",s=(t+i).match(ds),o=e?"hsla(":"rgba(",a=0,c,f,d,m;if(!s)return t;if(s=s.map(function(g){return(g=Lg(g,e,1))&&o+(e?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(d=Ig(t),c=n.c,c.join(i)!==d.c.join(i)))for(f=t.replace(ds,"1").split(Co),m=f.length-1;a<m;a++)i+=f[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!f)for(f=t.split(ds),m=f.length-1;a<m;a++)i+=f[a]+s[a];return i+f[m]},ds=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wa)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),NE=/hsl[a]?\(/,Ng=function(t){var e=t.join(" "),n;if(ds.lastIndex=0,ds.test(e))return n=NE.test(e),t[1]=Pp(t[1],n),t[0]=Pp(t[0],n,Ig(t[1])),!0},Ka,Ai=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,f,d,m,g,p,M=function S(x){var v=r()-i,P=x===!0,w,C,O,I;if((v>t||v<0)&&(n+=v-e),i+=v,O=i-n,w=O-o,(w>0||P)&&(I=++m.frame,g=O-m.time*1e3,m.time=O=O/1e3,o+=w+(w>=s?4:s-w),C=1),P||(c=f(S)),C)for(p=0;p<a.length;p++)a[p](O,g,I,x)};return m={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){fg&&(!ih&&Xh()&&(hr=ih=window,qh=hr.document||{},Li.gsap=Si,(hr.gsapVersions||(hr.gsapVersions=[])).push(Si.version),hg(Tc||hr.GreenSockGlobals||!hr.gsap&&hr||{}),Pg.forEach(Dg)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&m.sleep(),f=d||function(x){return setTimeout(x,o-m.time*1e3+1|0)},Ka=1,M(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),Ka=0,f=$a},lagSmoothing:function(x,v){t=x||1/0,e=Math.min(v||33,t)},fps:function(x){s=1e3/(x||240),o=m.time*1e3+s},add:function(x,v,P){var w=v?function(C,O,I,h){x(C,O,I,h),m.remove(w)}:x;return m.remove(x),a[P?"unshift":"push"](w),Jo(),w},remove:function(x,v){~(v=a.indexOf(x))&&a.splice(v,1)&&p>=v&&p--},_listeners:a},m}(),Jo=function(){return!Ka&&Ai.wake()},qe={},UE=/^[\d.\-M][\d.\-,\s]/,OE=/["']/g,FE=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,f;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,f=c.substr(0,a),e[i]=isNaN(f)?f.replace(OE,"").trim():+f,i=c.substr(a+1).trim();return e},BE=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},zE=function(t){var e=(t+"").split("("),n=qe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[FE(e[1])]:BE(t).split(",").map(_g)):qe._CE&&UE.test(t)?qe._CE("",t):n},Ug=function(t){return function(e){return 1-t(1-e)}},Og=function r(t,e){for(var n=t._first,i;n;)n instanceof oi?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},qs=function(t,e){return t&&(_n(t)?t:qe[t]||zE(t))||e},ro=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return vi(t,function(a){qe[a]=Li[a]=s,qe[o=a.toLowerCase()]=n;for(var c in s)qe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=qe[a+"."+c]=s[c]}),s},Fg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ju=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/eh*(Math.asin(1/i)||0),a=function(d){return d===1?1:i*Math.pow(2,-10*d)*dE((d-o)*s)+1},c=t==="out"?a:t==="in"?function(f){return 1-a(1-f)}:Fg(a);return s=eh/s,c.config=function(f,d){return r(t,f,d)},c},Zu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Fg(n);return i.config=function(s){return r(t,s)},i};vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ro(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;ro("Elastic",Ju("in"),Ju("out"),Ju());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ro("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ro("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ro("Circ",function(r){return-(og(1-r*r)-1)});ro("Sine",function(r){return r===1?1:-hE(r*uE)+1});ro("Back",Zu("in"),Zu("out"),Zu());qe.SteppedEase=qe.steps=Li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-on;return function(a){return((i*ol(0,o,a)|0)+s)*n}}};$o.ease=qe["quad.out"];vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return jh+=r+","+r+"Params,"});var Bg=function(t,e){this.id=fE++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mg,this.set=e?e.getSetter:td},Ja=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ko(this,+e.duration,1,1),this.data=e.data,fn&&(this._ctx=fn,fn.data.push(this)),Ka||Ai.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Jo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yc(this,n),!s._dp||s.parent||yg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===on||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),gg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?jo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-on?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-on?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this._tDur,s),i!==!1),qc(this),yE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==on&&(this._tTime-=on)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mr(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(_i(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=gE);var i=$n;return $n=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$n=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Fi(this,n),_i(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,_i(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-on:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-on,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-on)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=_n(n)?n:vg,a=function(){var f=i.then;i.then=null,_n(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=f),s(o),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ba(this)},r}();Yi(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-on,_prom:0,_ps:!1,_rts:1});var oi=function(r){sg(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=_i(n.sortChildren),pn&&mr(n.parent||pn,Pr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sg(Pr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ua(0,arguments,this),this},e.from=function(i,s,o){return Ua(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ua(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wn(i,s,Fi(this,o),1),this},e.call=function(i,s,o){return mr(this,wn.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,c,f,d){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=f,o.onCompleteParams=d,o.parent=this,new wn(i,o,Fi(this,c)),this},e.staggerFrom=function(i,s,o,a,c,f,d){return o.runBackwards=1,Na(o).immediateRender=_i(o.immediateRender),this.staggerTo(i,s,o,a,c,f,d)},e.staggerFromTo=function(i,s,o,a,c,f,d,m){return a.startAt=o,Na(a).immediateRender=_i(a.immediateRender),this.staggerTo(i,s,a,c,f,d,m)},e.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,f=this._dur,d=i<=0?0:Fn(i),m=this._zTime<0!=i<0&&(this._initted||!f),g,p,M,S,x,v,P,w,C,O,I,h;if(this!==pn&&d>c&&i>=0&&(d=c),d!==this._tTime||o||m){if(a!==this._time&&f&&(d+=this._time-a,i+=this._time-a),g=d,C=this._start,w=this._ts,v=!w,m&&(f||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,x=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,s,o);if(g=Fn(d%x),d===c?(S=this._repeat,g=f):(S=~~(d/x),S&&S===d/x&&(g=f,S--),g>f&&(g=f)),O=jo(this._tTime,x),!a&&this._tTime&&O!==S&&this._tTime-O*x-this._dur<=0&&(O=S),I&&S&1&&(g=f-g,h=1),S!==O&&!this._lock){var B=I&&O&1,V=B===(I&&S&1);if(S<O&&(B=!B),a=B?0:d%f?f:d,this._lock=1,this.render(a||(h?0:Fn(S*x)),s,!f)._lock=0,this._tTime=d,!s&&this.parent&&Pi(this,"onRepeat"),this.vars.repeatRefresh&&!h&&(this.invalidate()._lock=1),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,c=this._tDur,V&&(this._lock=2,a=B?f:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!h&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;Og(this,h)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=EE(this,Fn(a),Fn(g)),P&&(d-=g-(g=P._start))),this._tTime=d,this._time=g,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&g&&!s&&!S&&(Pi(this,"onStart"),this._tTime!==d))return this;if(g>=a&&i>=0)for(p=this._first;p;){if(M=p._next,(p._act||g>=p._start)&&p._ts&&P!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(g-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(g-p._start)*p._ts,s,o),g!==this._time||!this._ts&&!v){P=0,M&&(d+=this._zTime=-on);break}}p=M}else{p=this._last;for(var b=i<0?i:g;p;){if(M=p._prev,(p._act||b<=p._end)&&p._ts&&P!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,o||$n&&(p._initted||p._startAt)),g!==this._time||!this._ts&&!v){P=0,M&&(d+=this._zTime=b?-on:on);break}}p=M}}if(P&&!s&&(this.pause(),P.render(g>=a?0:-on)._zTime=g>=a?1:-1,this._ts))return this._start=C,qc(this),this.render(i,s,o);this._onUpdate&&!s&&Pi(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&a)&&(C===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(d===c&&this._ts>0||!d&&this._ts<0)&&gs(this,1),!s&&!(i<0&&!a)&&(d||a||!c)&&(Pi(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Gr(s)||(s=Fi(this,s,i)),!(i instanceof Ja)){if(jn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Bn(i))return this.addLabel(i,s);if(_n(i))i=wn.delayedCall(0,i);else return this}return this!==i?mr(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var c=[],f=this._first;f;)f._start>=a&&(f instanceof wn?s&&c.push(f):(o&&c.push(f),i&&c.push.apply(c,f.getChildren(!0,s,o)))),f=f._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Bn(i)?this.removeLabel(i):_n(i)?this.killTweensOf(i):(Xc(this,i),i===this._recent&&(this._recent=this._last),Xs(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fn(Ai.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Fi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=wn.delayedCall(0,s||$a,o);return a.data="isPause",this._hasPause=1,mr(this,a,Fi(this,i))},e.removePause=function(i){var s=this._first;for(i=Fi(this,i);s;)s._start===i&&s.data==="isPause"&&gs(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)ss!==a[c]&&a[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Gi(i),c=this._first,f=Gr(s),d;c;)c instanceof wn?_E(c._targets,a)&&(f?(!ss||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(d=c.getTweensOf(a,s)).length&&o.push.apply(o,d),c=c._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Fi(o,i),c=s,f=c.startAt,d=c.onStart,m=c.onStartParams,g=c.immediateRender,p,M=wn.to(o,Yi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(f&&"time"in f?f.time:o._time))/o.timeScale())||on,onStart:function(){if(o.pause(),!p){var x=s.duration||Math.abs((a-(f&&"time"in f?f.time:o._time))/o.timeScale());M._dur!==x&&Ko(M,x,0,1).render(M._time,!0,!0),p=1}d&&d.apply(M,m||[])}},s));return g?M.render(0):M},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yi({startAt:{time:Fi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rp(this,Fi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rp(this,Fi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+on)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,f;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(f in c)c[f]>=o&&(c[f]+=i);return Xs(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xs(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,c=Vi,f,d,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(m=o.parent;a;)f=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,d-a._delay,1)._lock=0):c=d,d<0&&a._ts&&(s-=d,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=f;Ko(o,o===pn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(pn._ts&&(gg(pn,wc(i,pn)),pg=Ai.frame),Ai.frame>=bp){bp+=Di.autoSleep||120;var s=pn._first;if((!s||!s._ts)&&Di.autoSleep&&Ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ai.sleep()}}},t}(Ja);Yi(oi.prototype,{_lock:0,_hasPause:0,_forcing:0});var kE=function(t,e,n,i,s,o,a){var c=new xi(this._pt,t,e,0,1,Wg,null,s),f=0,d=0,m,g,p,M,S,x,v,P;for(c.b=n,c.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=ja(i)),o&&(P=[n,i],o(P,t,e),n=P[0],i=P[1]),g=n.match($u)||[];m=$u.exec(i);)M=m[0],S=i.substring(f,m.index),p?p=(p+1)%5:S.substr(-5)==="rgba("&&(p=1),M!==g[d++]&&(x=parseFloat(g[d-1])||0,c._pt={_next:c._pt,p:S||d===1?S:",",s:x,c:M.charAt(1)==="="?No(x,M)-x:parseFloat(M)-x,m:p&&p<4?Math.round:0},f=$u.lastIndex);return c.c=f<i.length?i.substring(f,i.length):"",c.fp=a,(cg.test(i)||v)&&(c.e=0),this._pt=c,c},Jh=function(t,e,n,i,s,o,a,c,f,d){_n(i)&&(i=i(s||0,t,o));var m=t[e],g=n!=="get"?n:_n(m)?f?t[e.indexOf("set")||!_n(t["get"+e.substr(3)])?e:"get"+e.substr(3)](f):t[e]():m,p=_n(m)?f?XE:Vg:Qh,M;if(Bn(i)&&(~i.indexOf("random(")&&(i=ja(i)),i.charAt(1)==="="&&(M=No(g,i)+(Yn(g)||0),(M||M===0)&&(i=M))),!d||g!==i||uh)return!isNaN(g*i)&&i!==""?(M=new xi(this._pt,t,e,+g||0,i-(g||0),typeof m=="boolean"?YE:Gg,0,p),f&&(M.fp=f),a&&M.modifier(a,this,t),this._pt=M):(!m&&!(e in t)&&Yh(e,i),kE.call(this,t,e,g,i,p,c||Di.stringFilter,f))},HE=function(t,e,n,i,s){if(_n(t)&&(t=Oa(t,s,e,n,i)),!Sr(t)||t.style&&t.nodeType||jn(t)||ag(t))return Bn(t)?Oa(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Oa(t[a],s,e,n,i);return o},zg=function(t,e,n,i,s,o){var a,c,f,d;if(wi[t]&&(a=new wi[t]).init(s,a.rawVars?e[t]:HE(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new xi(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ro))for(f=n._ptLookup[n._targets.indexOf(s)],d=a._props.length;d--;)f[a._props[d]]=c;return a},ss,uh,Zh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,f=i.onUpdate,d=i.runBackwards,m=i.yoyoEase,g=i.keyframes,p=i.autoRevert,M=t._dur,S=t._startAt,x=t._targets,v=t.parent,P=v&&v.data==="nested"?v.vars.targets:x,w=t._overwrite==="auto"&&!Gh,C=t.timeline,O,I,h,B,V,b,D,W,q,lt,dt,it,ot;if(C&&(!g||!s)&&(s="none"),t._ease=qs(s,$o.ease),t._yEase=m?Ug(qs(m===!0?s:m,$o.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(W=x[0]?Ws(x[0]).harness:0,it=W&&i[W.prop],O=bc(i,$h),S&&(S._zTime<0&&S.progress(1),e<0&&d&&a&&!p?S.render(-1,!0):S.revert(d&&M?nc:mE),S._lazy=0),o){if(gs(t._startAt=wn.set(x,Yi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!S&&_i(c),startAt:null,delay:0,onUpdate:f&&function(){return Pi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&($n||!a&&!p)&&t._startAt.revert(nc),a&&M&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(d&&M&&!S){if(e&&(a=!1),h=Yi({overwrite:!1,data:"isFromStart",lazy:a&&!S&&_i(c),immediateRender:a,stagger:0,parent:v},O),it&&(h[W.prop]=it),gs(t._startAt=wn.set(x,h)),t._startAt._dp=0,t._startAt._sat=t,e<0&&($n?t._startAt.revert(nc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,on,on);else if(!e)return}for(t._pt=t._ptCache=0,c=M&&_i(c)||c&&!M,I=0;I<x.length;I++){if(V=x[I],D=V._gsap||Kh(x)[I]._gsap,t._ptLookup[I]=lt={},rh[D.id]&&hs.length&&Ec(),dt=P===x?I:P.indexOf(V),W&&(q=new W).init(V,it||O,t,dt,P)!==!1&&(t._pt=B=new xi(t._pt,V,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(rt){lt[rt]=B}),q.priority&&(b=1)),!W||it)for(h in O)wi[h]&&(q=zg(h,O,t,dt,V,P))?q.priority&&(b=1):lt[h]=B=Jh.call(t,V,h,"get",O[h],dt,P,0,i.stringFilter);t._op&&t._op[I]&&t.kill(V,t._op[I]),w&&t._pt&&(ss=t,pn.killTweensOf(V,lt,t.globalTime(e)),ot=!t.parent,ss=0),t._pt&&c&&(rh[D.id]=1)}b&&Xg(t),t._onInit&&t._onInit(t)}t._onUpdate=f,t._initted=(!t._op||t._pt)&&!ot,g&&e<=0&&C.render(Vi,!0,!0)},VE=function(t,e,n,i,s,o,a,c){var f=(t._pt&&t._ptCache||(t._ptCache={}))[e],d,m,g,p;if(!f)for(f=t._ptCache[e]=[],g=t._ptLookup,p=t._targets.length;p--;){if(d=g[p][e],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==e&&d.fp!==e;)d=d._next;if(!d)return uh=1,t.vars[e]="+=0",Zh(t,a),uh=0,c?Ya(e+" not eligible for reset"):1;f.push(d)}for(p=f.length;p--;)m=f[p],d=m._pt||m,d.s=(i||i===0)&&!s?i:d.s+(i||0)+o*d.c,d.c=n-d.s,m.e&&(m.e=yn(n)+Yn(m.e)),m.b&&(m.b=d.s+Yn(m.b))},GE=function(t,e){var n=t[0]?Ws(t[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return e;s=Zs({},e);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},WE=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(jn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,f){return a.push({t:f/(e.length-1)*100,v:c,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Oa=function(t,e,n,i,s){return _n(t)?t.call(e,n,i,s):Bn(t)&&~t.indexOf("random(")?ja(t):t},kg=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hg={};vi(kg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hg[r]=1});var wn=function(r){sg(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Na(i))||this;var c=a.vars,f=c.duration,d=c.delay,m=c.immediateRender,g=c.stagger,p=c.overwrite,M=c.keyframes,S=c.defaults,x=c.scrollTrigger,v=c.yoyoEase,P=i.parent||pn,w=(jn(n)||ag(n)?Gr(n[0]):"length"in i)?[n]:Gi(n),C,O,I,h,B,V,b,D;if(a._targets=w.length?Kh(w):Ya("GSAP target "+n+" not found. https://gsap.com",!Di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,M||g||Ol(f)||Ol(d)){if(i=a.vars,C=a.timeline=new oi({data:"nested",defaults:S||{},targets:P&&P.data==="nested"?P.vars.targets:w}),C.kill(),C.parent=C._dp=Pr(a),C._start=0,g||Ol(f)||Ol(d)){if(h=w.length,b=g&&bg(g),Sr(g))for(B in g)~kg.indexOf(B)&&(D||(D={}),D[B]=g[B]);for(O=0;O<h;O++)I=bc(i,Hg),I.stagger=0,v&&(I.yoyoEase=v),D&&Zs(I,D),V=w[O],I.duration=+Oa(f,Pr(a),O,V,w),I.delay=(+Oa(d,Pr(a),O,V,w)||0)-a._delay,!g&&h===1&&I.delay&&(a._delay=d=I.delay,a._start+=d,I.delay=0),C.to(V,I,b?b(O,V,w):0),C._ease=qe.none;C.duration()?f=d=0:a.timeline=0}else if(M){Na(Yi(C.vars.defaults,{ease:"none"})),C._ease=qs(M.ease||i.ease||"none");var W=0,q,lt,dt;if(jn(M))M.forEach(function(it){return C.to(w,it,">")}),C.duration();else{I={};for(B in M)B==="ease"||B==="easeEach"||WE(B,M[B],I,M.easeEach);for(B in I)for(q=I[B].sort(function(it,ot){return it.t-ot.t}),W=0,O=0;O<q.length;O++)lt=q[O],dt={ease:lt.e,duration:(lt.t-(O?q[O-1].t:0))/100*f},dt[B]=lt.v,C.to(w,dt,W),W+=dt.duration;C.duration()<f&&C.to({},{duration:f-C.duration()})}}f||a.duration(f=C.duration())}else a.timeline=0;return p===!0&&!Gh&&(ss=Pr(a),pn.killTweensOf(w),ss=0),mr(P,Pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(m||!f&&!M&&a._start===Fn(P._time)&&_i(m)&&SE(Pr(a))&&P.data!=="nested")&&(a._tTime=-on,a.render(Math.max(0,-d)||0)),x&&Sg(Pr(a),x),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,c=this._tDur,f=this._dur,d=i<0,m=i>c-on&&!d?c:i<on?0:i,g,p,M,S,x,v,P,w,C;if(!f)TE(this,i,s,o);else if(m!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(g=m,w=this.timeline,this._repeat){if(S=f+this._rDelay,this._repeat<-1&&d)return this.totalTime(S*100+i,s,o);if(g=Fn(m%S),m===c?(M=this._repeat,g=f):(M=~~(m/S),M&&M===Fn(m/S)&&(g=f,M--),g>f&&(g=f)),v=this._yoyo&&M&1,v&&(C=this._yEase,g=f-g),x=jo(this._tTime,S),g===a&&!o&&this._initted&&M===x)return this._tTime=m,this;M!==x&&(w&&this._yEase&&Og(w,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==S&&this._initted&&(this._lock=o=1,this.render(Fn(S*M),!0).invalidate()._lock=0))}if(!this._initted){if(Mg(this,d?i:g,o,s,m))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&M!==x))return this;if(f!==this._dur)return this.render(i,s,o)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=P=(C||this._ease)(g/f),this._from&&(this.ratio=P=1-P),g&&!a&&!s&&!M&&(Pi(this,"onStart"),this._tTime!==m))return this;for(p=this._pt;p;)p.r(P,p.d),p=p._next;w&&w.render(i<0?i:w._dur*w._ease(g/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&sh(this,i,s,o),Pi(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!s&&this.parent&&Pi(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(d&&!this._onUpdate&&sh(this,i,!0,!0),(i||!f)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&gs(this,1),!s&&!(d&&!a)&&(m||a||v)&&(Pi(this,m===c?"onComplete":"onReverseComplete",!0),this._prom&&!(m<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,c){Ka||Ai.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Zh(this,f),d=this._ease(f/this._dur),VE(this,i,s,o,a,d,f,c)?this.resetTo(i,s,o,a,1):(Yc(this,0),this.parent||xg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ss&&ss.vars.overwrite!==!0)._first||ba(this),this.parent&&o!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Gi(i):a,f=this._ptLookup,d=this._pt,m,g,p,M,S,x,v;if((!s||s==="all")&&xE(a,c))return s==="all"&&(this._pt=0),ba(this);for(m=this._op=this._op||[],s!=="all"&&(Bn(s)&&(S={},vi(s,function(P){return S[P]=1}),s=S),s=GE(a,s)),v=a.length;v--;)if(~c.indexOf(a[v])){g=f[v],s==="all"?(m[v]=s,M=g,p={}):(p=m[v]=m[v]||{},M=s);for(S in M)x=g&&g[S],x&&((!("kill"in x.d)||x.d.kill(S)===!0)&&Xc(this,x,"_pt"),delete g[S]),p!=="all"&&(p[S]=1)}return this._initted&&!this._pt&&d&&ba(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ua(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ua(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return pn.killTweensOf(i,s,o)},t}(Ja);Yi(wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vi("staggerTo,staggerFrom,staggerFromTo",function(r){wn[r]=function(){var t=new oi,e=ah.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Qh=function(t,e,n){return t[e]=n},Vg=function(t,e,n){return t[e](n)},XE=function(t,e,n,i){return t[e](i.fp,n)},qE=function(t,e,n){return t.setAttribute(e,n)},td=function(t,e){return _n(t[e])?Vg:Wh(t[e])&&t.setAttribute?qE:Qh},Gg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},YE=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wg=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ed=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$E=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},jE=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Xc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},KE=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Xg=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},xi=function(){function r(e,n,i,s,o,a,c,f,d){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Gg,this.d=c||this,this.set=f||Qh,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=KE,this.m=n,this.mt=s,this.tween=i},r}();vi(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return $h[r]=1});Li.TweenMax=Li.TweenLite=wn;Li.TimelineLite=Li.TimelineMax=oi;pn=new oi({sortChildren:!1,defaults:$o,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Di.stringFilter=Ng;var Ys=[],rc={},JE=[],Dp=0,ZE=0,Qu=function(t){return(rc[t]||JE).map(function(e){return e()})},fh=function(){var t=Date.now(),e=[];t-Dp>2&&(Qu("matchMediaInit"),Ys.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,f;for(a in i)o=hr.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,f=1);f&&(n.revert(),c&&e.push(n))}),Qu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Dp=t,Qu("matchMedia"))},qg=function(){function r(e,n){this.selector=n&&lh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZE++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){_n(n)&&(s=i,i=n,n=_n);var o=this,a=function(){var f=fn,d=o.selector,m;return f&&f!==o&&f.data.push(o),s&&(o.selector=lh(s)),fn=o,m=i.apply(o,arguments),_n(m)&&o._r.push(m),fn=f,o.selector=d,o.isReverted=!1,m};return o.last=a,n===_n?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=fn;fn=null,n(this),fn=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof wn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,f;c--;)f=s.data[c],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(d){return a.splice(a.indexOf(d),1)}));for(a.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,m){return m.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)f=s.data[c],f instanceof oi?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof wn)&&f.revert&&f.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ys.length;o--;)Ys[o].id===this.id&&Ys.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),QE=function(){function r(e){this.contexts=[],this.scope=e,fn&&fn.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Sr(n)||(n={matches:n});var o=new qg(0,s||this.scope),a=o.conditions={},c,f,d;fn&&!o.selector&&(o.selector=fn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(f in n)f==="all"?d=1:(c=hr.matchMedia(n[f]),c&&(Ys.indexOf(o)<0&&Ys.push(o),(a[f]=c.matches)&&(d=1),c.addListener?c.addListener(fh):c.addEventListener("change",fh)));return d&&i(o,function(m){return o.add(null,m)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ac={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Dg(i)})},timeline:function(t){return new oi(t)},getTweensOf:function(t,e){return pn.getTweensOf(t,e)},getProperty:function(t,e,n,i){Bn(t)&&(t=Gi(t)[0]);var s=Ws(t||{}).get,o=n?vg:_g;return n==="native"&&(n=""),t&&(e?o((wi[e]&&wi[e].get||s)(t,e,n,i)):function(a,c,f){return o((wi[a]&&wi[a].get||s)(t,a,c,f))})},quickSetter:function(t,e,n){if(t=Gi(t),t.length>1){var i=t.map(function(d){return Si.quickSetter(d,e,n)}),s=i.length;return function(d){for(var m=s;m--;)i[m](d)}}t=t[0]||{};var o=wi[e],a=Ws(t),c=a.harness&&(a.harness.aliases||{})[e]||e,f=o?function(d){var m=new o;Ro._pt=0,m.init(t,n?d+n:d,Ro,0,[t]),m.render(1,m),Ro._pt&&ed(1,Ro)}:a.set(t,c);return o?f:function(d){return f(t,c,n?d+n:d,a,1)}},quickTo:function(t,e,n){var i,s=Si.to(t,Zs((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,f,d){return s.resetTo(e,c,f,d)};return o.tween=s,o},isTweening:function(t){return pn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qs(t.ease,$o.ease)),wp($o,t||{})},config:function(t){return wp(Di,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!wi[a]&&!Li[a]&&Ya(e+" effect requires "+a+" plugin.")}),ju[e]=function(a,c,f){return n(Gi(a),Yi(c||{},s),f)},o&&(oi.prototype[e]=function(a,c,f){return this.add(ju[e](a,Sr(c)?c:(f=c)&&{},this),f)})},registerEase:function(t,e){qe[t]=qs(e)},parseEase:function(t,e){return arguments.length?qs(t,e):qe},getById:function(t){return pn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new oi(t),i,s;for(n.smoothChildTiming=_i(t.smoothChildTiming),pn.remove(n),n._dp=0,n._time=n._tTime=pn._time,i=pn._first;i;)s=i._next,(e||!(!i._dur&&i instanceof wn&&i.vars.onComplete===i._targets[0]))&&mr(n,i,i._start-i._delay),i=s;return mr(pn,n,0),n},context:function(t,e){return t?new qg(t,e):fn},matchMedia:function(t){return new QE(t)},matchMediaRefresh:function(){return Ys.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||fh()},addEventListener:function(t,e){var n=rc[t]||(rc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=rc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:DE,wrapYoyo:LE,distribute:bg,random:Ag,snap:wg,normalize:PE,getUnit:Yn,clamp:wE,splitColor:Lg,toArray:Gi,selector:lh,mapRange:Rg,pipe:CE,unitize:RE,interpolate:IE,shuffle:Eg},install:hg,effects:ju,ticker:Ai,updateRoot:oi.updateRoot,plugins:wi,globalTimeline:pn,core:{PropTween:xi,globals:dg,Tween:wn,Timeline:oi,Animation:Ja,getCache:Ws,_removeLinkedListItem:Xc,reverting:function(){return $n},context:function(t){return t&&fn&&(fn.data.push(t),t._ctx=fn),fn},suppressOverwrites:function(t){return Gh=t}}};vi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ac[r]=wn[r]});Ai.add(oi.updateRoot);Ro=Ac.to({},{duration:0});var tb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},eb=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},tf=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,f;if(Bn(s)&&(c={},vi(s,function(d){return c[d]=1}),s=c),e){c={};for(f in s)c[f]=e(s[f]);s=c}eb(a,s)}}}},Si=Ac.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)$n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},tf("roundProps",ch),tf("modifiers"),tf("snap",wg))||Ac;wn.version=oi.version=Si.version="3.12.5";fg=1;Xh()&&Jo();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lp,os,Uo,nd,Vs,Ip,id,nb=function(){return typeof window<"u"},Wr={},Us=180/Math.PI,Oo=Math.PI/180,Mo=Math.atan2,Np=1e8,rd=/([A-Z])/g,ib=/(left|right|width|margin|padding|x)/i,rb=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ob=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ab=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Yg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},$g=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},lb=function(t,e,n){return t.style[e]=n},cb=function(t,e,n){return t.style.setProperty(e,n)},ub=function(t,e,n){return t._gsap[e]=n},fb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},hb=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},db=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},mn="transform",yi=mn+"Origin",pb=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Wr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=gr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Dr(i,a)}):this.tfm[t]=o.x?o[t]:Dr(i,t),t===yi&&(this.tfm.zOrigin=o.zOrigin);else return gr.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(mn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yi,e,"")),t=mn}(s||e)&&this.props.push(t,e,s[t])},jg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(rd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=id(),(!s||!s.isStart)&&!n[mn]&&(jg(n),i.zOrigin&&n[yi]&&(n[yi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kg=function(t,e){var n={target:t,props:[],revert:mb,save:pb};return t._gsap||Si.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Jg,dh=function(t,e){var n=os.createElementNS?os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):os.createElement(t);return n&&n.style?n:os.createElement(t)},vr=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(rd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Zo(e)||e,1)||""},Up="O,Moz,ms,Ms,Webkit".split(","),Zo=function(t,e,n){var i=e||Vs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Up[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Up[o]:"")+t},ph=function(){nb()&&window.document&&(Lp=window,os=Lp.document,Uo=os.documentElement,Vs=dh("div")||{style:{}},dh("div"),mn=Zo(mn),yi=mn+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jg=!!Zo("perspective"),id=Si.core.reverting,nd=1)},ef=function r(t){var e=dh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Uo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Uo.removeChild(e),this.style.cssText=s,o},Op=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Zg=function(t){var e;try{e=t.getBBox()}catch{e=ef.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ef||(e=ef.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Op(t,["x","cx","x1"])||0,y:+Op(t,["y","cy","y1"])||0,width:0,height:0}:e},Qg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zg(t))},Qs=function(t,e){if(e){var n=t.style,i;e in Wr&&e!==yi&&(e=mn),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(rd,"-$1").toLowerCase())):n.removeAttribute(e)}},as=function(t,e,n,i,s,o){var a=new xi(t._pt,e,n,0,1,o?$g:Yg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Fp={deg:1,rad:1,turn:1},gb={grid:1,flex:1},_s=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vs.style,c=ib.test(e),f=t.tagName.toLowerCase()==="svg",d=(f?"client":"offset")+(c?"Width":"Height"),m=100,g=i==="px",p=i==="%",M,S,x,v;if(i===o||!s||Fp[i]||Fp[o])return s;if(o!=="px"&&!g&&(s=r(t,e,n,"px")),v=t.getCTM&&Qg(t),(p||o==="%")&&(Wr[e]||~e.indexOf("adius")))return M=v?t.getBBox()[c?"width":"height"]:t[d],yn(p?s/M*m:s/100*M);if(a[c?"width":"height"]=m+(g?o:i),S=~e.indexOf("adius")||i==="em"&&t.appendChild&&!f?t:t.parentNode,v&&(S=(t.ownerSVGElement||{}).parentNode),(!S||S===os||!S.appendChild)&&(S=os.body),x=S._gsap,x&&p&&x.width&&c&&x.time===Ai.time&&!x.uncache)return yn(s/x.width*m);if(p&&(e==="height"||e==="width")){var P=t.style[e];t.style[e]=m+i,M=t[d],P?t.style[e]=P:Qs(t,e)}else(p||o==="%")&&!gb[vr(S,"display")]&&(a.position=vr(t,"position")),S===t&&(a.position="static"),S.appendChild(Vs),M=Vs[d],S.removeChild(Vs),a.position="absolute";return c&&p&&(x=Ws(S),x.time=Ai.time,x.width=S[d]),yn(g?M*s/m:M&&s?m/M*s:0)},Dr=function(t,e,n,i){var s;return nd||ph(),e in gr&&e!=="transform"&&(e=gr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wr[e]&&e!=="transform"?(s=Qa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Rc(vr(t,yi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Cc[e]&&Cc[e](t,e,n)||vr(t,e)||mg(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_s(t,e,s,n)+n:s},_b=function(t,e,n,i){if(!n||n==="none"){var s=Zo(e,t,1),o=s&&vr(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=vr(t,"borderTopColor"))}var a=new xi(this._pt,t.style,e,0,1,Wg),c=0,f=0,d,m,g,p,M,S,x,v,P,w,C,O;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(S=t.style[e],t.style[e]=i,i=vr(t,e)||i,S?t.style[e]=S:Qs(t,e)),d=[n,i],Ng(d),n=d[0],i=d[1],g=n.match(Co)||[],O=i.match(Co)||[],O.length){for(;m=Co.exec(i);)x=m[0],P=i.substring(c,m.index),M?M=(M+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(M=1),x!==(S=g[f++]||"")&&(p=parseFloat(S)||0,C=S.substr((p+"").length),x.charAt(1)==="="&&(x=No(p,x)+C),v=parseFloat(x),w=x.substr((v+"").length),c=Co.lastIndex-w.length,w||(w=w||Di.units[e]||C,c===i.length&&(i+=w,a.e+=w)),C!==w&&(p=_s(t,e,S,w)||0),a._pt={_next:a._pt,p:P||f===1?P:",",s:p,c:v-p,m:M&&M<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?$g:Yg;return cg.test(i)&&(a.e=0),this._pt=a,a},Bp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bp[n]||n,e[1]=Bp[i]||i,e.join(" ")},xb=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,c,f;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),f=s.length;--f>-1;)a=s[f],Wr[a]&&(c=1,a=a==="transformOrigin"?yi:mn),Qs(n,a);c&&(Qs(n,mn),o&&(o.svg&&n.removeAttribute("transform"),Qa(n,1),o.uncache=1,jg(i)))}},Cc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new xi(t._pt,e,n,0,0,xb);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Za=[1,0,0,1,0,0],t_={},e_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zp=function(t){var e=vr(t,mn);return e_(e)?Za:e.substr(7).match(lg).map(yn)},sd=function(t,e){var n=t._gsap||Ws(t),i=t.style,s=zp(t),o,a,c,f;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Za:s):(s===Za&&!t.offsetParent&&t!==Uo&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(f=1,a=t.nextElementSibling,Uo.appendChild(t)),s=zp(t),c?i.display=c:Qs(t,"display"),f&&(a?o.insertBefore(t,a):o?o.appendChild(t):Uo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mh=function(t,e,n,i,s,o){var a=t._gsap,c=s||sd(t,!0),f=a.xOrigin||0,d=a.yOrigin||0,m=a.xOffset||0,g=a.yOffset||0,p=c[0],M=c[1],S=c[2],x=c[3],v=c[4],P=c[5],w=e.split(" "),C=parseFloat(w[0])||0,O=parseFloat(w[1])||0,I,h,B,V;n?c!==Za&&(h=p*x-M*S)&&(B=C*(x/h)+O*(-S/h)+(S*P-x*v)/h,V=C*(-M/h)+O*(p/h)-(p*P-M*v)/h,C=B,O=V):(I=Zg(t),C=I.x+(~w[0].indexOf("%")?C/100*I.width:C),O=I.y+(~(w[1]||w[0]).indexOf("%")?O/100*I.height:O)),i||i!==!1&&a.smooth?(v=C-f,P=O-d,a.xOffset=m+(v*p+P*S)-v,a.yOffset=g+(v*M+P*x)-P):a.xOffset=a.yOffset=0,a.xOrigin=C,a.yOrigin=O,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[yi]="0px 0px",o&&(as(o,a,"xOrigin",f,C),as(o,a,"yOrigin",d,O),as(o,a,"xOffset",m,a.xOffset),as(o,a,"yOffset",g,a.yOffset)),t.setAttribute("data-svg-origin",C+" "+O)},Qa=function(t,e){var n=t._gsap||new Bg(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),f=vr(t,yi)||"0",d,m,g,p,M,S,x,v,P,w,C,O,I,h,B,V,b,D,W,q,lt,dt,it,ot,rt,Mt,z,wt,de,Se,ut,xt;return d=m=g=S=x=v=P=w=C=0,p=M=1,n.svg=!!(t.getCTM&&Qg(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[mn]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[mn]!=="none"?c[mn]:"")),i.scale=i.rotate=i.translate="none"),h=sd(t,n.svg),n.svg&&(n.uncache?(rt=t.getBBox(),f=n.xOrigin-rt.x+"px "+(n.yOrigin-rt.y)+"px",ot=""):ot=!e&&t.getAttribute("data-svg-origin"),mh(t,ot||f,!!ot||n.originIsAbsolute,n.smooth!==!1,h)),O=n.xOrigin||0,I=n.yOrigin||0,h!==Za&&(D=h[0],W=h[1],q=h[2],lt=h[3],d=dt=h[4],m=it=h[5],h.length===6?(p=Math.sqrt(D*D+W*W),M=Math.sqrt(lt*lt+q*q),S=D||W?Mo(W,D)*Us:0,P=q||lt?Mo(q,lt)*Us+S:0,P&&(M*=Math.abs(Math.cos(P*Oo))),n.svg&&(d-=O-(O*D+I*q),m-=I-(O*W+I*lt))):(xt=h[6],Se=h[7],z=h[8],wt=h[9],de=h[10],ut=h[11],d=h[12],m=h[13],g=h[14],B=Mo(xt,de),x=B*Us,B&&(V=Math.cos(-B),b=Math.sin(-B),ot=dt*V+z*b,rt=it*V+wt*b,Mt=xt*V+de*b,z=dt*-b+z*V,wt=it*-b+wt*V,de=xt*-b+de*V,ut=Se*-b+ut*V,dt=ot,it=rt,xt=Mt),B=Mo(-q,de),v=B*Us,B&&(V=Math.cos(-B),b=Math.sin(-B),ot=D*V-z*b,rt=W*V-wt*b,Mt=q*V-de*b,ut=lt*b+ut*V,D=ot,W=rt,q=Mt),B=Mo(W,D),S=B*Us,B&&(V=Math.cos(B),b=Math.sin(B),ot=D*V+W*b,rt=dt*V+it*b,W=W*V-D*b,it=it*V-dt*b,D=ot,dt=rt),x&&Math.abs(x)+Math.abs(S)>359.9&&(x=S=0,v=180-v),p=yn(Math.sqrt(D*D+W*W+q*q)),M=yn(Math.sqrt(it*it+xt*xt)),B=Mo(dt,it),P=Math.abs(B)>2e-4?B*Us:0,C=ut?1/(ut<0?-ut:ut):0),n.svg&&(ot=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!e_(vr(t,mn)),ot&&t.setAttribute("transform",ot))),Math.abs(P)>90&&Math.abs(P)<270&&(s?(p*=-1,P+=S<=0?180:-180,S+=S<=0?180:-180):(M*=-1,P+=P<=0?180:-180)),e=e||n.uncache,n.x=d-((n.xPercent=d&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=m-((n.yPercent=m&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-m)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=g+o,n.scaleX=yn(p),n.scaleY=yn(M),n.rotation=yn(S)+a,n.rotationX=yn(x)+a,n.rotationY=yn(v)+a,n.skewX=P+a,n.skewY=w+a,n.transformPerspective=C+o,(n.zOrigin=parseFloat(f.split(" ")[2])||!e&&n.zOrigin||0)&&(i[yi]=Rc(f)),n.xOffset=n.yOffset=0,n.force3D=Di.force3D,n.renderTransform=n.svg?Sb:Jg?n_:yb,n.uncache=0,n},Rc=function(t){return(t=t.split(" "))[0]+" "+t[1]},nf=function(t,e,n){var i=Yn(e);return yn(parseFloat(e)+parseFloat(_s(t,"x",n+"px",i)))+i},yb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,n_(t,e)},Ds="0deg",xa="0px",Ls=") ",n_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,f=n.rotation,d=n.rotationY,m=n.rotationX,g=n.skewX,p=n.skewY,M=n.scaleX,S=n.scaleY,x=n.transformPerspective,v=n.force3D,P=n.target,w=n.zOrigin,C="",O=v==="auto"&&t&&t!==1||v===!0;if(w&&(m!==Ds||d!==Ds)){var I=parseFloat(d)*Oo,h=Math.sin(I),B=Math.cos(I),V;I=parseFloat(m)*Oo,V=Math.cos(I),o=nf(P,o,h*V*-w),a=nf(P,a,-Math.sin(I)*-w),c=nf(P,c,B*V*-w+w)}x!==xa&&(C+="perspective("+x+Ls),(i||s)&&(C+="translate("+i+"%, "+s+"%) "),(O||o!==xa||a!==xa||c!==xa)&&(C+=c!==xa||O?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ls),f!==Ds&&(C+="rotate("+f+Ls),d!==Ds&&(C+="rotateY("+d+Ls),m!==Ds&&(C+="rotateX("+m+Ls),(g!==Ds||p!==Ds)&&(C+="skew("+g+", "+p+Ls),(M!==1||S!==1)&&(C+="scale("+M+", "+S+Ls),P.style[mn]=C||"translate(0, 0)"},Sb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,f=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,p=n.target,M=n.xOrigin,S=n.yOrigin,x=n.xOffset,v=n.yOffset,P=n.forceCSS,w=parseFloat(o),C=parseFloat(a),O,I,h,B,V;c=parseFloat(c),f=parseFloat(f),d=parseFloat(d),d&&(d=parseFloat(d),f+=d,c+=d),c||f?(c*=Oo,f*=Oo,O=Math.cos(c)*m,I=Math.sin(c)*m,h=Math.sin(c-f)*-g,B=Math.cos(c-f)*g,f&&(d*=Oo,V=Math.tan(f-d),V=Math.sqrt(1+V*V),h*=V,B*=V,d&&(V=Math.tan(d),V=Math.sqrt(1+V*V),O*=V,I*=V)),O=yn(O),I=yn(I),h=yn(h),B=yn(B)):(O=m,B=g,I=h=0),(w&&!~(o+"").indexOf("px")||C&&!~(a+"").indexOf("px"))&&(w=_s(p,"x",o,"px"),C=_s(p,"y",a,"px")),(M||S||x||v)&&(w=yn(w+M-(M*O+S*h)+x),C=yn(C+S-(M*I+S*B)+v)),(i||s)&&(V=p.getBBox(),w=yn(w+i/100*V.width),C=yn(C+s/100*V.height)),V="matrix("+O+","+I+","+h+","+B+","+w+","+C+")",p.setAttribute("transform",V),P&&(p.style[mn]=V)},Mb=function(t,e,n,i,s){var o=360,a=Bn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Us:1),f=c-i,d=i+f+"deg",m,g;return a&&(m=s.split("_")[1],m==="short"&&(f%=o,f!==f%(o/2)&&(f+=f<0?o:-o)),m==="cw"&&f<0?f=(f+o*Np)%o-~~(f/o)*o:m==="ccw"&&f>0&&(f=(f-o*Np)%o-~~(f/o)*o)),t._pt=g=new xi(t._pt,e,n,i,f,sb),g.e=d,g.u="deg",t._props.push(n),g},kp=function(t,e){for(var n in e)t[n]=e[n];return t},Tb=function(t,e,n){var i=kp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,f,d,m,g,p,M;i.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),o[mn]=e,a=Qa(n,1),Qs(n,mn),n.setAttribute("transform",f)):(f=getComputedStyle(n)[mn],o[mn]=e,a=Qa(n,1),o[mn]=f);for(c in Wr)f=i[c],d=a[c],f!==d&&s.indexOf(c)<0&&(p=Yn(f),M=Yn(d),m=p!==M?_s(n,c,f,M):parseFloat(f),g=parseFloat(d),t._pt=new xi(t._pt,a,c,m,g-m,hh),t._pt.u=M||0,t._props.push(c));kp(a,i)};vi("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Cc[t>1?"border"+r:r]=function(a,c,f,d,m){var g,p;if(arguments.length<4)return g=o.map(function(M){return Dr(a,M,f)}),p=g.join(" "),p.split(g[0]).length===5?g[0]:p;g=(d+"").split(" "),p={},o.forEach(function(M,S){return p[M]=g[S]=g[S]||g[(S-1)/2|0]}),a.init(c,p,m)}});var i_={name:"css",register:ph,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,c=n.vars.startAt,f,d,m,g,p,M,S,x,v,P,w,C,O,I,h,B;nd||ph(),this.styles=this.styles||Kg(t),B=this.styles.props,this.tween=n;for(S in e)if(S!=="autoRound"&&(d=e[S],!(wi[S]&&zg(S,e,n,i,t,s)))){if(p=typeof d,M=Cc[S],p==="function"&&(d=d.call(n,i,t,s),p=typeof d),p==="string"&&~d.indexOf("random(")&&(d=ja(d)),M)M(this,t,S,d,n)&&(h=1);else if(S.substr(0,2)==="--")f=(getComputedStyle(t).getPropertyValue(S)+"").trim(),d+="",ds.lastIndex=0,ds.test(f)||(x=Yn(f),v=Yn(d)),v?x!==v&&(f=_s(t,S,f,v)+v):x&&(d+=x),this.add(a,"setProperty",f,d,i,s,0,0,S),o.push(S),B.push(S,0,a[S]);else if(p!=="undefined"){if(c&&S in c?(f=typeof c[S]=="function"?c[S].call(n,i,t,s):c[S],Bn(f)&&~f.indexOf("random(")&&(f=ja(f)),Yn(f+"")||f==="auto"||(f+=Di.units[S]||Yn(Dr(t,S))||""),(f+"").charAt(1)==="="&&(f=Dr(t,S))):f=Dr(t,S),g=parseFloat(f),P=p==="string"&&d.charAt(1)==="="&&d.substr(0,2),P&&(d=d.substr(2)),m=parseFloat(d),S in gr&&(S==="autoAlpha"&&(g===1&&Dr(t,"visibility")==="hidden"&&m&&(g=0),B.push("visibility",0,a.visibility),as(this,a,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),S!=="scale"&&S!=="transform"&&(S=gr[S],~S.indexOf(",")&&(S=S.split(",")[0]))),w=S in Wr,w){if(this.styles.save(S),C||(O=t._gsap,O.renderTransform&&!e.parseTransform||Qa(t,e.parseTransform),I=e.smoothOrigin!==!1&&O.smooth,C=this._pt=new xi(this._pt,a,mn,0,1,O.renderTransform,O,0,-1),C.dep=1),S==="scale")this._pt=new xi(this._pt,O,"scaleY",O.scaleY,(P?No(O.scaleY,P+m):m)-O.scaleY||0,hh),this._pt.u=0,o.push("scaleY",S),S+="X";else if(S==="transformOrigin"){B.push(yi,0,a[yi]),d=vb(d),O.svg?mh(t,d,0,I,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==O.zOrigin&&as(this,O,"zOrigin",O.zOrigin,v),as(this,a,S,Rc(f),Rc(d)));continue}else if(S==="svgOrigin"){mh(t,d,1,I,0,this);continue}else if(S in t_){Mb(this,O,S,g,P?No(g,P+d):d);continue}else if(S==="smoothOrigin"){as(this,O,"smooth",O.smooth,d);continue}else if(S==="force3D"){O[S]=d;continue}else if(S==="transform"){Tb(this,d,t);continue}}else S in a||(S=Zo(S)||S);if(w||(m||m===0)&&(g||g===0)&&!rb.test(d)&&S in a)x=(f+"").substr((g+"").length),m||(m=0),v=Yn(d)||(S in Di.units?Di.units[S]:x),x!==v&&(g=_s(t,S,f,v)),this._pt=new xi(this._pt,w?O:a,S,g,(P?No(g,P+m):m)-g,!w&&(v==="px"||S==="zIndex")&&e.autoRound!==!1?ab:hh),this._pt.u=v||0,x!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=ob);else if(S in a)_b.call(this,t,S,f,P?P+d:d);else if(S in t)this.add(t,S,f||t[S],P?P+d:d,i,s);else if(S!=="parseTransform"){Yh(S,d);continue}w||(S in a?B.push(S,0,a[S]):B.push(S,1,f||t[S])),o.push(S)}}h&&Xg(this)},render:function(t,e){if(e.tween._time||!id())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Dr,aliases:gr,getSetter:function(t,e,n){var i=gr[e];return i&&i.indexOf(",")<0&&(e=i),e in Wr&&e!==yi&&(t._gsap.x||Dr(t,"x"))?n&&Ip===n?e==="scale"?fb:ub:(Ip=n||{})&&(e==="scale"?hb:db):t.style&&!Wh(t.style[e])?lb:~e.indexOf("-")?cb:td(t,e)},core:{_removeProperty:Qs,_getMatrix:sd}};Si.utils.checkPrefix=Zo;Si.core.getStyleSaver=Kg;(function(r,t,e,n){var i=vi(r+","+t+","+e,function(s){Wr[s]=1});vi(t,function(s){Di.units[s]="deg",t_[s]=1}),gr[i[13]]=r+","+t,vi(n,function(s){var o=s.split(":");gr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Di.units[r]="px"});Si.registerPlugin(i_);var Or=Si.registerPlugin(i_)||Si;Or.core.Tween;function Eb(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function bb(r,t,e){return t&&Eb(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn,sc,Ci,ls,cs,Fo,r_,Os,Fa,s_,Fr,tr,o_,a_=function(){return kn||typeof window<"u"&&(kn=window.gsap)&&kn.registerPlugin&&kn},l_=1,Po=[],Ve=[],xr=[],Ba=Date.now,gh=function(t,e){return e},wb=function(){var t=Fa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,Ve),i.push.apply(i,xr),Ve=n,xr=i,gh=function(o,a){return e[o](a)}},ps=function(t,e){return~xr.indexOf(t)&&xr[xr.indexOf(t)+1][e]},za=function(t){return!!~s_.indexOf(t)},ei=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},ti=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Fl="scrollLeft",Bl="scrollTop",_h=function(){return Fr&&Fr.isPressed||Ve.cache++},Pc=function(t,e){var n=function i(s){if(s||s===0){l_&&(Ci.history.scrollRestoration="manual");var o=Fr&&Fr.isPressed;s=i.v=Math.round(s)||(Fr&&Fr.iOS?1:0),t(s),i.cacheID=Ve.cache,o&&gh("ss",s)}else(e||Ve.cache!==i.cacheID||gh("ref"))&&(i.cacheID=Ve.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},ai={s:Fl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Pc(function(r){return arguments.length?Ci.scrollTo(r,Rn.sc()):Ci.pageXOffset||ls[Fl]||cs[Fl]||Fo[Fl]||0})},Rn={s:Bl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ai,sc:Pc(function(r){return arguments.length?Ci.scrollTo(ai.sc(),r):Ci.pageYOffset||ls[Bl]||cs[Bl]||Fo[Bl]||0})},di=function(t,e){return(e&&e._ctx&&e._ctx.selector||kn.utils.toArray)(t)[0]||(typeof t=="string"&&kn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},vs=function(t,e){var n=e.s,i=e.sc;za(t)&&(t=ls.scrollingElement||cs);var s=Ve.indexOf(t),o=i===Rn.sc?1:2;!~s&&(s=Ve.push(t)-1),Ve[s+o]||ei(t,"scroll",_h);var a=Ve[s+o],c=a||(Ve[s+o]=Pc(ps(t,n),!0)||(za(t)?i:Pc(function(f){return arguments.length?t[n]=f:t[n]})));return c.target=t,a||(c.smooth=kn.getProperty(t,"scrollBehavior")==="smooth"),c},vh=function(t,e,n){var i=t,s=t,o=Ba(),a=o,c=e||50,f=Math.max(500,c*3),d=function(M,S){var x=Ba();S||x-o>c?(s=i,i=M,a=o,o=x):n?i+=M:i=s+(M-s)/(x-a)*(o-a)},m=function(){s=i=n?0:i,a=o=0},g=function(M){var S=a,x=s,v=Ba();return(M||M===0)&&M!==i&&d(M),o===a||v-a>f?0:(i+(n?x:-x))/((n?v:o)-S)*1e3};return{update:d,reset:m,getVelocity:g}},ya=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Hp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},c_=function(){Fa=kn.core.globals().ScrollTrigger,Fa&&Fa.core&&wb()},u_=function(t){return kn=t||a_(),!sc&&kn&&typeof document<"u"&&document.body&&(Ci=window,ls=document,cs=ls.documentElement,Fo=ls.body,s_=[Ci,ls,cs,Fo],kn.utils.clamp,o_=kn.core.context||function(){},Os="onpointerenter"in Fo?"pointer":"mouse",r_=Mn.isTouch=Ci.matchMedia&&Ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=Mn.eventTypes=("ontouchstart"in cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l_=0},500),c_(),sc=1),sc};ai.op=Rn;Ve.cache=0;var Mn=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){sc||u_(kn)||console.warn("Please gsap.registerPlugin(Observer)"),Fa||c_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,f=n.debounce,d=n.preventDefault,m=n.onStop,g=n.onStopDelay,p=n.ignore,M=n.wheelSpeed,S=n.event,x=n.onDragStart,v=n.onDragEnd,P=n.onDrag,w=n.onPress,C=n.onRelease,O=n.onRight,I=n.onLeft,h=n.onUp,B=n.onDown,V=n.onChangeX,b=n.onChangeY,D=n.onChange,W=n.onToggleX,q=n.onToggleY,lt=n.onHover,dt=n.onHoverEnd,it=n.onMove,ot=n.ignoreCheck,rt=n.isNormalizer,Mt=n.onGestureStart,z=n.onGestureEnd,wt=n.onWheel,de=n.onEnable,Se=n.onDisable,ut=n.onClick,xt=n.scrollSpeed,Ft=n.capture,At=n.allowClicks,jt=n.lockAxis,Wt=n.onLockAxis;this.target=a=di(a)||cs,this.vars=n,p&&(p=kn.utils.toArray(p)),i=i||1e-9,s=s||0,M=M||1,xt=xt||1,o=o||"wheel,touch,pointer",f=f!==!1,c||(c=parseFloat(Ci.getComputedStyle(Fo).lineHeight)||22);var se,xe,ae,k,Ue,ce,pe,Q=this,me=0,re=0,U=n.passive||!d,R=vs(a,ai),tt=vs(a,Rn),pt=R(),yt=tt(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",Nt=za(a),Tt=a.ownerDocument||ls,Bt=[0,0,0],ve=[0,0,0],St=0,kt=function(){return St=Ba()},Ht=function(qt,ze){return(Q.event=qt)&&p&&~p.indexOf(qt.target)||ze&&K&&qt.pointerType!=="touch"||ot&&ot(qt,ze)},Kt=function(){Q._vx.reset(),Q._vy.reset(),xe.pause(),m&&m(Q)},Ut=function(){var qt=Q.deltaX=Hp(Bt),ze=Q.deltaY=Hp(ve),Rt=Math.abs(qt)>=i,ie=Math.abs(ze)>=i;D&&(Rt||ie)&&D(Q,qt,ze,Bt,ve),Rt&&(O&&Q.deltaX>0&&O(Q),I&&Q.deltaX<0&&I(Q),V&&V(Q),W&&Q.deltaX<0!=me<0&&W(Q),me=Q.deltaX,Bt[0]=Bt[1]=Bt[2]=0),ie&&(B&&Q.deltaY>0&&B(Q),h&&Q.deltaY<0&&h(Q),b&&b(Q),q&&Q.deltaY<0!=re<0&&q(Q),re=Q.deltaY,ve[0]=ve[1]=ve[2]=0),(k||ae)&&(it&&it(Q),ae&&(P(Q),ae=!1),k=!1),ce&&!(ce=!1)&&Wt&&Wt(Q),Ue&&(wt(Q),Ue=!1),se=0},ge=function(qt,ze,Rt){Bt[Rt]+=qt,ve[Rt]+=ze,Q._vx.update(qt),Q._vy.update(ze),f?se||(se=requestAnimationFrame(Ut)):Ut()},ue=function(qt,ze){jt&&!pe&&(Q.axis=pe=Math.abs(qt)>Math.abs(ze)?"x":"y",ce=!0),pe!=="y"&&(Bt[2]+=qt,Q._vx.update(qt,!0)),pe!=="x"&&(ve[2]+=ze,Q._vy.update(ze,!0)),f?se||(se=requestAnimationFrame(Ut)):Ut()},Ae=function(qt){if(!Ht(qt,1)){qt=ya(qt,d);var ze=qt.clientX,Rt=qt.clientY,ie=ze-Q.x,Qt=Rt-Q.y,fe=Q.isDragging;Q.x=ze,Q.y=Rt,(fe||Math.abs(Q.startX-ze)>=s||Math.abs(Q.startY-Rt)>=s)&&(P&&(ae=!0),fe||(Q.isDragging=!0),ue(ie,Qt),fe||x&&x(Q))}},X=Q.onPress=function(Zt){Ht(Zt,1)||Zt&&Zt.button||(Q.axis=pe=null,xe.pause(),Q.isPressed=!0,Zt=ya(Zt),me=re=0,Q.startX=Q.x=Zt.clientX,Q.startY=Q.y=Zt.clientY,Q._vx.reset(),Q._vy.reset(),ei(rt?a:Tt,tr[1],Ae,U,!0),Q.deltaX=Q.deltaY=0,w&&w(Q))},vt=Q.onRelease=function(Zt){if(!Ht(Zt,1)){ti(rt?a:Tt,tr[1],Ae,!0);var qt=!isNaN(Q.y-Q.startY),ze=Q.isDragging,Rt=ze&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),ie=ya(Zt);!Rt&&qt&&(Q._vx.reset(),Q._vy.reset(),d&&At&&kn.delayedCall(.08,function(){if(Ba()-St>300&&!Zt.defaultPrevented){if(Zt.target.click)Zt.target.click();else if(Tt.createEvent){var Qt=Tt.createEvent("MouseEvents");Qt.initMouseEvent("click",!0,!0,Ci,1,ie.screenX,ie.screenY,ie.clientX,ie.clientY,!1,!1,!1,!1,0,null),Zt.target.dispatchEvent(Qt)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,m&&ze&&!rt&&xe.restart(!0),v&&ze&&v(Q),C&&C(Q,Rt)}},ft=function(qt){return qt.touches&&qt.touches.length>1&&(Q.isGesturing=!0)&&Mt(qt,Q.isDragging)},mt=function(){return(Q.isGesturing=!1)||z(Q)},Ct=function(qt){if(!Ht(qt)){var ze=R(),Rt=tt();ge((ze-pt)*xt,(Rt-yt)*xt,1),pt=ze,yt=Rt,m&&xe.restart(!0)}},Dt=function(qt){if(!Ht(qt)){qt=ya(qt,d),wt&&(Ue=!0);var ze=(qt.deltaMode===1?c:qt.deltaMode===2?Ci.innerHeight:1)*M;ge(qt.deltaX*ze,qt.deltaY*ze,0),m&&!rt&&xe.restart(!0)}},Ee=function(qt){if(!Ht(qt)){var ze=qt.clientX,Rt=qt.clientY,ie=ze-Q.x,Qt=Rt-Q.y;Q.x=ze,Q.y=Rt,k=!0,m&&xe.restart(!0),(ie||Qt)&&ue(ie,Qt)}},Ce=function(qt){Q.event=qt,lt(Q)},Le=function(qt){Q.event=qt,dt(Q)},we=function(qt){return Ht(qt)||ya(qt,d)&&ut(Q)};xe=Q._dc=kn.delayedCall(g||.25,Kt).pause(),Q.deltaX=Q.deltaY=0,Q._vx=vh(0,50,!0),Q._vy=vh(0,50,!0),Q.scrollX=R,Q.scrollY=tt,Q.isDragging=Q.isGesturing=Q.isPressed=!1,o_(this),Q.enable=function(Zt){return Q.isEnabled||(ei(Nt?Tt:a,"scroll",_h),o.indexOf("scroll")>=0&&ei(Nt?Tt:a,"scroll",Ct,U,Ft),o.indexOf("wheel")>=0&&ei(a,"wheel",Dt,U,Ft),(o.indexOf("touch")>=0&&r_||o.indexOf("pointer")>=0)&&(ei(a,tr[0],X,U,Ft),ei(Tt,tr[2],vt),ei(Tt,tr[3],vt),At&&ei(a,"click",kt,!0,!0),ut&&ei(a,"click",we),Mt&&ei(Tt,"gesturestart",ft),z&&ei(Tt,"gestureend",mt),lt&&ei(a,Os+"enter",Ce),dt&&ei(a,Os+"leave",Le),it&&ei(a,Os+"move",Ee)),Q.isEnabled=!0,Zt&&Zt.type&&X(Zt),de&&de(Q)),Q},Q.disable=function(){Q.isEnabled&&(Po.filter(function(Zt){return Zt!==Q&&za(Zt.target)}).length||ti(Nt?Tt:a,"scroll",_h),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),ti(rt?a:Tt,tr[1],Ae,!0)),ti(Nt?Tt:a,"scroll",Ct,Ft),ti(a,"wheel",Dt,Ft),ti(a,tr[0],X,Ft),ti(Tt,tr[2],vt),ti(Tt,tr[3],vt),ti(a,"click",kt,!0),ti(a,"click",we),ti(Tt,"gesturestart",ft),ti(Tt,"gestureend",mt),ti(a,Os+"enter",Ce),ti(a,Os+"leave",Le),ti(a,Os+"move",Ee),Q.isEnabled=Q.isPressed=Q.isDragging=!1,Se&&Se(Q))},Q.kill=Q.revert=function(){Q.disable();var Zt=Po.indexOf(Q);Zt>=0&&Po.splice(Zt,1),Fr===Q&&(Fr=0)},Po.push(Q),rt&&za(a)&&(Fr=Q),Q.enable(S)},bb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Mn.version="3.12.5";Mn.create=function(r){return new Mn(r)};Mn.register=u_;Mn.getAll=function(){return Po.slice()};Mn.getById=function(r){return Po.filter(function(t){return t.vars.id===r})[0]};a_()&&kn.registerPlugin(Mn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xt,bo,Xe,dn,er,cn,f_,Dc,tl,ka,Aa,zl,Wn,$c,xh,ri,Vp,Gp,wo,h_,rf,d_,ii,yh,p_,m_,is,Sh,od,Bo,ad,Lc,Mh,sf,kl=1,Xn=Date.now,of=Xn(),qi=0,Ca=0,Wp=function(t,e,n){var i=bi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Xp=function(t,e){return e&&(!bi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Ab=function r(){return Ca&&requestAnimationFrame(r)},qp=function(){return $c=1},Yp=function(){return $c=0},dr=function(t){return t},Ra=function(t){return Math.round(t*1e5)/1e5||0},g_=function(){return typeof window<"u"},__=function(){return Xt||g_()&&(Xt=window.gsap)&&Xt.registerPlugin&&Xt},to=function(t){return!!~f_.indexOf(t)},v_=function(t){return(t==="Height"?ad:Xe["inner"+t])||er["client"+t]||cn["client"+t]},x_=function(t){return ps(t,"getBoundingClientRect")||(to(t)?function(){return uc.width=Xe.innerWidth,uc.height=ad,uc}:function(){return Ir(t)})},Cb=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ps(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?v_(s):t["client"+s])||0}},Rb=function(t,e){return!e||~xr.indexOf(t)?x_(t):function(){return uc}},_r=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ps(t,n))?o()-x_(t)()[s]:to(t)?(er[n]||cn[n])-v_(i):t[n]-t["offset"+i])},Hl=function(t,e){for(var n=0;n<wo.length;n+=3)(!e||~e.indexOf(wo[n+1]))&&t(wo[n],wo[n+1],wo[n+2])},bi=function(t){return typeof t=="string"},li=function(t){return typeof t=="function"},Pa=function(t){return typeof t=="number"},Fs=function(t){return typeof t=="object"},Sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},af=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},To=Math.abs,y_="left",S_="top",ld="right",cd="bottom",$s="width",js="height",Ha="Right",Va="Left",Ga="Top",Wa="Bottom",bn="padding",zi="margin",Qo="Width",ud="Height",Cn="px",ki=function(t){return Xe.getComputedStyle(t)},Pb=function(t){var e=ki(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},$p=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ir=function(t,e){var n=e&&ki(t)[xh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ic=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},M_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Db=function(t){return function(e){return Xt.utils.snap(M_(t),e)}},fd=function(t){var e=Xt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Lb=function(t){return function(e,n){return fd(M_(t))(e,n.direction)}},Vl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},On=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Gl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},jp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Wl={toggleActions:"play",anticipatePin:0},Nc={top:0,left:0,center:.5,bottom:1,right:1},oc=function(t,e){if(bi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Nc?Nc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Xl=function(t,e,n,i,s,o,a,c){var f=s.startColor,d=s.endColor,m=s.fontSize,g=s.indent,p=s.fontWeight,M=dn.createElement("div"),S=to(n)||ps(n,"pinType")==="fixed",x=t.indexOf("scroller")!==-1,v=S?cn:n,P=t.indexOf("start")!==-1,w=P?f:d,C="border-color:"+w+";font-size:"+m+";color:"+w+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((x||c)&&S?"fixed;":"absolute;"),(x||c||!S)&&(C+=(i===Rn?ld:cd)+":"+(o+parseFloat(g))+"px;"),a&&(C+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),M._isStart=P,M.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),M.style.cssText=C,M.innerText=e||e===0?t+"-"+e:t,v.children[0]?v.insertBefore(M,v.children[0]):v.appendChild(M),M._offset=M["offset"+i.op.d2],ac(M,0,i,P),M},ac=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Qo]=1,s["border"+a+Qo]=0,s[n.p]=e+"px",Xt.set(t,s)},Fe=[],Th={},el,Kp=function(){return Xn()-qi>34&&(el||(el=requestAnimationFrame(Hr)))},Eo=function(){(!ii||!ii.isPressed||ii.startX>cn.clientWidth)&&(Ve.cache++,ii?el||(el=requestAnimationFrame(Hr)):Hr(),qi||no("scrollStart"),qi=Xn())},lf=function(){m_=Xe.innerWidth,p_=Xe.innerHeight},Da=function(){Ve.cache++,!Wn&&!d_&&!dn.fullscreenElement&&!dn.webkitFullscreenElement&&(!yh||m_!==Xe.innerWidth||Math.abs(Xe.innerHeight-p_)>Xe.innerHeight*.25)&&Dc.restart(!0)},eo={},Ib=[],T_=function r(){return Un(Be,"scrollEnd",r)||Gs(!0)},no=function(t){return eo[t]&&eo[t].map(function(e){return e()})||Ib},Ei=[],E_=function(t){for(var e=0;e<Ei.length;e+=5)(!t||Ei[e+4]&&Ei[e+4].query===t)&&(Ei[e].style.cssText=Ei[e+1],Ei[e].getBBox&&Ei[e].setAttribute("transform",Ei[e+2]||""),Ei[e+3].uncache=1)},hd=function(t,e){var n;for(ri=0;ri<Fe.length;ri++)n=Fe[ri],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Lc=!0,e&&E_(e),e||no("revert")},b_=function(t,e){Ve.cache++,(e||!si)&&Ve.forEach(function(n){return li(n)&&n.cacheID++&&(n.rec=0)}),bi(t)&&(Xe.history.scrollRestoration=od=t)},si,Ks=0,Jp,Nb=function(){if(Jp!==Ks){var t=Jp=Ks;requestAnimationFrame(function(){return t===Ks&&Gs(!0)})}},w_=function(){cn.appendChild(Bo),ad=!ii&&Bo.offsetHeight||Xe.innerHeight,cn.removeChild(Bo)},Zp=function(t){return tl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Gs=function(t,e){if(qi&&!t&&!Lc){On(Be,"scrollEnd",T_);return}w_(),si=Be.isRefreshing=!0,Ve.forEach(function(i){return li(i)&&++i.cacheID&&(i.rec=i())});var n=no("refreshInit");h_&&Be.sort(),e||hd(),Ve.forEach(function(i){li(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Fe.slice(0).forEach(function(i){return i.refresh()}),Lc=!1,Fe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Mh=1,Zp(!0),Fe.forEach(function(i){var s=_r(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Zp(!1),Mh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ve.forEach(function(i){li(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),b_(od,1),Dc.pause(),Ks++,si=2,Hr(2),Fe.forEach(function(i){return li(i.vars.onRefresh)&&i.vars.onRefresh(i)}),si=Be.isRefreshing=!1,no("refresh")},Eh=0,lc=1,Xa,Hr=function(t){if(t===2||!si&&!Lc){Be.isUpdating=!0,Xa&&Xa.update(0);var e=Fe.length,n=Xn(),i=n-of>=50,s=e&&Fe[0].scroll();if(lc=Eh>s?-1:1,si||(Eh=s),i&&(qi&&!$c&&n-qi>200&&(qi=0,no("scrollEnd")),Aa=of,of=n),lc<0){for(ri=e;ri-- >0;)Fe[ri]&&Fe[ri].update(0,i);lc=1}else for(ri=0;ri<e;ri++)Fe[ri]&&Fe[ri].update(0,i);Be.isUpdating=!1}el=0},bh=[y_,S_,cd,ld,zi+Wa,zi+Ha,zi+Ga,zi+Va,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],cc=bh.concat([$s,js,"boxSizing","max"+Qo,"max"+ud,"position",zi,bn,bn+Ga,bn+Ha,bn+Wa,bn+Va]),Ub=function(t,e,n){zo(n);var i=t._gsap;if(i.spacerIsNative)zo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},cf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=bh.length,o=e.style,a=t.style,c;s--;)c=bh[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[cd]=a[ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$s]=Ic(t,ai)+Cn,o[js]=Ic(t,Rn)+Cn,o[bn]=a[zi]=a[S_]=a[y_]="0",zo(i),a[$s]=a["max"+Qo]=n[$s],a[js]=a["max"+ud]=n[js],a[bn]=n[bn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ob=/([A-Z])/g,zo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Xt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Ob,"-$1").toLowerCase())}},ql=function(t){for(var e=cc.length,n=t.style,i=[],s=0;s<e;s++)i.push(cc[s],n[cc[s]]);return i.t=t,i},Fb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},uc={left:0,top:0},Qp=function(t,e,n,i,s,o,a,c,f,d,m,g,p,M){li(t)&&(t=t(c)),bi(t)&&t.substr(0,3)==="max"&&(t=g+(t.charAt(4)==="="?oc("0"+t.substr(3),n):0));var S=p?p.time():0,x,v,P;if(p&&p.seek(0),isNaN(t)||(t=+t),Pa(t))p&&(t=Xt.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,g,t)),a&&ac(a,n,i,!0);else{li(e)&&(e=e(c));var w=(t||"0").split(" "),C,O,I,h;P=di(e,c)||cn,C=Ir(P)||{},(!C||!C.left&&!C.top)&&ki(P).display==="none"&&(h=P.style.display,P.style.display="block",C=Ir(P),h?P.style.display=h:P.style.removeProperty("display")),O=oc(w[0],C[i.d]),I=oc(w[1]||"0",n),t=C[i.p]-f[i.p]-d+O+s-I,a&&ac(a,I,i,n-I<20||a._isStart&&I>20),n-=n-I}if(M&&(c[M]=t||-.001,t<0&&(t=0)),o){var B=t+n,V=o._isStart;x="scroll"+i.d2,ac(o,B,i,V&&B>20||!V&&(m?Math.max(cn[x],er[x]):o.parentNode[x])<=B+1),m&&(f=Ir(a),m&&(o.style[i.op.p]=f[i.op.p]-i.op.m-o._offset+Cn))}return p&&P&&(x=Ir(P),p.seek(g),v=Ir(P),p._caScrollDist=x[i.p]-v[i.p],t=t/p._caScrollDist*g),p&&p.seek(S),p?t:Math.round(t)},Bb=/(webkit|moz|length|cssText|inset)/i,tm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===cn){t._stOrig=s.cssText,a=ki(t);for(o in a)!+o&&!Bb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Xt.core.getCache(t).uncache=1,e.appendChild(t)}},A_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Yl=function(t,e,n){var i={};i[e.p]="+="+n,Xt.set(t,i)},em=function(t,e){var n=vs(t,e),i="_scroll"+e.p2,s=function o(a,c,f,d,m){var g=o.tween,p=c.onComplete,M={};f=f||n();var S=A_(n,f,function(){g.kill(),o.tween=0});return m=d&&m||0,d=d||a-f,g&&g.kill(),c[i]=a,c.inherit=!1,c.modifiers=M,M[i]=function(){return S(f+d*g.ratio+m*g.ratio*g.ratio)},c.onUpdate=function(){Ve.cache++,o.tween&&Hr()},c.onComplete=function(){o.tween=0,p&&p.call(g)},g=o.tween=Xt.to(t,c),g};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},On(t,"wheel",n.wheelHandler),Be.isTouch&&On(t,"touchmove",n.wheelHandler),s},Be=function(){function r(e,n){bo||r.register(Xt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=dr;return}n=$p(bi(n)||Pa(n)||n.nodeType?{trigger:n}:n,Wl);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,f=s.onToggle,d=s.onRefresh,m=s.scrub,g=s.trigger,p=s.pin,M=s.pinSpacing,S=s.invalidateOnRefresh,x=s.anticipatePin,v=s.onScrubComplete,P=s.onSnapComplete,w=s.once,C=s.snap,O=s.pinReparent,I=s.pinSpacer,h=s.containerAnimation,B=s.fastScrollEnd,V=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ai:Rn,D=!m&&m!==0,W=di(n.scroller||Xe),q=Xt.core.getCache(W),lt=to(W),dt=("pinType"in n?n.pinType:ps(W,"pinType")||lt&&"fixed")==="fixed",it=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],ot=D&&n.toggleActions.split(" "),rt="markers"in n?n.markers:Wl.markers,Mt=lt?0:parseFloat(ki(W)["border"+b.p2+Qo])||0,z=this,wt=n.onRefreshInit&&function(){return n.onRefreshInit(z)},de=Cb(W,lt,b),Se=Rb(W,lt),ut=0,xt=0,Ft=0,At=vs(W,b),jt,Wt,se,xe,ae,k,Ue,ce,pe,Q,me,re,U,R,tt,pt,yt,K,Nt,Tt,Bt,ve,St,kt,Ht,Kt,Ut,ge,ue,Ae,X,vt,ft,mt,Ct,Dt,Ee,Ce,Le;if(z._startClamp=z._endClamp=!1,z._dir=b,x*=45,z.scroller=W,z.scroll=h?h.time.bind(h):At,xe=At(),z.vars=n,i=i||n.animation,"refreshPriority"in n&&(h_=1,n.refreshPriority===-9999&&(Xa=z)),q.tweenScroll=q.tweenScroll||{top:em(W,Rn),left:em(W,ai)},z.tweenTo=jt=q.tweenScroll[b.p],z.scrubDuration=function(Rt){ft=Pa(Rt)&&Rt,ft?vt?vt.duration(Rt):vt=Xt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ft,paused:!0,onComplete:function(){return v&&v(z)}}):(vt&&vt.progress(1).kill(),vt=0)},i&&(i.vars.lazy=!1,i._initted&&!z.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),z.animation=i.pause(),i.scrollTrigger=z,z.scrubDuration(m),Ae=0,c||(c=i.vars.id)),C&&((!Fs(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in cn.style&&Xt.set(lt?[cn,er]:W,{scrollBehavior:"auto"}),Ve.forEach(function(Rt){return li(Rt)&&Rt.target===(lt?dn.scrollingElement||er:W)&&(Rt.smooth=!1)}),se=li(C.snapTo)?C.snapTo:C.snapTo==="labels"?Db(i):C.snapTo==="labelsDirectional"?Lb(i):C.directional!==!1?function(Rt,ie){return fd(C.snapTo)(Rt,Xn()-xt<500?0:ie.direction)}:Xt.utils.snap(C.snapTo),mt=C.duration||{min:.1,max:2},mt=Fs(mt)?ka(mt.min,mt.max):ka(mt,mt),Ct=Xt.delayedCall(C.delay||ft/2||.1,function(){var Rt=At(),ie=Xn()-xt<500,Qt=jt.tween;if((ie||Math.abs(z.getVelocity())<10)&&!Qt&&!$c&&ut!==Rt){var fe=(Rt-k)/R,hn=i&&!D?i.totalProgress():fe,be=ie?0:(hn-X)/(Xn()-Aa)*1e3||0,rn=Xt.utils.clamp(-fe,1-fe,To(be/2)*be/.185),un=fe+(C.inertia===!1?0:rn),en,Qe,je=C,Kn=je.onStart,Ke=je.onInterrupt,L=je.onComplete;if(en=se(un,z),Pa(en)||(en=un),Qe=Math.round(k+en*R),Rt<=Ue&&Rt>=k&&Qe!==Rt){if(Qt&&!Qt._initted&&Qt.data<=To(Qe-Rt))return;C.inertia===!1&&(rn=en-fe),jt(Qe,{duration:mt(To(Math.max(To(un-hn),To(en-hn))*.185/be/.05||0)),ease:C.ease||"power3",data:To(Qe-Rt),onInterrupt:function(){return Ct.restart(!0)&&Ke&&Ke(z)},onComplete:function(){z.update(),ut=At(),i&&(vt?vt.resetTo("totalProgress",en,i._tTime/i._tDur):i.progress(en)),Ae=X=i&&!D?i.totalProgress():z.progress,P&&P(z),L&&L(z)}},Rt,rn*R,Qe-Rt-rn*R),Kn&&Kn(z,jt.tween)}}else z.isActive&&ut!==Rt&&Ct.restart(!0)}).pause()),c&&(Th[c]=z),g=z.trigger=di(g||p!==!0&&p),Le=g&&g._gsap&&g._gsap.stRevert,Le&&(Le=Le(z)),p=p===!0?g:di(p),bi(a)&&(a={targets:g,className:a}),p&&(M===!1||M===zi||(M=!M&&p.parentNode&&p.parentNode.style&&ki(p.parentNode).display==="flex"?!1:bn),z.pin=p,Wt=Xt.core.getCache(p),Wt.spacer?tt=Wt.pinState:(I&&(I=di(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Wt.spacerIsNative=!!I,I&&(Wt.spacerState=ql(I))),Wt.spacer=K=I||dn.createElement("div"),K.classList.add("pin-spacer"),c&&K.classList.add("pin-spacer-"+c),Wt.pinState=tt=ql(p)),n.force3D!==!1&&Xt.set(p,{force3D:!0}),z.spacer=K=Wt.spacer,ue=ki(p),kt=ue[M+b.os2],Tt=Xt.getProperty(p),Bt=Xt.quickSetter(p,b.a,Cn),cf(p,K,ue),yt=ql(p)),rt){re=Fs(rt)?$p(rt,jp):jp,Q=Xl("scroller-start",c,W,b,re,0),me=Xl("scroller-end",c,W,b,re,0,Q),Nt=Q["offset"+b.op.d2];var we=di(ps(W,"content")||W);ce=this.markerStart=Xl("start",c,we,b,re,Nt,0,h),pe=this.markerEnd=Xl("end",c,we,b,re,Nt,0,h),h&&(Ce=Xt.quickSetter([ce,pe],b.a,Cn)),!dt&&!(xr.length&&ps(W,"fixedMarkers")===!0)&&(Pb(lt?cn:W),Xt.set([Q,me],{force3D:!0}),Kt=Xt.quickSetter(Q,b.a,Cn),ge=Xt.quickSetter(me,b.a,Cn))}if(h){var Zt=h.vars.onUpdate,qt=h.vars.onUpdateParams;h.eventCallback("onUpdate",function(){z.update(0,0,1),Zt&&Zt.apply(h,qt||[])})}if(z.previous=function(){return Fe[Fe.indexOf(z)-1]},z.next=function(){return Fe[Fe.indexOf(z)+1]},z.revert=function(Rt,ie){if(!ie)return z.kill(!0);var Qt=Rt!==!1||!z.enabled,fe=Wn;Qt!==z.isReverted&&(Qt&&(Dt=Math.max(At(),z.scroll.rec||0),Ft=z.progress,Ee=i&&i.progress()),ce&&[ce,pe,Q,me].forEach(function(hn){return hn.style.display=Qt?"none":"block"}),Qt&&(Wn=z,z.update(Qt)),p&&(!O||!z.isActive)&&(Qt?Ub(p,K,tt):cf(p,K,ki(p),Ht)),Qt||z.update(Qt),Wn=fe,z.isReverted=Qt)},z.refresh=function(Rt,ie,Qt,fe){if(!((Wn||!z.enabled)&&!ie)){if(p&&Rt&&qi){On(r,"scrollEnd",T_);return}!si&&wt&&wt(z),Wn=z,jt.tween&&!Qt&&(jt.tween.kill(),jt.tween=0),vt&&vt.pause(),S&&i&&i.revert({kill:!1}).invalidate(),z.isReverted||z.revert(!0,!0),z._subPinOffset=!1;var hn=de(),be=Se(),rn=h?h.duration():_r(W,b),un=R<=.01,en=0,Qe=fe||0,je=Fs(Qt)?Qt.end:n.end,Kn=n.endTrigger||g,Ke=Fs(Qt)?Qt.start:n.start||(n.start===0||!g?0:p?"0 0":"0 100%"),L=z.pinnedContainer=n.pinnedContainer&&di(n.pinnedContainer,z),Y=g&&Math.max(0,Fe.indexOf(z))||0,et=Y,nt,j,bt,Ot,It,Lt,Yt,oe,$t,Ie,Oe,Je,xn;for(rt&&Fs(Qt)&&(Je=Xt.getProperty(Q,b.p),xn=Xt.getProperty(me,b.p));et--;)Lt=Fe[et],Lt.end||Lt.refresh(0,1)||(Wn=z),Yt=Lt.pin,Yt&&(Yt===g||Yt===p||Yt===L)&&!Lt.isReverted&&(Ie||(Ie=[]),Ie.unshift(Lt),Lt.revert(!0,!0)),Lt!==Fe[et]&&(Y--,et--);for(li(Ke)&&(Ke=Ke(z)),Ke=Wp(Ke,"start",z),k=Qp(Ke,g,hn,b,At(),ce,Q,z,be,Mt,dt,rn,h,z._startClamp&&"_startClamp")||(p?-.001:0),li(je)&&(je=je(z)),bi(je)&&!je.indexOf("+=")&&(~je.indexOf(" ")?je=(bi(Ke)?Ke.split(" ")[0]:"")+je:(en=oc(je.substr(2),hn),je=bi(Ke)?Ke:(h?Xt.utils.mapRange(0,h.duration(),h.scrollTrigger.start,h.scrollTrigger.end,k):k)+en,Kn=g)),je=Wp(je,"end",z),Ue=Math.max(k,Qp(je||(Kn?"100% 0":rn),Kn,hn,b,At()+en,pe,me,z,be,Mt,dt,rn,h,z._endClamp&&"_endClamp"))||-.001,en=0,et=Y;et--;)Lt=Fe[et],Yt=Lt.pin,Yt&&Lt.start-Lt._pinPush<=k&&!h&&Lt.end>0&&(nt=Lt.end-(z._startClamp?Math.max(0,Lt.start):Lt.start),(Yt===g&&Lt.start-Lt._pinPush<k||Yt===L)&&isNaN(Ke)&&(en+=nt*(1-Lt.progress)),Yt===p&&(Qe+=nt));if(k+=en,Ue+=en,z._startClamp&&(z._startClamp+=en),z._endClamp&&!si&&(z._endClamp=Ue||-.001,Ue=Math.min(Ue,_r(W,b))),R=Ue-k||(k-=.01)&&.001,un&&(Ft=Xt.utils.clamp(0,1,Xt.utils.normalize(k,Ue,Dt))),z._pinPush=Qe,ce&&en&&(nt={},nt[b.a]="+="+en,L&&(nt[b.p]="-="+At()),Xt.set([ce,pe],nt)),p&&!(Mh&&z.end>=_r(W,b)))nt=ki(p),Ot=b===Rn,bt=At(),ve=parseFloat(Tt(b.a))+Qe,!rn&&Ue>1&&(Oe=(lt?dn.scrollingElement||er:W).style,Oe={style:Oe,value:Oe["overflow"+b.a.toUpperCase()]},lt&&ki(cn)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Oe.style["overflow"+b.a.toUpperCase()]="scroll")),cf(p,K,nt),yt=ql(p),j=Ir(p,!0),oe=dt&&vs(W,Ot?ai:Rn)(),M?(Ht=[M+b.os2,R+Qe+Cn],Ht.t=K,et=M===bn?Ic(p,b)+R+Qe:0,et&&(Ht.push(b.d,et+Cn),K.style.flexBasis!=="auto"&&(K.style.flexBasis=et+Cn)),zo(Ht),L&&Fe.forEach(function(Ne){Ne.pin===L&&Ne.vars.pinSpacing!==!1&&(Ne._subPinOffset=!0)}),dt&&At(Dt)):(et=Ic(p,b),et&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=et+Cn)),dt&&(It={top:j.top+(Ot?bt-k:oe)+Cn,left:j.left+(Ot?oe:bt-k)+Cn,boxSizing:"border-box",position:"fixed"},It[$s]=It["max"+Qo]=Math.ceil(j.width)+Cn,It[js]=It["max"+ud]=Math.ceil(j.height)+Cn,It[zi]=It[zi+Ga]=It[zi+Ha]=It[zi+Wa]=It[zi+Va]="0",It[bn]=nt[bn],It[bn+Ga]=nt[bn+Ga],It[bn+Ha]=nt[bn+Ha],It[bn+Wa]=nt[bn+Wa],It[bn+Va]=nt[bn+Va],pt=Fb(tt,It,O),si&&At(0)),i?($t=i._initted,rf(1),i.render(i.duration(),!0,!0),St=Tt(b.a)-ve+R+Qe,Ut=Math.abs(R-St)>1,dt&&Ut&&pt.splice(pt.length-2,2),i.render(0,!0,!0),$t||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),rf(0)):St=R,Oe&&(Oe.value?Oe.style["overflow"+b.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+b.a));else if(g&&At()&&!h)for(j=g.parentNode;j&&j!==cn;)j._pinOffset&&(k-=j._pinOffset,Ue-=j._pinOffset),j=j.parentNode;Ie&&Ie.forEach(function(Ne){return Ne.revert(!1,!0)}),z.start=k,z.end=Ue,xe=ae=si?Dt:At(),!h&&!si&&(xe<Dt&&At(Dt),z.scroll.rec=0),z.revert(!1,!0),xt=Xn(),Ct&&(ut=-1,Ct.restart(!0)),Wn=0,i&&D&&(i._initted||Ee)&&i.progress()!==Ee&&i.progress(Ee||0,!0).render(i.time(),!0,!0),(un||Ft!==z.progress||h||S)&&(i&&!D&&i.totalProgress(h&&k<-.001&&!Ft?Xt.utils.normalize(k,Ue,0):Ft,!0),z.progress=un||(xe-k)/R===Ft?0:Ft),p&&M&&(K._pinOffset=Math.round(z.progress*St)),vt&&vt.invalidate(),isNaN(Je)||(Je-=Xt.getProperty(Q,b.p),xn-=Xt.getProperty(me,b.p),Yl(Q,b,Je),Yl(ce,b,Je-(fe||0)),Yl(me,b,xn),Yl(pe,b,xn-(fe||0))),un&&!si&&z.update(),d&&!si&&!U&&(U=!0,d(z),U=!1)}},z.getVelocity=function(){return(At()-ae)/(Xn()-Aa)*1e3||0},z.endAnimation=function(){Sa(z.callbackAnimation),i&&(vt?vt.progress(1):i.paused()?D||Sa(i,z.direction<0,1):Sa(i,i.reversed()))},z.labelToScroll=function(Rt){return i&&i.labels&&(k||z.refresh()||k)+i.labels[Rt]/i.duration()*R||0},z.getTrailing=function(Rt){var ie=Fe.indexOf(z),Qt=z.direction>0?Fe.slice(0,ie).reverse():Fe.slice(ie+1);return(bi(Rt)?Qt.filter(function(fe){return fe.vars.preventOverlaps===Rt}):Qt).filter(function(fe){return z.direction>0?fe.end<=k:fe.start>=Ue})},z.update=function(Rt,ie,Qt){if(!(h&&!Qt&&!Rt)){var fe=si===!0?Dt:z.scroll(),hn=Rt?0:(fe-k)/R,be=hn<0?0:hn>1?1:hn||0,rn=z.progress,un,en,Qe,je,Kn,Ke,L,Y;if(ie&&(ae=xe,xe=h?At():fe,C&&(X=Ae,Ae=i&&!D?i.totalProgress():be)),x&&p&&!Wn&&!kl&&qi&&(!be&&k<fe+(fe-ae)/(Xn()-Aa)*x?be=1e-4:be===1&&Ue>fe+(fe-ae)/(Xn()-Aa)*x&&(be=.9999)),be!==rn&&z.enabled){if(un=z.isActive=!!be&&be<1,en=!!rn&&rn<1,Ke=un!==en,Kn=Ke||!!be!=!!rn,z.direction=be>rn?1:-1,z.progress=be,Kn&&!Wn&&(Qe=be&&!rn?0:be===1?1:rn===1?2:3,D&&(je=!Ke&&ot[Qe+1]!=="none"&&ot[Qe+1]||ot[Qe],Y=i&&(je==="complete"||je==="reset"||je in i))),V&&(Ke||Y)&&(Y||m||!i)&&(li(V)?V(z):z.getTrailing(V).forEach(function(bt){return bt.endAnimation()})),D||(vt&&!Wn&&!kl?(vt._dp._time-vt._start!==vt._time&&vt.render(vt._dp._time-vt._start),vt.resetTo?vt.resetTo("totalProgress",be,i._tTime/i._tDur):(vt.vars.totalProgress=be,vt.invalidate().restart())):i&&i.totalProgress(be,!!(Wn&&(xt||Rt)))),p){if(Rt&&M&&(K.style[M+b.os2]=kt),!dt)Bt(Ra(ve+St*be));else if(Kn){if(L=!Rt&&be>rn&&Ue+1>fe&&fe+1>=_r(W,b),O)if(!Rt&&(un||L)){var et=Ir(p,!0),nt=fe-k;tm(p,cn,et.top+(b===Rn?nt:0)+Cn,et.left+(b===Rn?0:nt)+Cn)}else tm(p,K);zo(un||L?pt:yt),Ut&&be<1&&un||Bt(ve+(be===1&&!L?St:0))}}C&&!jt.tween&&!Wn&&!kl&&Ct.restart(!0),a&&(Ke||w&&be&&(be<1||!sf))&&tl(a.targets).forEach(function(bt){return bt.classList[un||w?"add":"remove"](a.className)}),o&&!D&&!Rt&&o(z),Kn&&!Wn?(D&&(Y&&(je==="complete"?i.pause().totalProgress(1):je==="reset"?i.restart(!0).pause():je==="restart"?i.restart(!0):i[je]()),o&&o(z)),(Ke||!sf)&&(f&&Ke&&af(z,f),it[Qe]&&af(z,it[Qe]),w&&(be===1?z.kill(!1,1):it[Qe]=0),Ke||(Qe=be===1?1:3,it[Qe]&&af(z,it[Qe]))),B&&!un&&Math.abs(z.getVelocity())>(Pa(B)?B:2500)&&(Sa(z.callbackAnimation),vt?vt.progress(1):Sa(i,je==="reverse"?1:!be,1))):D&&o&&!Wn&&o(z)}if(ge){var j=h?fe/h.duration()*(h._caScrollDist||0):fe;Kt(j+(Q._isFlipped?1:0)),ge(j)}Ce&&Ce(-fe/h.duration()*(h._caScrollDist||0))}},z.enable=function(Rt,ie){z.enabled||(z.enabled=!0,On(W,"resize",Da),lt||On(W,"scroll",Eo),wt&&On(r,"refreshInit",wt),Rt!==!1&&(z.progress=Ft=0,xe=ae=ut=At()),ie!==!1&&z.refresh())},z.getTween=function(Rt){return Rt&&jt?jt.tween:vt},z.setPositions=function(Rt,ie,Qt,fe){if(h){var hn=h.scrollTrigger,be=h.duration(),rn=hn.end-hn.start;Rt=hn.start+rn*Rt/be,ie=hn.start+rn*ie/be}z.refresh(!1,!1,{start:Xp(Rt,Qt&&!!z._startClamp),end:Xp(ie,Qt&&!!z._endClamp)},fe),z.update()},z.adjustPinSpacing=function(Rt){if(Ht&&Rt){var ie=Ht.indexOf(b.d)+1;Ht[ie]=parseFloat(Ht[ie])+Rt+Cn,Ht[1]=parseFloat(Ht[1])+Rt+Cn,zo(Ht)}},z.disable=function(Rt,ie){if(z.enabled&&(Rt!==!1&&z.revert(!0,!0),z.enabled=z.isActive=!1,ie||vt&&vt.pause(),Dt=0,Wt&&(Wt.uncache=1),wt&&Un(r,"refreshInit",wt),Ct&&(Ct.pause(),jt.tween&&jt.tween.kill()&&(jt.tween=0)),!lt)){for(var Qt=Fe.length;Qt--;)if(Fe[Qt].scroller===W&&Fe[Qt]!==z)return;Un(W,"resize",Da),lt||Un(W,"scroll",Eo)}},z.kill=function(Rt,ie){z.disable(Rt,ie),vt&&!ie&&vt.kill(),c&&delete Th[c];var Qt=Fe.indexOf(z);Qt>=0&&Fe.splice(Qt,1),Qt===ri&&lc>0&&ri--,Qt=0,Fe.forEach(function(fe){return fe.scroller===z.scroller&&(Qt=1)}),Qt||si||(z.scroll.rec=0),i&&(i.scrollTrigger=null,Rt&&i.revert({kill:!1}),ie||i.kill()),ce&&[ce,pe,Q,me].forEach(function(fe){return fe.parentNode&&fe.parentNode.removeChild(fe)}),Xa===z&&(Xa=0),p&&(Wt&&(Wt.uncache=1),Qt=0,Fe.forEach(function(fe){return fe.pin===p&&Qt++}),Qt||(Wt.spacer=0)),n.onKill&&n.onKill(z)},Fe.push(z),z.enable(!1,!1),Le&&Le(z),i&&i.add&&!R){var ze=z.update;z.update=function(){z.update=ze,k||Ue||z.refresh()},Xt.delayedCall(.01,z.update),R=.01,k=Ue=0}else z.refresh();p&&Nb()},r.register=function(n){return bo||(Xt=n||__(),g_()&&window.document&&r.enable(),bo=Ca),bo},r.defaults=function(n){if(n)for(var i in n)Wl[i]=n[i];return Wl},r.disable=function(n,i){Ca=0,Fe.forEach(function(o){return o[i?"kill":"disable"](n)}),Un(Xe,"wheel",Eo),Un(dn,"scroll",Eo),clearInterval(zl),Un(dn,"touchcancel",dr),Un(cn,"touchstart",dr),Vl(Un,dn,"pointerdown,touchstart,mousedown",qp),Vl(Un,dn,"pointerup,touchend,mouseup",Yp),Dc.kill(),Hl(Un);for(var s=0;s<Ve.length;s+=3)Gl(Un,Ve[s],Ve[s+1]),Gl(Un,Ve[s],Ve[s+2])},r.enable=function(){if(Xe=window,dn=document,er=dn.documentElement,cn=dn.body,Xt&&(tl=Xt.utils.toArray,ka=Xt.utils.clamp,Sh=Xt.core.context||dr,rf=Xt.core.suppressOverwrites||dr,od=Xe.history.scrollRestoration||"auto",Eh=Xe.pageYOffset,Xt.core.globals("ScrollTrigger",r),cn)){Ca=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",w_(),Ab(),Mn.register(Xt),r.isTouch=Mn.isTouch,is=Mn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yh=Mn.isTouch===1,On(Xe,"wheel",Eo),f_=[Xe,dn,er,cn],Xt.matchMedia?(r.matchMedia=function(c){var f=Xt.matchMedia(),d;for(d in c)f.add(d,c[d]);return f},Xt.addEventListener("matchMediaInit",function(){return hd()}),Xt.addEventListener("matchMediaRevert",function(){return E_()}),Xt.addEventListener("matchMedia",function(){Gs(0,1),no("matchMedia")}),Xt.matchMedia("(orientation: portrait)",function(){return lf(),lf})):console.warn("Requires GSAP 3.11.0 or later"),lf(),On(dn,"scroll",Eo);var n=cn.style,i=n.borderTopStyle,s=Xt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ir(cn),Rn.m=Math.round(o.top+Rn.sc())||0,ai.m=Math.round(o.left+ai.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),zl=setInterval(Kp,250),Xt.delayedCall(.5,function(){return kl=0}),On(dn,"touchcancel",dr),On(cn,"touchstart",dr),Vl(On,dn,"pointerdown,touchstart,mousedown",qp),Vl(On,dn,"pointerup,touchend,mouseup",Yp),xh=Xt.utils.checkPrefix("transform"),cc.push(xh),bo=Xn(),Dc=Xt.delayedCall(.2,Gs).pause(),wo=[dn,"visibilitychange",function(){var c=Xe.innerWidth,f=Xe.innerHeight;dn.hidden?(Vp=c,Gp=f):(Vp!==c||Gp!==f)&&Da()},dn,"DOMContentLoaded",Gs,Xe,"load",Gs,Xe,"resize",Da],Hl(On),Fe.forEach(function(c){return c.enable(0,1)}),a=0;a<Ve.length;a+=3)Gl(Un,Ve[a],Ve[a+1]),Gl(Un,Ve[a],Ve[a+2])}},r.config=function(n){"limitCallbacks"in n&&(sf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(zl)||(zl=i)&&setInterval(Kp,i),"ignoreMobileResize"in n&&(yh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(Un)||Hl(On,n.autoRefreshEvents||"none"),d_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=di(n),o=Ve.indexOf(s),a=to(s);~o&&Ve.splice(o,a?6:2),i&&(a?xr.unshift(Xe,i,cn,i,er,i):xr.unshift(s,i))},r.clearMatchMedia=function(n){Fe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(bi(n)?di(n):n).getBoundingClientRect(),a=o[s?$s:js]*i||0;return s?o.right-a>0&&o.left+a<Xe.innerWidth:o.bottom-a>0&&o.top+a<Xe.innerHeight},r.positionInViewport=function(n,i,s){bi(n)&&(n=di(n));var o=n.getBoundingClientRect(),a=o[s?$s:js],c=i==null?a/2:i in Nc?Nc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/Xe.innerWidth:(o.top+c)/Xe.innerHeight},r.killAll=function(n){if(Fe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=eo.killAll||[];eo={},i.forEach(function(s){return s()})}},r}();Be.version="3.12.5";Be.saveStyles=function(r){return r?tl(r).forEach(function(t){if(t&&t.style){var e=Ei.indexOf(t);e>=0&&Ei.splice(e,5),Ei.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Xt.core.getCache(t),Sh())}}):Ei};Be.revert=function(r,t){return hd(!r,t)};Be.create=function(r,t){return new Be(r,t)};Be.refresh=function(r){return r?Da():(bo||Be.register())&&Gs(!0)};Be.update=function(r){return++Ve.cache&&Hr(r===!0?2:0)};Be.clearScrollMemory=b_;Be.maxScroll=function(r,t){return _r(r,t?ai:Rn)};Be.getScrollFunc=function(r,t){return vs(di(r),t?ai:Rn)};Be.getById=function(r){return Th[r]};Be.getAll=function(){return Fe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Be.isScrolling=function(){return!!qi};Be.snapDirectional=fd;Be.addEventListener=function(r,t){var e=eo[r]||(eo[r]=[]);~e.indexOf(t)||e.push(t)};Be.removeEventListener=function(r,t){var e=eo[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Be.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(f,d){var m=[],g=[],p=Xt.delayedCall(i,function(){d(m,g),m=[],g=[]}).pause();return function(M){m.length||p.restart(!0),m.push(M.trigger),g.push(M),s<=m.length&&p.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&li(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return li(s)&&(s=s(),On(Be,"refresh",function(){return s=t.batchMax()})),tl(r).forEach(function(c){var f={};for(a in n)f[a]=n[a];f.trigger=c,e.push(Be.create(f))}),e};var nm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},uf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Mn.isTouch?" pinch-zoom":""):"none",t===er&&r(cn,e)},$l={auto:1,scroll:1},zb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Xt.core.getCache(s),a=Xn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==cn&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($l[(c=ki(s)).overflowY]||$l[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!to(s)&&($l[(c=ki(s)).overflowY]||$l[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},C_=function(t,e,n,i){return Mn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&zb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&On(dn,Mn.eventTypes[0],rm,!1,!0)},onDisable:function(){return Un(dn,Mn.eventTypes[0],rm,!0)}})},kb=/(input|label|select|textarea)/i,im,rm=function(t){var e=kb.test(t.target.tagName);(e||im)&&(t._gsapAllow=!0,im=e)},Hb=function(t){Fs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,c,f=di(t.target)||er,d=Xt.core.globals().ScrollSmoother,m=d&&d.get(),g=is&&(t.content&&di(t.content)||m&&t.content!==!1&&!m.smooth()&&m.content()),p=vs(f,Rn),M=vs(f,ai),S=1,x=(Mn.isTouch&&Xe.visualViewport?Xe.visualViewport.scale*Xe.visualViewport.width:Xe.outerWidth)/Xe.innerWidth,v=0,P=li(i)?function(){return i(a)}:function(){return i||2.8},w,C,O=C_(f,t.type,!0,s),I=function(){return C=!1},h=dr,B=dr,V=function(){c=_r(f,Rn),B=ka(is?1:0,c),n&&(h=ka(0,_r(f,ai))),w=Ks},b=function(){g._gsap.y=Ra(parseFloat(g._gsap.y)+p.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},D=function(){if(C){requestAnimationFrame(I);var rt=Ra(a.deltaY/2),Mt=B(p.v-rt);if(g&&Mt!==p.v+p.offset){p.offset=Mt-p.v;var z=Ra((parseFloat(g&&g._gsap.y)||0)-p.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+z+", 0, 1)",g._gsap.y=z+"px",p.cacheID=Ve.cache,Hr()}return!0}p.offset&&b(),C=!0},W,q,lt,dt,it=function(){V(),W.isActive()&&W.vars.scrollY>c&&(p()>c?W.progress(1)&&p(c):W.resetTo("scrollY",c))};return g&&Xt.set(g,{y:"+=0"}),t.ignoreCheck=function(ot){return is&&ot.type==="touchmove"&&D()||S>1.05&&ot.type!=="touchstart"||a.isGesturing||ot.touches&&ot.touches.length>1},t.onPress=function(){C=!1;var ot=S;S=Ra((Xe.visualViewport&&Xe.visualViewport.scale||1)/x),W.pause(),ot!==S&&uf(f,S>1.01?!0:n?!1:"x"),q=M(),lt=p(),V(),w=Ks},t.onRelease=t.onGestureStart=function(ot,rt){if(p.offset&&b(),!rt)dt.restart(!0);else{Ve.cache++;var Mt=P(),z,wt;n&&(z=M(),wt=z+Mt*.05*-ot.velocityX/.227,Mt*=nm(M,z,wt,_r(f,ai)),W.vars.scrollX=h(wt)),z=p(),wt=z+Mt*.05*-ot.velocityY/.227,Mt*=nm(p,z,wt,_r(f,Rn)),W.vars.scrollY=B(wt),W.invalidate().duration(Mt).play(.01),(is&&W.vars.scrollY>=c||z>=c-1)&&Xt.to({},{onUpdate:it,duration:Mt})}o&&o(ot)},t.onWheel=function(){W._ts&&W.pause(),Xn()-v>1e3&&(w=0,v=Xn())},t.onChange=function(ot,rt,Mt,z,wt){if(Ks!==w&&V(),rt&&n&&M(h(z[2]===rt?q+(ot.startX-ot.x):M()+rt-z[1])),Mt){p.offset&&b();var de=wt[2]===Mt,Se=de?lt+ot.startY-ot.y:p()+Mt-wt[1],ut=B(Se);de&&Se!==ut&&(lt+=ut-Se),p(ut)}(Mt||rt)&&Hr()},t.onEnable=function(){uf(f,n?!1:"x"),Be.addEventListener("refresh",it),On(Xe,"resize",it),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=M.smooth=!1),O.enable()},t.onDisable=function(){uf(f,!0),Un(Xe,"resize",it),Be.removeEventListener("refresh",it),O.kill()},t.lockAxis=t.lockAxis!==!1,a=new Mn(t),a.iOS=is,is&&!p()&&p(1),is&&Xt.ticker.add(dr),dt=a._dc,W=Xt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:A_(p,p(),function(){return W.pause()})},onUpdate:Hr,onComplete:dt.vars.onComplete}),a};Be.sort=function(r){return Fe.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Be.observe=function(r){return new Mn(r)};Be.normalizeScroll=function(r){if(typeof r>"u")return ii;if(r===!0&&ii)return ii.enable();if(r===!1){ii&&ii.kill(),ii=r;return}var t=r instanceof Mn?r:Hb(r);return ii&&ii.target===t.target&&ii.kill(),to(t.target)&&(ii=t),t};Be.core={_getVelocityProp:vh,_inputObserver:C_,_scrollers:Ve,_proxies:xr,bridge:{ss:function(){qi||no("scrollStart"),qi=Xn()},ref:function(){return Wn}}};__()&&Xt.registerPlugin(Be);function Vb(){[...document.querySelectorAll("path.path-anim")].forEach(t=>{const e=t.closest("svg"),n=t.dataset.pathTo;Or.timeline({scrollTrigger:{trigger:e,start:"top 90%",end:"bottom 20%",scrub:!0}}).to(t,{ease:"none",attr:{d:n}})})}function Gb(){$(".text-reveal-on-scroll").toArray().forEach(t=>{Or.to(t,{scrollTrigger:{trigger:t,start:"top 90%",end:"bottom 20%",scrub:!0},y:0,ease:"power3.out"})})}function Wb(r){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),r.scrollTo(this.getAttribute("href"))})})}function Xb(){$("#home").css("min-height",window.innerHeight)}function qb(){const r=new cE({lerp:.1,wheelMultiplier:.5});function t(e){r.raf(e),requestAnimationFrame(t)}requestAnimationFrame(t),Or.registerPlugin(Be),Wb(r),Gb(),Vb(),Xb()}let wh,Ah;function Yb(r){ee.getJSON("/portfolio/json/projects.json",function(t){var e=t.projects;r.append('<div class="spacer"></div>'),ee.each(e,function(n,i){var s;n===0?s='<div class="project-card active-project" data-link="'+i.link+'">':s='<div class="project-card" data-link="'+i.link+'">',s+='<div class="img-text-cont"><div class="img-container text-box">',s+='<div class="date-cont black-glass">'+i.date+"</div>",s+='<img src="'+i.image+'" alt="'+i.title+'">',s+='</div><div class="txt-container">',s+='<h3 class="text-box">'+i.title+"</h3>",s+='<p class="text-box">'+i.description+"</p>",s+='</div></div><div class="language-bar">',ee.each(i.languages,function(o,a){s+='<div class="language-text">'+a+"</div>"}),s+='<div class="github-button">See on Github</div></div></div>',r.append(ee(s))}),r.append('<div class="spacer"></div>')})}function $b(r){new ResizeObserver(e=>{for(let n of e)Be.refresh()}).observe(r)}function jb(r){ee(r).hasClass("active-project")&&window.open(ee(r).data("link"),"_blank")}function sm(r,t){var e=window.innerWidth/2,n=r.getBoundingClientRect().left,i=r.getBoundingClientRect().right-r.getBoundingClientRect().left,s=n+i/2;t[0].scrollBy({top:0,left:s-e,behavior:"smooth"})}function om(r){var t=window.innerWidth/2;const e=r.find(".project-card");let n=1/0,i=null;e.each(function(){const s=ee(this);var o=s.offset().left+s.outerWidth()/2;const a=Math.abs(t-o);a<n&&(n=a,i=s)}),e.removeClass("active-project"),i&&i.addClass("active-project")}function am(r,t,e,n,i,s,o){t.hide(),ee(r).hasClass("active-project")?e.show():s>o?n.show():i.show()}function Kb(){var r=ee("#following-cursor"),t=window.innerWidth<=768;t&&r.css("display","none"),ee(window).on("mousemove",e=>{wh=e.clientX,Ah=e.clientY,Or.to(r,.2,{x:wh,y:Ah})})}function Jb(r){var t=window.innerWidth/2,e=ee("#following-cursor");const n=e.find(".cursor-icon"),i=e.find("#following-cursor-right"),s=e.find("#following-cursor-left"),o=e.find("#following-cursor-git");r.on("mouseenter","div.project-card",function(a){ee(this).addClass("hovered"),Or.to(e,1.5,{scale:1,rotate:0,ease:"elastic.out(1,0.3)",overwrite:"auto"}),Or.to(n,.4,{scale:1,ease:"power3.out",overwrite:"auto"});var c=ee(this).offset().left+ee(this).outerWidth()/2;am(this,n,o,s,i,t,c)}),r.on("mouseleave","div.project-card",function(a){ee(this).removeClass("hovered"),Or.to(e,.2,{scale:.2,rotate:45,ease:"back.in(5)",overwrite:"auto"}),Or.to(n,.4,{scale:0,ease:"power3.in",overwrite:"true"})}),r.on("mousemove","div.project-card",function(a){var c=ee(this).offset().left+ee(this).outerWidth()/2;am(this,n,o,s,i,t,c)})}function Zb(r,t,e){r.find(".project-card").each(function(){const n=this.getBoundingClientRect();t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom?ee(this).hasClass("hovered")||(ee(this).trigger("mouseenter"),ee(this).addClass("hovered")):ee(this).hasClass("hovered")&&(ee(this).trigger("mouseleave"),ee(this).removeClass("hovered"))})}function Qb(){const r=ee(".project-list");Yb(r),$b(r[0]);const t=ee(".project-list-container");t.on("click","div.project-card",function(){jb(this),sm(this,t)}),t.on("scroll",function(e){om(t),Zb(t,wh,Ah)}),ee(window).on("resize",function(){om(t),sm(ee(".active-project")[0],t)}),Kb(),Jb(t)}function tw(r){ee.getJSON("/portfolio/json/skills.json",function(t){ee.each(r,function(e,n){var i=t.skills[e];n.append("<h3>"+i.title+"</h3>");var s='<ul class="tabs"><li class="hover"></li>';ee.each(i.categories,function(o,a){o==0?s+='<li class="tab active" data-tab="tab_'+o.toString()+'">'+a.name+"</li>":s+='<li class="tab" data-tab="tab_'+o.toString()+'">'+a.name+"</li>"}),n.append(ee(s+"</ul>")),n.append(ee('<div class="tab-content">')),ee.each(i.categories,function(o,a){var c='<div id="tab_'+o.toString()+'" class="tab-slide">';ee.each(a.content,function(f,d){c+='<div class="svg-container">',c+='<img src="/portfolio/svg/'+d.svg+'.svg" alt="'+d.name+'">',c+='<span class="black-glass">'+d.name+"</span></div>"}),n.append(ee(c+"</div>"))})})})}function Ch(r,t,e,n,i){r.css("left",e),r.css("top",t),r.width(n),r.height(i)}function ew(r,t){var e=t.find(".hover"),n=t.find(".tab-slide"),i=t.find(".tab");i.removeClass("active"),r.addClass("active"),Ch(e,r.position().top,r.position().left,r.outerWidth(),r.outerHeight()-2),n.hide(),t.find("#"+r.data("tab")).show();var s=t.outerHeight(),o=t.css({height:"auto"}).outerHeight();t.css({height:s}).animate({height:o},300)}function nw(r){ee.each(r,function(t,e){var n=new MutationObserver(function(i,s){var o=e.find(".active"),a=e.find(".hover"),c=e.find(".tab-slide"),f=e.find(".tab");o.length&&a.length&&c.length&&f.length&&(c.hide(),Ch(a,o.position().top,o.position().left,o.outerWidth(),o.outerHeight()-2),e.find("#"+o.data("tab")).show(),f.on("click",function(){e.css("height",e.outerHeight()+"px"),ew(ee(this),e)}),ee(window).on("resize",function(){o=e.find(".active"),e.css("height",e.css({height:"auto"}).outerHeight()+"px"),Ch(a,o.position().top,o.position().left,o.outerWidth(),o.outerHeight())}),s.disconnect())});n.observe(e[0],{childList:!0,subtree:!0})})}function iw(r){ee.each(r,function(t,e){new ResizeObserver(i=>{for(let s of i)Be.refresh()}).observe(e[0])})}function rw(){const r=[ee("#skills").find("#specialization"),ee("#skills").find("#others")];tw(r),iw(r),nw(r)}function sw(){var r=ee("#circle-text"),t=ee("#circle-text textPath");ee(".social-link").hover(function(){t.text((this.id+" ").repeat(Math.floor(100/(this.id.length+1))))}),ee(".contact-info").hover(function(){},function(){r.css("fill","var(--purple)"),t.text("cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct cont@ct")})}function ow(){sw()}window.$=ee;function aw(){qb(),tE(),Qb(),rw(),ow()}ee(document).ready(aw);
