<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px'>
			<el-tab-pane label='报告单查询' name='0'></el-tab-pane>
	  	</el-tabs>
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
				<FormItem label='检测项目' prop='project_name'>
					<Input v-model='model.project_name' p='请输入检测项目' @clear='submit' :disabled='pagingLoading'/>
				</FormItem>
				<FormItem label='样本状态' prop='check_status'>
					<Select v-model='model.check_status' p='请输入样本状态' @clear='submit' :disabled='pagingLoading' :data='[]'/>
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
	  	<div class='fx' style='margin:10px'>
	  		<div :style="{width:fn.hasArray(data2)?'70%':'100%'}">
	  			<Table ref='list' :data='data' :col='col' @select='onSelect' :pag='pag' :loading='pagingLoading'/>
	  		</div>
	  		<div v-if='fn.hasArray(data2)' class='ml10' style='width:calc(30% - 10px)'><Table :data='data2' :col='col2'/></div>
	  	</div>
	</Content>
</template>

<script>
    // ================================================================ element-ui
    import { Tabs, TabPane, Form } from 'element-ui'
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Form)
     // ================================================================ class
	export default {
		components:{
			Content		: ()=>import('@cpx/content'),
            SearchBox	: ()=>import('@tp/search-box'),
			Form		: ()=>import('@eu/form'),
			FormItem	: ()=>import('@eu/form-item'),
			Input		: ()=>import('@eu/input'),
			Select		: ()=>import('@eu/select'),
			Button		: ()=>import('@eu/button'),
			DatePicker 	: ()=>import('@eu/date-picker'),
            Table 	    : ()=>import('@eu/cpt/table'),
		},
		data(){
			return {
                fn:$fn,
				activeName:'0',
				model:{},
				data:[{
                    name:'123',
                    code:'456',
                    price:'789'
                },
                {
                    name:'a',
                    code:'b',
                    price:'c'
                }],
				data2:[],
				pag:{
		        	change: v => this.fetch(v)
		        },
				pagingLoading:false,
				col:[
                    { prop:'selection' , width:'40px', fixed:true, align:'center' },
		        	{ prop:'spec_code', 	label:'条码号', width:'120px' },
		        	{ prop:'patient_name', 	label:'病人姓名'},
		        	{ prop:'sex', label:'性别', align:'center' },
                    { prop:'age', label:'年龄', align:'center' },
                    { prop:'outpatient', label:'门诊/住院号', width:'100px' },
                    { prop:'department_name', label:'科室' },
                    { prop:'doctor', label:'送检医生' },
                    { prop:'project_name', label:'项目名称' },
                    { prop:'check_status', label:'检测状态' },
                    { prop:'check_time', label:'检测时间', width:'140px' },
                    { prop:'report_time', label:'报告时间', width:'140px' },
                    { prop:'print_time', label:'打印时间（首次）', width:'140px' },
                    { prop:'print_times', label:'打印次数' }
		        ],
		        col2:[
		        	{ prop:'spec_code', 	label:'条码号', width:'120px' },
		        	{ prop:'patient_name', 	label:'病人姓名'},
		        	{ prop:'sex', label:'性别', align:'center' },
		        	{ prop:'age', label:'年龄', align:'center' },
		        	{ prop:'outpatient', label:'门诊/住院号', width:'100px' },
		        	{ prop:'department_name', label:'科室' },
		        	{ prop:'doctor', label:'送检医生' },
		        	{ prop:'project_name', label:'项目名称' },
		        	{ prop:'check_status', label:'检测状态' },
		        	{ prop:'check_time', label:'检测时间', width:'140px' },
		        	{ prop:'report_time', label:'报告时间', width:'140px' },
		        	{ prop:'print_time', label:'打印时间（首次）', width:'140px' },
		        	{ prop:'print_times', label:'打印次数' }
		        ],
			}
		},
		mounted(){
			this.fetch()
		},
		methods:{
			// ajax
			fetch(current,param){
                const model = $fn.getValid(this.model)
                $http.paging(this,'report/lists',{param:{current,...model}})
            },
			submit(){
				this.fetch(1)
			},
			reset(){
				this.$refs.search.resetFields()
				this.$refs.d.reset()
                this.data2 = []
			},
			onSelect(v){
				if(v.length > 0){
					this.data2 = Array.from(new Set([...this.data2,...v]))
				}
			}
		}
	}
</script>
