<template>
	<IndexBox class='ml15' contentClass='fx' isNotice>
		<div slot='more'><router-link to='/main/notice' class='f12 fxm hover-tu' :style='{color:c2}'><span>查看更多</span><b class='el-icon-right f11'></b></router-link></div>
		<!-- 左侧 -->
		<div class='ex h pt15 fv g6'>
			<header class='bbor1'>
				<h3 class='b omits-1'>{{fn.val(data[0].title)}}</h3>
				<div class='ptb10'><time>{{fn.val(data[0].publish_at)}}</time><span class='ml20'>作者: {{fn.val(data[0].author)}}</span></div>
			</header>
			<div class='rel ex mt10'>
				<Content contentClass='lh24 tj pr10 pb10'>
                    {{fn.val(data[0].content)}}
				</Content>
			</div>
		</div>
		<!-- 右侧 -->
		<div class='ex h rel ml10' style='border-left:1px dashed #dfdfdf'>
			<Content contentClass='pb10'>
				<ul class='pl10'>
					<li class='fxm bbor1 ptb10 tap' v-for='(v,i) in data' :key='i'  @click="$router.push(`/main/detail/${v.id}?page=notice`)">
						<div class='f11 tc r3px' style='width:38px;line-height:120%;padding:2px 0;' :style="{color:c2,border:`1px solid #D9F1EC`}">{{fn.val(v.year)}}<br />{{fn.val(v.time)}}</div>
						<p class='f12 omits ex ml5' style='line-height:140%'>{{fn.val(v.title)}}</p>
					</li>
				</ul>
			</Content>
		</div>
	</IndexBox>
</template>

<script>
    // ================================================================  time
    // const $time = import('@com/time')
    import $time from '@com/time'
	// ================================================================  class
	export default {
		components:{
			Content: 		() => import('@cpx/content'),
			IndexBox: 		() => import('./index-box'),
		},
		data(){
			return {
                fn:$fn,
				c2:'#00CFA5',
                data:[{}]
			}
		},
        mounted(){
             $http.paging(this,'news/lists', { param:{type:2}, onSuccess:data=>{

                return data.map(v=>{
                    const f = $time.full(v.publish_at)
                    return {...v, year:f.year,time:f.month + '.' + f.day}
                })
             } })
        }
	}
</script>
