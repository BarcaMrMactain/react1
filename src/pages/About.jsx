import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Sektion 1: Overskrift & Introduktion */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            Om Projektet
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Denne applikation er skabt som et læringsprojekt i React, hvor målet har været at mestre integrationen af eksterne API'er og skabe et moderne, responsivt design.
          </p>
        </header>

        {/* Sektion 2: Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Teknologier</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                <strong>React 19:</strong> Component-baseret UI udvikling.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                <strong>Tailwind CSS:</strong> Utility-first styling for hurtig UI.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                <strong>React Router:</strong> Dynamisk navigation uden page-load.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                <strong>RapidAPI:</strong> Integration af komplekse data-kilder.
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Funktionalitet</h2>
            <p className="text-gray-300 mb-4">
              Appen fungerer som en portal, der forbinder forskellige universer – fra Star Wars data og Ghibli film til real-time vejrdata og sjove kærlighedsberegninger.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">Fetch API</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Custom Hooks</span>
            </div>
          </div>
        </div>

        {/* Sektion 3: Uddannelse/Skole */}
        <div className="text-center p-10 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/5">
          <h2 className="text-2xl font-bold mb-4 italic">Udviklet hos VidenDjurs</h2>
          <p className="text-gray-400">
            Dette projekt er en del af undervisningen i moderne webudvikling, hvor der er fokus på praktisk erfaring med API-kald og state-management i React.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About