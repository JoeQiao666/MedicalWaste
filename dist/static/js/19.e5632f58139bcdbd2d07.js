webpackJsonp([19],{"+Nbr":function(e,t){},"7Ecm":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a("ryJa");var s={data:()=>({loading:!1,loading2:!1,permission:!1,activeName:"1",total:0,cur_page:1,chooseIds:[],tableData:[],total:0,cur_page:1,office:[],types:[],options1:[],options2:[],ruleForm:{departmentId:"",weight:"",typeId:"",opAt:"",recyclerId:"",staffId:""},rules:{departmentId:[{required:!0,message:"请选择科室"}],weight:[{required:!0,message:"请输入重量"}],typeId:[{required:!0,message:"请选择类型"}],opAt:[{required:!0,message:"请输入时间"}],recyclerId:[{required:!0,message:"请选择"}],staffId:[{required:!0,message:"请选择"}]}}),methods:{handleClick(e,t){1==e.index&&this.getData()},formatter:e=>r(e.opAt).format("YYYY-MM-DD"),handleCurrentChange(e){this.cur_page=e,this.getData()},handleSelectionChange(e){var t=e.map(e=>e.id);this.chooseIds=t.join(","),console.log(this.chooseIds)},add(){this.loading=!0,this.$axios({method:"post",url:"/platform/hospital/rubbish/addDo",data:this.ruleForm}).then(e=>{200==e.status?(this.$message.success("操作成功！"),this.loading=!1,this.ruleForm={departmentId:"",weight:"",typeId:"",opAt:"",recyclerId:"",staffId:""},this.$refs.ruleForm.resetFields()):this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})},getDepartment(){this.$axios({method:"get",url:"/platform/hospital/department/data"}).then(e=>{200==e.status?this.office=e.data.data:this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})},getType(){this.$axios({method:"get",url:"/platform/hospital/type/data"}).then(e=>{200==e.status?this.types=e.data.data:this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})},getPerson(){this.$axios({method:"get",url:"/platform/sys/user/data?roleId=1"}).then(e=>{200==e.status?this.options1=e.data:this.$message.error(e.data.msg)}).catch(e=>{console.log(e)}),this.$axios({method:"get",url:"/platform/sys/user/data?roleId=0"}).then(e=>{200==e.status?this.options2=e.data:this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})},addIns(){this.loading=!0,this.$axios({method:"put",url:"/platform/hospital/rubbish/store?ids="+this.chooseIds}).then(e=>{200==e.status?(this.loading=!1,this.$message.success(e.data.msg),this.getData()):this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})},addIn(e){if(1==e){var t=this.tableData.map(e=>e.id);this.chooseIds=t.join(",")}this.addIns()},getData(){this.loading=!0,this.$axios({method:"get",url:"/platform/hospital/rubbish/listPage?isBottle=true&pageNumber="+this.cur_page+"&pageSize=10&status=0"}).then(e=>{200==e.status?(this.loading=!1,this.tableData=e.data.list,this.total=e.data.totalCount):this.$message.error(e.data.msg)}).catch(e=>{console.log(e)})}},mounted(){this.permission=localStorage.permission,this.getDepartment(),this.getType(),this.getPerson()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-location-outline"}),e._v(" 系统管理\n      ")]),e._v(" "),a("el-breadcrumb-item",[e._v("\n          补操作\n      ")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"补新增",name:"1"}},[a("el-form",{ref:"ruleForm",staticClass:"new",staticStyle:{width:"50%",margin:"auto"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"科室：",prop:"departmentId",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择科室"},model:{value:e.ruleForm.departmentId,callback:function(t){e.$set(e.ruleForm,"departmentId",t)},expression:"ruleForm.departmentId"}},e._l(e.office,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"重量(KG)",prop:"weight",required:""}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.weight,callback:function(t){e.$set(e.ruleForm,"weight",t)},expression:"ruleForm.weight"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型：",prop:"typeId",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.typeId,callback:function(t){e.$set(e.ruleForm,"typeId",t)},expression:"ruleForm.typeId"}},e._l(e.types,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"产生时间",prop:"opAt",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"timestamp",type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.opAt,callback:function(t){e.$set(e.ruleForm,"opAt",t)},expression:"ruleForm.opAt"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"回收员：",prop:"recyclerId",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.recyclerId,callback:function(t){e.$set(e.ruleForm,"recyclerId",t)},expression:"ruleForm.recyclerId"}},e._l(e.options1,function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"交接人：",prop:"staffId",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.staffId,callback:function(t){e.$set(e.ruleForm,"staffId",t)},expression:"ruleForm.staffId"}},e._l(e.options2,function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}),1)],1)],1),e._v(" "),"修改"==e.permission?a("el-button",{staticStyle:{margin:"30px auto 0",display:"block"},attrs:{type:"primary"},on:{click:e.add}},[e._v("确认新增")]):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{label:"补入库",name:"2"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"opAt",align:"center",formatter:e.formatter,label:"产生时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"typeName",align:"center",sortable:"",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"weight",align:"center",sortable:"",label:"重量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"departmentName",align:"center",sortable:"",label:"科室"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",{attrs:{align:"center"}},["修改"==e.permission?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addIn(1)}}},[e._v("全部入库")]):e._e(),e._v(" "),"修改"==e.permission?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addIn(2)}}},[e._v("确认入库")]):e._e()],1)],1)],1)],1)])])},staticRenderFns:[]};var o=a("C7Lr")(s,l,!1,function(e){a("+Nbr")},"data-v-038fcb3d",null);t.default=o.exports}});
//# sourceMappingURL=19.e5632f58139bcdbd2d07.js.map