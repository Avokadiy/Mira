import ImageWrapper from "../components/image-wrapper";
import IntroImage from "../../../assets/images/IntroImage.png"
import Sign from "./components/sign";

function Intro() {
    return (
        <div className="intro">
            <Sign />
            <ImageWrapper img={IntroImage} alt={'Изображение с показом работы сайта'} />
        </div>
    );
}

export default Intro;