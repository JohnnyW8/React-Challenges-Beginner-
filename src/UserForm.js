import React, { useContext } from "react";
import { UserContext } from './UserContext';
const Form = () => {
  const {name, location, setLocation, setName } = useContext(UserContext);
  return (
    <div className="user-form">
      <div className="input-item">
        <label className="label">Update Name: </label>
        <input className="input" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="input-item">
        <label className="label">Update Location: </label>
        <input className="input" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
    </div>
  );
};

export default Form;
