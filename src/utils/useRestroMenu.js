import { useEffect, useState } from 'react';

const useRestroMenu = (resId) => {
    console.log('resId ', resId)

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        console.log(resId)
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=' + resId + '&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER'); // pass url to fetch card list
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestroMenu;