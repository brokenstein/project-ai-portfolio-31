import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Restaurant Website",
      description: "Clean, mobile-responsive design with online ordering integration",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      category: "Restaurant",
      liveUrl: "#",
      technologies: ["React", "Tailwind CSS", "Responsive Design"]
    },
    {
      id: 2,
      title: "Law Firm Portfolio",
      description: "Professional website with client testimonials and case studies",
      image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80",
      category: "Professional Services",
      liveUrl: "#",
      technologies: ["WordPress", "Custom Theme", "SEO Optimized"]
    },
    {
      id: 3,
      title: "E-commerce Fashion Store",
      description: "Stylish online store with shopping cart and payment integration",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      category: "E-commerce",
      liveUrl: "#",
      technologies: ["Shopify", "Custom Design", "Mobile First"]
    },
    {
      id: 4,
      title: "Local Gym Website",
      description: "Dynamic website with class schedules and membership signup",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      category: "Fitness",
      liveUrl: "#",
      technologies: ["HTML5", "CSS3", "JavaScript", "Booking System"]
    },
    {
      id: 5,
      title: "Real Estate Agency",
      description: "Property listings with advanced search and virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      category: "Real Estate",
      liveUrl: "#",
      technologies: ["React", "API Integration", "Map Features"]
    },
    {
      id: 6,
      title: "Medical Practice Website",
      description: "HIPAA-compliant design with appointment booking system",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      category: "Healthcare",
      liveUrl: "#",
      technologies: ["Secure Design", "HIPAA Compliant", "Appointment System"]
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web Design Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent web design projects. Each website is custom-built 
            to meet our clients' unique needs and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white text-sm rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={item.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    title="View Live Site"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                    <Eye size={16} className="text-white" />
                  </button>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Like What You See?</h3>
            <p className="text-gray-300 mb-6">
              Every website we create is unique and tailored to your business. Let's discuss your vision 
              and create something amazing together.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;