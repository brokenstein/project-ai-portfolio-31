
import { Mail, Phone, MessageSquare, Send, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xqalqyzv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        alert('Thank you! Your message has been sent successfully.');
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and discover how Hypersonic AI solutions can transform your business operations and boost your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us Today</h3>
                <p className="text-gray-300">1 (656) 999-0048</p>
                <p className="text-sm text-gray-400">Mon-Fri 8:30AM-5:30PM EST</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">gaztambideraul@gmail.com</p>
                <p className="text-sm text-gray-400">We respond within 24 hours</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Clock size={20} className="mr-2" />
                Free Consultation Includes:
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Business needs assessment</li>
                <li>• Custom AI solution recommendations</li>
                <li>• ROI projections and timeline</li>
                <li>• Implementation roadmap</li>
                <li>• Pricing options that fit your budget</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <DollarSign size={20} className="mr-2" />
                Special Offer for Small Businesses
              </h4>
              <p className="text-gray-300">
                Get 25% off your first AI solution implementation. Limited time offer for qualifying small businesses.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Business Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@yourcompany.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Company Name</label>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Your Company Inc."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Tell us about your business challenges</label>
                  <Textarea
                    name="message"
                    placeholder="Describe your current business challenges and how you think AI could help..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Get My Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
