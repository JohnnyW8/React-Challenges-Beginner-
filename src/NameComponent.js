import React, { useContext } from "react";
import { UserContext } from './UserContext';

// This component displays name from Context
const RandomComponent = () => {
  const { name } = useContext(UserContext);
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {name}
      </h2>
    </div>
  );
};

export default RandomComponent;
