import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GraduationCap, Brain, Code, Heart, Users, Sparkles } from 'lucide-react'

export default function Team() {
  const founders = [
    {
      name: '张明',
      role: '创始人 & CEO',
      background: '前腾讯教育产品负责人，10年+ 教育科技经验',
      expertise: '教育产品设计、用户增长',
      avatar: '👨‍💼',
    },
    {
      name: '李华',
      role: '联合创始人 & CTO',
      background: '前字节跳动 AI 算法专家，专注 NLP 与推荐系统',
      expertise: 'AI 算法、机器学习',
      avatar: '👨‍💻',
    },
    {
      name: '王芳',
      role: '联合创始人 & CPO',
      background: '前好未来产品总监，儿童教育产品设计专家',
      expertise: '产品设计、用户体验',
      avatar: '👩‍💼',
    },
  ]

  const advisors = [
    {
      name: '陈教授',
      role: '教育顾问',
      background: '北京师范大学教育学部教授',
      expertise: '儿童发展心理学、家庭教育',
      avatar: '👨‍🏫',
      icon: GraduationCap,
    },
    {
      name: '刘博士',
      role: '心理学顾问',
      background: '中科院心理研究所研究员',
      expertise: '儿童认知发展、情绪智力',
      avatar: '👩‍🔬',
      icon: Brain,
    },
    {
      name: '赵工程师',
      role: '技术顾问',
      background: '清华大学计算机系教授',
      expertise: '人工智能、自然语言处理',
      avatar: '👨‍🔧',
      icon: Code,
    },
  ]

  const values = [
    {
      icon: Heart,
      title: '温度',
      description: '我们相信教育是有温度的，AI 应该成为温暖的陪伴者，而不是冷冰冰的工具。',
    },
    {
      icon: Sparkles,
      title: '专业',
      description: '基于权威教育理论，结合前沿 AI 技术，确保每一个建议都科学、专业。',
    },
    {
      icon: Users,
      title: '陪伴',
      description: '我们不是替代家长，而是成为家长和孩子的长期伙伴，共同见证成长。',
    },
  ]

  return (
    <>
      <Head>
        <title>团队 - 智育助手</title>
        <meta name="description" content="了解智育助手的团队，我们相信每个孩子都能被更好地看见。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                我们相信每个孩子都能被更好地看见
              </h1>
              <p className="text-xl text-gray-600">
                一支热爱教育、专注技术的团队，致力于用 AI 让家庭教育更科学、更温暖
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-container bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        {/* <section className="section-container bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              创始团队
            </h2>
            <p className="text-lg text-gray-600">
              来自顶级互联网公司和教育机构的专业团队
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">
                  {founder.avatar}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-primary font-medium mb-3">{founder.role}</p>
                <p className="text-gray-600 text-sm mb-3">{founder.background}</p>
                <p className="text-gray-500 text-sm">{founder.expertise}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Advisors Section */}
        {/* <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              顾问团队
            </h2>
            <p className="text-lg text-gray-600">
              来自教育学、心理学、AI 领域的权威专家
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                    {advisor.avatar}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <advisor.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold text-gray-900">{advisor.name}</h3>
                    </div>
                    <p className="text-primary font-medium text-sm mb-2">{advisor.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{advisor.background}</p>
                    <p className="text-gray-500 text-xs">{advisor.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Team Culture Section */}
        <section className="section-container bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">团队文化</h2>
                <p className="text-lg text-gray-600">
                  我们是一群热爱教育、相信技术力量的理想主义者
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">使命驱动</h3>
                  <p className="text-gray-600 text-sm">
                    我们相信每个孩子都有无限可能，我们的使命是帮助家长更好地看见和培养这些可能。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">持续学习</h3>
                  <p className="text-gray-600 text-sm">
                    教育在变化，技术在进步，我们始终保持学习的心态，不断优化产品和服务。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">用户第一</h3>
                  <p className="text-gray-600 text-sm">
                    家长和孩子的需求是我们工作的出发点，每一个功能都经过深思熟虑和用户验证。
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">开放合作</h3>
                  <p className="text-gray-600 text-sm">
                    我们欢迎与教育机构、研究机构、投资机构等各方合作，共同推动教育科技的发展。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}

