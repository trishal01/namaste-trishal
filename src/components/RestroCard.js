import { LOGO_URL } from '../utils/constant';
import { styleCard } from '../assets/styles'

const RestroCard = ({ restroData }) => {
    console.log({ restroData })
    const { name, price, ratings, status } = restroData;
    return (
        <div className="restro-card" style={styleCard}>
            <img
                alt="item-image"
                className="item-image"
                src={LOGO_URL}
            />
            {console.log(name)}
            <h4>{name}</h4>

            <div className="cart-detail">
                <h5>{price}</h5>
                <h5>{ratings}</h5>
                <h5>{status}</h5>
            </div>
        </div>
    );
};

export default RestroCard