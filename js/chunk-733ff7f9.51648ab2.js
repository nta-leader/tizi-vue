(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733ff7f9"],{"0ea0":function(e,a,t){},"1feb":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"container"},[t("div",{staticClass:"login-box"},[t("div",{staticClass:"login-box-body"},[e.isRegister?e._e():t("p",{staticClass:"login-box-msg"},[e._v("Đăng ký thành viên tizi")]),e.isRegister?e._e():t("form",{attrs:{action:"javascript:void(0)"},on:{submit:e.register}},[t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:5|regex:^[a-zA-Z0-9-_]*$",expression:"'required|min:5|regex:^[a-zA-Z0-9-_]*$'"}],staticClass:"form-control",attrs:{name:"username",type:"text",placeholder:"Tên đăng nhập..."},domProps:{value:e.user.username},on:{keyup:e.checkUsername,input:function(a){a.target.composing||e.$set(e.user,"username",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-user form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("username")))]),e.isUsername?t("span",{staticClass:"error"},[e._v("Tài khoản đã được sử dụng !")]):e._e()]),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fullname,expression:"user.fullname"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"fullname",type:"text",placeholder:"Họ tên"},domProps:{value:e.user.fullname},on:{input:function(a){a.target.composing||e.$set(e.user,"fullname",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-user form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("fullname")))])]),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{name:"email",type:"email",placeholder:"Email"},domProps:{value:e.user.email},on:{keyup:e.checkEmail,input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-envelope form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("email")))]),e.isEmail?t("span",{staticClass:"error"},[e._v("Email đã được sử dụng !")]):e._e()]),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"},{name:"validate",rawName:"v-validate",value:"required|min:10|max:10",expression:"'required|min:10|max:10'"}],staticClass:"form-control",attrs:{name:"phone",type:"text",placeholder:"SDT"},domProps:{value:e.user.phone},on:{keyup:e.checkPhone,input:function(a){a.target.composing||e.$set(e.user,"phone",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-phone form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("phone")))]),e.isPhone?t("span",{staticClass:"error"},[e._v("SDT đã được sử dụng !")]):e._e()]),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6",expression:"'required|min:6'"}],staticClass:"form-control",attrs:{name:"password",type:"password",placeholder:"Mật khẩu",id:"password"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-lock form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("password")))])]),t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.rPassword,expression:"user.rPassword"},{name:"validate",rawName:"v-validate",value:"required|min:6|rPassword",expression:"'required|min:6|rPassword'"}],staticClass:"form-control",attrs:{name:"rPassword",type:"password",placeholder:"Nhập lại mật khẩu",id:"rPassword"},domProps:{value:e.user.rPassword},on:{input:function(a){a.target.composing||e.$set(e.user,"rPassword",a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-log-in form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("rPassword")))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-8"}),t("div",{staticClass:"col-xs-4"},[e.isUsername||e.isEmail||e.isPhone?e._e():t("button",{staticClass:"btn btn-primary btn-block btn-flat",attrs:{type:"submit"}},[e._v("Đăng ký")])])])]),e.isRegister?t("p",{staticClass:"login-box-msg"},[e._v("Xác thực tài khoản !")]):e._e(),e.isRegister?t("form",{attrs:{action:"javascript:void(0)"}},[t("div",{staticClass:"form-group has-feedback"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:"required|min:4",expression:"'required|min:4'"}],staticClass:"form-control",attrs:{name:"code",type:"text",placeholder:"Kiểm tra email > nhập code..."},domProps:{value:e.code},on:{input:function(a){a.target.composing||(e.code=a.target.value)}}}),t("span",{staticClass:"glyphicon glyphicon-log-in form-control-feedback"}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("code")))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xs-8"},[t("a",{attrs:{href:"#"},on:{click:e.confirmMail}},[e._v("Gửi lại code")])]),t("div",{staticClass:"col-xs-4"},[t("button",{staticClass:"btn btn-primary btn-block btn-flat",attrs:{type:"submit"},on:{click:e.confirm}},[e._v("Xác nhận")])])])]):e._e()])])])])},s=[],n=(t("96cf"),t("1da1")),i=t("7bb1"),o=t("bc3a"),c=t.n(o),u={data:function(){return{api:this.$store.state.domainApi,isRegister:0==this.$store.state.user.status,isUsername:!1,isEmail:!1,isPhone:!1,code:"",user:{username:"",fullname:"",email:"",phone:this.$route.query.phone?this.$route.query.phone:"",password:"",rPassword:""},dictionary:{vi:{custom:{username:{required:"Vui lòng nhập tài khoản !",regex:"Tên tài khoản bào gồm chữ và số không có đấu cách"},fullname:{required:"Vui lòng nhập họ tên !"},email:{required:"Vui lòng nhập email !",email:"Vui lòng nhập đúng định dạng email !"},phone:{required:"Vui lòng nhập SDT !",min:"SDT phải là 10 số",max:"SDT phải là 10 số"},password:{required:"Vui lòng nhập mật khẩu !",min:"Mật khẩu tối thiểu 6 ký tự !"},rPassword:{required:"Vui lòng nhập mật khẩu !",min:"Mật khẩu tối thiểu 6 ký tự !"},code:{required:"Vui lòng nhập code!",min:"Code có 4 ký tự !"}}}}}},methods:{register:function(){var e=this;this.$validator.validate().then(function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(t){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t){a.next=20;break}return e.$swal.fire({title:"Đang đăng ký",text:"Vui lòng chờ !",allowOutsideClick:!1}),e.$swal.showLoading(),a.next=5,c.a.post("".concat(e.api,"/auth/create"),e.user);case 5:if(r=a.sent,1!==r.data.success){a.next=19;break}return e.flash(r.data.message,"success",{timeout:3e3}),a.next=10,e.login();case 10:if(e.isRegister=!0,e.$swal.close(),!localStorage.id_product){a.next=17;break}return s=JSON.parse(localStorage.id_product),a.next=16,c.a.patch("".concat(e.api,"/auth/update-user-product"),{id_user:r.data.id_user,id_product:s});case 16:localStorage.removeItem("id_product");case 17:a.next=20;break;case 19:e.$swal(r.data.message,"","error");case 20:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},login:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.a.post("".concat(e.api,"/auth/login"),e.user);case 2:t=a.sent,1===t.data.success?(localStorage.token=t.data.token,e.$store.state.token=t.data.token,e.$store.state.user=t.data.user,e.flash(t.data.message,"success",{timeout:3e3})):e.$swal(t.data.message,"","error");case 4:case"end":return a.stop()}}),a)})))()},checkUsername:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={username:e.target.value},!e.target.value){t.next=6;break}return t.next=4,a.check(r);case 4:s=t.sent,a.isUsername=s.result;case 6:case"end":return t.stop()}}),t)})))()},checkEmail:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={email:e.target.value},!e.target.value){t.next=6;break}return t.next=4,a.check(r);case 4:s=t.sent,a.isEmail=s.result;case 6:case"end":return t.stop()}}),t)})))()},checkPhone:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={phone:e.target.value},!e.target.value){t.next=6;break}return t.next=4,a.check(r);case 4:s=t.sent,a.isPhone=s.result;case 6:case"end":return t.stop()}}),t)})))()},check:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(a.api,"/auth/check"),{params:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},confirm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.a.put("".concat(e.api,"/auth/active"),{username:e.$store.state.user.username,code:e.code});case 2:t=a.sent,1===t.data.success?(e.$store.state.user.status=1,e.flash(t.data.message,"success",{timeout:3e3}),e.$router.push({name:"home"})):e.$swal(t.data.message,"","error");case 4:case"end":return a.stop()}}),a)})))()},confirmMail:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c.a.put("".concat(e.api,"/auth/confirmMail"),{username:e.$store.state.user.username,email:e.$store.state.user.email});case 2:t=a.sent,1===t.data.success?e.flash(t.data.message,"success",{timeout:3e3}):e.$swal(t.data.message,"","error");case 4:case"end":return a.stop()}}),a)})))()}},created:function(){i["a"].localize(this.dictionary);var e=new i["a"]({first_name:"alpha"});e.localize("vi"),i["a"].extend("rPassword",{getMessage:function(){return"Mật khẩu không khớp !"},validate:function(){var e=document.getElementById("password"),a=document.getElementById("rPassword");return e.value==a.value}})}},l=u,m=(t("f30e"),t("2877")),d=Object(m["a"])(l,r,s,!1,null,null,null);a["default"]=d.exports},f30e:function(e,a,t){"use strict";var r=t("0ea0"),s=t.n(r);s.a}}]);
//# sourceMappingURL=chunk-733ff7f9.51648ab2.js.map