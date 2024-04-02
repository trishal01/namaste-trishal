import User from "./User"
import UserClass from "./UserClass"

const About = () => {

    return (
        <div className="about-container">
            <h1>This is about page</h1>
            <h6>Welcome to Aboust us</h6>

            <User name ={'Func Comp'} location={'Pathankot'}/>
            <UserClass name={'Class Comp'} location={'Dinanagar'}/>
        </div>
    )
}

export default About