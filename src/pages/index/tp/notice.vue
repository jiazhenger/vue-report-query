<template>  
	<IndexBox title='系统公告' class='ml15' :color='c2' ico='el-icon-bell' contentClass='fx'>
		<div slot='more'><router-link to='/' class='f12 fxm hover-tu' :style='{color:c2}'><span>查看更多</span><b class='el-icon-right f11'></b></router-link></div>
		<!-- 左侧 -->
		<div class='ex h pt15 fv g6'>
			<header class='bbor1'>
				<h3 class='b omits-1'>这是一段标题这是一段标题这是一段标题</h3>
				<div class='ptb10'><time>2222-22-22</time><span class='mlr20'>部门</span><span>作者</span></div>
			</header>
			<div class='rel ex mt10'>
				<Content contentClass='lh24 tj pr10 pb10'>
					<p>2016年12月13日及之后送检的样本，报告单打印，包括客 户打印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年12月12日及之前送检的样本，报告单打印须登录report.dalabs.cn进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括印和配送、实验室打印须登录r.dalabs.cn进行操作。2016 年进行查询和打印。2016年12月13日及之后送检的样本， 报告单打印，包括客 户打进行查询和打印。2016年12月13日及之后送检的样本，报 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。2016年12月13日及之后送检的样本，报告单打印，包括客 告单打印印和配送、实验室打印须登录r.dalabs.cn进行操作。2016年进行查询和打印。</p>
				</Content>
			</div>
		</div>
		<!-- 右侧 -->
		<div class='ex h rel ml10' style='border-left:1px dashed #dfdfdf'>
			<Content contentClass='pb10'>
				<ul class='pl10'>
					<li class='fxm bbor1 ptb10 tap'>
						<div class='f11 tc r3px' style='width:38px;line-height:120%;padding:2px 0;' :style="{color:c2,border:`1px solid #D9F1EC`}">2020<br />10.2</div>
						<p class='f12 omits ex ml5' style='line-height:140%'>这是一段通知这是一段通知这是一段通知这是一段通知这是一段通知这是一段 通知这是一段通知这是一段通知这是一段通知</p>
					</li>
					<li class='fxm bbor1 ptb10 tap'>
						<div class='f11 tc r3px' style='width:38px;line-height:120%;padding:2px 0;' :style="{color:c2,border:`1px solid #D9F1EC`}">2020<br />10.2</div>
						<p class='f12 omits ex ml5' style='line-height:140%'>这是一段通知这是一段通知这是一段通知这是一段通知这是一段通知这是一段 通知这是一段通知这是一段通知这是一段通知</p>
					</li>
				</ul>
			</Content>
		</div>
	</IndexBox>
</template>

<script>
	// ================================================================  class
	export default {
		components:{
			Content: 		() => import('@cpx/content'),
			IndexBox: 		() => import('./index-box'),
		},
		data(){
			return {
				c2:'#00CFA5'
			}
		},
	}
</script>