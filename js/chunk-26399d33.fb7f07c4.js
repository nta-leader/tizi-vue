(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26399d33"],{1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),s=n("825a"),r=n("1d80"),o=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),p=n("d039"),h=[].push,f=Math.min,g=4294967295,v=!p((function(){return!RegExp(g,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(r(this)),s=void 0===n?g:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,s);var o,c,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=new RegExp(t.source,p+"g");while(o=d.call(v,a)){if(c=v.lastIndex,c>f&&(l.push(a.slice(f,o.index)),o.length>1&&o.index<a.length&&h.apply(l,o.slice(1)),u=o[0].length,f=c,l.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return f===a.length?!u&&v.test("")||l.push(""):l.push(a.slice(f)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,n):a.call(String(i),e,n)},function(t,i){var r=n(a,t,this,i,a!==e);if(r.done)return r.value;var d=s(t),p=String(this),h=o(d,RegExp),m=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new h(v?d:"^(?:"+d.source+")",y),_=void 0===i?g:i>>>0;if(0===_)return[];if(0===p.length)return null===l(b,p)?[p]:[];var x=0,C=0,k=[];while(C<p.length){b.lastIndex=v?C:0;var S,P=l(b,v?p:p.slice(C));if(null===P||(S=f(u(b.lastIndex+(v?0:C)),p.length))===x)C=c(p,C,m);else{if(k.push(p.slice(x,C)),k.length===_)return k;for(var w=1;w<=P.length-1;w++)if(k.push(P[w]),k.length===_)return k;C=x=S}}return k.push(p.slice(x)),k}]}),!v)},"2ff2":function(t,e,n){},"394d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("a",{staticClass:"btn btn-default",on:{click:t.show}},[t._v(t._s(t.item.count_feedback?t.item.count_feedback:0)+" Báo xấu")]),n("div",{class:{modal:!0,fade:!0,in:!0,show:t.menuLoc.status}},[n("div",{staticClass:"modal-dialog"},[n("transition",{attrs:{name:"slide-fade"}},[t.menuLoc.content?n("div",{staticClass:"modal-content"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitSort(e)}}},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.hide}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("h4",{staticClass:"modal-title"},[t._v("Danh sách báo xấu")])]),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"form-group"},[n("label",[t._v("ID sản phẩm: ")]),t._v(" "+t._s(t.item.id)+" ")]),n("div",{staticClass:"form-group"},[n("label",[t._v("Tên sản phẩm: ")]),t._v(" "+t._s(t.item.name)+" ")]),n("table",{staticStyle:{width:"100%"}},[n("tr",[n("th",{staticStyle:{width:"102px"}},[t._v("Ngày gửi")]),n("th",{staticStyle:{width:"20%"}},[t._v("Tài khoản")]),n("th",[t._v("Nội dung")])]),t._l(t.feedback,(function(e){return n("tr",{key:e.index},[n("td",[n("p",{staticStyle:{color:"red"}},[t._v(t._s(t.getTime(e.created_at).fromNow()))]),t._v(" "+t._s(t.getTime(e.created_at).format("llll"))+" ")]),n("td",[t._v(t._s(e.username))]),n("td",[n("div",{domProps:{innerHTML:t._s(e.content)}})])])}))],2)])])]):t._e()])],1)])])},i=[],s=n("bc3a"),r=n.n(s),o=n("c1df"),c=n.n(o),u={data:function(){return{api:this.$store.state.domainApi,menuLoc:{status:!1,content:!1},feedback:[]}},props:["item"],methods:{getTime:function(t){return c()(t)},show:function(){var t=this;r.a.get(this.api+"/admin/productfeedback/"+this.item.id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.feedback=e.data})),this.menuLoc.status=!0,this.menuLoc.content=!0,document.querySelector("body").classList.add("modal-open")},hide:function(){var t=this;this.menuLoc.content=!1,document.querySelector("body").classList.remove("modal-open"),setTimeout((function(){t.menuLoc.status=!1}),400)}},created:function(){c.a.locale("vi")}},l=u,d=n("2877"),p=Object(d["a"])(l,a,i,!1,null,null,null);e["a"]=p.exports},"44e7":function(t,e,n){var a=n("861d"),i=n("c6b6"),s=n("b622"),r=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},8832:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(1),s=a(i);t.exports=s.default},function(t,e,n){n(2);var a=n(6)(n(7),n(8),"data-v-82963a40",null);t.exports=a.exports},function(t,e,n){var a=n(3);"string"==typeof a&&(a=[[t.id,a,""]]),n(5)(a,{}),a.locals&&(t.exports=a.locals)},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(a[s]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){function a(t,e){for(var n=0;n<t.length;n++){var a=t[n],i=d[a.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](a.parts[s]);for(;s<a.parts.length;s++)i.parts.push(c(a.parts[s],e))}else{var r=[];for(s=0;s<a.parts.length;s++)r.push(c(a.parts[s],e));d[a.id]={id:a.id,refs:1,parts:r}}}}function i(t){for(var e=[],n={},a=0;a<t.length;a++){var i=t[a],s=i[0],r=i[1],o=i[2],c=i[3],u={css:r,media:o,sourceMap:c};n[s]?n[s].parts.push(u):e.push(n[s]={id:s,parts:[u]})}return e}function s(t,e){var n=f(),a=m[m.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function c(t,e){var n,a,i;if(e.singleton){var s=v++;n=g||(g=o(e)),a=u.bind(null,n,s,!1),i=u.bind(null,n,s,!0)}else n=o(e),a=l.bind(null,n),i=function(){r(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else i()}}function u(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var s=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function l(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=p((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),f=p((function(){return document.head||document.getElementsByTagName("head")[0]})),g=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return a(n,e),function(t){for(var s=[],r=0;r<n.length;r++){var o=n[r],c=d[o.id];c.refs--,s.push(c)}if(t){var u=i(t);a(u,e)}for(r=0;r<s.length;r++){c=s[r];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,a){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var c=o.computed||(o.computed={});Object.keys(a).forEach((function(t){var e=a[t];c[t]=function(){return e}}))}return{esModule:i,exports:s,options:o}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(t){this.innerValue=t}},pages:function(){var t=this,e={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:n+1,selected:n===this.selected-1};e[n]=a}else{for(var i=Math.floor(this.pageRange/2),s=function(n){var a={index:n,content:n+1,selected:n===t.selected-1};e[n]=a},r=function(t){var n={disabled:!0,breakView:!0};e[t]=n},o=0;o<this.marginPages;o++)s(o);var c=0;this.selected-i>0&&(c=this.selected-1-i);var u=c+this.pageRange-1;u>=this.pageCount&&(u=this.pageCount-1,c=u-this.pageRange+1);for(var l=c;l<=u&&l<=this.pageCount-1;l++)s(l);c>this.marginPages&&r(c-1),u+1<this.pageCount-this.marginPages&&r(u+1);for(var d=this.pageCount-1;d>=this.pageCount-this.marginPages;d--)s(d)}return e}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(t){this.selected!==t&&(this.innerValue=t,this.$emit("input",t),this.clickHandler(t))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.noLiSurround?n("div",{class:t.containerClass},[t.firstLastButton?n("a",{class:[t.pageLinkClass,t.firstPageSelected()?t.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:t._s(t.firstButtonText)},on:{click:function(e){t.selectFirstPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.selectFirstPage():null}}}):t._e(),t._v(" "),t.firstPageSelected()&&t.hidePrevNext?t._e():n("a",{class:[t.prevLinkClass,t.firstPageSelected()?t.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:t._s(t.prevText)},on:{click:function(e){t.prevPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.prevPage():null}}}),t._v(" "),t._l(t.pages,(function(e){return[e.breakView?n("a",{class:[t.pageLinkClass,t.breakViewLinkClass,e.disabled?t.disabledClass:""],attrs:{tabindex:"0"}},[t._t("breakViewContent",[t._v(t._s(t.breakViewText))])],2):e.disabled?n("a",{class:[t.pageLinkClass,e.selected?t.activeClass:"",t.disabledClass],attrs:{tabindex:"0"}},[t._v(t._s(e.content))]):n("a",{class:[t.pageLinkClass,e.selected?t.activeClass:""],attrs:{tabindex:"0"},on:{click:function(n){t.handlePageSelected(e.index+1)},keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13)?void t.handlePageSelected(e.index+1):null}}},[t._v(t._s(e.content))])]})),t._v(" "),t.lastPageSelected()&&t.hidePrevNext?t._e():n("a",{class:[t.nextLinkClass,t.lastPageSelected()?t.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:t._s(t.nextText)},on:{click:function(e){t.nextPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.nextPage():null}}}),t._v(" "),t.firstLastButton?n("a",{class:[t.pageLinkClass,t.lastPageSelected()?t.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:t._s(t.lastButtonText)},on:{click:function(e){t.selectLastPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.selectLastPage():null}}}):t._e()],2):n("ul",{class:t.containerClass},[t.firstLastButton?n("li",{class:[t.pageClass,t.firstPageSelected()?t.disabledClass:""]},[n("a",{class:t.pageLinkClass,attrs:{tabindex:t.firstPageSelected()?-1:0},domProps:{innerHTML:t._s(t.firstButtonText)},on:{click:function(e){t.selectFirstPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.selectFirstPage():null}}})]):t._e(),t._v(" "),t.firstPageSelected()&&t.hidePrevNext?t._e():n("li",{class:[t.prevClass,t.firstPageSelected()?t.disabledClass:""]},[n("a",{class:t.prevLinkClass,attrs:{tabindex:t.firstPageSelected()?-1:0},domProps:{innerHTML:t._s(t.prevText)},on:{click:function(e){t.prevPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.prevPage():null}}})]),t._v(" "),t._l(t.pages,(function(e){return n("li",{class:[t.pageClass,e.selected?t.activeClass:"",e.disabled?t.disabledClass:"",e.breakView?t.breakViewClass:""]},[e.breakView?n("a",{class:[t.pageLinkClass,t.breakViewLinkClass],attrs:{tabindex:"0"}},[t._t("breakViewContent",[t._v(t._s(t.breakViewText))])],2):e.disabled?n("a",{class:t.pageLinkClass,attrs:{tabindex:"0"}},[t._v(t._s(e.content))]):n("a",{class:t.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){t.handlePageSelected(e.index+1)},keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13)?void t.handlePageSelected(e.index+1):null}}},[t._v(t._s(e.content))])])})),t._v(" "),t.lastPageSelected()&&t.hidePrevNext?t._e():n("li",{class:[t.nextClass,t.lastPageSelected()?t.disabledClass:""]},[n("a",{class:t.nextLinkClass,attrs:{tabindex:t.lastPageSelected()?-1:0},domProps:{innerHTML:t._s(t.nextText)},on:{click:function(e){t.nextPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.nextPage():null}}})]),t._v(" "),t.firstLastButton?n("li",{class:[t.pageClass,t.lastPageSelected()?t.disabledClass:""]},[n("a",{class:t.pageLinkClass,attrs:{tabindex:t.lastPageSelected()?-1:0},domProps:{innerHTML:t._s(t.lastButtonText)},on:{click:function(e){t.selectLastPage()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13)?void t.selectLastPage():null}}})]):t._e()],2)},staticRenderFns:[]}}])}))},"988f":function(t,e,n){"use strict";var a=n("2ff2"),i=n.n(a);i.a},d81d:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").map,s=n("1dde"),r=n("ae40"),o=s("map"),c=r("map");a({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e939:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"box-header with-border"},[n("h3",{staticClass:"box-title"},[t._v("Danh sách sản phẩm")]),n("div",{staticClass:"box-tools",staticStyle:{display:"flex"}},[n("div",{staticStyle:{width:"150px"}},[n("Select2",{attrs:{options:t.pageSize.myOptions},on:{change:function(e){return t.changePageSize(e)}},model:{value:t.pageSize.myValue,callback:function(e){t.$set(t.pageSize,"myValue",e)},expression:"pageSize.myValue"}})],1),n("div",{staticStyle:{width:"150px"}},[n("Select2",{attrs:{options:t.orderBy.myOptions},on:{change:function(e){return t.changeOrderBy(e)}},model:{value:t.orderBy.myValue,callback:function(e){t.$set(t.orderBy,"myValue",e)},expression:"orderBy.myValue"}})],1)]),n("div",{staticClass:"row search"},[n("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3"},[n("Select2",{attrs:{options:t.province.myOptions},on:{change:function(e){return t.changeProvince(e)}},model:{value:t.province.myValue,callback:function(e){t.$set(t.province,"myValue",e)},expression:"province.myValue"}})],1),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3"},[n("Select2",{attrs:{options:t.district.myOptions},on:{change:function(e){return t.changeDistrict(e)}},model:{value:t.district.myValue,callback:function(e){t.$set(t.district,"myValue",e)},expression:"district.myValue"}})],1),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3"},[n("Select2",{attrs:{options:t.category.myOptions},on:{change:function(e){return t.changeCategory(e)}},model:{value:t.category.myValue,callback:function(e){t.$set(t.category,"myValue",e)},expression:"category.myValue"}})],1),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 col-xs-3"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Tìm kiếm..."},on:{keyup:t.search}})])])]),n("div",{staticClass:"box-body table-responsive"},[n("table",{staticClass:"table table-hover"},[n("tr",[n("th",[t._v("ID "),n("input",{attrs:{type:"checkbox",id:"choose"},on:{click:t.choose}})]),n("th",{staticStyle:{width:"136px"}},[t._v("Ngày đăng")]),n("th",{staticStyle:{width:"104px"}},[t._v("Danh mục")]),n("th",{staticStyle:{width:"81px"}},[t._v("SDT")]),n("th",[t._v("Tên")]),n("th",[t._v("Giá")]),n("th",[t._v("Địa chỉ")]),n("th",{staticStyle:{width:"100px"}},[t._v("Hình")]),n("th",[t._v("Tài khoản")]),n("th",{staticStyle:{width:"74px"}},[t._v("Phê duyệt")]),n("th",{staticStyle:{width:"74px"}},[t._v("Feedback")]),n("th",[t._v("Chức năng")])]),t._l(t.product,(function(e,a){return n("tr",{key:a},[n("td",[n("b",[t._v(t._s(e.id))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id_product,expression:"id_product"}],staticClass:"choose",attrs:{type:"checkbox",name:"id_product"},domProps:{value:e.id+"/"+a+"/"+e.image,checked:Array.isArray(t.id_product)?t._i(t.id_product,e.id+"/"+a+"/"+e.image)>-1:t.id_product},on:{change:function(n){var i=t.id_product,s=n.target,r=!!s.checked;if(Array.isArray(i)){var o=e.id+"/"+a+"/"+e.image,c=t._i(i,o);s.checked?c<0&&(t.id_product=i.concat([o])):c>-1&&(t.id_product=i.slice(0,c).concat(i.slice(c+1)))}else t.id_product=r}}})]),n("td",[n("div",{staticStyle:{color:"red"}},[t._v(t._s(t.getTime(e.date).fromNow()))]),n("div",[t._v(t._s(t.getTime(e.date).format("llll")))])]),n("td",[t._v(t._s(e.category))]),n("td",[t._v(t._s(e.phone))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(t.number_format(e.price,0))+" đ")]),n("td",[t._v(t._s(e.province+" - "+e.district+" - "+e.address))]),n("td",[n("img",{staticClass:"product-img",attrs:{src:t.api+"/image/product/thumbnail/"+e.image}})]),n("td",[t._v(" "+t._s(e.username)+" ")]),n("td",[e.status?t._e():n("button",{staticClass:"btn btn-success",on:{click:function(n){return t.active(e.id,a)}}},[t._v("Duyệt")]),1==e.status?n("span",[t._v("Đã duyệt")]):t._e(),2==e.status?n("span",[t._v("Đã bán")]):t._e(),3==e.status?n("span",[t._v("Vi phạm")]):t._e()]),n("ShowFeedback",{attrs:{item:e}}),n("td",[n("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"route.product",params:{province:e.url_province,district:e.url_district,category:e.url_category,id:e.id,product:e.url_product}},target:"_blank"}},[t._v("Xem thử")]),e.status?t._e():n("button",{staticClass:"btn btn-warning",on:{click:function(n){return t.block(e.id,a)}}},[t._v("Báo xấu")]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.del(e.id,a,e.image)}}},[t._v("Xóa")])],1)],1)}))],2),n("div",{staticClass:"menu"},[n("button",{staticClass:"btn btn-success",on:{click:t.activeSuper}},[t._v("Duyệt")]),n("button",{staticClass:"btn btn-warning",on:{click:t.blockSuper}},[t._v("Báo xấu")]),n("button",{staticClass:"btn btn-danger",on:{click:t.delSuper}},[t._v("Xóa")])]),n("paginate",{attrs:{"page-count":t.paginate.pageCount,"page-range":3,"margin-pages":2,"click-handler":t.runPage,"prev-text":"<i class='fa fa-angle-left' aria-hidden='true'></i>","next-text":"<i class='fa fa-angle-right' aria-hidden='true'></i>","container-class":"pagination","page-class":"page-item"},model:{value:t.paginate.page,callback:function(e){t.$set(t.paginate,"page",e)},expression:"paginate.page"}})],1)])},i=[],s=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("d81d"),n("13d5"),n("fb6a"),n("a434"),n("b0c0"),n("b680"),n("ac1f"),n("5319"),n("841c"),n("1276"),n("159b"),n("b85c")),r=(n("96cf"),n("1da1")),o=n("bc3a"),c=n.n(o),u=n("c1df"),l=n.n(u),d=n("8832"),p=n.n(d),h=n("3f5b"),f=n("394d"),g={metaInfo:{title:"Tất cả sản phẩm"},components:{paginate:p.a,Select2:h["a"],ShowFeedback:f["a"]},data:function(){return{api:this.$store.state.domainApi,product:[],paginate:{page:1,pageCount:10},pageSize:{myValue:10,myOptions:[{id:10,text:"page size: 10"},{id:20,text:"page size: 20"},{id:50,text:"page size: 50"},{id:100,text:"page size: 100"},{id:200,text:"page size: 200"}]},orderBy:{myValue:"DESC",myOptions:[{id:"ASC",text:"Tăng dần"},{id:"DESC",text:"Giảm dần"}]},dataProvince:[],province:{myValue:"",myOptions:[]},district:{myValue:"",myOptions:[]},category:{myValue:"",myOptions:[],value:""},id_product:[]}},methods:{getTime:function(t){var e=l()(t);return e},number_format:function(t,e,n,a){var i=t,s=isNaN(e=Math.abs(e))?2:e,r=void 0==n?",":n,o=void 0==a?".":a,c=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(s))+"",l=(l=u.length)>3?l%3:0;return c+(l?u.substr(0,l)+o:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+o)+(s?r+Math.abs(i-u).toFixed(s).slice(2):"")},active:function(t,e){var n=this;c.a.put(this.api+"/admin/product",{id_product:[t],status:1},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){t.data.success?(n.product[e].status=1,n.flash(t.data.message,"success",{timeout:3e3})):n.flash(t.data.message,"error",{timeout:3e3})})).catch((function(t){console.log(t),n.flash("Có lỗi kết nối đến api !","error",{timeout:3e3})}))},activeSuper:function(){var t=this;this.id_product.length>0&&this.$swal.fire({title:"Bạn có muốn duyệt các sản phẩm này không?",text:"Duyệt toàn bộ sản phẩm",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Không, Chưa duyệt !",confirmButtonText:"Có, Duyệt hết !"}).then((function(e){if(e.value){var n=t.id_product.reduce((function(t,e){var n=e.split("/");return t.id_product.push(n[0]),t.index.push(n[1]),t}),{id_product:[],index:[]});c.a.put(t.api+"/admin/product",{id_product:n.id_product,status:1},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){e.data.success?(n.index.forEach((function(e){t.product[e].status=1})),t.flash(e.data.message,"success",{timeout:3e3})):t.flash(e.data.message,"error",{timeout:3e3})}))}}))},block:function(t,e){var n=this;c.a.put(this.api+"/admin/product",{id_product:[t],status:3},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){t.data.success?(n.product[e].status=3,n.flash("Báo xấu thành công !","success",{timeout:3e3})):n.flash(t.data.message,"error",{timeout:3e3})})).catch((function(t){console.log(t),n.flash("Có lỗi kết nối đến api !","error",{timeout:3e3})}))},blockSuper:function(){var t=this;this.id_product.length>0&&this.$swal.fire({title:"Bạn có muốn báo xấu các sản phẩm này không?",text:"Báo xấu toàn bộ sản phẩm",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Không !",confirmButtonText:"Có, Báo xấu hết !"}).then((function(e){if(e.value){var n=t.id_product.reduce((function(t,e){var n=e.split("/");return t.id_product.push(n[0]),t.index.push(n[1]),t}),{id_product:[],index:[]});c.a.put(t.api+"/admin/product",{id_product:n.id_product,status:3},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){e.data.success?(n.index.forEach((function(e){t.product[e].status=3})),t.flash(e.data.message,"success",{timeout:3e3})):t.flash(e.data.message,"error",{timeout:3e3})}))}}))},del:function(t,e,n){var a=this;this.$swal.fire({title:"Bạn có muốn xóa sản phẩm này không?",text:"Xóa sản phẩm",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Không, Chưa xóa !",confirmButtonText:"Có, Xóa !"}).then((function(i){i.value&&c.a.delete(a.api+"/admin/product",{headers:{Authorization:"Bearer ".concat(localStorage.token)},params:{id_product:[t],image:[n]}}).then((function(t){t.data.success?(a.product.splice(e,1),a.flash(t.data.message,"success",{timeout:3e3})):a.flash(t.data.message,"error",{timeout:3e3})}))}))},delSuper:function(){var t=this;this.id_product.length>0&&this.$swal.fire({title:"Bạn có muốn xóa các sản phẩm này không?",text:"Xóa toàn bộ danh mục con và sản phẩm",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Không, Chưa xóa !",confirmButtonText:"Có, Xóa hết !"}).then((function(e){if(e.value){var n=t.id_product.reduce((function(t,e){var n=e.split("/");return t.id_product.push(n[0]),t.index.push(n[1]),t.image.push(n[2]),t}),{id_product:[],index:[],image:[]});c.a.delete(t.api+"/admin/product",{headers:{Authorization:"Bearer ".concat(localStorage.token)},params:{id_product:n.id_product,image:n.image}}).then((function(e){e.data.success?(n.index.forEach((function(e){t.product.splice(e,1)})),t.flash(e.data.message,"success",{timeout:3e3})):t.flash(e.data.message,"error",{timeout:3e3})}))}}))},choose:function(t){var e=[];document.getElementsByClassName("choose").forEach((function(n){n.checked=t.target.checked,e.push(n.value)})),t.target.checked?this.id_product=e:this.id_product=[]},search:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.a.get(e.api+"/admin/product",{headers:{Authorization:"Bearer ".concat(localStorage.token)},params:{province:e.province.myValue,district:e.district.myValue,category:e.category.value,search:t?t.target.value:"",page:e.paginate.page,pageSize:e.pageSize.myValue,orderBy:e.orderBy.myValue}});case 2:a=n.sent,e.product=a.data.product,e.paginate.pageCount=Math.ceil(a.data.count/e.pageSize.myValue);case 5:case"end":return n.stop()}}),n)})))()},runPage:function(t){this.paginate.page=t,this.search("")},changePageSize:function(){this.search("")},changeOrderBy:function(){this.search("")},changeProvince:function(t){var e={id:"tat-ca-quan-huyen",text:"Tất cả quận huyện"};this.district.myValue="toan-quoc"==t?"":"tat-ca-quan-huyen",this.district.myOptions="toan-quoc"==t?this.customText(this.dataProvince.filter((function(e){return e.parent_id==t}))):[e].concat(this.customText(this.dataProvince.filter((function(e){return e.parent_id==t})))),this.search("")},changeDistrict:function(){this.search("")},changeCategory:function(t){var e=this.find(this.$store.state.category,t).reduce((function(t,e){return t+",".concat(e)}),t);this.category.value=e,this.search("")},customText:function(t){return t.reduce((function(t,e){var n={id:e.id,text:e.name};return t.concat([n])}),[])},formatJson:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=[],r=Object(s["a"])(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(o.parent_id==n){var c={id:o.id,text:a+" "+o.name};i.push(c);var u=this.formatJson(t,o.id,a+"-----|");i=i.concat(u)}}}catch(l){r.e(l)}finally{r.f()}return i},find:function(t,e){var n,a=[],i=Object(s["a"])(t);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(r.parent_id==e){a.push(r.id);var o=this.find(t,r.id);a=a.concat(o)}}}catch(c){i.e(c)}finally{i.f()}return a}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l.a.locale("vi"),e.next=3,c.a.get(t.api+"/admin/product",{headers:{Authorization:"Bearer ".concat(localStorage.token)},params:{pageSize:t.pageSize.myValue,orderBy:t.orderBy.myValue}});case 3:n=e.sent,t.product=n.data.product,t.paginate.pageCount=Math.ceil(n.data.count/t.pageSize.myValue),t.dataProvince=t.$store.state.province.map((function(t){return t})),a={id:"toan-quoc",text:"Toàn quốc"},t.province.myValue="toan-quoc",t.province.myOptions=[a].concat(t.customText(t.dataProvince.filter((function(t){return 0==t.parent_id})))),a=[{id:"tat-ca-danh-muc",text:"Tất cả danh mục"}],t.category.myValue="tat-ca-danh-muc",t.category.myOptions=a.concat(t.formatJson(t.$store.state.category.map((function(t){return t}))));case 13:case"end":return e.stop()}}),e)})))()}},v=g,m=(n("988f"),n("2877")),y=Object(m["a"])(v,a,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-26399d33.fb7f07c4.js.map