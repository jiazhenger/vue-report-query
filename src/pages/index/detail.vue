<template>
	<IndexBox isPage color='#00CFA5' :isNotice='isNotice'>
        <Loading :loading='pullLoading' class='wh'>
            <div class='ex h pt15 fv g6'>
                    <template v-if='fn.hasObject(data)'>
                        <header class='tc'>
                            <h3 class='b omits-1 f18'>{{fn.val(data.title)}}</h3>
                            <div class='ptb10'><span class='mr20'>作者：{{fn.val(data.author)}}</span><time>时间：{{fn.val(data.publish_at)}}</time></div>
                        </header>
                        <div class='rel ex mt10 news-detail'>
                            <Content contentClass='lh24 tj plr20 pb20'>
                                {{fn.val(data.content)}}
                            </Content>
                        </div>
                    </template>
            </div>
        </Loading>
	</IndexBox>
</template>

<script>
	export default {
		components:{
			IndexBox: 		() => import('./tp/index-box'),
			Content: 		() => import('@cpx/content'),
            Loading:        () => import('@cpx/loading-wraper'),
		},
		data(){
			return {
                fn:$fn,
                data:{},
                pullLoading:true,
                isNotice:this.$route.query.page === 'notice'
			}
		},
        mounted(){
            $http.pull(this,'news/detail',{ param:{ id:this.$route.params.id }})
        }
	}
</script>
<style>
	.news-detail p{margin-bottom:10px;text-indent:2em;}
</style>
