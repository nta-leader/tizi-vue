(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02115c6c"],{"1be5":function(e,a,t){},9054:function(e,a,t){"use strict";var n=t("1be5"),r=t.n(n);r.a},b7a6:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"box"},[e._m(0),t("div",{staticClass:"box-body"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.handleSubmit(a)}}},[t("div",{staticClass:"box-body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"form-group"},[t("label",[e._v("Tên banner")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.post.name,expression:"post.name"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:255",expression:"'required|min:3|max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("name")},attrs:{name:"name",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:e.post.name},on:{input:function(a){a.target.composing||e.$set(e.post,"name",a.target.value)}}}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("name")))])]),t("div",{staticClass:"form-group"},[t("label",[e._v("Link chuyển đến")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.post.url,expression:"post.url"},{name:"validate",rawName:"v-validate",value:"max:255",expression:"'max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("title")},attrs:{name:"url",type:"text",placeholder:"Nhập title..."},domProps:{value:e.post.url},on:{input:function(a){a.target.composing||e.$set(e.post,"url",a.target.value)}}}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("url")))])]),t("div",{staticClass:"form-group"},[t("label",[e._v("Hình banner")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|image",expression:"'required|image'"}],attrs:{"data-vv-as":"image",type:"file",name:"icon"},on:{change:e.onInputChange}}),t("span",{staticClass:"error"},[e._v(e._s(e.errors.first("icon")))]),t("div",{attrs:{id:"upload-banner"}},[e.imgPreview?t("img",{staticClass:"banner-preview",attrs:{src:e.imgPreview}}):e._e()])])])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Thêm")])])])])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"box-header with-border"},[t("h3",{staticClass:"box-title"},[e._v("Thêm banner mới")])])}],i=(t("b0c0"),t("bc3a")),s=t.n(i),o=t("7bb1"),l={metaInfo:{title:"Thêm banner"},data:function(){return{api:this.$store.state.domainApi,post:{name:"",url:"",image:""},file:{},imgPreview:!1,dictionary:{vi:{custom:{name:{required:"Vui lòng nhập tên banner !",min:"Tên danh mục tối thiểu 3 ký tự !",max:"Tên danh mục không được vượt quá 255 ký tự !"},image:{required:"Vui lòng chọn hình banner !",image:"Vui lòng chọn định dạng hình ảnh !"},url:{max:"Title không được vượt quá 255 ký tự !"}}}}}},methods:{handleSubmit:function(){var e=this;this.$validator.validate().then((function(a){if(a){var t=new FormData;t.set("name",e.post.name),t.append("url",e.post.url),t.append("image",e.file),s.a.post("".concat(e.api,"/admin/banner"),t,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(a){1===a.data.success?(e.flash(a.data.message,"success",{timeout:3e3}),e.$router.push({name:"route.admin.banner.index"})):e.flash(a.data.message,"error",{timeout:3e3})}))}}))},onInputChange:function(e){var a=this;this.file=e.target.files[0];var t=new FileReader;t.onload=function(e){return a.imgPreview=e.target.result},t.readAsDataURL(this.file)}},created:function(){o["a"].localize(this.dictionary);var e=new o["a"]({first_name:"alpha"});e.localize("vi")}},m=l,u=(t("9054"),t("2877")),c=Object(u["a"])(m,n,r,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-02115c6c.e23d192a.js.map