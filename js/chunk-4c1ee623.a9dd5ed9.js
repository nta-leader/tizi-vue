(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1ee623"],{"916a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-lg-12 col-md-12"},[a("ContentHeader",{attrs:{store:t.store}}),a("AboutStore",{attrs:{store:t.store,count:t.count}}),a("Product",{attrs:{url_store:this.$route.params.store}})],1)},i=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"content-header"},[a("ol",{staticClass:"breadcrumb"},[t._m(0),a("li",{staticClass:"active"},[t._v(t._s(t.store.name_store))])])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("a",{attrs:{href:"#"}},[t._v("Tizi.vn")])])}],n={props:["store"]},c=n,u=a("2877"),l=Object(u["a"])(c,r,o,!1,null,null,null),d=l.exports,p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detail-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-7 col-md-6"},[a("div",{staticClass:"user box box-widget widget-user-2"},[a("div",{staticClass:"widget-user-header"},[a("div",{staticClass:"widget-user-image"},[a("img",{staticClass:"img-circle store-avata",attrs:{src:t.store.avata?t.api+"/image/avata/"+t.store.avata:"/tizi/img/avata-default.jpg",title:t.store.name_store,alt:t.store.name_store}})]),a("h1",{staticClass:"widget-user-username"},[a("i",{class:{"fa fa-circle":!0,"text-success":t.online,"text-danger":!t.online}}),t._v(" "+t._s(t.store.name_store))]),a("h5",{staticClass:"widget-user-desc"},[3==t.store.id_group||2==t.store.id_group?a("a",[a("i",{staticClass:"fa fa-archive",attrs:{"aria-hidden":"true"}}),t._v(" Cửa hàng ")]):t._e(),1==t.store.id_group?a("a",[a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v(" Cá nhân ")]):t._e(),t.store.username!=t.$store.state.user.username?a("a",{on:{click:function(s){return t.chat(t.store)}}},[a("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),t._v(" Trò chuyện ")]):t._e()])]),a("div",{staticClass:"box-footer no-padding"},[a("ul",{staticClass:"nav nav-stacked"},[a("li",[a("a",[a("i",{staticClass:"fa fa-calendar"}),t._v(" Ngày tham gia:"),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.getTime(t.store.created_at).format("L")))])])]),a("li",[a("a",[a("i",{staticClass:"fa fa-user"}),t._v(" Username "),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.store.username))])])]),a("li",[a("a",[a("i",{staticClass:"fa fa-shopping-cart"}),t._v(" Đang bán "),a("span",{staticClass:"pull-right badge bg-aqua"},[t._v(t._s(t.getCountProduct(t.count,1)))])])]),a("li",[a("a",[a("i",{staticClass:"fa fa-cart-arrow-down"}),t._v(" Đã bán "),a("span",{staticClass:"pull-right badge bg-green"},[t._v(t._s(t.getCountProduct(t.count,2)))])])])])])])]),a("div",{class:{"col-lg-5 col-md-6":!0,aboutmobile:!0,showabout:t.isAbout,hiddenabout:!t.isAbout}},[a("ul",{staticClass:"nav nav-stacked"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-user"}),t._v(" Họ Tên: "),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(" "+t._s(t.store.fullname)+" ")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-phone"}),t._v(" Di dộng:"),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.store.phone))])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-map-marker"}),t._v(" Địa chỉ:"),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.store.address))])])]),a("li",[a("a",{attrs:{target:"_blank",href:t.store.facebook}},[a("i",{staticClass:"fa fa-link"}),t._v(" Facebook: "),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.store.facebook))])])]),a("li",[a("a",[a("i",{staticClass:"fa fa-link"}),t._v(" Zalo: "),a("span",{staticClass:"pull-right badge bg-blue"},[t._v(t._s(t.store.zalo))])])])]),a("div",{staticClass:"box-menu"},[a("a",{staticClass:"about-menu-icon btn btn-dropbox ",on:{click:function(s){t.isAbout=!t.isAbout}}},[a("i",{staticClass:"fa fa-user"})])])])])])},h=[],b=(a("7db0"),a("5530")),f=a("c1df"),g=a.n(f),_=a("bc3a"),v=a.n(_),m=a("2f62"),C={data:function(){return{api:this.$store.state.domainApi,isAbout:!1}},methods:{getCountProduct:function(t,s){var a=t.find((function(t){return t.status==s}));return a?a.count_product:0},getTime:function(t){var s=new g.a(t);return s},chat:function(t){var s=this;this.$store.state.token?this.openBoxMessage(t):this.$swal.fire({title:"Vui lòng đăng nhập !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Thoát",confirmButtonText:"Đăng nhập"}).then((function(t){s.$store.commit("getRoute",s.$route),t.value&&s.$router.push({name:"login"})}))},openBoxMessage:function(t){var s=this,a={id_product:0,id_user:t.id,username:t.username,avata:t.avata};this.$store.state.boxMessage.data=a,v.a.get(this.api+"/auth/message",{params:{id_product:a.id_product,id_user1:a.id_user,id_user2:this.$store.state.user.id}}).then((function(t){s.$store.state.boxMessage.content=t.data,s.$store.state.boxMessage.isBoxMessage=!0})),this.$store.state.user.id!=t.id_user1&&0==t.status&&this.viewMessage(t.id_product,t.id_user1)},viewMessage:function(t,s){var a=this;v.a.get(this.api+"/auth/message/view-message",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)},params:{id_product:t,id_user1:s}}).then((function(t){t.data.success&&a.$store.state.countNewMessage--}))},check_online:function(){console.log(this.store),this.socket.emit("check_online",{id:this.store.id})}},props:["store","count"],created:function(){g.a.locale("vi")},computed:Object(b["a"])({},Object(m["b"])(["socket","online"])),updated:function(){this.check_online()}},x=C,w=(a("bf09"),Object(u["a"])(x,p,h,!1,null,null,null)),$=w.exports,k=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product box box-success"},[t._m(0),a("div",{staticClass:"box-body no-padding",attrs:{id:"store-product"}},[a("div",{staticClass:"row"},t._l(t.product,(function(s){return a("div",{key:s.id,staticClass:"col-lg-3 col-md-3 col-sm-4 col-xs-6"},[a("router-link",{attrs:{to:{name:"route.product",params:{province:s.url_province,district:s.url_district,category:s.url_category,id:s.id,product:s.url}},title:s.name}},[a("div",{staticClass:"user-product item"},[a("img",{staticClass:"img",attrs:{src:t.api+"/image/product/thumbnail/"+s.image}}),a("h2",{staticClass:"name"},[t._v(t._s(s.name))]),0!=s.price?a("span",{staticClass:"price"},[t._v(t._s(t.number_format(s.price,0))+" đ")]):a("span",{staticClass:"price"},[t._v("Thoả thuận")])])])],1)})),0)])])},M=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[t._v("Đang bán")]),a("div",{staticClass:"box-tools pull-right"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"}},[a("i",{staticClass:"fa fa-minus"})])])])}],A=(a("fb6a"),a("b680"),a("ac1f"),a("5319"),{data:function(){return{api:this.$store.state.domainApi,product:[]}},props:["url_store"],methods:{number_format:function(t,s,a,e){var i=t,r=isNaN(s=Math.abs(s))?2:s,o=void 0==a?",":a,n=void 0==e?".":e,c=i<0?"-":"",u=parseInt(i=Math.abs(+i||0).toFixed(r))+"",l=(l=u.length)>3?l%3:0;return c+(l?u.substr(0,l)+n:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+n)+(r?o+Math.abs(i-u).toFixed(r).slice(2):"")}},created:function(){var t=this;v.a.get(this.api+"/public/store/product",{params:{url_store:this.url_store}}).then((function(s){t.product=s.data}))}}),B=A,T=(a("a9cf"),Object(u["a"])(B,k,M,!1,null,null,null)),j=T.exports,y={data:function(){return{api:this.$store.state.domainApi,store:{},count:[]}},components:{ContentHeader:d,AboutStore:$,Product:j},created:function(){var t=this;v.a.get(this.api+"/public/store/"+this.$route.params.store).then((function(s){t.store=s.data.store,t.count=s.data.count}))}},E=y,O=Object(u["a"])(E,e,i,!1,null,null,null);s["default"]=O.exports},a9cf:function(t,s,a){"use strict";var e=a("de51"),i=a.n(e);i.a},bf09:function(t,s,a){"use strict";var e=a("d6b1"),i=a.n(e);i.a},d6b1:function(t,s,a){},de51:function(t,s,a){}}]);
//# sourceMappingURL=chunk-4c1ee623.a9dd5ed9.js.map