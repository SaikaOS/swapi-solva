import { useEffect, useState } from 'react';
import Table from '../components/TableComponent';
import { PeopleType} from '../types';
import Pagination from '../components/Pagination';
import NavigationBar from '../components/NavigationBar';

const PeoplePage = () => {
  const [data, setData] = useState<PeopleType[]>([]);
  const [currentType, setCurrentType] = useState<'people' | 'planets' | 'starships'>('people');
  const [columns, setColumns] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://swapi.dev/api/people/?page=${currentPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      setTotalPages(Math.ceil(result.count / 10)); 

      if (currentType === 'people') {
        setColumns(['name', 'height', 'mass']);
      } else if (currentType === 'planets') {
        setColumns(['name', 'climate', 'population']);
      } else if (currentType === 'starships') {
        setColumns(['name', 'model', 'manufacturer']);
      }
    };

    fetchData().catch(console.error);
  }, [currentType, currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-semibold">Star Wars Characters</h1>
      <NavigationBar />
      <Table data={data} columns={columns} entityType='people'/>
      <Pagination
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default PeoplePage;