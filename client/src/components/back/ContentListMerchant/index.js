import React, { useEffect } from "react";
import useListMerchant from "../../../hooks/useListMerchant";
import ListMerchant from "../ListMerchant";

function ContentListMerchant() {

    const { selectors, actions } = useListMerchant();

    useEffect(() => {
        actions.getMerchants();
    }, [])

    function displayListMerchant() {
        let listMerchant = selectors.getListMerchant();
    
        return listMerchant.map(merchant => {
            return (
                <ListMerchant
                    key={merchant.id} 
                    merchant={merchant}
                />
            )
        })
    }

    return(
        <div className="flex">
            {displayListMerchant()}
        </div>
    )

}


export default ContentListMerchant;