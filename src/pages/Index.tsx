import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Laptop, 
  PaintBucket, 
  Rocket, 
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-hidden">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-mesh" />

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section with enhanced animations */}
        <section className="px-6 md:px-12 lg:px-20 py-32 md:py-40 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting Digital Experiences 
                <br />
                That Inspire & Convert
              </h1>
              <p className="text-white/70 mb-8 max-w-lg">
                We are a creative agency specializing in product design, branding, 
                and digital experience that increase customer engagement.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2">
                Start a Project <ArrowRight size={16} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="project-card transform translate-y-8">
                <img 
                  src="https://placehold.co/600x800/12121e/FFFFFF/png" 
                  alt="Dashboard UI" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
              <div className="project-card">
                <img 
                  src="https://placehold.co/600x600/12121e/FFFFFF/png" 
                  alt="Mobile App UI" 
                  className="rounded-lg w-full h-auto shadow-lg mb-4"
                />
                <img 
                  src="https://placehold.co/600x400/12121e/FFFFFF/png" 
                  alt="Website UI" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with animations */}
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-dark-100/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="max-w-md">
              <div className="mb-6">
                <p className="text-sm text-white/70">Lead Designer</p>
                <h4 className="text-xl font-medium">Sarah Mitchell</h4>
              </div>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                Design is not just about aesthetics, it's about 
                <span className="text-purple-400"> creating meaningful </span> 
                experiences that connect, inspire, and convert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-purple-400 mb-1">2K+</h3>
                <p className="text-sm text-white/70">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-purple-400 mb-1">3K+</h3>
                <p className="text-sm text-white/70">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-purple-400 mb-1">15+</h3>
                <p className="text-sm text-white/70">Industry Awards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with animations */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <h2 className="text-3xl font-bold mb-2">What I Do</h2>
          <p className="text-white/70 mb-10">
            I focus on working with businesses to build digital experiences that captivate and convert
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="dark-card p-8 transition duration-300 card-hover">
              <div className="service-icon">
                <Laptop className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-white/70 text-sm">
                Intuitive, high-quality interfaces that elevate your experience.
              </p>
            </div>

            <div className="dark-card p-8 transition duration-300 card-hover">
              <div className="service-icon">
                <PaintBucket className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Identity</h3>
              <p className="text-white/70 text-sm">
                Timeless brand identity that perfectly reflects your vision.
              </p>
            </div>

            <div className="dark-card p-8 transition duration-300 card-hover">
              <div className="service-icon">
                <Rocket className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-white/70 text-sm">
                Cutting-edge development that brings your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <Portfolio />

        {/* FAQ Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Got questions? We've got answers.</h2>
          </div>
          <div>
            {[
              {
                id: 0,
                question: 'How long does a project typically take?',
                answer: 'Project timelines vary based on 3 factors: Complexity, scale, and client feedback cycles. Most mid-sized projects take 4-8 weeks to complete.'
              },
              {
                id: 1,
                question: 'Can I request a custom design?',
                answer: 'Absolutely! We specialize in custom designs tailored to your specific needs.'
              },
              {
                id: 2,
                question: 'Do you provide website maintenance?',
                answer: 'Yes, we offer ongoing maintenance packages to keep your website secure and up-to-date.'
              },
              {
                id: 3,
                question: 'What industries do you specialize in?',
                answer: 'We work with clients across various industries including tech, healthcare, education, and e-commerce.'
              },
              {
                id: 4,
                question: 'How can I get started?',
                answer: 'Simply reach out to us through our contact form or book a call, and we\'ll schedule an initial consultation.'
              }
            ].map((item, index) => (
              <div key={item.id} className="faq-accordion py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => handleAccordionClick(item.id)}
                >
                  <div className="flex items-center">
                    <span className="text-purple-400 text-sm font-medium mr-3">
                      {String(item.id + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-medium">{item.question}</h3>
                  </div>
                  <button className="text-purple-400">
                    {activeAccordion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {activeAccordion === item.id && (
                  <div className="pt-4 pl-8 text-white/70 text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Button variant="outline" className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-dark-100/50">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="dark-card p-6">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#a78bfa" className="text-purple-400" />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      "The team has an absolute genius sense of design! They successfully pinpointed our brand's exact message and seamlessly executed the right look. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-400/30 flex items-center justify-center mr-3">
                        <span className="font-medium">EA</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Emily A.</h4>
                        <p className="text-white/60 text-xs">Marketing Director</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="dark-card p-6">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#a78bfa" className="text-purple-400" />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      "Customer experience that makes you go 'WOW'. I've never worked with a more professional team that delivers exactly what they promise."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-400/30 flex items-center justify-center mr-3">
                        <span className="font-medium">JR</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">John R.</h4>
                        <p className="text-white/60 text-xs">CEO, TechStartup</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="dark-card p-6">
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#a78bfa" className="text-purple-400" />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      "Their design approach totally transformed our product. We've seen a 40% increase in user engagement since launch."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-400/30 flex items-center justify-center mr-3">
                        <span className="font-medium">ML</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Mark L.</h4>
                        <p className="text-white/60 text-xs">Product Owner</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="bg-dark-100 border-none text-white hover:bg-dark-200" />
                <CarouselNext className="bg-dark-100 border-none text-white hover:bg-dark-200" />
              </div>
            </Carousel>
          </div>

          <div className="flex items-center justify-center mt-10">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold">4.9</div>
              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#a78bfa" className="text-purple-400" />
                  ))}
                </div>
                <p className="text-white/60 text-xs mt-1">Based on 200+ reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Got a Great Idea?</h2>
              <p className="text-white/70 mb-6">
                Share your idea with us, and we'll contact you within 24 hours to discuss how we can bring your vision to life.
              </p>
              
              <div className="mt-8 relative">
                <img 
                  src="https://placehold.co/600x300/12121e/FFFFFF/png" 
                  alt="App mockup" 
                  className="rounded-lg w-full max-w-md"
                />
              </div>
            </div>
            
            <div className="dark-card p-6">
              <form>
                <div className="mb-4">
                  <label className="block text-sm text-white/70 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-200 border border-white/10 rounded-lg p-3 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark-200 border border-white/10 rounded-lg p-3 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-white/70 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-dark-200 border border-white/10 rounded-lg p-3 text-white"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-white/70 mb-1">Service Needed</label>
                  <select className="w-full bg-dark-200 border border-white/10 rounded-lg p-3 text-white">
                    <option>Website Design</option>
                    <option>Mobile App</option>
                    <option>Brand Identity</option>
                    <option>UX Research</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm text-white/70 mb-1">Project Details</label>
                  <textarea 
                    className="w-full bg-dark-200 border border-white/10 rounded-lg p-3 text-white h-24"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 flex items-center justify-center">
                  Submit Your Request <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-20 py-16 bg-dark-100 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            <div className="max-w-xs">
              <div className="text-2xl font-bold flex items-center mb-4">
                <span className="text-white mr-1">Neon</span>
                <span className="text-purple-400">Labs</span>
              </div>
              <p className="text-white/70 text-sm">
                We help businesses create memorable digital experiences that connect with their target audience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Home</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">About</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Services</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Projects</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Web Design</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Mobile App</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Branding</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">UX Research</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Development</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Portfolio</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-white/70 hover:text-purple-400">All Work</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Web Design</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Mobile</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Branding</a></li>
                  <li><a href="#" className="text-white/70 hover:text-purple-400">Campaigns</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li className="text-white/70">hello@neonlabs.com</li>
                  <li className="text-white/70">+1 (555) 000-0000</li>
                  <li className="text-white/70">San Francisco, CA</li>
                  <li className="mt-4">
                    <div className="flex space-x-3">
                      <a href="#" className="text-white/70 hover:text-purple-400">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-white/70 hover:text-purple-400">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-white/70 hover:text-purple-400">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28.073-1.689.073-4.948 0-3.204.013-3.583.07-4.849-.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white/70 hover:text-purple-400">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 grid md:grid-cols-3 gap-4">
            <p className="text-white/50 text-xs">© 2025 Neon Labs. All rights reserved.</p>
            <div className="flex md:justify-center space-x-4">
              <a href="#" className="text-white/50 text-xs hover:text-white">Terms of Service</a>
              <a href="#" className="text-white/50 text-xs hover:text-white">Privacy Policy</a>
            </div>
            <div className="md:text-right text-white/50 text-xs">
              <p>Information submitted through this form is secure.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
