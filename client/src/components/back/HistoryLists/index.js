import React from 'react';
import useHistory from "../../../hooks/useHistory";

function HistoryLists(props) {
    const { selectors, actions } = useHistory();

    return (
        <div className="history-card">
            <div className="history-input">
                <div className="history-id">
                    <p>
                        Identifiant de la commande : {props.id}
                    </p>
                </div>
                <div className="history-date">
                    <p>
                        Date de commande : {props.date}
                    </p>
                </div>
                <div className="history-price">
                    <p>
                        Panier total : {props.price} €
                </p>
                </div>
                <div className="history-status">
                    <p>
                        Status de la commande : {props.status}
                    </p>
                </div>
            </div>
            <div className="history-button">
                <button className="button-refund" onClick={() => actions.sendRefund(props.id)}> Rembourser </button>
            </div>
        </div>
    )
}



export default HistoryLists;