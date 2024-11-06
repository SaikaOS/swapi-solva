import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Welcome to SWAPI Explorer</h1>
      <p className="text-lg mb-12">Explore the Star Wars universe with data on people, planets, and starships.</p>

      <div className="flex space-x-6">
        <button
          onClick={() => navigate('/people')}
          className="px-6 py-3 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          People
        </button>
        <button
          onClick={() => navigate('/planets')}
          className="px-6 py-3 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition"
        >
          Planets
        </button>
        <button
          onClick={() => navigate('/starships')}
          className="px-6 py-3 bg-purple-500 text-white rounded shadow-md hover:bg-purple-600 transition"
        >
          Starships
        </button>
      </div>
    </div>
  );
};

export default HomePage;
