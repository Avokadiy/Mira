import logo from '../../assets/images/logo.svg'
import arrowDown from '../../assets/icons/arrowDown.svg'
import worldIcon from '../../assets/icons/worldIcon.svg'
import rightThinArrow from '../../assets/icons/rightThinArrow.svg'
import Icon from './Icon'

function Header() {
    return (
        <header className="header">
            <nav className="header__menu">
                <a href="javascript:void(0);" className="header__logo logo">
                    <img
                        className="logo-image"
                        src={logo}
                        alt="Miro"
                    />
                </a>
                <ul className="header__menu-links">
                    <li className="header__link">
                        <span>Product</span>
                        <Icon img={arrowDown} />
                    </li>
                    <li className="header__link">
                        <span>Solutions</span>
                        <Icon img={arrowDown} />
                    </li>
                    <li className="header__link">
                        <span>Resources</span>
                        <Icon img={arrowDown} />
                    </li>
                    <li className="header__link">
                        <span>Enterprice</span>
                    </li>
                    <li className="header__link">
                        <span>Pricing</span>
                    </li>
                </ul>
            </nav>

            <div className="header__right">
                <ul className="header__right-links">
                    <li className="header__link">
                        <img className="header__link-image" src={worldIcon} alt="Иконка мира" />
                        <span>EN</span>
                    </li>
                    <li className="header__link">
                        <span>Contact Sales</span>
                    </li>
                    <li className="header__link">
                        <span>Login</span>
                    </li>
                </ul>
                <button className="button">
                    <span>Sign up free</span>
                    <img src={rightThinArrow} alt="Стрелка вправо" />
                </button>
            </div>
        </header>
    )
}

export default Header
