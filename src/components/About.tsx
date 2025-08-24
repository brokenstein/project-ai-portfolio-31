
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Smarter, Modern Web Design",
      description: "We create professional, mobile-friendly websites that are fast, easy to navigate, and optimized for Google. Every design is focused on user experience and conversions, turning visitors into paying customers. With custom logos and branding packages, we ensure your business looks consistent and professional across all platforms"
    },
    {
      icon: Clock,
      title: "AI-Powered Growth & Support", 
      description: "We leverage AI to help small businesses work smarter. From AI-assisted content creation and chatbots for 24/7 support to advanced analytics and mockups, we save you time, cut costs, and help you stay ahead of the competition"
    },
    {
      icon: DollarSign,
      title: "Affordability & Scalability",
      description: "Cost-effective solutions compared to large agencies, designed with growth in mind so your systems can scale as you expand, with tiered packages to fit any budget"
    },
    {
      icon: Users,
      title: "Smart Device Integration",
      description: "Help businesses modernize their offices or stores with smart tech (automation, cameras, displays, IoT) while improving efficiency and security with smart locks, cameras, and sensors"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Small Businesses Choose Hypersonic
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges small businesses face. Our AI solutions, home and small business 
            network implementations, and smart equipment setups with Home Assistant and Zigbee devices are designed to be 
            affordable, easy to implement, and deliver measurable results from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <benefit.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Join over 10+ small businesses that have already supercharged their operations with Hypersonic AI solutions.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
