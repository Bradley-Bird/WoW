import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchClasses } from '../services/directQuery';

function Classes() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchClasses();
      console.log(data);
      setClasses(data.classes);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {classes.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Classes;
