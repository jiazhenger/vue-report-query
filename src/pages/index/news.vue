<template>
	<section class='h'>
        <News isPage @click='readNews' :data='data' :pag='pag' :loading='pagingLoading'/>
	</section>
</template>

<script>
	export default {
		components:{
			News: 		() => import('./tp/news'),
		},
		data(){
			return {
				data:[],
				pagingLoading:false,
                pag:{
                	change: v => this.fetch(v),
                	sizeChange: v=> {
                	    this.pageSize = v;
                	    this.fetch(1,{pageSize:v})
                	}
                },
                api:'news/read'
			}
		},
        mounted(){
             this.fetch()
        },
        methods:{
            readNews(v){
                this.api = v === 0 ? 'news/read' : 'news/unread'
                this.fetch()
            },
            fetch(current){
                $http.paging(this,this.api,{ param:{current} , scroll:'#news'})
            }
        }
	}
</script>
