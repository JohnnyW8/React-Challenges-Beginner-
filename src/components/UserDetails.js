import React from 'react';

const UserDetails = ({user}) => {
     const url = `https://twitter.com/${user.twitterUsername}`;
return (
    <>
        <img src={user.avatar} />
        <h3>
            <a href={url} title={user.name}>{user.name}</a>
        </h3>
        <div>
            <strong>
                Location
            </strong>
            {user.location}
        </div>
        <div>
            <strong>
                Eats
            </strong>
            {user.foodType}
        </div>
        <div>
            <strong>
                Age
            </strong>
            {user.age}
        </div>
        <div>
            <strong>
                Likes
            </strong>
            {user.likes}
        </div>
        <div>
            <strong>
                Twitter
            </strong>
            <a href={url} title={user.name}>@{user.twitterUsername}</a>
        </div>
    </>
    )
}

export default UserDetails;