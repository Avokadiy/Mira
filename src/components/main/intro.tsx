import IntroImage from "./components/introImage";
import Sign from "./components/sign";

function Intro() {
    return (
        <div className="intro">
            <Sign />
            <IntroImage />
        </div>
    );
}

export default Intro;