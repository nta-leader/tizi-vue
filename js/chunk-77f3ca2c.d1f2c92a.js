(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f3ca2c"],{"039a":function(t,e,a){"use strict";var s=a("7174"),r=a.n(s);r.a},"578a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"login-box"},[a("div",{staticClass:"login-box-body"},[a("p",{staticClass:"login-box-msg"},[t._v("Đăng nhập vào tizi")]),a("form",{attrs:{action:"javascript:void(0)"},on:{submit:t.login}},[a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"username",type:"text",placeholder:"Tài khoản, SDT hoặc email"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("span",{staticClass:"glyphicon glyphicon-envelope form-control-feedback"}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("username")))])]),a("div",{staticClass:"form-group has-feedback"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"password",type:"password",placeholder:"Mật khẩu"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),a("span",{staticClass:"glyphicon glyphicon-lock form-control-feedback"}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("password")))])]),t._m(0)]),a("router-link",{attrs:{to:{name:"forgotpassword"}}},[t._v("Quên mật khẩu")]),a("br"),a("router-link",{staticClass:"text-center",attrs:{to:{name:"register"}}},[t._v("Đăng ký tài khoản")])],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-xs-6"}),a("div",{staticClass:"col-md-4 col-xs-6"},[a("button",{staticClass:"btn btn-primary btn-block btn-flat",attrs:{type:"submit"}},[t._v("Đăng nhập")])])])}],n=(a("96cf"),a("1da1")),o=a("7bb1"),i=a("bc3a"),c=a.n(i),u={data:function(){return{api:this.$store.state.domainApi,user:{username:"",password:""},dictionary:{vi:{custom:{username:{required:"Vui lòng nhập tài khoản hoăc email !"},password:{required:"Vui lòng nhập mật khẩu !"}}}}}},methods:{login:function(){var t=this;this.$validator.validate().then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,c.a.post("".concat(t.api,"/auth/login"),t.user);case 3:s=e.sent,1===s.data.success?(localStorage.token=s.data.token,t.$store.state.token=s.data.token,t.$store.state.user=s.data.user,t.flash(s.data.message,"success",{timeout:3e3}),t.$store.commit("setDataAfterLogin",s.data.user.id),r=t.$store.state.route?t.$store.state.route:{name:"home"},t.$router.push(r)):t.$swal(s.data.message,"","error");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}},created:function(){o["a"].localize(this.dictionary);var t=new o["a"]({first_name:"alpha"});t.localize("vi")}},l=u,d=(a("039a"),a("2877")),p=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=p.exports},7174:function(t,e,a){}}]);
//# sourceMappingURL=chunk-77f3ca2c.d1f2c92a.js.map