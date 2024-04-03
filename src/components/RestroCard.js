import { LOGO_URL } from '../utils/constant';

const RestroCard = ({ restroData }) => {
    const { name, avgRating } = restroData?.info;
    return (
        <div className=" w-[250px] p-4 m-4 rounded-lg bg-gray-200 hover:bg-gray-400">
            <img
                alt="item-image"
                className="rounded-lg"
                src={LOGO_URL}
            />
            <h4 className='font-bold py-4 dark:font-normal'>{name}</h4>

            <div className="cart-detail">
                <h5>{restroData?.aggregatedDiscountInfoV3?.header}</h5>
                <h5>{avgRating}</h5>
                <h5>{restroData.availability?.opened ? 'open' : 'closed'}</h5>
            </div>
        </div>
    );
};

export default RestroCard