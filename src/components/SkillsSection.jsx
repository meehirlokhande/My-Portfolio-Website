import React, { useState } from 'react';
import reactLogo from '../assets/LogoImg/react.svg';
import angularLogo from '../assets/LogoImg/angular.svg';
import bootstrapLogo from '../assets/LogoImg/bootstrap.svg';
import cLogo from '../assets/LogoImg/c.svg';
import cplusLogo from '../assets/LogoImg/cplus.svg';
import cssLogo from '../assets/LogoImg/css.svg';
import htmlLogo from '../assets/LogoImg/html.svg';
import expressLogo from '../assets/LogoImg/express.svg';
import figmaLogo from '../assets/LogoImg/figma.svg';
import javaLogo from '../assets/LogoImg/java.svg';
import javascriptLogo from '../assets/LogoImg/javascript.svg';
import jqueryLogo from '../assets/LogoImg/jquery.svg';
import laravelLogo from '../assets/LogoImg/laravel.svg';
import mongodbLogo from '../assets/LogoImg/mongodb.svg';
import mysqlLogo from '../assets/LogoImg/mysql.svg';
import nodejsLogo from '../assets/LogoImg/nodejs.svg';
import phpLogo from '../assets/LogoImg/php.svg';
import postgresqlLogo from '../assets/LogoImg/postgresql.svg';
import postmanLogo from '../assets/LogoImg/postman.svg';
import pythonLogo from '../assets/LogoImg/python.svg';
import springLogo from '../assets/LogoImg/spring.svg';
import sqliteLogo from '../assets/LogoImg/sqlite.svg';
import tailwindLogo from '../assets/LogoImg/tailwind.svg';
import viteLogo from '../assets/LogoImg/vitejs.svg';

const skillsData = [
    { id: 1, name: 'React', category: 'Frontend', logo: reactLogo },
    { id: 2, name: 'Angular', category: 'Frontend', logo: angularLogo },
    { id: 3, name: 'Bootstrap', category: 'Frontend', logo: bootstrapLogo },
    { id: 4, name: 'HTML', category: 'Frontend', logo: htmlLogo },
    { id: 5, name: 'CSS', category: 'Frontend', logo: cssLogo },
    { id: 6, name: 'JavaScript', category: 'Frontend', logo: javascriptLogo },
    { id: 7, name: 'jQuery', category: 'Frontend', logo: jqueryLogo },
    { id: 8, name: 'Node.js', category: 'Backend', logo: nodejsLogo },
    { id: 9, name: 'Express', category: 'Backend', logo: expressLogo },
    { id: 10, name: 'PHP', category: 'Backend', logo: phpLogo },
    { id: 11, name: 'Laravel', category: 'Backend', logo: laravelLogo },
    { id: 12, name: 'Spring Boot', category: 'Backend', logo: springLogo },
    { id: 13, name: 'MySQL', category: 'Database', logo: mysqlLogo },
    { id: 14, name: 'MongoDB', category: 'Database', logo: mongodbLogo },
    { id: 15, name: 'PostgreSQL', category: 'Database', logo: postgresqlLogo },
    { id: 16, name: 'SQLite', category: 'Database', logo: sqliteLogo },
    { id: 17, name: 'Python', category: 'Programming', logo: pythonLogo },
    { id: 18, name: 'C', category: 'Programming', logo: cLogo },
    { id: 19, name: 'C++', category: 'Programming', logo: cplusLogo },
    { id: 20, name: 'Tailwind', category: 'Frontend', logo: tailwindLogo },
    { id: 21, name: 'Vite', category: 'Tools', logo: viteLogo },
    { id: 22, name: 'Postman', category: 'Tools', logo: postmanLogo },
    { id: 23, name: 'Figma', category: 'Tools', logo: figmaLogo },
    { id: 24, name: 'Java', category: 'Programming', logo: javaLogo },
];

function SkillsSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'Tools'];

    const filteredSkills =
        selectedCategory === 'All'
            ? skillsData
            : skillsData.filter((skill) => skill.category === selectedCategory);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-cream">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-3 font-worksans">
                        My Skills
                    </h1>
                    <p className="text-lg text-gray-600 font-atkinson max-w-2xl mx-auto">
                        Technologies and tools I'm proficient with
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full font-atkinson font-medium text-sm sm:text-base transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {filteredSkills.map((skill) => {
                        // Determine glow color based on category
                        let glowColor;
                        switch (skill.category) {
                            case 'Frontend':
                                glowColor = 'rgba(56, 182, 255, 0.3)'; // Blue
                                break;
                            case 'Backend':
                                glowColor = 'rgba(74, 222, 128, 0.3)'; // Green
                                break;
                            case 'Database':
                                glowColor = 'rgba(245, 158, 11, 0.3)'; // Amber
                                break;
                            case 'DevOps':
                                glowColor = 'rgba(236, 72, 153, 0.3)'; // Pink
                                break;
                            case 'Design':
                                glowColor = 'rgba(168, 85, 247, 0.3)'; // Purple
                                break;
                            case 'Mobile':
                                glowColor = 'rgba(239, 68, 68, 0.3)'; // Red
                                break;
                            default:
                                glowColor = 'rgba(34, 211, 238, 0.3)'; 
                        }

                        return (
                            <div
                                key={skill.id}
                                className="group relative bg-cream rounded-xl p-4 border border-gray-600 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
                                style={{
                                    '--glow-color': glowColor,
                                    borderColor: skill.category ? 'transparent' : 'rgb(229, 231, 235)',
                                    borderWidth: '2px'
                                }}
                            >
                                <div className="flex flex-col items-center">
                                   
                                    <div className="h-16 w-16 mb-3 flex items-center justify-center">
                                        <img
                                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            src={skill.logo}
                                            alt={skill.name}
                                            loading="lazy"
                                        />
                                    </div>

                                   
                                    <span className="text-sm font-medium text-gray-700 text-center">
                                        {skill.name}
                                    </span>
                                </div>

                                
                                <div
                                    className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        boxShadow: `0 0 20px 5px var(--glow-color)`,
                                        borderColor: glowColor.replace('0.3', '0.7')
                                    }}
                                ></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;