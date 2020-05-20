<template>
	<section class='fx h'>
		<!-- 系统新闻 -->
		<News @click='readNews' :data='newsData' :loading='pagingLoading'/>
		<!-- 系统公告 -->
		<Notice />
	</section>
</template>

<script>
	export default {
		components:{
			News: 		() => import('./tp/news'),
			Notice: 	() => import('./tp/notice'),
		},
		data(){
			return {
                newsData:[],
                pagingLoading:false
			}
		},
        mounted(){
            this.readNews(0)
        },
        methods:{
            readNews(v){
                const api = v === 0 ? 'news/read' : 'news/unread'
                $http.paging(this,api,{ dataName:'newsData' })
            }
        }
	}
</script>
