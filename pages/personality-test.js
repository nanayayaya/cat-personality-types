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
      <h2 className="text-2xl font-bold mb-6">Before starting the test, please provide some basic information</h2>
      <p className="text-neutral-600 mb-8">
         These information will help us to evaluate your cat's personality type more accurately and provide personalized analysis results.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="catName">
              Cat's Name
            </label>
            <input
              type="text"
              id="catName"
              name="catName"
              value={formData.catName}
              onChange={handleChange}
              className="input w-full"
              placeholder="For example: Milk Tea"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="catAge">
              Cat's Age
            </label>
            <input
              type="text"
              id="catAge"
              name="catAge"
              value={formData.catAge}
              onChange={handleChange}
              className="input w-full"
              placeholder="For example: 2 years and 3 months"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="">Please select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="maleCastrated">Male (Neutered)</option>
              <option value="femaleCastrated">Female (Spayed)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="breed">
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="input w-full"
              placeholder="For example: British Shorthair, Orange Cat, Mixed"
              required
            />
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="livingSpace">
              Living Space Size
            </label>
            <select
              id="livingSpace"
              name="livingSpace"
              value={formData.livingSpace}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="small">Small (30㎡以下)</option>
              <option value="medium">Medium (30-90㎡)</option>
              <option value="large">Large (90㎡以上)</option>
              <option value="outdoor">Indoor-Outdoor Mixed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="multiCatHousehold">
              Is it a multi-cat household?
            </label>
            <select
              id="multiCatHousehold"
              name="multiCatHousehold"
              value={formData.multiCatHousehold}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="no">No</option>
              <option value="yes">Yes (2-3 cats)</option>
              <option value="many">Yes (4 or more)</option>
            </select>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="humanCatRatio">
              Human-Cat Ratio
            </label>
            <select
              id="humanCatRatio"
              name="humanCatRatio"
              value={formData.humanCatRatio}
              onChange={handleChange}
              className="input w-full"
              required
            >
              <option value="1:1">1 human:1 cat</option>
              <option value="2:1">2 humans:1 cat</option>
              <option value="3+:1">3+ humans:1 cat</option>
              <option value="1:2+">1 human:multiple cats</option>
              <option value="2+:2+">multiple humans:multiple cats</option>
            </select>
          </div>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn btn-primary py-3 px-8">
            Start Test
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
        <span className="text-sm font-medium text-neutral-600">Question {currentQuestion}/{totalQuestions}</span>
        <span className="text-sm font-medium text-neutral-600">{Math.round(progress)}% Completed</span>
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

// Test questions
const questions = [
  {
    id: 1,
    question: "When visitors come to your home, your cat typically:",
    options: [
      { text: "Immediately approaches and interacts with guests", scores: { activity: 2, sociability: 2, decision: 1, stress: -1 } },
      { text: "Observes from a distance before approaching", scores: { activity: 0, sociability: 1, decision: -1, stress: 0 } },
      { text: "Hides until visitors leave", scores: { activity: -1, sociability: -2, decision: 0, stress: 2 } },
      { text: "Stays in the room but maintains a safe distance", scores: { activity: 0, sociability: -1, decision: 0, stress: 1 } }
    ],
    tips: {
      0: "27% of cats actively interact with strangers, mostly social breeds like Siamese and Maine Coon",
      1: "This is the most common reaction, about 65% of cats observe before deciding to interact",
      2: "About 20% of cats choose to completely avoid strangers, usually due to insufficient early socialization",
      3: "Cats that maintain distance without hiding usually have strong curiosity but cautious personalities"
    }
  },
  {
    id: 2,
    question: "When faced with a new toy, your cat will:",
    options: [
      { text: "Immediately pounce and explore it", scores: { activity: 2, sociability: 0, decision: 2, stress: -1 } },
      { text: "Cautiously approach, touch lightly before deciding", scores: { activity: 0, sociability: 0, decision: -1, stress: 1 } },
      { text: "Show no interest at all", scores: { activity: -2, sociability: 0, decision: 0, stress: 0 } },
      { text: "Avoid it due to fear", scores: { activity: -1, sociability: -1, decision: -1, stress: 2 } }
    ],
    tips: {
      0: "Highly active cats have low vestibular system sensitivity and active dopamine receptors",
      1: "80% of cats show some degree of initial assessment behavior",
      2: "May be an older cat, or the toy type doesn't match prey simulation characteristics",
      3: "This reaction may indicate your cat lacked sufficient environmental stimulation during kittenhood"
    }
  },
  {
    id: 3,
    question: "When a strange cat enters your cat's territory, your cat usually:",
    options: [
      { text: "Immediately challenges or issues a warning", scores: { activity: 1, sociability: -1, decision: 2, stress: 1 } },
      { text: "Keeps distance, observes, gradually approaches", scores: { activity: 0, sociability: 0, decision: -1, stress: 0 } },
      { text: "Hides and avoids contact", scores: { activity: -1, sociability: -2, decision: -1, stress: 2 } },
      { text: "Attempts friendly interaction and sniffing", scores: { activity: 1, sociability: 2, decision: 0, stress: -1 } }
    ],
    tips: {
      0: "Strong territorial defense, testosterone levels usually 28% above average",
      1: "Most common territorial defense strategy, especially in adult cats",
      2: "May indicate a lower position in social hierarchy or past negative interaction experiences",
      3: "Highly social, oxytocin levels usually above average, common in cats raised in multi-cat environments during kittenhood"
    }
  },
  {
    id: 4,
    question: "When your cat is home alone, it usually:",
    options: [
      { text: "Explores everywhere, plays, stays active", scores: { activity: 2, sociability: 0, decision: 1, stress: -1 } },
      { text: "Sleeps or rests most of the time", scores: { activity: -2, sociability: 0, decision: 0, stress: 0 } },
      { text: "Observes outside from a window or high place", scores: { activity: 0, sociability: 0, decision: 0, stress: 0 } },
      { text: "Gets anxious, makes vocalizations", scores: { activity: 1, sociability: 2, decision: -1, stress: 2 } }
    ],
    tips: {
      0: "Highly active cats can entertain themselves even without social stimulation",
      1: "Felines naturally conserve energy, sleeping 12-16 hours per day on average",
      2: "This behavior demonstrates a cat's natural predator instinct",
      3: "Separation anxiety is less common in cats than dogs, but about 5% of cats show obvious signs"
    }
  },
  {
    id: 5,
    question: "Before feeding time, your cat will:",
    options: [
      { text: "Actively remind you, continuously until fed", scores: { activity: 1, sociability: 1, decision: 2, stress: 0 } },
      { text: "Wait quietly, occasionally signaling", scores: { activity: -1, sociability: 0, decision: -1, stress: -1 } },
      { text: "Show no special attention until food appears", scores: { activity: -2, sociability: -1, decision: -2, stress: -2 } },
      { text: "Get overly excited, may jump or circle your legs", scores: { activity: 2, sociability: 2, decision: 1, stress: 1 } }
    ],
    tips: {
      0: "This behavior indicates your cat may have a strong sense of time and expectation of rewards",
      1: "33% of cats start showing slight anticipatory behavior 10-15 minutes before feeding",
      2: "Self-sufficient feeding behavior, possibly from kitten experiences with abundant food sources",
      3: "Highly food-motivated cats may have higher food sensitivity or past experiences of food scarcity"
    }
  }
];

// Test question component
const QuestionComponent = ({ question, onAnswer, currentTip, setCurrentTip }) => {
  // Add option click state
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setCurrentTip(index); // Update tip
  };
  
  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      onAnswer(question.options[selectedOption].scores); // Pass selected scores
      setSelectedOption(null); // Reset selection state
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
          Next
        </button>
      </div>
    </div>
  );
};

// Main test component
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
    // Update total score
    const updatedScores = { ...scores };
    Object.keys(questionScores).forEach(key => {
      updatedScores[key] += questionScores[key];
    });
    setScores(updatedScores);
    
    // Reset tip state
    setCurrentTip(null);
    
    // Proceed to next question or complete test
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestComplete(true);
      
      // Create a form submission to redirect to results page
      const form = document.createElement('form');
      form.method = 'GET';
      form.action = 'personality-results.html';
      
      // Add score parameters
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
      
      // Add cat information
      if (formData) {
        addParam('name', formData.catName);
        addParam('breed', formData.breed);
      }
      
      // Add form to document and submit
      document.body.appendChild(form);
      form.submit();
    }
  };

  return (
    <Layout title="Cat Personality Test">
      <section className="bg-gradient-to-r from-primary-light to-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cat Personality Test</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover your cat's unique personality type by answering a series of questions about their behavior.
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
                    <p className="text-xl font-bold mb-2">Your answer has been recorded</p>
                    <p className="text-neutral-500">Going to the next question...</p>
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
              <h3 className="text-xl font-bold mb-3">Scientifically Accurate</h3>
              <p className="text-neutral-600">
                Based on the Feline Five personality theory and multiple scientific studies, we provide accurate personality analysis for your cat.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quick and Easy</h3>
              <p className="text-neutral-600">
                Only 5 minutes to answer 20 simple questions and understand your cat's unique personality traits.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Advice</h3>
              <p className="text-neutral-600">
                Test results include personalized care recommendations to help you provide a more suitable environment and interaction based on your cat's personality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 