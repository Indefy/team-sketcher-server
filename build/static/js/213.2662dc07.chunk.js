/*! For license information please see 213.2662dc07.chunk.js.LICENSE.txt */
(self.webpackChunkteam_sketcher=self.webpackChunkteam_sketcher||[]).push([[213],{6213:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||u()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,m=Object.setPrototypeOf,p=Object.isFrozen,f=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,_="undefined"!==typeof Reflect&&Reflect,b=_.apply,v=_.construct;b||(b=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),v||(v=function(e,t){return r(e,o(t))});var T=D(Array.prototype.forEach),N=D(Array.prototype.pop),E=D(Array.prototype.push),A=D(String.prototype.toLowerCase),S=D(String.prototype.toString),w=D(String.prototype.match),k=D(String.prototype.replace),x=D(String.prototype.indexOf),C=D(String.prototype.trim),O=D(RegExp.prototype.test),L=M(TypeError),R=D(Number.isNaN);function D(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(e,t,r)}}function M(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(e,n)}}function I(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:A,m&&m(e,null);for(var o=t.length;o--;){var a=t[o];if("string"===typeof a){var i=n(a);i!==a&&(p(t)||(t[o]=i),a=i)}e[a]=!0}return e}function F(e){var t,n=y(null);for(t in e)!0===b(s,e,[t])&&(n[t]=e[t]);return n}function U(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return D(n.get);if("function"===typeof n.value)return D(n.value)}e=f(e)}function r(e){return console.warn("fallback value for",e),null}return r}var H=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),z=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),B=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),j=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),G=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=h(["#text"]),q=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),V=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),X=g(/<%[\w\W]*|[\w\W]*%>/gm),Z=g(/\${[\w\W]*}/gm),J=g(/^data-[\-\w.\u00B7-\uFFFF]/),Q=g(/^aria-[\-\w]+$/),ee=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),te=g(/^(?:\w+script|data):/i),ne=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=g(/^html$/i),oe=g(/^[a-z][.\w]*(-[.\w]+)+$/i),ae=function(){return"undefined"===typeof window?null:window},ie=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function le(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae(),n=function(e){return le(e)};if(n.version="2.5.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,p=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,f=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=u.prototype,_=U(y,"cloneNode"),b=U(y,"nextSibling"),v=U(y,"childNodes"),D=U(y,"parentNode");if("function"===typeof l){var M=a.createElement("template");M.content&&M.content.ownerDocument&&(a=M.content.ownerDocument)}var ce=ie(g,r),ue=ce?ce.createHTML(""):"",se=a,me=se.implementation,pe=se.createNodeIterator,fe=se.createDocumentFragment,de=se.getElementsByTagName,he=r.importNode,ge={};try{ge=F(a).documentMode?a.documentMode:{}}catch(Ht){}var ye={};n.isSupported="function"===typeof D&&me&&void 0!==me.createHTMLDocument&&9!==ge;var _e,be,ve=V,Te=X,Ne=Z,Ee=J,Ae=Q,Se=te,we=ne,ke=oe,xe=ee,Ce=null,Oe=I({},[].concat(o(H),o(z),o(P),o(j),o(W))),Le=null,Re=I({},[].concat(o(q),o(Y),o($),o(K))),De=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Ie=null,Fe=!0,Ue=!0,He=!1,ze=!0,Pe=!1,Be=!0,je=!1,Ge=!1,We=!1,qe=!1,Ye=!1,$e=!1,Ke=!0,Ve=!1,Xe="user-content-",Ze=!0,Je=!1,Qe={},et=null,tt=I({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,rt=I({},["audio","video","img","source","image","track"]),ot=null,at=I({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",lt="http://www.w3.org/2000/svg",ct="http://www.w3.org/1999/xhtml",ut=ct,st=!1,mt=null,pt=I({},[it,lt,ct],S),ft=["application/xhtml+xml","text/html"],dt="text/html",ht=null,gt=255,yt=a.createElement("form"),_t=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){ht&&ht===t||(t&&"object"===e(t)||(t={}),t=F(t),_e=_e=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?dt:t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===_e?S:A,Ce="ALLOWED_TAGS"in t?I({},t.ALLOWED_TAGS,be):Oe,Le="ALLOWED_ATTR"in t?I({},t.ALLOWED_ATTR,be):Re,mt="ALLOWED_NAMESPACES"in t?I({},t.ALLOWED_NAMESPACES,S):pt,ot="ADD_URI_SAFE_ATTR"in t?I(F(at),t.ADD_URI_SAFE_ATTR,be):at,nt="ADD_DATA_URI_TAGS"in t?I(F(rt),t.ADD_DATA_URI_TAGS,be):rt,et="FORBID_CONTENTS"in t?I({},t.FORBID_CONTENTS,be):tt,Me="FORBID_TAGS"in t?I({},t.FORBID_TAGS,be):{},Ie="FORBID_ATTR"in t?I({},t.FORBID_ATTR,be):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Fe=!1!==t.ALLOW_ARIA_ATTR,Ue=!1!==t.ALLOW_DATA_ATTR,He=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ze=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Be=!1!==t.SAFE_FOR_XML,je=t.WHOLE_DOCUMENT||!1,qe=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,$e=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,Ve=t.SANITIZE_NAMED_PROPS||!1,Ze=!1!==t.KEEP_CONTENT,Je=t.IN_PLACE||!1,xe=t.ALLOWED_URI_REGEXP||xe,ut=t.NAMESPACE||ct,De=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&_t(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(De.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&_t(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(De.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(De.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Ue=!1),Ye&&(qe=!0),Qe&&(Ce=I({},o(W)),Le=[],!0===Qe.html&&(I(Ce,H),I(Le,q)),!0===Qe.svg&&(I(Ce,z),I(Le,Y),I(Le,K)),!0===Qe.svgFilters&&(I(Ce,P),I(Le,Y),I(Le,K)),!0===Qe.mathMl&&(I(Ce,j),I(Le,$),I(Le,K))),t.ADD_TAGS&&(Ce===Oe&&(Ce=F(Ce)),I(Ce,t.ADD_TAGS,be)),t.ADD_ATTR&&(Le===Re&&(Le=F(Le)),I(Le,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&I(ot,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(et===tt&&(et=F(et)),I(et,t.FORBID_CONTENTS,be)),Ze&&(Ce["#text"]=!0),je&&I(Ce,["html","head","body"]),Ce.table&&(I(Ce,["tbody"]),delete Me.tbody),h&&h(t),ht=t)},vt=I({},["mi","mo","mn","ms","mtext"]),Tt=I({},["foreignobject","annotation-xml"]),Nt=I({},["title","style","font","a","script"]),Et=I({},z);I(Et,P),I(Et,B);var At=I({},j);I(At,G);var St=function(e){var t=D(e);t&&t.tagName||(t={namespaceURI:ut,tagName:"template"});var n=A(e.tagName),r=A(t.tagName);return!!mt[e.namespaceURI]&&(e.namespaceURI===lt?t.namespaceURI===ct?"svg"===n:t.namespaceURI===it?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(Et[n]):e.namespaceURI===it?t.namespaceURI===ct?"math"===n:t.namespaceURI===lt?"math"===n&&Tt[r]:Boolean(At[n]):e.namespaceURI===ct?!(t.namespaceURI===lt&&!Tt[r])&&!(t.namespaceURI===it&&!vt[r])&&!At[n]&&(Nt[n]||!Et[n]):!("application/xhtml+xml"!==_e||!mt[e.namespaceURI]))},wt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Ht){try{e.outerHTML=ue}catch(Ht){e.remove()}}},kt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Ht){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Le[e])if(qe||Ye)try{wt(t)}catch(Ht){}else try{t.setAttribute(e,"")}catch(Ht){}},xt=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=w(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===_e&&ut===ct&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ce?ce.createHTML(e):e;if(ut===ct)try{t=(new d).parseFromString(o,_e)}catch(Ht){}if(!t||!t.documentElement){t=me.createDocument(ut,"template",null);try{t.documentElement.innerHTML=st?ue:o}catch(Ht){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),ut===ct?de.call(t,je?"html":"body")[0]:je?t.documentElement:i},Ct=function(e){return pe.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT|s.SHOW_PROCESSING_INSTRUCTION|s.SHOW_CDATA_SECTION,null,!1)},Ot=function(e){return e instanceof f&&("undefined"!==typeof e.__depth&&"number"!==typeof e.__depth||"undefined"!==typeof e.__removalCount&&"number"!==typeof e.__removalCount||"string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof p)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},Lt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},Rt=function(e,t,r){ye[e]&&T(ye[e],(function(e){e.call(n,t,r,ht)}))},Dt=function(e){var t;if(Rt("beforeSanitizeElements",e,null),Ot(e))return wt(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return wt(e),!0;var r=be(e.nodeName);if(Rt("uponSanitizeElement",e,{tagName:r,allowedTags:Ce}),e.hasChildNodes()&&!Lt(e.firstElementChild)&&(!Lt(e.content)||!Lt(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return wt(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return wt(e),!0;if(7===e.nodeType)return wt(e),!0;if(Be&&8===e.nodeType&&O(/<[/\w]/g,e.data))return wt(e),!0;if(!Ce[r]||Me[r]){if(!Me[r]&&It(r)){if(De.tagNameCheck instanceof RegExp&&O(De.tagNameCheck,r))return!1;if(De.tagNameCheck instanceof Function&&De.tagNameCheck(r))return!1}if(Ze&&!et[r]){var o=D(e)||e.parentNode,a=v(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i){var l=_(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,b(e))}}return wt(e),!0}return e instanceof u&&!St(e)?(wt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!O(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=k(t,ve," "),t=k(t,Te," "),t=k(t,Ne," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),Rt("afterSanitizeElements",e,null),!1):(wt(e),!0)},Mt=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in a||n in yt||"__depth"===n||"__removalCount"===n))return!1;if(Ue&&!Ie[t]&&O(Ee,t));else if(Fe&&O(Ae,t));else if(!Le[t]||Ie[t]){if(!(It(e)&&(De.tagNameCheck instanceof RegExp&&O(De.tagNameCheck,e)||De.tagNameCheck instanceof Function&&De.tagNameCheck(e))&&(De.attributeNameCheck instanceof RegExp&&O(De.attributeNameCheck,t)||De.attributeNameCheck instanceof Function&&De.attributeNameCheck(t))||"is"===t&&De.allowCustomizedBuiltInElements&&(De.tagNameCheck instanceof RegExp&&O(De.tagNameCheck,n)||De.tagNameCheck instanceof Function&&De.tagNameCheck(n))))return!1}else if(ot[t]);else if(O(xe,k(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!nt[e])if(He&&!O(Se,k(n,we,"")));else if(n)return!1;return!0},It=function(e){return"annotation-xml"!==e&&w(e,ke)},Ft=function(t){var r,o,a,i;Rt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:C(r.value),a=be(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Rt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(kt(s,t),c.keepAttr))if(ze||!O(/\/>/i,o))if(Be&&O(/((--!?|])>)|<\/(style|title)/i,o))kt(s,t);else{Pe&&(o=k(o,ve," "),o=k(o,Te," "),o=k(o,Ne," "));var p=be(t.nodeName);if(Mt(p,a,o)){if(!Ve||"id"!==a&&"name"!==a||(kt(s,t),o=Xe+o),ce&&"object"===e(g)&&"function"===typeof g.getAttributeType)if(m);else switch(g.getAttributeType(p,a)){case"TrustedHTML":o=ce.createHTML(o);break;case"TrustedScriptURL":o=ce.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),Ot(t)?wt(t):N(n.removed)}catch(Ht){}}}else kt(s,t)}Rt("afterSanitizeAttributes",t,null)}},Ut=function e(t){var n,r=Ct(t);for(Rt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)if(Rt("uponSanitizeShadowNode",n,null),!Dt(n)){var o=D(n);1===n.nodeType&&(o&&o.__depth?n.__depth=(n.__removalCount||0)+o.__depth+1:n.__depth=1),(n.__depth>=gt||R(n.__depth))&&wt(n),n.content instanceof i&&(n.content.__depth=n.__depth,e(n.content)),Ft(n)}Rt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,u,s,m,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((st=!o)&&(o="\x3c!--\x3e"),"string"!==typeof o&&!Lt(o)){if("function"!==typeof o.toString)throw L("toString is not a function");if("string"!==typeof(o=o.toString()))throw L("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof o)return t.toStaticHTML(o);if(Lt(o))return t.toStaticHTML(o.outerHTML)}return o}if(Ge||bt(p),n.removed=[],"string"===typeof o&&(Je=!1),Je){if(o.nodeName){var f=be(o.nodeName);if(!Ce[f]||Me[f])throw L("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=xt("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!qe&&!Pe&&!je&&-1===o.indexOf("<"))return ce&&$e?ce.createHTML(o):o;if(!(a=xt(o)))return qe?null:$e?ue:""}a&&We&&wt(a.firstChild);for(var d=Ct(Je?o:a);u=d.nextNode();)if((3!==u.nodeType||u!==s)&&!Dt(u)){var h=D(u);1===u.nodeType&&(h&&h.__depth?u.__depth=(u.__removalCount||0)+h.__depth+1:u.__depth=1),(u.__depth>=gt||R(u.__depth))&&wt(u),u.content instanceof i&&(u.content.__depth=u.__depth,Ut(u.content)),Ft(u),s=u}if(s=null,Je)return o;if(qe){if(Ye)for(m=fe.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return(Le.shadowroot||Le.shadowrootmod)&&(m=he.call(r,m,!0)),m}var g=je?a.outerHTML:a.innerHTML;return je&&Ce["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&O(re,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),Pe&&(g=k(g,ve," "),g=k(g,Te," "),g=k(g,Ne," ")),ce&&$e?ce.createHTML(g):g},n.setConfig=function(e){bt(e),Ge=!0},n.clearConfig=function(){ht=null,Ge=!1},n.isValidAttribute=function(e,t,n){ht||bt({});var r=be(e),o=be(t);return Mt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(ye[e]=ye[e]||[],E(ye[e],t))},n.removeHook=function(e){if(ye[e])return N(ye[e])},n.removeHooks=function(e){ye[e]&&(ye[e]=[])},n.removeAllHooks=function(){ye={}},n}return le()}()}}]);
//# sourceMappingURL=213.2662dc07.chunk.js.map