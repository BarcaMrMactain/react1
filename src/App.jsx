import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './layout/Layout'
// JSONPlaceholder
import Posts from './components/jsonplaceholder/Posts'
import Todos from './components/jsonplaceholder/Todos'
// SWAPI
import Species from './components/swapi/Species'
import SpeciesDetails from './components/swapi/SpeciesDetails'
import Starships from './components/swapi/Starships'
// Ghibli
import Films from "./components/ghibli/Films";
import People from "./components/ghibli/People";
import FilmsDetails from './components/ghibli/FilmsDetails'
// News
import NewsEverything from './pages/newsapi/NewsEverything'
import NewsEverythingDetails from './pages/newsapi/NewsEverythingDetails'
// open weather
import Weather1 from './pages/openweather/Weather1'
import Weather2 from './pages/openweather/Weather2'
import Hobbies from './pages/rapidapi/Hobbies'
import Facts from './pages/rapidapi/Facts'
import LoveCalc from './pages/rapidapi/LoveCalc'
import Dog from './pages/rapidapi/Dog'
// const router = createBrowserRouter( [
//   { 
//     path: "/", element: <Home />
//   },

//   { 
//     path: "/about", element: <About />
//   },

//   { 
//     path: "/contact", element: <Contact />
//   },

//   { 
//     path: "*", element: <NotFound />
//   },

// ])

const router = createBrowserRouter([
  {
  element: <Layout />,
  children: [
    { index: true, element: <Home />},
    { path: "/about", element: <About />},
    { path: "/contact", element: <Contact />},
    { path: "/posts", element: <Posts />},
    { path: "/todos", element: <Todos />},
    { path: "/species", element: <Species />},
    { path: "/speciesdetails", element: <SpeciesDetails />},
    { path: "/starships", element: <Starships />},
    { path: "/films", element: <Films /> },
    { path: "/people", element: <People /> },
    { path: "/filmsdetails", element: <FilmsDetails />},
    { path: "/newseverything", element: <NewsEverything />},
    { path: "/newsdetails", element: <NewsEverythingDetails />},
    { path: "/weather1", element: <Weather1 /> },
    { path: "/weather2", element: <Weather2 /> },
    { path: "/hobbies", element: <Hobbies /> },
    { path: "/facts", element: <Facts /> },
    { path: "/lovecalc", element: <LoveCalc /> },
    { path: "/dog", element: <Dog /> },
    { path: "*", element: <NotFound />},
  ]
}
])

function App() {

  return <RouterProvider router={ router } />
}

export default App
