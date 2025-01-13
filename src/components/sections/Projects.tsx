import React from 'react';
import { Github, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Monitoring Réseau',
    description: 'Système de surveillance réseau avec tableaux de bord en temps réel',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    tags: ['Python', 'Grafana', 'SNMP', 'Docker'],
    code: '',
    demo: '#'
  },
  {
    id: '2',
    title: 'VoIP Management',
    description: 'Plateforme de gestion pour infrastructure VoIP d\'entreprise',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80',
    tags: ['Asterisk', 'SIP', 'Python', 'MySQL'],
    code: '#',
    demo: '#',
  },
  {
    id: '3',
    title: 'Cloud Infrastructure',
    description: 'Déploiement automatisé d\'infrastructure cloud hybride',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    tags: ['Terraform', 'AWS', 'Docker', 'Kubernetes'],
    code: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes <span className="text-paddy-500">Projets | TPs</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-paddy-100 text-paddy-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.code}
                    className="flex items-center gap-2 text-gray-600 hover:text-paddy-500"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-paddy-500"
                  >
                    <LinkIcon size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;