import React, { useEffect } from "react";
import HistoryLists from "../HistoryLists";
import useHistory from "../../../hooks/useHistory";

function ContentHistory() {

    const { selectors, actions } = useHistory();
    

    useEffect(() => {
    })

    return(
        <div className="history-card-content">
            {displayListHistory(selectors)}
        </div>
    )

}

function displayListHistory(selectors) {
    let history = selectors.getHistory();

    return history.map(history => {
        return (
            <HistoryLists
                id={history.idCommande} 
                date={history.date}
                price={history.price}
                status={history.status}
            />
        )
    })
}


export default ContentHistory;