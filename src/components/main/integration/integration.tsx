import ImageWrapper from "../components/image-wrapper";
import Icon from "../components/icon";
import integration from "../../../assets/images/integration.png"
import arrowRight from "../../../assets/icons/arrowRight.svg"

function Integration() {
    return (
        <div className="integration">
            <ImageWrapper img={integration} />
            <div className="integration__content">
                <h2 className="integration__header">Connect <br /> your tools,<br/> close your tabs</h2>
                <p className="integration__text">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <a className="integration__link" href="javascript:void(0)">Learn more <Icon img={arrowRight} /></a>
            </div>
        </div>
     );
}

export default Integration;