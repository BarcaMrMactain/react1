import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  // En lille hjælper til at lave ensartede kort
  const AppCard = ({ to, title, description, icon, colorClass }) => (
    <NavLink to={to} className="group">
      <div className={`h-full p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-${colorClass} hover:bg-white/10 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col items-center text-center`}>
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className={`text-xl font-bold mb-2 group-hover:text-${colorClass}`}>{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      
      {/* Hero Header */}
      <header className="py-20 px-4 text-center bg-linear-to-b from-purple-900/20 to-transparent">
        <h1 className="text-6xl font-black mb-6 tracking-tight">
          Velkommen til <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">React App Portal</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          En samling af værktøjer og data-dashboards bygget med eksterne API'er.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-16">

        {/* RapidAPI Sektion (Dine nyeste apps) */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-pink-500 rounded-full"></span> RapidAPI Værktøjer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AppCard to="/lovecalc" title="Love Meter" description="Beregn kærligheden mellem to personer." icon="❤️" colorClass="pink-500" />
            <AppCard to="/dog" title="Dog API" description="Udforsk hunderacer fra hele verden." icon="🐾" colorClass="orange-400" />
            <AppCard to="/hobbies" title="Hobbies" description="Find inspiration til en ny hobby." icon="🎨" colorClass="purple-400" />
            <AppCard to="/facts" title="Facts" description="Lær noget nyt med tilfældige facts." icon="💡" colorClass="green-400" />
          </div>
        </section>

        {/* Data & API Sektion */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Data & Arkiver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AppCard to="/films" title="Studio Ghibli" description="Oversigt over de magiske Ghibli film." icon="☁️" colorClass="blue-400" />
            <AppCard to="/starships" title="Star Wars" description="Se rumskibe fra en fjern galakse." icon="🚀" colorClass="yellow-400" />
            <AppCard to="/newseverything" title="Nyheder" description="Hold dig opdateret med de seneste nyheder." icon="📰" colorClass="red-400" />
          </div>
        </section>

        {/* Vejr Sektion */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-cyan-400 rounded-full"></span> Vejrudsigt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppCard to="/weather1" title="Weather 1" description="Lokal vejrudsigt og temperatur." icon="☀️" colorClass="cyan-400" />
            <AppCard to="/weather2" title="Weather 2" description="Udvidet vejrdata og prognoser." icon="⛈️" colorClass="indigo-400" />
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home