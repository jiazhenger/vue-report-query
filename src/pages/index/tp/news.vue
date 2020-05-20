<template>
	<IndexBox contentClass='fv' :isPage='isPage' :isNotice='isNotice'>
		<div class='f15 fxb bbor1' v-if='!isNotice'>
			<div class='fxm' style='width:50%'>
				<Title title='未读通知' num='20' :class="{'news-active':active == 0}" @click='newsClick(0)' />
				<Title title='已读通知' num='20' :class="{'news-active':active == 1}" @click='newsClick(1)'/>
			</div>
			<div class='ex tr pb10' v-if='!isPage'>
				<router-link to='/main/news' class='hover f12' :style='{color}'>查看更多<b class='ss'>&gt;</b></router-link>
			</div>
		</div>
		<div class='ex rel'>
			<Content scrollY id='news'>
                <Loading :loading='loading'>
                    <ul class='lh24'>
                        <li class='fxm bbor1 hover-c cp tap' style='padding:6px 5px;' v-for='(v,i) in data' :key='i' @click="$router.push(`/main/detail/${v.id}`)">
                            <i class='r100px mr10' style='width:8px;height:8px;background:#63D4FF'></i>
                            <p class='omits-1 ex mr10'>{{fn.val(v.title)}}</p>
                            <time>{{fn.val(v.publish_at)}}</time>
                        </li>
                    </ul>
                    <div v-if='!fn.hasArray(data) && !loading' class='tc g9 f12 h60'>暂无数据</div>
                </Loading>
			</Content>
		</div>
        <template v-if='fn.hasObject(pag) && fn.hasArray(data)'>
            <Pagination :pag='pag' @change='onPagChange' @sizeChange='onPagSizeChange' />
        </template>
	</IndexBox>
</template>

<script>
	// ================================================================  自定义模板
	Vue.component('Title',{
		template:`
			<div class='tc tap cp rel ex' style='color:#c1c1c1;padding:10px 20px' @click='click'>
				<h5 class='b f30 lh'>{{num}}</h5>
				<h6 class='b mt5'>{{title}}</h6>
				<span class='abs_lb w fxc'><i style='width:50px;height:2px' class='r2px'></i></span>
			</div>
		`,
		props:{ title:String, num:String },
        methods:{
            click(){ this.$emit('click')}
        }
	})
	// ================================================================  class
	export default {
		components:{
			Content: 		() => import('@cpx/content'),
			IndexBox: 		() => import('./index-box'),
            Loading:        () => import('@cpx/loading-wraper'),
            Pagination:     () => import('@eu/pagination'),
		},
		props:{
			isPage	: Boolean,
			isNotice : Boolean,
			color	: { type:String, default:'#0090FF' },
            data    : { type:Array, default:[] },
            pag		: { type:Object, default:()=>({}) },
            loading : Boolean
		},
		data(){
			return {
                fn:$fn,
                active:0
			}
		},
        methods:{
            newsClick(v){
                this.active = v
                this.$emit('click',v)
            },
            // 当前页发生改变时触发
            onPagChange(v){ this.$emit('change',v) },
            // 每页显示条数改变时触发
            onPagSizeChange(v){ this.$emit('sizeChange',v)},
        }
	}
</script>
<style>
	.news-active{color:#0090FF!important}
	.news-active span i{background:#0090FF;}
</style>
