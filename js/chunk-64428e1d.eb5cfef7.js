(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64428e1d"],{"73bd":function(a,e,t){"use strict";var n=t("eaf5"),r=t.n(n);r.a},eaf5:function(a,e,t){},f47b:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"box"},[a._m(0),t("div",{staticClass:"box-body"},[t("form",{on:{submit:function(e){return e.preventDefault(),a.handleSubmit(e)}}},[t("div",{staticClass:"box-body"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"form-group"},[t("label",[a._v("Tên banner")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.post.name,expression:"post.name"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:255",expression:"'required|min:3|max:255'"}],class:{"form-control":!0,"error-boder":a.errors.first("name")},attrs:{name:"name",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:a.post.name},on:{input:function(e){e.target.composing||a.$set(a.post,"name",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("name")))])]),t("div",{staticClass:"form-group"},[t("label",[a._v("Link chuyển đến")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.post.url,expression:"post.url"},{name:"validate",rawName:"v-validate",value:"max:255",expression:"'max:255'"}],class:{"form-control":!0,"error-boder":a.errors.first("title")},attrs:{name:"url",type:"text",placeholder:"Nhập title..."},domProps:{value:a.post.url},on:{input:function(e){e.target.composing||a.$set(a.post,"url",e.target.value)}}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("url")))])]),t("div",{staticClass:"form-group"},[t("label",[a._v("Hình banner")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],attrs:{"data-vv-as":"image",type:"file",name:"icon"},on:{change:a.onInputChange}}),t("span",{staticClass:"error"},[a._v(a._s(a.errors.first("icon")))]),t("div",{attrs:{id:"upload-banner"}},[a.imgPreview?t("img",{staticClass:"banner-preview",attrs:{src:a.imgPreview}}):a._e()])])])]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[a._v("Sửa")])])])])])},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"box-header with-border"},[t("h3",{staticClass:"box-title"},[a._v("Sửa banner")])])}],i=(t("b0c0"),t("bc3a")),s=t.n(i),o=t("7bb1"),l={metaInfo:{title:"Sửa banner"},data:function(){return{api:this.$store.state.domainApi,post:{name:"",url:"",image:""},file:{},imgPreview:!1,dictionary:{vi:{custom:{name:{required:"Vui lòng nhập tên banner !",min:"Tên danh mục tối thiểu 3 ký tự !",max:"Tên danh mục không được vượt quá 255 ký tự !"},image:{required:"Vui lòng chọn hình banner !",image:"Vui lòng chọn định dạng hình ảnh !"},url:{max:"Title không được vượt quá 255 ký tự !"}}}}}},methods:{handleSubmit:function(){var a=this;this.$validator.validate().then((function(e){if(e){var t=new FormData;t.set("id",a.$route.params.id),t.append("name",a.post.name),t.append("url",a.post.url),t.append("image",a.post.image),t.append("image_new",a.file),s.a.patch("".concat(a.api,"/admin/banner"),t,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){console.log(e),1===e.data.success?(a.flash(e.data.message,"success",{timeout:3e3}),a.$router.push({name:"route.admin.banner.index"})):a.flash(e.data.message,"error",{timeout:3e3})}))}}))},onInputChange:function(a){var e=this;this.file=a.target.files[0];var t=new FileReader;t.onload=function(a){return e.imgPreview=a.target.result},t.readAsDataURL(this.file)}},created:function(){var a=this;o["a"].localize(this.dictionary);var e=new o["a"]({first_name:"alpha"});e.localize("vi"),s.a.get(this.api+"/admin/banner/"+this.$route.params.id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){console.log(e),a.post.name=e.data.name,a.post.url=e.data.url,a.post.image=e.data.image,a.imgPreview=a.api+"/image/banner/"+e.data.image}))}},m=l,u=(t("73bd"),t("2877")),c=Object(u["a"])(m,n,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-64428e1d.eb5cfef7.js.map