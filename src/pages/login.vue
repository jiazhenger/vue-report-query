<template>
	<section class='wh bsc fv' :style="{backgroundImage:'url('+ ImgBg +')'}">
		<div class='ex fxmc'>
			<div>
				<!-- header -->
				<Img :src='ImgLogo' width='158px' height='48px'/>
				<hgroup class='tc mt20 mb25'>
					<h2 class='f24 g6'>诺森报告单查询系统</h2>
					<h6 class='f16 g9 mt15'>致力于做民众身边的健康管理专家</h6>
				</hgroup>
				<!-- form -->
				<el-form class='login-form' ref='form' :model='model' :rules='rules' @submit.prevent.stop='submit' style='width:300px;min-height:225px'>
					<FormItem class='mt20' prop='account'>
						<Input v-model='model.account' class='w' prefix-icon='el-icon-user' p='账号' :disabled='submitLoading' :size='size'/>
					</FormItem>
					<FormItem class='mt20' prop='password'>
						<Input v-model='model.password' class='w' prefix-icon='el-icon-goods' :show-password='true' type='password' p='密码' :disabled='submitLoading' :size='size'/>
					</FormItem>
					<FormItem class='mt10'>
						<Checkbox ref='checkbox' label='记住密码' v-model='checked' :disabled='submitLoading' />
					</FormItem>
					<FormItem class='mt10'>
						<Button :label="submitLoading?'登录中...':'登录'" class='w' native-type='submit'  @click='submit($event)' :loading='submitLoading'  :size='size'/>
					</FormItem>
				</el-form>
			</div>
		</div>
		<!-- copyright -->
		<footer class='ptb10' style='color:#ccc'>
			<div class='fxc'>
				<dl class='tc fxc' style='width:300px;'>
					<dd class='ex'><router-link to='#' class='hover'>帮助</router-link></dd>
					<dd class='ex'><router-link to='#' class='hover'>隐私</router-link></dd>
					<dd class='ex'><router-link to='#' class='hover'>条款</router-link></dd>
				</dl>
			</div>
			<div class='tc f12 mt5'>copyright © 体验技术部出品</div>
		</footer>
	</section>
</template>

<script>
	// ================================================================ element-ui
	import Encrypt from '@com/encrypt'
    // ================================================================ 二次封装 element-ui
    const $msg = import('@eu/js/msg')
	// ================================================================ 加载图片
	import ImgBg from '@img/login/bg.jpg'
	import ImgLogo from '@img/login/logo.png'
	// ================================================================ class
	export default {
		components:{
			Select: 	() => import('@eu/select'),
			FormItem: 	() => import('@eu/form-item'),
			Input: 		() => import('@eu/input'),
			Button: 	() => import('@eu/button'),
			Checkbox: 	() => import('@eu/checkbox'),
			Img: 		() => import('@cpx/img'),
		},
		data(){
			return {
				ImgBg,ImgLogo,
				size:'small',
				model:{ account: '15882463718', password:'123456' },
				data:[],
				submitLoading:false,
				rules:{
					account: [
			            { required: true, message: '请输入手机号', trigger: ['blur','change'] },
			            { pattern:$fn.regPhone, message: '请输入正确的手机号', trigger: ['blur','change'] }
			        ],
			        password: [
			            { required: true, message: '请输入密码', trigger: ['blur','change'] },
			            { min: 6, max: 18, message: '长度在 6 到 8 个字符', trigger: ['blur','change'] }
			        ],
				},
				checked:false
			}
		},
		mounted(){

		},
		methods:{
			submit(){
				this.$refs.form.validate( valid => {
					if(valid){
						$http.submit(this,'user/login',{
							param: this.model,
							noToken: true,
							loading: false
						}).then(data=>{
							if($fn.hasObject(data)){
								$fn.local('user',data)
								$msg.then(f => f('登录成功') )

								// 记住密码
								if(this.checked){
									const model = JSON.parse(JSON.stringify(this.model))
									for(var i in model){ model[i] = Encrypt.encode(model[i]) }
									$fn.localPer('remember',model)
								}else{
									$fn.removePer('remember')
								}

								this.$router.replace('/')
							}
						})
					}else{
                        $msg.then(f => f('登录验证不通过', 0) )
					}
				})
			},
			// 获取记住的密码
			remember(){
				setTimeout(()=>{
					const m = $fn.localPer('remember')
					if($fn.hasObject(m)){
						for(var i in m){ m[i] = Encrypt.decode(m[i]) }
						this.model = m
						this.$refs.checkbox && this.$refs.checkbox.setValue(true)
						this.$refs.select && this.$refs.select.setValue(m.company)
					}
				})
			}
		}
	}
</script>
