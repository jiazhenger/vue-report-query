<template>
	<Content :scrollY='false' contentClass='h' isPage>
		<!-- tabs -->
		<Tabs v-model='activeName' class='swrap'>
			<el-tab-pane label='报告单查询' name='0'>
                <!-- search-from -->
                <SearchBox>
                    <el-form ref='search' :inline='true' :model='model' @submit='submit'>
                        <FormItem label='条码号' prop='spec_code'>
                            <Input v-model='model.spec_code' p='请输入条码号' @clear='submit' :disabled='pagingLoading'/>
                        </FormItem>
                        <FormItem class='auto' label='送检日期' prop='date'>
                            <DatePicker ref='d' v-model='model.date' @clear='submit' @change='submit' :disabled='pagingLoading'/>
                        </FormItem>
                        <FormItem label='病人姓名' prop='patient_name'>
                            <Input v-model='model.patient_name' p='请输入病人姓名' @clear='submit' :disabled='pagingLoading'/>
                        </FormItem>
                        <FormItem label='检测项目' prop='kind_name'>
                            <Input v-model='model.kind_name' p='请输入检测项目' @clear='submit' :disabled='pagingLoading'/>
                        </FormItem>
                        <FormItem label='样本状态' prop='status'>
                            <Select v-model='model.status' p='请输入样本状态' @clear='submit' :disabled='pagingLoading' :data='[]'/>
                        </FormItem>
                        <FormItem class='auto'>
                            <Button label='查询' native-type='submit'  @click='submit($event)' :loading='pagingLoading'/>
                            <Button label='重置' plain @click='reset' :disabled='pagingLoading'/>
                            <Button label='报告预览' plain :disabled='pagingLoading'/>
                            <Button label='打印' plain :disabled='pagingLoading'/>
                        </FormItem>
                    </el-form>
                </SearchBox>
                <!-- table -->
                <div class='table-box'>
                    <div class='fx h'>
                        <div class='fv h' id='tableBox' :style="{width:fn.hasArray(data2)?'70%':'100%'}">
                            <Table ref='table' :height='height' :data='data' :col='col' @select='onSelect' :pag='pag' :loading='pagingLoading' @onRowClick='onRowClick'>
                                <template slot='pleft'>
                                    <dl class='x-fl f12 g9'>
                                        <dd class='mr5' v-for='(v,i) in pdata'>{{v.name}}: 【{{v.total}}】{{(i < (pdata.length-1)) ? ',' : ''}}</dd>
                                    </dl>
                                </template>
                            </Table>
                        </div>
                        <div v-if='fn.hasArray(data2)' class='ml10 rel ' style='width:calc(30% - 10px)'>
                            <Table :height='height' :data='data2' :col='col2'/>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
	  	</Tabs>
	</Content>
</template>

<script>
    // ================================================================ 二次封装 element-ui
    const $msg = import('@eu/js/msg')
     // ================================================================ class
	export default {
		components:{
			Content		: ()=>import('@cpx/content'),
            SearchBox	: ()=>import('@tp/search-box'),
			FormItem	: ()=>import('@eu/form-item'),
			Input		: ()=>import('@eu/input'),
			Select		: ()=>import('@eu/select'),
			Button		: ()=>import('@eu/button'),
			DatePicker 	: ()=>import('@eu/date-picker'),
            Table 	    : ()=>import('@eu/cpt/table'),
            Tabs        : ()=>import('@eu/tabs')
		},
		data(){
			return {
                fn:$fn,
				activeName:'0',
				model:{},
				data:[],
				data2:[],
                selectData:[],
                pdata:[],
				pag:{
					change: v => this.fetch(v),
				    sizeChange: v=> {
				        this.pageSize = v;
				        this.fetch(1,{pageSize:v})
				    }
				},
				pagingLoading:true,
				col:[
                    { prop:'selection' ,                                width:'40px',       fixed:true,     align:'center' },
		        	{ prop:'spec_code', 	    label:'条码号',			width:'120px' },
		        	{ prop:'patient_name',      label:'病人姓名',		width:'120px' },
		        	{ prop:'sex',               label:'性别',			width:'60px',		align:'center',  },
                    { prop:'age',               label:'年龄',			width:'60px', 		align:'center',  },
                    { prop:'outpatient',        label:'门诊/住院号',     	width:'100px' },
                	{ prop:'department_name',   label:'科室',			width:'120px' },
                	{ prop:'doctor',			label:'送检医生',		width:'70px' },
                    { prop:'project_name',      label:'项目名称' },
                    { prop:'check_status',      label:'检测状态',        width:'100px',		align:'center'  },
                    { prop:'check_time',        label:'检测时间',        width:'140px',		align:'center',  },
                    { prop:'report_time',       label:'报告时间',        width:'140px',		align:'center',  },
                    { prop:'print_time',        label:'打印时间（首次）', width:'140px',		align:'center',  },
                    { prop:'print_times',       label:'打印次数',        width:'70px',		align:'center',  }
		        ],
		        col2:[
		        	{ prop:'kind_name', 		label:'项目名称', 		width:'200px' },
		        	{ prop:'kind_name_en', 		label:'项目英文名', 		width:'200px' },
		        	{ prop:'result', 			label:'结果' },
		        	{ prop:'unit_val', 			label:'单位',			width:'60px', align:'center'},
		        	{ prop:'tips', 				label:'提示' },
                    { prop:'range', 			label:'参考范围' },
		        ],
                height:0,
			}
		},
		mounted(){
			this.fetch()
            $fn.setHeight(this)
		},
		methods:{
			// ajax
			fetch(current,param){
                const model = $fn.getValid(this.model)
                if(model.date){
                    model.start_date = model.date.start
                    model.end_date = model.date.end
                    delete model.date
                }
                $http.paging(this,'report/lists',{param:{current,...model,...param}}).then(data=>{
                    this.pdata=data.stat
                })
            },
			submit(){
				this.fetch(1,{pageSize:this.pageSize})
			},
			reset(){
				this.$refs.search.resetFields()
				this.$refs.d.reset()
                this.data2 = []
                this.model = { }
			},
			onSelect(v){
				if(v.length > 0){
					this.selectData = Array.from(new Set([...this.selectData,...v]))
				}
			},
            // 点击行触发
            onRowClick(v){
                $http.pull(this,'report/project', { param:{spec_code:v.spec_code}, dataName:'data2' }).then(data=>{
                    if(!$fn.hasArray(data)){
                        $msg.then(f=>f('此报告无关联项目数据',0))
                    }
                })
            }
		}
	}
</script>
