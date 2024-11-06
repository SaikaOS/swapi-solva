import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type EntityType = 'people' | 'planets' | 'starships';

interface EntityFields {
  label: string;
  key: string;
}

const entityFields: Record<EntityType, EntityFields[]> = {
  people: [
    { label: 'Name', key: 'name' },
    { label: 'Height', key: 'height' },
    { label: 'Mass', key: 'mass' },
    { label: 'Birth Year', key: 'birth_year' },
  ],
  planets: [
    { label: 'Name', key: 'name' },
    { label: 'Climate', key: 'climate' },
    { label: 'Population', key: 'population' },
    { label: 'Gravity', key: 'gravity' },
  ],
  starships: [
    { label: 'Name', key: 'name' },
    { label: 'Model', key: 'model' },
    { label: 'Manufacturer', key: 'manufacturer' },
    { label: 'Cost in Credits', key: 'cost_in_credits' },
  ],
};

const DetailPage = ({ entityType }: { entityType: EntityType }) => {
  const { id } = useParams();
  const [entityData, setEntityData] = useState<Record<string, any> | null>(null);
  const { register, handleSubmit, setValue } = useForm<Record<string, any>>();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await fetch(`https://swapi.dev/api/${entityType}/${id}`);
        const result = await response.json();
        setEntityData(result);

        Object.keys(result).forEach((key) => {
          setValue(key, result[key]);
        });
      }
    };
    fetchData().catch(console.error);
  }, [entityType, id, setValue]);

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    setEntityData((prevData) => ({ ...prevData, ...data }));
    alert('Changes saved locally!');
  };

  if (!entityData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Details of {entityData.name}</h1>

      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-500 text-white rounded mb-4">
        Go Back
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {entityFields[entityType].map((field) => (
          <div key={field.key} className="mb-2">
            <label className="block font-semibold mb-1">{field.label}:</label>
            <input
              {...register(field.key)}
              defaultValue={entityData[field.key]}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        ))}
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DetailPage;
