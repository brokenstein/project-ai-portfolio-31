
import { ExternalLink, Github, TrendingUp, MessageSquare, BarChart3, Users, ShoppingCart, Calendar, Target, CreditCard, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const solutions = [
    {
      id: 1,
      title: "Professional Business Website",
      description: "Fast-loading, mobile-responsive websites that showcase your business professionally and convert visitors into customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: TrendingUp,
      tags: ["Responsive Design", "Fast Loading", "Mobile Friendly", "SEO Ready"],
      results: "Online presence in 48 hours",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Simple Contact & Booking Forms",
      description: "Easy-to-use contact forms and booking systems that capture leads instantly and send data directly to your email.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      icon: Calendar,
      tags: ["Contact Forms", "Lead Capture", "Email Integration", "Simple Setup"],
      results: "Instant lead notifications",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Custom Business Branding",
      description: "Professional logo design and brand identity that makes your small business look established and trustworthy.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      icon: MessageSquare,
      tags: ["Logo Design", "Brand Identity", "Color Schemes", "Professional Look"],
      results: "Brand ready in 3 days",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Local Business Listings",
      description: "Get your business found on Google Maps and local directories with accurate, consistent information across all platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      icon: BarChart3,
      tags: ["Google Maps", "Local SEO", "Directory Listings", "Accurate Data"],
      results: "Found by local customers",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Advertising Management",
      description: "Professional ad campaign setup and management across Google Ads, Bing Ads, and Meta Ads to drive qualified traffic and sales.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: Target,
      tags: ["Google Ads", "Meta Ads", "Bing Ads", "Campaign Management"],
      results: "More qualified leads",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "E-commerce Solutions",
      description: "Complete online store setup with shopping carts, product catalogs, and secure payment processing to start selling online.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      icon: ShoppingCart,
      tags: ["Online Store", "Shopping Cart", "Payment Processing", "Product Catalog"],
      results: "Start selling online",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Product Advertisement",
      description: "Strategic product ads and promotional campaigns designed to showcase your products and drive sales conversions.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
      icon: CreditCard,
      tags: ["Product Ads", "Sales Campaigns", "Conversion Optimization", "ROI Tracking"],
      results: "Increased product sales",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Small Business Networks & Smart Hardware",
      description: "Professional network setup and smart hardware implementation with Home Assistant, Zigbee devices, and IoT solutions for efficient business operations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icon: Wifi,
      tags: ["Network Setup", "Zigbee Protocol", "Home Assistant", "IoT Devices", "Smart Hardware"],
      results: "Automated operations",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple Solutions for Small Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable websites and marketing tools that help your business get found and grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.id}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <solution.icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={solution.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <a
                    href={solution.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-500/30">
                    <span className="text-green-300 text-sm font-medium">{solution.results}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to See Similar Results?</h3>
            <p className="text-gray-300 mb-6">
              Every business is unique. Let's discuss how we can create a custom AI solution that fits your specific needs and budget.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Get Your Custom Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
