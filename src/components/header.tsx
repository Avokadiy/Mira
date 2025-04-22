import logo from '../assets/images/logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__menu">
                <img className="header__menu-logo" src={logo} alt="" />
                <div className="header__menu-links">
                    <ul className="header__menu-link">Product</ul>
                    <ul className="header__menu-link">Solutions</ul>
                    <ul className="header__menu-link">Resources</ul>
                    <ul className="header__menu-link">Enterprice</ul>
                    <ul className="header__menu-link">Pricing</ul>
                </div>

                <div>

                </div>
            </div>
        </header>
    )
}

export default Header