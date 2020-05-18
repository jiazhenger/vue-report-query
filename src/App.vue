<template>
	<main id='app-root'>
		<router-view/>
		<Toast />
		<Loading />
	</main>
</template>

<script>
	export default {
		name: 'app',
		components: {
			Toast:()=>import('@cpx/toast'),
			Loading:()=>import('@cpx/loading')
		},
		created(){
			/* 获取公共图片 */
			window.$getImage = () => {
				$http.pull(this,'index/captcha')
			}
		},
		mounted(){
			/* 移除加载层 */
			const load = document.querySelector('#app-loading')
			if(load){ document.body.removeChild(load) }
		}
	}
</script>