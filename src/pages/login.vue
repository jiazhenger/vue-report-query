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
				<el-form class='login-form' ref='form' :model='model' :rules='rules' @submit.prevent='submit' style='width:300px;min-height:225px'>
					<FormItem prop='company'>
						<Select ref='select' v-model='model.company' class='w login-select' p='选择分公司' :disabled='submitLoading' :size='size' :data='data' labelStr='company_name' valueStr='uuid'/>
					</FormItem>
					<FormItem class='mt20' prop='phone'>
						<Input v-model='model.phone' class='w' prefix-icon='el-icon-user' p='账号/工号/手机号/邮箱' :disabled='submitLoading' :size='size'/>
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
	import { Form } from 'element-ui'
	Vue.use(Form)
	// ================================================================ 加载图片
	import ImgBg from '@images/login/bg.jpg'
	import ImgLogo from '@images/login/logo.png'
	// ================================================================ class
	export default {
		components:{
			Select: 	() => import('@cpt/ui/select'),
			FormItem: 	() => import('@cpt/ui/form-item'),
			Input: 		() => import('@cpt/ui/input'),
			Button: 	() => import('@cpt/ui/button'),
			Checkbox: 	() => import('@cpt/ui/checkbox'),
			Img: 		() => import('@cpx/img'),
		},
		data(){
			return {
				ImgBg,ImgLogo,
				size:'small',
				model:{  },
				data:[],
				submitLoading:false,
				rules:{
					company:[{ required:true, message:'请选择分公司'  }],
					phone: [
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
			// 获取公司数据
			$http.pull(this,'company/select',{ noToken:true, loading:true }).then(data=>{
				this.remember()
			})
			// 获取验证码
//			$http.pull(this,'index/captcha',{ dataName:'captchaData', noToken:true })
		},
		methods:{
			submit(){
				this.$refs.form.validate( valid => {
					if(valid){
						$http.submit(this,'auth/login',{ 
							param: this.model,
							noToken: true,
							loading: false
						}).then(data=>{
							if($fn.hasObject(data)){ 
								$fn.local('user',data)
								$http.submit(this,'employee/currentuser',{dataName:null}).then(rs=>{
									this.$msg('登录成功')
									if( $fn.hasObject(rs)){ $fn.local('user',{...data,...rs}) }
									
									// 记住密码
									if(this.checked){
										const model = JSON.parse(JSON.stringify(this.model))
										for(var i in model){ model[i] = Encrypt.encode(model[i]) }
										$fn.localPer('remember',model)
									}else{
										$fn.removePer('remember')
									}
									
									this.$router.replace('/')
								})
							}
						})
					}else{
						this.$msg('登录验证不通过',0)
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