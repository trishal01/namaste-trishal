import RestroCard from "./RestroCard";
import { restroApiResponse } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" />
                <button type="submit">Search </button>
            </div>

            <div className="restro-container">
                {console.log('11 ', restroApiResponse.data)}
                {restroApiResponse.data.map((restro) => (
                    <RestroCard key={restro.id} restroData={restro} />
                ))}
            </div>
        </div>
    );
};

export default Body;