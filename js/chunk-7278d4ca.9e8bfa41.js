(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7278d4ca"],{"0233":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-9 col-md-9"},[s("ContentHeader",{attrs:{about:t.product.about}}),s("div",{staticClass:"detail-content"},[s("div",{staticClass:"row"},[t.isShowFull?s("div",{attrs:{id:"show-full"}},[s("button",{staticClass:"btn btn-danger",on:{click:t.hidden}},[t._v("x")]),s("carousel",{attrs:{responsive:{0:{items:1,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.image,(function(a){return s("div",{key:a.index,staticClass:"image"},[s("img",{style:{height:t.height+"px"},attrs:{src:t.api+"/image/product/"+a.name}}),s("div",{staticClass:"mold",style:{height:t.height+"px",backgroundImage:"url("+t.api+"/image/product/"+a.name+")"}})])})),0)],1):t._e(),s("div",{staticClass:"col-lg-8 col-md-8",attrs:{id:"_about-product"}},[s("div",{staticClass:"_product-image",on:{click:t.show}},[t.product.image.length?s("carousel",{staticClass:"owl-product",attrs:{responsive:{0:{items:1,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.image,(function(a){return s("div",{key:a.index,staticClass:"image"},[s("div",{staticClass:"mold",style:{backgroundImage:"url("+t.api+"/image/product/"+a.name+")"}}),s("img",{attrs:{src:t.api+"/image/product/"+a.name}})])})),0):t._e(),s("span",{staticClass:"_product-time"},[t._v(t._s(t.getTime(t.product.about.date).fromNow()))])],1),s("about",{attrs:{product:t.product.about}})],1),s("div",{staticClass:"col-lg-4 col-md-4 info-user"},[s("user",{attrs:{product:t.product.about}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 col-md-8"},[s("div",{staticClass:"content-body"},[s("div",{staticClass:"product-content",attrs:{id:"about-product-content"},domProps:{innerHTML:t._s(t.product.about.content)}})])])]),t.product.suggest.length?s("div",{staticClass:"row products"},[s("div",{staticClass:"hr"}),s("div",{staticClass:"col-lg-12"},[s("h3",[t._v("Tin đăng khác: "),s("span",{staticStyle:{color:"#FF9800"}},[t._v(t._s(t.product.about.province)+" - "+t._s(t.product.about.category))])]),s("carousel",{staticClass:"product-suggest",attrs:{responsive:{320:{items:2,nav:!1,loop:!1,autoplay:!0},600:{items:3,nav:!1,loop:!1,autoplay:!0},1e3:{items:4,nav:!1,loop:!1,autoplay:!0}}}},t._l(t.product.suggest,(function(a,e){return s("router-link",{key:e,staticClass:"item",attrs:{to:{name:"route.product.index",params:{province:a.url_province,district:a.url_district,category:a.url_category,id:a.id,product:a.url}},title:a.name}},[s("img",{staticClass:"img",attrs:{src:t.api+"/image/product/thumbnail/"+a.image,alt:a.name,title:a.name}}),s("h2",{staticClass:"title",attrs:{title:a.name}},[t._v(t._s(a.name))]),0!=a.price?s("span",{staticClass:"price"},[t._v(t._s(t.number_format(a.price,0))+" đ")]):t._e(),0==a.price?s("span",{staticClass:"price"},[t._v("Thoả thuận")]):t._e()])})),1)],1)]):t._e()])],1)},i=[],o=(s("fb6a"),s("b0c0"),s("b680"),s("ac1f"),s("5319"),s("bc3a")),r=s.n(o),c=s("7ec7"),n=s.n(c),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about",attrs:{id:"about"}},[s("div",{staticClass:"col-lg-10 col-md-10 col-sm-10 col-xs-10"},[s("h1",[t._v(t._s(t.product.name))]),0!=t.product.price?s("span",{staticClass:"price"},[t._v(t._s(t.number_format(t.product.price,0))+" đ")]):t._e(),0==t.product.price?s("span",{staticClass:"price"},[t._v("Thỏa thuận")]):t._e(),s("share",{attrs:{product:t.product}})],1),s("feedback",{attrs:{id_product:t.product.id}})],1)},l=[],d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-2 col-md-2 col-sm-2 col-xs-2"},[s("a",{staticClass:"link",attrs:{href:"#",id:"block-product"},on:{click:t.show}},[s("i",{staticClass:"fa fa-times-circle-o",attrs:{"aria-hidden":"true"}}),t._v(" Báo xấu")]),s("div",{class:{modal:!0,fade:!0,in:!0,show:t.menuLoc.status}},[s("div",{staticClass:"modal-dialog"},[s("transition",{attrs:{name:"slide-fade"}},[t.menuLoc.content?s("div",{staticClass:"modal-content"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submit(a)}}},[s("div",{staticClass:"modal-header"},[s("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.hide}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("h4",{staticClass:"modal-title"},[t._v("Báo xấu sản phẩm")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"box-header"},[s("h3",{staticClass:"box-title"},[t._v("Nội dung")]),s("span",{staticStyle:{color:"red","margin-left":"20px"}},[t._v(t._s(t.errors.first("content")))])]),s("div",{staticClass:"box-body"},[s("vue-editor",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{name:"content","editor-toolbar":t.customToolbar},model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1)]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-default pull-left",attrs:{type:"button"},on:{click:t.hide}},[t._v("Thoát")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Gửi")])])])]):t._e()])],1)])])},p=[],h=s("7bb1"),m=s("5873"),v={components:{VueEditor:m["a"]},data:function(){return{api:this.$store.state.domainApi,menuLoc:{status:!1,content:!1},customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"justify"},{align:"right"}],["link","video"]],content:"",id_user:1}},props:["id_product"],methods:{show:function(){var t=this;this.$store.state.token?(this.menuLoc.status=!0,this.menuLoc.content=!0,document.querySelector("body").classList.add("modal-open")):this.$swal.fire({title:"Vui lòng đăng nhập !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Thoát",confirmButtonText:"Đăng nhập"}).then((function(a){a.value&&t.$router.push({name:"login"})}))},hide:function(){var t=this;this.menuLoc.content=!1,document.querySelector("body").classList.remove("modal-open"),setTimeout((function(){t.menuLoc.status=!1}),400)},submit:function(){var t=this;this.$validator.validate().then((function(a){a&&(t.$swal.fire({title:"Đang gửi",text:"Vui lòng chờ !",allowOutsideClick:!1}),t.$swal.showLoading(),r.a.post("".concat(t.api,"/public/productfeedback"),{id_product:t.id_product,id_user:t.id_user,content:t.content}).then((function(a){t.$swal.close(),1===a.data.success?(t.flash(a.data.message,"success",{timeout:3e3}),t.hide()):t.flash(a.data.message,"error",{timeout:3e3})})))}))}},created:function(){h["a"].localize(this.dictionary);var t=new h["a"]({first_name:"alpha"});t.localize("vi")}},f=v,_=(s("156f"),s("2877")),g=Object(_["a"])(f,d,p,!1,null,"05e65474",null),b=g.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"share"},[t._m(0),s("ShareNetwork",{attrs:{network:"facebook",url:t.url,title:"Tizi tìm gì cũng có",quote:t.product.name,hashtags:"tizi,tizi-raovat"}},[s("img",{attrs:{src:"/tizi/img/share/circle-facebook.svg",alt:""}})]),s("ShareNetwork",{attrs:{network:"twitter",url:t.url,title:"Tizi tìm gì cũng có",hashtags:"tizi,tizi-raovat"}},[s("img",{attrs:{src:"/tizi/img/share/twitter.png",alt:""}})])],1)},w=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[s("i",{staticClass:"fa fa-share-square",attrs:{"aria-hidden":"true"}}),t._v(": ")])}],x={data:function(){return{url:"http://tizi.vn"}},props:["product"]},y=x,k=(s("0f6d"),Object(_["a"])(y,C,w,!1,null,"df32b6ea",null)),$=k.exports,T={components:{share:$,feedback:b},props:["product"],methods:{number_format:function(t,a,s,e){var i=t,o=isNaN(a=Math.abs(a))?2:a,r=void 0==s?",":s,c=void 0==e?".":e,n=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(o))+"",l=(l=u.length)>3?l%3:0;return n+(l?u.substr(0,l)+c:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+c)+(o?r+Math.abs(i-u).toFixed(o).slice(2):"")}}},B=T,z=(s("a68b"),Object(_["a"])(B,u,l,!1,null,"69f52f3c",null)),N=z.exports,M=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"user",attrs:{id:"right-info"}},[s("div",{staticClass:"group-about-user"},[s("div",{staticClass:"about-user"},[s("img",{staticClass:"avata",attrs:{src:t.product.avata?t.api+"/image/avata/"+t.product.avata:"/tizi/img/avata-default.jpg"}}),s("div",{staticClass:"text"},[s("h3",{staticClass:"title"},[t._v(t._s(t.product.name_store))]),t.check_online(t.product.id_user)?s("span",{staticClass:"status"},[s("i",{staticClass:"fa fa-circle text-success"}),t._v(" Đang hoạt động")]):s("span",{staticClass:"status"},[s("i",{staticClass:"fa fa-circle text-success",staticStyle:{color:"red"}}),t._v(" Đã offline")])]),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:{name:"route.store",params:{store:t.product.url_store}}}},[s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(" Xem ")])],1)]),s("div",{staticClass:"about-user-2"},[1==t.product.is_vip?s("div",{staticClass:"store"},[s("h5",[t._v("Chuyên")]),s("i",{staticClass:"fa fa-archive",attrs:{"aria-hidden":"true"}})]):s("div",{staticClass:"store"},[s("h5",[t._v("Cá nhân")]),s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),s("div",{staticClass:"created-at-store"},[s("h5",[t._v("Ngày tham gia")]),s("span",[t._v(t._s(t.getTime(t.product.created_at).format("DD/MM/YYYY")))])])])]),s("a",{staticClass:"phone",attrs:{href:"tel:"+t.product.phone}},[s("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.product.phone))]),s("a",{staticClass:"chat",on:{click:function(a){return t.chat(t.product.id_user,t.product.id)}}},[s("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}}),t._v(" CHAT VỚI NGƯỜI BÁN")]),t._m(0)])},S=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row other"},[s("div",{staticClass:"col-lg-4 col-md-4"},[s("img",{attrs:{src:"/tizi/img/3_mobile.png",alt:""}})]),s("div",{staticClass:"col-lg-8 col-md-8"},[s("h5",[t._v("NÊN gặp mặt trực tiếp kiểm tra hàng trước khi giao dịch.")]),s("a",[t._v("Tìm hiểu thêm >>")])])])}],L=(s("7db0"),s("5530")),j=s("2f62"),E=s("c1df"),F=s.n(E);F.a.locale("vi");var O={data:function(){return{api:this.$store.state.domainApi}},props:["product"],methods:{getTime:function(t){var a=new F.a(t);return a},chat:function(t,a){var s=this;this.$store.state.token?this.$store.state.user.id==t?this.$swal("Đây là sản phẩm của bạn !","","error"):this.openBox(t,a):this.$swal.fire({title:"Vui lòng đăng nhập !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Thoát",confirmButtonText:"Đăng nhập"}).then((function(t){s.$store.commit("getRoute",s.$route),t.value&&s.$router.push({name:"login"})}))},openBox:function(t,a){var s=this,e={id_product:a,product_name:this.product.name,product_category:this.product.category,product_url:this.product.url,product_url_category:this.product.url_category,product_url_province:this.product.url_province,product_url_district:this.product.url_district,product_image:this.product.id_group_image,product_price:this.product.price,id_user:t,username:this.product.username,avata:this.product.avata};this.$store.state.boxMessage.data=e,r.a.get(this.api+"/auth/message",{params:{id_product:a,id_user1:t,id_user2:this.$store.state.user.id}}).then((function(t){s.$store.state.boxMessage.content=t.data})),this.$store.state.boxMessage.isBoxMessage=!0},check_online:function(t){return!!this.users_online.find((function(a){return a.about.id==t}))}},computed:Object(L["a"])({},Object(j["b"])(["socket","users_online"]))},q=O,H=(s("711b"),Object(_["a"])(q,M,S,!1,null,"34635ca0",null)),I=H.exports,A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"content-header"},[s("ol",{staticClass:"breadcrumb"},[t._m(0),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.province))])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.district))])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(t._s(t.about.category))])]),s("li",{staticClass:"active"},[t._v(t._s(t.about.name))])])])},V=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("a",{attrs:{href:"#"}},[t._v("Tizi.vn")])])}],Y={props:["about"]},D=Y,G=Object(_["a"])(D,A,V,!1,null,null,null),J=G.exports,P={metaInfo:function(){return{title:"Tizi.vn - ".concat(this.product.about.name),htmlAttrs:{lang:"vi",amp:!0}}},components:{carousel:n.a,about:N,user:I,ContentHeader:J},data:function(){return{api:this.$store.state.domainApi,params:this.$route.params,product:{about:{},image:[],suggest:[]},isShowFull:!1,height:0}},methods:{show:function(){this.isShowFull=!0},hidden:function(){this.isShowFull=!1},number_format:function(t,a,s,e){var i=t,o=isNaN(a=Math.abs(a))?2:a,r=void 0==s?",":s,c=void 0==e?".":e,n=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(o))+"",l=(l=u.length)>3?l%3:0;return n+(l?u.substr(0,l)+c:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+c)+(o?r+Math.abs(i-u).toFixed(o).slice(2):"")},getTime:function(t){var a=F()(t);return a},getHeight:function(){this.height=document.querySelector("html").offsetHeight}},created:function(){var t=this;r.a.get(this.api+"/public/product/"+this.params.id).then((function(a){t.product=a.data})),F.a.locale("vi"),this.getHeight()}},R=P,X=(s("90c8"),Object(_["a"])(R,e,i,!1,null,null,null));a["default"]=X.exports},"0f6d":function(t,a,s){"use strict";var e=s("5352"),i=s.n(e);i.a},"156f":function(t,a,s){"use strict";var e=s("7311"),i=s.n(e);i.a},4762:function(t,a,s){},5352:function(t,a,s){},"711b":function(t,a,s){"use strict";var e=s("4762"),i=s.n(e);i.a},"72b1":function(t,a,s){},7311:function(t,a,s){},"8a2f":function(t,a,s){},"90c8":function(t,a,s){"use strict";var e=s("72b1"),i=s.n(e);i.a},a68b:function(t,a,s){"use strict";var e=s("8a2f"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-7278d4ca.9e8bfa41.js.map