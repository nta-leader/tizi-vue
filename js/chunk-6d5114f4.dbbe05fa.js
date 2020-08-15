(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d5114f4"],{1459:function(e,t,a){},"7f69":function(e,t,a){"use strict";var i=a("1459"),r=a.n(i);r.a},fb84:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box box-primary"},[e._m(0),a("div",{staticClass:"box-body no-padding"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.editProduct(t)}}},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Tỉnh thành")]),a("Select2",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"input",attrs:{name:"province",options:e.getProvinceByLv(0,{id:"chon-thanh-pho",text:"---Chọn thành phố---"})},on:{change:function(t){return e.changeProvince(t)}},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("province")))])],1),a("transition",{attrs:{name:"district"}},["chon-thanh-pho"!=e.province?a("div",{staticClass:"form-group"},[a("label",[e._v("Quận huyện")]),a("Select2",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"input",attrs:{name:"district",options:e.getProvinceByLv(e.province,{id:"chon-quan-huyen",text:"---Chọn quận huyện---"})},on:{change:function(t){return e.changeDistrict(t)}},model:{value:e.district,callback:function(t){e.district=t},expression:"district"}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("district")))])],1):e._e()]),a("div",{staticClass:"form-group"},[a("label",[e._v("Địa chỉ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.product.address,expression:"product.address"},{name:"validate",rawName:"v-validate",value:"required|min:5|max:255",expression:"'required|min:5|max:255'"}],staticClass:"form-control input",attrs:{name:"address",type:"text",placeholder:"Số nhà, phường xã,.."},domProps:{value:e.product.address},on:{input:function(t){t.target.composing||e.$set(e.product,"address",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("address")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("Chuyên mục")]),a("Select2",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],staticClass:"input",attrs:{name:"category",options:e.getCategorySort(!0)},model:{value:e.product.id_category,callback:function(t){e.$set(e.product,"id_category",t)},expression:"product.id_category"}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("category")))])],1),a("div",{staticClass:"form-group"},[a("label",[e._v("Tiêu đề tin")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.product.name,expression:"product.name"},{name:"validate",rawName:"v-validate",value:"required|min:5|max:60",expression:"'required|min:5|max:60'"}],staticClass:"form-control input",attrs:{name:"name",type:"text",placeholder:"Vd: Điện thoại cũ giá rẻ"},domProps:{value:e.product.name},on:{input:function(t){t.target.composing||e.$set(e.product,"name",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("name")))])]),a("div",{staticClass:"form-group",staticStyle:{position:"relative"}},[a("label",[e._v("Giá")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.product.price,expression:"product.price"},{name:"validate",rawName:"v-validate",value:"required|numeric|min_value:0|max:15",expression:"'required|numeric|min_value:0|max:15'"}],staticClass:"form-control input",attrs:{name:"price",type:"text",placeholder:"Vd: 10000"},domProps:{value:e.product.price},on:{input:function(t){t.target.composing||e.$set(e.product,"price",t.target.value)}}}),e.product.price>0?a("span",{staticClass:"format-price"},[e._v(e._s(e.number_format(e.product.price,0))+" đ")]):e._e(),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("price")))])]),a("div",{staticClass:"form-group"},[a("label",[e._v("SDT")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.product.phone,expression:"product.phone"},{name:"validate",rawName:"v-validate",value:"required|numeric|min:10|max:10",expression:"'required|numeric|min:10|max:10'"}],staticClass:"form-control input",attrs:{name:"phone",type:"text",placeholder:"Nhập SDT..."},domProps:{value:e.product.phone},on:{input:function(t){t.target.composing||e.$set(e.product,"phone",t.target.value)}}}),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("phone")))])]),a("div",{staticClass:"box"},[a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[e._v("Hình ảnh")]),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("image")))])]),a("div",{staticClass:"box-body"},[a("div",{staticClass:"uploader"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.images.length,expression:"images.length"}],staticClass:"upload-controller"},[a("label",{attrs:{for:"file"}},[e._v("Thêm hình")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.images.length,expression:"!images.length"}],staticClass:"form-img"},[a("label",{attrs:{for:"file"}},[e._v("Bấm vào đây chọn hình ảnh !")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"image",expression:"'image'"}],ref:"file",attrs:{name:"image",type:"file",id:"file",multiple:""},on:{change:e.changeImage}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.images.length,expression:"images.length"}],staticClass:"images-preview"},e._l(e.images,(function(t,i){return a("div",{key:i,staticClass:"img-wrapper"},[a("div",{staticClass:"img",style:{backgroundImage:"url("+e.api+"/image/product/"+t.name+")"}}),1!=t.is_default?a("a",{on:{click:function(t){return e.delImg(i)}}},[e._v("xóa")]):e._e(),1!=t.is_default?a("div",{staticClass:"btndefault"},[a("button",{attrs:{type:"button"},on:{click:function(t){return e.defaultImage(i)}}},[e._v("Đặt ảnh mặc định")])]):e._e()])})),0)])])]),a("div",{staticClass:"box"},[a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[e._v("Nội dung")]),a("span",{staticClass:"error"},[e._v(e._s(e.errors.first("content")))])]),a("div",{staticClass:"box-body"},[a("vue-editor",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{name:"content","editor-toolbar":e.customToolbar},model:{value:e.product.content,callback:function(t){e.$set(e.product,"content",t)},expression:"product.content"}})],1)])],1),e._m(1)])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header with-border"},[a("h3",{staticClass:"box-title"},[e._v("Chỉnh sửa thông tin sản phẩm")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Sửa")])])}],n=(a("4160"),a("fb6a"),a("a434"),a("b0c0"),a("b680"),a("ac1f"),a("466d"),a("5319"),a("5530")),s=a("b85c"),o=a("bc3a"),c=a.n(o),u=a("3f5b"),d=a("d3bd"),l=a.n(d),p=a("7bb1"),m=a("5873"),h=a("2f62"),v={metaInfo:function(){return{title:"Sửa tin",htmlAttrs:{lang:"vi",amp:!0}}},components:{Select2:u["a"],VueEditor:m["a"]},data:function(){return{components:{Select2:u["a"],VueEditor:m["a"]},api:this.$store.state.domainApi,product:{id:0,id_category:"chon-chuyen-muc",id_province:0,id_user:0,name:"",url:"",address:"",price:null,phone:null,content:""},images:[],id_group_image:"",province:"chon-thanh-pho",district:"chon-quan-huyen",dictionary:{vi:{custom:{province:{numeric:"Vui lòng chọn tỉnh thành !"},district:{numeric:"Vui lòng chọn quận huyện !"},address:{required:"Vui lòng nhập địa chỉ !",min:"Địa chỉ tối thiểu 5 ký tự !",max:"Địa chỉ tối đa 255 ký tự !"},category:{numeric:"Vui lòng chọn chuyên mục !"},name:{required:"Vui lòng nhập tiêu đề tin !",min:"Tiêu để tin tổi thiểu 5 ký tự !",max:"Tiêu đề tin tối đa 60 ký tự !"},price:{required:"Vui lòng nhập giá !",numeric:"Giá phải là số và không có đấu cách !",min_value:"giá tối thiểu bằng 0",max:"Giá tối đa 15 sô theo chiều ngang !"},phone:{required:"Vui lòng nhập SDT !",numeric:"SDT phải là số và không có đấu cách !",min:"SDT phải là 10 số",max:"SDT phải là 10 số"},image:{image:"Có file không đúng định dạng ảnh, đã loại bỏ !"},content:{required:"Vui lòng nhập nội dung !",min:"Nôị dung tổi thiểu 5 ký tự !"}}}},customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"justify"},{align:"right"}],["link","video"]]}},methods:{changeImage:function(e){var t,a=this,i=e.target.files,r=[],n=Object(s["a"])(i);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.type.match("image.*")||this.flash("file ".concat(o.name," đã loại bỏ(Không phải hình ảnh) !"),"error",{timeout:3e3}),r.push(o)}}catch(d){n.e(d)}finally{n.f()}if(r.length){var u=new FormData;u.set("id_group_image",this.id_group_image),r.forEach((function(e){return u.append("image",e)})),this.$swal.fire({title:"Đang upload ".concat(r.length," hình ảnh"),text:"Vui lòng chờ !",allowOutsideClick:!1}),this.$swal.showLoading(),c.a.put(this.api+"/auth/addimage",u).then((function(e){if(a.$swal.close(),1==e.data.success){a.flash(e.data.message,"success",{timeout:3e3}),a.images=e.data.images;var t,i=Object(s["a"])(e.data.images);try{for(i.s();!(t=i.n()).done;){var r=t.value,n=new FileReader;n.onload=function(e){return r.urlLocal=e.target.result},n.readAsDataURL(o)}}catch(d){i.e(d)}finally{i.f()}}else a.flash(e.data.message,"error",{timeout:3e3})}))}},delImg:function(e){var t=this;this.$swal.fire({title:"Bạn có muốn xóa hình này không !",text:"",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Không!",confirmButtonText:"Xóa!"}).then((function(a){if(a.value){var i=t.images[e];t.images.splice(e,1),c.a.delete(t.api+"/auth/deleteimage",{headers:{Authorization:"Bearer ".concat(t.$store.state.token)},params:{name:i.name,id_group_image:i.id_group_image}}).then((function(e){e.data.success?t.flash(e.data.message,"success",{timeout:3e3}):t.flash(e.data.message,"error",{timeout:3e3})}))}}))},editProduct:function(){var e=this;this.$validator.validate().then((function(t){if(t){var a=new FormData;a.set("id",e.product.id),a.append("id_province",e.province),a.append("id_district",e.district),a.append("address",e.product.address),a.append("id_category",e.product.id_category),a.append("name",e.product.name),a.append("url",l()(e.product.name,"-")),a.append("price",e.product.price),a.append("phone",e.product.phone),a.append("content",e.product.content),c.a.patch("".concat(e.api,"/auth/editproduct"),a,{headers:{Authorization:"Bearer ".concat(e.$store.state.token)}}).then((function(t){t.data.success?(e.flash(t.data.message,"success",{timeout:3e3}),e.$router.push({name:"user.product"})):e.flash(t.data.message,"error",{timeout:3e3})}))}}))},number_format:function(e,t,a,i){var r=e,n=isNaN(t=Math.abs(t))?2:t,s=void 0==a?",":a,o=void 0==i?".":i,c=r<0?"-":"",u=parseInt(r=Math.abs(+r||0).toFixed(n))+"",d=(d=u.length)>3?d%3:0;return c+(d?u.substr(0,d)+o:"")+u.substr(d).replace(/(\d{3})(?=\d)/g,"$1"+o)+(n?s+Math.abs(r-u).toFixed(n).slice(2):"")},changeProvince:function(){this.district="chon-quan-huyen"},changeDistrict:function(e){this.product.id_province=e},loadData:function(){var e=this;c.a.post(this.api+"/auth/aboutproduct",{id:this.$route.params.id,username:this.$store.state.user.username}).then((function(t){t.data.about?(e.province=t.data.about.id_province,e.district=t.data.about.id_district,e.id_group_image=t.data.about.id_group_image,e.product.id=t.data.about.id,e.product.id_category=t.data.about.id_category,e.product.address=t.data.about.address,e.product.name=t.data.about.name,e.product.price=t.data.about.price,e.product.phone=t.data.about.phone,e.product.content=t.data.about.content,e.images=t.data.image):e.$router.push({name:"user.product"})}))},defaultImage:function(e){var t=this,a=this.images[e];c.a.put(this.api+"/auth/defaultimage",{id:a.id,name:a.name,id_group_image:a.id_group_image}).then((function(a){if(a.data.success){t.flash(a.data.message,"success",{timeout:3e3});for(var i=0;i<t.images.length;i++)t.images[i].is_default=0;t.images[e].is_default=1}else t.flash(a.data.message,"error",{timeout:3e3})}))}},computed:Object(n["a"])({},Object(h["b"])(["getUser","getProvinceByLv","getCategorySort"])),created:function(){p["a"].localize(this.dictionary);var e=new p["a"]({first_name:"alpha"});e.localize("vi"),this.loadData()}},g=v,f=(a("7f69"),a("2877")),_=Object(f["a"])(g,i,r,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-6d5114f4.dbbe05fa.js.map