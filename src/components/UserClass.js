import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // State default value
        this.state = {
            count: 0,
            userInfo: {
                name: 'Dummy T',
                location: 'default location',
                avatar: 'https://www.gmail.com  '
            }
        }
    }

    // NOTE : component did mount func call just after complete compenent mounted
    // we use compDidMount to make api call, bcz in react we make api call after UI rendered
    // we get api response and then rerender

    componentDidMount() {
        console.log('Component did mount in UserClass');
        this.timer = setInterval(() => {
            console.log('Setting 1 sec timeout');
        }, 1000)

        const fetchData = async () => {
            const data = await fetch('https://api.github.com/users/trishal01');
            const json = await data.json();
            console.log(json);
            this.setState({
                userInfo: json
            })
        }
        fetchData();
    }

    // trigger after api provide response 
    // when state is change with click events 
    componentDidUpdate() {
        console.log('User component did update')
    }

    // Triggered when component is removed form DOM, when we are leaving the component
    componentWillUnmount() {
        console.log('User component unmounted');
        clearInterval(this.timer);
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name - {this.props.name}</h2>
                <h2>Location - {this.props.location}</h2>
                <h2>Hobbie - {this.state.count} Cricket</h2>
                <img src={avatar_url}></img>
                <button onClick={() => {
                    // Never update state variable directly
                    this.setState({
                        count: this.state.count++
                    })
                }}> Increase </button>
            </div>
        )
    }
}

/*
-- Mounting
    Constructor (state variable with Dummy data)
    render method (Dummy)
    HTML (DOM Manipulation) (Dummy)
        ComponentDidMount
        < API CALL > inside ComponentDidMount
        <this.setState> state variable is updated


-- Updating
    Render (API data)
    <HTML> (with API data)
        componentDidUpdate
*/

export default UserClass