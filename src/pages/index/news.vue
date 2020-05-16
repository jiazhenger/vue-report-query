<template>
	<section class='h'>
		<News isPage />
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