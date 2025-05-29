export default function About() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            关于我们
          </h2>
          <div className="space-y-6 text-lg">
            <p className="text-gray-300 leading-relaxed">
              北京腾云启航科技有限公司是一家致力于创新和卓越的科技公司，拥有专业的研发团队和丰富的行业经验。
              自成立以来，我们始终坚持以客户需求为导向，提供高质量的产品和服务。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我们的团队由行业精英组成，他们在各自领域都有着深厚的专业积累和创新能力。
              腾云启航相信，只有持续创新才能为客户创造更大的价值。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { number: '10+', label: '年行业经验' },
                { number: '100+', label: '成功案例' },
                { number: '50+', label: '专业团队' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg group-hover:opacity-100 transition-opacity opacity-0"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50 group-hover:border-blue-500/50 transition-colors">
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 