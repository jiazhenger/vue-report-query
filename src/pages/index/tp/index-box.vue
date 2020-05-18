<template>  
	<div class='plr10 bcf ex fv h'>
		<header class='fxm h40 f16 b plr10' style='border-bottom:1px dashed #dfdfdf' :style='{color}'>
			<span class='r100px cf mr10 fxmc' style='width:24px;height:24px' :style='{background:color}'>
				<i :class='ico'></i>
			</span>
			<div class='ex'>{{title}}</div>
			<slot name='more'></slot>
			<div slot='more' v-if='isPage'><Button label='返回' plain style='width:80px' /></div>
		</header>
		<section class='ex' :class='contentClass'>
			<slot></slot>
		</section>
	</div>
</template>

<script>
	// ================================================================  class
	export default {
		components:{
			Button: () => import('@eu/button')
		},
		props:{ 
			ico:String, 
			contentClass:String,
			isPage:Boolean,
			color	: { type:String, default:'#0090FF' },
			title	: { type:String, default:'系统新闻' },
			ico		: { type:String, default:'el-icon-s-comment' }
		}
	}
</script>