import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="flex space-x-4 mb-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded">
          <Link to="/people">People</Link>
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded">
          <Link to="/planets">Planets</Link>
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded">
          <Link to="/starships">Starships</Link>
        </button>
      </div>
  )
}

export default NavigationBar