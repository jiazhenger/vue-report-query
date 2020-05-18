<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px'>
			<el-tab-pane name='0'>
				<span slot='label'>常规检测</span>
				<SearchBox ref='s1' @submit='submit1' :pagingLoading='pagingLoading' />
				<Table ref='list' :data='data' :col='col' :pag='pag' :loading='pagingLoading'/>
			</el-tab-pane>
			<el-tab-pane name='1'>
				<span slot='label'>病理结果</span>
				<!-- search-from -->
				<SearchBox :pagingLoading='pagingLoading'/>
				<Table ref='list' :data='data' :col='col' :pag='pag' :loading='pagingLoading'/>
			</el-tab-pane>
			<el-tab-pane name='2'>
				<span slot='label'>微生物结果</span>
				<!-- search-from -->
				<SearchBox :pagingLoading='pagingLoading'/>
				<Table ref='list' :data='data' :col='col' :pag='pag' :loading='pagingLoading'/>
			</el-tab-pane>
	  	</el-tabs>
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
			DatePicker 	: ()=>import('@eu/date-picker'),
			Button		: ()=>import('@eu/button'),
			SearchBox	: ()=>import('./tp/search-1'),
		},
		data(){
			return {
				activeName:'0',
				model:{},
				data:[],
				data2:[],
				data3:[],
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
			fetch(page){ $http.paging(this,'qt-item-source/select',{param:{page,limit:5,...this.model}}) },
			// 常规检测
			submit1(v){
				this.fetch()
			},
			// 病理结果
			submit2(v){
				this.fetch()
			},
			// 微生物结果
			submit3(v){
				this.fetch()
			},

		}
	}
</script>
