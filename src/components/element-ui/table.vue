<template>
	<Loading :loading='loading'>
		<el-table
            class                       = 'nowrap-table'
			ref							= 'table'
			:data						= 'data'
			:empty-text					= 'emptyText'
			:size 						= 'size'
			:height 					= 'height'
			highlight-current-row
			@selection-change			= 'getRows($event)'
            @row-click                  = 'onRowClick'
			element-loading-text 		= '数据加载中'
			element-loading-background	= 'rgba(0, 0, 0, 0.1)'
			:style						= '{minHeight:mh}'
            :border                     = 'border'
		>
            <template slot-scope='scope'>
                <slot :scope='scope'></slot>
            </template>
		</el-table>
		<template v-if='fn.hasObject(pag)'><Pagination :pag='pag' @change='onChange' /></template>
	</Loading>
</template>

<script>
	// ================================================================ element-ui
	import { Table,TableColumn } from 'element-ui'
	Vue.use(Table)
	Vue.use(TableColumn)
	// ================================================================  class
	export default {
		components:{
			Loading: ()=>import('@cpx/loading-wraper'),
			Pagination: ()=>import('@eu/pagination'),
		},
		props:{
			size		: { type:String, default:'mini' },
			data		: { type:Array, default:[] },
			loading		: { type:Boolean, default:true },
			pag			: { type:Object, default:()=>({}) },
			height		: Number,
			mh			: { type:String, default:'90px' },
			emptyText	: { type:String, default:'暂无数据' },
            border		: { type:Boolean, default:true },
		},
		data(){
			return {
				fn:$fn,
				keys:[]
			}
		},
		methods:{
			getRows(v){
				this.keys = v
				this.$emit('selection-change',v)
			},
			// 添加选中状态
			addRows(rows){
				this.clear()
				if(rows){
					rows.forEach(row => {
	            		this.$refs.table.toggleRowSelection(row, true);
	          		})
				}
			},
			// 清除选择框选择中状态
			clear(){
				this.$refs.table.clearSelection()
			},
			onChange(v){ this.$emit('change',v) },
            // 点击行触发
            onRowClick(v){ this.$emit('onRowClick',v) }
		}
	}
</script>
