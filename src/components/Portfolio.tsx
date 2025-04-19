
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern dashboard with real-time analytics',
      image: 'https://placehold.co/600x400/12121e/FFFFFF/png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      title: 'MediBook Doctor App',
      description: 'Mobile-first social networking platform',
      image: 'https://placehold.co/600x400/12121e/FFFFFF/png',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      title: 'Fitness App',
      description: 'AI-powered content creation tool',
      image: 'https://placehold.co/600x400/12121e/FFFFFF/png',
      tags: ['React', 'OpenAI', 'Node.js'],
      link: '#'
    }
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <h2 className="text-3xl font-bold mb-2 animate-fade-in">Our Portfolio</h2>
      <p className="text-white/70 mb-12 animate-fade-in">
        Explore my recent projects and creative solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="dark-card overflow-hidden group animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 rounded-full bg-purple-400/10 text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
