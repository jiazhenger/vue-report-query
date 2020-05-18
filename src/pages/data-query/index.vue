<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px' @tab-click='change'>
			<el-tab-pane name='0'>
				<span slot='label'>常规检测</span>
                <!-- search-from -->
				<DateSearch ref='tab0' v-if='active0'/>
			</el-tab-pane>
			<el-tab-pane name='1'>
				<span slot='label'>病理结果</span>
				<!-- search-from -->
				<DateSearch ref='tab1' v-if='active1'/>
			</el-tab-pane>
			<el-tab-pane name='2'>
				<span slot='label'>微生物结果</span>
				<!-- search-from -->
				<DateSearch ref='tab2' v-if='active2'/>
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
			DateSearch	: ()=>import('@tp/date-search'),
		},
		data(){
			return {
				activeName:'0',
                active0:true,
                active1:false,
                active2:false
			}
		},
		mounted(){

		},
		methods:{
			change(v){
                const tab = this.$refs['tab'+v.name]
                if(!tab){
                    this['active' + v.name] = true
                }else{
                    if(!$fn.hasArray(tab.data)){
                        this['active' + v.name] = false
                        setTimeout(()=>{
                            this['active' + v.name] = true
                        })
                    }
                }
            }
		}
	}
</script>
