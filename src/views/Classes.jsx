import React, { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import ClassFocus from '../components/ClassFocus';
import { fetchClasses } from '../services/directQuery';

function Classes() {
  const { id } = useParams();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchClasses();
      setClasses(data.classes);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {classes.map((c) => (
          <Link to={`/classes/${c.id}`} key={c.id}>
            <li key={c.id}>{c.name}</li>
          </Link>
        ))}
      </ul>
      <Route path="/classes/:id">
        <ClassFocus />
      </Route>
    </>
  );
}

export default Classes;
