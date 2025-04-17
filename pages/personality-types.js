import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const personalityTypes = [
  // 高活跃系列
  {
    code: 'HETC',
    name: '探险家',
    description: '高活跃+外向+果断+低应激',
    detail: '主动探索新环境，喜欢与人互动，决策迅速',
    color: 'bg-primary-light',
    textColor: 'text-primary',
    category: '活跃探索者'
  },
  {
    code: 'HETA',
    name: '指挥官',
    description: '高活跃+外向+果断+高应激',
    detail: '领地意识强，喜欢控制情况，对变化敏感',
    color: 'bg-primary-light',
    textColor: 'text-primary',
    category: '活跃探索者'
  },
  {
    code: 'HEPC',
    name: '娱乐家',
    description: '高活跃+外向+观察+低应激',
    detail: '好奇心强，随和友好，适应性强',
    color: 'bg-primary-light',
    textColor: 'text-primary',
    category: '活跃探索者'
  },
  {
    code: 'HEPA',
    name: '活力派',
    description: '高活跃+外向+观察+高应激',
    detail: '精力充沛，社交欲强，但易受环境影响',
    color: 'bg-primary-light',
    textColor: 'text-primary',
    category: '活跃探索者'
  },
  // 独立领袖系列
  {
    code: 'HITC',
    name: '战略家',
    description: '高活跃+内向+果断+低应激',
    detail: '独立行动，果断决策，冷静应对挑战',
    color: 'bg-secondary-light',
    textColor: 'text-secondary',
    category: '独立领袖'
  },
  {
    code: 'HITA',
    name: '设计师',
    description: '高活跃+内向+果断+高应激',
    detail: '独立性强，有主见，但对变化反应激烈',
    color: 'bg-secondary-light',
    textColor: 'text-secondary',
    category: '独立领袖'
  },
  {
    code: 'HIPC',
    name: '冒险家',
    description: '高活跃+内向+观察+低应激',
    detail: '喜欢独自探索，适应性强，沉着冷静',
    color: 'bg-secondary-light',
    textColor: 'text-secondary',
    category: '独立领袖'
  },
  {
    code: 'HIPA',
    name: '艺术家',
    description: '高活跃+内向+观察+高应激',
    detail: '敏感多思，活跃但独立，需要个人空间',
    color: 'bg-secondary-light',
    textColor: 'text-secondary',
    category: '独立领袖'
  },
  // 社交平和系列
  {
    code: 'LETC',
    name: '执行者',
    description: '低活跃+外向+果断+低应激',
    detail: '稳重友善，决策坚定，不易受干扰',
    color: 'bg-success-light',
    textColor: 'text-success',
    category: '社交平和者'
  },
  {
    code: 'LETA',
    name: '管理者',
    description: '低活跃+外向+果断+高应激',
    detail: '社交但谨慎，有自己的规则和底线',
    color: 'bg-success-light',
    textColor: 'text-success',
    category: '社交平和者'
  },
  {
    code: 'LEPC',
    name: '和事佬',
    description: '低活跃+外向+观察+低应激',
    detail: '友好平和，随和适应，喜欢安静社交',
    color: 'bg-success-light',
    textColor: 'text-success',
    category: '社交平和者'
  },
  {
    code: 'LEPA',
    name: '外交官',
    description: '低活跃+外向+观察+高应激',
    detail: '善于观察社交信号，敏感但友善',
    color: 'bg-success-light',
    textColor: 'text-success',
    category: '社交平和者'
  },
  // 安静思考系列
  {
    code: 'LITC',
    name: '逻辑师',
    description: '低活跃+内向+果断+低应激',
    detail: '独立思考，沉着冷静，理性决策',
    color: 'bg-danger-light',
    textColor: 'text-danger',
    category: '安静思考者'
  },
  {
    code: 'LITA',
    name: '建筑师',
    description: '低活跃+内向+果断+高应激',
    detail: '喜欢规律和秩序，对变化反应强烈',
    color: 'bg-danger-light',
    textColor: 'text-danger',
    category: '安静思考者'
  },
  {
    code: 'LIPC',
    name: '哲学家',
    description: '低活跃+内向+观察+低应激',
    detail: '安静沉思，独立自主，冷静观察',
    color: 'bg-danger-light',
    textColor: 'text-danger',
    category: '安静思考者'
  },
  {
    code: 'LIPA',
    name: '梦想家',
    description: '低活跃+内向+观察+高应激',
    detail: '敏感内敛，需要安静环境，适应变化慢',
    color: 'bg-danger-light',
    textColor: 'text-danger',
    category: '安静思考者'
  },
];

// 按类别分组性格类型
const groupedTypes = personalityTypes.reduce((acc, type) => {
  if (!acc[type.category]) {
    acc[type.category] = [];
  }
  acc[type.category].push(type);
  return acc;
}, {});

export default function PersonalityTypes() {
  return (
    <Layout title="猫咪性格类型">
      <section className="bg-gradient-to-r from-primary-light to-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">猫咪性格类型</h1>
          <p className="text-xl max-w-3xl mx-auto">
            基于Feline Five猫咪五因素理论，我们定义了16种独特的猫咪性格类型，帮助您更好地理解您的猫咪。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">猫咪性格类型矩阵</h2>
            <p className="text-neutral-600 text-center max-w-3xl mx-auto mb-12">
              我们的测试基于四个关键维度评估您的猫咪性格：活跃性(H/L)、社交性(E/I)、决策风格(T/P)和压力反应(C/A)，
              形成16种独特的猫咪性格类型。
            </p>

            {/* 性格类型分类显示 */}
            {Object.entries(groupedTypes).map(([category, types], index) => (
              <div key={category} className="mb-16">
                <div className={`inline-block px-6 py-3 rounded-full ${types[0].color} ${types[0].textColor} font-bold mb-8`}>
                  {category}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {types.map((type) => (
                    <div key={type.code} className="card hover:shadow-apple-md transition-all duration-300">
                      <div className={`${type.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                        <span className={`font-bold ${type.textColor}`}>{type.code}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                      <p className="text-neutral-600 mb-4">
                        {type.description}
                      </p>
                      <p className="text-neutral-700 mb-4">
                        {type.detail}
                      </p>
                      <Link href={`/personality-types/${type.code.toLowerCase()}`} className={`${type.textColor} font-medium hover:underline`}>
                        了解更多 →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-100 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">了解您的猫咪属于哪种类型？</h3>
            <p className="text-neutral-600 mb-6">
              通过我们的科学测试，只需回答20个问题，就能发现您猫咪的独特性格类型。
            </p>
            <Link href="/personality-test" className="btn btn-primary py-3 px-8">
              开始测试
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">四个关键维度</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              了解构成猫咪性格的四个基本维度，每个维度都基于科学研究和动物行为学理论。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-primary">H/L</span>
                </div>
                <h3 className="text-xl font-bold">活跃性维度 (Activity)</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                评估猫咪的日均活动时长、活动强度和探索行为频率。高活跃型(H)猫咪精力充沛、好动；
                低活跃型(L)猫咪则更加安静、平和。
              </p>
              <p className="text-sm text-neutral-500">
                参考密歇根大学2018年《家猫行为谱系研究》
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-secondary">E/I</span>
                </div>
                <h3 className="text-xl font-bold">社交性维度 (Sociability)</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                评估猫咪与人和其他动物的互动意愿和方式。外向型(E)猫咪乐于与人互动；
                内向型(I)猫咪则偏好独处或有选择性的社交。
              </p>
              <p className="text-sm text-neutral-500">
                采用Lynch社交反应量表（SRQ-F）
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success-light rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-success">T/P</span>
                </div>
                <h3 className="text-xl font-bold">决策风格维度 (Decision)</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                评估猫咪做决定的方式和风险承受能力。果断型(T)猫咪决策快速、坚定；
                观察型(P)猫咪则更倾向于观察后行动，谨慎决策。
              </p>
              <p className="text-sm text-neutral-500">
                结合威斯康星迷宫测试数据
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-danger-light rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-danger">C/A</span>
                </div>
                <h3 className="text-xl font-bold">压力反应维度 (Stress)</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                评估猫咪面对变化和压力的反应和适应能力。低应激型(C)猫咪适应性强，情绪稳定；
                高应激型(A)猫咪对环境变化更敏感。
              </p>
              <p className="text-sm text-neutral-500">
                使用FAST猫应激评估简版量表
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 