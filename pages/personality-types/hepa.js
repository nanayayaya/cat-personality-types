import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function HEPAPersonalityType() {
  return (
    <Layout>
      <div className="personality-detail-page">
        <div className="container mx-auto px-4 py-12">
          {/* 头部内容区 */}
          <div className="text-center mb-12">
            <div className="type-code-large mx-auto mb-4" style={{backgroundColor: 'var(--danger-light)'}}>
              <span style={{color: 'var(--danger)'}} className="font-bold text-3xl">HEPA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">活力派</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              高活跃 + 外向 + 观察 + 高应激
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/Oh No Facepalm GIF.gif" 
                  alt="情绪丰富的猫咪" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* 性格概述 */}
          <div className="bg-danger-light rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-danger">活力派性格概述</h2>
            <p className="text-lg mb-4">
              "活力派"型猫咪充满活力、外向社交，但同时对环境变化敏感且反应强烈。这类猫咪充满好奇心和探索欲，
              喜欢与人互动，但在新环境或压力情况下可能表现出明显的不安和警觉。
              它们需要平衡社交需求和安全感需求，是情感丰富且表达直接的性格类型。
            </p>
            <p className="text-lg">
              活力派猫咪拥有独特的神经特征，同时结合高多巴胺敏感性和升高的皮质醇反应。它们看似矛盾的本性
              可通过需要同时探索与谨慎的进化适应来解释。与主人相处时，它们常表现出矛盾的依恋模式——既寻求互动
              又保持警惕。这些猫咪在可预测环境中有受控新奇体验时表现最佳。
            </p>
          </div>
          
          {/* 详细内容部分 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* 生理特征与性格关联 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">生理特征与性格关联</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>身体灵活敏捷，能量水平高但可能在应激时表现紧张</li>
                <li>眼睛大而富有表现力，瞳孔扩张反应明显</li>
                <li>尾巴动作频繁且幅度大，情绪表达丰富</li>
                <li>耳朵常保持半警觉状态，能快速响应环境变化</li>
                <li>多巴胺系统活跃，促进探索和社交行为</li>
                <li>杏仁核（情绪中枢）敏感度高，应激反应强烈</li>
                <li>自主神经系统反应迅速，警觉性高</li>
              </ul>
            </div>
            
            {/* 行为模式解码 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">行为模式解码</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>活动与休息周期明显，精力波动大</li>
                <li>社交需求强烈但可能出现社交倦怠</li>
                <li>对新事物表现出矛盾态度：好奇又谨慎</li>
                <li>情绪表达直接且强烈，情绪转换快</li>
                <li>在熟悉环境中自信活跃，陌生环境中退缩</li>
                <li>对声音和突然动作反应敏感</li>
                <li>喜欢观察后模仿，学习能力强</li>
                <li>建立稳定规律后表现更平衡</li>
                <li>在压力下可能出现过度舔舐等自我安抚行为</li>
              </ul>
            </div>
            
            {/* 物品偏好 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">物品偏好</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>玩具类型</strong>：可预测互动的玩具，不会产生突然动作或声音</li>
                <li><strong>休息区域</strong>：半封闭式窝，既能观察环境又有安全感</li>
                <li><strong>猫爬架</strong>：有多个平台和隐藏空间的复合式设计</li>
                <li><strong>舒缓物品</strong>：猫草、按摩玩具、费洛蒙产品</li>
                <li><strong>环境布置</strong>：既有开放社交区域又有私密撤退区域</li>
                <li><strong>音乐/声音</strong>：轻柔背景音乐有助于缓解压力</li>
                <li><strong>陪伴物</strong>：有主人气味的毛巾或衣物</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">推荐物品清单：</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>多层次带隐藏空间的猫爬架</li>
                  <li>猫用费洛蒙缓解剂</li>
                  <li>可预测轨迹的逗猫玩具</li>
                  <li>压力舒缓型猫窝</li>
                  <li>互动型但平静的益智玩具</li>
                </ol>
              </div>
            </div>
            
            {/* 心理特质剖面 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">心理特质剖面</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">认知模式</h4>
                  <p>思维活跃敏捷，但可能因压力而分散注意力。观察细致并喜欢思考，在做决定前会收集充分信息。</p>
                </div>
                <div>
                  <h4 className="font-semibold">情绪特点</h4>
                  <p>情绪丰富且表达直接，情绪波动较大。积极情绪高涨，消极情绪也可能强烈但通常持续时间不长。</p>
                </div>
                <div>
                  <h4 className="font-semibold">压力响应</h4>
                  <p>压力阈值较低，易受环境变化影响。在压力下可能表现出过度警觉、退缩或反常的高度活跃。</p>
                </div>
                <div>
                  <h4 className="font-semibold">社交需求</h4>
                  <p>社交欲望强烈但需要平衡与独处时间。社交方式直接且热情，但可能因不安全感而表现矛盾。</p>
                </div>
                <div>
                  <h4 className="font-semibold">适应策略</h4>
                  <p>通过建立规律和可预测性来应对环境变化。在熟悉情境中展现适应力，但需要时间适应大变化。</p>
                </div>
              </div>
            </div>
            
            {/* 社交关系动态 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社交关系动态</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">与人的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>与熟悉人类建立强烈情感联系，但可能表现矛盾的依恋行为</li>
                    <li>对陌生人初始反应谨慎，熟悉后可能变得友好</li>
                    <li>需要稳定且可预测的互动方式</li>
                    <li>敏感于人类情绪，尤其是紧张或压力情绪</li>
                    <li>依赖人类提供安全感，但同时需要社交空间</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">与猫的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>社交需求强但社交技巧可能不稳定</li>
                    <li>在熟悉猫咪中寻求安全感和友谊</li>
                    <li>可能在多猫环境中寻找"保护者"角色的猫</li>
                    <li>与性格稳定的猫相处更好</li>
                    <li>领地意识适中，但在压力下可能表现领地防卫</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">最佳匹配性格</h4>
                  <p>与冷静稳定的LITC（逻辑师）或LIPC（哲学家）类型猫咪搭配较好，它们可以提供情绪锚定和安全感。</p>
                </div>
              </div>
            </div>
            
            {/* 环境适配方案 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">环境适配方案</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">家居环境设计</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>创建多层次空间，平衡社交区与安全撤退区</li>
                    <li>提供高处观察点和隐蔽休息区</li>
                    <li>保持环境稳定性，减少频繁改变</li>
                    <li>使用柔和灯光和舒缓色彩</li>
                    <li>降低环境噪音，创建声音缓冲区</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">日常管理策略</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>建立一致的日常规律和喂食时间</li>
                    <li>安排多次短时间的互动游戏，避免过度刺激</li>
                    <li>采用渐进式方法引入新物品或变化</li>
                    <li>使用正向强化训练建立安全感</li>
                    <li>提供适度复杂性的玩具满足探索需求</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">预防可能问题</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>焦虑行为：使用费洛蒙产品和安抚技巧</li>
                    <li>过度敏感：逐步脱敏训练适应环境刺激</li>
                    <li>社交压力：提供足够的独处恢复时间</li>
                    <li>情绪不稳：保持环境和作息稳定性</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部CTA */}
          <div className="text-center mt-16">
            <div className="max-w-md mx-auto">
              <img src="/images/Cat Working GIF.gif" alt="活力满满的猫咪" className="w-32 h-32 object-cover rounded-full mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">测试你的猫咪是否为活力派性格？</h2>
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
          box-shadow: 0 15px 30px rgba(255, 107, 107, 0.1);
        }
        
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--danger-light) 0%, var(--danger) 100%);
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
          box-shadow: 0 6px 15px rgba(255, 107, 107, 0.2);
        }
      `}</style>
    </Layout>
  );
} 