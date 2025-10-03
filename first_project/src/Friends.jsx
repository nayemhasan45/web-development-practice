import { use } from "react"
import Friend from "./Friend";
import "./App.css"

export default function Friends({ users }) {
    const allUsers = use(users);
    // console.log(allUsers);
    return (
        <div className="card">
            <p>All Friends : {allUsers.length}</p>
            {
                allUsers.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>

    )
}