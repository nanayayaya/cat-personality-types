import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function HETAPersonalityType() {
  return (
    <Layout>
      <div className="personality-detail-page">
        <div className="container mx-auto px-4 py-12">
          {/* 头部内容区 */}
          <div className="text-center mb-12">
            <div className="type-code-large mx-auto mb-4" style={{backgroundColor: 'var(--secondary-light)'}}>
              <span style={{color: 'var(--secondary)'}} className="font-bold text-3xl">HETA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">指挥官</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              高活跃 + 外向 + 果断 + 高应激
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/Mad The Internet GIF by MOODMAN.gif" 
                  alt="指挥官类型的猫咪" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* 性格概述 */}
          <div className="bg-secondary-light rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">指挥官性格概述</h2>
            <p className="text-lg mb-4">
              "指挥官"型猫咪活力充沛、外向果断，对环境变化反应敏感，具有强烈的领地意识和控制欲。
              这类猫咪喜欢掌控局面，警觉性高，会密切监视周围环境的变化，并对任何潜在威胁迅速做出反应。
              它们通常在家中确立明确的规则和界限，喜欢有序的环境。
            </p>
            <p className="text-lg">
              指挥官猫咪展现出增强的杏仁核活动，使它们对环境变化保持高度警觉，有时对变化反应激烈。
              它们的领地行为源于资源控制的进化优势。与主人形成选择性但强烈的情感联系，
              通常会选择一个主要照顾者作为自己的人类。
            </p>
          </div>
          
          {/* 详细内容部分 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* 生理特征与性格关联 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">生理特征与性格关联</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>身体结构强健，肌肉发达，姿态挺拔</li>
                <li>耳朵高度敏感，常常保持警觉状态</li>
                <li>眼睛大而有神，瞳孔对光线变化反应迅速</li>
                <li>尾巴动作丰富，常用于表达情绪和意图</li>
                <li>杏仁核（情绪中枢）活动增强，对威胁更敏感</li>
                <li>肾上腺素和皮质醇分泌系统更为活跃</li>
                <li>前额叶皮层发达，有助于决策和规划</li>
              </ul>
            </div>
            
            {/* 行为模式解码 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">行为模式解码</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>定期巡视和标记自己的领地范围</li>
                <li>对新进入家庭的人或宠物持谨慎态度</li>
                <li>环境变化时表现出明显的不安或紧张</li>
                <li>喜欢高处，常选择能俯瞰全局的位置</li>
                <li>在发现潜在威胁时主动防御而非逃避</li>
                <li>对日常规律的改变敏感且可能抗拒</li>
                <li>与主人互动时展现出主导性和要求性</li>
                <li>对自己的物品和空间有强烈的占有欲</li>
                <li>在熟悉的环境中表现出明显的自信和支配地位</li>
              </ul>
            </div>
            
            {/* 物品偏好 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">物品偏好</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>玩具类型</strong>：策略型和可控制的玩具，如可追逐的玩具</li>
                <li><strong>猫爬架</strong>：高大稳固的猫爬架，提供俯瞰视角和领地感</li>
                <li><strong>窝具偏好</strong>：封闭式且私密的休息区，有利于安全感</li>
                <li><strong>食物偏好</strong>：规律的喂食，对食物质量和一致性有要求</li>
                <li><strong>领地标记物</strong>：多个猫抓板和摩擦物，用于气味标记</li>
                <li><strong>舒缓物品</strong>：有助于减压的猫草或安抚喷雾</li>
                <li><strong>视野良好的窗台</strong>：能监视外部环境的窗边位置</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">推荐物品清单：</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>带隐藏空间的高大猫爬架</li>
                  <li>多个猫抓板，分布在不同区域</li>
                  <li>定时自动喂食器</li>
                  <li>猫用费洛蒙安抚剂</li>
                  <li>窗台观察平台</li>
                </ol>
              </div>
            </div>
            
            {/* 心理特质剖面 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">心理特质剖面</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">认知模式</h4>
                  <p>思维敏捷，对环境变化高度警觉，注重规律和秩序。擅长记忆日常规律和识别异常情况。</p>
                </div>
                <div>
                  <h4 className="font-semibold">情绪特点</h4>
                  <p>情绪表达直接且强烈，情绪波动可能较大。在安全感受到威胁时可能表现出防御性攻击行为。</p>
                </div>
                <div>
                  <h4 className="font-semibold">压力响应</h4>
                  <p>对压力敏感，可能表现为警觉性增高和反应过度。需要稳定环境和可预测的日常习惯。</p>
                </div>
                <div>
                  <h4 className="font-semibold">决策风格</h4>
                  <p>决策果断且坚定，一旦确定目标不易改变。领地意识强，对资源分配和空间安排有明确偏好。</p>
                </div>
                <div>
                  <h4 className="font-semibold">自我意识</h4>
                  <p>高度自我意识，明确自己在家庭中的地位和角色。追求控制感和环境的可预测性。</p>
                </div>
              </div>
            </div>
            
            {/* 社交关系动态 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社交关系动态</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">与人的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>对主人有选择性亲近，通常选择一个主要照顾者</li>
                    <li>对陌生人保持警惕，需要时间建立信任</li>
                    <li>追求规律的互动和喂食时间</li>
                    <li>在安全感受到威胁时可能表现出防御行为</li>
                    <li>喜欢由自己发起互动，不喜欢被强迫接触</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">与猫的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>在多猫家庭中常尝试建立主导地位</li>
                    <li>对领地和资源有明确的占有意识</li>
                    <li>接受新猫咪时需要缓慢适应过程</li>
                    <li>可能与性格互补的猫建立稳定关系</li>
                    <li>喜欢明确的社交层级关系</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">最佳匹配性格</h4>
                  <p>与冷静平和的LIPC（哲学家）或顺从友好的LEPC（和事佬）猫咪相处较好，能形成互补关系。</p>
                </div>
              </div>
            </div>
            
            {/* 环境适配方案 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">环境适配方案</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">家居环境设计</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>提供多个观察点和高处休息区，增强安全感</li>
                    <li>创建明确的领地边界和私密空间</li>
                    <li>保持环境一致性，避免频繁变动家具位置</li>
                    <li>设置多个资源点（食物、水、猫砂盆）减少资源竞争</li>
                    <li>提供安静的撤退区域，用于压力缓解</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">日常管理策略</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>保持一致的日常作息和喂食时间</li>
                    <li>通过有规律的游戏释放能量和狩猎本能</li>
                    <li>使用正面强化训练建立信任和增强安全感</li>
                    <li>环境变化前预先进行渐进式适应</li>
                    <li>使用费洛蒙产品帮助舒缓压力</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">预防可能问题</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>领地攻击行为：提供足够私人空间和资源</li>
                    <li>环境压力反应：维持稳定环境，避免突然变化</li>
                    <li>分离焦虑：逐步训练适应独处时间</li>
                    <li>过度警觉：创造安全避风港空间</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部CTA */}
          <div className="text-center mt-16">
            <div className="max-w-md mx-auto">
              <img src="/images/No Way Cat GIF.gif" alt="警觉的猫咪" className="w-32 h-32 object-cover rounded-full mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">测试你的猫咪是否为指挥官性格？</h2>
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
          box-shadow: 0 15px 30px rgba(255, 149, 0, 0.1);
        }
        
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .card:hover::after {
          opacity: 1;
        }
        
        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 15px rgba(255, 149, 0, 0.2);
        }
      `}</style>
    </Layout>
  );
} 