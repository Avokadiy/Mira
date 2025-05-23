import Icon from "../../components/icon";
import arrowRight from "../../../../assets/icons/arrowRight.svg"

type TProps = {
    data: {
        id: number,
        title: string,
        link: string,
        text: string,
        image: string
    }
}

function featuresMain(props: TProps) {
    return (
        <div className="featuresMain">
            <div className="featuresMain__info">
                <h3 className="featuresMain__info-title">{props.data.title}</h3>
                <p className="featuresMain__info-text">{props.data.text}</p>
                <a className="featuresMain__info-link" href={props.data.link}>
                    <span>Learn more</span>
                    <Icon img={arrowRight} />
                </a>
            </div>
            <img className="featuresMain__image" src={props.data.image} alt={props.data.title} />
        </div>
     );
}

export default featuresMain;