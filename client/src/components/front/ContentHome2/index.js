import React, { useEffect } from "react";
import useHome from "../../../hooks/useHome";
import Loader from "../Loader";
import ProductCard from "../ProductCard";

function ContentHome2(){

    const { selectors, actions } = useHome();
    let isHomeLoaded = selectors.getHomeLoaded();

    useEffect(() => {
        if(!isHomeLoaded){
            actions.changeHomeLoaded(true);
        }
    })

    function onClickValidateBasket(el){
        actions.sendSeller2Basket(selectors.getPriceSeller2());
    }

    return(
        isHomeLoaded 
            ?(
                <>
                    <button className="cta" onClick={onClickValidateBasket}>Valider le panier</button>
                    <div className="product-cards-content flex justify-between">
                        {displayProductCards(selectors)}
                    </div>
                </>
            ):
                <Loader />
    )

}

function displayProductCards(selectors){
    let products = selectors.getProducts2();

    return products.map(product => {
        return (
            <ProductCard
                key={product.id} 
                id={product.id}
                name={product.name}
                description={product.description}
                date={product.date}
                background={product.background}
                price={product.price}
                quantity={product.quantity}
                seller={product.seller}
                reference={product.reference}
            />
        )
    })
}

export default ContentHome2;