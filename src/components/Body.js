import RestroCard, { recommendedLabelRestroCard } from "./RestroCard";
import { useContext, useEffect, useState, useState } from 'react'
import { restroApiResponse1 } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// creating instance of HOC
const RecommendedLabelRestroCard = recommendedLabelRestroCard(RestroCard);

const Body = () => {

    const [restroApiResponse, setRestroApiResponse] = useState([]);
    const [filteredRestroApiResponse, setFilteredRestroApiResponse] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        console.log('JSON : ', jsonData);
        setRestroApiResponse(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestroApiResponse(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return <h1>Seems like network is disconnected</h1>

    console.log('body rendered')
    return (
        restroApiResponse?.length === 0 ? <Shimmer /> :
            <div className="body">
                <div className="flex">
                    <div className="m-4 p-4">
                        <input type="text" className="border border-solid border-black" value={searchValue} onChange={(e) => { setSearchValue(e.target.value); console.log(searchValue) }} />
                        <button className="px-4 py-2 m-4 bg-green-400" onClick={() => {
                            console.log('restroApiResponse ', restroApiResponse)
                            const filteredRestro = restroApiResponse.filter((f) => {
                                console.log(f.info.name, ' === ', searchValue)
                                f.info.name.toLowerCase().includes(searchValue.toLowerCase())
                            })
                            console.log(filteredRestro)
                            setFilteredRestroApiResponse(filteredRestro)
                        }}>Search </button>
                    </div>

                    <div className="flex items-center">
                        <div className="px-4 py-2 m-4 bg-gray-100">
                            <button onClick={() => {
                                console.log('top ', restroApiResponse)

                                let filteredList = restroApiResponse.filter(f => f.info.avgRating > 4)
                                setFilteredRestroApiResponse(filteredList)
                                console.log('top ', filteredList, ' --- ', restroApiResponse)

                            }}>Top Rated Button </button>
                        </div>

                        <div className="px-4 py-2 m-4 bg-gray-100">
                            <button onClick={() => {
                                let filteredList2 = restroApiResponse.filter(f => f.info.avgRating <= 4)
                                setFilteredRestroApiResponse(filteredList2)
                                console.log(filteredList2, 'low', restroApiResponse)
                            }}>Low Rated Button </button>
                        </div>

                        <div className="px-4 py-2 m-4 bg-gray-100">
                            <label >Username :  </label>
                            <input className="border border-black" value={loggedInUser} onChange={e => setUserName(e.target.value)} />
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap">
                    {console.log('11 ', restroApiResponse)}
                    {/* {filteredRestroApiResponse.map((restro) => (
                        // If avg rating is 4 or more show label as recommended
                        <Link key={restro.info.id} to={'/restraunt/' + restro.info.id}>
                            {(restro.info.avgRating >= 4) ? <RecommendedLabelRestroCard restroData={restro} /> : <RestroCard restroData={restro} />}
                        </Link>
                    ))} */}
                </div>
            </div>
    );
};

export default Body;