import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import FeaturesMain from "./components/featuresMain";

import Brainstorming from "../../../assets/images/featuresMain/Brainstorming.png"
import Diagramming from "../../../assets/images/featuresMain/Diagramming.jpg"
import Mapping from "../../../assets/images/featuresMain/Mapping.jpg"
import MeetingsWorkshops from "../../../assets/images/featuresMain/MeetingsWorkshops.jpg"
import ResearchDesign from "../../../assets/images/featuresMain/ResearchDesign.jpg"
import ScrumEvents from "../../../assets/images/featuresMain/ScrumEvents.jpg"
import StrategicPlanning from "../../../assets/images/featuresMain/StrategicPlanning.jpg"

function Features() {
    const components = [
        {
            id: 1,
            title:'Brainstorming',
            text:'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.',
            link:'javascript:void(0)',
            image: Brainstorming
        },
        {
            id: 2,
            title:'Diagramming',
            text:'Visualize complex processes and systems with intuitive diagrams. Use ready-made templates, arrows, flowcharts, and more to make information clear and engaging.',
            link:'javascript:void(0)',
            image: Diagramming
        },
        {
            id: 3,
            title:'Meetings & Workshops',
            text:'Run productive meetings and workshops with interactive boards, timers, polls, and notes. Collaborate in real time and make decisions faster.',
            link:'javascript:void(0)',
            image: MeetingsWorkshops
        },
        {
            id: 4,
            title:'Scrum Events',
            text:'Streamline Scrum ceremonies (Daily, Planning, Review, Retrospective) with flexible boards, timelines, and task trackers. Enhance Agile teamwork and track progress effortlessly.',
            link:'javascript:void(0)',
            image: ScrumEvents
        },
        {
            id: 5,
            title:'Mapping',
            text:'Create detailed maps of processes, user journeys, or strategies. Plot key points, connections, and stages to build a clear vision for any scenario.',
            link:'javascript:void(0)',
            image: Mapping
        },
        {
            id: 6,
            title:'Research & Design',
            text:'Gather and analyze data, prototype design concepts, and test ideas on interactive boards. Integrate research into development for better outcomes.',
            link:'javascript:void(0)',
            image: ResearchDesign
        },
        {
            id: 7,
            title:'Strategic Planning',
            text:'Develop long-term strategies, set priorities, and allocate resources using matrices, roadmaps, and SWOT analysis. Achieve goals systematically and transparently.',
            link:'javascript:void(0)',
            image: StrategicPlanning
        },
    ]

    const [info, setInfo] = useState(components[0]);

    return (
        <div className="features">
            <div className="features__header">
                <h2 className="features__title">Built for the way you work</h2>
                <div className="features__swiper">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={8}
                    >
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[0])}
                            >
                                Brainstorming
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[1])}
                            >
                                Diagramming
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[2])}
                            >
                                Meetings & Workshops
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[3])}
                            >
                                Scrum Events
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[4])}
                            >
                                Mapping
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[5])}
                            >
                                Research & Design
                            </button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <button
                                className="features__button"
                                onClick={() => setInfo(components[6])}
                            >
                                Strategic Planning
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="features__main">
                    <FeaturesMain data={info} />
                </div>
            </div>
        </div>
     )
}

export default Features;