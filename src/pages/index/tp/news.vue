<template>  
	<IndexBox :title='title' :color='color' :ico='ico' contentClass='fv' :isPage='isPage'>
		<div class='f15 fxb bbor1' v-if='!isNotice'>
			<div class='fxm' style='width:50%'>
				<Title title='未读通知' num='20' class='news-active' />
				<Title title='已读通知' num='20' />
			</div>
			<div class='ex tr pb10' v-if='!isPage'>
				<router-link to='/' class='hover f12' :style='{color}'>查看更多<b class='ss'>&gt;</b></router-link>
			</div>
		</div>
		<div class='ex rel'>
			<Content scrollY>
				<ul class='lh24'>
					<li class='fxm bbor1 mt10 pb5 hover-c cp'>
						<i class='r100px mr10' style='width:8px;height:8px;background:#63D4FF'></i>
						<p class='omits-1 ex mr10'>这是一件待办事项这是一件待办事项这是</p>
						<time>2222-22-22</time>
					</li>
				</ul>
			</Content>
		</div>
	</IndexBox>
</template>

<script>
	// ================================================================  自定义模板
	Vue.component('Title',{
		template:`
			<div class='tc tap cp rel ex' style='color:#c1c1c1;padding:10px 20px'>
				<h5 class='b f30 lh'>{{num}}</h5>
				<h6 class='b mt5'>{{title}}</h6>
				<span class='abs_lb w fxc'><i style='width:50px;height:2px' class='r2px'></i></span>
			</div>
		`,
		props:{ title:String, num:String }
	})
	// ================================================================  class
	export default {
		components:{
			Content: 		() => import('@cpx/content'),
			IndexBox: 		() => import('./index-box')
		},
		props:{
			isPage	: Boolean,
			isNotice : Boolean,
			color	: { type:String, default:'#0090FF' },
			title	: { type:String, default:'系统新闻' },
			ico		: { type:String, default:'el-icon-s-comment' }
		},
		data(){
			return {
				
			}
		},
	}
</script>
<style>
	.news-active{color:#0090FF!important}
	.news-active span i{background:#0090FF;}
</style>