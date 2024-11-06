import { useEffect, useState } from 'react'
import { StarshipsType } from '../types';
import Table from '../components/TableComponent';
import Pagination from '../components/Pagination';
import NavigationBar from '../components/NavigationBar';

const StarshipsPage = () => {
  const [data, setData] = useState<StarshipsType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async (page: number) => {
      const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
      const data = await response.json();
      setData(data.results);
      setTotalPages(Math.ceil(data.count / 10)); 
    };

    fetchData(currentPage).catch(console.error);
  }, [currentPage]);
  return (
    <div className='p-4'>
      <h1 className="text-2xl mb-4 font-semibold">Star Wars Starships</h1>
      <NavigationBar />
      <Table data={data} columns={['name', 'model', 'manufacturer']} entityType='starships' />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} 
      />
    </div>
  )
}

export default StarshipsPage