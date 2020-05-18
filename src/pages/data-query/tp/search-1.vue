<template>
	<SearchBox>
		<el-form ref='search' :inline='true' :model='model' @submit='submit'>
			<FormItem class='auto' label='送检日期' prop='time'>
				<DatePicker ref='d' v-model='model.time' @clear='submit' @change='submit' :disabled='pagingLoading'/>
			</FormItem>
			<FormItem class='auto'>
				<Button label='查询' native-type='submit'  @click='submit($event)' :loading='pagingLoading'/>
				<Button label='重置' plain @click='reset' :disabled='pagingLoading'/>
				<Button label='导出' plain :disabled='pagingLoading'/>
			</FormItem>
		</el-form>
	</SearchBox>
</template>

<script>
	export default {
		components:{
			FormItem	: ()=>import('@eu/form-item'),
			DatePicker 	: ()=>import('@eu/date-picker'),
			Input 	: ()=>import('@eu/input'),
			Button		: ()=>import('@eu/button'),
			SearchBox	: ()=>import('@tp/search-box'),
		},
		props:{
			pagingLoading	: { type:Boolean, default:true }
		},
		data(){
			return {
				model:{}
			}
		},
		methods:{
			submit(){
				console.log(this.model)
				this.$emit('submit',this.model)
				
			},
			reset(){
//				this.$refs.search.resetFields()
				this.$refs.d.reset()
			}
		}
	}
</script>