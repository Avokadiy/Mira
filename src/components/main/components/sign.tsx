import arrowRight from '../../../assets/icons/rightThinArrow.svg'
import fullStar from '../../../assets/icons/fullStar.svg'
import halfStar from '../../../assets/icons/halfStar.svg'
import g2Icon from '../../../assets/icons/g2Icon.svg'
import getAppIcon from '../../../assets/icons/getAppIcon.svg'
import capterraIcon from '../../../assets/icons/capterraIcon.svg'
import Icon from './icon';

function Sign() {
    return (
        <div className="sign">
            <h2 className='sign__header'>Take ideas from better to best</h2>
            <p className='sign__description'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
            <input className='sign__input' type="text" placeholder="Enter your work email" />
            <button className="sign__button button">
                <span>Sign up free</span>
                <img src={arrowRight} alt="" />
            </button>
            <div className='sign__inscription'>
                <span>Collaborate with your team within minutes</span>
            </div>
            <div className='sign__reviews-sponsors'>
                <div className='reviews'>
                    <div className='reviews__stars'>
                        <Icon img={fullStar} />
                        <Icon img={fullStar} />
                        <Icon img={fullStar} />
                        <Icon img={fullStar} />
                        <Icon img={halfStar} />
                    </div>
                    <div className='reviews__text'>
                        <span>Based on 5149+ reviews:</span>
                    </div>
                </div>
                <div className='sponsors'>
                    <img className='sponsors__image' src={g2Icon} alt="G2" />
                    <img className='sponsors__image' src={getAppIcon} alt="getApp" />
                    <img className='sponsors__image' src={capterraIcon} alt="Capterra" />
                </div>
            </div>
        </div>
     );
}

export default Sign;