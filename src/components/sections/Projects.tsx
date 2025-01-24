import React, { useState } from 'react';
import { Github, Link as LinkIcon, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Project, ProjectType } from '../../types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects: Project[] = [
  {
    id: '1',
    title: 'Réseaux Backbone Orange',
    description: 'Architecture au niveau physique des réseaux backbone ORANGE',
    fullDescription: 'Etude et analyse architecturale et technologique sur l\`amélioration de la résilience et la robustesse du réseau backbone de ORANGE. Budgétisation du projet de déploiement fibre ainsi que la faisabilité du projet. Assurer le capacitaire en termes de fibre optique',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80',
    tags: ['Fibre Optique', 'WDM', 'Cartographie', 'Conception', 'Architecture', 'Excel'],
    code: '#',
    demo: '#',
    type: 'Pro',
    role: 'Apprenti concepteur analyste réseau',
    objectives: [
      'Robustesse du réseau',
      'Résilience du réseau',
      'Sécurisation de parcours',
      'Etendre la connectivité réseau Orange'
    ],
    results: [
      'Réseau supportant plus de charge',
      'Réseau plus résilient face aux pannes,...',
      'Anticipation des besoins bien gérée'
    ]
  },
  {
    id: '2',
    title: 'Monitoring Réseau',
    description: 'Système de surveillance réseau avec tableaux de bord en temps réel',
    fullDescription: 'Mise en place d\'une solution complète de monitoring réseau permettant la surveillance en temps réel des équipements et services critiques.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    tags: ['Python', 'Grafana', 'SNMP', 'Docker'],
    code: '#',
    demo: '#',
    type: 'TP',
    role: 'Lead Developer & Architecte Solution',
    objectives: [
      'Surveiller la disponibilité et les performances du réseau',
      'Créer des tableaux de bord intuitifs',
      'Mettre en place des alertes proactives'
    ],
    results: [
      'Réduction de 60% du temps de détection des incidents',
      'Amélioration de la disponibilité du réseau',
      'Mise en place d\'un système d\'alertes efficace'
    ]
  },

  {
    id: '3',
    title: 'Refonte Site Web MNP',
    description: 'Conception, élaboration d\`un site web vitrine',
    fullDescription: 
    'Conception, élaboration d\`un site web vitrine de l\`entreprise MNP. MNP est une société fictive que j\`ai élaboré. Ce projet est de refaire la totalité de son site web avec une techno différente de l\`ancien.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Web', 'MNP'],
    code: '#',
    demo: '#',
    type: 'Personnel',
    role: 'Chef de projet',
    objectives: [
      'Site vitrine',
      'Design',
      'Identité numérique'
    ],
    results: [
      'Design convivial',
      'Identité claire',
    ]
  },
  {
    id: '4',
    title: 'Jeu du Yathzee',
    description: 'Développement d\'une application complète en Python',
    fullDescription: 'Conception du jeu de Yathzee ou Yam\`s',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    tags: ['Python', 'Socket', 'Tkinter', 'Client/serveur'],
    code: '#',
    demo: '#',
    type: 'TP',
    role: 'Dev & rédacteur',
    objectives: [
      'Introduction au développement réseau',
      'Communication client/serveur de l\`application',
      'Interface graphique'
    ],
    results: [
      'Jeu complet',
      'Parties jouables en multi-joueur avec possibilité de chat',
      'Interface graphique simple et intuitive'
    ]
  }
];

const getTypeColor = (type: ProjectType) => {
  switch (type) {
    case 'TP':
      return 'bg-blue-100 text-blue-800';
    case 'Pro':
      return 'bg-green-100 text-green-800';
    case 'Personnel':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Description</h4>
              <p className="text-gray-600">{project.fullDescription}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Rôle</h4>
              <p className="text-gray-600">{project.role}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Objectifs</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {project.objectives?.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Résultats</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {project.results?.map((result, index) => (
                  <li key={index}>{result}</li>
                  
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-paddy-100 text-paddy-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes <span className="text-paddy-500">Projets | TPs</span>
        </h2>
        <div className="relative px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)}`}>
                        {project.type === 'TP' ? 'TP' : project.type === 'Pro' ? 'Projet Pro' : 'Projet Personnel'}
                      </span>
                    </div>
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-600 hover:text-paddy-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <LinkIcon size={20} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;