import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';

const RestroMenu = () => {
    const [restroInfo, setRestroInfo] = useState(null);
    const { resId } = useParams(); // extracting resId value from URL params, bcz i.e route value
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=' +resId+ '&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json = await data.json();
        setRestroInfo(json?.data);
        console.log('JSON', json?.data);
    }

    // we are using it above id and cuisines value bcz we dont wanna extract id and cuisine value if its shimmer, i.e we returning
    if (restroInfo === null) return <Shimmer />

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