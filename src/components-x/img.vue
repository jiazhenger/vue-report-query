<template>  
	<div class='fxmc' :class='{r100px:round}'>
		<img :src='src' :style='{width:size?size:width,height:size?size:height}' :class='{r100px:round}'/>
	</div>
</template>

<script>
	export default {
		props:{
			src		: String,
			width 	: { type:String, default:'100%' },
			height 	: { type:String, default:'auto' },
			size 	: { type:String },
			round 	: Boolean
		}
	}
</script>