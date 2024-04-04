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

// Higher Order Component 
// we are passing Restro Comp as a param and getting another function as a return
// HOC are pure components bcz it doesn't change RestroCard component, just use it
export const recommendedLabelRestroCard = (RestroCard) => {
    return function (props) {
        return (<div><label className='absolute mx-4 bg-blue-500'>Recommended</label> <RestroCard {...props} /></div>)
    }
}

export default RestroCard