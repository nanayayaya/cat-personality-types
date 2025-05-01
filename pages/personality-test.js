import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

// 前置信息表单
const PreTestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    catName: '',
    catAge: '',
    gender: '',
    breed: '',
    livingSpace: 'medium',
    multiCatHousehold: 'no',
    humanCatRatio: '1:1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">在开始测试前，请提供一些基本信息</h2>
      <p className="text-neutral-600 mb-8">
        这些信息将帮助我们更准确地评估您猫咪的性格类型，并提供个性化的分析结果。
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="catName">
              猫咪名字
            </label>
            <input
              type="text"
              id="catName"
              name="catName"
              value={formData.catName}
              onChange={handleChange}
              className="input w-full"
              placeholder="例如：奶茶"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="catAge">
              猫咪年龄
            </label>
            <input
              type="text"
              id="catAge"
              name="catAge"
              value={formData.catAge}
              onChange={handleChange}
              className="input w-full"
              placeholder="例如：2岁3个月"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="gender">
              性别
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">请选择</option>
              <option value="male">公猫</option>
              <option value="female">母猫</option>
              <option value="maleCastrated">公猫（已绝育）</option>
              <option value="femaleCastrated">母猫（已绝育）</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="breed">
              品种
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="input w-full"
              placeholder="例如：英短、橘猫、混血"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="livingSpace">
              生活空间大小
            </label>
            <select
              id="livingSpace"
              name="livingSpace"
              value={formData.livingSpace}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="small">小（30㎡以下）</option>
              <option value="medium">中（30-90㎡）</option>
              <option value="large">大（90㎡以上）</option>
              <option value="outdoor">室内外混合</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="multiCatHousehold">
              是否多猫家庭
            </label>
            <select
              id="multiCatHousehold"
              name="multiCatHousehold"
              value={formData.multiCatHousehold}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="no">否</option>
              <option value="yes">是（2-3只）</option>
              <option value="many">是（4只以上）</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="humanCatRatio">
              家庭人猫比例
            </label>
            <select
              id="humanCatRatio"
              name="humanCatRatio"
              value={formData.humanCatRatio}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="1:1">1人:1猫</option>
              <option value="2:1">2人:1猫</option>
              <option value="3+:1">3人以上:1猫</option>
              <option value="1:2+">1人:多猫</option>
              <option value="2+:2+">多人:多猫</option>
            </select>
          </div>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn btn-primary py-3 px-8">
            开始测试
          </button>
        </div>
      </form>
    </div>
  );
};

// 测试进度组件
const TestProgress = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-neutral-600">问题 {currentQuestion}/{totalQuestions}</span>
        <span className="text-sm font-medium text-neutral-600">{Math.round(progress)}% 完成</span>
      </div>
      <div className="relative w-full h-4 bg-neutral-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
        {/* 小鱼干收集器 */}
        <div 
          className="absolute top-0 h-full flex items-center transition-all duration-300"
          style={{ left: `${progress}%` }}
        >
          <div className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center -ml-3">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-secondary" fill="currentColor">
              <path d="M19.71,9.29l-7-7a1,1,0,0,0-1.42,0l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,19.71,9.29ZM12,16.59,5.41,10,12,3.41l6.59,6.59Z"/>
              <circle cx="12" cy="10" r="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// 测试问题
const questions = [
  {
    id: 1,
    question: "家中来访客人时，您的猫通常会：",
    options: [
      { text: "立即上前与客人互动", scores: { activity: 2, sociability: 2, decision: 1, stress: -1 } },
      { text: "保持距离观察一段时间后靠近", scores: { activity: 0, sociability: 1, decision: -1, stress: 0 } },
      { text: "躲藏直到客人离开", scores: { activity: -1, sociability: -2, decision: 0, stress: 2 } },
      { text: "在房间内但保持安全距离", scores: { activity: 0, sociability: -1, decision: 0, stress: 1 } }
    ],
    tips: {
      0: "27%的猫咪会主动与陌生人互动，大多数是暹罗和缅因等社交型品种",
      1: "这是最常见的反应，约65%的猫咪会观察后再决定是否互动",
      2: "约20%的猫咪会选择完全躲避陌生人，通常源于早期社会化不足",
      3: "保持距离但不躲藏的猫咪通常有较强的好奇心但谨慎的性格"
    }
  },
  {
    id: 2,
    question: "面对新玩具时，您的猫会：",
    options: [
      { text: "立即扑上去探索并玩耍", scores: { activity: 2, sociability: 0, decision: 2, stress: -1 } },
      { text: "谨慎接近，轻轻触碰后再决定", scores: { activity: 0, sociability: 0, decision: -1, stress: 1 } },
      { text: "完全不感兴趣", scores: { activity: -2, sociability: 0, decision: 0, stress: 0 } },
      { text: "因害怕而躲避", scores: { activity: -1, sociability: -1, decision: -1, stress: 2 } }
    ],
    tips: {
      0: "高活跃性的猫咪，前庭系统敏感度较低，多巴胺受体活跃",
      1: "80%的猫咪都会表现出某种程度的初步评估行为",
      2: "可能是年龄较大的猫，或者玩具类型不符合猎物模拟特征",
      3: "这种反应可能表明您的猫咪在幼年阶段缺乏足够的环境刺激"
    }
  },
  {
    id: 3,
    question: "有陌生猫进入您家猫的领地时，您的猫通常会：",
    options: [
      { text: "立即上前挑战或发出警告", scores: { activity: 1, sociability: -1, decision: 2, stress: 1 } },
      { text: "保持距离观察，逐渐接近", scores: { activity: 0, sociability: 0, decision: -1, stress: 0 } },
      { text: "躲起来，避免接触", scores: { activity: -1, sociability: -2, decision: -1, stress: 2 } },
      { text: "尝试友好互动和嗅探", scores: { activity: 1, sociability: 2, decision: 0, stress: -1 } }
    ],
    tips: {
      0: "领地防御性强，睾酮水平通常高于平均值28%",
      1: "最常见的领地防御策略，尤其在成年猫中",
      2: "可能表明在社会等级中位置较低或过去有负面互动经历",
      3: "社交性极高，催产素水平通常高于平均值，多见于幼年时期多猫环境中成长的猫"
    }
  },
  {
    id: 4,
    question: "您的猫独自在家时通常会：",
    options: [
      { text: "到处探索，玩耍，不停活动", scores: { activity: 2, sociability: 0, decision: 1, stress: -1 } },
      { text: "大部分时间睡觉或休息", scores: { activity: -2, sociability: 0, decision: 0, stress: 0 } },
      { text: "在窗台或高处观察外面", scores: { activity: 0, sociability: 0, decision: 0, stress: 0 } },
      { text: "焦虑不安，发出叫声", scores: { activity: 1, sociability: 2, decision: -1, stress: 2 } }
    ],
    tips: {
      0: "高活跃型猫咪，即使没有社交刺激也能自我娱乐",
      1: "猫科动物天生会保存能量，平均每天睡12-16小时",
      2: "这种行为展示了猫咪的天然捕猎者本能",
      3: "分离焦虑在猫中比狗少见，但约5%的猫会有明显表现"
    }
  },
  {
    id: 5,
    question: "在喂食时间之前，您的猫会：",
    options: [
      { text: "积极提醒您，持续不断直到喂食", scores: { activity: 1, sociability: 1, decision: 2, stress: 0 } },
      { text: "安静等待，偶尔示意", scores: { activity: -1, sociability: 0, decision: -1, stress: -1 } },
      { text: "不表现出特别关注，直到食物出现", scores: { activity: -2, sociability: -1, decision: -2, stress: -2 } },
      { text: "过度兴奋，可能会跳跃或绕腿", scores: { activity: 2, sociability: 2, decision: 1, stress: 1 } }
    ],
    tips: {
      0: "这种行为表明您的猫可能有较强的时间感和预期奖励机制",
      1: "33%的猫咪会在喂食前10-15分钟开始表现出轻微的期待行为",
      2: "自给型进食行为，可能是幼年时期有充足食物来源的经历",
      3: "高度食物激励型猫咪，可能对食物有较高敏感性或曾经历过食物匮乏"
    }
  }
];

// 测试问题组件
const QuestionComponent = ({ question, onAnswer, currentTip, setCurrentTip }) => {
  // 添加选项点击的状态
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setCurrentTip(index); // 更新提示
  };
  
  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      onAnswer(question.options[selectedOption].scores); // 传递选中的分数
      setSelectedOption(null); // 重置选择状态
    }
  };
  
  return (
    <div className="card max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{question.question}</h2>
        </div>
        {/* 可选的问题图标或装饰 */}
        <div className="ml-4 w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      
      {currentTip !== null && question.tips && question.tips[currentTip] && (
        <div className="bg-primary-lighter p-4 rounded-lg mb-6">
          <div className="flex">
            <div className="mr-3">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-neutral-800">{question.tips[currentTip]}</p>
          </div>
        </div>
      )}
      
      <div className="flex justify-center">
        <button 
          className={`btn btn-primary py-3 px-8 ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          下一题
        </button>
      </div>
    </div>
  );
};

// 主测试组件
export default function PersonalityTest() {
  const [testStarted, setTestStarted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ activity: 0, sociability: 0, decision: 0, stress: 0 });
  const [currentTip, setCurrentTip] = useState(null);
  const [testComplete, setTestComplete] = useState(false);
  
  const handlePreTestSubmit = (data) => {
    setFormData(data);
    setTestStarted(true);
  };
  
  const handleAnswer = (questionScores) => {
    // 更新总分
    const updatedScores = { ...scores };
    Object.keys(questionScores).forEach(key => {
      updatedScores[key] += questionScores[key];
    });
    setScores(updatedScores);
    
    // 重置提示状态
    setCurrentTip(null);
    
    // 前进到下一个问题或完成测试
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestComplete(true);
      
      // 创建一个提交表单来跳转到结果页面
      const form = document.createElement('form');
      form.method = 'GET';
      form.action = 'personality-results.html';
      
      // 添加分数参数
      const addParam = (name, value) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };
      
      addParam('a', updatedScores.activity);
      addParam('s', updatedScores.sociability);
      addParam('d', updatedScores.decision);
      addParam('t', updatedScores.stress);
      
      // 添加猫咪信息
      if (formData) {
        addParam('name', formData.catName);
        addParam('breed', formData.breed);
      }
      
      // 添加表单到文档并提交
      document.body.appendChild(form);
      form.submit();
    }
  };

  return (
    <Layout title="猫咪性格测试">
      <section className="bg-gradient-to-r from-primary-light to-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">猫咪性格测试</h1>
          <p className="text-xl max-w-3xl mx-auto">
            通过回答一系列关于您猫咪行为的问题，发现它属于哪种独特的性格类型。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {!testStarted ? (
            // 前置信息收集阶段
            <PreTestForm onSubmit={handlePreTestSubmit} />
          ) : (
            // 测试问答阶段
            <div>
              <TestProgress 
                currentQuestion={currentQuestionIndex + 1} 
                totalQuestions={questions.length} 
              />
              
              <QuestionComponent 
                question={questions[currentQuestionIndex]} 
                onAnswer={handleAnswer}
                currentTip={currentTip}
                setCurrentTip={setCurrentTip}
              />

              {testComplete && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-apple-lg p-6 z-50 animate-scaleIn">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-success mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-xl font-bold mb-2">已记录您的回答</p>
                    <p className="text-neutral-500">即将进入下一题...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">科学准确</h3>
              <p className="text-neutral-600">
                测试基于Feline Five猫咪五因素理论，结合多项科学研究，为您的猫咪提供准确的性格分析。
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">快速简便</h3>
              <p className="text-neutral-600">
                只需5分钟，回答20个简单问题，即可了解您猫咪的独特性格特点。
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">实用建议</h3>
              <p className="text-neutral-600">
                测试结果包含个性化的养护建议，帮助您根据猫咪性格特点提供更适合的环境和互动方式。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 