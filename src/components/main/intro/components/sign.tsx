import arrowRight from '../../../../assets/icons/rightThinArrow.svg'
import fullStar from '../../../../assets/icons/fullStar.svg'
import halfStar from '../../../../assets/icons/halfStar.svg'
import g2Icon from '../../../../assets/icons/g2Icon.svg'
import getAppIcon from '../../../../assets/icons/getAppIcon.svg'
import capterraIcon from '../../../../assets/icons/capterraIcon.svg'
import Icon from '../../components/icon';

function Sign() {
    return (
        <div className="sign">
            <h2 className='sign__header'>Take ideas from better to best</h2>
            <p className='sign__description'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
            <input className='sign__input' type="text" placeholder="Enter your work email" />
            <button className="sign__button button">
                <span>Sign up free</span>
                <Icon img={arrowRight} />
            </button>
            <div className='sign__label'>
                <span>Collaborate with your team within minutes</span>
            </div>
            <div className='sign__footer'>
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
                    <Icon img={g2Icon} alt='G2' />
                    <Icon img={getAppIcon} alt='getApp' />
                    <Icon img={capterraIcon} alt='Capterra' />
                </div>
            </div>
        </div>
     );
}

export default Sign;