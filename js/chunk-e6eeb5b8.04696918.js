(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6eeb5b8"],{2043:function(t,e,a){},"263f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t._m(0),a("div",{staticClass:"box-body"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Danh mục cha")]),a("Select2",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"parent_id",options:t.category.myOptions},on:{change:function(e){return t.myChangeEvent(e)}},model:{value:t.category.myValue,callback:function(e){t.$set(t.category,"myValue",e)},expression:"category.myValue"}}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("parent_id")))])],1),a("div",{staticClass:"form-group"},[a("label",[t._v("Tên danh mục")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.name,expression:"post.name"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:50",expression:"'required|min:3|max:50'"}],class:{"form-control":!0,"error-boder":t.errors.first("name")},attrs:{name:"name",type:"text",placeholder:"Nhập tên danh mục..."},domProps:{value:t.post.name},on:{input:function(e){e.target.composing||t.$set(t.post,"name",e.target.value)}}}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("name")))])]),a("div",{staticClass:"form-group"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:50",expression:"'required|min:3|max:50'"}],class:{"form-control":!0,"error-boder":t.errors.first("title")},attrs:{name:"title",type:"text",placeholder:"Nhập title..."},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("title")))])]),a("div",{staticClass:"form-group"},[a("label",[t._v("Icon")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],attrs:{"data-vv-as":"image",type:"file",name:"icon"},on:{change:t.onInputChange}}),a("span",{staticClass:"error"},[t._v(t._s(t.errors.first("icon")))]),a("div",{attrs:{id:"upload-icon"}},[a("div",{staticClass:"upload-icon imgPreview",style:{backgroundImage:"url("+t.imgPreview+")"}})])])]),a("div",{staticClass:"col-lg-6"})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Sửa")])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[t._v("Sửa danh mục")])])}],r=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("4de4"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("bc3a")),o=a.n(r),s=a("3f5b"),c=a("d3bd"),l=a.n(c),d=a("7bb1"),p={vi:{custom:{name:{required:"Vui lòng nhập tên danh mục !",min:"Tên danh mục tối thiểu 3 ký tự !",max:"Tên danh mục không được vượt quá 50 ký tự !"},parent_id:{required:"Vui lòng chọn danh mục cha !"},icon:{image:"Vui lòng chọn định dạng hình ảnh !"},title:{required:"Vui lòng nhập title !",min:"Title tối thiểu 3 ký tự !",max:"Title không được vượt quá 50 ký tự !"}}}};d["a"].localize(p);var u=new d["a"];u.localize("vi");var m={metaInfo:{title:"Thêm danh mục"},components:{Select2:s["a"]},data:function(){return{api:this.$store.state.domainApi,post:{name:"",url:"",icon:"",title:"",open:0,parent_id:0,other:"{}"},file:{},imgPreview:{},category:{myValue:0,myOptions:[],errors:[]}}},methods:{handleSubmit:function(){var t=this,e=this.post.name;this.post.url=l()(e.toLowerCase()),this.$validator.validate().then((function(e){if(e){var a=new FormData;a.set("id",t.post.id),a.append("name",t.post.name),a.append("url",t.post.url),a.append("icon",t.post.icon),a.append("title",t.post.title),a.append("open",t.post.open),a.append("parent_id",t.post.parent_id),a.append("other",t.post.other),a.append("file",t.file),o.a.patch("".concat(t.api,"/admin/category"),a,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){1===e.data.success?(t.flash(e.data.message,"success",{timeout:3e3}),t.$router.push({name:"route.admin.category.index"})):t.flash(e.data.message,"error",{timeout:3e3})}))}}))},onInputChange:function(t){var e=this;this.file=t.target.files[0];var a=new FileReader;a.onload=function(t){return e.imgPreview=t.target.result},a.readAsDataURL(this.file)},myChangeEvent:function(t){this.post.parent_id=t},formatJson:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"--------|",n=[],i=!0,r=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;if(l.parent_id==e){var d={id:l.id,text:a+l.name};n.push(d);var p=this.formatJson(t.filter((function(t){return t.parent_id!=e})),l.id,a+"--------|");n=n.concat(p)}}}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n}},created:function(){var t=this,e=this.$route.params.id;e&&(this.category.myValue=e,this.post.parent_id=e),o.a.get("".concat(this.api,"/admin/category"),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){var a=[{id:0,text:"--ROOT--"}];t.category.myOptions=a.concat(t.formatJson(e.data))})).catch((function(e){t.errors.push(e)})),o.a.get("".concat(this.api,"/admin/category/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(a){t.post.id=e,t.post.name=a.data.name,t.post.url=a.data.url,t.post.title=a.data.title,t.post.icon=a.data.icon,t.imgPreview="".concat(t.api,"/image/").concat(a.data.icon),t.post.open=a.data.open,t.post.parent_id=a.data.parent_id})).catch((function(t){console.log(t)}))}},v=m,h=(a("546b"),a("2877")),f=Object(h["a"])(v,n,i,!1,null,null,null);e["default"]=f.exports},"546b":function(t,e,a){"use strict";var n=a("2043"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-e6eeb5b8.04696918.js.map