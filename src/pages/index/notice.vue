<template>
	<section class='h'>
		<News isPage isNotice title='系统公告' color='#00CFA5' ico='el-icon-bell' :data='data' />
	</section>
</template>

<script>
	export default {
		components:{
			News: 		() => import('./tp/news'),
		},
		data(){
			return {
                data:[]
			}
		},
        mounted(){
            $http.paging(this,'news/lists', { param:{type:2} })
        }
	}
</script>
