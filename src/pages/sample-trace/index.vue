<template>
	<Content isPage>
		<!-- tabs -->
		<el-tabs v-model='activeName' style='padding:0 10px'>
            <el-tab-pane label='报告单查询' name='0'></el-tab-pane>
			<div class='fxj'>
                <div style='width:calc(100% - 210px)'>
                    <!-- search-from -->
                    <DateSearch/>
                </div>
                <div class='ex bor1 r8px' style='margin-top:60px;padding:8px 20px;align-self:flex-start'>
                    <h3 class='b'>物流详情</h3>
                    <dl class='g9 lh22 mt15 f12 mb15'>
                        <dd>条码号：123151</dd>
                        <dd>物流编号：123151</dd>
                        <dd>配送人：123151</dd>
                    </dl>
                    <!-- 时间线 -->
                    <el-timeline>
                        <el-timeline-item
                            v-for='(v,i) in data'
                            :key        = 'i'
                            :type       = 'v.type'
                            :color      = 'fn.c0'
                            size        = 'large'
                            :timestamp  ='v.timestamp'
                        >
                            {{v.content}}
                        </el-timeline-item>
                      </el-timeline>
                </div>
            </div>
	  	</el-tabs>
	</Content>
</template>

<script>
    // ================================================================ element-ui
    import { Tabs, TabPane, Timeline, TimelineItem } from 'element-ui'
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Timeline)
    Vue.use(TimelineItem)
     // ================================================================ class
	export default {
		components:{
			Content		: ()=>import('@cpx/content'),
			DateSearch	: ()=>import('@tp/date-search')
		},
		data(){
			return {
                fn:$fn,
				activeName:'0',
                data:[{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
			}
		},
        mounted(){

        },
		methods:{
            getWu(){ $http.pull(this,'specimen/log', { param:{box_number:1} }) }
		}
	}
</script>
