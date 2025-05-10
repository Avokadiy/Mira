function Icon(props: { img: string | undefined; }) {

    return (
        <img src={props.img} alt="" />
    );
}

export default Icon;