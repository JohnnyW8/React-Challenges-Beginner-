import React from 'react';

const UserDetails = ({user: {name, location, car}}) => (
    <div>
        <h3>
            {name}
        </h3>
        <p>
            {location}
        </p>
        <p>
            {car}
        </p>
    </div>
)

export default UserDetails;