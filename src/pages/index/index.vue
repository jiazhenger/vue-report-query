<template>
	<section class='fx h'>
		<!-- 系统新闻 -->
		<News />
		<!-- 系统公告 -->
		<Notice />
	</section>
</template>

<script>
	export default {
		components:{
			News: 		() => import('./tp/news'),
			Notice: 		() => import('./tp/notice'),
		},
		data(){
			return {

			}
		}
	}
</script>
