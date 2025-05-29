import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-blue-900 text-white overflow-hidden">
      {/* 背景动画效果 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 z-20"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      {/* 科技感网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>
      
      <div className="relative z-30 container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
            <h2 className="relative bg-black/50 backdrop-blur-sm px-6 py-2 rounded-lg text-blue-400 font-medium tracking-wider">
              引领科技创新
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            北京腾云启航科技
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            以创新驱动发展，用科技改变未来。我们致力于为企业提供领先的技术解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-white transition duration-300 ease-in-out bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600">
              <span className="relative">了解我们的服务</span>
              <span className="absolute -right-2 group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-white transition duration-300 ease-in-out border border-white/20 rounded-lg hover:bg-white/10 backdrop-blur-sm">
              联系我们
            </button>
          </div>
        </div>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  )
} 