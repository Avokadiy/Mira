import collaborationImage from '../../../assets/images/IntroImage.png'

function IntroImage() {
    return (
        <div className='image-wrapper'>
            <img className='image-wrapper__image' src={collaborationImage} alt="Изображение с показом работы сайта" />
        </div>
     );
}

export default IntroImage;