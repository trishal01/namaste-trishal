import { useEffect, useState } from 'react';

const useRestroMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch();
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestroMenu;