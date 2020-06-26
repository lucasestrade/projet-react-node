import React from 'react';
import Redirect from '../Cta/Redirect';

function ProductCard(props){
    return(
        <Redirect title={props.name} to={"/product/" + props.id} card={true}>
            <div className="product-card">
                <div className="background background-product-card flex justify-end" 
                    style={{
                        backgroundImage: `url(${props.background})`
                    }}>
                    <div className="product-price flex align-center">
                        <label>
                            {props.price} €
                        </label>
                    </div>
                </div>
                <div className="content-product-card flex column">
                    <div className="product-name">
                        <p>
                             {props.name}
                        </p>
                    </div>
                    <div className="product-description">
                        <p>
                            {props.description}
                        </p>
                    </div>
                    <div className="bottom-product-card flex justify-between">
                        <div className="product-seller">
                            <label>
                                Vendeur : {props.seller}
                            </label>
                        </div>
                        <div className="product-quantity">
                            <label>
                                Qt : {props.quantity}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Redirect>
    )
}

export default ProductCard;