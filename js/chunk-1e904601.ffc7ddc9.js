(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e904601"],{1169:function(t,e,a){"use strict";var s=a("c9cd"),n=a.n(s);n.a},1994:function(t,e,a){},"8b8a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"container"},[a("HeaderContent"),a("div",{staticClass:"main-content"},[a("div",{staticClass:"row"},[a("Leftbar"),a("div",{staticClass:"col-md-9 col-sm-9 user-content"},[a("router-view")],1)],1)])],1)])},n=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content-header",attrs:{id:"user-header-content"}},[a("h1",[t._v("Thông tin tài khoản")]),a("ol",{staticClass:"breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-home"}),t._v(" Tizi.vn")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Tài khoản")])])])])}],l=(a("b828"),a("2877")),r={},c=Object(l["a"])(r,i,o,!1,null,null,null),u=c.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"col-md-3":!0,"col-sm-3":!0,show:t.leftbarmenu,showmenu:t.isMenu,hiddenmenu:!t.isMenu},attrs:{id:"user-leftbar"}},[a("div",{staticClass:"box-content"},[a("div",{staticClass:"box box-solid",attrs:{id:"box-user"}},[a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[t._v("Tài khoản")]),t.isMenu?a("div",{staticClass:"box-tools"},[a("button",{staticClass:"btn btn-box-tool",attrs:{type:"button","data-widget":"collapse"},on:{click:t.togger}},[a("i",{staticClass:"fa fa-minus"})])]):t._e()]),a("div",{staticClass:"box-body no-padding"},[a("ul",{staticClass:"nav nav-pills nav-stacked"},[a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/thong-tin-tai-khoan")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.profile"}}},[a("i",{staticClass:"fa fa-user"}),t._v(" Thông tin tài khoản ")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/thong-bao")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.notification"}}},[a("i",{staticClass:"fa fa-bell"}),t._v(" Thông báo ")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/tin-nhan")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.message"}}},[a("i",{staticClass:"fa fa-envelope"}),t._v(" Tin nhắn ")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/gian-hang-cua-ban")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.aboutstore"}}},[a("i",{staticClass:"fa fa-archive"}),t._v(" Quản lý gian hàng")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/cac-tin-da-luu")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.productfollow"}}},[a("i",{staticClass:"fa fa-rss"}),t._v(" Các tin đã lưu")])],1)])])]),a("div",{staticClass:"box box-solid"},[t._m(0),a("div",{staticClass:"box-body no-padding"},[a("ul",{staticClass:"nav nav-pills nav-stacked"},[a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/quan-ly-san-pham")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.product"}}},[a("i",{staticClass:"fa fa-circle-o text-red"}),t._v(" Quản lý sản phẩm ")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/day-tin")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.pushproduct"}}},[a("i",{staticClass:"fa fa-circle-o text-yellow"}),t._v(" Đẩy tin ")])],1),a("li",{class:{active:0==t.$route.fullPath.indexOf("/tai-khoan/tin-uu-tien")},on:{click:t.togger}},[a("router-link",{attrs:{to:{name:"user.productpriority"}}},[a("i",{staticClass:"fa fa-circle-o text-light-blue"}),t._v(" Tin ưu tiên ")])],1)])])])]),t.isMenu?t._e():a("div",{staticClass:"box-menu"},[a("a",{staticClass:"user-menu-icon btn btn-dropbox ",on:{click:t.togger}},[a("i",{staticClass:"fa fa-fw fa-align-justify"})])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[t._v("Tin đăng")])])}],h={data:function(){return{leftbarmenu:!1,leftbarmenuY:null,isMenu:!1}},methods:{togger:function(){this.isMenu=!this.isMenu,this.isMenu?document.querySelector("body").classList.add("mobile-modal-open"):document.querySelector("body").classList.remove("mobile-modal-open")},showLeftbar:function(t){t.path[1].scrollY>=this.leftbarmenuY?this.leftbarmenu||(this.leftbarmenu=!0):this.leftbarmenu&&(this.leftbarmenu=!1)},scrollfunction:function(){window.addEventListener("scroll",this.showLeftbar)},removeScroll:function(t){window.removeEventListener("scroll",t)}},mounted:function(){this.leftbarmenuY=document.querySelector("#user-leftbar").offsetTop-50,this.scrollfunction()},destroyed:function(){this.removeScroll(this.showLeftbar),document.querySelector("body").classList.remove("mobile-modal-open")}},b=h,v=(a("1169"),Object(l["a"])(b,f,d,!1,null,null,null)),m=v.exports,g={name:"LayoutUser",components:{HeaderContent:u,Leftbar:m}},k=g,C=(a("b006"),Object(l["a"])(k,s,n,!1,null,null,null));e["default"]=C.exports},b006:function(t,e,a){"use strict";var s=a("fda7"),n=a.n(s);n.a},b828:function(t,e,a){"use strict";var s=a("1994"),n=a.n(s);n.a},c9cd:function(t,e,a){},fda7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1e904601.ffc7ddc9.js.map