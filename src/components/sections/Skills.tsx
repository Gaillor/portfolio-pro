import React from 'react';
import { Network, Database, Globe, Server, Shield, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Réseaux',
    icon: <Network />,
    skills: ['TCP/IP', 'VLAN', 'Routage', 'QoS'],
  },
  {
    title: 'Télécoms',
    icon: <Globe />,
    skills: ['VoIP', 'Protocoles', '5G', 'Fibre optique'],
  },
  {
    title: 'Infrastructure',
    icon: <Server />,
    skills: ['VMware', 'Docker', 'Cloud', 'Linux'],
  },
  {
    title: 'Sécurité',
    icon: <Shield />,
    skills: ['Firewall', 'VPN', 'IDS/IPS', 'PKI'],
  },
  {
    title: 'Développement',
    icon: <Terminal />,
    skills: ['Python', 'Shell', 'Java', 'SQL'],
  },
  {
    title: 'Base de données',
    icon: <Database />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-paddy-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes <span className="text-paddy-500">Compétences</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-paddy-100 rounded-lg text-paddy-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-paddy-500 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;