import Image from 'next/image'

export default function Advantages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          我们的优势
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                专业的技术团队
              </h3>
              <p className="text-gray-600">
                拥有经验丰富的开发团队，能够快速响应客户需求，提供专业的技术支持。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                创新的解决方案
              </h3>
              <p className="text-gray-600">
                持续关注技术发展趋势，为客户提供创新的解决方案，助力企业数字化转型。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                优质的服务体系
              </h3>
              <p className="text-gray-600">
                建立完善的服务体系，提供全方位的技术支持和售后服务，确保客户满意度。
              </p>
            </div>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/advantages.jpg"
              alt="Our Advantages"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 