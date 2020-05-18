<template>
	<Table
		ref 				= 'table'
		:data				= 'data'
		:emptyText			= 'emptyText'
		:size 				= 'size'
		:loading 			= 'loading'
		@selection-change 	= 'onSelect'
		:height 			= 'height'
		:pag 				= 'pag'
		@change 			= 'onChange'
	>
        <slot></slot>
		<template v-for	= '(v,i) in col'>
			<Col
				:prop	= 'v.prop'
				:label	= 'v.label'
				:width	= 'v.width'
				:type 	= 'v.prop'
				:align  = 'v.align'
                :fixed  = 'v.fixed'
			/>
		</template>
	</Table>
</template>

<script>
	// ================================================================  class
	export default {
		components:{
			Table: ()=>import('@eu/table'),
			Col: ()=>import('@eu/table-col'),
		},
		props:{
			label		:String,
			emptyText	: { type:String, default:'暂无数据' },
			data		: { type:Array, default:[] },
			col			: { type:Array, default:[] },
			size		: { type:String, default:'mini' },
			loading		: { type:Boolean, default:false },
			pag			: { type:Object, default:()=>({}) },
			height		: Number,
		},
		methods:{
			getRows(){
				return this.$refs.table.keys
			},
			addRows(rows){
				this.$refs.table.addRows(rows)
			},
			onSelect(v){
				this.$emit('select',v)
			},
			onChange(v){ this.$emit('change',v)}
		}
	}
</script>
