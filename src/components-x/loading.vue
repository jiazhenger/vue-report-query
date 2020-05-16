<template>  
	<div id='ubLoading' class='fix_lt wh tc dn' style='z-index:1999'>
		<div class='fxmc wh'>
			<div class='r8px' style='background:rgba(0,0,0,.8);min-width:90px;padding:8px 12px' >
				<div class='fxmc'>
					<svg :width='size' :height='size' viewBox='0 0 100 100'>
						<circle fill='none' stroke='#fff' strokeWidth='4' cx='50' cy='50' r='44' style='opacity:0.6'></circle>
						<circle fill='#fff' :stroke='fn.c0' strokeWidth='3' cx='8' cy='54' r='6' transform='rotate(56.0809 50 48.6231)'>
							<animateTransform attributeName='transform' dur='2s' type='rotate' from='0 50 48' to='360 50 52' repeatCount='indefinite'></animateTransform>
					  	</circle>
					</svg>
				</div>
				<div class='cf f12 lh20 mt5 ub-loading-msg'></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				fn		: $fn,
				size	: '60px'
			}
		}
	}
</script>