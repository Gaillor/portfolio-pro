import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import links from '../../utils/links.json'; 

const Hero = () => {
  return (
    <section id="home" 
    className="min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-paddy-50 to-white bg-cover bg-center"
    // className="min-h-screen flex items-center justify-center bg-gradient-to-b from-paddy-50 to-white"
    style={{ background: 'URL("/images/extra/hero_bg.jpg")' }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-300 mb-6">
              <span className="text-paddy-500">Bienvenue</span> sur mon portfolio
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Étudiant en Master STRI, spécialisé en réseaux et les télécommunications
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-paddy-500 text-white rounded-lg hover:bg-paddy-600 transition-colors"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-paddy-500 text-paddy-500 rounded-lg hover:bg-paddy-50 transition-colors"
              >
                Voir mes projets
              </a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              
              <a href={links.github} target="_blank" className="text-gray-600 hover:text-paddy-500 transition-colors">
                <Github size={24} />
              </a>
              <a href={links.linkedin} target="_blank" className="text-gray-600 hover:text-paddy-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={links.mail} className="text-gray-600 hover:text-paddy-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-paddy-500 shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white px-6 py-2 rounded-full shadow-lg">
              <p className="text-paddy-600 font-semibold">JINORO Gaillor Jowardo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;