import React from 'react';
import { Network, Server, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          À <span className="text-paddy-500">Propos</span>
        </h2>
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
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-paddy-600 font-semibold">Master STRI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;