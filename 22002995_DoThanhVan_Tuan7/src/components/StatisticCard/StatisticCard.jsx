import './StatisticCard.css';
import upper from '../../assets/images/upper.png';

function StatisticCard({item, bgClass, imageButton}) {
    return (
        <div className={`card-container ${bgClass}`}>
            <div className='card-content'>
                <span className='title'>{item.name}</span>
                <span className='money'>${item.statistics}</span>
                <div className='detail'>
                    <img src={upper}></img>
                    <p className='detail-content'><span>{item.detail}</span> period of change</p>
                </div>
            </div>
            <div className='cart-button'>
                <div><img src={imageButton}></img></div>
            </div>
        </div>
    );
}

export default StatisticCard;