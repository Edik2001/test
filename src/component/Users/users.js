import "./users.css"
import React, {useState} from 'react';
import User from "./user";
import Add from "./add";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Karen", surname: "Achoyan"},
        {id: 2, name: "Ashot", surname: "Ananyan"},
        {id: 3, name: "Kamo", surname: "Tangyan"},
    ])
    return (
        <div>
            <Add/>
            <div className={"row"}>
                {users.map((item) => (
                    <User item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Users;