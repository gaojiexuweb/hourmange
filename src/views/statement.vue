<template>
  <div class="statement">
    <el-card class="page-search-card" shadow="never">
      <div style="float:right;">
        <el-button type="primary" @click="handleClick" size="small">返回</el-button>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" @submit.native.prevent>
        <el-form-item label="报表名称">
          <el-input autofocus v-model.trim="formInline.name" placeholder="请输入报表名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleSearch()">查询</el-button>
          <el-button type="primary" size="small" plain @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="page-content-card" shadow="never">
      <div slot="header">
        <span>信息列表</span>
        <div style="float:right">
          <el-button icon="el-icon-plus" type="primary" size="small" @click="handleAdd">新增</el-button>
        </div>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          v-loading="loading"
          element-loading-text
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.1)"
        >
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Statement",
  data() {
    return {
      loading: true,
      formInline: {},
      tableData: [],
      tableData1: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      jobs: [
        {
          job_type: "Part Time",
          latitude: 49.545068,
          longitude: 0.760518,
          title: "reiciendis",
          industry: [
            {
              id: 1,
              name: "development"
            },
            {
              id: 2,
              name: "design"
            }
          ]
        },
        {
          job_type: "Full Time",
          latitude: 51.545068,
          longitude: 0.460518,
          title: "auteas",
          industry: [
            {
              id: 1,
              name: "development"
            },
            {
              id: 2,
              name: "testing"
            }
          ]
        }
      ],
      respon: [
        {
          label: "社会治理",
          value: "sj001",
          children: [
            {
              label: "国家安全",
              value: "shzl001",
              children: [
                {
                  label: "反动宣传",
                  value: "gjaq001",
                  children: null
                },
                {
                  label: "反动策划与组织",
                  value: "gjaq002",
                  children: null
                },
                {
                  label: "涉外事件",
                  value: "gjaq003",
                  children: null
                },
                {
                  label: "其他",
                  value: "gjaq004",
                  children: null
                }
              ]
            },
            {
              label: "信访事件",
              value: "shzl002",
              children: [
                {
                  label: "农村农业",
                  value: "xf001",
                  children: [
                    {
                      label: "村务管理",
                      value: "ncny001",
                      children: null
                    },
                    {
                      label: "土地承包经营",
                      value: "ncny002",
                      children: null
                    },
                    {
                      label: "扶贫开发",
                      value: "ncny003",
                      children: null
                    },
                    {
                      label: "农副产品流通",
                      value: "ncny004",
                      children: null
                    },
                    {
                      label: "农资农技",
                      value: "ncny005",
                      children: null
                    },
                    {
                      label: "农垦农场",
                      value: "ncny006",
                      children: null
                    },
                    {
                      label: "动物防疫",
                      value: "ncny007",
                      children: null
                    },
                    {
                      label: "林业管理",
                      value: "ncny008",
                      children: null
                    },
                    {
                      label: "草原草场",
                      value: "ncny009",
                      children: null
                    },
                    {
                      label: "野生资源管理",
                      value: "ncny010",
                      children: null
                    },
                    {
                      label: "水利水电",
                      value: "ncny011",
                      children: null
                    },
                    {
                      label: "水库移民",
                      value: "ncny012",
                      children: null
                    },
                    {
                      label: "惠农补贴",
                      value: "ncny013",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "ncny014",
                      children: null
                    }
                  ]
                },
                {
                  label: "国土资源",
                  value: "xf002",
                  children: [
                    {
                      label: "土地资源管理",
                      value: "gtzy001",
                      children: null
                    },
                    {
                      label: "土地征收",
                      value: "gtzy002",
                      children: null
                    },
                    {
                      label: "矿产资源管理",
                      value: "gtzy003",
                      children: null
                    },
                    {
                      label: "海洋气象地震",
                      value: "gtzy004",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "gtzy005",
                      children: null
                    }
                  ]
                },
                {
                  label: "城乡建设",
                  value: "xf003",
                  children: [
                    {
                      label: "国有土地上房屋征收与补偿",
                      value: "cxjs001",
                      children: null
                    },
                    {
                      label: "集体土地上房屋拆迁与补偿",
                      value: "cxjs002",
                      children: null
                    },
                    {
                      label: "城市建设和市政管理",
                      value: "cxjs003",
                      children: null
                    },
                    {
                      label: "城乡规划",
                      value: "cxjs004",
                      children: null
                    },
                    {
                      label: "住房保障与房地产",
                      value: "cxjs005",
                      children: null
                    },
                    {
                      label: "建筑市场",
                      value: "cxjs006",
                      children: null
                    },
                    {
                      label: "工程质量",
                      value: "cxjs007",
                      children: null
                    },
                    {
                      label: "村镇建设",
                      value: "cxjs008",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "cxjs009",
                      children: null
                    }
                  ]
                },
                {
                  label: "劳动和社会保障",
                  value: "xf004",
                  children: [
                    {
                      label: "城镇职工社会保险",
                      value: "ldshbz001",
                      children: null
                    },
                    {
                      label: "城镇居民社会保险",
                      value: "ldshbz002",
                      children: null
                    },
                    {
                      label: "社保基金管理",
                      value: "ldshbz003",
                      children: null
                    },
                    {
                      label: "工资福利",
                      value: "ldshbz004",
                      children: null
                    },
                    {
                      label: "就业培训",
                      value: "ldshbz005",
                      children: null
                    },
                    {
                      label: "劳动保护",
                      value: "ldshbz006",
                      children: null
                    },
                    {
                      label: "劳动关系",
                      value: "ldshbz007",
                      children: null
                    },
                    {
                      label: "退休政策及待遇",
                      value: "ldshbz008",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "ldshbz009",
                      children: null
                    }
                  ]
                },
                {
                  label: "卫生计生",
                  value: "xf005",
                  children: [
                    {
                      label: "公共卫生",
                      value: "wsjs001",
                      children: null
                    },
                    {
                      label: "食品药品监管",
                      value: "wsjs002",
                      children: null
                    },
                    {
                      label: "医政监管",
                      value: "wsjs003",
                      children: null
                    },
                    {
                      label: "医患纠纷",
                      value: "wsjs004",
                      children: null
                    },
                    {
                      label: "人口计生",
                      value: "wsjs005",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "wsjs006",
                      children: null
                    }
                  ]
                },
                {
                  label: "教育文体",
                  value: "xf006",
                  children: [
                    {
                      label: "教育体制",
                      value: "jywt001",
                      children: null
                    },
                    {
                      label: "考试招生",
                      value: "jywt002",
                      children: null
                    },
                    {
                      label: "教育行政管理",
                      value: "jywt003",
                      children: null
                    },
                    {
                      label: "教师队伍和待遇",
                      value: "jywt004",
                      children: null
                    },
                    {
                      label: "失学辍学",
                      value: "jywt005",
                      children: null
                    },
                    {
                      label: "教育收费",
                      value: "jywt006",
                      children: null
                    },
                    {
                      label: "文化",
                      value: "jywt007",
                      children: null
                    },
                    {
                      label: "文物管理",
                      value: "jywt008",
                      children: null
                    },
                    {
                      label: "体育",
                      value: "jywt009",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "jywt010",
                      children: null
                    }
                  ]
                },
                {
                  label: "民政",
                  value: "xf007",
                  children: [
                    {
                      label: "基层选举和社区建设",
                      value: "mz001",
                      children: null
                    },
                    {
                      label: "优抚",
                      value: "mz002",
                      children: null
                    },
                    {
                      label: "复退安置",
                      value: "mz003",
                      children: null
                    },
                    {
                      label: "社会救助",
                      value: "mz004",
                      children: null
                    },
                    {
                      label: "区划地名",
                      value: "mz005",
                      children: null
                    },
                    {
                      label: "民间组织",
                      value: "mz006",
                      children: null
                    },
                    {
                      label: "救灾募捐",
                      value: "mz007",
                      children: null
                    },
                    {
                      label: "福利慈善",
                      value: "mz008",
                      children: null
                    },
                    {
                      label: "社会服务",
                      value: "mz009",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "mz010",
                      children: null
                    }
                  ]
                },
                {
                  label: "政法",
                  value: "xf008",
                  children: [
                    {
                      label: "法制建设",
                      value: "zf001",
                      children: null
                    },
                    {
                      label: "诉讼",
                      value: "zf002",
                      children: null
                    },
                    {
                      label: "仲裁与调解",
                      value: "zf003",
                      children: null
                    },
                    {
                      label: "行政复议",
                      value: "zf004",
                      children: null
                    },
                    {
                      label: "法律服务",
                      value: "zf005",
                      children: null
                    },
                    {
                      label: "刑罚执行",
                      value: "zf006",
                      children: null
                    },
                    {
                      label: "警务督察",
                      value: "zf007",
                      children: null
                    },
                    {
                      label: "社会治安",
                      value: "zf008",
                      children: null
                    },
                    {
                      label: "交通管理",
                      value: "zf009",
                      children: null
                    },
                    {
                      label: "刑案侦破",
                      value: "zf010",
                      children: null
                    },
                    {
                      label: "户籍证件",
                      value: "zf011",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "zf012",
                      children: null
                    }
                  ]
                },
                {
                  label: "经济管理",
                  value: "xf009",
                  children: [
                    {
                      label: "宏观调控",
                      value: "jjgl001",
                      children: null
                    },
                    {
                      label: "金融财税",
                      value: "jjgl002",
                      children: null
                    },
                    {
                      label: "保险证券期货",
                      value: "jjgl003",
                      children: null
                    },
                    {
                      label: "国资监管",
                      value: "jjgl004",
                      children: null
                    },
                    {
                      label: "能源管理",
                      value: "jjgl005",
                      children: null
                    },
                    {
                      label: "企业破产",
                      value: "jjgl006",
                      children: null
                    },
                    {
                      label: "安全生产",
                      value: "jjgl007",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "jjgl008",
                      children: null
                    }
                  ]
                },
                {
                  label: "交通运输",
                  value: "xf010",
                  children: [
                    {
                      label: "建设管理",
                      value: "jtys001",
                      children: null
                    },
                    {
                      label: "客货运输",
                      value: "jtys002",
                      children: null
                    },
                    {
                      label: "邮政管理",
                      value: "jtys003",
                      children: null
                    },
                    {
                      label: "出租车管理",
                      value: "jtys004",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "jtys005",
                      children: null
                    }
                  ]
                },
                {
                  label: "商贸旅游",
                  value: "xf011",
                  children: [
                    {
                      label: "商业贸易",
                      value: "smly001",
                      children: null
                    },
                    {
                      label: "市场监管",
                      value: "smly002",
                      children: null
                    },
                    {
                      label: "质监检验检疫",
                      value: "smly003",
                      children: null
                    },
                    {
                      label: "旅游管理",
                      value: "smly004",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "smly005",
                      children: null
                    }
                  ]
                },
                {
                  label: "科技与信息产业",
                  value: "xf012",
                  children: [
                    {
                      label: "科学技术",
                      value: "kjxxcy001",
                      children: null
                    },
                    {
                      label: "知识产权",
                      value: "kjxxcy002",
                      children: null
                    },
                    {
                      label: "信息化建设",
                      value: "kjxxcy003",
                      children: null
                    },
                    {
                      label: "电信",
                      value: "kjxxcy004",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "kjxxcy005",
                      children: null
                    }
                  ]
                },
                {
                  label: "环境保护",
                  value: "xf013",
                  children: [
                    {
                      label: "商业噪音",
                      value: "hjbh001",
                      children: null
                    },
                    {
                      label: "餐饮单位油烟",
                      value: "hjbh002",
                      children: null
                    },
                    {
                      label: "出土工地扬尘",
                      value: "hjbh003",
                      children: null
                    }
                  ]
                },
                {
                  label: "党务政务",
                  value: "xf014",
                  children: [
                    {
                      label: "党的建设",
                      value: "dwzw001",
                      children: null
                    },
                    {
                      label: "政治体制",
                      value: "dwzw002",
                      children: null
                    },
                    {
                      label: "民族宗教",
                      value: "dwzw003",
                      children: null
                    },
                    {
                      label: "港澳台侨",
                      value: "dwzw004",
                      children: null
                    },
                    {
                      label: "国防外交",
                      value: "dwzw005",
                      children: null
                    },
                    {
                      label: "群众团体",
                      value: "dwzw006",
                      children: null
                    },
                    {
                      label: "宣传舆论",
                      value: "dwzw007",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "dwzw008",
                      children: null
                    }
                  ]
                },
                {
                  label: "组织人事",
                  value: "xf015",
                  children: [
                    {
                      label: "选拔任用",
                      value: "zzrs001",
                      children: null
                    },
                    {
                      label: "招录辞退",
                      value: "zzrs002",
                      children: null
                    },
                    {
                      label: "编制职位",
                      value: "zzrs003",
                      children: null
                    },
                    {
                      label: "人力资源",
                      value: "zzrs004",
                      children: null
                    },
                    {
                      label: "军转安置",
                      value: "zzrs005",
                      children: null
                    },
                    {
                      label: "机构改革",
                      value: "zzrs006",
                      children: null
                    },
                    {
                      label: "离休",
                      value: "zzrs007",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "zzrs008",
                      children: null
                    }
                  ]
                },
                {
                  label: "纪检监察",
                  value: "xf016",
                  children: [
                    {
                      label: "贪污贿赂",
                      value: "jjjc001",
                      children: null
                    },
                    {
                      label: "滥用职权",
                      value: "jjjc002",
                      children: null
                    },
                    {
                      label: "失职渎职",
                      value: "jjjc003",
                      children: null
                    },
                    {
                      label: "干部作风",
                      value: "jjjc004",
                      children: null
                    },
                    {
                      label: "党政处分",
                      value: "jjjc005",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "jjjc006",
                      children: null
                    }
                  ]
                },
                {
                  label: "其他",
                  value: "xf017",
                  children: [
                    {
                      label: "历史遗留问题",
                      value: "qtylwt001",
                      children: null
                    },
                    {
                      label: "其他",
                      value: "qtylwt002",
                      children: null
                    }
                  ]
                }
              ]
            },
            {
              label: "矛盾纠纷排查",
              value: "shzl003",
              children: [
                {
                  label: "婚恋家庭纠纷",
                  value: "mdjfpc001",
                  children: null
                },
                {
                  label: "邻里纠纷",
                  value: "mdjfpc002",
                  children: null
                },
                {
                  label: "侵权相关纠纷",
                  value: "mdjfpc003",
                  children: null
                },
                {
                  label: "医患纠纷",
                  value: "mdjfpc004",
                  children: null
                },
                {
                  label: "物权相关纠纷",
                  value: "mdjfpc005",
                  children: null
                },
                {
                  label: "劳动人事争议",
                  value: "mdjfpc006",
                  children: null
                },
                {
                  label: "消费纠纷",
                  value: "mdjfpc007",
                  children: null
                },
                {
                  label: "林地纠纷",
                  value: "mdjfpc008",
                  children: null
                },
                {
                  label: "边界纠纷",
                  value: "mdjfpc009",
                  children: null
                },
                {
                  label: "涉法涉诉纠纷",
                  value: "mdjfpc010",
                  children: null
                },
                {
                  label: "其他民商事纠纷",
                  value: "mdjfpc011",
                  children: null
                },
                {
                  label: "金融借贷纠纷",
                  value: "mdjfpc012",
                  children: null
                },
                {
                  label: "涉军维权",
                  value: "mdjfpc013",
                  children: null
                },
                {
                  label: "土地及资源权属纠纷",
                  value: "mdjfpc014",
                  children: null
                },
                {
                  label: "拆迁",
                  value: "mdjfpc015",
                  children: null
                },
                {
                  label: "环境保护",
                  value: "mdjfpc016",
                  children: null
                },
                {
                  label: "涉民族宗教纠纷",
                  value: "mdjfpc017",
                  children: null
                },
                {
                  label: "其他行政执法纠纷",
                  value: "mdjfpc018",
                  children: null
                },
                {
                  label: "合同及相关纠纷",
                  value: "mdjfpc019",
                  children: null
                },
                {
                  label: "涉民政纠纷",
                  value: "mdjfpc020",
                  children: null
                },
                {
                  label: "生产经营",
                  value: "mdjfpc021",
                  children: null
                },
                {
                  label: "涉组织涉纪检纠纷",
                  value: "mdjfpc022",
                  children: null
                },
                {
                  label: "人格权纠纷",
                  value: "mdjfpc023",
                  children: null
                },
                {
                  label: "城乡建设发展纠纷",
                  value: "mdjfpc024",
                  children: null
                },
                {
                  label: "其他",
                  value: "mdjfpc025",
                  children: null
                }
              ]
            },
            {
              label: "司法活动",
              value: "shzl004",
              children: [
                {
                  label: "法律援助",
                  value: "sfhd001",
                  children: null
                },
                {
                  label: "法制宣传",
                  value: "sfhd002",
                  children: null
                },
                {
                  label: "社区矫正",
                  value: "sfhd003",
                  children: null
                },
                {
                  label: "其他",
                  value: "sfhd004",
                  children: null
                }
              ]
            },
            {
              label: "反邪教",
              value: "shzl005",
              children: [
                {
                  label: "邪教宣传",
                  value: "fxj001",
                  children: null
                },
                {
                  label: "邪教策划与组织",
                  value: "fxj002",
                  children: null
                },
                {
                  label: "邪教服务",
                  value: "fxj003",
                  children: null
                },
                {
                  label: "其他",
                  value: "fxj004",
                  children: null
                }
              ]
            },
            {
              label: "黄赌毒",
              value: "shzl006",
              children: [
                {
                  label: "涉毒人（物）管控",
                  value: "hdd001",
                  children: null
                },
                {
                  label: "毒品、种植、制毒",
                  value: "hdd002",
                  children: null
                },
                {
                  label: "贩毒、吸毒",
                  value: "hdd003",
                  children: null
                },
                {
                  label: "卖淫嫖娼",
                  value: "hdd004",
                  children: null
                },
                {
                  label: "扫黄打非",
                  value: "hdd005",
                  children: null
                },
                {
                  label: "赌博",
                  value: "hdd006",
                  children: null
                },
                {
                  label: "其他",
                  value: "hdd007",
                  children: null
                }
              ]
            },
            {
              label: "党群工作",
              value: "shzl007",
              children: [
                {
                  label: "干部作风",
                  value: "dqgz001",
                  children: null
                },
                {
                  label: "群团工作",
                  value: "dqgz002",
                  children: null
                },
                {
                  label: "民族宗教育",
                  value: "dqgz003",
                  children: null
                },
                {
                  label: "工会工作",
                  value: "dqgz004",
                  children: null
                },
                {
                  label: "团委工作",
                  value: "dqgz005",
                  children: null
                },
                {
                  label: "妇联家庭",
                  value: "dqgz006",
                  children: null
                },
                {
                  label: "党建宣传",
                  value: "dqgz007",
                  children: null
                }
              ]
            },
            {
              label: "治安隐患",
              value: "shzl008",
              children: [
                {
                  label: "人口管理",
                  value: "zayh001",
                  children: null
                },
                {
                  label: "特殊人群管理",
                  value: "zayh002",
                  children: null
                },
                {
                  label: "出租房屋管理",
                  value: "zayh003",
                  children: null
                },
                {
                  label: "特种场所管理",
                  value: "zayh004",
                  children: null
                },
                {
                  label: "盗窃",
                  value: "zayh005",
                  children: null
                },
                {
                  label: "抢劫",
                  value: "zayh006",
                  children: null
                },
                {
                  label: "黑恶势力",
                  value: "zayh007",
                  children: null
                },
                {
                  label: "其他",
                  value: "zayh008",
                  children: null
                }
              ]
            },
            {
              label: "社情民意收集",
              value: "shzl009",
              children: [
                {
                  label: "社情民意收集",
                  value: "sqmysj001",
                  children: null
                }
              ]
            },
            {
              label: "参与特殊人群服务",
              value: "shzl010",
              children: [
                {
                  label: "精神病人是否落实",
                  value: "tsrqfw001",
                  children: null
                },
                {
                  label: "社区帮教落实",
                  value: "tsrqfw002",
                  children: null
                },
                {
                  label: "刑释",
                  value: "tsrqfw003",
                  children: null
                },
                {
                  label: "吸毒人员",
                  value: "tsrqfw004",
                  children: null
                },
                {
                  label: "重点青少年",
                  value: "tsrqfw005",
                  children: null
                }
              ]
            },
            {
              label: "政策法规宣传",
              value: "shzl011",
              children: [
                {
                  label: "咨询、宣传",
                  value: "zcfgxc001",
                  children: null
                }
              ]
            },
            {
              label: "参与治安防控",
              value: "shzl012",
              children: [
                {
                  label: "物防设施",
                  value: "cyzafk001",
                  children: null
                },
                {
                  label: "技防设施",
                  value: "cyzafk002",
                  children: null
                },
                {
                  label: "刑事治安案件发生情况",
                  value: "cyzafk003",
                  children: null
                },
                {
                  label: "治安隐患或线索",
                  value: "cyzafk004",
                  children: null
                },
                {
                  label: "守楼护院",
                  value: "cyzafk005",
                  children: null
                },
                {
                  label: "其他",
                  value: "cyzafk006",
                  children: null
                }
              ]
            },
            {
              label: "突发事件报告",
              value: "shzl013",
              children: [
                {
                  label: "突发事件",
                  value: "tfsjbg100",
                  children: null
                }
              ]
            },
            {
              label: "舆情信息",
              value: "shzl014",
              children: [
                {
                  label: "社会治理",
                  value: "yqxx001",
                  children: [
                    {
                      label: "自然灾害",
                      value: "yqshzl001",
                      children: null
                    },
                    {
                      label: "社会治安",
                      value: "yqshzl002",
                      children: null
                    },
                    {
                      label: "重大会议",
                      value: "yqshzl003",
                      children: null
                    },
                    {
                      label: "重要活动",
                      value: "yqshzl004",
                      children: null
                    },
                    {
                      label: "重要节点",
                      value: "yqshzl005",
                      children: null
                    },
                    {
                      label: "重点人群",
                      value: "yqshzl006",
                      children: null
                    },
                    {
                      label: "安全领域",
                      value: "yqshzl007",
                      children: null
                    },
                    {
                      label: "重点人头",
                      value: "yqshzl008",
                      children: null
                    },
                    {
                      label: "生态环保",
                      value: "yqshzl009",
                      children: null
                    },
                    {
                      label: "宣传网信",
                      value: "yqshzl010",
                      children: null
                    },
                    {
                      label: "意识形态",
                      value: "yqshzl011",
                      children: null
                    }
                  ]
                },
                {
                  label: "服务管理",
                  value: "yqxx002",
                  children: [
                    {
                      label: "交通领域",
                      value: "fwgl001",
                      children: null
                    },
                    {
                      label: "医疗卫生",
                      value: "fwgl002",
                      children: null
                    },
                    {
                      label: "房地产",
                      value: "fwgl003",
                      children: null
                    },
                    {
                      label: "教育",
                      value: "fwgl004",
                      children: null
                    },
                    {
                      label: "经济金融",
                      value: "fwgl005",
                      children: null
                    },
                    {
                      label: "文化旅游",
                      value: "fwgl006",
                      children: null
                    },
                    {
                      label: "机关服务",
                      value: "fwgl007",
                      children: null
                    }
                  ]
                },
                {
                  label: "执法司法",
                  value: "yqxx003",
                  children: [
                    {
                      label: "涉法涉诉",
                      value: "zfsf001",
                      children: null
                    },
                    {
                      label: "重要案件",
                      value: "zfsf002",
                      children: null
                    }
                  ]
                },
                {
                  label: "队伍建设",
                  value: "yqxx004",
                  children: [
                    {
                      label: "涉干涉纪",
                      value: "dwjs001",
                      children: null
                    },
                    {
                      label: "涉军涉警",
                      value: "dwjs002",
                      children: null
                    }
                  ]
                },
                {
                  label: "社会治安",
                  value: "yqxx005",
                  children: [
                    {
                      label: "盗窃",
                      value: "shza001",
                      children: null
                    },
                    {
                      label: "扒窃",
                      value: "shza002",
                      children: null
                    },
                    {
                      label: "抢夺",
                      value: "shza003",
                      children: null
                    },
                    {
                      label: "抢劫",
                      value: "shza004",
                      children: null
                    },
                    {
                      label: "民转刑",
                      value: "shza005",
                      children: null
                    },
                    {
                      label: "卖淫嫖娼",
                      value: "shza006",
                      children: null
                    },
                    {
                      label: "赌博",
                      value: "shza007",
                      children: null
                    },
                    {
                      label: "吸毒贩毒",
                      value: "shza008",
                      children: null
                    }
                  ]
                },
                {
                  label: "重点人群",
                  value: "yqxx006",
                  children: [
                    {
                      label: "民师",
                      value: "zdrq001",
                      children: null
                    },
                    {
                      label: "涉军",
                      value: "zdrq002",
                      children: null
                    },
                    {
                      label: "草航",
                      value: "zdrq003",
                      children: null
                    },
                    {
                      label: "天保工程",
                      value: "zdrq004",
                      children: null
                    },
                    {
                      label: "畜牧系统",
                      value: "zdrq005",
                      children: null
                    },
                    {
                      label: "移民",
                      value: "zdrq006",
                      children: null
                    }
                  ]
                },
                {
                  label: "机关服务",
                  value: "yqxx007",
                  children: [
                    {
                      label: "车辆",
                      value: "jgfw001",
                      children: null
                    },
                    {
                      label: "驾驶证",
                      value: "jgfw002",
                      children: null
                    },
                    {
                      label: "出入境",
                      value: "jgfw003",
                      children: null
                    },
                    {
                      label: "户籍",
                      value: "jgfw004",
                      children: null
                    },
                    {
                      label: "法律服务",
                      value: "jgfw005",
                      children: null
                    },
                    {
                      label: "执行工作",
                      value: "jgfw006",
                      children: null
                    }
                  ]
                },
                {
                  label: "涉军涉警",
                  value: "yqxx008",
                  children: [
                    {
                      label: "警察",
                      value: "sjsj001",
                      children: null
                    },
                    {
                      label: "法官",
                      value: "sjsj002",
                      children: null
                    },
                    {
                      label: "检察官",
                      value: "sjsj003",
                      children: null
                    },
                    {
                      label: "律师",
                      value: "sjsj004",
                      children: null
                    },
                    {
                      label: "公证员",
                      value: "sjsj005",
                      children: null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "便民服务",
          value: "sj002",
          children: [
            {
              label: "民政慈善",
              value: "bmfw001",
              children: [
                {
                  label: "社会救助",
                  value: "mzcs001",
                  children: null
                },
                {
                  label: "老龄工作",
                  value: "mzcs002",
                  children: null
                },
                {
                  label: "优抚工作",
                  value: "mzcs003",
                  children: null
                },
                {
                  label: "居家养老",
                  value: "mzcs004",
                  children: null
                },
                {
                  label: "撤村建居",
                  value: "mzcs005",
                  children: null
                },
                {
                  label: "助残扶残",
                  value: "mzcs006",
                  children: null
                },
                {
                  label: "其他",
                  value: "mzcs007",
                  children: null
                }
              ]
            },
            {
              label: "文体教育",
              value: "bmfw002",
              children: [
                {
                  label: "文体工作",
                  value: "wtjy001",
                  children: null
                },
                {
                  label: "教育工作",
                  value: "wtjy002",
                  children: null
                },
                {
                  label: "其他",
                  value: "wtjy003",
                  children: null
                }
              ]
            },
            {
              label: "计划生育",
              value: "bmfw003",
              children: [
                {
                  label: "非法怀孕、生产",
                  value: "jhsy001",
                  children: null
                },
                {
                  label: "非法性别鉴定",
                  value: "jhsy002",
                  children: null
                },
                {
                  label: "其他",
                  value: "jhsy003",
                  children: null
                }
              ]
            },
            {
              label: "公共卫生",
              value: "bmfw004",
              children: [
                {
                  label: "非法行医",
                  value: "ggws001",
                  children: null
                },
                {
                  label: "散养家禽",
                  value: "ggws002",
                  children: null
                },
                {
                  label: "爱卫护卫",
                  value: "ggws003",
                  children: null
                },
                {
                  label: "其他",
                  value: "ggws004",
                  children: null
                }
              ]
            },
            {
              label: "社保劳保",
              value: "bmfw005",
              children: [
                {
                  label: "失业待遇",
                  value: "sblb001",
                  children: null
                },
                {
                  label: "再就业、转业",
                  value: "sblb002",
                  children: null
                },
                {
                  label: "市民卡",
                  value: "sblb003",
                  children: null
                },
                {
                  label: "劳动监察",
                  value: "sblb004",
                  children: null
                },
                {
                  label: "其他",
                  value: "sblb005",
                  children: null
                }
              ]
            },
            {
              label: "物业管理",
              value: "bmfw006",
              children: [
                {
                  label: "设施维护",
                  value: "wygl001",
                  children: null
                },
                {
                  label: "设施安全",
                  value: "wygl002",
                  children: null
                },
                {
                  label: "垃圾清运",
                  value: "wygl003",
                  children: null
                },
                {
                  label: "卫生环境",
                  value: "wygl004",
                  children: null
                },
                {
                  label: "其他",
                  value: "wygl005",
                  children: null
                }
              ]
            },
            {
              label: "经济服务",
              value: "bmfw007",
              children: [
                {
                  label: "市场培育",
                  value: "jjfw001",
                  children: null
                },
                {
                  label: "奖励、扶持",
                  value: "jjfw002",
                  children: null
                },
                {
                  label: "政策落实",
                  value: "jjfw003",
                  children: null
                },
                {
                  label: "处置办理",
                  value: "jjfw004",
                  children: null
                },
                {
                  label: "其他",
                  value: "jjfw005",
                  children: null
                }
              ]
            },
            {
              label: "证照服务",
              value: "bmfw008",
              children: [
                {
                  label: "证照申领",
                  value: "zzfw001",
                  children: null
                },
                {
                  label: "证照证明",
                  value: "zzfw002",
                  children: null
                },
                {
                  label: "社会救助",
                  value: "zzfw003",
                  children: null
                }
              ]
            },
            {
              label: "其他",
              value: "bmfw009",
              children: [
                {
                  label: "老龄殡葬",
                  value: "qtfw001",
                  children: null
                },
                {
                  label: "其他",
                  value: "qtfw002",
                  children: null
                }
              ]
            },
            {
              label: "社会事务",
              value: "bmfw010",
              children: [
                {
                  label: "弱势帮扶",
                  value: "shfw001",
                  children: null
                },
                {
                  label: "文教体育",
                  value: "shfw002",
                  children: null
                },
                {
                  label: "计划生育",
                  value: "shfw003",
                  children: null
                },
                {
                  label: "农村卫生",
                  value: "shfw004",
                  children: null
                },
                {
                  label: "老龄殡葬",
                  value: "shfw005",
                  children: null
                },
                {
                  label: "劳动监察",
                  value: "shfw006",
                  children: null
                }
              ]
            },
            {
              label: "民生服务",
              value: "bmfw011",
              children: [
                {
                  label: "工作动态、工作信息",
                  value: "msfw001",
                  children: null
                },
                {
                  label: "教育服务",
                  value: "msfw002",
                  children: null
                },
                {
                  label: "社保服务",
                  value: "msfw003",
                  children: null
                },
                {
                  label: "就业服务",
                  value: "msfw004",
                  children: null
                },
                {
                  label: "医疗服务",
                  value: "msfw005",
                  children: null
                },
                {
                  label: "住房服务",
                  value: "msfw006",
                  children: null
                },
                {
                  label: "交通服务",
                  value: "msfw007",
                  children: null
                },
                {
                  label: "证件办理",
                  value: "msfw008",
                  children: null
                },
                {
                  label: "企业服务",
                  value: "msfw009",
                  children: null
                },
                {
                  label: "资质服务",
                  value: "msfw010",
                  children: null
                },
                {
                  label: "经营纳税",
                  value: "msfw011",
                  children: null
                },
                {
                  label: "婚育收养",
                  value: "msfw012",
                  children: null
                },
                {
                  label: "公共事业",
                  value: "msfw013",
                  children: null
                },
                {
                  label: "其他",
                  value: "msfw014",
                  children: null
                }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.f2();
    setTimeout(() => {
      this.loading = false;
      this.tableData = this.tableData1;
    }, 1000);
    // times：循环N次
    _.times(5, function() {
      console.log("time循环5次");
    });
  },
  methods: {
    fl() {
      var jobchoices = ["testing"];
      var res = _.filter(this.jobs, function(job) {
        console.log(job);
        return _.chain(job.industry)
          .map("name")
          .intersection(jobchoices)
          .size()
          .gt(0)
          .value();
      });
    },
    f2() {
      var valll = ["sj001"];
      // var res1 = _.filter(this.respon, function(respon) {
      //    console.log(45125, _.chain(respon))
      //   return _.chain(respon.value)
      //     .map("value")
      //     .intersection(valll)
      //     .size()
      //     .gt(0)
      //     .value();
      // });
      var res2 = _.filter(this.respon, function(respon) {
         console.log(425,_.chain(respon.children))
        return _.chain(respon)
          .map("value")
          .intersection(valll)
          .size()
          .gt(0)
          .value();
      });
      // var res3 = _.filter(this.respon, function(respon) {
      //   console.log(45125,respon.children.children)
      //   return _.chain(respon.children.children)
      //     .map("value")
      //     .intersection(valll)
      //     .size()
      //     .gt(0)
      //     .value();
      // });
      console.log(130, res2);
    },
    handleSearch() {},
    handleReset() {
      this.formInline = {};
      this.handleSearch();
    },
    handleAdd() {},
    handleClick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.statement {
  // height: calc(100% - 50px);
}
</style>


