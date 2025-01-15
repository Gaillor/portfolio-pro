import React, { useState } from 'react';
import { Book, Music, Trees, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const extraContent = [
  {
    title: 'La campagne',
    description: 'Imagination, élaboration de projets en campagne',
    icon: <Trees className="w-6 h-6" />,
    image: 'images/extra/campagne.jpg',
  
  },
  {
    title: 'Musique',
    description: 'Chanter par plaisir, karaoké, évasion du quotidien dans la bonne humeur',
    icon: <Music className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80',
  },
  {
    title: 'Football',
    description: 'Jeu d\'équipe, le partage et l\'ambiance',
    icon: <Trophy className="w-6 h-6" />,
    images: [
      'images/extra/footsalle.png',
      'images/extra/foot11.jpg',
    ],
  },
  {
    title: 'Lecture',
    description: 'Lecture, acculturation pendant mes temps perdus',
    icon: <Book className="w-6 h-6" />,
    images: [
      'images/extra/livre_k8s.jpg',
      'images/extra/livre_reseau.jpg',
      'images/extra/livre_musso.webp',
    ],
  },
];

const Extra = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const nextImage = (title: string, images: string[]) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [title]: ((prev[title] || 0) + 1) % images.length
    }));
  };

  React.useEffect(() => {
    // Initialiser les intervalles pour chaque élément avec des images multiples
    const intervals: NodeJS.Timeout[] = [];
    
    extraContent.forEach(item => {
      if (item.images) {
        const interval = setInterval(() => {
          nextImage(item.title, item.images!);
        }, 3000); // Change l'image toutes les 3 secondes
        intervals.push(interval);
      }
    });

    // Nettoyer les intervalles lors du démontage
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section id="extra" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes <span className="text-paddy-500">Extras</span>
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
            {extraContent.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="relative h-64">
                    <img
                      src={item.images ? item.images[currentImageIndex[item.title] || 0] : item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Extra;