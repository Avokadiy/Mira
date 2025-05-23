function Icon(props: { img: string | undefined; alt?: string}) {
    return (
        <img src={props.img} alt={props.alt} />
     );
}

export default Icon;