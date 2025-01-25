import React from 'react';
import { Network, Server, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          À <span className="text-paddy-500">Propos</span>
        </h2>
          <div className="carousel w-full">
            <div id="slide1" className='carousel-item relative w-full'> 
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Étudiant en Master STRI (Services des Télécoms, Réseaux et Infrastructures), 
                  je combine une solide formation en mathématiques et informatique avec une 
                  spécialisation en ingénierie réseaux et télécommunications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-paddy-100 rounded-lg">
                      <Network className="text-paddy-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Réseaux & Télécoms</h3>
                      <p className="text-gray-600">Conception et gestion d'infrastructures réseau</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-paddy-100 rounded-lg">
                      <Server className="text-paddy-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Infrastructure</h3>
                      <p className="text-gray-600">Administration systèmes et services cloud</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-paddy-100 rounded-lg">
                      <Lightbulb className="text-paddy-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Innovation</h3>
                      <p className="text-gray-600">Veille technologique et solutions émergentes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
                  alt="Infrastructure réseau"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6  bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-paddy-600 font-semibold">Master STRI</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
              </div>
            </div>
          

          {/* Deuxième slide : Vidéo inspirante */}
          <div id="slide2" className='carousel-item relative w-full'>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className='ml-5 text-lg text-gray-600'>
                  " Without commitment, you'll never start. But more importantly, without consistency,
                  you'll never finish." - Denzel Washington
                </p>
                <p className='ml-5 text-lg text-gray-600'>
                  Cette vidéo illustre parfaitement ma vision des réseaux modernes et 
                  l'importance de l'innovation dans notre domaine.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-center mb-6">
                  Mon modèle d'<span className="text-paddy-500">Inspiration</span>
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/4vAjCs0nkx0"
                    title="Réseaux et Télécommunications"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
              </div>
            </div>
          

          {/* Troisième slide : Objectifs et Vision */}
          <div id="slide3" className='carousel-item relative w-full'>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Objectifs & Vision</h3>
                <div className="space-y-4">
                  <div className="bg-paddy-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-xl mb-2">Court Terme</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Maîtriser les technologies émergentes</li>
                      <li>Développer une expertise en cybersécurité</li>
                      <li>Contribuer à des projets innovants</li>
                    </ul>
                  </div>
                  <div className="bg-paddy-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-xl mb-2">Long Terme</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Devenir architecte solutions</li>
                      <li>Innover dans les infrastructures cloud</li>
                      <li>Participer à l'évolution des réseaux</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                  alt="Vision future"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-paddy-600 font-semibold">Vision 2025</p>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
              </div>
            </div>
          </div>
        
        <div className="about-pagination flex justify-center"></div>
      </div>
    </section>
  );
};

export default About;