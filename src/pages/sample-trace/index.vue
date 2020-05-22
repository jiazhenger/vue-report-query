<template>
	<Content :scrollY='false' contentClass='h' isPage>
		<!-- tabs -->
		<Tabs v-model='activeName' class='swrap'>
            <el-tab-pane label='样本追踪' name='0'>
                <div class='fxj h'>
                    <div class='ex h fv' :style="{width:fn.hasObject(data) ? 'calc(100% - 210px)' : '100%'}">
                        <!-- search-from -->
                        <DateSearch @onRowClick='onRowClick' api='specimen/lists' :col='col'/>
                    </div>
                    <div v-if='fn.hasObject(data)' class='ex bor1 r8px ml10' style='margin-top:60px;padding:8px 20px;align-self:flex-start'>
                        <h3 class='b'>物流详情</h3>
                        <dl class='g9 lh22 mt15 f12 mb15'>
                            <dd>条码号：{{ fn.val(data.spec_code) }}</dd>
                            <dd>物流编号：{{ fn.val(data.log_code) }}</dd>
                            <dd>配送人：{{ fn.val(data.log_username) }}</dd>
                        </dl>
                        <!-- 时间线 -->
                        <el-timeline>
                            <el-timeline-item
                                v-for='(v,i) in data.details'
                                :key        = 'i'
                                :color      = 'fn.c0'
                                size        = 'large'
                                :timestamp  ='v.gps_time'
                            >
                                {{v.address}}
                            </el-timeline-item>
                          </el-timeline>
                    </div>
                </div>
            </el-tab-pane>
	  	</Tabs>
	</Content>
</template>

<script>
    // ================================================================ element-ui
    import { Timeline, TimelineItem } from 'element-ui'
    Vue.use(Timeline)
    Vue.use(TimelineItem)
     // ================================================================ class
	export default {
		components:{
			Content		: ()=>import('@cpx/content'),
			DateSearch	: ()=>import('@tp/date-search'),
            Tabs        : ()=>import('@eu/tabs')
		},
		data(){
			return {
                fn:$fn,
				activeName:'0',
                col:[
                    { prop:'spec_code', 	label:'条码号',		width:'120px' },
                    { prop:'patient_name', 	label:'病人姓名'},
                    { prop:'sex', 			label:'性别',		width:'80px',	align:'center' },
                    { prop:'age', 			label:'年龄',		width:'80px', 	align:'center' },
                    { prop:'project_name', 	label:'项目名称' },
                    { prop:'delivery_time', label:'送检日期',	width:'140px' },
                    { prop:'hospital', 		label:'送检单位' },
                    { prop:'check_time', 	label:'检测日期',	width:'140px' },
                ],
                data:{}
			}
		},
        mounted(){

        },
		methods:{
            // 点击行触发
            onRowClick(v){
                $http.pull(this,'specimen/log', { param:{box_number:v.box_number} })
            }
		}
	}
</script>
