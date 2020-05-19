<template>
	<el-tabs :value='model' @tab-click='change'>
        <slot></slot>
    </el-tabs>
</template>

<script>
	// ================================================================ element-ui
	import { Tabs, TabPane } from 'element-ui'
	Vue.use(Tabs)
    Vue.use(TabPane)
	// ================================================================  class
	export default {
		props:{
            model:String
		},
		methods:{
            change(v){ this.$emit('change',v)}
		}
	}
</script>
