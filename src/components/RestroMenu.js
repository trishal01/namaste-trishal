import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestroMenu from '../utils/useRestroMenu'
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestroMenu = () => {
    const { resId } = useParams(); // extracting resId value from URL params, bcz i.e route value

    const [showIndex, setShowIndex] = useState(null);

    // create a custom hook and use it is better way and folloe single responsibility feature
    const restroInfo = useRestroMenu(resId);
    console.log('data', restroInfo)

    // we are using it above id and cuisines value bcz we dont wanna extract id and cuisine value if its shimmer, i.e we returning
    if (restroInfo === null) return <Shimmer />

    // extracting props from data retreived
    const { id, name, cuisines } = restroInfo?.data?.cards[2]?.card?.card?.info;
    console.log(restroInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    // finding categories wrt specific restaurant selected
    const categories =
        restroInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (f) => {
                return (f.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
            })

    console.log('categories ', categories)

    return (
        <div className="text-center">
            <h1 className='font-bold my-2 text-2xl'> {name}</h1>
            <p className="font-bold">Cuisines :  {cuisines.join(' , ')}</p>
            {/* categories accordion */}

            {/* (setShowIndex={() => setShowIndex(index)) used to set clicked item index */}
            {categories.map((category, index) =>
                <RestroCategory key={category?.card?.card?.title} category={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
            )}


        </div>
    )
}

export default RestroMenu