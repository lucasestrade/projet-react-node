import React from 'react';

function HistoryLists(props) {
    return (
        <div className="history-card">
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
    )
}



export default HistoryLists;