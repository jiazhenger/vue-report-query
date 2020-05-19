<template>
    <el-tab-pane label='label' :name='name'>
        <slot></slot>
        456456
    </el-tab-pane>
</template>

<script>
	// ================================================================ element-ui
	import { TabPane } from 'element-ui'
	Vue.use(TabPane)
	// ================================================================  class
	export default {
		props:{
            label:String,
            name:String
		}
	}
</script>
