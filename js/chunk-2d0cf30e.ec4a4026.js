(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf30e"],{6350:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[e._m(0),a("div",{staticClass:"box-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.post.name,expression:"post.name"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:255",expression:"'required|min:3|max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("name")},attrs:{name:"name",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:e.post.name},on:{input:function(t){t.target.composing||e.$set(e.post,"name",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("name")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.post.link,expression:"post.link"},{name:"validate",rawName:"v-validate",value:"max:255",expression:"'max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("name")},attrs:{name:"link",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:e.post.link},on:{input:function(t){t.target.composing||e.$set(e.post,"link",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("link")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.post.title,expression:"post.title"},{name:"validate",rawName:"v-validate",value:"max:255",expression:"'max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("name")},attrs:{name:"title",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:e.post.title},on:{input:function(t){t.target.composing||e.$set(e.post,"title",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("title")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.post.description,expression:"post.description"},{name:"validate",rawName:"v-validate",value:"max:255",expression:"'max:255'"}],class:{"form-control":!0,"error-boder":e.errors.first("name")},attrs:{name:"description",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:e.post.description},on:{input:function(t){t.target.composing||e.$set(e.post,"description",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("description")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Detail")]),a("vue-editor",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{name:"content"},model:{value:e.post.detail,callback:function(t){e.$set(e.post,"detail",t)},expression:"post.detail"}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("detail")))])],1)])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Thêm")])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[e._v("Thêm banner mới")])])}],i=(a("99af"),a("b0c0"),a("bc3a")),n=a.n(i),o=a("7bb1"),l=a("5873"),m={metaInfo:{title:"Thêm banner"},components:{VueEditor:l["a"]},data:function(){return{api:this.$store.state.domainApi,post:{name:"",url:"",image:""},file:{},dictionary:{vi:{custom:{name:{required:"Vui lòng nhập tên banner !",min:"Tên danh mục tối thiểu 3 ký tự !",max:"Tên danh mục không được vượt quá 255 ký tự !"},image:{required:"Vui lòng chọn hình banner !",image:"Vui lòng chọn định dạng hình ảnh !"},url:{max:"Title không được vượt quá 255 ký tự !"}}}}}},methods:{handleSubmit:function(){var e=this;this.$validator.validate().then((function(t){if(t){var a=new FormData;a.set("name",e.post.name),a.append("url",e.post.url),a.append("image",e.file),n.a.post("".concat(e.api,"/admin/banner"),a,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){1===t.data.success?(e.flash(t.data.message,"success",{timeout:3e3}),e.$router.push({name:"route.admin.banner.index"})):e.flash(t.data.message,"error",{timeout:3e3})}))}}))},getData:function(){var e=this;n.a.get("".concat(this.api,"/admin/about-footer/").concat(this.$route.params.id),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.post=t.data}))}},created:function(){o["a"].localize(this.dictionary);var e=new o["a"]({first_name:"alpha"});e.localize("vi"),this.getData()}},c=m,d=a("2877"),p=Object(d["a"])(c,r,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cf30e.ec4a4026.js.map