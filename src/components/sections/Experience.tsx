import React from 'react';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const academicExperience = [
  {
    title: 'Master STRI',
    company: 'Université Paul Sabatier',
    period: '2024 - Présent',
    description: 'Spécialisation en Services des Télécoms, Réseaux et Infrastructures',
  },
  {
    title: 'Licence Info, Réseaux et Télécoms',
    company: 'Université Paul Sabatier',
    period: '2023 - 2024',
    description: 'Formation en informatique avec focus sur les réseaux et télécommunications',
  },
  {
    title: 'L1-L2 Maths-Info',
    company: 'Université Clermont Auvergne',
    period: '2021 - 2023',
    description: 'Fondamentaux en mathématiques et informatique',
  },
];

const professionalExperience = [
  {
    title: 'Alternance - Analyste concepteur réseau',
    company: 'Orange SA',
    period: '2024 - present',
    description: 'Configuration et maintenance des équipements réseau, support technique niveau 2',
  },
  {
    title: 'Alternance - DevOps',
    company: 'Saluto',
    period: '2023 - 2024',
    description: 'Mise en place d\'une infrastructure cloud native d\'une application',
  },
];

const ExperienceSection = ({ 
  title, 
  experiences, 
  icon: Icon 
}: { 
  title: string; 
  experiences: typeof academicExperience; 
  icon: React.ElementType;
}) => (
  <div className="mb-12 last:mb-0">
    <div className="flex items-center gap-3 mb-8">
      <Icon className="w-8 h-8 text-paddy-500" />
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative pl-8"
        >
          <div className="absolute left-0 top-2 w-6 h-6 bg-paddy-500 rounded-full"></div>
          <div className="bg-white p-6 rounded-xl shadow-md ml-4">
            <div className="flex items-center gap-4 mb-2">
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <div className="flex items-center gap-1 text-paddy-600">
                <Calendar size={16} />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>
            <p className="text-lg font-medium text-paddy-600 mb-2">{exp.company}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-paddy-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mon <span className="text-paddy-500">Parcours</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <ExperienceSection 
            title="Parcours Académique" 
            experiences={academicExperience} 
            icon={GraduationCap}
          />
          <ExperienceSection 
            title="Expérience Professionnelle" 
            experiences={professionalExperience} 
            icon={Briefcase}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;