import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function HEPCPersonalityType() {
  return (
    <Layout>
      <div className="personality-detail-page">
        <div className="container mx-auto px-4 py-12">
          {/* 头部内容区 */}
          <div className="text-center mb-12">
            <div className="type-code-large mx-auto mb-4" style={{backgroundColor: 'var(--success-light)'}}>
              <span style={{color: 'var(--success)'}} className="font-bold text-3xl">HEPC</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">娱乐家</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              高活跃 + 外向 + 观察 + 低应激
            </p>
            
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <img 
                  src="/images/hello GIF.gif" 
                  alt="活泼友好的猫咪" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* 性格概述 */}
          <div className="bg-success-light rounded-2xl p-6 md:p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-success">娱乐家性格概述</h2>
            <p className="text-lg mb-4">
              "娱乐家"型猫咪精力充沛、友好开朗，乐于成为关注的中心。这类猫咪适应性极强，
              善于在各种环境中找到乐趣，喜欢与人互动，对新事物充满好奇但不会莽撞行动。
              他们观察力强，会先评估情况再做决定，但通常能在社交场合找到自己的位置。
            </p>
            <p className="text-lg">
              娱乐家猫咪在社交互动中展现出较高水平的催产素和多巴胺，这使它们天生就能从关注中获得奖励。
              它们的嬉戏天性源于延长的幼年发育期。与人类伙伴相处时，他们形成强烈的社交纽带，
              比其他类型更频繁地展示亲和行为，如打呼噜、揉面和蹭脸。
            </p>
          </div>
          
          {/* 详细内容部分 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* 生理特征与性格关联 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">生理特征与性格关联</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>体型通常适中且灵活，肌肉协调性好</li>
                <li>面部表情丰富，眼睛明亮有神</li>
                <li>毛发通常光滑，经常自我梳理保持整洁</li>
                <li>尾巴活动频繁，是情绪表达的重要工具</li>
                <li>大脑催产素和多巴胺水平较高，促进社交亲和行为</li>
                <li>应激响应系统平衡，不易过度紧张</li>
                <li>听觉和视觉系统灵敏，善于捕捉社交信号</li>
              </ul>
            </div>
            
            {/* 行为模式解码 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">行为模式解码</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>频繁寻求社交互动，喜欢参与家庭活动</li>
                <li>善于通过声音和肢体语言表达需求</li>
                <li>玩耍风格具有社交性，喜欢互动游戏</li>
                <li>好奇心强但谨慎，会先观察再行动</li>
                <li>喜欢模仿和学习，能快速掌握新技能</li>
                <li>睡眠位置通常靠近家人或其他宠物</li>
                <li>会主动寻求身体接触，如依偎或躺在膝上</li>
                <li>面对新环境先观察评估，然后迅速适应</li>
                <li>在多猫家庭中通常扮演"社交调解者"角色</li>
              </ul>
            </div>
            
            {/* 物品偏好 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">物品偏好</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>玩具类型</strong>：互动性玩具，尤其是能与人一起玩的</li>
                <li><strong>休息区域</strong>：舒适且靠近家庭活动区的窝</li>
                <li><strong>猫爬架</strong>：社交性强的开放式设计，便于观察和互动</li>
                <li><strong>食物偏好</strong>：多样化食物，享受尝鲜体验</li>
                <li><strong>游戏设施</strong>：能容纳多只猫一起玩耍的大型设施</li>
                <li><strong>环境布置</strong>：有丰富刺激但不过度的环境</li>
                <li><strong>陪伴物品</strong>：能提供安全感的毛绒玩具或毯子</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">推荐物品清单：</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>互动型电子玩具</li>
                  <li>社交型猫爬架（多平台，开放式）</li>
                  <li>互动喂食拼图</li>
                  <li>毛绒安抚玩具</li>
                  <li>社交型猫隧道（多入口）</li>
                </ol>
              </div>
            </div>
            
            {/* 心理特质剖面 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">心理特质剖面</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">认知模式</h4>
                  <p>观察型思维，先收集信息再行动。社交智能高，善于理解人类情绪和意图，快速识别社交机会。</p>
                </div>
                <div>
                  <h4 className="font-semibold">情绪特点</h4>
                  <p>情绪波动温和，积极正面情绪为主。表达方式丰富多样，能通过多种方式传达需求和感受。</p>
                </div>
                <div>
                  <h4 className="font-semibold">压力响应</h4>
                  <p>压力耐受度较高，能在轻度压力下保持平衡。在压力情境下倾向寻求社交支持而非独自应对。</p>
                </div>
                <div>
                  <h4 className="font-semibold">学习风格</h4>
                  <p>通过观察和模仿学习，社交强化效果好。喜欢尝试新事物，但会先评估安全性。</p>
                </div>
                <div>
                  <h4 className="font-semibold">适应能力</h4>
                  <p>环境适应性极强，能在各种生活变化中找到平衡。善于根据情境调整自己的行为模式。</p>
                </div>
              </div>
            </div>
            
            {/* 社交关系动态 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社交关系动态</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">与人的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>形成广泛的社交连接，通常与家庭所有成员建立关系</li>
                    <li>对客人友好，好奇但不过分热情</li>
                    <li>敏感于人类情绪，会尝试提供情感支持</li>
                    <li>喜欢参与日常活动，如看电视、做家务时陪伴</li>
                    <li>对与人互动的游戏反应积极，如抛接玩具</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">与猫的关系</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>适应力强，能与多种性格类型的猫相处</li>
                    <li>倾向于建立友好而非竞争性的关系</li>
                    <li>在猫群中扮演"和事佬"角色，缓解紧张气氛</li>
                    <li>社交活动如互相梳理毛发的频率高</li>
                    <li>对新来的猫咪友好，愿意分享资源</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">最佳匹配性格</h4>
                  <p>与大多数性格类型兼容，特别是能提供平衡的LITC（逻辑师）或提供活力的HETC（探险家）类型。</p>
                </div>
              </div>
            </div>
            
            {/* 环境适配方案 */}
            <div className="card">
              <div className="feature-icon mb-4" style={{background: 'linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">环境适配方案</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">家居环境设计</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>创造社交友好的开放空间，便于家庭互动</li>
                    <li>设置靠近家庭活动区的休息区</li>
                    <li>提供观察窗口，满足社交监视需求</li>
                    <li>设计互动游戏区，促进人猫互动</li>
                    <li>平衡活动区和安静区，提供选择空间</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">日常管理策略</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>保证充分的社交互动时间，每天多次短时互动</li>
                    <li>介绍新玩具和游戏，保持环境新鲜感</li>
                    <li>通过聪明的游戏提供心理刺激</li>
                    <li>平衡独处时间与社交时间</li>
                    <li>鼓励与其他宠物的安全互动</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">预防可能问题</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>社交依赖：培养适度独立性，避免分离焦虑</li>
                    <li>注意力分散：提供结构化活动和训练</li>
                    <li>无聊行为问题：确保足够的心理刺激</li>
                    <li>过度社交疲劳：提供安静撤退空间</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 底部CTA */}
          <div className="text-center mt-16">
            <div className="max-w-md mx-auto">
              <img src="/images/In Love Cat GIF.gif" alt="开心的猫咪" className="w-32 h-32 object-cover rounded-full mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">测试你的猫咪是否为娱乐家性格？</h2>
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
          box-shadow: 0 15px 30px rgba(64, 192, 87, 0.1);
        }
        
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, var(--success-light) 0%, var(--success) 100%);
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
          box-shadow: 0 6px 15px rgba(64, 192, 87, 0.2);
        }
      `}</style>
    </Layout>
  );
} 