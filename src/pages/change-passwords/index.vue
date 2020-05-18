<template>
	<Content isPage>
        <div style='width:350px;margin:0 auto;padding-top:100px'>
            <h2 class='tc b f16 mb30'>修改密码</h2>
            <el-form ref='form' :model='model' :rules='rules' label-width='80px' @submit.prevent='submit'>
                <FormItem label='旧密码' prop='password'>
                    <Input v-model='model.password' p='请输入旧密码' :disabled='submitLoading' size='small'/>
                </FormItem>
                <FormItem label='新密码' prop='password2' class='mt20'>
                    <Input v-model='model.password2' p='请输入新密码' :disabled='submitLoading' size='small'/>
                </FormItem>
                <FormItem label='确认密码' prop='rpassword2' class='mt20'>
                    <Input v-model='model.rpassword2' p='请再次输入新密码' :disabled='submitLoading' size='small'/>
                </FormItem>
                <FormItem class='mt30'>
                	<Button label='确认修改' class='w' native-type='submit'  @click='submit($event)' :loading='submitLoading'  size='small'/>
                </FormItem>
            </el-form>
        </div>
	</Content>
</template>

<script>
    // ================================================================ element-ui
    import { Form } from 'element-ui'
    Vue.use(Form)
    // ================================================================ 二次封装 element-ui
    const $msg = import('@eu/js/msg')
    // ================================================================ class
	export default {
		components:{
			Content		: () => import('@cpx/content'),
			FormItem	: ()=>import('@eu/form-item'),
			Input		: ()=>import('@eu/input'),
			Button		: ()=>import('@eu/button'),
		},
		data(){
			return {
				model:{},
                rules:{
                	password: [
                	    { required: true, message: '请输入旧密码', trigger: ['blur','change'] },
                	],
                    password2: [
                        { required: true, message: '请输入新密码', trigger: ['blur','change'] },
                        { min: 6, max: 18, message: '长度在 6 到 8 个字符', trigger: ['blur','change'] }
                    ],
                    rpassword2: [
                        { required: true, message: '请输入确认密码', trigger: ['blur','change'] },
                        { validator: (rule,value,callback)=>{
                            if(value !== this.model.password2){
                                callback(new Error('两次密码输入不一致'))
                            }else{
                                callback()
                            }
                        }, message: '两次密码输入不一致', trigger: ['blur','change'] },

                    ],
                },
                submitLoading:false
			}
		},
		mounted(){

		},
		methods:{
            submit(){
            	this.$refs.form.validate( valid => {
            		if(valid){
            			$http.submit(this,'user/changePassword',{
            				param: this.model,
            				loading: false
            			}).then(data=>{
            				$msg.then(f => f('密码修改成功，下次登录生效') )
            				this.$router.replace('/')
            			})
            		}else{
                        $msg.then(f => f('表单填写不正确'), 0 )
            		}
            	})
            }
		}
	}
</script>
