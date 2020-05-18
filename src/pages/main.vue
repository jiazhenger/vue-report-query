<template>
	<section class='wh oxs'>
		<div class='wh fv' style='min-width:1200px'>
			<!-- header -->
			<header style='height:60px' class='bcf plr20 fxm'>
				<!-- logo -->
				<div class='fxm mr30' style='height:56px;'>
					<Img :src='ImgLogo' height='40px'/>
				</div>
				<!-- menu -->
				<el-menu :default-active='activeIndex' mode='horizontal' style='border:0' @select='select'>
					<template v-for='(v,i) in data'>
						<el-menu-item :index='v.path'>{{v.title}}</el-menu-item>
					</template>
				</el-menu>
				<div class='ex'></div>
				<User :data='user' />
				<menu class='fx ml20'>
					<NavItem title='修改密码' ico='el-icon-edit' class='mr20 nowrap hover' @click="$router.push('/main/change-passwords')" />
					<NavItem title='退出' ico='el-icon-switch-button' class='nowrap hover-c' @click='logout' />
				</menu>
			</header>
			<!-- pages -->
			<div class='ex r5px rel' style='margin:10px;'>
				<router-view/>
			</div>
		</div>
	</section>
</template>

<script>
    // ================================================================ element-ui
    import { Menu, MenuItem } from 'element-ui'
    Vue.use(Menu)
    Vue.use(MenuItem)
    // ================================================================ 二次封装 element-ui
    const $msg = import('@eu/js/msg')
    const $confirm = import('@eu/js/confirm')
	// ================================================================ 加载图片
	import ImgLogo from '@img/main/logo.png'
	// ================================================================ 自定义模板
	Vue.component('NavItem', {
        template: `
        	<div class='fxmc tc cp tap' style='width:56px;height:56px' @click='click'>
        		<i :class='ico' style='font-size:16px'></i><h6 class='f12 ml5'>{{title}}</h6>
        	</div>
        `,
        props:{ ico:String, title:String, link:String },
        methods:{
        	click(){ this.$emit('click') }
        }
    })
	// ================================================================ class
	export default {
		components:{
			User: 		() => import('@tp/user'),
		},
		data(){
			return {
				fn:$fn,
				ImgLogo,
				data:[
					{ title:'报告单查询', 	path:'/main/report-query' },
					{ title:'数据查询', 		path:'/main/data-query' },
					{ title:'样本追踪', 		path:'/main/sample-trace' },
				],
				activeIndex: '0',
                user:{}
			}
		},
		mounted(){
			const hash = location.hash.replace('#','')
			const arr = this.data.filter(v => hash.indexOf(v.path) >= 0)
			if($fn.hasArray(arr)){
				this.activeIndex = arr[0].path
			}
            $http.pull(this,'user/info', { dataName:'user'})
		},
		methods:{
			select(v){
				this.$router.push(v)
			},
			// 退出登录
			logout(){
                $confirm.then(f=>{
                    f('确认退出登录?', '提示', {
                    	confirmButtonText: '退出登录',
                    	cancelButtonText: '取消',
                    	type: 'warning'
                    }).then(data=>{
                    	$http.submit(this,'user/logout',{dataName:null,loading:true,replace:'/login',loadingText:'退出登录中'}).then(data=>{
                    		$fn.remove()
                    		$msg.then(f=>f('您已退出登录'))
                    	})
                    }).catch(action=>{})
                })
			}
		}
	}
</script>
