(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b24ad7a"],{"216a":function(a,e,t){"use strict";var s=t("b8a3"),r=t.n(s);r.a},b8a3:function(a,e,t){},cc48:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"box box-primary"},[a._m(0),t("div",{staticClass:"box-body no-padding"},[t("form",{on:{submit:function(e){return e.preventDefault(),a.updateUser(e)}}},[t("div",{staticClass:"box-body"},[t("div",{staticClass:"form-group avata_upload"},[t("label",{attrs:{for:"avata_upload"}},[t("img",{staticClass:"img-circle",attrs:{for:"avata_upload",src:a.user.avata?a.image?a.image:a.api+"/image/avata/"+a.user.avata:a.image?a.image:"/tizi/img/avata-default.jpg",alt:"User Avatar",id:"_user_avata"}}),t("a",[a._v("Đổi avata")])]),t("input",{attrs:{type:"file",id:"avata_upload"},on:{change:a.onChangeImage}})]),t("div",{staticClass:"form-group"},[t("label",[a._v("Họ tên")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.user.fullname,expression:"user.fullname"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"fullname",type:"text",placeholder:"Nhập họ tên..."},domProps:{value:a.user.fullname},on:{input:function(e){e.target.composing||a.$set(a.user,"fullname",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("fullname")))])]),t("div",{staticClass:"form-group"},[t("label",[a._v("Địa chỉ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.user.address,expression:"user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"address",type:"text",placeholder:"Nhập địa chỉ liên hệ..."},domProps:{value:a.user.address},on:{input:function(e){e.target.composing||a.$set(a.user,"address",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("address")))])]),t("div",{staticClass:"form-group"},[t("label",[a._v("Facebook")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.user.facebook,expression:"user.facebook"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"facebook",type:"text",placeholder:"Nhập địa chỉ facebook..."},domProps:{value:a.user.facebook},on:{input:function(e){e.target.composing||a.$set(a.user,"facebook",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("facebook")))])]),t("div",{staticClass:"form-group"},[t("label",[a._v("Zalo")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.user.zalo,expression:"user.zalo"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"zalo",type:"text",placeholder:"Nhập địa chỉ zalo hoặc SDT..."},domProps:{value:a.user.zalo},on:{input:function(e){e.target.composing||a.$set(a.user,"zalo",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("zalo")))])])]),a._m(1)])])])},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"box-header with-border"},[t("h3",{staticClass:"box-title"},[a._v("Chỉnh sửa thông tin tài khoản")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"box-footer"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a._v("Lưu")])])}],o=(t("ac1f"),t("466d"),t("5530")),i=t("2f62"),n=t("7bb1"),l=t("bc3a"),u=t.n(l),c={metaInfo:function(){return{title:"Chỉnh sửa thông tin tài khoản",htmlAttrs:{lang:"vi",amp:!0}}},data:function(){return{api:this.$store.state.domainApi,file:null,image:null,user:{avata:"",fullname:"",address:"",facebook:"",zalo:""},dictionary:{vi:{custom:{fullname:{required:"Vui lòng nhập họ tên !"},address:{required:"Vui lòng nhập địa chỉ !"},facebook:{required:"Vui lòng nhập link facebook của bạn !"},zalo:{required:"Vui lòng nhập zalo của bạn !"}}}}}},methods:{onChangeImage:function(a){var e=this;if(!a.target.files[0].type.match("image.*"))return this.$swal("Vui lòng chọn đúng định dạng hình ảnh!","","error");this.file=a.target.files[0];var t=new FileReader;t.onload=function(a){return e.image=a.target.result},t.readAsDataURL(a.target.files[0])},updateUser:function(){var a=this;this.$validator.validate().then((function(e){if(e){var t=new FormData;t.set("username",a.$store.state.user.username),t.append("avata",a.$store.state.user.avata),t.append("fullname",a.user.fullname),t.append("address",a.user.address),t.append("facebook",a.user.facebook),t.append("zalo",a.user.zalo),t.append("image",a.file),u.a.patch("".concat(a.api,"/auth/update"),t,{headers:{Authorization:"Bearer ".concat(a.$store.state.token)}}).then((function(e){e.data.success?(a.flash(e.data.message,"success",{timeout:3e3}),a.$store.state.user=e.data.user,a.$router.push({name:"user.profile"})):a.flash(e.data.message,"error",{timeout:3e3})}))}}))}},computed:Object(o["a"])({},Object(i["b"])({aboutUser:"getUser"})),created:function(){this.user.avata=this.aboutUser.avata,this.user.fullname=this.aboutUser.fullname,this.user.address=this.aboutUser.address,this.user.facebook=this.aboutUser.facebook,this.user.zalo=this.aboutUser.zalo,n["a"].localize(this.dictionary);var a=new n["a"]({first_name:"alpha"});a.localize("vi")}},d=c,m=(t("216a"),t("2877")),p=Object(m["a"])(d,s,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-9b24ad7a.7d86680a.js.map