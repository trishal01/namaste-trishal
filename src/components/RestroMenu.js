import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestroMenu from '../utils/useRestroMenu'

const RestroMenu = () => {
    const { resId } = useParams(); // extracting resId value from URL params, bcz i.e route value

    // create a custom hook and use it is better way and folloe single responsibility feature
    const restroInfo = useRestroMenu(resId);

    // we are using it above id and cuisines value bcz we dont wanna extract id and cuisine value if its shimmer, i.e we returning
    if (restroInfo === null) return <Shimmer />

    // extracting props from data retreived
    // const {id, cuisines} = restroInfo?.cards[0]?.card?.card?.info;

    return (
        <div className="res">
            <h1> Restro Name</h1>
            <h2>Menu </h2>
            <ul>
                <li>Biryanu</li>
                <li>Biryanu</li>
                <li>Biryanu</li>

            </ul>

        </div>
    )
}

export default RestroMenu