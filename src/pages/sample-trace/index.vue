<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px'>
			<el-tab-pane label='报告单查询' name='0'></el-tab-pane>
            <!-- search-from -->
            <DateSearch/>
	  	</el-tabs>
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
			DateSearch	: ()=>import('@tp/date-search')
		},
		data(){
			return {
				activeName:'0'
			}
		},
		methods:{

		}
	}
</script>
