function ImageWrapper(props: {img: string | undefined, alt?: string}) {

    return (
        <img className="image-wrapper" src={props.img} alt={props.alt} />
     );
}

export default ImageWrapper;