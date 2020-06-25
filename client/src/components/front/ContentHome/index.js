import React, { useEffect } from "react";
import useHome from "../../../hooks/useHome";
import Loader from "../Loader";

function ContentHome(){

    const { selectors, actions } = useHome();
    let isHomeLoaded = selectors.getHomeLoaded();

    useEffect(() => {
        if(!isHomeLoaded){
            actions.changeHomeLoaded(true);
        }
        //setTimeout(() => {
            //actions.changeHomeLoaded(true);
        //}, 2000)
    })

    return(
        isHomeLoaded 
            ?
                displayHome()
            :
                <Loader />
    )

}

function displayHome(){
    return(
        <div>
            tiens donc un produit
        </div>
    )
}

export default ContentHome;