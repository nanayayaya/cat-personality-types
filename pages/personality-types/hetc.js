import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function HETCPersonalityType() {
  return (
    <Layout>
      <div className="personality-detail-page">
        <div className="container mx-auto px-4 py-12">
          {/* 头部内容区 */}
          <div className="text-center mb-12">
            <div className="type-code-large mx-auto mb-4">
              <span className="text-primary font-bold text-3xl">HETC</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">探险家</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              高活跃 + 外向 + 果断 + 低应激
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/Cat Hello GIF.gif" 
                  alt="好奇探索的猫咪" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* 性格概述 */}
          <div className="bg-primary-lighter rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">探险家性格概述</h2>
            <p className="text-lg mb-4">
              "探险家"型猫咪活力充沛、外向友善，并且决策果断，同时应对压力的能力较强。这类猫咪天生充满好奇心，
              热爱探索新环境，乐于与人互动，并且在面对新情况时能够迅速做出决定。它们通常对变化持积极态度，
              适应能力强，是家庭中充满活力的伙伴。
            </p>
            <p className="text-lg">
              基于猫科动物行为科学研究，"探险家"型猫咪对多巴胺特别敏感，天生就有寻求新鲜事物的神经倾向。
              它们强健的身体发育和自信的性格根植于早期发育模式。与主人在一起时，它们建立安全的依恋关系，
              同时保持独立性。
            </p>
          </div>
          
          {/* 详细内容部分 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* 生理特征与性格关联 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">生理特征与性格关联</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>体格结实，肌肉发达，运动协调性强</li>
                <li>头部形状较宽，眼睛明亮且警觉</li>
                <li>耳朵常保持直立状态，随时准备捕捉环境中的信息</li>
                <li>步态轻盈且自信，尾巴通常高高举起，显示自信</li>
                <li>感官敏锐，尤其是视觉和听觉系统发达</li>
                <li>大脑中多巴胺受体更为活跃，促使探索行为</li>
                <li>前额叶皮层活动增强，有助于快速决策</li>
              </ul>
            </div>
            
            {/* 行为模式解码 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">行为模式解码</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>主动探索新环境，喜欢爬高、钻洞、探索柜子</li>
                <li>对新玩具和新物体表现出强烈兴趣</li>
                <li>喜欢参与家庭活动，经常跟随主人</li>
                <li>发出多种声音与人交流，喵叫频率较高</li>
                <li>遇到陌生环境迅速适应，不易紧张</li>
                <li>在面对威胁时，更倾向于面对而非逃避</li>
                <li>捕猎本能强，享受追逐和"狩猎"游戏</li>
                <li>注意力集中但时间较短，需要不断新鲜刺激</li>
                <li>困难情况下表现出较强的解决问题能力</li>
              </ul>
            </div>
            
            {/* 物品偏好 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">物品偏好</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>玩具类型</strong>：互动性强的玩具，如激光笔、逗猫棒、电动玩具</li>
                <li><strong>猫爬架</strong>：复杂且高大的猫爬架，提供多种攀爬和探索路径</li>
                <li><strong>窝具偏好</strong>：开放式且位置较高的休息区，方便观察周围环境</li>
                <li><strong>食物偏好</strong>：丰富多样的食物，享受尝试新口味</li>
                <li><strong>益智玩具</strong>：食物分配型玩具、智力谜题玩具</li>
                <li><strong>户外装备</strong>：可能适合佩戴猫咪背带进行户外探索</li>
                <li><strong>领地标记物</strong>：喜欢拥有自己气味的玩具和垫子</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">推荐玩具清单：</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>多层次互动轨道球</li>
                  <li>羽毛逗猫棒（耐用型）</li>
                  <li>自动激光玩具</li>
                  <li>食物迷宫球</li>
                  <li>猫草种植套装</li>
                </ol>
              </div>
            </div>
            
            {/* 心理特质剖面 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">心理特质剖面</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">认知模式</h4>
                  <p>快速处理信息，善于记忆空间布局和物体位置。对环境变化非常敏感，能迅速适应新情况。</p>
                </div>
                <div>
                  <h4 className="font-semibold">情绪特点</h4>
                  <p>情绪表达直接且丰富，兴奋情绪持续时间较长。易于表达满足和喜悦，很少出现持续低落情绪。</p>
                </div>
                <div>
                  <h4 className="font-semibold">压力响应</h4>
                  <p>面对压力时表现出弹性和适应力，恢复能力强。较少出现长期焦虑或抑郁症状。</p>
                </div>
                <div>
                  <h4 className="font-semibold">学习能力</h4>
                  <p>学习新技能速度快，特别是涉及运动和互动的技能。训练反应良好，尤其对正面强化敏感。</p>
                </div>
                <div>
                  <h4 className="font-semibold">自我意识</h4>
                  <p>对自身能力有清晰认知，会选择可完成的挑战。在社交等级中通常表现出主导地位。</p>
                </div>
              </div>
            </div>
            
            {/* 社交关系动态 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社交关系动态</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">与人的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>与主人建立安全的依恋关系，同时保持独立性</li>
                    <li>喜欢参与家庭社交活动，不会回避陌生人</li>
                    <li>能够理解简单的语言指令和手势</li>
                    <li>享受与人的互动游戏，如抛接球或追逐</li>
                    <li>会通过多种方式寻求注意力，如喵叫、蹭脸等</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">与猫的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>通常在猫群中表现出领导性格</li>
                    <li>对新猫咪持友好好奇态度，适应性好</li>
                    <li>不太可能因领地问题发起冲突</li>
                    <li>喜欢合作游戏和社交互动</li>
                    <li>能够理解并遵循猫社会的基本规则</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">最佳匹配性格</h4>
                  <p>与同样活跃的HETC（探险家）或较冷静的LIPC（哲学家）类型能形成良好平衡。</p>
                </div>
              </div>
            </div>
            
            {/* 环境适配方案 */}
            <div className="card">
              <div className="feature-icon mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">环境适配方案</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">家居环境设计</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>创造立体空间，提供多个高低不同的休息和观察点</li>
                    <li>设置丰富的探索路径，如猫步道、隧道</li>
                    <li>定期重新布置部分家具或猫玩具，提供新鲜感</li>
                    <li>设置窗边观察站，满足观察外界的需求</li>
                    <li>提供足够大的活动空间进行跑动和跳跃</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">日常管理策略</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>安排每日定时互动游戏，消耗过剩能量</li>
                    <li>使用食物分配玩具，满足狩猎需求</li>
                    <li>轮换使用不同类型的玩具，保持新鲜感</li>
                    <li>建立基本规则培训，提供精神刺激</li>
                    <li>考虑安全的户外体验，如猫咪背带散步或猫笼</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">预防可能问题</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>无聊导致的破坏行为：增加环境丰富度和互动时间</li>
                    <li>过度刺激：提供安静休息区作为缓冲</li>
                    <li>冒险受伤：确保环境安全，移除危险物品</li>
                    <li>攀爬问题：提供合适攀爬物，保护贵重物品</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部CTA */}
          <div className="text-center mt-16">
            <div className="max-w-md mx-auto">
              <img src="/images/Vibing White Cat GIF.gif" alt="快乐的猫咪" className="w-32 h-32 object-cover rounded-full mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">测试你的猫咪是否为探险家性格？</h2>
              <p className="mb-6">完成我们的20个问题测试，深入了解你的猫咪性格特点。</p>
              <Link href="/personality-test">
                <a className="btn btn-primary">进行猫咪性格测试</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .personality-detail-page {
          background-color: var(--neutral-100);
        }
        
        .type-code-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04), 0 2px 10px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 126, 179, 0.1);
        }
        
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-gradient);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .card:hover::after {
          opacity: 1;
        }
        
        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 15px rgba(255, 126, 179, 0.2);
        }
      `}</style>
    </Layout>
  );
} 