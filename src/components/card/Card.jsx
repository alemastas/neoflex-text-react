import './card'

function Card({props}){
    return (
        <>
        <div className="card_img">
            <img src={props.img} alt="headphones" />
        </div>
        <div className="card_line">
            <div className="card_name">
            <h3>
                {props.title}
            </h3>
            </div>
            <div className="card_price">
            <p className="regular colored plus_sized">
                {props.price} ₽
            </p>
            <p className="regular colored striked">
                {props.price + ((props.price / 100) * 15)} ₽
            </p>
            </div>
        </div>
        <div className="card_line">
            <div className="card_rate">
            <img src="../../Img/iconcs/Star.png" alt="star" />
            <span className="card_span">
                {props.rate}
            </span>
            </div>
            <button className="card_button">
            <span className="button_class_selector plus_sized" id={props.id}>
                {sessionStorage.getItem('lang') === 'rus' ? 'Купить' : 'Buy'}
            </span>
            </button>
        </div>
        </>

    )
}

export default Card;