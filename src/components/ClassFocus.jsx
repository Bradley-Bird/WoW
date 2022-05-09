import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchClassById, fetchClassMediaById } from '../services/classes';

function ClassFocus() {
  const { id } = useParams();
  const [cclass, setCclass] = useState({});
  const [spec, setSpec] = useState([]);
  const [classMedia, setClassMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchClass = async () => {
      const data = await fetchClassById(id);
      const media = await fetchClassMediaById(id);
      setClassMedia(media);
      setCclass(data);
      setSpec(data.specializations);
      setLoading(false);
    };
    fetchClass();
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{cclass.name}</h1>
          <img src={classMedia.assets[0].value} />
          <h4>Specializations</h4>
          <ul>
            {spec.map((spec) => (
              <li key={spec.id}>{spec.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ClassFocus;
