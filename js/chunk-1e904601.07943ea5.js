(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e904601"],{1169:function(t,a,e){"use strict";var s=e("c9cd"),n=e.n(s);n.a},1994:function(t,a,e){},"8b8a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"container"},[e("HeaderContent"),e("div",{staticClass:"main-content"},[e("div",{staticClass:"row"},[e("Leftbar"),e("div",{staticClass:"col-md-9 col-sm-9 user-content"},[e("router-view")],1)],1)])],1)])},n=[],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"content-header",attrs:{id:"user-header-content"}},[e("h1",[t._v("Thông tin tài khoản")]),e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-home"}),t._v(" Tizi.vn")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Tài khoản")])])])])}],l=(e("b828"),e("2877")),r={},c=Object(l["a"])(r,i,o,!1,null,null,null),u=c.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"col-md-3":!0,"col-sm-3":!0,show:t.leftbarmenu,showmenu:t.isMenu,hiddenmenu:!t.isMenu},attrs:{id:"user-leftbar"}},[e("div",{staticClass:"box-content"},[e("div",{staticClass:"box box-solid",attrs:{id:"box-user"}},[e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("Tài khoản")]),t.isMenu?e("div",{staticClass:"box-tools"},[e("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"},on:{click:t.togger}},[e("i",{staticClass:"fa fa-minus"})])]):t._e()]),e("div",{staticClass:"box-body no-padding"},[e("ul",{staticClass:"nav nav-pills nav-stacked"},[e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/thong-tin-tai-khoan")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.profile"}}},[e("i",{staticClass:"fa fa-user"}),t._v(" Thông tin tài khoản ")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/thong-bao")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.notification"}}},[e("i",{staticClass:"fa fa-bell"}),t._v(" Thông báo ")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/tin-nhan")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.message"}}},[e("i",{staticClass:"fa fa-envelope"}),t._v(" Tin nhắn ")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/gian-hang-cua-ban")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.aboutstore"}}},[e("i",{staticClass:"fa fa-archive"}),t._v(" Quản lý gian hàng")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/cac-tin-da-luu")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.productfollow"}}},[e("i",{staticClass:"fa fa-rss"}),t._v(" Các tin đã lưu")])],1),e("li",{on:{click:t.togger}},[t._m(0)])])])]),e("div",{staticClass:"box box-solid"},[t._m(1),e("div",{staticClass:"box-body no-padding"},[e("ul",{staticClass:"nav nav-pills nav-stacked"},[e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/quan-ly-san-pham")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.product"}}},[e("i",{staticClass:"fa fa-circle-o text-red"}),t._v(" Quản lý sản phẩm ")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/day-tin")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.pushproduct"}}},[e("i",{staticClass:"fa fa-circle-o text-yellow"}),t._v(" Đẩy tin ")])],1),e("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/tin-uu-tien")},on:{click:t.togger}},[e("router-link",{attrs:{to:{name:"user.productpriority"}}},[e("i",{staticClass:"fa fa-circle-o text-light-blue"}),t._v(" Tin ưu tiên ")])],1)])])])]),t.isMenu?t._e():e("div",{staticClass:"box-menu"},[e("a",{staticClass:"user-menu-icon btn btn-dropbox ",on:{click:t.togger}},[e("i",{staticClass:"fa fa-fw fa-align-justify"})])])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-filter"}),t._v(" Nap tiền "),e("span",{staticClass:"label label-warning pull-right"},[t._v("500.000 đ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box-header with-border"},[e("h3",{staticClass:"box-title"},[t._v("Tin đăng")])])}],h={data:function(){return{leftbarmenu:!1,leftbarmenuY:null,isMenu:!1}},methods:{togger:function(){this.isMenu=!this.isMenu,this.isMenu?document.querySelector("body").classList.add("modal-open"):document.querySelector("body").classList.remove("modal-open")},showLeftbar:function(t){t.path[1].scrollY>=this.leftbarmenuY?this.leftbarmenu?console.log("da show roi!"):(console.log("show!"),this.leftbarmenu=!0):this.leftbarmenu?(console.log("an!"),this.leftbarmenu=!1):console.log("da an roi")},scrollfunction:function(){window.addEventListener("scroll",this.showLeftbar)},removeScroll:function(t){window.removeEventListener("scroll",t)}},mounted:function(){this.leftbarmenuY=document.querySelector("#user-leftbar").offsetTop-50,this.scrollfunction()},destroyed:function(){this.removeScroll(this.showLeftbar)}},b=h,v=(e("1169"),Object(l["a"])(b,f,d,!1,null,null,null)),m=v.exports,g={name:"LayoutUser",components:{HeaderContent:u,Leftbar:m}},C=g,k=(e("b006"),Object(l["a"])(C,s,n,!1,null,null,null));a["default"]=k.exports},b006:function(t,a,e){"use strict";var s=e("fda7"),n=e.n(s);n.a},b828:function(t,a,e){"use strict";var s=e("1994"),n=e.n(s);n.a},c9cd:function(t,a,e){},fda7:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1e904601.07943ea5.js.map