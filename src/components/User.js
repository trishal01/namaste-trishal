import { useState, useEffect } from "react"

const User = ({ name, location }) => {

    useEffect(() => {
        console.log('Use  effect initialize')
        const timer = setInterval(() => {
            console.log('Func component 1 sec interval')
        }, 1000);

        // useeffect can returns a function when unmounting, used for component cleanup
        return () => {
            clearInterval(timer);
        }
    });

    const [count, setCount] = useState(0)

    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h2>Location - {location}</h2>
            <h2>Hobbie - {count} Cricket</h2>
        </div>
    )
}

export default User