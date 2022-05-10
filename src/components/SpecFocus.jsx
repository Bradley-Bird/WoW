import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchSpecById } from '../services/specs';

function SpecFocus() {
  const { sid } = useParams();
  const [spec, setSpec] = useState({});
  const [role, setRole] = useState({});
  const [description, setDescription] = useState({});
  useEffect(() => {
    const fetchSpec = async () => {
      const data = await fetchSpecById(sid);
      console.log('specdata', data);
      setSpec(data);
      setDescription(data.gender_description);
      setRole(data.role);
    };
    fetchSpec();
  }, [sid]);

  return (
    <div>
      <h3>{spec.name}</h3>
      <h4>Role: {role.name}</h4>
      <p>{description.male}</p>
    </div>
  );
}

export default SpecFocus;
