"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var ut=require("form-data"),lt=require("url");function Fe(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var Ie=Fe(ut),ft=Fe(lt);function Me(e,t){return function(){return e.apply(t,arguments)}}const me=Object.prototype.toString,je=(e=>t=>{const r=me.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),U=e=>(e=e.toLowerCase(),t=>je(t)===e),C=e=>Array.isArray(e),v=e=>typeof e=="undefined",Re=e=>e!==null&&!v(e)&&e.constructor!==null&&!v(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e),g=U("ArrayBuffer"),ke=e=>{let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&g(e.buffer),t},D=e=>typeof e=="string",Ee=e=>typeof e=="number",F=e=>e!==null&&typeof e=="object";function L(e){if(je(e)!=="object")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}const He=U("Date"),ze=U("File"),ve=U("Blob"),ye=U("FileList"),M=e=>me.call(e)==="[object Function]",ee=e=>F(e)&&M(e.pipe),Q=e=>{var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||me.call(e)===t||M(e.toString)&&e.toString()===t)},we=U("URLSearchParams"),te=e=>{var t;return(t=e==null?void 0:e.trim())!=null?t:e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},K=()=>{var e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"};function _(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),C(e))for(let r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function I(...e){const t={};function r(n,s){L(t[s])&&L(n)?t[s]=I(t[s],n):L(n)?t[s]=I({},n):C(n)?t[s]=n.slice():t[s]=n}for(let n=0,s=e.length;n<s;n++)_(e,r);return t}const ce=(e,t,r)=>(_(t,function(s,o){r&&typeof s=="function"?e[o]=Me(s,r):e[o]=s}),e),de=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ct=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},ae=(e,t,r,n)=>{let s,o,a,u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)a=s[o],(!n||n(a,e,t))&&!u[a]&&(t[a]=e[a],u[a]=!0);e=r!==null&&Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},re=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Ve=e=>{if(!e)return null;if(C(e))return e;let t=e.length;if(!Ee(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Je=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),We=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){let o=s.value;t.call(e,o[0],o[1])}},Ke=(e,t)=>{for(var r,n=[];(r=e.exec(t))!==null;)n.push(r);return n},be=U("HTMLFormElement"),ge=function(t){return function(r,n){return t.call(r,n)}}(Object.prototype.hasOwnProperty);var dt=Object.freeze(Object.defineProperty({__proto__:null,kindOfTest:U,isArray:C,isUndefined:v,isBuffer:Re,isArrayBuffer:g,isArrayBufferView:ke,isString:D,isNumber:Ee,isObject:F,isPlainObject:L,isDate:He,isFile:ze,isBlob:ve,isFileList:ye,isFunction:M,isStream:ee,isFormData:Q,isURLSearchParams:we,trim:te,isStandardBrowserEnv:K,forEach:_,merge:I,extend:ce,stripBOM:de,inherits:ct,toFlatObject:ae,endsWith:re,toArray:Ve,isTypedArray:Je,forEachEntry:We,matchAll:Ke,isHTMLForm:be,hasOwnProperty:ge},Symbol.toStringTag,{value:"Module"}));const he=class extends Error{constructor(e="",t,r,n,s){var o;super(),this.message=e,this.name="AxiosError",v(t)&&(this.code=t),v(r)&&(this.config=r),v(n)&&(this.request=n),v(s)&&(this.response=s),Error.captureStackTrace?(o=Error.captureStackTrace)==null||o.call(Error,this,this.constructor):this.stack=new Error().stack}static from(e,t,r,n,s,o){const a=Object.create(he.prototype);return ae(e,a,u=>u!==Error.prototype),he.call(a,e.message,t,r,n,s),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}};let l=he;l.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";l.ERR_BAD_OPTION="ERR_BAD_OPTION";l.ECONNABORTED="ECONNABORTED";l.ETIMEDOUT="ETIMEDOUT";l.ERR_NETWORK="ERR_NETWORK";l.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";l.ERR_DEPRECATED="ERR_DEPRECATED";l.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";l.ERR_BAD_REQUEST="ERR_BAD_REQUEST";l.ERR_CANCELED="ERR_CANCELED";l.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";l.ERR_INVALID_UR="ERR_INVALID_UR";Object.defineProperty(l.prototype,"isAxiosError",{value:!0});function pe(e){return L(e)||C(e)}function Qe(e){return re(e,"[]")?e.slice(0,-2):e}function Ne(e,t,r){return e?e.concat(t).map(function(s,o){return s=Qe(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function ht(e){return C(e)&&!e.some(pe)}var pt=ae(dt,{},null,function(t){return/^is[A-Z]/.test(t)});function mt(e){return e&&M(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function oe(e,t,r){if(!F(e))throw new TypeError("target must be an object");t=t||new(Ie.default||FormData),r=ae(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,m){return!v(m[d])});var n=r.metaTokens,s=r.visitor||h,o=r.dots,a=r.indexes,u=r.Blob||typeof Blob!="undefined"&&Blob,f=u&&mt(t);if(!M(s))throw new TypeError("visitor must be a function");function i(c){if(c===null)return"";if(He(c))return c.toISOString();if(!f&&ve(c))throw new l("Blob is not supported. Use a Buffer instead.");return g(c)||Je(c)?f&&typeof Blob=="function"?new Blob([c]):Buffer.from(c):c}function h(c,d,m){var R=c;if(c&&!m&&typeof c=="object"){if(re(d,"{}"))d=n?d:d.slice(0,-2),c=JSON.stringify(c);else if(C(c)&&ht(c)||ye(c)||re(d,"[]")&&(R=Ve(c)))return d=Qe(d),R.forEach(function(x,q){!v(x)&&t.append(a===!0?Ne([d],q,o):a===null?d:d+"[]",i(x))}),!1}return pe(c)?!0:(t.append(Ne(m,d,o),i(c)),!1)}var y=[],w=Object.assign(pt,{defaultVisitor:h,convertValue:i,isVisitable:pe});function b(c,d){if(!v(c)){if(y.indexOf(c)!==-1)throw Error("Circular reference detected in "+d.join("."));y.push(c),_(c,function(R,E){var x=!v(R)&&s.call(t,R,D(E)?E.trim():E,d,w);x===!0&&b(R,d?d.concat(E):[E])}),y.pop()}}if(!F(e))throw new TypeError("data must be an object");return b(e),t}function Ce(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,function(n){return t[n]})}function $e(e,t){this._pairs=[],e&&oe(e,this,t)}var Xe=$e.prototype;Xe.append=function(t,r){this._pairs.push([t,r])};Xe.toString=function(t){var r=t?function(n){return t.call(this,n,Ce)}:Ce;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ne(e,t,r){if(!t)return e;var n=e.indexOf("#");n!==-1&&(e=e.slice(0,n));var s=r&&r.encode||Rt,o=we(t)?t.toString():new $e(t,r).toString(s);return o&&(e+=(e.indexOf("?")===-1?"?":"&")+o),e}class Be{constructor(){this.handlers=[]}use(t,r,n={}){const{synchronous:s=!1,runWhen:o=void 0}=n;return this.handlers.push({fulfilled:t,rejected:r,synchronous:s,runWhen:o}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_(this.handlers,r=>{r!==null&&t(r)})}}function se(e,t){_(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})}var Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Et=ft.default.URLSearchParams,H={isNode:!0,classes:{URLSearchParams:Et,FormData:Ie.default,Blob:typeof Blob!="undefined"&&Blob||null},protocols:["http","https","file","data"]};function vt(e,t){return oe(e,new H.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return Re(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yt(e){return Ke(/\w+|\[(\w*)]/g,e).map(function(t){return t[0]==="[]"?"":t[1]||t[0]})}function wt(e){var t={},r=Object.keys(e),n,s=r.length,o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Ye(e){function t(n,s,o,a){var u=n[a++],f=Number.isFinite(+u),i=a>=n.length;if(u=!u&&C(o)?o.length:u,i)return ge(o,u)?o[u]=[o[u],s]:o[u]=s,!f;(!o[u]||!F(o[u]))&&(o[u]=[]);var h=t(n,s,o[u],a);return h&&C(o[u])&&(o[u]=wt(o[u])),!f}if(Q(e)&&M(e.entries)){var r={};return We(e,function(n,s){t(yt(n),s,r,0)}),r}return null}function W(e,t,r){const{validateStatus:n}=r.config;!r.status||!n||n(r.status)?e(r):t(new l("Request failed with status code "+r.status,[l.ERR_BAD_REQUEST,l.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var bt=K()?function(){return{write:function(r,n,s,o,a,u){var f=[];f.push(r+"="+encodeURIComponent(n)),Ee(s)&&f.push("expires="+new Date(s).toGMTString()),D(o)&&f.push("path="+o),D(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){var n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Tt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ot(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Oe(e,t){return e&&!Tt(t)?Ot(e,t):t}var _t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];function St(e){var t={},r,n,s;return e&&_(e.split(`
`),function(a){if(s=a.indexOf(":"),r=te(a.slice(0,s)).toLowerCase(),n=te(a.slice(s+1)),r){if(t[r]&&_t.indexOf(r)>=0)return;r==="set-cookie"?t[r]=(t[r]?t[r]:[]).concat([n]):t[r]=t[r]?t[r]+", "+n:n}}),t}var At=K()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),n;function s(o){var a=o;return t&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(a){var u=D(a)?s(a):a;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();class V extends l{constructor(t="canceled",r,n){super(t,l.ERR_CANCELED,r,n)}}Object.defineProperty(V.prototype,"__CANCEL__",{value:!0});function Ge(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function xt(e){return new Promise(function(r,n){var s=e.data,o=e.headers,a=e.responseType,u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}Q(s)&&K()&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+y)}var w=Oe(e.baseURL,e.url);i.open(e.method.toUpperCase(),ne(w,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function b(){if(!!i){var m="getAllResponseHeaders"in i?St(i.getAllResponseHeaders()):null,R=!a||a==="text"||a==="json"?i.responseText:i.response,E={data:R,status:i.status,statusText:i.statusText,headers:m,config:e,request:i};W(function(q){r(q),f()},function(q){n(q),f()},E),i=null}}if("onloadend"in i?i.onloadend=b:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(b)},i.onabort=function(){!i||(n(new l("Request aborted",l.ECONNABORTED,e,i)),i=null)},i.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,i)),i=null},i.ontimeout=function(){var R=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||Te;e.timeoutErrorMessage&&(R=e.timeoutErrorMessage),n(new l(R,E.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,i)),i=null},K()){var c=(e.withCredentials||At(w))&&e.xsrfCookieName?bt.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}"setRequestHeader"in i&&_(o,function(R,E){typeof s=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:i.setRequestHeader(E,R)}),v(e.withCredentials)||(i.withCredentials=!!e.withCredentials),a&&a!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(u=function(m){!i||(n(!m||m.type?new V(null,e,req):m),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u))),s||(s=null);var d=Ge(w);if(d&&H.protocols.indexOf(d)===-1){n(new l("Unsupported protocol "+d+":",l.ERR_BAD_REQUEST,e));return}i.send(s)})}const _e="1.0.0-alpha.1";var Pt=/^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;function Nt(e,t,r){var n=r&&r.Blob||H.classes.Blob,s=Ge(e);if(t===void 0&&n&&(t=!0),s==="data"){e=s.length?e.slice(s.length+1):e;var o=Pt.exec(e);if(!o)throw new l("Invalid URL",l.ERR_INVALID_URL);var a=o[1],u=o[2],f=o[3],i=Buffer.from(decodeURIComponent(f),u?"base64":"utf8");if(t){if(!n)throw new l("Blob is not supported",l.ERR_NOT_SUPPORT);return new n([i],{type:a})}return i}throw new l("Unsupported protocol "+s,l.ERR_NOT_SUPPORT)}const Ct=require("stream"),{getProxyForUrl:Bt}=require("proxy-from-env"),Lt=require("follow-redirects/http"),Dt=require("follow-redirects/https"),Ut=require("http"),qt=require("https"),Ze=require("url"),Ft=require("zlib");var It=/https:?/,Le=H.protocols.map(function(e){return e+":"});function Mt(e){e.beforeRedirects.proxy&&e.beforeRedirects.proxy(e),e.beforeRedirects.config&&e.beforeRedirects.config(e)}function et(e,t,r){var n=t;if(!n&&n!==!1){var s=Bt(r);s&&(n=Ze.parse(s),n.host=n.hostname)}if(n){if(n.auth){(n.auth.username||n.auth.password)&&(n.auth=(n.auth.username||"")+":"+(n.auth.password||""));var o=Buffer.from(n.auth,"utf8").toString("base64");e.headers["Proxy-Authorization"]="Basic "+o}e.headers.host=e.hostname+(e.port?":"+e.port:""),e.hostname=n.host,e.host=n.host,e.port=n.port,e.path=r,n.protocol&&(e.protocol=n.protocol)}e.beforeRedirects.proxy=function(u){et(u,t,u.href)}}function jt(e){return new Promise(function(r,n){var s;function o(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}var a=function(p){o(),r(p)},u=!1,f=function(p){o(),u=!0,n(p)},i=e.data,h=e.responseType,y=e.responseEncoding,w=e.method.toUpperCase(),b=Oe(e.baseURL,e.url),c=Ze.parse(b),d=c.protocol||Le[0];if(d==="data:"){var m;if(w!=="GET")return W(a,f,{status:405,statusText:"method not allowed",headers:{},config:e});try{m=Nt(e.url,h==="blob",{Blob:e.env&&e.env.Blob})}catch(O){throw l.from(O,l.ERR_BAD_REQUEST,e)}return h==="text"?(m=m.toString(y),(!y||y==="utf8")&&(i=de(m))):h==="stream"&&(m=Ct.Readable.from(m)),W(a,f,{data:m,status:200,statusText:"OK",headers:{},config:e})}if(Le.indexOf(d)===-1)return f(new l("Unsupported protocol "+d,l.ERR_BAD_REQUEST,e));var R=e.headers,E={};if(Object.keys(R).forEach(function(p){E[p.toLowerCase()]=p}),"user-agent"in E?R[E["user-agent"]]||delete R[E["user-agent"]]:R["User-Agent"]="axios/"+_e,Q(i)&&M(i.getHeaders))Object.assign(R,i.getHeaders());else if(i&&!ee(i)){if(!Buffer.isBuffer(i))if(g(i))i=Buffer.from(new Uint8Array(i));else if(D(i))i=Buffer.from(i,"utf-8");else return f(new l("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",l.ERR_BAD_REQUEST,e));if(e.maxBodyLength>-1&&i.length>e.maxBodyLength)return f(new l("Request body larger than maxBodyLength limit",l.ERR_BAD_REQUEST,e));E["content-length"]||(R["Content-Length"]=i.length)}var x=void 0;if(e.auth){var q=e.auth.username||"",st=e.auth.password||"";x=q+":"+st}if(!x&&c.auth){var Ae=c.auth.split(":"),at=Ae[0]||"",ot=Ae[1]||"";x=at+":"+ot}x&&E.authorization&&delete R[E.authorization];try{ne(c.path,e.params,e.paramsSerializer).replace(/^\?/,"")}catch(O){var X=new Error(O.message);X.config=e,X.url=e.url,X.exists=!0,f(X)}var A={path:ne(c.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:w,headers:R,agents:{http:e.httpAgent,https:e.httpsAgent},auth:x,protocol:d,beforeRedirect:Mt,beforeRedirects:{}};e.socketPath?A.socketPath=e.socketPath:(A.hostname=c.hostname,A.port=c.port,et(A,e.proxy,d+"//"+c.hostname+(c.port?":"+c.port:"")+A.path));var Y,ie=It.test(A.protocol);A.agent=ie?e.httpsAgent:e.httpAgent,e.transport?Y=e.transport:e.maxRedirects===0?Y=ie?qt:Ut:(e.maxRedirects&&(A.maxRedirects=e.maxRedirects),e.beforeRedirect&&(A.beforeRedirects.config=e.beforeRedirect),Y=ie?Dt:Lt),e.maxBodyLength>-1?A.maxBodyLength=e.maxBodyLength:A.maxBodyLength=1/0,e.insecureHTTPParser&&(A.insecureHTTPParser=e.insecureHTTPParser);var T=Y.request(A,function(p){if(!T.aborted){var P=p,G=p.req||T;if(e.decompress!==!1)switch(i&&i.length===0&&p.headers["content-encoding"]&&delete p.headers["content-encoding"],p.headers["content-encoding"]){case"gzip":case"compress":case"deflate":P=P.pipe(Ft.createUnzip()),delete p.headers["content-encoding"];break}var j={status:p.statusCode,statusText:p.statusMessage,headers:p.headers,config:e,request:G};if(h==="stream")j.data=P,W(a,f,j);else{var Z=[],Pe=0;P.on("data",function(N){Z.push(N),Pe+=N.length,e.maxContentLength>-1&&Pe>e.maxContentLength&&(u=!0,P.destroy(),f(new l("maxContentLength size of "+e.maxContentLength+" exceeded",l.ERR_BAD_RESPONSE,e,G)))}),P.on("aborted",function(){u||(P.destroy(),f(new l("maxContentLength size of "+e.maxContentLength+" exceeded",l.ERR_BAD_RESPONSE,e,G)))}),P.on("error",function(N){T.aborted||f(l.from(N,null,e,G))}),P.on("end",function(){try{var N=Z.length===1?Z[0]:Buffer.concat(Z);h!=="arraybuffer"&&(N=N.toString(y),(!y||y==="utf8")&&(N=de(N))),j.data=N}catch(it){f(l.from(it,null,e,j.request,j))}W(a,f,j)})}}});if(T.on("error",function(p){f(l.from(p,null,e,T))}),T.on("socket",function(p){p.setKeepAlive(!0,1e3*60)}),e.timeout){var xe=parseInt(e.timeout,10);if(isNaN(xe)){f(new l("error trying to parse `config.timeout` to int",l.ERR_BAD_OPTION_VALUE,e,T));return}T.setTimeout(xe,function(){T.abort();var p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",P=e.transitional||Te;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),f(new l(p,P.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,T))})}(e.cancelToken||e.signal)&&(s=function(O){T.aborted||(T.abort(),f(!O||O.type?new V(null,e,T):O))},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s))),ee(i)?i.on("error",function(p){f(l.from(p,e,null,T))}).pipe(T):T.end(i)})}var kt={"Content-Type":"application/x-www-form-urlencoded"};function De(e,t){!v(e)&&v(e["Content-Type"])&&(e["Content-Type"]=t)}function Ht(){var e;return typeof XMLHttpRequest!="undefined"?e=xt:typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]"&&(e=jt),e}function zt(e,t,r){if(D(e))try{return(t||JSON.parse)(e),te(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const J={transitional:Te,adapter:Ht(),transformRequest:[function(t,r){se(r,"Accept"),se(r,"Content-Type");var n=r&&r["Content-Type"]||"",s=n.indexOf("application/json")>-1,o=F(t);o&&be(t)&&(t=new FormData(t));var a=Q(t);if(a)return s&&s?JSON.stringify(Ye(t)):t;if(g(t)||Re(t)||ee(t)||ze(t)||ve(t))return t;if(ke(t))return t.buffer;if(we(t))return De(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var u;if(o){if(n.indexOf("application/x-www-form-urlencoded")!==-1)return vt(t,this.formSerializer).toString();if((u=ye(t))||n.indexOf("multipart/form-data")>-1){var f=this.env&&this.env.FormData;return oe(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(De(r,"application/json"),zt(t)):t}],transformResponse:[function(t){var r=this.transitional||J.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&D(t)&&(n&&!this.responseType||s)){var o=r&&r.silentJSONParsing,a=!o&&s;try{return JSON.parse(t)}catch(u){if(a)throw u.name==="SyntaxError"?l.from(u,l.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:H.classes.FormData,Blob:H.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_(["delete","get","head"],function(t){J.headers[t]={}});_(["post","put","patch"],function(t){J.headers[t]=I(kt)});function le(e,t,r,n){var s=this||J;return _(n,function(a){e=a.call(s,e,t,r)}),e}function tt(e){return!!(e&&e.__CANCEL__)}function fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new V}function Ue(e){fe(e),e.headers=e.headers||{},e.data=le.call(e,e.data,e.headers,null,e.transformRequest),se(e.headers,"Accept"),se(e.headers,"Content-Type"),e.headers=I(e.headers.common||{},e.headers[e.method]||{},e.headers),_(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||J.adapter;return t(e).then(function(n){return fe(e),n.data=le.call(e,n.data,n.headers,n.status,e.transformResponse),n},function(n){return tt(n)||(fe(e),n&&n.response&&(n.response.data=le.call(e,n.response.data,n.response.headers,n.response.status,e.transformResponse))),Promise.reject(n)})}function $(e,t){t=t||{};var r={};function n(i,h){return L(i)&&L(h)?I(i,h):L(h)?I({},h):C(h)?h.slice():h}function s(i){if(v(t[i])){if(!v(e[i]))return n(void 0,e[i])}else return n(e[i],t[i])}function o(i){if(!v(t[i]))return n(void 0,t[i])}function a(i){if(v(t[i])){if(!v(e[i]))return n(void 0,e[i])}else return n(void 0,t[i])}function u(i){if(i in t)return n(e[i],t[i]);if(i in e)return n(void 0,e[i])}var f={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return _(Object.keys(e).concat(Object.keys(t)),function(h){var y=f[h]||s,w=y(h);v(w)&&y!==u||(r[h]=w)}),r}var Se={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var qe={};Se.transitional=function(t,r,n){function s(o,a){return"[Axios v"+_e+"] Transitional option '"+o+"'"+a+(n?". "+n:"")}return function(o,a,u){if(t===!1)throw new l(s(a," has been removed"+(r?" in "+r:"")),l.ERR_DEPRECATED);return r&&!qe[a]&&(qe[a]=!0,console.warn(s(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,a,u):!0}};function Vt(e,t,r){if(typeof e!="object")throw new l("options must be an object",l.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),s=n.length;s-- >0;){var o=n[s],a=t[o];if(a){var u=e[o],f=u===void 0||a(u,o,e);if(f!==!0)throw new l("option "+o+" must be "+f,l.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new l("Unknown option "+o,l.ERR_BAD_OPTION)}}var rt={assertOptions:Vt,validators:Se},k=rt.validators;function B(e){this.defaults=e,this.interceptors={request:new Be,response:new Be}}B.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=$(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var n=r.transitional;n!==void 0&&rt.assertOptions(n,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1);var s=[],o=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(r)===!1||(o=o&&b.synchronous,s.unshift(b.fulfilled,b.rejected))});var a=[];this.interceptors.response.forEach(function(b){a.push(b.fulfilled,b.rejected)});var u;if(!o){var f=[Ue,void 0];for(Array.prototype.unshift.apply(f,s),f=f.concat(a),u=Promise.resolve(r);f.length;)u=u.then(f.shift(),f.shift());return u}for(var i=r;s.length;){var h=s.shift(),y=s.shift();try{i=h(i)}catch(w){y(w);break}}try{u=Ue(i)}catch(w){return Promise.reject(w)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};B.prototype.getUri=function(t){t=$(this.defaults,t);var r=Oe(t.baseURL,t.url);return ne(r,t.params,t.paramsSerializer)};_(["delete","get","head","options"],function(t){B.prototype[t]=function(r,n){return this.request($(n||{},{method:t,url:r,data:(n||{}).data}))}});_(["post","put","patch"],function(t){function r(n){return function(o,a,u){return this.request($(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}B.prototype[t]=r(),B.prototype[t+"Form"]=r(!0)});function z(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(s){t=s});var r=this;this.promise.then(function(n){if(!!r._listeners){for(var s=r._listeners.length;s-- >0;)r._listeners[s](n);r._listeners=null}}),this.promise.then=function(n){var s,o=new Promise(function(a){r.subscribe(a),s=a}).then(n);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new V(s,o,a),t(r.reason))})}z.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};z.prototype.subscribe=function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]};z.prototype.unsubscribe=function(t){if(!!this._listeners){var r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}};z.source=function(){var t,r=new z(function(s){t=s});return{token:r,cancel:t}};function Jt(e){return function(r){return e.apply(null,r)}}function Wt(e){return F(e)&&e.isAxiosError===!0}function nt(e){var t=new B(e),r=Me(B.prototype.request,t);return ce(r,B.prototype,t),ce(r,t),r.create=function(s){return nt($(e,s))},r}const S=nt(J);S.Axios=B;S.CanceledError=V;S.CancelToken=z;S.isCancel=tt;S.VERSION=_e;S.toFormData=oe;S.AxiosError=l;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Jt;S.isAxiosError=Wt;S.formToJSON=function(e){return Ye(be(e)?new FormData(e):e)};exports.axios=S;
