import Icon from "../components/icon";
import rigthThinArrow from "../../../assets/icons/rightThinArrow.svg"

function Advatages() {
    return (
        <div className="advantages">
            <p className="advantages__label">YOUR IDEA STARTS HERE</p>
            <h2 className="advantages__header">Collaborate without constraints</h2>
            <div className="advantages__items">
                <div className="advantages__item">
                    <p className="advantages__item-header">Free forever</p>
                    <p className="advantages__item-content">
                        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our
                        <a className="advantages__item-link" href="javascript:void(0)"> pricing plans </a>
                        for more features.
                    </p>
                </div>
                <div className="advantages__item">
                    <p className="advantages__item-header">Easy integrations</p>
                    <p className="advantages__item-content">
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our
                        <a className="advantages__item-link" href="javascript:void(0)"> Marketplace</a>.
                    </p>
                </div>
                <div className="advantages__item">
                    <p className="advantages__item-header">Security first</p>
                    <p className="advantages__item-content">
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our
                        <a className="advantages__item-link" href="javascript:void(0)"> Trust Center</a>.
                    </p>
                </div>
            </div>
            <button className="advantages__button button">
                <span>Sign up free</span>
                <Icon img={rigthThinArrow} />
            </button>
        </div>
     );
}

export default Advatages;