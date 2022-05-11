import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import ClassFocus from '../components/ClassFocus';
import SpecFocus from '../components/SpecFocus';
import { fetchClasses } from '../services/directQuery';

function Classes() {
  const { path } = useRouteMatch();
  // console.log('url', url, 'path', path);
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchClasses();
      setClasses(data.classes);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul name="classList">
          {classes.map((c) => (
            <Link to={`/classes/${c.id}`} key={c.id}>
              <li key={c.id}>{c.name}</li>
            </Link>
          ))}
        </ul>
      )}
      <section>
        <Route path="/classes/:id">
          <ClassFocus path={path} />
        </Route>
      </section>
      <section>
        <Route path="/classes/:id/spec/:sid">
          <SpecFocus />
        </Route>
      </section>
    </>
  );
}

export default Classes;
