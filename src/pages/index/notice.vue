<template>
	<section class='h'>
		<News isPage isNotice title='系统公告' color='#00CFA5' ico='el-icon-bell' />
	</section>
</template>

<script>
	export default {
		components:{
			News: 		() => import('./tp/news'),
		},
		data(){
			return {
				
			}
		}
	}
</script>