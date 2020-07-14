import React from 'react';
import useListMerchant from "../../../hooks/useListMerchant";

function ListMerchant({merchant}) {
    const { selectors, actions } = useListMerchant();

    return (
        <div className="merchant-card">
            <div className="merchant-input">
                <div className="merchant-id">
                    <p>
                        Identifiant du marchand : {merchant.id}
                    </p>
                </div>
                <div className="merchant-name">
                    <p>
                        Nom du marchand : {merchant.name}
                    </p>
                </div>
                <div className="merchant-email">
                    <p>
                        Email du marchand : {merchant.email}
                    </p>
                </div>
            </div>
            { merchant.verify 
                ?
                    null
                :
                    <div className="merchant-button">
                        <button className="button-verify" onClick={() => actions.verifyMerchant(merchant.id)}> Verifier le marchand </button>
                    </div>
            }
            
        </div>
    )
}



export default ListMerchant;