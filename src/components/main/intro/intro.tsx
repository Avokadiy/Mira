import ImageWrapper from "../components/image-wrapper";
import IntroImage from "../../../assets/images/IntroImage.png"
import Sign from "./components/sign";

function Intro() {
    return (
        <div className="intro">
            <Sign />
            <span className="intro__right"><ImageWrapper img={IntroImage} alt='Изображение с показом работы сайта' /></span>
        </div>
    );
}

export default Intro;