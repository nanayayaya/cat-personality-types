/**
 * 猫咪性格类型数据模型
 * 基于Feline Five四维度评估模型
 */

// 四个维度定义
export const dimensions = {
  activity: {
    name: "活跃性维度",
    description: "评估猫咪的运动量和活跃程度",
    poles: {
      high: { code: "E", description: "高活跃 (Energetic)" },
      low: { code: "C", description: "低活跃 (Calm)" }
    },
    reference: "密歇根大学2018年《家猫行为谱系研究》中运动量分级标准"
  },
  social: {
    name: "社交性维度",
    description: "评估猫咪与人和其他动物的互动方式",
    poles: {
      high: { code: "S", description: "高社交 (Social)" },
      low: { code: "R", description: "低社交 (Reserved)" }
    },
    reference: "Lynch社交反应量表（SRQ-F），区分主动型/观察型互动模式"
  },
  decision: {
    name: "决策风格维度",
    description: "评估猫咪做决定的方式和速度",
    poles: {
      impulsive: { code: "I", description: "冲动型 (Impulsive)" },
      cautious: { code: "T", description: "审慎型 (Thoughtful)" }
    },
    reference: "威斯康星迷宫测试数据，设置"冲动型-审慎型"连续体"
  },
  stress: {
    name: "压力反应维度",
    description: "评估猫咪对压力和变化的反应方式",
    poles: {
      high: { code: "A", description: "高应激 (Anxious)" },
      low: { code: "P", description: "低应激 (Peaceful)" }
    },
    reference: "FAST猫应激评估简版量表改编题目"
  }
};

// 16种猫咪性格类型
export const personalityTypes = [
  {
    id: "ESIP",
    name: "探险家",
    description: "充满活力和好奇心，喜欢探索新环境，社交能力强，决策迅速，适应力强",
    traits: ["冒险", "社交", "好动", "直觉"],
    compatibility: ["CRTP", "ESTP"],
    image: "/images/explorer.jpg"
  },
  {
    id: "ESTP",
    name: "社交明星",
    description: "精力充沛，人缘极佳，喜欢成为注意力中心，行动力强但容易紧张",
    traits: ["外向", "活跃", "冲动", "敏感"],
    compatibility: ["CRTA", "ESIP"],
    image: "/images/socialstar.jpg"
  },
  {
    id: "ESIA",
    name: "领地守卫者",
    description: "高度警觉，保护欲强，活跃但有领地意识，决策迅速，应对压力能力强",
    traits: ["保护", "警觉", "勇敢", "主动"],
    compatibility: ["CRIA", "ESTP"],
    image: "/images/guardian.jpg"
  },
  {
    id: "ESTA",
    name: "派对动物",
    description: "精力无限，社交达人，但行动前会仔细思考，情绪波动较大",
    traits: ["外向", "群居", "谨慎", "情绪化"],
    compatibility: ["CRTP", "CRIP"],
    image: "/images/partycat.jpg"
  },
  {
    id: "ERIP",
    name: "独立冒险家",
    description: "充满活力但保持独立，不太依赖社交，决策快速，压力管理良好",
    traits: ["独立", "活跃", "果断", "冷静"],
    compatibility: ["CSTA", "ERTP"],
    image: "/images/loneexplorer.jpg"
  },
  {
    id: "ERTP",
    name: "思考者",
    description: "活跃但独处时间多，深思熟虑，观察力强，很少表现出焦虑",
    traits: ["观察", "独立", "理性", "稳定"],
    compatibility: ["CSIA", "CRIP"],
    image: "/images/thinker.jpg"
  },
  {
    id: "ERIA",
    name: "警惕独行者",
    description: "活力充沛但独来独往，决策迅速，对压力反应强烈，需要安全感",
    traits: ["警惕", "独立", "直觉", "敏感"],
    compatibility: ["CSTP", "CRTA"],
    image: "/images/vigilant.jpg"
  },
  {
    id: "ERTA",
    name: "谨慎探索者",
    description: "精力充沛但喜欢独处，深思熟虑，对变化有较大反应",
    traits: ["警觉", "独处", "谨慎", "敏感"],
    compatibility: ["CSIP", "CRIA"],
    image: "/images/cautious.jpg"
  },
  {
    id: "CSIP",
    name: "温和社交家",
    description: "平静温和，喜欢社交但不过分活跃，反应快速，适应性强",
    traits: ["温和", "友善", "灵活", "放松"],
    compatibility: ["ERTA", "CSTP"],
    image: "/images/gentlesocial.jpg"
  },
  {
    id: "CSTP",
    name: "睿智顾问",
    description: "平静从容，社交能力强，思考后行动，很少表现出焦虑",
    traits: ["冷静", "友好", "理性", "稳定"],
    compatibility: ["ERIA", "CRTA"],
    image: "/images/wisecounselor.jpg"
  },
  {
    id: "CSIA",
    name: "敏感社交者",
    description: "沉稳但友好，喜欢社交互动，行动迅速但对环境变化敏感",
    traits: ["友善", "敏感", "谨慎", "依赖"],
    compatibility: ["ERTP", "CRIP"],
    image: "/images/sensitivesocial.jpg"
  },
  {
    id: "CSTA",
    name: "哲学家",
    description: "性格温和，喜欢社交，思考深入，情绪较为敏感",
    traits: ["温和", "亲切", "思考", "敏感"],
    compatibility: ["ERIP", "ERIA"],
    image: "/images/philosopher.jpg"
  },
  {
    id: "CRIP",
    name: "独立思考者",
    description: "安静冷静，喜欢独处，行动迅速果断，情绪稳定",
    traits: ["独立", "安静", "果断", "放松"],
    compatibility: ["ESTA", "CSIA"],
    image: "/images/independentthinker.jpg"
  },
  {
    id: "CRTP",
    name: "禅师",
    description: "极度平静，独立自主，深思熟虑，内心平和",
    traits: ["平静", "独立", "深思", "安宁"],
    compatibility: ["ESIP", "ESTA"],
    image: "/images/zenmaster.jpg"
  },
  {
    id: "CRIA",
    name: "谨慎独行者",
    description: "安静沉稳，独立性强，行动迅速但谨慎，对压力较为敏感",
    traits: ["安静", "独立", "警觉", "敏感"],
    compatibility: ["ESIP", "ERTP"],
    image: "/images/cautiousloner.jpg"
  },
  {
    id: "CRTA",
    name: "哲人猫",
    description: "安静低调，独处为主，深思熟虑，对环境变化敏感",
    traits: ["沉思", "内向", "理性", "敏感"],
    compatibility: ["ESTP", "CSTP"],
    image: "/images/philosopher.jpg"
  }
]; 