(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70449081"],{"0cff":function(t,i,a){"use strict";var e=a("45bc"),n=a.n(e);n.a},"45bc":function(t,i,a){},d429:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"box"},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6"},[a("h3",{staticClass:"box-title"},[t._v("Danh sách tỉnh thành")]),a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Tìm kiếm..."},on:{keyup:t.search}}),a("div",{attrs:{id:"table-province"}},[a("table",{staticClass:"table table-hover"},[t._m(0),t._l(t.province,(function(i){return a("tr",{key:i.id,class:{active:i.id==t.active}},[a("td",[t._v(t._s(i.stt))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.url))]),a("td",[t._v(t._s(i.price))]),a("td",[a("a",{staticClass:"btn btn-success",on:{click:function(a){return t.viewDistrict(i.id)}}},[t._v("Xem quận huyện")]),t._v(" | "),a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"route.admin.province.edit",params:{id:i.id}}}},[t._v("Chỉnh sửa")])],1)])}))],2)])]),a("div",{staticClass:"col-xs-6"},[a("h3",{staticClass:"box-title"},[t._v("Danh sách quận huyện")]),a("div",{attrs:{id:"table-district"}},[a("table",{staticClass:"table table-hover"},[t._m(1),t._l(t.district,(function(i){return a("tr",{key:i.id},[a("td",[t._v(t._s(i.stt))]),a("td",[t._v(t._s(i.name))]),a("td",[t._v(t._s(i.url))]),a("td",[t._v(t._s(i.price))]),a("td",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"route.admin.province.edit",params:{id:i.id}}}},[t._v("Chỉnh sửa")])],1)])}))],2)])])])])])},n=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("tr",[a("th",[t._v("STT")]),a("th",[t._v("Tên")]),a("th",[t._v("Url")]),a("th",[t._v("Giá")]),a("th",[t._v("Chức năng")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("tr",[a("th",[t._v("STT")]),a("th",[t._v("Tên")]),a("th",[t._v("Url")]),a("th",[t._v("Giá")]),a("th",[t._v("Chức năng")])])}],r=(a("4de4"),a("c975"),a("fb6a"),a("b0c0"),a("b680"),a("ac1f"),a("5319"),a("bc3a")),s=a.n(r),c={data:function(){return{api:this.$store.state.domainApi,dataProvince:[],province:[],district:[],active:0}},methods:{getDataProvince:function(){var t=this;s.a.get(this.api+"/admin/province",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(i){t.dataProvince=i.data,t.getProvince()}))},search:function(t){this.province=this.dataProvince.filter((function(i){return 0==i.parent_id&&i.name.toLocaleLowerCase().indexOf(t.target.value.toLocaleLowerCase())>=0}))},getProvince:function(){this.province=this.dataProvince.filter((function(t){return 0==t.parent_id}))},viewDistrict:function(t){this.active=t,this.district=this.dataProvince.filter((function(i){return i.parent_id==t}))},number_format:function(t,i,a,e){var n=t,r=isNaN(i=Math.abs(i))?2:i,s=void 0==a?",":a,c=void 0==e?".":e,o=n<0?"-":"",d=parseInt(n=Math.abs(+n||0).toFixed(r))+"",v=(v=d.length)>3?v%3:0;return o+(v?d.substr(0,v)+c:"")+d.substr(v).replace(/(\d{3})(?=\d)/g,"$1"+c)+(r?s+Math.abs(n-d).toFixed(r).slice(2):"")}},created:function(){this.getDataProvince()}},o=c,d=(a("0cff"),a("2877")),v=Object(d["a"])(o,e,n,!1,null,"0d2f0d34",null);i["default"]=v.exports}}]);
//# sourceMappingURL=chunk-70449081.694e7a83.js.map