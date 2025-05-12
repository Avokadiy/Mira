import Icon from "../components/icon";
import ciscoIcon from "../../../assets/icons/ciscoIcon.svg"
import deloitteIcon from "../../../assets/icons/deloitteIcon.svg"
import oktaIcon from "../../../assets/icons/oktaIcon.svg"
import volvoIcon from "../../../assets/icons/volvoIcon.svg"
import walmartIcon from "../../../assets/icons/walmartIcon.svg"

function Partners() {
    return (
        <div className="partners">
            <div className="partners__header">
                <p className="partners__header-text">Trusted by 45M+ users</p>
            </div>
            <div className="partners__list">
                <Icon img={walmartIcon} alt="Walmart" />
                <Icon img={ciscoIcon} alt="Cisco" />
                <Icon img={volvoIcon} alt="Volvo" />
                <Icon img={deloitteIcon} alt="Deloitte" />
                <Icon img={oktaIcon} alt="Okta" />
            </div>
        </div>
     );
}

export default Partners;