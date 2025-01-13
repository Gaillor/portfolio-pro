import React from 'react';
import { Book, Code, Cpu } from 'lucide-react';

const extraContent = [
  {
    title: 'Agriculture',
    description: 'Articles et revus, vidéos sur l\'agriculture',
    icon: <Book />,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Musique',
    description: 'Chanter par plaisir, évasion du quotidien dans la bonne humeur',
    icon: <Code />,
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80',
  },
  {
    title: 'Football',
    description: 'Jeu d\'équipe, le partage et l\'ambiance',
    icon: <Cpu />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
  },
];

const Extra = () => {
  return (
    <section id="extra" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes <span className="text-paddy-500">Autres Passions</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraContent.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <div className="p-2 bg-paddy-500 rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extra;