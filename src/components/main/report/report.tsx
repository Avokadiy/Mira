import Icon from "../components/icon";
import rightThinArrow from "../../../assets/icons/rightThinArrow.svg"

function Report() {
    return (
        <div className="report">
            <div className="report__content">
                <h2 className="report__header">The Ways We Work</h2>
                <p className="report__text">How was our relationship with work changed?</p>
                <button className="report__button button">View the report <Icon img={rightThinArrow}/></button>
            </div>
        </div>
     );
}

export default Report;