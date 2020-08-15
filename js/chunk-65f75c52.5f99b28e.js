(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65f75c52"],{"9ce9":function(e,a,t){"use strict";var i=t("c4bd"),s=t.n(i);s.a},bb29:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"box box-primary"},[e._m(0),t("div",{staticClass:"box-body no-padding"},[t("div",{staticClass:"box-header with-border"},[t("form",{attrs:{action:"javascript:void(0)"}},[e.isEmailNew?e._e():t("div",{staticClass:"form-group has-feedback"},[t("span",{staticClass:"form-control"},[e._v(e._s(e.email))]),t("span",{staticClass:"glyphicon glyphicon-log-in form-control-feedback"}),t("a",{staticClass:"btn-email",on:{click:function(a){e.isEmailNew=!e.isEmailNew}}},[e._v("Đổi email")]),t("a",{attrs:{href:"#"},on:{click:e.confirmMail}},[e._v("Lấy code với email trên")])]),e.isEmailNew?t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.emailNew,expression:"emailNew"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{name:"emailNew","data-vv-as":"email",type:"email",placeholder:"Email mới"},domProps:{value:e.emailNew},on:{keyup:e.checkEmail,input:function(a){a.target.composing||(e.emailNew=a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-log-in form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("emailNew")))]),e.isEmail?t("span",{staticClass:"error"},[e._v("Email đã được sử dụng !")]):e._e(),t("a",{staticClass:"btn-email",on:{click:function(a){e.isEmailNew=!e.isEmailNew}}},[e._v("Email cũ")]),e.isEmail?e._e():t("a",{attrs:{href:"#"},on:{click:e.confirmMail}},[e._v("Lấy code với email trên")])]):e._e(),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:"required|min:4|max:4",expression:"'required|min:4|max:4'"}],staticClass:"form-control",attrs:{name:"code",type:"text",placeholder:"Kiểm tra email > nhập code..."},domProps:{value:e.code},on:{input:function(a){a.target.composing||(e.code=a.target.value)}}}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("code")))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-8"}),t("div",{staticClass:"col-xs-4"},[e.isEmailNew&&e.isEmail?e._e():t("button",{staticClass:"btn btn-primary btn-block btn-flat",attrs:{type:"submit"},on:{click:e.confirm}},[e._v("Xác nhận")])])])])])])])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"box-header with-border"},[t("h3",{staticClass:"box-title"},[e._v("Xác thực tài khoản")])])}],r=(t("96cf"),t("1da1")),n=t("7bb1"),c=t("bc3a"),o=t.n(c),l={metaInfo:function(){return{title:"Xác thực tài khoản",htmlAttrs:{lang:"vi",amp:!0}}},data:function(){return{api:this.$store.state.domainApi,isEmailNew:!1,isEmail:!1,email:this.$store.state.user.email,emailNew:"",email_succes:"",code:"",dictionary:{vi:{custom:{emailNew:{required:"Vui lòng nhập email !",email:"Vui lòng nhập đúng định dạng email !"},code:{required:"Vui lòng nhập code!",min:"Code có 4 ký tự !",max:"Code có 4 ký tự !"}}}}}},methods:{check:function(e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("".concat(a.api,"/auth/check"),{params:e});case 2:return i=t.sent,t.abrupt("return",i.data);case 4:case"end":return t.stop()}}),t)})))()},checkEmail:function(e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i={email:e.target.value},!e.target.value){t.next=6;break}return t.next=4,a.check(i);case 4:s=t.sent,a.isEmail=s.result;case 6:case"end":return t.stop()}}),t)})))()},confirm:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,o.a.put("".concat(e.api,"/auth/active"),{username:e.$store.state.user.username,code:e.code,email_new:e.isEmailNew?e.email_succes:null});case 2:t=a.sent,1===t.data.success?(e.$store.state.user.status=1,e.flash(t.data.message,"success",{timeout:3e3}),e.$router.push({name:"home"})):e.$swal(t.data.message,"","error");case 4:case"end":return a.stop()}}),a)})))()},confirmMail:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.$swal.fire({title:"Đang gửi code đến email của bạn",text:"Vui lòng chờ !",allowOutsideClick:!1}),e.$swal.showLoading(),a.next=4,o.a.put("".concat(e.api,"/auth/confirmMail"),{username:e.$store.state.user.username,email:e.isEmailNew?e.emailNew:e.email});case 4:t=a.sent,1===t.data.success?(e.flash(t.data.message,"success",{timeout:3e3}),e.$swal.close(),e.email_succes=e.emailNew):e.$swal(t.data.message,"","error");case 6:case"end":return a.stop()}}),a)})))()}},created:function(){n["a"].localize(this.dictionary);var e=new n["a"]({first_name:"alpha"});e.localize("vi")}},m=l,u=(t("9ce9"),t("2877")),d=Object(u["a"])(m,i,s,!1,null,null,null);a["default"]=d.exports},c4bd:function(e,a,t){}}]);
//# sourceMappingURL=chunk-65f75c52.5f99b28e.js.map