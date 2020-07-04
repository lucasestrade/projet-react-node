import React from 'react';
import useHome from "../../../hooks/useHome";

function ProductCard(props){

    const { selectors, actions } = useHome();

    function addPrice(el){
        if(el.target.dataset.seller === "Le vendeur 1" && selectors.getPriceSeller1() >= 0){
            actions.addPriceSeller1(el.target.dataset.price);
        }else if(el.target.dataset.seller === "Le vendeur 2" && selectors.getPriceSeller2() >= 0){
            actions.addPriceSeller2(el.target.dataset.price);
        }
        let display = document.getElementById("product-id-" + el.target.dataset.productid);
        display.innerHTML = parseInt(display.innerHTML) + 1;
    }

    function removePrice(el){
        let display = document.getElementById("product-id-" + el.target.dataset.productid);
        if(el.target.dataset.seller === "Le vendeur 1" && selectors.getPriceSeller1() > 0 && parseInt(display.innerHTML) > 0){
            actions.removePriceSeller1(el.target.dataset.price, el.target.dataset.seller);
        }else if(el.target.dataset.seller === "Le vendeur 2" && selectors.getPriceSeller2() > 0 && parseInt(display.innerHTML) > 0){
            actions.removePriceSeller2(el.target.dataset.price, el.target.dataset.seller);
        }
        if(parseInt(display.innerHTML) > 0){
            display.innerHTML = parseInt(display.innerHTML) - 1;
        }
    }

    return(
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
                <div className="flex align-center justify-center">
                    <input type="button" data-productid={props.id} data-price={props.price} data-seller={props.seller} value="-" onClick={removePrice} />
                        <div id={"product-id-" + props.id} >0</div>
                    <input type="button" data-productid={props.id} data-price={props.price} data-seller={props.seller} value="+" onClick={addPrice}/>
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
    )
}

export default ProductCard;