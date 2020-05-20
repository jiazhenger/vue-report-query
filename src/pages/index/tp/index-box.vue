<template>
	<div class='plr10 bcf ex fv h'>
		<header class='fxm h40 f16 b plr10' style='border-bottom:1px dashed #dfdfdf' :style='{color}'>
			<span class='r100px cf mr10 fxmc' style='width:24px;height:24px' :style='{background:color}'>
				<i :class='ico'></i>
			</span>
			<div class='ex'>{{title}}</div>
			<slot name='more'></slot>
			<div slot='more' v-if='isPage'><Button label='返回' plain style='width:80px' @click='$router.back()' /></div>
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
			contentClass:String,
			isPage:Boolean,
            isNotice:Boolean
		},
        data(){
            return {
                color	: '#0090FF',
                title	: '系统新闻',
                ico		: 'el-icon-s-comment'
            }
        },
        mounted(){
            if(this.isNotice){
                this.title = '系统公告'
                this.color = '#00CFA5'
                this.ico = 'el-icon-bell'
            }
        }
	}
</script>
