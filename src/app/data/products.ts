export const productsData = [
  {
    id: "platform-1",
    title: "大航蜂 考证与接单平台",
    subtitle: "低空从业者的「职业发源地」",
    description: "提供全真模拟题库与3D飞行演练；打通线下百城千家优质航校，提供标准化的应用场景实训认知；通过「技能认证」结合「履历信用分」体系，解决持有CAAC证书但是无法胜任应用岗位的痛点，让合规飞手升级为合规且适配实际岗位需求的高级飞行员，与海量航拍、巡检、测绘等真实商业订单精确匹配。",
    longDescription: "大航蜂无人机考题与接单平台旨在打破传统飞手培训与实际应用的壁垒。通过构建标准化的技能评估体系，结合智能匹配算法，让每个通过认证的飞手都能快速获得商业派单。不仅降低了企业用人成本，更为广大无人机爱好者提供了稳定可靠的变现渠道。平台引入了基于区块链的「飞历」（飞行履历）系统，确保所有飞行时长、任务评价真实不可篡改。",
    features: [
      { name: "权威题库与全真模拟考试", desc: "同步 CAAC 等最新考纲，支持错题专项突破与全真上机模拟，助力飞手高效拿证。" },
      { name: "LBS实时飞手任务匹配", desc: "结合距离，智能派发高优商业订单。" },
      { name: "从考证到就业的全方位履历数据库", desc: "上链认证飞行时间与任务评价，打造行业信用基石。" }
    ],
    highlights: [
      { label: "题库全", desc: "覆盖CAAC、AOPA等权威执照题库" },
      { label: "认证快", desc: "区块链飞历认证，防篡改更权威" },
      { label: "接单稳", desc: "LBS实时精准匹配，打造稳定副业收入" }
    ],
    roadmap: {
      title: "产品迭代规划",
      items: [
        { phase: "v1.0", desc: "覆盖全国百城主流航校，确立培训标准" },
        { phase: "v2.0", desc: "上线AI智能考官、3D指尖模拟与自动打分系统" },
        { phase: "v3.0", desc: "开放政企大客户批量用工外包 API 接口，实现灵活用工闭环" }
      ]
    },
    ctaButtons: ["申请演示", "查看开发文档"],
    image: "https://images.unsplash.com/photo-1758598304121-1a877db9ddcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwYXBwfGVufDF8fHx8MTc3MTgwNDc3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    stats: [
      { label: "活跃飞手", value: "120,000+" },
      { label: "日均派单", value: "35,000" },
      { label: "题库容量", value: "50,000+" }
    ]
  },
  {
    id: "platform-drone-os",
    title: "大航蜂 Drone OS",
    subtitle: "企业的无人机「超级管家」",
    description: "专为工业级应用打造的一体化「设备+人员+任务+行业业务流程+数据报告」SaaS 管理平台。帮助政企打破底层信息孤岛，实现从「项目制」向「产品制」转型，实现规模化运营。",
    longDescription: "Drone OS 彻底改变了传统作坊式的航拍与巡检模式，它将原本割裂的飞机管理、人员调度、飞行航线设计与后期数据处理完美融合。采用类似应用商店的插件化架构，企业可按需安装业务模块，大幅降低了低空数字化的部署门槛。它不仅是硬件的「遥控器」，更是企业自动化作业的「智能财务与后勤」。",
    features: [
      { name: "模块化行业应用中心", desc: "像安装App一样扩展林草、电网等专属业务与算法能力。" },
      { name: "全生命周期资产管家", desc: "自动记录电池循环与飞行台账，折旧损耗全掌握，让资产状态透明化。" },
      { name: "自动化任务与SOP闭环", desc: "航线自动下发，一键生成标准合规的多维度数据巡检报告。" }
    ],
    highlights: [
      { label: "全行业", desc: "提供光伏、林草等多种垂直行业模块" },
      { label: "端到端", desc: "飞行任务全生命周期精细化管控" },
      { label: "实时化", desc: "毫秒级延迟的指挥中心大屏三维可视化" }
    ],
    roadmap: {
      title: "未来展望与产品演进",
      items: [
        { phase: "2026 Q3", desc: "深度接入主流国产载荷与大模型 AI 分析引擎" },
        { phase: "2026 Q4", desc: "上线多品牌机巢（无人值守系统）混合调度中枢" },
        { phase: "2027 年", desc: "全面开放 PaaS 底层架构与第三方开发者 API" }
      ]
    },
    ctaButtons: ["申请演示", "预约技术专家"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYWFTJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTg2NDQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    stats: [
      { label: "行业模块", value: "10+" },
      { label: "效率提升", value: "300%" },
      { label: "设备接入", value: "全品牌" }
    ]
  },
  {
    id: "platform-2",
    title: "一网统飞管理系统",
    subtitle: "城市低空的「数字交警」",
    description: "面向政府及空管委员会研发的城市级低空交通管理大脑（UTM）。融合动态三维电子围栏与实时微气象数据，支持百万级无人机并发监测与防撞预警，为城市开放低空路权提供安全、高效的监管基础设施。",
    longDescription: "作为定义未来城市天空秩序的核心中枢，一网统飞系统通过对接多源雷达与飞行器底层信标，实现了复杂城市峡谷环境下的高精度实时航迹追踪。系统不仅为公安、交警、应急等执法部门提供了「看得见、呼得通、管得住」的强力抓手，更通过高效透明的路权审批流，彻底释放了低空经济的巨大商业活力。",
    features: [
      { name: "融合气象的三维空域图", desc: "叠加风速、温度与临时管制区，划定城市「空中红绿灯」。" },
      { name: "智能防撞与越界预警", desc: "实时演算飞行轨迹交叉点，自动下发避让指令并执行违规取证。" },
      { name: "泛终端机巢与人员纳管", desc: "将分散在城市各处的自动停机坪与持有资质的飞手统一纳入安全底座。" }
    ],
    highlights: [
      { label: "强监管", desc: "穿透底层数据，全城低空飞行态势一屏掌握" },
      { label: "秒审批", desc: "告别纸质长流程，实现线上动态空域秒级申请" },
      { label: "高融合", desc: "兼容主流多旋翼、固定翼及大型eVTOL载人飞行器" }
    ],
    roadmap: {
      title: "城市级落地战略规划",
      items: [
        { phase: "初阶", desc: "核心试点城市公安/城管态势感知系统打通接入" },
        { phase: "中阶", desc: "深度对接局方 UOM 系统，实现飞行计划一键双报与联合审批" },
        { phase: "高阶", desc: "支撑超低空、超高密度城市中心区的常态化 P2P 飞行调度演算" }
      ]
    },
    ctaButtons: ["申请政府版试用", "查阅建设方案"],
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkaWdpdGFsJTIwZGF0YXxlbnwxfHx8fDE3NzE4NjQ0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: [
      { label: "并发处理", value: "1,000,000+" },
      { label: "审批响应", value: "秒级" },
      { label: "覆盖城市", value: "50+" }
    ]
  },
  {
    id: "platform-3",
    title: "闪电飞 (分布式配送网络)",
    subtitle: "未来城市的「空中毛细血管」",
    description: "颠覆传统的中心化重资产物流模式，依托全城 P2P 分布式无人机运力池与家庭级「智能阳台停机坪」，构建起极低成本、极致时效的新一代城市空中共享物流网络。",
    longDescription: "闪电飞是低空经济领域的 DePIN（去中心化物理基础设施）革命。通过将末端收发节点下放到千家万户的阳台，不仅抹平了传统无人机物流「最后一百米交付难」的断点，更让每个家庭都能通过贡献闲置空间和电力参与到同城运力网络中。它将原本昂贵的专属航运，变成了人人可用、人人受益的「白菜价」快递。",
    features: [
      { name: "全天候智能阳台微型机场", desc: "占地仅 60x60cm，支持全自动补能、精准盲降引导与 IP65 级防护。" },
      { name: "全局动态运力调度引擎", desc: "结合实时风向、设备电量与全城订单热力图，瞬间进行最优算力与运力匹配。" },
      { name: "去中心化节点激励系统", desc: "智能记录设备接单、充电与中转频次，向节点所有者自动结算现金收益。" }
    ],
    highlights: [
      { label: "极速达", desc: "告别道路拥堵，同城急件履约时间压缩至15分钟" },
      { label: "去中心", desc: "众包模式，用户自主部署阳台停机坪化身网络节点" },
      { label: "赚收益", desc: "创新激励机制，共享私人停机坪赚取网络闲时租金" }
    ],
    roadmap: {
      title: "配送网演进路线",
      items: [
        { phase: "阶段一", desc: "商业版机巢率先入驻重点 CBD 与高端物业社区，开启定点专线配送" },
        { phase: "阶段二", desc: "开放发售消费级「阳台停机坪」，完成百万级 P2P 寻址与端到端闪送实测" },
        { phase: "阶段三", desc: "形成覆盖全城15分钟生活圈的万物到家微型航网" }
      ]
    },
    ctaButtons: ["加入节点计划", "购买智能停机坪"],
    image: "https://images.unsplash.com/photo-1647221597996-54f3d0f73809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHBhY2thZ2UlMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzE4NjQ0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stats: [
      { label: "履约时效", value: "15分钟" },
      { label: "成本降低", value: "80%" },
      { label: "配送模式", value: "P2P" }
    ]
  }
];
