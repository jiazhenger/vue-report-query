<template>
	<IndexBox :title='title' :color='color' :ico='ico' contentClass='fv' isPage>
		<div class='ex h pt15 fv g6'>
			<header class='tc'>
				<h3 class='b omits-1 f18'>这是一段标题这是一段标题这是一段标题</h3>
				<div class='ptb10'><span class='mr20'>作者：</span><time>时间：2222-22-22</time></div>
			</header>
			<div class='rel ex mt10 news-detail'>
				<Content contentClass='lh24 tj plr20 pb20'>
					<p>2016年12月13日及之后送检的样本，报告单打印，包括客 户打印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年12月12日及之前送检的样本，报告单打印须登录report.dalabs.cn进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括印和配送、实验室打印须登录r.dalabs.cn进行操作。2016 年进行查询和打印。2016年12月13日及之后送检的样本， 报告单打印，包括客 户打进行查询和打印。2016年12月13日及之后送检的样本，报 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括客 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。</p>
					<p>2016年12月13日及之后送检的样本，报告单打印，包括客 户打印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年12月12日及之前送检的样本，报告单打印须登录report.dalabs.cn进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括印和配送、实验室打印须登录r.dalabs.cn进行操作。2016 年进行查询和打印。2016年12月13日及之后送检的样本， 报告单打印，包括客 户打进行查询和打印。2016年12月13日及之后送检的样本，报 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括客 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。</p>
				</Content>
			</div>
		</div>
	</IndexBox>
</template>

<script>
	export default {
		components:{
			IndexBox: 		() => import('./tp/index-box'),
			Content: 		() => import('@cpx/content'),
		},
		data(){
			return {
				
			}
		}
	}
</script>
<style>
	.news-detail p{margin-bottom:10px;text-indent:2em;}
</style>