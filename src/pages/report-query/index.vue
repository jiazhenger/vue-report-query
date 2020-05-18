<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px'>
			<el-tab-pane label='报告单查询' name='0'></el-tab-pane>
	  	</el-tabs>
		<!-- search-from -->
		<SearchBox>
			<el-form ref='search' :inline='true' :model='model' @submit='submit'>
				<FormItem label='条码号' prop='a'>
					<Input v-model='model.a' p='请输入条码号' @clear='submit' :disabled='pagingLoading'/>
				</FormItem>
				<FormItem class='auto' label='送检日期' prop='time'>
					<DatePicker ref='d' v-model='model.time' @clear='submit' @change='submit' :disabled='pagingLoading'/>
				</FormItem>
				<FormItem label='病人姓名' prop='b'>
					<Input v-model='model.b' p='请输入病人姓名' @clear='submit' :disabled='pagingLoading'/>
				</FormItem>
				<FormItem label='检测项目' prop='c'>
					<Input v-model='model.c' p='请输入检测项目' @clear='submit' :disabled='pagingLoading'/>
				</FormItem>
				<FormItem label='样本状态' prop='d'>
					<Select v-model='model.d' p='请输入样本状态' @clear='submit' :disabled='pagingLoading'/>
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
	  	<div class='fx'>
	  		<div class='ex'>
	  			<Table ref='list' :data='data' :col='col' @select='onSelect' :pag='pag' :loading='pagingLoading'/>
	  		</div>
	  		<div class='ex ml10'><Table :data='data2' :col='col' @select='onSelect' :loading='pagingLoading'/></div>
	  	</div>
	</Content>
</template>

<script>
    // ================================================================ element-ui
    import { Tabs, TabPane } from 'element-ui'
    Vue.use(Tabs)
    Vue.use(TabPane)
     // ================================================================ class
	export default {
		components:{
			Content		: () => import('@cpx/content'),
			Form		: ()=>import('@eu/form'),
			FormItem	: ()=>import('@eu/form-item'),
			Input		: ()=>import('@eu/input'),
			Select		: ()=>import('@eu/select'),
			Button		: ()=>import('@eu/button'),
			SearchBox	: ()=>import('@tp/search-box'),
			DatePicker 	: ()=>import('@eu/date-picker'),
		},
		data(){
			return {
				activeName:'0',
				model:{},
				data:[],
				data2:[],
				pag:{
		        	change: v => this.fetch(v)
		        },
				pagingLoading:true,
				col:[
		        	{ prop:'selection' },
		        	{ prop:'item_name', 	label:'名称' },
		        	{ prop:'price_code', 	label:'物价代码'},
		        	{ prop:'price', 		label:'参考价' }
		        ],
		        col2:[
		        	{ prop:'item_name', 	label:'名称' },
		        	{ prop:'price_code', 	label:'物价代码'},
		        	{ prop:'price', 		label:'参考价' }
		        ],
			}
		},
		mounted(){
			this.fetch()
		},
		methods:{
			// ajax
			fetch(page){ $http.paging(this,'qt-item-source/select',{param:{page,limit:5,...$fn.getValid(this.model)}}) },
			submit(){
				this.fetch()
			},
			reset(){
				this.$refs.search.resetFields()
				this.$refs.d.reset()
			},
			onSelect(){
				if(v.length > 0){
					this.data2 = Array.from(new Set([...this.data2,...v]))
					this.sum()
				}
			}
		}
	}
</script>
