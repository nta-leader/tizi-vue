(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27fc0d18"],{"0233":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-9 col-md-9"},[s("ContentHeader",{attrs:{about:t.product.about}}),s("div",{staticClass:"detail-content"},[s("div",{staticClass:"row"},[t.isShowFull?s("div",{attrs:{id:"show-full"}},[s("button",{staticClass:"btn btn-danger",on:{click:t.hidden}},[t._v("x")]),s("carousel",{attrs:{responsive:{0:{items:1,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.image,(function(a){return s("div",{key:a.index,staticClass:"image"},[s("img",{style:{height:t.height+"px"},attrs:{src:t.api+"/image/product/"+a.name}}),s("div",{staticClass:"mold",style:{height:t.height+"px",backgroundImage:"url("+t.api+"/image/product/"+a.name+")"}})])})),0)],1):t._e(),s("div",{staticClass:"col-lg-8 col-md-8",attrs:{id:"_about-product"}},[s("div",{staticClass:"_product-image",on:{click:t.show}},[t.product.image.length?s("carousel",{staticClass:"owl-product",attrs:{responsive:{0:{items:1,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.image,(function(a){return s("div",{key:a.index,staticClass:"image"},[s("div",{staticClass:"mold",style:{backgroundImage:"url("+t.api+"/image/product/"+a.name+")"}}),s("img",{attrs:{src:t.api+"/image/product/"+a.name}})])})),0):t._e(),s("span",{staticClass:"_product-time"},[t._v(t._s(t.getTime(t.product.about.date).fromNow()))])],1),s("about",{attrs:{product:t.product.about}})],1),s("div",{staticClass:"col-lg-4 col-md-4 info-user"},[s("user",{attrs:{product:t.product.about}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 col-md-8"},[s("div",{staticClass:"content-body"},[s("div",{staticClass:"product-content",attrs:{id:"about-product-content"},domProps:{innerHTML:t._s(t.product.about.content)}})])])]),t.product.suggest.length?s("div",{staticClass:"row products"},[s("div",{staticClass:"hr"}),s("div",{staticClass:"col-lg-12"},[s("h3",[t._v("Tin đăng khác: "),s("span",{staticStyle:{color:"#FF9800"}},[t._v(t._s(t.product.about.province)+" - "+t._s(t.product.about.category))])]),s("carousel",{staticClass:"product-suggest",attrs:{responsive:{320:{items:2,nav:!1,loop:!1,autoplay:!0},600:{items:3,nav:!1,loop:!1,autoplay:!0},1e3:{items:4,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.suggest,(function(a,e){return s("router-link",{key:e,staticClass:"item",attrs:{to:{name:"route.product.index",params:{province:a.url_province,district:a.url_district,category:a.url_category,id:a.id,product:a.url}},title:a.name}},[s("img",{staticClass:"img",attrs:{src:t.api+"/image/product/thumbnail/"+a.image,alt:a.name,title:a.name}}),s("h2",{staticClass:"title",attrs:{title:a.name}},[t._v(t._s(a.name))]),0!=a.price?s("span",{staticClass:"price"},[t._v(t._s(t.number_format(a.price,0))+" đ")]):t._e(),0==a.price?s("span",{staticClass:"price"},[t._v("Thoả thuận")]):t._e()])})),1)],1)]):t._e()])],1)},i=[],r=(s("99af"),s("fb6a"),s("b0c0"),s("b680"),s("ac1f"),s("5319"),s("1276"),s("bc3a")),o=s.n(r),n=s("7ec7"),c=s.n(n),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{id:"about"}},[s("div",{staticClass:"col-lg-10 col-md-10 col-sm-10 col-xs-10"},[s("h1",[t._v(t._s(t.product.name))]),0!=t.product.price?s("span",{staticClass:"price"},[t._v(t._s(t.number_format(t.product.price,0))+" đ")]):t._e(),0==t.product.price?s("span",{staticClass:"price"},[t._v("Thỏa thuận")]):t._e(),s("share",{attrs:{product:t.product}})],1),s("feedback",{attrs:{id_product:t.product.id}})],1)},l=[],d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-2 col-md-2 col-sm-2 col-xs-2"},[s("a",{staticClass:"link",attrs:{href:"#",id:"block-product"},on:{click:t.show}},[s("i",{staticClass:"fa fa-times-circle-o",attrs:{"aria-hidden":"true"}}),t._v(" Báo xấu")]),s("div",{class:{modal:!0,fade:!0,in:!0,show:t.menuLoc.status}},[s("div",{staticClass:"modal-dialog"},[s("transition",{attrs:{name:"slide-fade"}},[t.menuLoc.content?s("div",{staticClass:"modal-content"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.hide}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("h4",{staticClass:"modal-title"},[t._v("Báo xấu sản phẩm")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"box-header"},[s("h3",{staticClass:"box-title"},[t._v("Nội dung")]),s("span",{staticStyle:{color:"red","margin-left":"20px"}},[t._v(t._s(t.errors.first("content")))])]),s("div",{staticClass:"box-body"},[s("vue-editor",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{name:"content","editor-toolbar":t.customToolbar},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1)]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default pull-left",attrs:{type:"button"},on:{click:t.hide}},[t._v("Thoát")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Gửi")])])])]):t._e()])],1)])])},p=[],h=s("7bb1"),m=s("5873"),v={components:{VueEditor:m["a"]},data:function(){return{api:this.$store.state.domainApi,menuLoc:{status:!1,content:!1},customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"justify"},{align:"right"}],["link","video"]],content:"",id_user:1}},props:["id_product"],methods:{show:function(){var t=this;this.$store.state.token?(this.menuLoc.status=!0,this.menuLoc.content=!0,document.querySelector("body").classList.add("modal-open")):this.$swal.fire({title:"Vui lòng đăng nhập !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Thoát",confirmButtonText:"Đăng nhập"}).then((function(a){a.value&&t.$router.push({name:"login"})}))},hide:function(){var t=this;this.menuLoc.content=!1,document.querySelector("body").classList.remove("modal-open"),setTimeout((function(){t.menuLoc.status=!1}),400)},submit:function(){var t=this;this.$validator.validate().then((function(a){a&&(t.$swal.fire({title:"Đang gửi",text:"Vui lòng chờ !",allowOutsideClick:!1}),t.$swal.showLoading(),o.a.post("".concat(t.api,"/public/productfeedback"),{id_product:t.id_product,id_user:t.id_user,content:t.content}).then((function(a){t.$swal.close(),1===a.data.success?(t.flash(a.data.message,"success",{timeout:3e3}),t.hide()):t.flash(a.data.message,"error",{timeout:3e3})})))}))}},created:function(){h["a"].localize(this.dictionary);var t=new h["a"]({first_name:"alpha"});t.localize("vi")}},f=v,g=(s("156f"),s("2877")),_=Object(g["a"])(f,d,p,!1,null,"05e65474",null),b=_.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"share"},[t._m(0),s("ShareNetwork",{attrs:{network:"facebook",url:t.url,title:"Tizi tìm gì cũng có",quote:t.product.name,hashtags:"tizi,tizi-raovat"}},[s("img",{attrs:{src:"/tizi/img/share/circle-facebook.svg",alt:""}})]),s("ShareNetwork",{attrs:{network:"twitter",url:t.url,title:"Tizi tìm gì cũng có",hashtags:"tizi,tizi-raovat"}},[s("img",{attrs:{src:"/tizi/img/share/twitter.png",alt:""}})])],1)},x=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("i",{staticClass:"fa fa-share-square",attrs:{"aria-hidden":"true"}}),t._v(": ")])}],w={data:function(){return{url:"http://tizi.vn"}},props:["product"]},y=w,k=(s("0f6d"),Object(g["a"])(y,C,x,!1,null,"df32b6ea",null)),$=k.exports,T={components:{share:$,feedback:b},props:["product"],methods:{number_format:function(t,a,s,e){var i=t,r=isNaN(a=Math.abs(a))?2:a,o=void 0==s?",":s,n=void 0==e?".":e,c=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(r))+"",l=(l=u.length)>3?l%3:0;return c+(l?u.substr(0,l)+n:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+n)+(r?o+Math.abs(i-u).toFixed(r).slice(2):"")}}},B=T,z=(s("a68b"),Object(g["a"])(B,u,l,!1,null,"69f52f3c",null)),S=z.exports,E=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"user",attrs:{id:"right-info"}},[s("div",{staticClass:"group-about-user"},[s("div",{staticClass:"about-user"},[s("img",{staticClass:"avata",attrs:{src:t.product.avata?t.api+"/image/avata/"+t.product.avata:"/tizi/img/avata-default.jpg"}}),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[t._v(t._s(t.product.name_store))]),t.check_online(t.product.id_user)?s("span",{staticClass:"status"},[s("i",{staticClass:"fa fa-circle text-success"}),t._v(" Đang hoạt động")]):s("span",{staticClass:"status"},[s("i",{staticClass:"fa fa-circle text-success",staticStyle:{color:"red"}}),t._v(" Đã offline")])]),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:{name:"route.store",params:{store:t.product.url_store}}}},[s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(" Xem ")])],1)]),s("div",{staticClass:"about-user-2"},[1==t.product.is_vip?s("div",{staticClass:"store"},[s("h5",[t._v("Chuyên")]),s("i",{staticClass:"fa fa-archive",attrs:{"aria-hidden":"true"}})]):s("div",{staticClass:"store"},[s("h5",[t._v("Cá nhân")]),s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"created-at-store"},[s("h5",[t._v("Ngày tham gia")]),s("span",[t._v(t._s(t.getTime(t.product.created_at).format("DD/MM/YYYY")))])])])]),s("a",{staticClass:"phone",attrs:{href:"tel:"+t.product.phone}},[s("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.product.phone))]),s("a",{staticClass:"chat",on:{click:function(a){return t.chat(t.product.id_user,t.product.id)}}},[s("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),t._v(" CHAT VỚI NGƯỜI BÁN")]),t._m(0)])},M=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row other"},[s("div",{staticClass:"col-lg-4 col-md-4"},[s("img",{attrs:{src:"/tizi/img/3_mobile.png",alt:""}})]),s("div",{staticClass:"col-lg-8 col-md-8"},[s("h5",[t._v("NÊN gặp mặt trực tiếp kiểm tra hàng trước khi giao dịch.")]),s("a",[t._v("Tìm hiểu thêm >>")])])])}],N=(s("7db0"),s("5530")),I=s("2f62"),L=s("c1df"),j=s.n(L);j.a.locale("vi");var F={data:function(){return{api:this.$store.state.domainApi}},props:["product"],methods:{getTime:function(t){var a=new j.a(t);return a},chat:function(t,a){var s=this;this.$store.state.token?this.$store.state.user.id==t?this.$swal("Đây là sản phẩm của bạn !","","error"):this.openBox(t,a):this.$swal.fire({title:"Vui lòng đăng nhập !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Thoát",confirmButtonText:"Đăng nhập"}).then((function(t){s.$store.commit("getRoute",s.$route),t.value&&s.$router.push({name:"login"})}))},openBox:function(t,a){var s=this,e={id_product:a,product_name:this.product.name,product_category:this.product.category,product_url:this.product.url,product_url_category:this.product.url_category,product_url_province:this.product.url_province,product_url_district:this.product.url_district,product_image:this.product.id_group_image,product_price:this.product.price,id_user:t,username:this.product.username,avata:this.product.avata};this.$store.state.boxMessage.data=e,o.a.get(this.api+"/auth/message",{params:{id_product:a,id_user1:t,id_user2:this.$store.state.user.id}}).then((function(t){s.$store.state.boxMessage.content=t.data})),this.$store.state.boxMessage.isBoxMessage=!0},check_online:function(t){return!!this.users_online.find((function(a){return a.about.id==t}))}},computed:Object(N["a"])({},Object(I["b"])(["socket","users_online"]))},O=F,q=(s("711b"),Object(g["a"])(O,E,M,!1,null,"34635ca0",null)),H=q.exports,A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"content-header"},[s("ol",{staticClass:"breadcrumb"},[t._m(0),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.province))])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.district))])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.category))])]),s("li",{staticClass:"active"},[t._v(t._s(t.about.name))])])])},R=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Tizi.vn")])])}],V={props:["about"]},Y=V,D=Object(g["a"])(Y,A,R,!1,null,null,null),G=D.exports,J={metaInfo:function(){return{title:"Tizi.vn - ".concat(this.product.about.name),htmlAttrs:{lang:"vi",amp:!0}}},components:{carousel:c.a,about:S,user:H,ContentHeader:G},data:function(){return{api:this.$store.state.domainApi,params:this.$route.params,product:{about:{},image:[],suggest:[]},isShowFull:!1,height:0}},methods:{show:function(){this.isShowFull=!0},hidden:function(){this.isShowFull=!1},number_format:function(t,a,s,e){var i=t,r=isNaN(a=Math.abs(a))?2:a,o=void 0==s?",":s,n=void 0==e?".":e,c=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(r))+"",l=(l=u.length)>3?l%3:0;return c+(l?u.substr(0,l)+n:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+n)+(r?o+Math.abs(i-u).toFixed(r).slice(2):"")},getTime:function(t){if(t){var a=t.split("T");t=a[0];var s=a[1].split(".")[0];return s=new j.a("".concat(t," ").concat(s)),s}return j()()},getHeight:function(){this.height=document.querySelector("html").offsetHeight}},created:function(){var t=this;o.a.get(this.api+"/public/product/"+this.params.id).then((function(a){t.product=a.data})),j.a.locale("vi"),this.getHeight()}},P=J,X=(s("90c8"),Object(g["a"])(P,e,i,!1,null,null,null));a["default"]=X.exports},"0f6d":function(t,a,s){"use strict";var e=s("5352"),i=s.n(e);i.a},1276:function(t,a,s){"use strict";var e=s("d784"),i=s("44e7"),r=s("825a"),o=s("1d80"),n=s("4840"),c=s("8aa5"),u=s("50c4"),l=s("14c3"),d=s("9263"),p=s("d039"),h=[].push,m=Math.min,v=4294967295,f=!p((function(){return!RegExp(v,"y")}));e("split",2,(function(t,a,s){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var e=String(o(this)),r=void 0===s?v:s>>>0;if(0===r)return[];if(void 0===t)return[e];if(!i(t))return a.call(e,t,r);var n,c,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=new RegExp(t.source,p+"g");while(n=d.call(f,e)){if(c=f.lastIndex,c>m&&(l.push(e.slice(m,n.index)),n.length>1&&n.index<e.length&&h.apply(l,n.slice(1)),u=n[0].length,m=c,l.length>=r))break;f.lastIndex===n.index&&f.lastIndex++}return m===e.length?!u&&f.test("")||l.push(""):l.push(e.slice(m)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:a.call(this,t,s)}:a,[function(a,s){var i=o(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,i,s):e.call(String(i),a,s)},function(t,i){var o=s(e,t,this,i,e!==a);if(o.done)return o.value;var d=r(t),p=String(this),h=n(d,RegExp),g=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"y":"g"),b=new h(f?d:"^(?:"+d.source+")",_),C=void 0===i?v:i>>>0;if(0===C)return[];if(0===p.length)return null===l(b,p)?[p]:[];var x=0,w=0,y=[];while(w<p.length){b.lastIndex=f?w:0;var k,$=l(b,f?p:p.slice(w));if(null===$||(k=m(u(b.lastIndex+(f?0:w)),p.length))===x)w=c(p,w,g);else{if(y.push(p.slice(x,w)),y.length===C)return y;for(var T=1;T<=$.length-1;T++)if(y.push($[T]),y.length===C)return y;w=x=k}}return y.push(p.slice(x)),y}]}),!f)},"156f":function(t,a,s){"use strict";var e=s("7311"),i=s.n(e);i.a},"44e7":function(t,a,s){var e=s("861d"),i=s("c6b6"),r=s("b622"),o=r("match");t.exports=function(t){var a;return e(t)&&(void 0!==(a=t[o])?!!a:"RegExp"==i(t))}},4762:function(t,a,s){},5352:function(t,a,s){},"711b":function(t,a,s){"use strict";var e=s("4762"),i=s.n(e);i.a},"72b1":function(t,a,s){},7311:function(t,a,s){},"8a2f":function(t,a,s){},"90c8":function(t,a,s){"use strict";var e=s("72b1"),i=s.n(e);i.a},a68b:function(t,a,s){"use strict";var e=s("8a2f"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-27fc0d18.1dbe33b6.js.map