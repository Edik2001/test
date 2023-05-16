import React from 'react';

const User = ({item}) => {
    return (
        <div className={"item-user"}>
            <h3>{item.name} {item.surname}</h3>
        </div>
    );
};

export default User;