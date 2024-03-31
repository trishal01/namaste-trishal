import { LOGO_URL } from '../utils/constant';
import { styleCard } from '../assets/styles'

const RestroCard = ({ restroData }) => {
    const { name, avgRating } = restroData?.info;
    return (
        <div className="restro-card" style={styleCard}>
            <img
                alt="item-image"
                className="item-image"
                src={LOGO_URL}
            />
            <h4>{name}</h4>

            <div className="cart-detail">
                <h5>{restroData.aggregatedDiscountInfoV3?.header}</h5>
                <h5>{avgRating}</h5>
                <h5>{restroData.availability?.opened ? 'open' : 'closed'}</h5>
            </div>
        </div>
    );
};

export default RestroCard