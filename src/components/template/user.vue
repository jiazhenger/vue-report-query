<template>
	<div class='fxm'>
		<!--<Img :src='ImgLogo' size='40px' round/>-->
		<div class='r100px c0 fxmc f20' style='width:40px;height:40px' :style='{border:`1px solid ${fn.c0}`}'>
			<i class='el-icon-user' style='font-size:20px'></i>
		</div>
		<dl class='f13 ml10'>
			<dt>{{fn.val(data.name)}}</dt>
			<!-- <dd><span class='g6'>职位：</span>{{fn.val(data.position)}}</dd> -->
		</dl>
	</div>
</template>

<script>
	// ================================================================  class
	export default {
        props:{
            data:{ type:Object, default:{}}
        },
		data(){
			return {
				fn:$fn
			}
		}
	}
</script>
