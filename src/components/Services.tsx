import { FaCode, FaMobile, FaCloud, FaChartLine } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="w-12 h-12" />,
    title: '软件开发',
    description: '为企业提供定制化的软件解决方案，包括Web应用、企业管理系统等。',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <FaMobile className="w-12 h-12" />,
    title: '移动应用开发',
    description: '开发高性能、用户友好的iOS和Android移动应用。',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: <FaCloud className="w-12 h-12" />,
    title: '云服务解决方案',
    description: '提供安全可靠的云计算服务，助力企业数字化转型。',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: '数据分析',
    description: '利用先进的数据分析技术，为企业提供决策支持。',
    gradient: 'from-orange-500 to-yellow-500'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            我们的服务
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            提供全方位的技术解决方案，助力企业数字化转型
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
            >
              {/* 渐变边框效果 */}
              <div 
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
              ></div>
              
              <div className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text mb-4`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r ${service.gradient} group-hover:bg-clip-text`}>
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              {/* Hover 时显示的箭头 */}
              <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 