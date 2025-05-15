import ImageWrapper from "../components/image-wrapper";
import hybridWork from "../../../assets/images/hybridWork.png"
import arrowRight from "../../../assets/icons/arrowRight.svg"
import Icon from "../components/icon";


function Accessibility() {
    return (
        <div className="accessibility">
            <div className="accessibility__content">
                <h2 className="accessibility__header">Work together, wherever you work</h2>
                <p className="accessibility__text">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <a className="accessibility__link" href="javascript:void(0)">Learn more <Icon img={arrowRight} /></a>
            </div>
            <ImageWrapper img={hybridWork} />
        </div>
     );
}

export default Accessibility;