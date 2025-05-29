import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            联系我们
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            随时与我们联系，我们将为您提供专业的技术咨询和支持
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {[
              {
                icon: <FaPhone className="w-6 h-6" />,
                title: '电话',
                content: '+86 123 4567 8900',
                gradient: 'from-blue-400 to-cyan-400'
              },
              {
                icon: <FaEnvelope className="w-6 h-6" />,
                title: '邮箱',
                content: 'contact@tengyun.com',
                gradient: 'from-purple-400 to-pink-400'
              },
              {
                icon: <FaMapMarkerAlt className="w-6 h-6" />,
                title: '地址',
                content: '北京市朝阳区望京科技园',
                gradient: 'from-green-400 to-emerald-400'
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                ></div>
                <div className="flex items-start space-x-4 bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 group-hover:border-opacity-0 transition-all duration-300">
                  <div className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                姓名
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="请输入您的姓名"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="请输入您的邮箱"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                留言
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="请输入您的留言"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]"
            >
              提交
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 