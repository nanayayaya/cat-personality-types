import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="首页">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-light to-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                了解您猫咪的<br />独特<span className="text-secondary">性格类型</span>
              </h1>
              <p className="text-xl mb-8">
                基于科学的Feline Five猫咪性格测试，帮助您了解猫咪的行为模式、情感需求和最适宜的环境。
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/personality-test" className="btn bg-white text-primary hover:bg-neutral-100 font-bold py-3 px-8 rounded-xl">
                  开始测试
                </Link>
                <Link href="/personality-types" className="btn border-2 border-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-xl">
                  探索性格类型
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img src="/images/hero-cat.png" alt="猫咪性格测试" className="relative z-10 animate-float" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full w-64 h-64 blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">科学认知您的猫咪</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              我们的测试基于最新的动物行为学研究，为您提供深入、准确的猫咪性格分析。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">科学测评</h3>
              <p className="text-neutral-600">
                基于Feline Five猫咪五因素理论，结合多项科学研究，提供准确的性格分析。
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">个性化建议</h3>
              <p className="text-neutral-600">
                根据测试结果提供饮食、玩具、环境和互动方式的个性化建议。
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">社区分享</h3>
              <p className="text-neutral-600">
                与全球猫咪主人分享经验，查看您所在地区的猫咪性格分布热图。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personality Types Preview */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">探索猫咪性格类型</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              我们识别了16种独特的猫咪性格类型，每种类型都有其特定的行为模式和需求。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 每个猫咪类型卡片 */}
            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="bg-primary-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-primary">HETC</span>
              </div>
              <h3 className="text-xl font-bold mb-2">探险家</h3>
              <p className="text-neutral-600 mb-4">
                高活跃+外向+果断+低应激
              </p>
              <Link href="/personality-types/hetc" className="text-primary font-medium hover:underline">了解更多 →</Link>
            </div>

            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="bg-secondary-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-secondary">HETA</span>
              </div>
              <h3 className="text-xl font-bold mb-2">指挥官</h3>
              <p className="text-neutral-600 mb-4">
                高活跃+外向+果断+高应激
              </p>
              <Link href="/personality-types/heta" className="text-primary font-medium hover:underline">了解更多 →</Link>
            </div>

            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="bg-success-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-success">LIPC</span>
              </div>
              <h3 className="text-xl font-bold mb-2">哲学家</h3>
              <p className="text-neutral-600 mb-4">
                低活跃+内向+观察+低应激
              </p>
              <Link href="/personality-types/lipc" className="text-primary font-medium hover:underline">了解更多 →</Link>
            </div>

            <div className="card hover:shadow-apple-md transition-all duration-300">
              <div className="bg-danger-light w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="font-bold text-danger">LIPA</span>
              </div>
              <h3 className="text-xl font-bold mb-2">梦想家</h3>
              <p className="text-neutral-600 mb-4">
                低活跃+内向+观察+高应激
              </p>
              <Link href="/personality-types/lipa" className="text-primary font-medium hover:underline">了解更多 →</Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/personality-types" className="btn btn-primary py-3 px-8">
              查看全部16种类型
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">开始了解您的猫咪</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            只需20个问题，深入了解您猫咪的性格特点，获取个性化的养护建议。
          </p>
          <Link href="/personality-test" className="btn bg-white text-primary hover:bg-neutral-100 font-bold py-3 px-8 rounded-xl">
            立即开始测试
          </Link>
        </div>
      </section>
    </Layout>
  );
} 