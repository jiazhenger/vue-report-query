<template>
	<div class='wh fv'>
        <SearchBox>
        	<el-form ref='search' :inline='true' :model='model' @submit='submit'>
        		<FormItem class='auto' label='送检日期' prop='date'>
        			<DatePicker ref='d' v-model='model.date' @clear='submit' @change='submit' :disabled='pagingLoading'/>
        		</FormItem>
        		<FormItem class='auto'>
        			<Button label='查询' native-type='submit'  @click='submit($event)' :loading='pagingLoading'/>
        			<Button label='重置' plain @click='reset' :disabled='pagingLoading'/>
        			<Button v-if='hasImport' label='导出' plain :disabled='pagingLoading'/>
        		</FormItem>
        	</el-form>
        </SearchBox>
        <div class='table-box' id='tableBox'>
            <Table ref='list' :height='height' :data='data' :col='col' :pag='pag' :loading='pagingLoading' @onRowClick='onRowClick'/>
        </div>
    </div>
</template>

<script>
    // ================================================================ classs
	export default {
		components:{
			FormItem	: ()=>import('@eu/form-item'),
			DatePicker 	: ()=>import('@eu/date-picker'),
			Input 		: ()=>import('@eu/input'),
			Button		: ()=>import('@eu/button'),
			SearchBox	: ()=>import('@tp/search-box'),
            Table 	    : ()=>import('@eu/cpt/table'),
		},
		props:{
			// pagingLoading	: { type:Boolean, default:true }
            api:{ type:String, default:'report/lists'},
            col:{
                type:Array,
                default:() => [
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
                ]
            },
            hasImport:{ type:Boolean, default:false }
		},
		data(){
			return {
				model:{},
				data:[],
				pag:{
					change: v => this.fetch(v),
                    sizeChange: v=> {
                        this.pageSize = v;
                        this.fetch(1,{pageSize:v})
                    }
				},
				pagingLoading:true,
                height:0
			}
		},
        mounted(){
            this.fetch()
            setTimeout(()=>{
                this.height = document.querySelector('#tableBox').clientHeight
            },100)
        },
		methods:{
            fetch(current,param){
                const model = $fn.getValid(this.model)
                if(model.date){
                    model.start_date = model.date.start
                    model.end_date = model.date.end
                    delete model.date
                }
                $http.paging(this, this.api,{param:{current,...model,...param}})
            },
			submit(){
                this.fetch(1,{pageSize:this.pageSize})
			},
			reset(){
				this.$refs.d.reset()
                this.model = {}
			},
            // 点击行触发
            onRowClick(v){ this.$emit('onRowClick',v) }
		}
	}
</script>
