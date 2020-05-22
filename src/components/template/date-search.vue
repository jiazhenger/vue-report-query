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
            <Table ref='table' :height='height' :data='data' :col='col' :pag='pag' :loading='pagingLoading' @onRowClick='onRowClick'/>
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
                    { prop:'spec_code', 	    label:'条码号',			width:'120px' },
                    { prop:'patient_name', 	    label:'病人姓名' },
                    { prop:'sex',               label:'性别',			align:'center' },
                    { prop:'age',               label:'年龄',			align:'center' },
                    { prop:'outpatient',        label:'门诊/住院号',		width:'100px' },
                    { prop:'department_name',   label:'科室' },
                    { prop:'doctor',            label:'送检医生' },
                    { prop:'spec_type',         label:'样本类型' },
                    { prop:'coll_time',         label:'采样日期',       width:'140px',    align:'center' },
                    { prop:'check_time',        label:'送检日期',       width:'140px',    align:'center' },
                    { prop:'check_department',  label:'审核日期',       width:'140px',    align:'center' },
                    { prop:'doctor',            label:'检验人' },
                    { prop:'audit',             label:'审核人' },
                    { prop:'kind_name',         label:'检测项目',       width:'200px' },
                    { prop:'kind_name_en',      label:'检测项目英文' },
                    { prop:'result',            label:'结果' },
                    { prop:'unit_val',          label:'单位' },
                    { prop:'range',             label:'参考范围' }
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
            $fn.setHeight(this)
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
