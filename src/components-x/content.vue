<template>  
	<section :id="isPage?'page':'null'" class='abs_full scrollbar bcf' :class='{oys:scrollY,oxs:scrollX, oxys:scrollXY,r5px:isPage}'>
		<div :style='{minWidth:isPage?mw:0}' :class='contentClass'>
			<slot></slot>
		</div>
	</section>
</template>

<script>
	export default {
		props:{
			scrollY :		{ type:Boolean, default:true },
			scrollX :		{ type:Boolean, default:false },
			scrollXY :		{ type:Boolean, default:false },
			mw: 			{ type:String, 	default:'1000px' },
			contentClass: 	{ type:String },
			isPage: Boolean
		}
	}
</script>